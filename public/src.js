// node_modules/@wterm/core/dist/wasm-inline.js
var WASM_BASE64 = "AGFzbQEAAAABMAlgAAF/YAAAYAF/AX9gAX8AYAJ/fwBgBH9/f38AYAN/f38AYAJ/fwF/YAN/f38BfwM3NgAAAAAAAQAAAgIAAAAAAAAAAAAAAAAAAAAAAAEAAAMDBAQFBQUEBgcBBgEBBAgGBgQEAwAEBAQFAXABAQEFAwEAWgYJAX8BQYCAwAALB9sEJAZtZW1vcnkCAApnZXRNYXhDb2xzAAALZ2V0Q2VsbFNpemUAAQ5nZXREZWJ1Z0xvZ01heAACFGdldERlYnVnTG9nRW50cnlTaXplAAEQZ2V0RGVidWdMb2dDb3VudAADDmdldERlYnVnTG9nUHRyAAQNY2xlYXJSZXNwb25zZQAFDmdldFJlc3BvbnNlTGVuAAYOZ2V0UmVzcG9uc2VQdHIABxRnZXRTY3JvbGxiYWNrTGluZUxlbgAIEWdldFNjcm9sbGJhY2tMaW5lAAkSZ2V0U2Nyb2xsYmFja0NvdW50AAoPZ2V0VGl0bGVDaGFuZ2VkAAsLZ2V0VGl0bGVMZW4ADAtnZXRUaXRsZVB0cgANH2dldFN5bmNocm9uaXplZE91dHB1dEdlbmVyYXRpb24ADhVnZXRTeW5jaHJvbml6ZWRPdXRwdXQADw5nZXRGb2N1c0V2ZW50cwAQC2dldE1vdXNlU2dyABEQZ2V0TW91c2VUcmFja2luZwASEWdldFVzaW5nQWx0U2NyZWVuABMRZ2V0QnJhY2tldGVkUGFzdGUAFBBnZXRDdXJzb3JLZXlzQXBwABUHZ2V0Um93cwAWB2dldENvbHMAFxBnZXRDdXJzb3JWaXNpYmxlABgMZ2V0Q3Vyc29yQ29sABkMZ2V0Q3Vyc29yUm93ABoKY2xlYXJEaXJ0eQAbC2dldERpcnR5UHRyABwKZ2V0R3JpZFB0cgAdCndyaXRlQnl0ZXMAHg5nZXRXcml0ZUJ1ZmZlcgAzDnJlc2l6ZVRlcm1pbmFsADQEaW5pdAA1CtZ2NgUAQYACCwQAQQwLBABBIAsLAEEAKALwh8CAAAsIAEHMjvCAAAtJAQJ/AkBBAC8B1JHwgAAiAEUNAEEALwHgkfCAACIBQQA6APyT+IAAQQAgAEF/ajsB1JHwgABBACABQQFqQf8PcTsB4JHwgAALCysBAX9BACEAAkBBAC8B1JHwgABFDQBBAC8B4JHwgAAtAPyT+IAAIQAL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GzYC8IfAgAAgAkEQaiSAgICAAAt4AQJ/AkAgAEH//wNxIgJBAC8BwozwgABPDQAgAkGAGGxBwIzAgABqIQBBACEDAkADQCADQQAvAcCM8IAATw0BIAAgASkCADcCACAAQQhqIAFBCGooAgA2AgAgAEEMaiEAIANBAWohAwwACwsgAkEBOgDEjPCAAAsLsAIBA38CQCAAQf//A3EiBEEALwHCjPCAAE8NACABQf//A3EiBUEALwHAjPCAACIAIAUgAEkbIQECQCAFIAJB//8DcSIGIAAgBiAASRsiBk8NACABIARBgBhsQcCMwIAAaiIFIAFBDGxqLQAJRSABQf//A3FBAEdxayEBIAJB//8DcSAATw0AAkAgBSAGQQxsai0ACQ0AIAZBAWohBgwBCyAGIAUgBkF/akH//wNxQQxsai0ACUECRmohBgtBACAGQf//A3EiACABQf//A3EiAmsiASABIABLGyEBIARBgBhsIAJBDGxqQcCMwIAAaiEAAkADQCABRQ0BIAAgAykCADcCACAAQQhqIANBCGooAgA2AgAgAEEMaiEAIAFBf2ohAQwACwsgBEEBOgDEjPCAAAsL4QEBBH8CQCACQf//A3FFDQAgAUH//wNxIABB//8DcU0NACABIABrIgQgAkH//wNxIgIgBEH//wNxIgQgAiAESRsiBWtB//8DcSEGQQAhAgNAAkAgBiACRw0AIAUgAGpB//8DcSECA0AgAEH//wNxIAJPDQMgACADEKGAgIAAIABBAWohAAwACwsgASACQX9zaiIHQf//A3EhBAJAQYAYRQ0AIARBgBhsQcCMwIAAaiAHIAVrQf//A3FBgBhsQcCMwIAAakGAGPwKAAALIARBAToAxIzwgAAgAkEBaiECDAALCwvYAQEDfwJAIAJB//8DcUUNACABQf//A3EgAEH//wNxTQ0AIAJB//8DcSICIAEgAGtB//8DcSIEIAIgBEkbIgRBgBhsQcCMwIAAaiEFIAFB//8DcSEGIABB//8DcSIAQYAYbCECA0ACQCAEIABqIAZJDQADQCAAQf//A3EgAUH//wNxTw0DIAAgAxChgICAACAAQQFqIQAMAAsLAkBBgBhFDQAgAkHAjMCAAGogBSACakGAGPwKAAALIABBxIzwgABqQQE6AAAgAkGAGGohAiAAQQFqIQAMAAsLCysAAkAgAEH/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";

// node_modules/@wterm/core/dist/wasm-bridge.js
function decodeBase64(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0;i < binary.length; i++)
    bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

class WasmBridge {
  get dv() {
    if (this._dvBuffer !== this.memory.buffer) {
      this._dvBuffer = this.memory.buffer;
      this._dv = new DataView(this.memory.buffer);
    }
    return this._dv;
  }
  constructor(instance) {
    this.gridPtr = 0;
    this.dirtyPtr = 0;
    this.writeBufferPtr = 0;
    this.cellSize = 12;
    this.maxCols = 256;
    this.encoder = new TextEncoder;
    this.decoder = new TextDecoder;
    this._dvBuffer = null;
    this.exports = instance.exports;
    this.memory = this.exports.memory;
  }
  static async load(url) {
    let bytes;
    if (url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`[wterm] Failed to load WASM from ${url}: ${response.status} ${response.statusText}`);
      }
      bytes = await response.arrayBuffer();
    } else {
      bytes = decodeBase64(WASM_BASE64);
    }
    const { instance } = await WebAssembly.instantiate(bytes);
    return new WasmBridge(instance);
  }
  init(cols, rows) {
    this.exports.init(cols, rows);
    this._updatePointers();
  }
  _updatePointers() {
    this.gridPtr = this.exports.getGridPtr();
    this.dirtyPtr = this.exports.getDirtyPtr();
    this.writeBufferPtr = this.exports.getWriteBuffer();
    this.cellSize = this.exports.getCellSize();
    this.maxCols = this.exports.getMaxCols();
  }
  writeString(str, afterChunk) {
    const encoded = this.encoder.encode(str);
    this.writeRaw(encoded, afterChunk);
  }
  writeRaw(data, afterChunk) {
    let offset = 0;
    while (offset < data.length) {
      const chunk = Math.min(data.length - offset, 8192);
      const buf = new Uint8Array(this.memory.buffer, this.writeBufferPtr, 8192);
      buf.set(data.subarray(offset, offset + chunk));
      this.exports.writeBytes(chunk);
      offset += chunk;
      afterChunk?.();
    }
  }
  getCell(row, col) {
    const offset = this.gridPtr + (row * this.maxCols + col) * this.cellSize;
    const dv = this.dv;
    return {
      char: dv.getUint32(offset, true),
      fg: dv.getUint16(offset + 4, true),
      bg: dv.getUint16(offset + 6, true),
      flags: dv.getUint8(offset + 8),
      width: dv.getUint8(offset + 9)
    };
  }
  isDirtyRow(row) {
    return new Uint8Array(this.memory.buffer, this.dirtyPtr, 256)[row] !== 0;
  }
  clearDirty() {
    this.exports.clearDirty();
  }
  getCursor() {
    return {
      row: this.exports.getCursorRow(),
      col: this.exports.getCursorCol(),
      visible: this.exports.getCursorVisible() !== 0
    };
  }
  getCols() {
    return this.exports.getCols();
  }
  getRows() {
    return this.exports.getRows();
  }
  cursorKeysApp() {
    return this.exports.getCursorKeysApp() !== 0;
  }
  bracketedPaste() {
    return this.exports.getBracketedPaste() !== 0;
  }
  usingAltScreen() {
    return this.exports.getUsingAltScreen() !== 0;
  }
  mouseTracking() {
    const mode = this.exports.getMouseTracking();
    return mode === 1000 || mode === 1002 ? mode : 0;
  }
  mouseSgr() {
    return this.exports.getMouseSgr() !== 0;
  }
  focusEvents() {
    return this.exports.getFocusEvents() !== 0;
  }
  synchronizedOutput() {
    return this.exports.getSynchronizedOutput() !== 0;
  }
  synchronizedOutputGeneration() {
    return this.exports.getSynchronizedOutputGeneration();
  }
  getTitle() {
    if (this.exports.getTitleChanged() === 0)
      return null;
    const ptr = this.exports.getTitlePtr();
    const len = this.exports.getTitleLen();
    const bytes = new Uint8Array(this.memory.buffer, ptr, len);
    return this.decoder.decode(bytes);
  }
  getResponse() {
    const len = this.exports.getResponseLen();
    if (len === 0)
      return null;
    const ptr = this.exports.getResponsePtr();
    const bytes = new Uint8Array(this.memory.buffer, ptr, len);
    const str = this.decoder.decode(bytes);
    this.exports.clearResponse();
    return str;
  }
  getScrollbackCount() {
    return this.exports.getScrollbackCount();
  }
  getScrollbackCell(offset, col) {
    const ptr = this.exports.getScrollbackLine(offset);
    const off = ptr + col * this.cellSize;
    const dv = this.dv;
    return {
      char: dv.getUint32(off, true),
      fg: dv.getUint16(off + 4, true),
      bg: dv.getUint16(off + 6, true),
      flags: dv.getUint8(off + 8),
      width: dv.getUint8(off + 9)
    };
  }
  getScrollbackLineLen(offset) {
    return this.exports.getScrollbackLineLen(offset);
  }
  getUnhandledSequences() {
    const count = this.exports.getDebugLogCount();
    if (count === 0)
      return [];
    const ptr = this.exports.getDebugLogPtr();
    const entrySize = this.exports.getDebugLogEntrySize();
    const maxEntries = this.exports.getDebugLogMax();
    const total = Math.min(count, maxEntries);
    const dv = new DataView(this.memory.buffer);
    const entries = [];
    const startIdx = count >= maxEntries ? count % maxEntries : 0;
    for (let i = 0;i < total; i++) {
      const idx = (startIdx + i) % maxEntries;
      const off = ptr + idx * entrySize;
      const finalByte = dv.getUint8(off);
      if (finalByte === 0)
        continue;
      const privateByte = dv.getUint8(off + 1);
      const paramCount = dv.getUint8(off + 2);
      const params = [];
      for (let p = 0;p < Math.min(paramCount, 4); p++) {
        params.push(dv.getUint16(off + 4 + p * 2, true));
      }
      entries.push({
        final: String.fromCharCode(finalByte),
        private: privateByte ? String.fromCharCode(privateByte) : "",
        paramCount,
        params
      });
    }
    return entries;
  }
  resize(cols, rows) {
    this.exports.resizeTerminal(cols, rows);
    this._updatePointers();
  }
}
// node_modules/@wterm/core/dist/transport.js
class WebSocketTransport {
  constructor(options = {}) {
    this._ws = null;
    this._reconnectTimer = null;
    this._reconnectDelay = 1000;
    this._closed = false;
    this._buffer = [];
    this.url = options.url ?? null;
    this.reconnect = options.reconnect !== false;
    this.maxReconnectDelay = options.maxReconnectDelay ?? 30000;
    this.onData = options.onData ?? null;
    this.onOpen = options.onOpen ?? null;
    this.onClose = options.onClose ?? null;
    this.onError = options.onError ?? null;
  }
  connect(url) {
    if (url)
      this.url = url;
    if (!this.url)
      throw new Error("No WebSocket URL provided");
    this._closed = false;
    this._ws = new WebSocket(this.url);
    this._ws.binaryType = "arraybuffer";
    this._ws.onopen = () => {
      this._reconnectDelay = 1000;
      this._flushBuffer();
      if (this.onOpen)
        this.onOpen();
    };
    this._ws.onmessage = (event) => {
      if (this.onData) {
        if (event.data instanceof ArrayBuffer) {
          this.onData(new Uint8Array(event.data));
        } else {
          this.onData(event.data);
        }
      }
    };
    this._ws.onclose = () => {
      if (this.onClose)
        this.onClose();
      if (this.reconnect && !this._closed)
        this._scheduleReconnect();
    };
    this._ws.onerror = (event) => {
      if (this.onError)
        this.onError(event);
      this._ws?.close();
    };
  }
  send(data) {
    if (this._ws && this._ws.readyState === WebSocket.OPEN) {
      if (typeof data === "string") {
        this._ws.send(new TextEncoder().encode(data));
      } else {
        this._ws.send(data);
      }
    } else {
      this._buffer.push(data);
    }
  }
  close() {
    this._closed = true;
    if (this._reconnectTimer)
      clearTimeout(this._reconnectTimer);
    if (this._ws)
      this._ws.close();
  }
  get connected() {
    return this._ws !== null && this._ws.readyState === WebSocket.OPEN;
  }
  _flushBuffer() {
    const items = this._buffer.splice(0);
    for (const item of items) {
      this.send(item);
    }
  }
  _scheduleReconnect() {
    this._reconnectTimer = setTimeout(() => {
      this.connect();
    }, this._reconnectDelay);
    this._reconnectDelay = Math.min(this._reconnectDelay * 2, this.maxReconnectDelay);
  }
}
// node_modules/@wterm/dom/dist/renderer.js
var DEFAULT_COLOR = 256;
var FLAG_BOLD = 1;
var FLAG_DIM = 2;
var FLAG_ITALIC = 4;
var FLAG_UNDERLINE = 8;
var FLAG_REVERSE = 32;
var FLAG_INVISIBLE = 64;
var FLAG_STRIKETHROUGH = 128;
function rgbToCSS(packed) {
  const r = packed >> 16 & 255;
  const g = packed >> 8 & 255;
  const b = packed & 255;
  return `rgb(${r},${g},${b})`;
}
function colorToCSS(index) {
  if (index === DEFAULT_COLOR)
    return null;
  if (index < 16)
    return `var(--term-color-${index})`;
  if (index < 232) {
    const n = index - 16;
    const r = Math.floor(n / 36) * 51;
    const g = Math.floor(n / 6) % 6 * 51;
    const b = n % 6 * 51;
    return `rgb(${r},${g},${b})`;
  }
  const level = (index - 232) * 10 + 8;
  return `rgb(${level},${level},${level})`;
}
function cellFgCSS(fg, fgRgb) {
  if (fgRgb !== undefined)
    return rgbToCSS(fgRgb);
  return colorToCSS(fg);
}
function cellBgCSS(bg, bgRgb) {
  if (bgRgb !== undefined)
    return rgbToCSS(bgRgb);
  return colorToCSS(bg);
}
function buildCellStyle(fg, bg, flags, fgRgb, bgRgb) {
  let fgIdx = fg, bgIdx = bg, fgR = fgRgb, bgR = bgRgb;
  if (flags & FLAG_REVERSE) {
    const tmpIdx = fgIdx;
    fgIdx = bgIdx;
    bgIdx = tmpIdx;
    const tmpR = fgR;
    fgR = bgR;
    bgR = tmpR;
    if (fgR === undefined && fgIdx === DEFAULT_COLOR)
      fgIdx = 0;
    if (bgR === undefined && bgIdx === DEFAULT_COLOR)
      bgIdx = 7;
  }
  const fgCSS = cellFgCSS(fgIdx, fgR);
  const bgCSS = cellBgCSS(bgIdx, bgR);
  let style = "";
  if (fgCSS)
    style += `color:${fgCSS};`;
  if (bgCSS)
    style += `background:${bgCSS};`;
  if (flags & FLAG_BOLD)
    style += "font-weight:bold;";
  if (flags & FLAG_DIM)
    style += "opacity:0.5;";
  if (flags & FLAG_ITALIC)
    style += "font-style:italic;";
  const decorations = [];
  if (flags & FLAG_UNDERLINE)
    decorations.push("underline");
  if (flags & FLAG_STRIKETHROUGH)
    decorations.push("line-through");
  if (decorations.length)
    style += `text-decoration:${decorations.join(" ")};`;
  if (flags & FLAG_INVISIBLE)
    style += "visibility:hidden;";
  return style;
}
function escapeHTML(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function resolveColors(fg, bg, flags, fgRgb, bgRgb) {
  let fgIdx = fg, bgIdx = bg, fgR = fgRgb, bgR = bgRgb;
  if (flags & FLAG_REVERSE) {
    [fgIdx, bgIdx] = [bgIdx, fgIdx];
    [fgR, bgR] = [bgR, fgR];
    if (fgR === undefined && fgIdx === DEFAULT_COLOR)
      fgIdx = 0;
    if (bgR === undefined && bgIdx === DEFAULT_COLOR)
      bgIdx = 7;
  }
  return {
    fg: cellFgCSS(fgIdx, fgR) || "var(--term-fg)",
    bg: cellBgCSS(bgIdx, bgR) || "var(--term-bg)"
  };
}
var SNAP_1_8 = "round(calc(var(--term-row-height) * 0.125), 1px)";
var SNAP_2_8 = "round(calc(var(--term-row-height) * 0.25), 1px)";
var SNAP_3_8 = "round(calc(var(--term-row-height) * 0.375), 1px)";
var SNAP_4_8 = "round(calc(var(--term-row-height) * 0.5), 1px)";
var SNAP_5_8 = "round(calc(var(--term-row-height) * 0.625), 1px)";
var SNAP_6_8 = "round(calc(var(--term-row-height) * 0.75), 1px)";
var SNAP_7_8 = "round(calc(var(--term-row-height) * 0.875), 1px)";
function getBlockBackground(cp, fg, bg) {
  switch (cp) {
    case 9600:
      return `linear-gradient(${fg} ${SNAP_4_8},${bg} ${SNAP_4_8})`;
    case 9601:
      return `linear-gradient(${bg} ${SNAP_7_8},${fg} ${SNAP_7_8})`;
    case 9602:
      return `linear-gradient(${bg} ${SNAP_6_8},${fg} ${SNAP_6_8})`;
    case 9603:
      return `linear-gradient(${bg} ${SNAP_5_8},${fg} ${SNAP_5_8})`;
    case 9604:
      return `linear-gradient(${bg} ${SNAP_4_8},${fg} ${SNAP_4_8})`;
    case 9605:
      return `linear-gradient(${bg} ${SNAP_3_8},${fg} ${SNAP_3_8})`;
    case 9606:
      return `linear-gradient(${bg} ${SNAP_2_8},${fg} ${SNAP_2_8})`;
    case 9607:
      return `linear-gradient(${bg} ${SNAP_1_8},${fg} ${SNAP_1_8})`;
    case 9608:
      return fg;
    case 9609:
      return `linear-gradient(to right,${fg} 87.5%,${bg} 87.5%)`;
    case 9610:
      return `linear-gradient(to right,${fg} 75%,${bg} 75%)`;
    case 9611:
      return `linear-gradient(to right,${fg} 62.5%,${bg} 62.5%)`;
    case 9612:
      return `linear-gradient(to right,${fg} 50%,${bg} 50%)`;
    case 9613:
      return `linear-gradient(to right,${fg} 37.5%,${bg} 37.5%)`;
    case 9614:
      return `linear-gradient(to right,${fg} 25%,${bg} 25%)`;
    case 9615:
      return `linear-gradient(to right,${fg} 12.5%,${bg} 12.5%)`;
    case 9616:
      return `linear-gradient(to right,${bg} 50%,${fg} 50%)`;
    case 9617:
      return `color-mix(in srgb,${fg} 25%,${bg})`;
    case 9618:
      return `color-mix(in srgb,${fg} 50%,${bg})`;
    case 9619:
      return `color-mix(in srgb,${fg} 75%,${bg})`;
    case 9620:
      return `linear-gradient(${fg} ${SNAP_1_8},${bg} ${SNAP_1_8})`;
    case 9621:
      return `linear-gradient(to right,${bg} 87.5%,${fg} 87.5%)`;
    default: {
      const QUADRANTS = {
        9622: [false, false, true, false],
        9623: [false, false, false, true],
        9624: [true, false, false, false],
        9625: [true, false, true, true],
        9626: [true, false, false, true],
        9627: [true, true, true, false],
        9628: [true, true, false, true],
        9629: [false, true, false, false],
        9630: [false, true, true, false],
        9631: [false, true, true, true]
      };
      const q = QUADRANTS[cp];
      if (!q)
        return fg;
      const [tl, tr, bl, br] = q;
      if (tl && tr && bl && br)
        return fg;
      const layers = [];
      const POS = ["0 0", "100% 0", "0 100%", "100% 100%"];
      q.forEach((filled, i) => {
        if (filled)
          layers.push(`linear-gradient(${fg},${fg}) ${POS[i]}/50% 50% no-repeat`);
      });
      layers.push(bg);
      return layers.join(",");
    }
  }
}

class Renderer {
  constructor(container) {
    this.rows = 0;
    this.cols = 0;
    this.rowEls = [];
    this.prevCursorRow = -1;
    this.prevCursorCol = -1;
    this.prevContainerBg = "";
    this.prevRowBg = [];
    this._scrollbackRowEls = [];
    this._renderedScrollbackCount = 0;
    this.container = container;
  }
  setup(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.container.innerHTML = "";
    this.rowEls = [];
    this.prevRowBg = [];
    this._scrollbackRowEls = [];
    this._renderedScrollbackCount = 0;
    const fragment = document.createDocumentFragment();
    for (let r = 0;r < rows; r++) {
      const rowEl = document.createElement("div");
      rowEl.className = "term-row";
      fragment.appendChild(rowEl);
      this.rowEls.push(rowEl);
    }
    this.container.appendChild(fragment);
    this.prevCursorRow = -1;
    this.prevCursorCol = -1;
  }
  _buildRowContent(rowEl, getCell, lineLen, cursorCol, rowIndex) {
    let html = "";
    let runStyle = "";
    let runText = "";
    let runStart = 0;
    const flushRun = (endCol) => {
      if (!runText)
        return;
      const escaped = escapeHTML(runText);
      if (cursorCol >= runStart && cursorCol < endCol) {
        const offset = cursorCol - runStart;
        const chars = [...runText];
        const before = chars.slice(0, offset).join("");
        const cursorChar = chars[offset] || " ";
        const after = chars.slice(offset + 1).join("");
        if (before) {
          html += runStyle ? `<span style="${runStyle}">${escapeHTML(before)}</span>` : `<span>${escapeHTML(before)}</span>`;
        }
        html += runStyle ? `<span class="term-cursor" style="${runStyle}">${escapeHTML(cursorChar)}</span>` : `<span class="term-cursor">${escapeHTML(cursorChar)}</span>`;
        if (after) {
          html += runStyle ? `<span style="${runStyle}">${escapeHTML(after)}</span>` : `<span>${escapeHTML(after)}</span>`;
        }
      } else {
        html += runStyle ? `<span style="${runStyle}">${escaped}</span>` : `<span>${escaped}</span>`;
      }
    };
    const appendStyledSpan = (className, style, text) => {
      const classAttr = className ? ` class="${className}"` : "";
      const styleAttr = style ? ` style="${style}"` : "";
      html += `<span${classAttr}${styleAttr}>${escapeHTML(text)}</span>`;
    };
    for (let col = 0;col < this.cols; col++) {
      const cell = getCell(col);
      const inBounds = col < lineLen;
      const cp = inBounds ? cell.char : 0;
      const width = inBounds ? cell.width ?? 1 : 1;
      if (inBounds && width === 0) {
        flushRun(col);
        const continuesWide = col > 0 && (getCell(col - 1).width ?? 1) === 2;
        if (!continuesWide) {
          appendStyledSpan(col === cursorCol ? "term-cursor" : "", "", " ");
        }
        runStyle = "";
        runText = "";
        runStart = col + 1;
        continue;
      }
      if (inBounds && width === 2) {
        flushRun(col);
        if (col + 1 >= this.cols) {
          appendStyledSpan(col === cursorCol ? "term-cursor" : "", "", " ");
          runStyle = "";
          runText = "";
          runStart = col + 1;
          continue;
        }
        const ch = cp >= 32 ? String.fromCodePoint(cp) : " ";
        const style = buildCellStyle(cell.fg, cell.bg, cell.flags, cell.fgRgb, cell.bgRgb);
        const cls = cursorCol >= col && cursorCol < col + 2 ? "term-wide term-cursor" : "term-wide";
        appendStyledSpan(cls, style, ch);
        runStyle = "";
        runText = "";
        runStart = col + 2;
        continue;
      }
      if (inBounds && cp >= 9600 && cp <= 9631) {
        flushRun(col);
        const colors = resolveColors(cell.fg, cell.bg, cell.flags, cell.fgRgb, cell.bgRgb);
        const cls = col === cursorCol ? "term-block term-cursor" : "term-block";
        const bg = getBlockBackground(cp, colors.fg, colors.bg);
        const dim = cell.flags & FLAG_DIM ? "opacity:0.5;" : "";
        html += `<span class="${cls}" style="background:${bg};${dim}"></span>`;
        runStyle = "";
        runText = "";
        runStart = col + 1;
      } else {
        const ch = inBounds && cp >= 32 ? String.fromCodePoint(cp) : " ";
        const style = inBounds ? buildCellStyle(cell.fg, cell.bg, cell.flags, cell.fgRgb, cell.bgRgb) : "";
        if (style !== runStyle) {
          flushRun(col);
          runStyle = style;
          runText = ch;
          runStart = col;
        } else {
          runText += ch;
        }
      }
    }
    flushRun(this.cols);
    rowEl.innerHTML = html;
    let bgCss = "";
    if (lineLen >= this.cols && this.cols > 0) {
      const lastCell = getCell(this.cols - 1);
      let bgIdx = lastCell.bg;
      let bgR = lastCell.bgRgb;
      if (lastCell.flags & FLAG_REVERSE) {
        bgIdx = lastCell.fg;
        bgR = lastCell.fgRgb;
        if (bgR === undefined && bgIdx === DEFAULT_COLOR)
          bgIdx = 7;
      }
      bgCss = cellBgCSS(bgIdx, bgR) || "";
    }
    const boxShadow = bgCss ? `0 1px 0 ${bgCss}` : "";
    if (rowIndex >= 0) {
      if (bgCss !== (this.prevRowBg[rowIndex] ?? "")) {
        rowEl.style.background = bgCss;
        rowEl.style.boxShadow = boxShadow;
        this.prevRowBg[rowIndex] = bgCss;
      }
    } else {
      rowEl.style.background = bgCss;
      rowEl.style.boxShadow = boxShadow;
    }
  }
  _buildScrollbackRowEl(core, sbOffset) {
    const rowEl = document.createElement("div");
    rowEl.className = "term-row term-scrollback-row";
    const lineLen = core.getScrollbackLineLen(sbOffset);
    this._buildRowContent(rowEl, (col) => core.getScrollbackCell(sbOffset, col), lineLen, -1, -1);
    return rowEl;
  }
  syncScrollback(core) {
    const scrollbackCount = core.getScrollbackCount();
    if (scrollbackCount === this._renderedScrollbackCount)
      return;
    if (scrollbackCount > this._renderedScrollbackCount) {
      const newCount = scrollbackCount - this._renderedScrollbackCount;
      const firstGridRow = this.rowEls[0] ?? null;
      const fragment = document.createDocumentFragment();
      for (let i = newCount - 1;i >= 0; i--) {
        const rowEl = this._buildScrollbackRowEl(core, i);
        fragment.appendChild(rowEl);
        this._scrollbackRowEls.push(rowEl);
      }
      this.container.insertBefore(fragment, firstGridRow);
    } else {
      const removeCount = this._renderedScrollbackCount - scrollbackCount;
      for (let i = 0;i < removeCount; i++) {
        const el = this._scrollbackRowEls.shift();
        if (el)
          el.remove();
      }
    }
    this._renderedScrollbackCount = scrollbackCount;
  }
  render(core) {
    const rows = core.getRows();
    const cols = core.getCols();
    let resized = false;
    if (rows !== this.rows || cols !== this.cols) {
      this.setup(cols, rows);
      resized = true;
    }
    this.syncScrollback(core);
    const cursor = core.getCursor();
    const cursorVisible = cursor.visible;
    const needsCursorUpdate = cursor.row !== this.prevCursorRow || cursor.col !== this.prevCursorCol;
    for (let r = 0;r < this.rows; r++) {
      const isDirty = resized || core.isDirtyRow(r);
      const hadCursor = r === this.prevCursorRow && needsCursorUpdate;
      const hasCursor = r === cursor.row;
      if (isDirty || hadCursor || hasCursor && needsCursorUpdate) {
        const cCol = hasCursor && cursorVisible ? cursor.col : -1;
        this._buildRowContent(this.rowEls[r], (col) => core.getCell(r, col), this.cols, cCol, r);
      }
    }
    this.prevCursorRow = cursor.row;
    this.prevCursorCol = cursor.col;
    const lastRowDirty = resized || core.isDirtyRow(this.rows - 1);
    if (lastRowDirty) {
      const bottomRight = core.getCell(this.rows - 1, this.cols - 1);
      let gridBgIdx = bottomRight.bg;
      let gridBgRgb = bottomRight.bgRgb;
      if (bottomRight.flags & FLAG_REVERSE) {
        gridBgIdx = bottomRight.fg;
        gridBgRgb = bottomRight.fgRgb;
        if (gridBgRgb === undefined && gridBgIdx === DEFAULT_COLOR)
          gridBgIdx = 7;
      }
      const containerBg = cellBgCSS(gridBgIdx, gridBgRgb) || "";
      if (containerBg !== this.prevContainerBg) {
        this.container.style.background = containerBg;
        this.prevContainerBg = containerBg;
      }
    }
    core.clearDirty();
  }
}

// node_modules/@wterm/dom/dist/input.js
var NORMAL_KEYS = {
  ArrowUp: "\x1B[A",
  ArrowDown: "\x1B[B",
  ArrowRight: "\x1B[C",
  ArrowLeft: "\x1B[D",
  Home: "\x1B[H",
  End: "\x1B[F"
};
var APP_KEYS = {
  ArrowUp: "\x1BOA",
  ArrowDown: "\x1BOB",
  ArrowRight: "\x1BOC",
  ArrowLeft: "\x1BOD",
  Home: "\x1BOH",
  End: "\x1BOF"
};
var FIXED_KEYS = {
  Enter: "\r",
  Backspace: "",
  Tab: "\t",
  Escape: "\x1B",
  Insert: "\x1B[2~",
  Delete: "\x1B[3~",
  PageUp: "\x1B[5~",
  PageDown: "\x1B[6~",
  F1: "\x1BOP",
  F2: "\x1BOQ",
  F3: "\x1BOR",
  F4: "\x1BOS",
  F5: "\x1B[15~",
  F6: "\x1B[17~",
  F7: "\x1B[18~",
  F8: "\x1B[19~",
  F9: "\x1B[20~",
  F10: "\x1B[21~",
  F11: "\x1B[23~",
  F12: "\x1B[24~"
};

class InputHandler {
  constructor(element, onData, getBridge, getCellSize = () => null) {
    this.composing = false;
    this.mouseButtons = 0;
    this.focused = false;
    this.element = element;
    this.onData = onData;
    this.getBridge = getBridge;
    this.getCellSize = getCellSize;
    this.textarea = document.createElement("textarea");
    this.textarea.setAttribute("autocapitalize", "off");
    this.textarea.setAttribute("autocomplete", "off");
    this.textarea.setAttribute("autocorrect", "off");
    this.textarea.setAttribute("spellcheck", "false");
    this.textarea.setAttribute("enterkeyhint", "send");
    this.textarea.setAttribute("tabindex", "0");
    this.textarea.setAttribute("aria-hidden", "true");
    const s = this.textarea.style;
    s.position = "absolute";
    s.left = "-9999px";
    s.top = "0";
    s.width = "1px";
    s.height = "1px";
    s.opacity = "0";
    s.overflow = "hidden";
    s.border = "0";
    s.padding = "0";
    s.margin = "0";
    s.outline = "none";
    s.resize = "none";
    s.pointerEvents = "none";
    s.caretColor = "transparent";
    s.color = "transparent";
    s.background = "transparent";
    element.appendChild(this.textarea);
    this._onKeyDown = this.handleKeyDown.bind(this);
    this._onPaste = this.handlePaste.bind(this);
    this._onCompositionStart = this.handleCompositionStart.bind(this);
    this._onCompositionEnd = this.handleCompositionEnd.bind(this);
    this._onInput = this.handleInput.bind(this);
    this._onFocus = () => {
      if (this.focused)
        return;
      this.focused = true;
      this.element.classList.add("focused");
      if (this.getBridge()?.focusEvents?.())
        this.onData("\x1B[I");
    };
    this._onBlur = () => {
      this.focused = false;
      this.element.classList.remove("focused");
      this.stopMouseCapture();
      if (this.getBridge()?.focusEvents?.())
        this.onData("\x1B[O");
    };
    this._onMouseDown = (event) => this.handleMouse(event, "press");
    this._onMouseMove = (event) => {
      if (this.mouseButtons !== 0)
        this.handleMouse(event, "move");
    };
    this._onMouseUp = (event) => {
      if (this.mouseButtons === 0)
        return;
      this.handleMouse(event, "release");
      this.mouseButtons = event.buttons & 7;
      if (this.mouseButtons === 0)
        this.stopMouseCapture();
    };
    this._onWheel = (event) => this.handleMouse(event, "wheel");
    this.textarea.addEventListener("keydown", this._onKeyDown);
    this.textarea.addEventListener("paste", this._onPaste);
    this.textarea.addEventListener("compositionstart", this._onCompositionStart);
    this.textarea.addEventListener("compositionend", this._onCompositionEnd);
    this.textarea.addEventListener("input", this._onInput);
    this.textarea.addEventListener("focus", this._onFocus);
    this.textarea.addEventListener("blur", this._onBlur);
    this.element.addEventListener("mousedown", this._onMouseDown);
    this.element.addEventListener("wheel", this._onWheel, { passive: false });
  }
  focus() {
    this.textarea.focus({ preventScroll: true });
  }
  destroy() {
    this.textarea.removeEventListener("keydown", this._onKeyDown);
    this.textarea.removeEventListener("paste", this._onPaste);
    this.textarea.removeEventListener("compositionstart", this._onCompositionStart);
    this.textarea.removeEventListener("compositionend", this._onCompositionEnd);
    this.textarea.removeEventListener("input", this._onInput);
    this.textarea.removeEventListener("focus", this._onFocus);
    this.textarea.removeEventListener("blur", this._onBlur);
    this.element.removeEventListener("mousedown", this._onMouseDown);
    this.stopMouseCapture();
    this.element.removeEventListener("wheel", this._onWheel);
    this.element.classList.remove("focused");
    this.textarea.remove();
  }
  handleKeyDown(e) {
    if (this.composing)
      return;
    if ((e.metaKey || e.ctrlKey) && e.key === "c") {
      const sel = window.getSelection();
      if (sel && sel.toString().length > 0)
        return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "v") {
      this.textarea.focus();
      return;
    }
    if (e.metaKey && !e.ctrlKey) {
      if (e.key === "Backspace") {
        e.preventDefault();
        this.onData("\x15");
      } else if (e.key === "a") {
        e.preventDefault();
        const sel = window.getSelection();
        if (sel) {
          const range = document.createRange();
          range.selectNodeContents(this.element);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
      return;
    }
    e.preventDefault();
    const seq = this.keyToSequence(e);
    if (seq)
      this.onData(seq);
  }
  handlePaste(e) {
    e.preventDefault();
    const text = e.clipboardData?.getData("text");
    if (!text)
      return;
    const bridge = this.getBridge();
    if (bridge && bridge.bracketedPaste()) {
      const safe = text.replace(/\x1b/g, "");
      this.onData("\x1B[200~" + safe + "\x1B[201~");
    } else {
      this.onData(text);
    }
  }
  handleCompositionStart() {
    this.composing = true;
  }
  handleCompositionEnd(e) {
    this.composing = false;
    if (e.data)
      this.onData(e.data);
    this.textarea.value = "";
  }
  handleInput() {
    if (this.composing)
      return;
    const value = this.textarea.value;
    if (value) {
      this.onData(value);
      this.textarea.value = "";
    }
  }
  handleMouse(event, kind) {
    const bridge = this.getBridge();
    const tracking = bridge?.mouseTracking?.() ?? 0;
    if (!bridge || tracking === 0 || !bridge.mouseSgr?.())
      return;
    if (kind === "press" && (event.shiftKey || event.button > 2))
      return;
    if (kind === "release" && event.button > 2)
      return;
    const supportedButtons = event.buttons & 7;
    if (kind === "move" && (tracking !== 1002 || supportedButtons === 0)) {
      return;
    }
    const view = this.element.ownerDocument.defaultView;
    if (!view)
      return;
    const viewportRow = this.element.querySelector(".term-row:not(.term-scrollback-row)");
    const hostRect = this.element.getBoundingClientRect();
    const rowRect = viewportRow?.getBoundingClientRect();
    const cellSize = this.getCellSize();
    let left;
    let top;
    let charWidth;
    let rowHeight;
    if (rowRect && cellSize) {
      left = rowRect.left;
      top = rowRect.top;
      charWidth = cellSize.charWidth;
      rowHeight = cellSize.rowHeight;
    } else {
      const style = view.getComputedStyle(this.element);
      const borderLeft = parseFloat(style.borderLeftWidth) || 0;
      const borderRight = parseFloat(style.borderRightWidth) || 0;
      const borderTop = parseFloat(style.borderTopWidth) || 0;
      const borderBottom = parseFloat(style.borderBottomWidth) || 0;
      const paddingLeft = parseFloat(style.paddingLeft) || 0;
      const paddingRight = parseFloat(style.paddingRight) || 0;
      const paddingTop = parseFloat(style.paddingTop) || 0;
      const paddingBottom = parseFloat(style.paddingBottom) || 0;
      left = rowRect?.left ?? hostRect.left + borderLeft + paddingLeft;
      top = rowRect?.top ?? hostRect.top + borderTop + paddingTop;
      charWidth = (hostRect.width - borderLeft - borderRight - paddingLeft - paddingRight) / bridge.getCols();
      rowHeight = (hostRect.height - borderTop - borderBottom - paddingTop - paddingBottom) / bridge.getRows();
    }
    if (charWidth <= 0 || rowHeight <= 0)
      return;
    if (kind === "press") {
      this.textarea.focus({ preventScroll: true });
      if (!this.focused)
        this._onFocus();
      this.mouseButtons = supportedButtons || (event.button === 1 ? 4 : event.button === 2 ? 2 : 1);
      view.addEventListener("mousemove", this._onMouseMove);
      view.addEventListener("mouseup", this._onMouseUp);
    }
    const col = Math.max(1, Math.min(bridge.getCols(), Math.floor((event.clientX - left) / charWidth) + 1));
    const row = Math.max(1, Math.min(bridge.getRows(), Math.floor((event.clientY - top) / rowHeight) + 1));
    const modifiers = (event.shiftKey ? 4 : 0) | (event.altKey ? 8 : 0) | (event.ctrlKey ? 16 : 0);
    let code;
    let final = "M";
    if (kind === "wheel") {
      const wheel = event;
      if (Math.abs(wheel.deltaX) > Math.abs(wheel.deltaY)) {
        if (wheel.deltaX === 0)
          return;
        code = (wheel.deltaX < 0 ? 66 : 67) | modifiers;
      } else {
        if (wheel.deltaY === 0)
          return;
        code = (wheel.deltaY < 0 ? 64 : 65) | modifiers;
      }
    } else {
      const button = kind === "move" ? supportedButtons & 4 ? 1 : supportedButtons & 2 ? 2 : 0 : event.button === 1 ? 1 : event.button === 2 ? 2 : 0;
      code = button | modifiers | (kind === "move" ? 32 : 0);
      if (kind === "release")
        final = "m";
    }
    event.preventDefault();
    this.onData(`\x1B[<${code};${col};${row}${final}`);
  }
  stopMouseCapture() {
    this.mouseButtons = 0;
    const view = this.element.ownerDocument.defaultView;
    view?.removeEventListener("mousemove", this._onMouseMove);
    view?.removeEventListener("mouseup", this._onMouseUp);
  }
  keyToSequence(e) {
    if (e.ctrlKey && !e.altKey && !e.metaKey) {
      if (e.key.length === 1) {
        const code = e.key.toLowerCase().charCodeAt(0);
        if (code >= 97 && code <= 122)
          return String.fromCharCode(code - 96);
      }
      if (e.key === "[")
        return "\x1B";
      if (e.key === "\\")
        return "\x1C";
      if (e.key === "]")
        return "\x1D";
      if (e.key === "^")
        return "\x1E";
      if (e.key === "_")
        return "\x1F";
    }
    if (e.key === "Enter" && e.shiftKey)
      return "\x1B[13;2u";
    if (e.key === "Tab" && e.shiftKey)
      return "\x1B[Z";
    const fixed = FIXED_KEYS[e.key];
    if (fixed)
      return e.altKey ? "\x1B" + fixed : fixed;
    const bridge = this.getBridge();
    const appMode = bridge && bridge.cursorKeysApp();
    const navMap = appMode ? APP_KEYS : NORMAL_KEYS;
    const nav = navMap[e.key];
    if (nav)
      return e.altKey ? "\x1B" + nav : nav;
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      return e.altKey ? "\x1B" + e.key : e.key;
    }
    return null;
  }
}

// node_modules/@wterm/dom/dist/debug.js
var FLAG_NAMES = {
  1: "bold",
  2: "dim",
  4: "italic",
  8: "underline",
  16: "blink",
  32: "reverse",
  64: "invisible",
  128: "strikethrough"
};
function flagsToNames(flags) {
  const names = [];
  for (const [bit, name] of Object.entries(FLAG_NAMES)) {
    if (flags & Number(bit))
      names.push(name);
  }
  return names;
}
var ESC = 27;
function scanSequences(data) {
  const entries = [];
  const ts = Date.now();
  let i = 0;
  let textStart = 0;
  const flushText = () => {
    if (i > textStart) {
      const raw = data.slice(textStart, i);
      if (raw.length > 0 && !/^[\x00-\x1f]+$/.test(raw)) {
        entries.push({ ts, type: "text", raw: raw.slice(0, 60) });
      }
    }
  };
  while (i < data.length) {
    if (data.charCodeAt(i) !== ESC) {
      i++;
      continue;
    }
    flushText();
    const seqStart = i;
    i++;
    if (i >= data.length)
      break;
    const next = data[i];
    if (next === "[") {
      i++;
      let priv = "";
      if (i < data.length && (data[i] === "?" || data[i] === ">" || data[i] === "!")) {
        priv = data[i];
        i++;
      }
      let paramStr = "";
      while (i < data.length && (data.charCodeAt(i) >= 48 && data.charCodeAt(i) <= 59 || data[i] === ":")) {
        paramStr += data[i];
        i++;
      }
      while (i < data.length && data.charCodeAt(i) >= 32 && data.charCodeAt(i) <= 47) {
        i++;
      }
      let final = "";
      if (i < data.length && data.charCodeAt(i) >= 64 && data.charCodeAt(i) <= 126) {
        final = data[i];
        i++;
      }
      const raw = data.slice(seqStart, i);
      const params = paramStr ? paramStr.split(/[;:]/).map(Number).filter((n) => !isNaN(n)) : [];
      const type = final === "m" ? "sgr" : "csi";
      entries.push({
        ts,
        type,
        raw,
        params: params.length > 0 ? params : undefined,
        private: priv || undefined,
        final
      });
    } else if (next === "]") {
      i++;
      while (i < data.length && data.charCodeAt(i) !== 7 && !(data.charCodeAt(i) === ESC && i + 1 < data.length && data[i + 1] === "\\")) {
        i++;
      }
      if (i < data.length) {
        if (data.charCodeAt(i) === 7)
          i++;
        else if (data.charCodeAt(i) === ESC)
          i += 2;
      }
      const raw = data.slice(seqStart, i);
      entries.push({ ts, type: "osc", raw: raw.slice(0, 80) });
    } else if (next >= " " && next <= "~") {
      i++;
      entries.push({
        ts,
        type: "esc",
        raw: data.slice(seqStart, i),
        final: next
      });
    } else {
      i++;
    }
    textStart = i;
  }
  flushText();
  return entries;
}
var MAX_TRACES = 500;

class DebugAdapter {
  constructor() {
    this._traces = [];
    this._bridge = null;
    this._perf = {
      frameCount: 0,
      totalRenderMs: 0,
      avgRenderMs: 0,
      maxRenderMs: 0,
      lastDirtyRows: 0
    };
  }
  get traces() {
    return this._traces;
  }
  get perf() {
    return this._perf;
  }
  setBridge(bridge) {
    this._bridge = bridge;
  }
  traceWrite(data) {
    const str = typeof data === "string" ? data : new TextDecoder().decode(data);
    const entries = scanSequences(str);
    for (const entry of entries) {
      this._traces.push(entry);
    }
    if (this._traces.length > MAX_TRACES) {
      this._traces = this._traces.slice(-MAX_TRACES);
    }
  }
  recordRender(renderMs, dirtyRows) {
    this._perf.frameCount++;
    this._perf.totalRenderMs += renderMs;
    this._perf.avgRenderMs = this._perf.totalRenderMs / this._perf.frameCount;
    if (renderMs > this._perf.maxRenderMs) {
      this._perf.maxRenderMs = renderMs;
    }
    this._perf.lastDirtyRows = dirtyRows;
  }
  resetPerf() {
    this._perf = {
      frameCount: 0,
      totalRenderMs: 0,
      avgRenderMs: 0,
      maxRenderMs: 0,
      lastDirtyRows: 0
    };
  }
  cell(row, col) {
    if (!this._bridge)
      return null;
    const c = this._bridge.getCell(row, col);
    return {
      ...c,
      charStr: c.char >= 32 ? String.fromCodePoint(c.char) : "",
      flagNames: flagsToNames(c.flags)
    };
  }
  row(row) {
    if (!this._bridge)
      return null;
    const cols = this._bridge.getCols();
    const cells = [];
    for (let c = 0;c < cols; c++) {
      cells.push(this.cell(row, c));
    }
    return cells;
  }
  grid() {
    if (!this._bridge)
      return null;
    const cursor = this._bridge.getCursor();
    return {
      rows: this._bridge.getRows(),
      cols: this._bridge.getCols(),
      cursor,
      altScreen: this._bridge.usingAltScreen(),
      scrollbackCount: this._bridge.getScrollbackCount()
    };
  }
  unhandled() {
    if (!this._bridge)
      return [];
    return this._bridge.getUnhandledSequences();
  }
  dump(count = 50) {
    const entries = this._traces.slice(-count);
    console.group(`%cwterm debug — last ${entries.length} traces`, "color: #569cd6; font-weight: bold");
    for (const e of entries) {
      const badge = e.type === "sgr" ? "%cSGR" : e.type === "csi" ? "%cCSI" : e.type === "osc" ? "%cOSC" : e.type === "esc" ? "%cESC" : "%cTXT";
      const color = e.type === "sgr" ? "background:#2d5a27;color:#fff;padding:1px 4px;border-radius:2px" : e.type === "csi" ? "background:#1e4a7a;color:#fff;padding:1px 4px;border-radius:2px" : "background:#555;color:#fff;padding:1px 4px;border-radius:2px";
      const detail = [
        e.private ? `private=${e.private}` : "",
        e.params ? `params=[${e.params}]` : "",
        e.final ? `final=${e.final}` : ""
      ].filter(Boolean).join(" ");
      console.log(`${badge} ${e.raw.slice(0, 40)}`, color, detail ? `  ${detail}` : "");
    }
    console.groupEnd();
  }
  dumpUnhandled() {
    const entries = this.unhandled();
    if (entries.length === 0) {
      console.log("%cwterm debug — no unhandled sequences", "color: #6a9955");
      return;
    }
    console.group(`%cwterm debug — ${entries.length} unhandled sequences`, "color: #d7ba7d; font-weight: bold");
    for (const e of entries) {
      console.log(`  final=${e.final} private=${e.private || "-"} params=[${e.params.slice(0, e.paramCount)}]`);
    }
    console.groupEnd();
  }
}

// node_modules/@wterm/dom/dist/wterm.js
var SYNCHRONIZED_OUTPUT_TIMEOUT_MS = 1000;

class WTerm {
  constructor(element, options = {}) {
    this.bridge = null;
    this.debug = null;
    this.renderer = null;
    this.input = null;
    this.rafId = null;
    this._renderTimer = null;
    this._synchronizedOutputTimer = null;
    this._synchronizedOutputState = "idle";
    this._synchronizedOutputGeneration = 0;
    this._rendererNeedsSetup = false;
    this.resizeObserver = null;
    this._destroyed = false;
    this._shouldScrollToBottom = false;
    this._rowHeight = 0;
    this._charWidth = 0;
    this.element = element;
    this._coreOption = options.core;
    this.wasmUrl = options.wasmUrl;
    this.cols = options.cols || 80;
    this.rows = options.rows || 24;
    this.autoResize = options.autoResize !== false;
    this._debugEnabled = options.debug ?? false;
    this.onData = options.onData || null;
    this.onTitle = options.onTitle || null;
    this.onResize = options.onResize || null;
    this._container = document.createElement("div");
    this._container.className = "term-grid";
    this.element.appendChild(this._container);
    this.element.classList.add("wterm");
    if (options.cursorBlink)
      this.element.classList.add("cursor-blink");
    this._onClickFocus = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed)
        this.input?.focus();
    };
    this.element.addEventListener("click", this._onClickFocus);
  }
  async init() {
    try {
      if (this._coreOption) {
        this.bridge = this._coreOption;
      } else {
        this.bridge = await WasmBridge.load(this.wasmUrl);
      }
      if (this._destroyed)
        return this;
      this.bridge.init(this.cols, this.rows);
      if (this._debugEnabled) {
        this.debug = new DebugAdapter;
        this.debug.setBridge(this.bridge);
        globalThis.__wterm = this;
      }
      this._setRowHeight();
      this._measureCharSize();
      this.renderer = new Renderer(this._container);
      this.renderer.setup(this.cols, this.rows);
      this.input = new InputHandler(this.element, (data) => {
        this._scrollToBottom();
        if (this.onData) {
          this.onData(data);
        } else {
          this.write(data);
        }
      }, () => this.bridge, () => this._charWidth > 0 && this._rowHeight > 0 ? { charWidth: this._charWidth, rowHeight: this._rowHeight } : null);
      if (this.autoResize) {
        this._setupResizeObserver();
      } else {
        this._lockHeight();
      }
      this.input.focus();
      this._initialRender();
    } catch (err) {
      this.destroy();
      throw new Error(`wterm: failed to initialize: ${err instanceof Error ? err.message : err}`);
    }
    return this;
  }
  _isScrolledToBottom() {
    const el = this.element;
    return el.scrollHeight - el.scrollTop - el.clientHeight < 5;
  }
  _scrollToBottom() {
    const el = this.element;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) {
      el.scrollTop = 0;
      return;
    }
    const rh = this._rowHeight || 17;
    el.scrollTop = Math.floor(maxScroll / rh) * rh;
  }
  write(data) {
    if (!this.bridge)
      return;
    if (this.debug)
      this.debug.traceWrite(data);
    this._shouldScrollToBottom = this._isScrolledToBottom();
    let deliveryError;
    let hasDeliveryError = false;
    const drain = () => {
      const result = this._drainResponses();
      if (!hasDeliveryError && result.hasError) {
        hasDeliveryError = true;
        deliveryError = result.error;
      }
    };
    if (typeof data === "string") {
      this.bridge.writeString(data, drain);
    } else {
      this.bridge.writeRaw(data, drain);
    }
    const synchronized = this.bridge.synchronizedOutput?.() ?? false;
    const generation = this.bridge.synchronizedOutputGeneration?.() ?? 0;
    this._updateSynchronizedOutput(synchronized, generation);
    if (this._synchronizedOutputState !== "held") {
      this._setupRendererIfNeeded();
      this._scheduleRender();
    }
    drain();
    if (hasDeliveryError)
      throw deliveryError;
  }
  resize(cols, rows) {
    if (!this.bridge)
      return;
    this._shouldScrollToBottom = this._isScrolledToBottom();
    this.cols = cols;
    this.rows = rows;
    this.bridge.resize(cols, rows);
    const synchronized = this.bridge.synchronizedOutput?.() ?? false;
    const generation = this.bridge.synchronizedOutputGeneration?.() ?? 0;
    if (this._updateSynchronizedOutput(synchronized, generation)) {
      this._rendererNeedsSetup = true;
    } else {
      this.renderer?.setup(cols, rows);
      this._scheduleRender();
    }
    if (this.onResize)
      this.onResize(cols, rows);
  }
  focus() {
    if (this.input) {
      this.input.focus();
    } else {
      this.element.focus();
    }
  }
  _scheduleRender() {
    if (this._renderTimer != null)
      return;
    this._renderTimer = setTimeout(() => {
      this._renderTimer = null;
      if (this.rafId == null) {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = null;
          this._doRender();
        });
      }
    }, 0);
  }
  _cancelScheduledRender() {
    if (this._renderTimer != null) {
      clearTimeout(this._renderTimer);
      this._renderTimer = null;
    }
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
  _updateSynchronizedOutput(synchronized, generation) {
    if (!synchronized) {
      if (this._synchronizedOutputState === "held") {
        this._cancelSynchronizedOutputFallback();
      }
      this._synchronizedOutputState = "idle";
      return false;
    }
    if (this._synchronizedOutputState === "held" && generation !== this._synchronizedOutputGeneration) {
      this._armSynchronizedOutputFallback(generation);
      return true;
    } else if (this._synchronizedOutputState === "passthrough" && generation !== this._synchronizedOutputGeneration) {
      this._synchronizedOutputState = "idle";
    }
    if (this._synchronizedOutputState !== "idle") {
      return this._synchronizedOutputState === "held";
    }
    this._synchronizedOutputState = "held";
    this._cancelScheduledRender();
    this._armSynchronizedOutputFallback(generation);
    return true;
  }
  _armSynchronizedOutputFallback(generation) {
    this._cancelSynchronizedOutputFallback();
    this._synchronizedOutputGeneration = generation;
    this._synchronizedOutputTimer = setTimeout(() => {
      if (this._synchronizedOutputState !== "held" || this._synchronizedOutputGeneration !== generation) {
        return;
      }
      this._synchronizedOutputTimer = null;
      this._synchronizedOutputState = "passthrough";
      this._setupRendererIfNeeded();
      this._cancelScheduledRender();
      this._doRender();
    }, SYNCHRONIZED_OUTPUT_TIMEOUT_MS);
  }
  _cancelSynchronizedOutputFallback() {
    if (this._synchronizedOutputTimer == null)
      return;
    clearTimeout(this._synchronizedOutputTimer);
    this._synchronizedOutputTimer = null;
  }
  _setupRendererIfNeeded() {
    if (!this._rendererNeedsSetup)
      return;
    this.renderer?.setup(this.cols, this.rows);
    this._rendererNeedsSetup = false;
  }
  _initialRender() {
    this._doRender();
  }
  _doRender() {
    if (!this.bridge || !this.renderer)
      return;
    let dirtyCount = 0;
    const t0 = this.debug ? performance.now() : 0;
    if (this.debug) {
      for (let r = 0;r < this.rows; r++) {
        if (this.bridge.isDirtyRow(r))
          dirtyCount++;
      }
    }
    this.renderer.render(this.bridge);
    if (this.debug) {
      this.debug.recordRender(performance.now() - t0, dirtyCount);
    }
    const hasScrollback = this.bridge.getScrollbackCount() > 0;
    this.element.classList.toggle("has-scrollback", hasScrollback);
    if (this._shouldScrollToBottom) {
      this._scrollToBottom();
    } else if (!hasScrollback && this.element.scrollTop !== 0) {
      this.element.scrollTop = 0;
    }
    const title = this.bridge.getTitle();
    if (title !== null && this.onTitle) {
      this.onTitle(title);
    }
    this._drainResponses();
  }
  _drainResponses() {
    if (!this.bridge)
      return { hasError: false };
    let response;
    let firstError;
    let hasError = false;
    while ((response = this.bridge.getResponse()) !== null) {
      try {
        if (this.onData)
          this.onData(response);
      } catch (error) {
        if (!hasError) {
          hasError = true;
          firstError = error;
        }
      }
    }
    return { hasError, error: firstError };
  }
  _lockHeight() {
    const rh = this._rowHeight || 17;
    const gridHeight = this.rows * rh;
    const cs = getComputedStyle(this.element);
    let extra = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    if (cs.boxSizing === "border-box") {
      extra += (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
    }
    this.element.style.height = `${gridHeight + extra}px`;
  }
  _setRowHeight() {
    const probe = document.createElement("div");
    probe.className = "term-row";
    probe.style.visibility = "hidden";
    probe.style.position = "absolute";
    probe.textContent = "W";
    this._container.appendChild(probe);
    const h = probe.getBoundingClientRect().height;
    probe.remove();
    if (h > 0) {
      const rh = Math.ceil(h);
      this._rowHeight = rh;
      this.element.style.setProperty("--term-row-height", `${rh}px`);
    }
  }
  _measureCharSize() {
    const row = document.createElement("div");
    row.className = "term-row";
    row.style.visibility = "hidden";
    row.style.position = "absolute";
    const probe = document.createElement("span");
    probe.textContent = "W";
    row.appendChild(probe);
    this._container.appendChild(row);
    const charWidth = probe.getBoundingClientRect().width;
    const rowHeight = row.getBoundingClientRect().height;
    row.remove();
    if (charWidth === 0 || rowHeight === 0)
      return null;
    this._charWidth = charWidth;
    this._rowHeight = rowHeight;
    return { charWidth, rowHeight };
  }
  _setupResizeObserver() {
    const initial = this._measureCharSize();
    if (!initial)
      return;
    let { charWidth, rowHeight } = initial;
    this.resizeObserver = new ResizeObserver((entries) => {
      const measured = this._measureCharSize();
      if (measured) {
        charWidth = measured.charWidth;
        rowHeight = measured.rowHeight;
      }
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const newCols = Math.max(1, Math.floor(width / charWidth));
        const newRows = Math.max(1, Math.floor(height / rowHeight));
        if (newCols !== this.cols || newRows !== this.rows) {
          this.resize(newCols, newRows);
        }
      }
    });
    this.resizeObserver.observe(this.element);
  }
  destroy() {
    this._destroyed = true;
    this._cancelScheduledRender();
    this._cancelSynchronizedOutputFallback();
    if (this.resizeObserver)
      this.resizeObserver.disconnect();
    if (this.input)
      this.input.destroy();
    this.element.removeEventListener("click", this._onClickFocus);
    this.element.innerHTML = "";
    if (this.debug && globalThis.__wterm === this) {
      delete globalThis.__wterm;
    }
    this.debug = null;
  }
}
// src.js
console.log("hello");
var el = document.getElementById("terminal");
var term = new WTerm(el, { cols: 80, rows: 24, cursorBlink: true });
await term.init();
var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
var wsUrl = `${protocol}//${window.location.host}/pty`;
var ws = new WebSocketTransport({
  url: wsUrl,
  onData: (data) => {
    console.log(data);
    const decoder = new TextDecoder("utf-8");
    const result = decoder.decode(data);
    console.log(result);
    term.write(data);
  }
});
ws.connect();
term.onData = (data) => {
  ws.send(JSON.stringify({
    type: "data",
    payload: data
  }));
};
var modifierKeysCodes = [
  "ControlLeft",
  "ControlRight",
  "AltLeft",
  "AltRight",
  "MetaRight",
  "MetaLeft",
  "ShiftLeft",
  "ShiftRight",
  "CapsLock"
];
window.addEventListener("keydown", (e) => {
  const keyCode = e.code;
  if (modifierKeysCodes.includes(keyCode)) {
    e.preventDefault();
    console.log("found key:", keyCode);
    ws.send(JSON.stringify({
      type: "special_key",
      payload: keyCode
    }));
  }
});
