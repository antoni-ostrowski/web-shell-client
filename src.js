console.log("hello")

import { WTerm, WebSocketTransport } from "@wterm/dom";

const el = document.getElementById("terminal")
const term = new WTerm(el, { cols: 80, rows: 24 });
await term.init();

const ws = new WebSocketTransport({
	url: "ws://localhost:3000/pty",
	onData: (data) => term.write(data),
});

ws.connect();
term.onData = (data) => ws.send(data);
