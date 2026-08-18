package main

import (
	"log"
	"log/slog"
	"net/http"
	"os"
	"os/exec"

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

	shellEnv := os.Getenv("SHELL")
	var cmd *exec.Cmd
	if shellEnv == "docker" {
		cmd = exec.Command(
			"ssh",
			"-tt",
			serverUser+"@host.docker.internal",
		)
		cmd.Env = append(os.Environ(), "TERM=xterm-256color")
	} else {
		cmd = exec.Command("/bin/zsh", "-l")
	}

	ptmx, err := pty.Start(cmd)
	if err != nil {
		slog.Error("failed to start pty:", err.Error(), nil)
		return
	}
	defer ptmx.Close()

	go func() {

		buf := make([]byte, 2048)
		for {
			n, err := ptmx.Read(buf)
			if n > 0 {
				if err := wsConn.WriteMessage(websocket.BinaryMessage, buf[:n]); err != nil {
					return
				}

			}
			if err != nil {
				slog.Error("failed to read from ptty:", err.Error(), nil)
				return
			}
		}
	}()

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

}
