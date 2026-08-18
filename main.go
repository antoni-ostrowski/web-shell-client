package main

import (
	"bytes"
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

type WsMsg struct {
	Type    string `json:"type"`
	Payload string `json:"payload,omitempty"`
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
	readSize := 32 * 1024
	batchSize := 16 * 1024
	flushEvery := 10 * time.Millisecond
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
				// if err := wsConn.WriteMessage(websocket.BinaryMessage, buf[:n]); err != nil {
				// 	return
				// }
			}
			if err != nil {
				slog.Error("failed to read from ptty:", err.Error(), nil)
				return
			}
		}
	}()

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
				slog.Info("got data msg", "payload", msg.Payload)
				_, _ = ptmx.Write([]byte(msg.Payload))
			case "special_key":
				slog.Info("got special key msg", "payload", msg.Payload)
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
