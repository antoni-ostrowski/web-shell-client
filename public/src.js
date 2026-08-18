// node_modules/@wterm/core/dist/wasm-inline.js
var WASM_BASE64 = "AGFzbQEAAAABQAtgAAF/YAAAYAF/AX9gAX8AYAJ/fwBgBH9/f38AYAN/f38AYAJ/fwF/YAV/f39/fwBgBH9/f38Bf2ADf39/AX8DQUAAAAAAAAEAAAICAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAEAAAMDBAQFBQUEBgcBCAkGAQEECgYGBAQDAAQEBAUBcAEBAQUDAQBkBgkBfwFBgIDAAAsH/gUsBm1lbW9yeQIACmdldE1heENvbHMAAAtnZXRDZWxsU2l6ZQABDmdldERlYnVnTG9nTWF4AAIUZ2V0RGVidWdMb2dFbnRyeVNpemUAARBnZXREZWJ1Z0xvZ0NvdW50AAMOZ2V0RGVidWdMb2dQdHIABA1jbGVhclJlc3BvbnNlAAUOZ2V0UmVzcG9uc2VMZW4ABg5nZXRSZXNwb25zZVB0cgAHFGdldFNjcm9sbGJhY2tMaW5lTGVuAAgRZ2V0U2Nyb2xsYmFja0xpbmUACRtnZXRTY3JvbGxiYWNrRGlzY2FyZGVkQ291bnQAChJnZXRTY3JvbGxiYWNrQ291bnQACxlnZXRIeXBlcmxpbmtSZWplY3RlZENvdW50AAwRZ2V0SHlwZXJsaW5rQ291bnQADRRnZXRIeXBlcmxpbmtDYXBhY2l0eQAODGdldExpbmtJZExlbgAPDGdldExpbmtJZFB0cgAQDWdldExpbmtVcmlMZW4AEQ1nZXRMaW5rVXJpUHRyABIPZ2V0VGl0bGVDaGFuZ2VkABMLZ2V0VGl0bGVMZW4AFAtnZXRUaXRsZVB0cgAVH2dldFN5bmNocm9uaXplZE91dHB1dEdlbmVyYXRpb24AFhVnZXRTeW5jaHJvbml6ZWRPdXRwdXQAFw5nZXRGb2N1c0V2ZW50cwAYC2dldE1vdXNlU2dyABkQZ2V0TW91c2VUcmFja2luZwAaEWdldFVzaW5nQWx0U2NyZWVuABsRZ2V0QnJhY2tldGVkUGFzdGUAHBBnZXRDdXJzb3JLZXlzQXBwAB0HZ2V0Um93cwAeB2dldENvbHMAHxBnZXRDdXJzb3JWaXNpYmxlACAMZ2V0Q3Vyc29yQ29sACEMZ2V0Q3Vyc29yUm93ACIKY2xlYXJEaXJ0eQAjC2dldERpcnR5UHRyACQKZ2V0R3JpZFB0cgAlCndyaXRlQnl0ZXMAJg5nZXRXcml0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AzsB9rGYgQAMAQtBACADOwH2sZiBAAsgAUECaiEBDAALC+YBAQJ/I4CAgIAAQRBrIgIkgICAgABBACEDIAJBADoACyACIAE6AAkgAiAAOgAIIAJCADcDACACQQAtAKCK8IAAIgE6AAogAUEEIAFBBEkbQQF0IQECQANAIAEgA0YNASACIANqIANB/InwgABqLwEAOwEAIANBAmohAwwACwtBAC0AlMSggQAiA0EMbCIBIAIpAwA3AeaumIEAIAFB7q6YgQBqIAJBCGooAgA2AQBBACADQQFqQR9xOgCUxKCBAEEAQQAoAsyumIEAQQFqIgNBfyADGzYCzK6YgQAgAkEQaiSAgICAAAt4AQJ/AkAgAEH//wNxIgJBAC8B9ofwgABPDQAgAkGAGGxB9IfAgABqIQBBACEDAkADQCADQQAvAfSH8IAATw0BIAAgASkCADcCACAAQQhqIAFBCGooAgA2AgAgAEEMaiEAIANBAWohAwwACwsgAkEBOgD4h/CAAAsLsAIBA38CQCAAQf//A3EiBEEALwH2h/CAAE8NACABQf//A3EiBUEALwH0h/CAACIAIAUgAEkbIQECQCAFIAJB//8DcSIGIAAgBiAASRsiBk8NACABIARBgBhsQfSHwIAAaiIFIAFBDGxqLQAJRSABQf//A3FBAEdxayEBIAJB//8DcSAATw0AAkAgBSAGQQxsai0ACQ0AIAZBAWohBgwBCyAGIAUgBkF/akH//wNxQQxsai0ACUECRmohBgtBACAGQf//A3EiACABQf//A3EiAmsiASABIABLGyEBIARBgBhsIAJBDGxqQfSHwIAAaiEAAkADQCABRQ0BIAAgAykCADcCACAAQQhqIANBCGooAgA2AgAgAEEMaiEAIAFBf2ohAQwACwsgBEEBOgD4h/CAAAsL4QEBBH8CQCACQf//A3FFDQAgAUH//wNxIABB//8DcU0NACABIABrIgQgAkH//wNxIgIgBEH//wNxIgQgAiAESRsiBWtB//8DcSEGQQAhAgNAAkAgBiACRw0AIAUgAGpB//8DcSECA0AgAEH//wNxIAJPDQMgACADEKmAgIAAIABBAWohAAwACwsgASACQX9zaiIHQf//A3EhBAJAQYAYRQ0AIARBgBhsQfSHwIAAaiAHIAVrQf//A3FBgBhsQfSHwIAAakGAGPwKAAALIARB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";

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
    this.linkCache = new Map;
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
    this.linkCache.clear();
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
    const result = {
      char: dv.getUint32(offset, true),
      fg: dv.getUint16(offset + 4, true),
      bg: dv.getUint16(offset + 6, true),
      flags: dv.getUint8(offset + 8),
      width: dv.getUint8(offset + 9)
    };
    Object.assign(result, this._readLink(dv.getUint16(offset + 10, true)));
    return result;
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
  getResourceState() {
    const capacity = this.exports.getHyperlinkCapacity?.();
    const used = this.exports.getHyperlinkCount?.();
    const rejected = this.exports.getHyperlinkRejectedCount?.();
    if (capacity === undefined || used === undefined || rejected === undefined) {
      return {};
    }
    return {
      hyperlinks: {
        capacity,
        used,
        rejected,
        saturated: used >= capacity
      }
    };
  }
  getScrollbackCount() {
    return this.exports.getScrollbackCount();
  }
  getScrollbackDiscardedCount() {
    return this.exports.getScrollbackDiscardedCount();
  }
  getScrollbackCell(offset, col) {
    const ptr = this.exports.getScrollbackLine(offset);
    const off = ptr + col * this.cellSize;
    const dv = this.dv;
    const result = {
      char: dv.getUint32(off, true),
      fg: dv.getUint16(off + 4, true),
      bg: dv.getUint16(off + 6, true),
      flags: dv.getUint8(off + 8),
      width: dv.getUint8(off + 9)
    };
    Object.assign(result, this._readLink(dv.getUint16(off + 10, true)));
    return result;
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
  _readLink(index) {
    if (index === 0)
      return;
    const cached = this.linkCache.get(index);
    if (cached)
      return cached;
    const uriLen = this.exports.getLinkUriLen(index);
    if (uriLen === 0)
      return;
    const uri = this.decoder.decode(new Uint8Array(this.memory.buffer, this.exports.getLinkUriPtr(index), uriLen));
    const idLen = this.exports.getLinkIdLen(index);
    const linkId = idLen === 0 ? undefined : this.decoder.decode(new Uint8Array(this.memory.buffer, this.exports.getLinkIdPtr(index), idLen));
    const value = {
      linkUri: uri,
      linkId,
      linkKey: linkId ? `e\x00${linkId}\x00${uri}` : `b\x00${index}`
    };
    this.linkCache.set(index, value);
    return value;
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
var DEFAULT_SCROLLBACK_OVERSCAN_ROWS = 10;
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
function safeLinkHref(uri) {
  if (!uri)
    return;
  try {
    const url = new URL(uri);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : undefined;
  } catch {
    return;
  }
}
function linkIdentity(cell) {
  if (!cell.linkUri)
    return "";
  return cell.linkKey ?? `fallback\x00${cell.linkId ?? ""}\x00${cell.linkUri}`;
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
    this._scrollbackStartKey = 0;
    this._renderedScrollbackCount = -1;
    this._renderedDiscardedCount = -1;
    this._scrollbackTopSpacer = null;
    this._scrollbackBottomSpacer = null;
    this.container = container;
  }
  setup(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.container.innerHTML = "";
    this.rowEls = [];
    this.prevRowBg = [];
    this._scrollbackRowEls = [];
    this._scrollbackStartKey = 0;
    this._renderedScrollbackCount = -1;
    this._renderedDiscardedCount = -1;
    const fragment = document.createDocumentFragment();
    this._scrollbackTopSpacer = document.createElement("div");
    this._scrollbackTopSpacer.className = "term-scrollback-spacer";
    fragment.appendChild(this._scrollbackTopSpacer);
    this._scrollbackBottomSpacer = document.createElement("div");
    this._scrollbackBottomSpacer.className = "term-scrollback-spacer";
    fragment.appendChild(this._scrollbackBottomSpacer);
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
    let runCells = [];
    let runStart = 0;
    let runLinkKey = "";
    let runLinkUri;
    let outputLinkKey = "";
    const appendContent = (content, linkKey, uri) => {
      const href = safeLinkHref(uri);
      const nextLinkKey = href ? linkKey : "";
      if (nextLinkKey !== outputLinkKey) {
        if (outputLinkKey)
          html += "</a>";
        if (nextLinkKey) {
          html += `<a class="term-link" href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">`;
        }
        outputLinkKey = nextLinkKey;
      }
      html += content;
    };
    const flushRun = (endCol) => {
      if (!runText)
        return;
      const escaped = escapeHTML(runText);
      let content = "";
      if (cursorCol >= runStart && cursorCol < endCol) {
        const offset = cursorCol - runStart;
        const before = runCells.slice(0, offset).join("");
        const cursorChar = runCells[offset] || " ";
        const after = runCells.slice(offset + 1).join("");
        if (before) {
          content += runStyle ? `<span style="${runStyle}">${escapeHTML(before)}</span>` : `<span>${escapeHTML(before)}</span>`;
        }
        content += runStyle ? `<span class="term-cursor" style="${runStyle}">${escapeHTML(cursorChar)}</span>` : `<span class="term-cursor">${escapeHTML(cursorChar)}</span>`;
        if (after) {
          content += runStyle ? `<span style="${runStyle}">${escapeHTML(after)}</span>` : `<span>${escapeHTML(after)}</span>`;
        }
      } else {
        content += runStyle ? `<span style="${runStyle}">${escaped}</span>` : `<span>${escaped}</span>`;
      }
      appendContent(content, runLinkKey, runLinkUri);
      runText = "";
      runCells = [];
    };
    const appendStyledSpan = (className, style, text, linkKey, linkUri) => {
      const classAttr = className ? ` class="${className}"` : "";
      const styleAttr = style ? ` style="${style}"` : "";
      appendContent(`<span${classAttr}${styleAttr}>${escapeHTML(text)}</span>`, linkKey, linkUri);
    };
    for (let col = 0;col < this.cols; col++) {
      const cell = getCell(col);
      const inBounds = col < lineLen;
      const cp = inBounds ? cell.char : 0;
      const width = inBounds ? cell.width ?? 1 : 1;
      const cellLinkKey = inBounds ? linkIdentity(cell) : "";
      const cellLinkUri = inBounds ? cell.linkUri : undefined;
      if (inBounds && width === 0) {
        flushRun(col);
        const continuesWide = col > 0 && (getCell(col - 1).width ?? 1) === 2;
        if (!continuesWide) {
          appendStyledSpan(col === cursorCol ? "term-cursor" : "", "", " ", cellLinkKey, cellLinkUri);
        }
        runStyle = "";
        runLinkKey = "";
        runLinkUri = undefined;
        runText = "";
        runCells = [];
        runStart = col + 1;
        continue;
      }
      if (inBounds && width === 2) {
        flushRun(col);
        if (col + 1 >= this.cols) {
          appendStyledSpan(col === cursorCol ? "term-cursor" : "", "", " ", cellLinkKey, cellLinkUri);
          runStyle = "";
          runLinkKey = "";
          runLinkUri = undefined;
          runText = "";
          runCells = [];
          runStart = col + 1;
          continue;
        }
        const ch = cell.chars ?? (cp >= 32 ? String.fromCodePoint(cp) : " ");
        const style = buildCellStyle(cell.fg, cell.bg, cell.flags, cell.fgRgb, cell.bgRgb);
        const cls = cursorCol >= col && cursorCol < col + 2 ? "term-wide term-cursor" : "term-wide";
        appendStyledSpan(cls, style, ch, cellLinkKey, cellLinkUri);
        runStyle = "";
        runLinkKey = "";
        runLinkUri = undefined;
        runText = "";
        runCells = [];
        runStart = col + 2;
        continue;
      }
      if (inBounds && cp >= 9600 && cp <= 9631) {
        flushRun(col);
        const colors = resolveColors(cell.fg, cell.bg, cell.flags, cell.fgRgb, cell.bgRgb);
        const cls = col === cursorCol ? "term-block term-cursor" : "term-block";
        const bg = getBlockBackground(cp, colors.fg, colors.bg);
        const dim = cell.flags & FLAG_DIM ? "opacity:0.5;" : "";
        appendContent(`<span class="${cls}" style="background:${bg};${dim}"></span>`, cellLinkKey, cellLinkUri);
        runStyle = "";
        runLinkKey = "";
        runLinkUri = undefined;
        runText = "";
        runCells = [];
        runStart = col + 1;
      } else {
        const ch = cell.chars ?? (inBounds && cp >= 32 ? String.fromCodePoint(cp) : " ");
        const style = inBounds ? buildCellStyle(cell.fg, cell.bg, cell.flags, cell.fgRgb, cell.bgRgb) : "";
        if (style !== runStyle || cellLinkKey !== runLinkKey) {
          flushRun(col);
          runStyle = style;
          runLinkKey = cellLinkKey;
          runLinkUri = cellLinkUri;
          runText = ch;
          runCells = [ch];
          runStart = col;
        } else {
          runText += ch;
          runCells.push(ch);
        }
      }
    }
    flushRun(this.cols);
    if (outputLinkKey)
      html += "</a>";
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
  syncScrollback(core, viewport) {
    const scrollbackCount = core.getScrollbackCount();
    const rowHeight = viewport?.rowHeight ?? 0;
    const virtual = viewport !== undefined && rowHeight > 0;
    const overscan = viewport?.overscanRows ?? DEFAULT_SCROLLBACK_OVERSCAN_ROWS;
    const hasDiscardedCount = viewport?.scrollbackDiscardedCount !== undefined;
    const discardedCount = viewport?.scrollbackDiscardedCount ?? 0;
    const viewportHeight = viewport && viewport.clientHeight > 0 ? viewport.clientHeight : this.rows * rowHeight;
    const firstVisible = virtual ? Math.floor(viewport.scrollTop / rowHeight) : 0;
    const visibleRows = virtual ? Math.ceil(viewportHeight / rowHeight) : scrollbackCount;
    let start = virtual ? Math.max(0, Math.min(scrollbackCount, firstVisible - overscan)) : 0;
    let end = virtual ? Math.max(start, Math.min(scrollbackCount, firstVisible + visibleRows + overscan)) : scrollbackCount;
    const selection = this.container.ownerDocument.getSelection();
    const selectionInContainer = selection !== null && !selection.isCollapsed && (this.container.contains(selection.anchorNode) || this.container.contains(selection.focusNode));
    if (selectionInContainer && this._scrollbackRowEls.length > 0) {
      start = Math.min(start, Math.max(0, this._scrollbackStartKey - discardedCount));
      end = Math.max(end, Math.min(scrollbackCount, this._scrollbackStartKey - discardedCount + this._scrollbackRowEls.length));
    }
    const startKey = discardedCount + start;
    if (hasDiscardedCount && scrollbackCount === this._renderedScrollbackCount && discardedCount === this._renderedDiscardedCount && startKey === this._scrollbackStartKey && end - start === this._scrollbackRowEls.length) {
      return;
    }
    const previous = new Map;
    for (let i = 0;i < this._scrollbackRowEls.length; i++) {
      previous.set(this._scrollbackStartKey + i, this._scrollbackRowEls[i]);
    }
    const endKey = discardedCount + end;
    for (const [key, rowEl] of previous) {
      if (key < startKey || key >= endKey)
        rowEl.remove();
    }
    const nextRows = [];
    let nextSibling = this._scrollbackTopSpacer?.nextSibling ?? null;
    for (let index = start;index < end; index++) {
      const key = discardedCount + index;
      const offset = scrollbackCount - 1 - index;
      const candidate = this._buildScrollbackRowEl(core, offset);
      const existing = previous.get(key);
      let rowEl = candidate;
      let positioned = false;
      if (existing && existing.innerHTML === candidate.innerHTML && existing.style.cssText === candidate.style.cssText) {
        rowEl = existing;
      } else if (existing) {
        existing.replaceWith(candidate);
        positioned = true;
      }
      if (!positioned && rowEl !== nextSibling) {
        this.container.insertBefore(rowEl, nextSibling ?? this._scrollbackBottomSpacer);
      }
      nextSibling = rowEl.nextSibling;
      nextRows.push(rowEl);
    }
    this._scrollbackRowEls = nextRows;
    this._scrollbackStartKey = startKey;
    this._renderedScrollbackCount = scrollbackCount;
    this._renderedDiscardedCount = discardedCount;
    if (this._scrollbackTopSpacer) {
      this._scrollbackTopSpacer.style.height = `${start * rowHeight}px`;
    }
    if (this._scrollbackBottomSpacer) {
      this._scrollbackBottomSpacer.style.height = `${(scrollbackCount - end) * rowHeight}px`;
    }
  }
  render(core, viewport) {
    const rows = core.getRows();
    const cols = core.getCols();
    let resized = false;
    if (rows !== this.rows || cols !== this.cols) {
      this.setup(cols, rows);
      resized = true;
    }
    this.syncScrollback(core, viewport);
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

// node_modules/@wterm/dom/dist/hyperlink.js
function isLinkActivationModifier(event, navigator2) {
  return navigator2.platform.startsWith("Mac") ? event.metaKey : event.ctrlKey;
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
    if (kind === "press" && isLinkActivationModifier(event, this.element.ownerDocument.defaultView?.navigator ?? navigator) && event.target instanceof Element && event.target.closest(".term-link")) {
      return;
    }
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
      charStr: c.chars ?? (c.char >= 32 ? String.fromCodePoint(c.char) : ""),
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
    this._synchronizedOutputTimer = null;
    this._synchronizedOutputState = "idle";
    this._synchronizedOutputGeneration = 0;
    this._rendererNeedsSetup = false;
    this.resizeObserver = null;
    this._destroyed = false;
    this._shouldScrollToBottom = false;
    this._scrollbackDiscardedCount = 0;
    this._programmaticScrollTop = null;
    this._pendingResizeScrollTop = null;
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
    this._onClickFocus = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(".term-link")) {
        if (isLinkActivationModifier(event, this.element.ownerDocument.defaultView?.navigator ?? navigator) || event.detail === 0) {
          return;
        }
        event.preventDefault();
      }
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed)
        this.input?.focus();
    };
    this.element.addEventListener("click", this._onClickFocus);
    this._onModifierChange = (event) => {
      this.element.classList.toggle("link-modifier-active", isLinkActivationModifier(event, this.element.ownerDocument.defaultView?.navigator ?? navigator));
    };
    this._onWindowBlur = () => {
      this.element.classList.remove("link-modifier-active");
    };
    this.element.ownerDocument.addEventListener("keydown", this._onModifierChange);
    this.element.ownerDocument.addEventListener("keyup", this._onModifierChange);
    this.element.ownerDocument.defaultView?.addEventListener("blur", this._onWindowBlur);
    this._onScroll = () => {
      if (this._pendingResizeScrollTop !== null)
        return;
      if (this._programmaticScrollTop !== null && this.element.scrollTop === this._programmaticScrollTop) {
        this._programmaticScrollTop = null;
        return;
      }
      this._programmaticScrollTop = null;
      this._shouldScrollToBottom = false;
      this._scheduleRender();
    };
    this.element.addEventListener("scroll", this._onScroll, { passive: true });
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
      this._setScrollTop(0);
      return;
    }
    this._setScrollTop(maxScroll);
  }
  _setScrollTop(value) {
    if (this.element.scrollTop === value)
      return;
    this._programmaticScrollTop = value;
    this.element.scrollTop = value;
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
    this._shouldScrollToBottom = this._pendingResizeScrollTop === null && this._isScrolledToBottom();
    this.cols = cols;
    this.rows = rows;
    this.bridge.resize(cols, rows);
    const synchronized = this.bridge.synchronizedOutput?.() ?? false;
    const generation = this.bridge.synchronizedOutputGeneration?.() ?? 0;
    if (this._updateSynchronizedOutput(synchronized, generation)) {
      this._rendererNeedsSetup = true;
    } else {
      this._setupRenderer(cols, rows);
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
    if (this.rafId != null)
      return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this._doRender();
    });
  }
  _cancelScheduledRender() {
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
    this._setupRenderer(this.cols, this.rows);
    this._rendererNeedsSetup = false;
  }
  _setupRenderer(cols, rows) {
    if (!this._shouldScrollToBottom && this._pendingResizeScrollTop === null) {
      this._pendingResizeScrollTop = this.element.scrollTop;
    }
    this.renderer?.setup(cols, rows);
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
    const rowHeight = this._rowHeight || 17;
    const scrollbackCount = this.bridge.getScrollbackCount();
    const discardedCount = this.bridge.getScrollbackDiscardedCount?.();
    const discardedDelta = discardedCount !== undefined && discardedCount >= this._scrollbackDiscardedCount ? discardedCount - this._scrollbackDiscardedCount : 0;
    if (discardedCount !== undefined) {
      this._scrollbackDiscardedCount = discardedCount;
    }
    let scrollTop = this._pendingResizeScrollTop !== null ? this._pendingResizeScrollTop : this.element.scrollTop;
    if (!this._shouldScrollToBottom && discardedDelta > 0) {
      scrollTop = Math.max(0, scrollTop - discardedDelta * rowHeight);
      if (this._pendingResizeScrollTop !== null) {
        this._pendingResizeScrollTop = scrollTop;
      } else {
        this._setScrollTop(scrollTop);
      }
    }
    this.renderer.render(this.bridge, {
      scrollTop: this._shouldScrollToBottom ? Math.max(0, (scrollbackCount + this.rows) * rowHeight - this.element.clientHeight) : scrollTop,
      clientHeight: this.element.clientHeight,
      rowHeight,
      scrollbackDiscardedCount: discardedCount
    });
    if (this.debug) {
      this.debug.recordRender(performance.now() - t0, dirtyCount);
    }
    const hasScrollback = scrollbackCount > 0;
    this.element.classList.toggle("has-scrollback", hasScrollback);
    if (this._shouldScrollToBottom) {
      this._scrollToBottom();
    } else if (this._pendingResizeScrollTop !== null) {
      const pendingScrollTop = this._pendingResizeScrollTop;
      this._pendingResizeScrollTop = null;
      this._setScrollTop(pendingScrollTop);
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
    this.element.removeEventListener("scroll", this._onScroll);
    this.element.ownerDocument.removeEventListener("keydown", this._onModifierChange);
    this.element.ownerDocument.removeEventListener("keyup", this._onModifierChange);
    this.element.ownerDocument.defaultView?.removeEventListener("blur", this._onWindowBlur);
    this.element.classList.remove("link-modifier-active");
    this.element.innerHTML = "";
    if (this.debug && globalThis.__wterm === this) {
      delete globalThis.__wterm;
    }
    this.debug = null;
  }
}
// src.js
var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
var wsUrl = `${protocol}//${window.location.host}/pty`;
var termElement = document.getElementById("terminal");
var term = new WTerm(termElement, { cols: 80, rows: 24, cursorBlink: true, autoResize: true });
await term.init();
var ws = new WebSocketTransport({
  url: wsUrl,
  onData: (data) => {
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
term.onResize = (cols, rows) => {
  ws.send(JSON.stringify({
    type: "resize",
    payload: {
      cols,
      rows
    }
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
