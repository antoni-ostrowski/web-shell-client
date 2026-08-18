console.log("hello")


import { WTerm, WebSocketTransport } from "@wterm/dom";
import "@wterm/dom/css";

const el = document.getElementById("terminal")
const term = new WTerm(el, { cols: 80, rows: 24, cursorBlink: true, autoResize: true, });
await term.init();

const protocol = window.location.protocol === "https:" ? "wss:" : "ws:"
const wsUrl = `${protocol}//${window.location.host}/pty`




const ws = new WebSocketTransport({
	url: wsUrl,
	onData: (data) => {
		// console.log(data)
		const decoder = new TextDecoder("utf-8");
		const result = decoder.decode(data);

		// console.log(result); // Output: "Hello"


		term.write(data)
	},
});

ws.connect();
term.onData = (data) => {
	ws.send(JSON.stringify({
		type: "data",
		payload: data
	}))
}

const modifierKeysCodes = [
	'ControlLeft',
	'ControlRight',
	'AltLeft',
	'AltRight',
	'MetaRight',
	'MetaLeft',
	'ShiftLeft',
	'ShiftRight',
	'CapsLock',
];


window.addEventListener("keydown", (e) => {
	const keyCode = e.code
	if (modifierKeysCodes.includes(keyCode)) {
		e.preventDefault()
		console.log("found key:", keyCode)
		ws.send(JSON.stringify({
			type: "special_key",
			payload: keyCode
		}))
	}
})
