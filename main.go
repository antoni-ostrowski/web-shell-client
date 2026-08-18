package main

import (
	"log"
	"log/slog"
	"net/http"
	"os/exec"

	"github.com/creack/pty"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("./public")))

	http.HandleFunc("/pty", handleDirectPipe)

	slog.Info("web server on :3000\n")
	if err := http.ListenAndServe(":3000", nil); err != nil {
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

	cmd := exec.Command("/bin/bash", "--login")

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
		msgType, p, err := wsConn.ReadMessage()
		if err != nil {
			slog.Error("failed to read ws msg:", err.Error(), nil)
			break
		}
		if msgType == websocket.BinaryMessage || msgType == websocket.TextMessage {
			_, _ = ptmx.Write(p)
		}
	}

}
