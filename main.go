package main

import (
	"bytes"
	"encoding/json"
	"html/template"
	"io"
	"log"
	"log/slog"
	"net/http"
	"os"
	"time"

	"github.com/antoni-ostrowski/web-shell/internal/config"
	"github.com/gorilla/websocket"
	"golang.org/x/crypto/ssh"
	"golang.org/x/crypto/ssh/knownhosts"
)

const readSize = 32 * 1024
const batchSize = 16 * 1024
const flushEvery = 10 * time.Millisecond

type WsMsg struct {
	Type    string          `json:"type"`
	Payload json.RawMessage `json:"payload,omitempty"`
}
type ResizeMsgPayload struct {
	Cols int `json:"cols"`
	Rows int `json:"rows"`
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

var indexTempl = template.Must(template.ParseFiles("./public/index.html"))

func main() {
	c, err := config.Get()
	if err != nil {
		slog.Error("config: failed to load", "error", err)
		os.Exit(1)
	}
	c.Print()
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		c, err := config.Get()
		if err != nil {
			msg := "failed to get config"
			slog.Error(msg, "error", err)
			http.Error(w, msg, http.StatusInternalServerError)
		}
		if err := indexTempl.Execute(w, c.Servers); err != nil {
			msg := "failed execute template"
			slog.Error(msg, "error", err)
			http.Error(w, msg, http.StatusInternalServerError)
			return
		}

	})
	http.HandleFunc("/ssh/{name}", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./public/ssh.html")
	})
	http.HandleFunc("/connect/{name}", handleDirectPipe)

	slog.Info("web server on :3000\n")
	if err := http.ListenAndServe("0.0.0.0:3000", nil); err != nil {
		log.Fatalf("failed to start http server: %v\n", err)
		return
	}
}

func handleDirectPipe(w http.ResponseWriter, r *http.Request) {
	server, err := config.GetServer(r.PathValue("name"))
	slog.Info("server", "server", server, "path value", r.PathValue("name"))
	slog.Info("err", "err", err)
	if err != nil {
		msg := "failed to get server details"
		slog.Error(msg, "error", err)
		http.Error(w, msg, http.StatusBadRequest)
		return
	}
	wsConn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	defer wsConn.Close()
	knownHosts, err := knownhosts.New(knownHostsPath())
	if err != nil {
		slog.Error("failed to get ssh known hosts", "error", err)
		return
	}
	sshConfig := &ssh.ClientConfig{
		User: server.User,
		Auth: []ssh.AuthMethod{
			ssh.Password(server.Password),
		},
		HostKeyCallback:   knownHosts,
		HostKeyAlgorithms: []string{"ssh-ed25519"},
		Timeout:           10 * time.Second,
	}

	conn, err := ssh.Dial("tcp", server.Host+":22", sshConfig)
	if err != nil {
		slog.Error("failed to dial conn", "error", err)
		return
	}
	defer conn.Close()

	session, err := conn.NewSession()
	if err != nil {
		slog.Error("failed to open new session via ssh", "error", err)
		return
	}
	defer session.Close()

	modes := ssh.TerminalModes{
		ssh.ECHO:          1,
		ssh.TTY_OP_ISPEED: 1440,
		ssh.TTY_OP_OSPEED: 1440,
	}

	session.RequestPty("xterm-256color", 24, 80, modes)

	stdin, err := session.StdinPipe()
	if err != nil {
		return
	}

	stdout, err := session.StdoutPipe()
	if err != nil {
		slog.Error("failed to open stdout pipe", "error", err)
		return
	}

	stderr, err := session.StderrPipe()
	if err != nil {
		slog.Error("failed to open stderr pipe", "error", err)
		return
	}

	if err := session.Shell(); err != nil {
		slog.Error("failed to open shell", "error", err)
		return
	}

	go readBatchSend(stdout, wsConn)
	go readBatchSend(stderr, wsConn)

	// receiving and piping to ssh pipe
	go func() {
		for {
			var msg WsMsg
			err := wsConn.ReadJSON(&msg)
			if err != nil {
				slog.Error("failed to read ws msg:", err.Error(), nil)
				break
			}
			switch msg.Type {
			case "data":
				var payload string

				if err := json.Unmarshal(msg.Payload, &payload); err != nil {
					slog.Error("invalid data payload", "error", err)
					continue
				}

				slog.Info("got data msg", "payload", payload)

				if _, err := stdin.Write([]byte(payload)); err != nil {
					slog.Error("failed to write ssh session", "error", err)
				}
			case "special_key":
				var payload string
				_ = json.Unmarshal(msg.Payload, &payload)
				slog.Info("got special key msg", "payload", payload)

			case "resize":
				var payload ResizeMsgPayload
				_ = json.Unmarshal(msg.Payload, &payload)
				slog.Info("got resize msg", "payload", payload)
				if err := session.WindowChange(payload.Rows, payload.Cols); err != nil {
					slog.Error("failed to resize pty", "error", err)
				}
			}
		}
	}()

	if err := session.Wait(); err != nil {
		slog.Info("ssh session ended", "error", err)
	}
}

// reading from reader (stdout and stderr ssh pipes), batching and sending
func readBatchSend(source io.Reader, wsConn *websocket.Conn) {
	chunks := make(chan []byte, 16)

	go func() {
		defer close(chunks)
		buf := make([]byte, readSize)
		for {
			n, err := source.Read(buf)
			if n > 0 {
				chunk := make([]byte, n)
				copy(chunk, buf[:n])
				chunks <- chunk
			}
			if err != nil {
				slog.Error("failed to read reader:", "error", err)
				return
			}
		}
	}()

	ticker := time.NewTicker(flushEvery)
	defer ticker.Stop()
	var batch bytes.Buffer

	flush := func() error {
		if batch.Len() == 0 {
			return nil
		}
		err := wsConn.WriteMessage(websocket.BinaryMessage, batch.Bytes())
		batch.Reset()
		return err
	}

	for {
		select {
		case chunk, ok := <-chunks:
			if !ok {
				_ = flush()
				return
			}
			batch.Write(chunk)
			if batch.Len() >= batchSize {
				if err := flush(); err != nil {
					return
				}
			}
		case <-ticker.C:
			if err := flush(); err != nil {
				return
			}
		}

	}
}

func knownHostsPath() string {
	if p := os.Getenv("SSH_KNOWN_HOSTS"); p != "" {
		return p
	}
	return "/app/config/known_hosts"
}
