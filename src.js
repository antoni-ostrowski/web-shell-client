import { WTerm, WebSocketTransport } from "@wterm/dom";
import "@wterm/dom/css";

const name = location.pathname.split("/").pop()
const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const wsUrl = `${protocol}//${window.location.host}/connect/${name}`;

const termElement = document.getElementById("terminal");
const term = new WTerm(termElement, { cols: 80, rows: 24, cursorBlink: true, autoResize: true });
await term.init();

const ws = new WebSocketTransport({
	url: wsUrl,
	onData: (data) => {
		term.write(data);
	},
});

ws.connect();

term.onData = (data) => {
	ws.send(
		JSON.stringify({
			type: "data",
			payload: data,
		}),
	);
};

term.onResize = (cols, rows) => {
	ws.send(
		JSON.stringify({
			type: "resize",
			payload: {
				cols,
				rows,
			},
		}),
	);
};

const modifierKeysCodes = [
	"ControlLeft",
	"ControlRight",
	"AltLeft",
	"AltRight",
	"MetaRight",
	"MetaLeft",
	"ShiftLeft",
	"ShiftRight",
	"CapsLock",
	"Escape",
];

const termTextAreaElement = document.querySelector("#terminal textarea");

termTextAreaElement.addEventListener("keydown", (e) => {
	const keyCode = e.code;
	console.log(keyCode);
	if (modifierKeysCodes.includes(keyCode)) {
		e.preventDefault();
		console.log("found key:", keyCode);
		ws.send(
			JSON.stringify({
				type: "special_key",
				payload: keyCode,
			}),
		);
	}
});
