package main

import (
	"bytes"
	"encoding/json"
	"log"
	"log/slog"
	"net/http"
	"os"
	"os/exec"
	"time"

	"github.com/creack/pty"
	"github.com/gorilla/websocket"
)

var serverUser = os.Getenv("SERVER_USER")

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

func main() {
	http.Handle("/", http.FileServer(http.Dir("./public")))

	http.HandleFunc("/pty", handleDirectPipe)

	slog.Info("web server on :3000\n")
	if err := http.ListenAndServe("0.0.0.0:3000", nil); err != nil {
		log.Fatalf("failed to start http server: %v\n", err)
		return
	}
}
func handleDirectPipe(w http.ResponseWriter, r *http.Request) {
	wsConn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	defer wsConn.Close()

	shellEnv := os.Getenv("SHELL_TYPE")
	var cmd *exec.Cmd
	if shellEnv == "docker" {
		cmd = exec.Command(
			"ssh",
			"-tt",
			serverUser+"@host.docker.internal",
		)
		cmd.Env = append(os.Environ(), "TERM=xterm-256color")
	} else {
		shell := os.Getenv("SHELL")
		if shell == "" {
			shell = "/bin/sh"
		}
		cmd = exec.Command(shell, "-l")
	}

	ptmx, err := pty.Start(cmd)
	if err != nil {
		slog.Error("failed to start pty:", err.Error(), nil)
		return
	}
	defer ptmx.Close()

	// receiving and piping to PTY
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

				if _, err := ptmx.Write([]byte(payload)); err != nil {
					slog.Error("failed to write to pty", "error", err)
				}
			case "special_key":
				var payload string
				_ = json.Unmarshal(msg.Payload, &payload)
				slog.Info("got special key msg", "payload", payload)

			case "resize":
				var payload ResizeMsgPayload
				_ = json.Unmarshal(msg.Payload, &payload)
				slog.Info("got resize msg", "payload", payload)
				if err := pty.Setsize(ptmx, &pty.Winsize{
					Cols: uint16(payload.Cols),
					Rows: uint16(payload.Rows),
				}); err != nil {
					slog.Error("failed to resize pty", "error", err)
				}
			}
		}
	}()

	// reading from PTY, batching and sending

	chunks := make(chan []byte, 16)

	go func() {
		defer close(chunks)
		buf := make([]byte, readSize)
		for {
			n, err := ptmx.Read(buf)
			if n > 0 {
				chunk := make([]byte, n)
				copy(chunk, buf[:n])
				chunks <- chunk
			}
			if err != nil {
				slog.Error("failed to read from ptty:", "error", err)
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
