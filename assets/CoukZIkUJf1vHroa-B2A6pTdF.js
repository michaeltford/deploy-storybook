const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./8IBYT7vkExASLJms-F28DctyN.js","./rolldown-runtime-DkW27tQK.js","./preload-helper-wdlQj8DP.js","./iframe-Dk6xXpge.js","./chunk-7PIQR4A3-BGgO7bU4.js","./chunk-IMSF75WX-CGYlPTyG.js","./BxiAkxNyUQseLNBv-BShQESXm.js","./BXhWTnlrRShaRGS5-Dn1GpG4R.js","./esm-DR78iOu_.js","./4VkvY2rXOd49uHcQ-DulsxhUb.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";function r(e){let t;try{if(t=c&&(self.URL||self.webkitURL).createObjectURL(c),!t)throw``;let n=new Worker(t,{type:`module`,name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(s),{type:`module`,name:e?.name})}}async function i(){if(globalThis.process?.versions?.node&&typeof Worker>`u`)return await l();if(typeof Worker<`u`){let e=new a(()=>new r);try{return await e.start(),e}catch(e){console.error(`Failed to start TypescriptCompiler worker reverting to fallback:`,e)}}return await l()}var a,o,s,c,l;function u(){return(u=e((()=>{t(),a=class{constructor(e){this._worker=null,this._nextId=1,this._pendingRequests=new Map,this._workerFactory=e}start(){if(typeof Worker>`u`)throw Error(`Web Workers are not supported in this environment.`);return this._worker||(this._worker=this._workerFactory(),this._worker.onmessage=e=>{let{id:t,result:n,error:r}=e.data,i=this._pendingRequests.get(t);if(i){if(this._pendingRequests.delete(t),r){let e=Error(r.message);e.stack=r.stack,r.cause&&(e.cause=r.cause),i.reject(e)}else i.resolve(n)}},this._worker.onerror=e=>{console.error(`Worker error:`,e),this._pendingRequests.forEach(t=>{t.reject(Error(`Worker failed: ${e.message}`))}),this._pendingRequests.clear(),this._worker=null}),Promise.resolve()}execute(e){if(!this._worker)throw Error(`Worker is not initialized. Call start() first.`);let t=this._nextId++;return new Promise((n,r)=>{this._pendingRequests.set(t,{resolve:n,reject:r}),this._worker.postMessage({id:t,params:e})})}terminate(){this._worker&&=(this._worker.terminate(),null)}},o=class{constructor(e){this._onExecute=e}execute(e){return this._onExecute(e)}start(){return Promise.resolve()}terminate(){}},s=`var yt = Object.defineProperty, qt = (e, t, r) => () => {
	if (r) throw r[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (n) {
		throw r = [n], n;
	}
}, Zt = (e, t) => {
	let r = {};
	for (var n in e) yt(r, n, {
		get: e[n],
		enumerable: !0
	});
	return t || yt(r, Symbol.toStringTag, { value: "Module" }), r;
}, wt = Object.defineProperty, he = (e, t) => {
	let r = {};
	for (var n in e) wt(r, n, {
		get: e[n],
		enumerable: !0
	});
	return t || wt(r, Symbol.toStringTag, { value: "Module" }), r;
}, ue = {
	Column: "column",
	Row: "row"
};
({ ...ue });
function Be(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (e.constructor !== t.constructor) return !1;
		let r, n, o;
		if (Array.isArray(e)) {
			if (r = e.length, r != t.length) return !1;
			for (n = r; n-- !== 0;) if (!Be(e[n], t[n])) return !1;
			return !0;
		}
		if (e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (n of e.entries()) if (!t.has(n[0])) return !1;
			for (n of e.entries()) if (!Be(n[1], t.get(n[0]))) return !1;
			return !0;
		}
		if (e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (n of e.entries()) if (!t.has(n[0])) return !1;
			return !0;
		}
		if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			if (r = e.length, r != t.length) return !1;
			for (n = r; n-- !== 0;) if (e[n] !== t[n]) return !1;
			return !0;
		}
		if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
		if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
		if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
		if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
		for (n = r; n-- !== 0;) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
		for (n = r; n-- !== 0;) {
			let a = o[n];
			if ((a !== "_owner" || !e.$$typeof) && !Be(e[a], t[a])) return !1;
		}
		return !0;
	}
	return e != e && t != t;
}
function en(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || (function(r) {
		return r.$$typeof === tn;
	})(e);
}
var tn = typeof Symbol == "function" && Symbol.for ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
function rn(e) {
	return /* @__PURE__ */ (function(t) {
		return !!t && typeof t == "object";
	})(e) && !en(e);
}
function Ne(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? ve((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
	var r;
}
function nn(e, t, r) {
	return e.concat(t).map(function(n) {
		return Ne(n, r);
	});
}
function bt(e) {
	return Object.keys(e).concat((function(t) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(r) {
			return Object.propertyIsEnumerable.call(t, r);
		}) : [];
	})(e));
}
function St(e, t) {
	try {
		return t in e;
	} catch {
		return !1;
	}
}
function on(e, t, r) {
	let n = {};
	return r.isMergeableObject(e) && bt(e).forEach(function(o) {
		n[o] = Ne(e[o], r);
	}), bt(t).forEach(function(o) {
		(function(a, l) {
			return St(a, l) && !(Object.hasOwnProperty.call(a, l) && Object.propertyIsEnumerable.call(a, l));
		})(e, o) || (St(e, o) && r.isMergeableObject(t[o]) ? n[o] = (function(a, l) {
			if (!l.customMerge) return ve;
			let i = l.customMerge(a);
			return typeof i == "function" ? i : ve;
		})(o, r)(e[o], t[o], r) : n[o] = Ne(t[o], r));
	}), n;
}
function ve(e, t, r) {
	(r ||= {}).arrayMerge = r.arrayMerge || nn, r.isMergeableObject = r.isMergeableObject || rn, r.cloneUnlessOtherwiseSpecified = Ne;
	let n = Array.isArray(t);
	return n === Array.isArray(e) ? n ? r.arrayMerge(e, t, r) : on(e, t, r) : Ne(t, r);
}
ve.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(r, n) {
		return ve(r, n, t);
	}, {});
};
var Qt = he({
	DonePromise: () => ln,
	EmptyArray: () => _e,
	EmptyObject: () => an,
	OSType: () => fe,
	arrayMove: () => Tn,
	asNumber: () => dn,
	camelToPrettyCase: () => cn,
	castToString: () => Cn,
	cloneObject: () => gn,
	consoleWithNoSource: () => kn,
	deepEqual: () => Be,
	deepFreeze: () => sr,
	deepMerge: () => ve,
	diffValues: () => vn,
	findEqualOrGreater: () => En,
	findEqualOrLesser: () => xn,
	getFromPath: () => _n,
	getPlatform: () => Xe,
	isDefined: () => An,
	isEmpty: () => In,
	isEqualArrays: () => tr,
	isEqualBounds: () => yn,
	isNullOrUndefined: () => ir,
	isNumeric: () => fn,
	isObject: () => Le,
	isPromiseLike: () => $n,
	isRectInsideRect: () => Rn,
	isRectIntersect: () => lr,
	mergeContentful: () => Sn,
	removeEmptyProperties: () => rr,
	removeEqualValues: () => or,
	removeEqualValuesLayered: () => ar,
	removeListenerAll: () => wn,
	roundAccurately: () => mn,
	setToPath: () => Ln,
	splitNumber: () => pn,
	subtractRect: () => Nn,
	textToKey: () => un,
	toSafeJSON: () => at,
	transpose: () => bn,
	uuidV4: () => Ke,
	validEnumValue: () => sn
}), _e = Object.freeze([]), an = Object.freeze({}), ln = Promise.resolve(), er = (e) => e;
function sn(e, t) {
	if (!Object.values(e).includes(t)) throw Error(\`Invalid type: \${t ?? "null"}. Must be one of: \${Object.values(e).join(", ")}.\`);
}
function cn(e) {
	return e ? e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase()) : "";
}
function un(e) {
	return e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
var ie = Array.from({ length: 256 }, (e, t) => (t + 256).toString(16).slice(1));
function Ke() {
	let e = globalThis.crypto;
	if (e?.randomUUID) return e.randomUUID();
	if (e?.getRandomValues) {
		let t = e.getRandomValues(/* @__PURE__ */ new Uint8Array(16));
		return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, ie[t[0]] + ie[t[1]] + ie[t[2]] + ie[t[3]] + "-" + ie[t[4]] + ie[t[5]] + "-" + ie[t[6]] + ie[t[7]] + "-" + ie[t[8]] + ie[t[9]] + "-" + ie[t[10]] + ie[t[11]] + ie[t[12]] + ie[t[13]] + ie[t[14]] + ie[t[15]];
	}
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
		let r = 16 * Math.random() | 0;
		return (t === "x" ? r : 3 & r | 8).toString(16);
	});
}
function dn(e) {
	let t = (function(r) {
		return 1 * r;
	})(e);
	return Number.isFinite(t) ? t : 0;
}
function fn(e) {
	let t = 1 * e;
	return Number.isFinite(t) && typeof t == "number";
}
var Je = [
	1,
	10,
	100,
	1e3,
	1e4,
	1e5,
	1e6,
	1e7,
	1e8,
	1e9,
	1e10,
	1e11,
	0xe8d4a51000,
	0x9184e72a000,
	0x5af3107a4000,
	0x38d7ea4c68000,
	0x2386f26fc10000
];
function pn(e) {
	let t = Math.abs(e);
	if (!Number.isFinite(t)) return null;
	let r = Math.trunc(t), n = t - r, o;
	r > 2 ** 53 - 1 ? o = Number(r.toExponential().split("e")[1]) + 1 : (o = Math.ceil(Math.log10(r + 1)), Je[o] <= r && o++);
	let a = 0, l = 0, i = 15 - o;
	if (n > 0 && i > 0) {
		let u = Je[i];
		if (a = Math.round(n * u), a === u) r++, a = 0, r >= Je[o] && o++;
		else if (a > 0) for (l = i; a % 10 == 0;) a /= 10, l--;
	}
	return {
		ip: e < 0 ? -r : r,
		fp: a,
		ipLength: o,
		fpLength: l
	};
}
function mn(e, t = 0) {
	if (e == null || !isFinite(e)) return null;
	let r = 10 ** t;
	return Number(Math.round(e * r) / r);
}
function gn(e) {
	return ir(e) ? e : JSON.parse(JSON.stringify(e));
}
var hn = (e, t) => e === t;
function tr(e, t, r) {
	if (e === t) return !0;
	if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
	r ||= hn;
	let n = e.length;
	for (let o = 0; o < n; o++) if (!r(e[o], t[o])) return !1;
	return !0;
}
function yn(e, t) {
	return e === t || !(!e || !t) && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Le(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function rr(e) {
	if (typeof e != "object" || Array.isArray(e) || e === null) return e;
	let t = e;
	return Object.keys(t).forEach(function(r) {
		t[r] && typeof t[r] == "object" ? rr(t[r]) : t[r] !== null && t[r] !== void 0 || delete t[r], typeof t[r] == "object" && Object.keys(t[r]).length === 0 && delete t[r];
	}), Object.keys(e).length === 0 ? null : e;
}
function wn(e, t) {
	if (!e) return _e;
	let r = e.length;
	for (let n = 0; n < r; n++) {
		let o = e[n];
		o && o(t);
	}
	return _e;
}
function bn(e) {
	if (!e) return e;
	let t = e.length, r = e[0].length, n = [];
	for (let o = 0; o < r; o++) n[o] = Array(t);
	for (let o = 0; o < t; o++) {
		let a = e[o];
		for (let l = 0; l < r; l++) n[l][o] = a[l];
	}
	return n;
}
var nr = (e, t) => !(e !== t && !tr(e, t)) || !!e.isEqual?.(t);
function or(e, t, r = nr) {
	if (e == null || e === t) return null;
	if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) return r(e, t) ? null : e;
	let n = Object.keys(e), o = n.length;
	if (o === 0) return null;
	let a = !1;
	for (let l = 0; l < o; l++) {
		let i = n[l];
		or(e[i], t?.[i], r) === null && (a = !0, delete e[i]);
	}
	return a && Object.keys(e).length === 0 ? null : void 0;
}
function ar(e, t, r = nr) {
	if (e == null) return !0;
	if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) {
		let i, u = !1;
		for (let p = 0; !u && p < t.length; p++) t[p] !== void 0 && (u = !0, i = t[p]);
		return u && (e === i || r(e, i));
	}
	let n = Object.keys(e), o = n.length;
	if (o === 0) return !0;
	let a = t.length, l = !1;
	for (let i = 0; i < o; i++) {
		let u = n[i], p = [];
		for (let h = 0; h < a; h++) {
			let c = t[h]?.[u];
			c !== void 0 && p.push(c);
		}
		ar(e[u], p, r) && (l = !0, delete e[u]);
	}
	return l && Object.keys(e).length === 0;
}
function Sn(...e) {
	let t = e.length;
	if (t > 0 && e[t - 1] !== void 0 && !Le(e[t - 1])) return e[t - 1];
	let r = e[0] || {};
	for (let n = 1; n < t; n++) r = ve(r, e[n] || {}, { arrayMerge: (o, a) => [...a] });
	return r;
}
function vn(e, t) {
	let r = {}, n = Object.keys(t), o = n.length;
	for (let a = 0; a < o; a++) {
		let l = n[a], i = e[l], u = t[l];
		i !== u && (r[l] = i === void 0 ? u : i);
	}
	return Object.keys(r).length === 0 ? null : r;
}
function En(e, t, r = er) {
	let n = 0, o = e.length - 1;
	for (; n <= o;) {
		let a = Math.floor((n + o) / 2), l = r(e[a]);
		if (l === t) return a;
		l < t ? n = a + 1 : o = a - 1;
	}
	return n;
}
function xn(e, t, r = er) {
	let n = e.length - 1, o = 0;
	for (; n >= o;) {
		let a = Math.floor((n + o) / 2), l = r(e[a]);
		if (l === t) return a;
		l > t ? n = a - 1 : o = a + 1;
	}
	return n;
}
function Tn(e, t, r) {
	let n = e.slice();
	return n.splice(r < 0 ? n.length + r : r, 0, n.splice(t, 1)[0]), n;
}
function Cn(e) {
	return e == null || e === void 0 ? "" : typeof e == "string" ? e : "" + e;
}
function ir(e) {
	return e == null;
}
function An(e) {
	return e != null;
}
function In(e) {
	return e == null || e === "";
}
function $n(e) {
	return !!e && typeof e.then == "function";
}
function lr(e, t) {
	return !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top);
}
function Rn(e, t) {
	return e.top >= t.top && e.bottom <= t.bottom && e.left >= t.left && e.right <= t.right;
}
function Nn(e, t, r = !1) {
	if (!t) return [e];
	if (!lr(e, t)) return [];
	let n = [], o = e, a = () => {
		t.top > o.top && t.top < o.bottom && (n.push({
			...o,
			bottom: t.top
		}), o = {
			...o,
			top: t.top
		});
	}, l = () => {
		t.bottom > o.top && t.bottom < o.bottom && (n.push({
			...o,
			top: t.bottom
		}), o = {
			...o,
			bottom: t.bottom
		});
	}, i = () => {
		t.right > o.left && t.right < o.right && (n.push({
			...o,
			left: t.right
		}), o = {
			...o,
			right: t.right
		});
	}, u = () => {
		t.left > o.left && t.left < o.right && (n.push({
			...o,
			right: t.left
		}), o = {
			...o,
			left: t.left
		});
	};
	return r ? (u(), i(), a(), l()) : (a(), l(), i(), u()), n;
}
function _n(e, t) {
	let r = t.split("."), n = e, o = r.length;
	for (let a = 0; a < o; a++) {
		let l = r[a];
		if (!n) return null;
		let i = n[l];
		if (typeof i == "function" && (i = i.bind(n)()), !i || !Le(i)) return i;
		n = i;
	}
	return n ?? null;
}
function Ln(e, t, r) {
	let n = t.split("."), o = e;
	if (!o) throw Error("Can not set path to a null path.");
	let a = n.length;
	for (let l = 0; o && l < a - 1; l++) {
		let i = n[l], u = o[i];
		if (u ?? (u = {}, o[i] = u), !Le(u)) throw Error("Can not set path to a non object path.");
		o = u;
	}
	if (typeof r != "number" && typeof r != "boolean" && typeof r != "string" && !Le(r)) throw Error(\`Can not set path to \${r} that is not a a supported primitive.\`);
	return o[n[a - 1]] = r, e;
}
function kn(...e) {
	return new Promise((t) => {
		setTimeout(() => {
			Function("console.log.apply(console, arguments)").apply(null, e), t();
		});
	});
}
var fe = {
	Windows: "windows",
	MacOS: "macos",
	IOS: "ios",
	Linux: "linux",
	Android: "android",
	Safari: "safari",
	Firefox: "firefox",
	Unknown: "unknown"
};
function Xe() {
	let e = globalThis.navigator !== void 0 && globalThis.navigator.userAgent ? globalThis.navigator.userAgent.toLowerCase() : "";
	return e ? /(win32|win64|windows|wince)/i.test(e) ? fe.Windows : /(macintosh|macintel|macppc|mac68k|macos)/i.test(e) ? fe.MacOS : /(iphone|ipad|ipod)/i.test(e) ? fe.IOS : /android/.test(e) ? fe.Android : /linux/.test(e) ? fe.Linux : /^((?!chrome|android|).)*safari/i.test(e) ? fe.Safari : /^((?!chrome|android|Seamonkey).)*firefox/i.test(e) ? fe.Firefox : fe.Unknown : fe.Unknown;
}
function sr(e) {
	Object.freeze(e);
	let t = e;
	return Object.keys(t).forEach((r) => {
		typeof t[r] != "object" || t[r] === null || Object.isFrozen(t[r]) || sr(t[r]);
	}), e;
}
function at(e) {
	if (typeof e != "object" || !e) return e;
	if (typeof e.toJSON == "function") return e.toJSON();
	if (Array.isArray(e)) return e.map((r) => at(r));
	if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) return e.toString();
	let t = {};
	for (let r in e) e.hasOwnProperty(r) && (t[r] = at(e[r]));
	return t;
}
he({
	EmptyCell: () => cr,
	EmptyRange: () => On,
	EmptyRanges: () => Mn,
	EmptySelection: () => Fn,
	InsertCutShift: () => Se,
	cellToRange: () => jn,
	classifyInsertCut: () => Yn,
	columnFirstCellComparator: () => mr,
	columnFirstRangeComparator: () => ur,
	createCellComparator: () => Dn,
	createConflatingRanges: () => Jn,
	createRangeComparator: () => wr,
	defaultRange: () => Gn,
	extendRangeToIntersectingRanges: () => Tr,
	extendRangeToUnionRanges: () => zn,
	intersectRanges: () => Er,
	isCellWithinRange: () => Un,
	isEqualCells: () => br,
	isEqualRanges: () => dt,
	isEqualRangesArrays: () => vr,
	isEqualSelectionCoords: () => xr,
	isRangeWithinRange: () => Sr,
	isRangesIntersect: () => ft,
	isRefusedInsertCut: () => qn,
	isSingleCell: () => Pn,
	isValidRange: () => Kn,
	mergeRangeCoordValues: () => Ar,
	reverseColumnFirstCellComparator: () => yr,
	reverseColumnFirstRangeComparator: () => pr,
	reverseRowFirstCellComparator: () => hr,
	reverseRowFirstRangeComparator: () => fr,
	rowFirstCellComparator: () => gr,
	rowFirstRangeComparator: () => dr,
	sanitizeRange: () => Cr,
	sanitizeRangeArray: () => Xn,
	translateRange: () => Vn,
	unionRanges: () => it,
	unionRangesArrays: () => Bn
});
var cr = Object.freeze({
	colIndex: 0,
	rowIndex: 0
}), On = Object.freeze({
	colStart: 0,
	rowStart: 0,
	colEnd: 0,
	rowEnd: 0
}), Mn = _e, Fn = Object.freeze({
	cell: cr,
	ranges: _e,
	rangeIndex: -1
});
function ur(e, t) {
	return e.colStart === t.colStart ? e.rowStart - t.rowStart : e.colStart - t.colStart;
}
function dr(e, t) {
	return e.rowStart === t.rowStart ? e.colStart - t.colStart : e.rowStart - t.rowStart;
}
function fr(e, t) {
	return e.rowEnd === t.rowEnd ? t.colEnd - e.colEnd : t.rowEnd - e.rowEnd;
}
function pr(e, t) {
	return e.colEnd === t.colEnd ? t.rowEnd - e.rowEnd : t.colEnd - e.colEnd;
}
function mr(e, t) {
	return e.colIndex === t.colIndex ? e.rowIndex - t.rowIndex : e.colIndex - t.colIndex;
}
function gr(e, t) {
	return e.rowIndex === t.rowIndex ? e.colIndex - t.colIndex : e.rowIndex - t.rowIndex;
}
function hr(e, t) {
	return e.rowIndex === t.rowIndex ? t.colIndex - e.colIndex : t.rowIndex - e.rowIndex;
}
function yr(e, t) {
	return e.colIndex === t.colIndex ? t.rowIndex - e.rowIndex : t.colIndex - e.colIndex;
}
function wr(e = ue.Row, t = !1) {
	return t ? e === ue.Column ? pr : fr : e === ue.Column ? ur : dr;
}
function Dn(e = ue.Row, t = !1) {
	return t ? e === ue.Column ? yr : hr : e === ue.Column ? mr : gr;
}
function br(e, t) {
	return e === t || !(!e || !t) && e.rowIndex === t.rowIndex && e.colIndex === t.colIndex && e.scope === t.scope;
}
function dt(e, t) {
	return e === t || !(!e || !t) && e.rowStart === t.rowStart && e.rowEnd === t.rowEnd && e.colStart === t.colStart && e.colEnd === t.colEnd && e.scope === t.scope;
}
function Un(e, t) {
	if (!e || !t) return !1;
	let r = e.rowIndex;
	if (r < t.rowStart || r > t.rowEnd) return !1;
	let n = e.colIndex;
	return !(n < t.colStart || n > t.colEnd);
}
function Sr(e, t) {
	return !(!e || !t) && !(e.rowStart < t.rowStart || e.rowEnd > t.rowEnd) && !(e.colStart < t.colStart || e.colEnd > t.colEnd);
}
function ft(e, t) {
	return !(!e || !t) && !(e.colStart > t.colEnd || t.colStart > e.colEnd) && !(e.rowStart > t.rowEnd || t.rowStart > e.rowEnd);
}
function vr(e, t) {
	if (e === t) return !0;
	if (!e || !t || e.length !== t.length) return !1;
	for (let r = 0; r < e.length; r++) if (!dt(e[r], t[r])) return !1;
	return !0;
}
function Pn(e) {
	return !!e && e.rowEnd === e.rowStart && e.colStart === e.colEnd;
}
function jn(e, t) {
	if (!e) return null;
	let r = t;
	return r || (r = { ...e }, delete r.colIndex, delete r.rowIndex), r.colStart = e.colIndex ?? 0, r.rowStart = e.rowIndex ?? 0, r.colEnd = e.colIndex ?? 0, r.rowEnd = e.rowIndex ?? 0, r;
}
function Er(e, t, r) {
	if (!e) return r ? t : { ...t };
	if (!t) return r ? e : { ...e };
	if (!e && !t || e.rowStart > t.rowEnd || e.rowEnd < t.rowStart || e.colStart > t.colEnd || e.colEnd < t.colStart) return null;
	let n = Math.max(e.colStart, t.colStart), o = Math.max(e.rowStart, t.rowStart), a = Math.min(e.colEnd, t.colEnd), l = Math.min(e.rowEnd, t.rowEnd), i = r;
	return i ? (i.colStart = n, i.rowStart = o, i.colEnd = a, i.rowEnd = l) : i = {
		colStart: n,
		rowStart: o,
		colEnd: a,
		rowEnd: l
	}, i;
}
function it(e, t, r) {
	if (!e && !t) return null;
	if (!e) return r ? t : { ...t };
	if (!t) return r ? e : { ...e };
	let n = Math.min(e.colStart, t.colStart), o = Math.min(e.rowStart, t.rowStart), a = Math.max(e.colEnd, t.colEnd), l = Math.max(e.rowEnd, t.rowEnd), i = r;
	return i ? (i.colStart = n, i.rowStart = o, i.colEnd = a, i.rowEnd = l) : i = {
		colStart: n,
		rowStart: o,
		colEnd: a,
		rowEnd: l
	}, i;
}
function xr(e, t) {
	return e === t || !(!e || !t) && e.rangeIndex === t.rangeIndex && !!br(e.cell, t.cell) && vr(e.ranges, t.ranges);
}
function Bn(e, t, r) {
	if (!e || e.length === 0) return null;
	if (e.length === 1 && !t) return e[0];
	let n = e[0];
	for (let o = 1; o < e.length; o++) n = it(n, e[o], r);
	return t && (n = it(n, t, r)), n;
}
function Kn(e) {
	return !!e && !(typeof e.colStart != "number" || e.colStart < 0) && !(typeof e.colEnd != "number" || e.colEnd < e.colStart) && !(typeof e.rowStart != "number" || e.rowStart < 0) && !(typeof e.rowEnd != "number" || e.rowEnd < e.rowStart);
}
function zn(e, t) {
	if (!t || t.length === 0) return e;
	let r = e, n = null;
	for (; !dt(r, n);) n = r, r = Tr(n, t);
	return r;
}
function Tr(e, t) {
	if (!t || t.length === 0) return e;
	let r = { ...e };
	for (let n = 0; n < t.length; n++) {
		let o = t[n];
		ft(r, o) && (r.rowStart = Math.min(r.rowStart, o.rowStart), r.colStart = Math.min(r.colStart, o.colStart), r.rowEnd = Math.max(r.rowEnd, o.rowEnd), r.colEnd = Math.max(r.colEnd, o.colEnd));
	}
	return r;
}
function Vn(e, t = -e.rowStart, r = -e.colStart, n) {
	return n ? (n.colStart = e.colStart + r, n.rowStart = e.rowStart + t, n.colEnd = e.colEnd + r, n.rowEnd = e.rowEnd + t, n) : {
		colStart: e.colStart + r,
		rowStart: e.rowStart + t,
		colEnd: e.colEnd + r,
		rowEnd: e.rowEnd + t
	};
}
function Cr(e, t) {
	return e ? e.scope ? {
		colStart: e.colIndex ?? e.colStart ?? t?.colStart ?? 0,
		rowStart: e.rowIndex ?? e.rowStart ?? t?.rowStart ?? 0,
		colEnd: e.colIndex ?? e.colEnd ?? t?.colEnd ?? 0,
		rowEnd: e.rowIndex ?? e.rowEnd ?? t?.rowEnd ?? 0,
		scope: e.scope
	} : {
		colStart: e.colIndex ?? e.colStart ?? t?.colStart ?? 0,
		rowStart: e.rowIndex ?? e.rowStart ?? t?.rowStart ?? 0,
		colEnd: e.colIndex ?? e.colEnd ?? t?.colEnd ?? 0,
		rowEnd: e.rowIndex ?? e.rowEnd ?? t?.rowEnd ?? 0
	} : null;
}
function Xn(e, t) {
	if (!e) return null;
	let r = e.length, n = Array(r);
	for (let o = 0; o < r; o++) n[o] = Cr(e[o], t);
	return n;
}
function Gn(e, t, r) {
	return e ? r ? (r.colStart = e.colStart ?? t.colStart, r.rowStart = e.rowStart ?? t.rowStart, r.colEnd = e.colEnd ?? t.colEnd, r.rowEnd = e.rowEnd ?? t.rowEnd, r) : {
		colStart: e.colStart ?? t.colStart,
		rowStart: e.rowStart ?? t.rowStart,
		colEnd: e.colEnd ?? t.colEnd,
		rowEnd: e.rowEnd ?? t.rowEnd
	} : t;
}
var Hn = [null, null], Wn = (e, t, r) => {
	if (e[0].value === e[1].value) return t;
};
function Ar(e, t = 2, r, n = ue.Row, o) {
	let a = [...e];
	if (t <= 0 || e.length <= 1) return a;
	let l = n === ue.Column, i = 0, u = !1;
	do {
		let p = a.sort(wr(l ? ue.Row : ue.Column));
		a = [], a.push(p[0]);
		let h = p.length, c = 0, g = p[0], T = g.colStart, I = g.rowStart, M = g.colEnd, H = g.rowEnd;
		for (let E = 1; E < h; E++) {
			let C = p[E], R = !1;
			if (R = l ? g && I === C.rowStart && H === C.rowEnd && M + 1 === C.colStart : g && T === C.colStart && M === C.colEnd && H + 1 === C.rowStart, R) {
				let P = {
					colStart: T,
					rowStart: I,
					colEnd: l ? C.colEnd : M,
					rowEnd: l ? H : C.rowEnd
				};
				if (g.value !== void 0 && (P.value = g.value), r) {
					let Z = o ?? [null, null];
					Z[0] = g, Z[1] = C, P = r(Z, P, n);
				}
				if (P) {
					a[c] = P, u = !0, g = P, T = g.colStart, I = g.rowStart, M = g.colEnd, H = g.rowEnd;
					continue;
				}
			}
			a[++c] = C, g = C, T = g.colStart, I = g.rowStart, M = g.colEnd, H = g.rowEnd;
		}
		i++, l = !l, i === 1 && (u = !0);
	} while (i < t && u && a.length > 1);
	return a;
}
function Jn(e, t = !1) {
	let r = [], n, o = null, a = -(2 ** 53 - 1), l = -(2 ** 53 - 1);
	return {
		append: (i, u, p) => {
			let h = !0, c = p !== void 0;
			if (c) {
				let I = e ? e(n, p, t) : n === p ? p : void 0;
				I === void 0 ? h = !1 : p = I;
			}
			if (h && u === l + 1 && i === a) return t ? o.rowEnd = u : o.colEnd = u, l = u, void (n = p);
			o && r.push(o);
			let g = t ? i : u, T = t ? u : i;
			o = {
				colStart: g,
				rowStart: T,
				colEnd: g,
				rowEnd: T
			}, c && (o.value = p), a = i, l = u, n = p;
		},
		done: (i) => (o &&= (r.push(o), null), i ? Ar(r, 3, i === !0 ? Wn : i, t ? ue.Column : ue.Row, Hn) : r)
	};
}
var Se = {
	Close: "close",
	Blank: "blank",
	Inside: "inside",
	Tear: "tear"
};
function Yn(e, t, r) {
	let n = r === ue.Row;
	return (n ? e.colStart === t.colStart && e.colEnd === t.colEnd : e.rowStart === t.rowStart && e.rowEnd === t.rowEnd) ? (n ? t.rowStart > e.rowStart && t.rowStart <= e.rowEnd : t.colStart > e.colStart && t.colStart <= e.colEnd) ? Se.Inside : Se.Close : (n ? e.rowEnd >= t.rowStart && e.colStart <= t.colEnd && e.colEnd >= t.colStart : e.colEnd >= t.colStart && e.rowStart <= t.rowEnd && e.rowEnd >= t.rowStart) ? Se.Tear : Se.Blank;
}
function qn(e) {
	return e === Se.Inside || e === Se.Tear;
}
var q = {
	Up: "up",
	Down: "down",
	Left: "left",
	Right: "right"
}, W = {
	Html: "text/html",
	Plain: "text/plain",
	Png: "image/png"
};
he({
	findNextCellWithinSelection: () => Ir,
	traverseHiddenHeaders: () => de
});
function de(e, t, r, n) {
	if (!e) return t;
	let o = t, a = r === q.Right || r === q.Down;
	for (;;) {
		let l = e(o, !a);
		if (l === 0) return o;
		let i = a ? o + l : o - l;
		if (n !== void 0 && (a ? i > n : i < n)) return n;
		o = i;
	}
}
function Ir(e, t = q.Right, r, n, o, a = null) {
	if (a && xr(a, e)) return e;
	let l = e.ranges, i = e.rangeIndex, u = l[i];
	if (!ft({
		rowStart: e.cell.rowIndex,
		colStart: e.cell.colIndex,
		rowEnd: e.cell.rowIndex,
		colEnd: e.cell.colIndex
	}, u)) return e;
	let p = { ...e.cell }, h = i;
	switch (t) {
		case q.Right:
			p.colIndex = de(o, p.colIndex + 1, t, u.colEnd + 1);
			break;
		case q.Left:
			p.colIndex = de(o, p.colIndex - 1, t, u.colStart - 1);
			break;
		case q.Down:
			p.rowIndex = de(n, p.rowIndex + 1, t, u.rowEnd + 1);
			break;
		case q.Up: p.rowIndex = de(n, p.rowIndex - 1, t, u.rowStart - 1);
	}
	let c = (I) => {
		if (I) {
			h = i >= l.length - 1 ? 0 : i + 1;
			let M = l[h];
			p = {
				colIndex: M.colStart,
				rowIndex: M.rowStart
			};
		} else {
			h = i <= 0 ? l.length - 1 : i - 1;
			let M = l[h];
			p = {
				colIndex: M.colEnd,
				rowIndex: M.rowEnd
			};
		}
	};
	if (t === q.Right && p.colIndex > u.colEnd && p.rowIndex === u.rowEnd) c(!0);
	else if (t === q.Left && p.colIndex < u.colStart && p.rowIndex === u.rowStart) c(!1);
	else if (t === q.Down && p.colIndex === u.colEnd && p.rowIndex > u.rowEnd) c(!0);
	else if (t === q.Up && p.colIndex === u.colStart && p.rowIndex < u.rowStart) c(!1);
	else {
		let I = p.rowIndex, M = p.colIndex;
		switch (t) {
			case q.Right:
				M > u.colEnd && (I = de(n, I + 1, t, u.rowEnd + 1), M = u.colStart, I > u.rowEnd && (I = u.rowStart));
				break;
			case q.Left:
				M < u.colStart && (I = de(n, I - 1, t, u.rowStart - 1), M = u.colEnd, I < u.rowStart && (I = u.rowEnd));
				break;
			case q.Down:
				I > u.rowEnd && (M = de(o, M + 1, t, u.colEnd + 1), I = u.rowStart, M > u.colEnd && (M = u.colStart));
				break;
			case q.Up: I < u.rowStart && (M = de(o, M - 1, t, u.colStart - 1), I = u.rowEnd, M < u.colStart && (M = u.colEnd));
		}
		p = {
			rowIndex: I,
			colIndex: M
		};
	}
	let g = r(p);
	if (!Sr(g, u)) {
		let I = Er(g, u);
		I && (g = I);
	}
	let T = {
		rowStart: de(n, g.rowStart, q.Down, g.rowEnd),
		colStart: de(o, g.colStart, q.Right, g.colEnd),
		rowEnd: de(n, g.rowEnd, q.Up, g.rowStart),
		colEnd: de(o, g.colEnd, q.Left, g.colStart)
	};
	if (T.rowStart !== p.rowIndex || T.colStart !== p.colIndex) {
		switch (t) {
			case q.Right:
				l[h].colStart === T.colStart && l[h].colEnd === T.colEnd && (p.rowIndex = T.rowEnd), p.colIndex = T.colEnd;
				break;
			case q.Left:
				l[h].colStart === T.colStart && l[h].colEnd === T.colEnd && (p.rowIndex = T.rowStart), p.rowIndex === T.rowStart ? p.colIndex = T.colStart + 1 : p.colIndex = T.colStart;
				break;
			case q.Down:
				l[h].rowStart === T.rowStart && l[h].rowEnd === T.rowEnd && (p.colIndex = T.colEnd), p.rowIndex = T.rowEnd;
				break;
			case q.Up: l[h].rowStart === T.rowStart && l[h].rowEnd === T.rowEnd && (p.colIndex = T.colStart), p.colIndex === T.colStart ? p.rowIndex = T.rowStart + 1 : p.rowIndex = T.rowStart;
		}
		return Ir({
			cell: p,
			ranges: e.ranges,
			rangeIndex: h
		}, t, r, n, o, a ?? e);
	}
	return {
		ranges: e.ranges,
		cell: p,
		rangeIndex: h
	};
}
var Zn = class {
	constructor() {
		this._onceMessageKeys = /* @__PURE__ */ new Set(), this._overrides = null;
	}
	setOverrides(e) {
		this._overrides = e ?? null;
	}
	getOverrides() {
		return this._overrides;
	}
	_write(e, t, r) {
		if (r?.onceKey) {
			let a = this._onceMessageKeys;
			if (a.has(r.onceKey)) return;
			a.add(r.onceKey);
		}
		let n = r?.meta, o = this._overrides;
		if (o) {
			let a = o[e];
			if (a) return void a.bind(o)(t, r);
		}
		n === void 0 ? console[e](t) : console[e](t, n);
	}
	log(e, t) {
		return this._write("log", e, t);
	}
	error(e, t) {
		return this._write("error", e, t);
	}
	warn(e, t) {
		return this._write("warn", e, t);
	}
	debug(e, t) {
		return this._write("debug", e, t);
	}
};
new Zn();
var Ye;
he({
	EmptyBounds: () => to,
	EmptyRect: () => eo,
	EmptyTopLeft: () => Qn
});
var Qn = Object.freeze({
	left: 0,
	top: 0
}), eo = Object.freeze({
	left: 0,
	top: 0,
	bottom: 0,
	right: 0
}), to = Object.freeze({
	x: 0,
	y: 0,
	width: 0,
	height: 0
});
he({
	canUseDOM: () => $r,
	getDPI: () => no,
	hasFocus: () => Rr,
	openFileDialog: () => ro,
	scrollIntoContainer: () => oo,
	whenFocus: () => ao
});
var $r = !(typeof window > "u" || !window.document || !window.document.createElement), ro = (e = "*.*") => new Promise((t, r) => {
	if (!$r) return void r("Unable to open dialog with no dom.");
	let n = document.createElement("input");
	n.type = "file", n.accept = e;
	let o = null, a = !1;
	globalThis.addEventListener?.("focus", () => {
		setTimeout(() => {
			o || a || (a = !0, t(null));
		}, 1e3);
	}, {
		once: !0,
		passive: !0
	}), n.onchange = () => {
		if (o = n.files?.[0] ?? null, o) {
			if (a) return void console.warn("File open detected after faux cancel.", o);
			t(o);
		}
	}, n.autofocus = !0, n.click();
}), no = () => {
	let e = 1;
	return typeof window == "object" && (e = window.devicePixelRatio || 1), e;
}, Rr = (e, t = !1) => (document.hasFocus() || t) && (e === document.activeElement || e?.contains(document.activeElement)), oo = (e, t, r = "auto") => {
	if ((() => {
		if (Ye === void 0) {
			let u = !1;
			try {
				document.createElement("div").scrollIntoView({ get container() {
					return u = !0, "nearest";
				} });
			} catch {}
			Ye = u;
		}
		return Ye;
	})()) return void t.scrollIntoView({
		block: "nearest",
		inline: "nearest",
		behavior: r,
		container: "nearest"
	});
	let n = e.getBoundingClientRect(), o = t.getBoundingClientRect(), a = n.top + e.clientTop, l = a + e.clientHeight, i = 0;
	o.top < a ? i = o.top - a : o.bottom > l && (i = Math.min(o.bottom - l, o.top - a)), i !== 0 && e.scrollBy({
		top: i,
		behavior: r
	});
}, ao = async (e, t = !1) => new Promise((r) => {
	Rr(e, t) ? r(!0) : e.addEventListener("focusin", () => {
		r(!0);
	}, { once: !0 }), e.focus();
});
he({
	cancelTimeout: () => fo,
	debounce: () => so,
	nextTick: () => uo,
	rafThrottle: () => co,
	requestTimeout: () => po,
	throttle: () => lo
});
var ke = globalThis.requestAnimationFrame, io = globalThis.cancelAnimationFrame;
function lo(e, t) {
	let r = null;
	return (...n) => {
		let o = Date.now();
		(!r || o - r >= t) && (r = o, e(...n));
	};
}
function so(e, t = 300, r = !1) {
	let n, o, a, l = null, i = 0;
	function u() {
		let h = Date.now() - i;
		h < t && h >= 0 ? l = setTimeout(u, t - h) : (l = null, r || (a = e.apply(o, n), o = n = null));
	}
	t ??= 100;
	let p = function() {
		o = globalThis, n = arguments, i = Date.now();
		var h = r && !l;
		return l ||= setTimeout(u, t), h && (a = e.apply(o, n), o = n = null), a;
	};
	return p.clear = function() {
		l &&= (clearTimeout(l), null);
	}, p.flush = function() {
		l &&= (a = e.apply(o, n), o = n = null, clearTimeout(l), null);
	}, p;
}
var co = (e) => {
	let t, r = !1, n = function() {
		r = !1, e(t);
	};
	return function(o) {
		t = o, t && t.persist && t.persist(), r || (r = !0, ke(n));
	};
}, uo = (e) => {
	if (typeof ke == "function") ke(() => {
		e();
	});
	else {
		let t = globalThis.setImmediate;
		(typeof t == "function" ? t : setTimeout)(() => {
			e();
		});
	}
}, vt = typeof performance == "object" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), fo = (e) => {
	io(e.id);
}, po = (e, t) => {
	let r = vt(), n = { id: ke(function o() {
		vt() - r >= t ? e.call(null) : n.id = ke(o);
	}) };
	return n;
};
he({ MESSAGE_ERROR_INVALID_ARG: () => mo });
var mo = (e) => \`Invalid argument: '\${e}'.\`;
he({
	APP_MIME_TYPE: () => go,
	DEFAULT_MIME_TYPE: () => "*/*",
	JSONStableStringify: () => So,
	arrayBufferToBase64: () => Nr,
	base64ToArrayBuffer: () => bo,
	blobToString: () => lt,
	isLittleEndian: () => wo,
	isNodeBuffer: () => ho,
	isSharedArrayBufferSupported: () => yo
});
var go = "application/octet-stream", Ae = globalThis.Buffer, ho = (e) => Ae?.isBuffer(e) ?? !1, yo = typeof SharedArrayBuffer == "function" && (globalThis.crossOriginIsolated === void 0 || globalThis.crossOriginIsolated === !0), wo = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1, Et = globalThis.FileReader, bo = (e) => {
	let t = typeof globalThis.atob == "function" ? globalThis.atob(e) : Ae.from(e, "base64").toString("binary"), r = t.length, n = new Uint8Array(r);
	for (let o = 0; o < r; o++) n[o] = t.charCodeAt(o);
	return n.buffer;
}, Nr = (e) => {
	let t = new Uint8Array(e), r = t.byteLength, n = "";
	for (let o = 0; o < r; o++) n += String.fromCharCode(t[o]);
	if (typeof globalThis.btoa == "function") return globalThis.btoa(n);
	if (Ae) return Ae.from(n, "binary").toString("base64");
	throw Error("Unsupported environment");
}, lt = (e) => new Promise((t, r) => {
	if (e) if (Et) {
		let n = new Et();
		n.onload = () => {
			t(n.result);
		}, n.onerror = () => {
			r(n.error);
		}, n.readAsText(e);
	} else if (Ae) {
		let n = (o) => Ae.from(o).toString("utf-8");
		e.arrayBuffer().then((o) => {
			t(n(o));
		}).catch((o) => {
			r(o);
		});
	} else r(/* @__PURE__ */ Error("Unsupported environment"));
	else t("");
});
function So(e, t) {
	t ||= {}, typeof t == "function" && (t = { cmp: t });
	let r = typeof t.cycles == "boolean" && t.cycles, n = t.cmp && (o = t.cmp, function(l) {
		return function(i, u) {
			return o({
				key: i,
				value: l[i]
			}, {
				key: u,
				value: l[u]
			});
		};
	});
	var o;
	let a = [];
	return (function l(i) {
		if (i && i.toJSON && typeof i.toJSON == "function" && (i = i.toJSON()), i === void 0) return;
		if (typeof i == "number") return isFinite(i) ? "" + i : "null";
		if (typeof i != "object") return JSON.stringify(i);
		let u;
		if (Array.isArray(i)) {
			u = "[";
			for (let c = 0; c < i.length; c++) c && (u += ","), u += l(i[c]) || "null";
			return u + "]";
		}
		if (i === null) return "null";
		if (a.indexOf(i) !== -1) {
			if (r) return JSON.stringify("__cycle__");
			throw TypeError("Converting circular structure to JSON");
		}
		let p = a.push(i) - 1, h = Object.keys(i).sort(n && n(i));
		u = "";
		for (let c = 0; c < h.length; c++) {
			let g = h[c], T = l(i[g]);
			T && (u && (u += ","), u += JSON.stringify(g) + ":" + T);
		}
		return a.splice(p, 1), "{" + u + "}";
	})(e);
}
var vo;
he({
	DATA_URL_PNG_PREFIX: () => _r,
	getImageDataUrl: () => Eo,
	loadImageDetails: () => xo
});
var _r = "data:image/png;base64,", Lr = "Unable to resolve image.", xt = (e) => new Promise(async (t, r) => {
	let n = null;
	try {
		let o = n = new Image();
		o.src = e, o.addEventListener("load", function() {
			t({
				width: o.naturalWidth,
				height: o.naturalHeight
			});
		}, { once: !0 }), o.addEventListener("error", function(a) {
			URL.revokeObjectURL(e);
			let l = a?.error?.message ?? "";
			l &&= \`: \${l}\`, r(\`Invalid Image\${l}\`);
		}, { once: !0 }), await o.decode();
	} catch {
		n?.src && URL.revokeObjectURL(n.src);
	}
	n || r(Error(Lr));
}), Eo = (e, t = 1) => new Promise(async (r, n) => {
	let o = null;
	try {
		let a = o = new Image();
		a.src = e, a.addEventListener("load", function() {
			try {
				let l = document.createElement("canvas");
				l.width = a.naturalWidth, l.height = a.naturalHeight;
				let i = l.getContext("2d");
				if (!i) throw Error("Unable to create 2d context");
				i.drawImage(a, 0, 0);
				let u = l.toDataURL("image/png", t);
				r({
					elemImg: a,
					dataUrl: u
				});
			} catch (l) {
				URL.revokeObjectURL(e), n(l);
			}
		}, { once: !0 }), a.addEventListener("error", function() {
			URL.revokeObjectURL(e), n("Invalid Image");
		}, { once: !0 }), await a.decode();
	} catch {
		o?.src && URL.revokeObjectURL(o.src);
	}
	o || n(Error(Lr));
}), qe = "image/svg+xml", xo = async (e, t = null) => {
	let r = null, n = async () => {
		try {
			let a = t ?? "image/*", l = URL.createObjectURL(new Blob([e], { type: a }));
			r = {
				mimeType: a,
				naturalSize: await xt(l),
				asUrl: l
			};
		} catch {}
	}, o = async () => {
		try {
			let a = new TextDecoder().decode(e), l = URL.createObjectURL(new Blob([a], { type: qe })), i = await xt(l);
			r = {
				mimeType: t ?? qe,
				naturalSize: i,
				asUrl: l,
				asSVGText: a
			};
		} catch {}
	};
	if (t === qe ? await o() : t?.startsWith("image/") ? await n() : (await n(), r || await o()), !r) throw Error("Failed to load image");
	return r;
}, Tt = /* @__PURE__ */ new Set(), To = (e) => {
	Tt.has(e) || (Tt.add(e), console.warn(\`Unknown property '\${e}' in update; ignoring.\`));
};
(function(e) {
	e.PassThrough = Object.freeze({});
	let t = e.resolveTypedUpdates = (r, n, o, a, l = !1) => {
		if (r === null) return r;
		if (r === void 0) return a;
		let i = r;
		if (n?.shorthand) {
			let c = n?.shorthand(r, o);
			c !== void 0 && (i = c);
		}
		if (i !== null && n?.getSubType) {
			let c = n.getSubType(i, a);
			c && (n = c);
		}
		let u = n?.properties, p = n?.arrayType ?? !1, h = i;
		if (n && n.merge && h && a) h = n.merge(h, a, o);
		else if (!p && u) {
			let c = Object.keys({
				...i,
				...a
			});
			h = null;
			let g = c.length;
			for (let T = 0; T < g; T++) {
				let I = c[T], M, H = i?.[I];
				if (H !== void 0) {
					let E = u[I];
					if (!E) {
						To(I);
						continue;
					}
					M = t(H, E, o, a?.[I], l);
				} else M = a?.[I];
				M == null ? l && H === null && (h ??= {}, h[I] = null) : (h ??= {}, h[I] = M);
			}
		}
		return h;
	};
})(vo ||= {});
var pt = {
	code: "safari",
	message: \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`
}, kr = {
	code: "perms",
	message: \`You do not have permissions to access the clipboard.
All copy and paste operations will be limited to the browser tab.\`
}, Ct = Xe() === fe.Safari ? pt : kr, Co = {
	Safari: pt,
	Perms: kr,
	PermsWrite: Ct,
	PermsRead: Ct
}, Ze = async () => new Promise((e) => {
	document.hasFocus() ? e() : globalThis.addEventListener?.("focus", () => {
		e();
	}, { once: !0 }), document.activeElement.focus?.();
}), Qe = async (e, t, r) => {
	if (Xe() === fe.Safari) return await r(Error(pt.message));
	try {
		let n = async (l) => {
			try {
				return await l();
			} catch (i) {
				if (i.message?.includes("Document is not focused")) return !1;
				throw i;
			}
		}, o = await globalThis?.navigator?.permissions?.query({
			name: e,
			allowWithoutGesture: !0,
			allowWithoutSanitization: !0
		}), a = !1;
		if (o.state === "prompt" && (a = await n(t)), a || o.state !== "granted" || (a = await t()), !a) return await r(Error(o.state));
	} catch (n) {
		return n.message === "No valid data on clipboard" || n.name === "DataError" ? void 0 : await r(n);
	}
}, Or = async (e) => {
	if (!e) return null;
	try {
		return await e.read({ unsanitized: [W.Html] });
	} catch {}
	return await e.read();
}, Ao = async (e, t) => {
	if (!e) return null;
	let r = await Or(e), n = !1;
	for (let o = 0; !n && r && o < r.length; o++) if (n = r[o].types.includes(t), n) return await r[o].getType(t);
	return null;
};
if (!globalThis.ClipboardItem) {
	let e = (r, n) => new Blob([n], { type: r });
	class t {
		constructor(n, o) {
			this._items = {}, this._types = Object.keys(n);
			let a = {}, l = Object.keys(n);
			for (let i = 0; i < l.length; i++) {
				let u = l[i], p = n[u];
				a[u] = typeof p == "string" ? e(u, p) : p;
			}
			this._items = a, this._presentationStyle = o?.presentationStyle ?? "unspecified";
		}
		get types() {
			return this._types;
		}
		getType(n) {
			return Promise.resolve(this._items[n]);
		}
		supports(n) {
			return !0;
		}
	}
	globalThis.ClipboardItem = t;
}
var At, st = async (e, t = W.Html) => new Promise(async (r, n) => {
	try {
		let o = await Ao(e, t);
		if (o) {
			let a = new FileReader();
			a.onload = () => {
				r(a.result);
			}, a.onerror = () => {
				r("");
			}, a.readAsText(o);
		} else r("");
	} catch (o) {
		n(o);
	}
}), It = async (e, t = W.Html) => {
	let r = await st(e, t);
	if (!r) return null;
	let n = null;
	try {
		n = new DOMParser().parseFromString(r, W.Html);
	} catch {
		console.warn("Can't parse html from clipboard.");
	}
	return n;
}, Io = async (e) => {
	e && await e.writeText("");
}, Oe = "clipboard-uuid", Re = "web text/uuid", $t = (e) => \`<div style="display:none" \${Oe}="\${e}"/>\`, Rt = { type: W.Plain }, Nt = { type: W.Html }, _t = { type: Re }, $o = (e, t) => {
	let r = null;
	try {
		let n = new DOMParser().parseFromString(t, W.Html);
		n.body.firstElementChild?.setAttribute(Oe, e), r = n.getElementsByTagName("body")[0].innerHTML;
	} catch (n) {
		console.warn("Can't embed uuid.", n);
	}
	return r;
}, Lt = (e, t) => {
	if (!t || !e) return !1;
	try {
		let r = t.querySelectorAll(\`[\${Oe}="\${e}"]\`);
		if (r && r.length === 1) return !0;
		if (t.querySelector("parsererror")) throw Error("We are unable to parse node");
		return !1;
	} catch {
		return !1;
	}
}, kt = class {
	constructor(e) {
		if (this._state = null, this._nativeClipboard = null, this._onFocus = null, this._onBlur = null, e?.nativeClipboard === void 0 || e?.nativeClipboard === !0) try {
			this._nativeClipboard = globalThis?.navigator.clipboard;
		} catch {
			e?.nativeClipboard === !0 && console.warn("NativeClipboard option set to true but no native clipboard available.");
		}
		else this._nativeClipboard = e?.nativeClipboard === !1 ? null : e?.nativeClipboard ?? null;
		this._disableCheckOnFocus = e?.disableCheckOnFocus ?? !1, this._init();
	}
	async _checkForChanges() {
		this._nativeClipboard && this._state && !this._disableCheckOnFocus && await Qe("clipboard-read", async () => {
			await Ze();
			let e = await st(this._nativeClipboard, Re);
			if (!this._state || e && e === this._state.uuid) return !0;
			let t = await It(this._nativeClipboard, W.Html);
			return !this._state || (Lt(this._state.uuid, t) || this.clear(), !0);
		}, async (e) => {
			e?.message === "denied" || e.message?.includes("Document is not focused") || Xe() === fe.Safari || console.warn("Unable to detect clipboard changes: ", e);
		});
	}
	_init() {
		let e = this;
		this._listeners = /* @__PURE__ */ new Map(), this._listenersCapture = /* @__PURE__ */ new Map(), this._state = null, this._nativeClipboard && (this._onFocus = () => {
			e._checkForChanges();
		}, this._onBlur = () => {
			globalThis.addEventListener?.("focus", e._onFocus, { once: !0 });
		}, globalThis.addEventListener?.("blur", this._onBlur), this._nativeClipboard.addEventListener("clipboardchange", (t) => {
			e._checkForChanges();
		}));
	}
	async read() {
		if (!this._nativeClipboard) return this._state?.items ?? null;
		let e = this;
		return await Qe("clipboard-read", async () => {
			if (await Ze(), this._state?.uuid) {
				let t = await st(this._nativeClipboard, Re);
				if (t && t === e._state?.uuid) return !0;
				let r = await It(this._nativeClipboard, W.Html);
				if (Lt(e._state?.uuid, r)) return !0;
			}
			return e._state = {
				items: await Or(this._nativeClipboard),
				uuid: null,
				ref: null
			}, this.dispatchEvent(new Event("clipboardread")), !0;
		}, async (t) => {
			this.dispatchEvent(new Event("clipboarderrorread"));
		}), this._state?.items ?? [];
	}
	async write(e) {
		return this._write({
			uuid: Ke(),
			items: e,
			ref: null
		});
	}
	async _write(e) {
		if (!this._nativeClipboard) return this._state = e, this.dispatchEvent(new Event("clipboardwrite")), void this.dispatchEvent(new Event("clipboardchange"));
		let t = this, r = [], n = e.uuid, o = e.items ?? [], a = () => {
			t._state = {
				uuid: n,
				ref: e.ref,
				items: r
			}, t.dispatchEvent(new Event("clipboardwrite")), t.dispatchEvent(new Event("clipboardchange"));
		};
		await Qe("clipboard-write", async () => {
			await Ze(), n && o.length === 0 && (o.push(new ClipboardItem({ [Re]: new Blob([n], _t) })), o.push(new ClipboardItem({ [W.Html]: new Blob([$t(n)], Nt) })));
			for (let l = 0; l < Math.min(1, o.length); l++) {
				let i = o[l], u = i.types.indexOf(W.Html), p = null;
				if (u !== -1 && (p = await lt(await i.getType(W.Html)), p &&= $o(n, p)), !p && i.types.includes(W.Plain)) {
					let I = await i.getType(W.Plain);
					if (I) {
						let M = null;
						typeof I == "string" ? (console.warn("text as string", I), M = I) : M = await lt(I), M && (p = \`<div \${Oe}="\${n}">\${M}</div>\`);
					}
				}
				if (!p && i.types.includes(W.Png)) {
					let I = Nr(await (await i.getType(W.Png)).arrayBuffer());
					p = \`<div \${Oe}="\${n}"><img src="\${_r + I}"/></div>\`;
				}
				!p && n && (p = $t(n));
				let h = new Blob([p ?? ""], Nt), c = {}, g = i.types, T = g.length;
				for (let I = 0; I < T; I++) {
					let M = g[I];
					c[M] = I === u ? h : i.getType(M);
				}
				p && u === -1 && (c[W.Html] = h), n && (c[Re] = new Blob([n], _t)), r.push(new ClipboardItem(c));
			}
			try {
				r && r.length !== 0 ? await this._nativeClipboard.write(r) : await Io(this._nativeClipboard);
			} catch (l) {
				l.message?.includes("Document is not focused") || console.warn("Unable to write to native clipboard: ", l);
			}
			return a(), !0;
		}, async (l) => {
			this.dispatchEvent(new Event("clipboarderrorwrite")), a();
		});
	}
	async writeReference(e) {
		if (!e) return void this.clear();
		let t = null, r = {};
		try {
			let o = await e.toText?.() ?? null;
			o && (r[W.Plain] = new Blob([o ?? ""], Rt));
		} catch (o) {
			t = o;
		}
		try {
			let o = await e.toHtml?.() ?? null;
			o && (r[W.Html] = new Blob([o], { type: W.Html }));
		} catch (o) {
			t = o, console.warn("export to html", o);
		}
		try {
			let o = await e.toImage?.() ?? null;
			o && (r[W.Png] = o);
		} catch (o) {
			t = o, console.warn("export to png", o);
		}
		let n = this._write({
			uuid: Ke(),
			ref: e,
			items: Object.keys(r).length > 0 ? [new ClipboardItem(r)] : null
		});
		if (t) throw t;
		return n;
	}
	clear(e = !1) {
		this._state && (this._state = null, e && this._write({
			uuid: null,
			ref: null,
			items: null
		}), this.dispatchEvent(new Event("clipboardwrite")), this.dispatchEvent(new Event("clipboardchange")));
	}
	async readReference() {
		return await this.read(), this._state?.ref ?? null;
	}
	readText() {
		return new Promise(async (e, t) => {
			let r = await this.read(), n = null, o = r ? r.length : 0;
			for (let l = 0; !n && l < o; l++) {
				let i = r[l];
				i.types.includes(W.Plain) && (n = await i.getType(W.Plain));
			}
			if (!n) return void e("");
			let a = new FileReader();
			a.onload = () => {
				e(a.result);
			}, a.readAsText(n), a.onerror = (l) => {
				t(l);
			};
		});
	}
	async writeText(e) {
		let t = [new ClipboardItem({ [W.Plain]: new Blob([e], Rt) })];
		return this._write({
			uuid: Ke(),
			items: t,
			ref: null
		});
	}
	addEventListener(e, t, r = {}) {
		let n = r?.capture ? this._listenersCapture : this._listeners, o = n.get(e);
		o || (o = /* @__PURE__ */ new Map(), n.set(e, o)), t && o.set(t, typeof r == "boolean" ? {} : r);
	}
	dispatchEvent(e) {
		if (!e) return !1;
		let t = (r) => {
			let n = r.get(e.type);
			n && n.forEach((o, a) => {
				try {
					typeof a == "function" ? a(e) : a.handleEvent && a.handleEvent(e), o.once && n.delete(a);
				} catch (l) {
					console.warn(l);
				}
			});
		};
		return t(this._listenersCapture), t(this._listeners), !0;
	}
	removeEventListener(e, t, r) {
		let n = r?.capture ? this._listenersCapture : this._listeners, o = n.get(e);
		o && t && (o.delete(t), o.size === 0 && n.delete(e));
	}
	close() {
		this._onFocus && globalThis.removeEventListener?.("focus", this._onFocus), this._onBlur && globalThis.removeEventListener?.("blur", this._onBlur);
	}
};
(At = kt ||= {}).ErrorMessages = Co, At.Global = new kt();
new TextDecoder();
const w = Object.freeze({
	/** Exported function has no body. */
	NoBody: "SXL1001",
	/** Anonymous exported function is not allowed. */
	Anonymous: "SXL1002",
	/** Internal parse failure while analyzing the module. */
	ParseError: "SXL1003",
	/** Invalid parameter type. */
	InvalidParamType: "SXL2001",
	/** Invalid return type. */
	InvalidReturnType: "SXL2002",
	/** \`undefined\` / \`null\` / \`void\` is not valid as an input type. */
	UndefinedInput: "SXL2003",
	/** A type annotation is required but missing. */
	MissingType: "SXL2004",
	/** An \`Array\` must be typed (e.g. \`number[]\`, not bare \`[]\`). */
	UntypedArray: "SXL2005",
	/** A generic type must be supplied exactly one type argument. */
	GenericArity: "SXL2006",
	/** A return type cannot combine multiple modifiers (e.g. async + stream). */
	MultipleModifiers: "SXL2007",
	/** A context parameter must be the first parameter. */
	ContextNotFirst: "SXL2010",
	/** More than one \`Lambda\` parameter. */
	MultipleLambda: "SXL2020",
	/** A \`Lambda\` parameter must be the last parameter. */
	LambdaNotLast: "SXL2021",
	/** A \`Lambda\` parameter/return scalar type mismatch. */
	LambdaScalarMismatch: "SXL2022",
	/** \`Lambda\` is not valid as a return type. */
	LambdaReturn: "SXL2023",
	/** A bare function type is not valid as a return type. */
	FunctionReturn: "SXL2024",
	/** A \`Lambda\` function type has the wrong number of parameters. */
	LambdaArity: "SXL2025",
	/** Arrays of more than 2 dimensions are not supported. */
	ArrayDepth: "SXL2030",
	/** \`Repeating<T>\` used somewhere it cannot be (a return type, a rest parameter, nested in an array). */
	RepeatingPosition: "SXL2040",
	/** More than one \`Repeating<T>\` parameter. */
	MultipleRepeating: "SXL2041",
	/** A \`Repeating<T>\` group's slots are malformed (unlabelled tuple member, or a 1-element tuple). */
	RepeatingSlots: "SXL2042",
	/** An optional parameter/slot where a repeating group does not allow one. */
	RepeatingOptional: "SXL2043",
	/** \`Repeating<T, Max>\`'s maximum argument count is not a whole number in range. */
	RepeatingMax: "SXL2044",
	/** An enum mixes number and string members. */
	EnumMixed: "SXL2050",
	/** An enum member is not a constant number or string. */
	EnumMemberNotConstant: "SXL2051",
	/** A parameter type that is not declared in this module, so an enum behind it cannot be read. */
	EnumNotLocal: "SXL2052",
	/** An \`as const\` object used as a parameter type without its same-name type alias. */
	EnumMissingAlias: "SXL2053",
	/** An enum where no single argument is coerced to it (\`IRange<E>\`, \`Lazy<E>\`). */
	EnumPosition: "SXL2054",
	/** \`Omittable<E, V>\` whose \`V\` is neither a member of \`E\` nor \`null\`. */
	EnumOmittedValue: "SXL2055",
	/** No exported functions found in the module. */
	NoExports: "SXL3001",
	/** A \`@param\` tag references a parameter that does not exist. */
	UnknownParam: "SXL3002",
	/** A calculation function takes a built-in function's name. */
	BuiltInName: "SXL3003",
	/** A \`@returnKind\` tag names a value kind that does not exist, or names none at all. */
	UnknownReturnKind: "SXL3005",
	/** A calculation function's name (its \`@name\`, or else its own) is not a name a formula can call. */
	InvalidName: "SXL3006",
	/** Two functions in one module register under the same name (an \`@name\` repeats another's). */
	DuplicateName: "SXL3007",
	/** A function has no JSDoc description. */
	MissingSummary: "SXL9001",
	/** A \`@param\` is missing a description. */
	MissingParamDescription: "SXL9002",
	/**
	* Missing \`@returns\` on a non-void function.
	* @deprecated Retained for code stability but no longer emitted - Excel-style tooltips describe
	* behavior via the summary, so a standalone \`@returns\` warning is noise.
	*/
	MissingReturns: "SXL9003",
	/** Two enum members share a value. */
	EnumDuplicateValue: "SXL9004",
	/** An enum member has no doc comment. */
	EnumMemberUndocumented: "SXL9005"
});
var Fo;
(function(e) {
	e.MAX_TEXT_LENGTH = 32767;
	let t = e.MAX_SIGNIFICANT_DIGITS = 15;
	e.truncateNumberText = function(r) {
		let n = r.length;
		if (n <= t) return r;
		let o = 0, a = null;
		for (let l = 0; l < n; l++) {
			let i = r.charCodeAt(l);
			if (i >= 48 && i <= 57) {
				if (o === 0 && i === 48) continue;
				o++, o > t && ((a ??= r.split(""))[l] = "0");
			} else if ((i === 69 || i === 101) && o > 0) break;
		}
		return a === null ? r : a.join("");
	};
})(Fo ||= {});
var Ut, et, Do, S, me = {
	Number: "number",
	String: "string",
	Boolean: "boolean",
	Error: "error",
	RichData: "richData",
	Null: "null"
}, Pt = {
	...me,
	Date: "date"
}, jt = {
	...me,
	Reference: "reference",
	Array: "array",
	Lambda: "lambda",
	Omitted: "omitted"
};
(et = Ut ||= {}).Axis = {
	Column: "column",
	Row: "row"
}, et.AxisSelection = {
	...Ut.Axis,
	Both: "both"
}, et.Direction = {
	Up: "up",
	Down: "down",
	Left: "left",
	Right: "right"
}, (Do ||= {}).Aggregate = {
	Count: "count",
	NumericalCount: "numericalCount",
	Sum: "sum",
	Average: "average",
	StdDev: "stdDev",
	PopulationStdDev: "stdDevP",
	Variance: "var",
	PopulationVariance: "varP",
	Min: "min",
	Max: "max"
}, (function(e) {
	let t = e.Code = {
		Parse: 0,
		Null: 1,
		Div0: 2,
		Value: 3,
		Ref: 4,
		Name: 5,
		Num: 6,
		NA: 7,
		GettingData: 8,
		Spill: 9,
		Connect: 10,
		Blocked: 11,
		Unknown: 12,
		Field: 13,
		Calc: 14,
		Busy: 16,
		Python: 19,
		Timeout: 20
	}, r = e.Label = {
		Parse: "#PARSE!",
		Null: "#NULL!",
		Div0: "#DIV/0!",
		Value: "#VALUE!",
		Ref: "#REF!",
		Name: "#NAME?",
		Num: "#NUM!",
		NA: "#N/A",
		GettingData: "#GETTING_DATA",
		Spill: "#SPILL!",
		Connect: "#CONNECT!",
		Blocked: "#BLOCKED!",
		Unknown: "#UNKNOWN!",
		Field: "#FIELD!",
		Calc: "#CALC!",
		Busy: "#BUSY!",
		Python: "#PYTHON!",
		Timeout: "#TIMEOUT!"
	};
	class n extends Error {
		constructor(N, L, pe, J) {
			super(pe, J), this._label = L, this._code = N, this.details = J;
		}
		static {
			this.code = S.Code.Unknown;
		}
		get isFormulaError() {
			return !0;
		}
		getLabel() {
			return this._label;
		}
		getCode() {
			return this._code;
		}
		equals(N) {
			return !!N && (this._code === N._code || this._code === N.code);
		}
		get [Symbol.toStringTag]() {
			return "[FormulaError]";
		}
		toString() {
			return this._label;
		}
	}
	e.Known = n;
	class o extends n {
		constructor(N, L) {
			super(t.Parse, r.Parse, N, L);
		}
		static {
			this.code = S.Code.Parse;
		}
		getDetails() {
			let N = this.details;
			return {
				line: N?.line ?? 1,
				column: N?.column ?? 1,
				offset: N?.offset ?? 0,
				length: N?.length ?? 0
			};
		}
	}
	e.Parse = o;
	class a extends n {
		constructor(N, L) {
			super(t.Null, r.Null, N, L);
		}
		static {
			this.code = S.Code.Null;
		}
	}
	e.Null = a;
	class l extends n {
		constructor(N, L) {
			super(t.Div0, r.Div0, N, L);
		}
		static {
			this.code = S.Code.Div0;
		}
	}
	e.Div0 = l;
	class i extends n {
		constructor(N, L) {
			super(t.Value, r.Value, N, L);
		}
		static {
			this.code = S.Code.Value;
		}
	}
	e.Value = i;
	class u extends n {
		constructor(N, L) {
			super(t.Ref, r.Ref, N, L);
		}
		static {
			this.code = S.Code.Ref;
		}
	}
	e.Ref = u;
	class p extends n {
		constructor(N, L) {
			super(t.Name, r.Name, N, L);
		}
		static {
			this.code = S.Code.Name;
		}
	}
	e.Name = p;
	class h extends n {
		constructor(N, L) {
			super(t.Num, r.Num, N, L);
		}
		static {
			this.code = S.Code.Num;
		}
	}
	e.Num = h;
	class c extends n {
		constructor(N, L) {
			super(t.NA, r.NA, N, L);
		}
		static {
			this.code = S.Code.NA;
		}
	}
	e.NA = c;
	class g extends n {
		constructor(N, L) {
			super(t.GettingData, r.GettingData, N, L);
		}
		static {
			this.code = S.Code.GettingData;
		}
	}
	e.GettingData = g;
	class T extends n {
		constructor(N, L) {
			super(t.Spill, r.Spill, N, L);
		}
		static {
			this.code = S.Code.Spill;
		}
	}
	e.Spill = T;
	class I extends n {
		constructor(N, L) {
			super(t.Connect, r.Connect, N, L);
		}
		static {
			this.code = S.Code.Connect;
		}
	}
	e.Connect = I;
	class M extends n {
		constructor(N, L) {
			super(t.Blocked, r.Blocked, N, L);
		}
		static {
			this.code = S.Code.Blocked;
		}
	}
	e.Blocked = M;
	class H extends n {
		constructor(N, L) {
			super(t.Unknown, r.Unknown, N, L);
		}
		static {
			this.code = S.Code.Unknown;
		}
	}
	e.Unknown = H;
	class E extends n {
		constructor(N, L) {
			super(t.Field, r.Field, N, L);
		}
		static {
			this.code = S.Code.Field;
		}
	}
	e.Field = E;
	class C extends n {
		constructor(N, L) {
			super(t.Calc, r.Calc, N, L);
		}
		static {
			this.code = S.Code.Calc;
		}
	}
	e.Calc = C;
	class R extends n {
		constructor(N, L) {
			super(t.Busy, r.Busy, N, L);
		}
		static {
			this.code = S.Code.Busy;
		}
	}
	e.Busy = R;
	class P extends n {
		constructor(N, L) {
			super(t.Python, r.Python, N, L);
		}
		static {
			this.code = S.Code.Python;
		}
	}
	e.Python = P;
	class Z extends n {
		constructor(N, L) {
			super(t.Timeout, r.Timeout, N, L);
		}
		static {
			this.code = S.Code.Timeout;
		}
	}
	e.Timeout = Z;
})(S ||= {});
var te = {};
te[S.Code.Parse] = S.Parse, te[S.Code.Null] = S.Null, te[S.Code.Div0] = S.Div0, te[S.Code.Value] = S.Value, te[S.Code.Ref] = S.Ref, te[S.Code.Name] = S.Name, te[S.Code.Num] = S.Num, te[S.Code.NA] = S.NA, te[S.Code.GettingData] = S.GettingData, te[S.Code.Spill] = S.Spill, te[S.Code.Connect] = S.Connect, te[S.Code.Blocked] = S.Blocked, te[S.Code.Unknown] = S.Unknown, te[S.Code.Field] = S.Field, te[S.Code.Calc] = S.Calc, te[S.Code.Busy] = S.Busy, te[S.Code.Python] = S.Python, te[S.Code.Timeout] = S.Timeout;
var Dr = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), Bt = Object.keys(te);
for (let e = 0; e < Bt.length; e++) {
	let t = te[Bt[e]], r = new t();
	Pr.set(r.getLabel(), t), jr.set(r.getCode(), t), Dr.set(r.getLabel(), r), Ur.set(r.getCode(), r);
}
(function(e) {
	let t = e.getBuiltInByCode = (r) => Ur.get(r);
	e.BuiltIn = {
		Parse: t(S.Code.Parse),
		Null: t(S.Code.Null),
		Div0: t(S.Code.Div0),
		Value: t(S.Code.Value),
		Ref: t(S.Code.Ref),
		Name: t(S.Code.Name),
		Num: t(S.Code.Num),
		NA: t(S.Code.NA),
		GettingData: t(S.Code.GettingData),
		Spill: t(S.Code.Spill),
		Connect: t(S.Code.Connect),
		Blocked: t(S.Code.Blocked),
		Unknown: t(S.Code.Unknown),
		Field: t(S.Code.Field),
		Calc: t(S.Code.Calc),
		Busy: t(S.Code.Busy),
		Python: t(S.Code.Python),
		Timeout: t(S.Code.Timeout)
	}, e.newTypedError = (r, n, o) => {
		let a;
		return a = typeof r == "string" ? Pr.get(r) : jr.get(r), a ||= S.Unknown, new a(n, o);
	}, e.getBuiltInByLabel = (r) => Dr.get(r), e.isError = function(r, n) {
		return !!r && r.isFormulaError === !0 && (n === void 0 || r.getCode() === n);
	};
})(S ||= {});
var Uo = class {
	createRange(e, t, r) {
		throw new oe();
	}
	flattenAreas(e) {
		throw new oe();
	}
	getReference(e, t) {
		throw new oe();
	}
	getResizedReference(e, t, r) {
		throw new oe();
	}
	getNumberFormat(e, t) {
		throw new oe();
	}
	fromSerialDate(e, t) {
		throw new oe();
	}
	toSerialDate(e, t) {
		throw new oe();
	}
	getDateParts(e, t) {
		throw new oe();
	}
	getSerialDate(e, t, r, n, o, a, l) {
		throw new oe();
	}
	getNow() {
		throw new oe();
	}
	getRandom() {
		return Math.random();
	}
	getValueAt(e, t, r, n) {
		return null;
	}
	getEntireCoords() {
		return Kr;
	}
	isValidDate(e, t) {
		return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]" ? !isNaN(e.getTime()) : !t && typeof e == "number" && !(e < 0 || e > jo);
	}
	getRow() {
		return 0;
	}
	getColumn() {
		return 0;
	}
	isImplicitIntersect() {
		return !1;
	}
	getFormulaAt(e, t, r) {
		return null;
	}
	getSpillAt(e, t, r) {
		return null;
	}
	getSheetIndex(e) {
		return -1;
	}
	getSheetCount() {
		return 1;
	}
	markVolatile() {}
	formatResults(e) {}
	filterHidden(e, t) {
		return e;
	}
	filterTotals(e) {
		return e;
	}
	getFunction(e) {
		return null;
	}
	getAddress(e, t) {
		throw new oe();
	}
	parseAsSerialDate(e, t) {
		throw new oe();
	}
	parseAsDate(e, t) {
		throw new oe();
	}
	parseAsNumber(e, t) {
		throw new oe();
	}
	createCriteria(e, t) {
		throw new oe();
	}
	parseAsLiteral(e) {
		let t = e.toUpperCase();
		return t === "TRUE" || t !== "FALSE" && S.getBuiltInByLabel(t);
	}
	toText(e) {
		return typeof e == "string" ? e : e == null ? "" : typeof e == "boolean" ? e ? "TRUE" : "FALSE" : e?.isFormulaError ? e.getLabel() : String(e);
	}
	compare(e, t, r) {
		if (e === t) return 0;
		let n = Kt(e), o = Kt(t);
		return n === o ? e < t ? -1 : +(e > t) : n < o ? -1 : 1;
	}
	getRuntime() {
		return Po;
	}
	getArgs() {
		throw new oe(Br);
	}
}, Kt = (e) => {
	if (e == null) return 0;
	switch (typeof e) {
		case "number": return 1;
		case "string": return 2;
		case "boolean": return 3;
		default: return 4;
	}
}, Br = "FormulaContext.getArgs() is only valid while a function body is running", oe = class extends Error {
	constructor(e = "Not implemented in StubbedFormulaContext") {
		super(e), this.name = "NotImplementedError";
	}
}, Kr = Object.freeze({
	colStart: 0,
	rowStart: 0,
	colEnd: 2 ** 14 - 1,
	rowEnd: 2 ** 20 - 1
}), Po = {
	isDate1904: () => !1,
	getLocale: () => zt.tag,
	getLocaleProfile: () => zt,
	isR1C1: () => !1,
	getNow: () => 0,
	getRandom: () => Math.random(),
	getLocation: () => "unknown",
	getVersion: () => "1.0.0",
	getOS: () => "unknown",
	getUser: () => "unidentified",
	getDescription: () => "Stubbed Formula Context"
}, jo = 2958465, Ue = new Uo(), Bo = class {
	constructor() {
		this._scope = Ue, this._argsFn = null;
	}
	_setScope(e) {
		this._scope = e ?? Ue;
	}
	_getScope() {
		return this._scope;
	}
	_setArgsProvider(e) {
		this._argsFn = e;
	}
	getNumberFormat(e, t) {
		return this._getScope().getNumberFormat(e, t);
	}
	getEntireCoords() {
		return this._getScope().getEntireCoords() ?? Kr;
	}
	parseAsSerialDate(e, t) {
		return this._getScope().parseAsSerialDate(e, t);
	}
	parseAsDate(e, t) {
		return this._getScope().parseAsDate(e, t);
	}
	parseAsNumber(e, t) {
		return this._getScope().parseAsNumber(e, t);
	}
	createCriteria(e, t) {
		return this._getScope().createCriteria(e, t);
	}
	parseAsLiteral(e) {
		let t = this._getScope();
		return t.parseAsLiteral ? t.parseAsLiteral(e) : Ue.parseAsLiteral(e);
	}
	toText(e) {
		return this._getScope().toText(e);
	}
	isValidDate(e, t = !1) {
		return this._getScope().isValidDate(e, t);
	}
	fromSerialDate(e, t = !1) {
		return this._getScope().fromSerialDate(e, t);
	}
	toSerialDate(e, t = !1) {
		return this._getScope().toSerialDate(e, t);
	}
	getDateParts(e, t) {
		return this._getScope().getDateParts(e, t);
	}
	getSerialDate(e, t, r, n = 0, o = 0, a = 0, l = 0) {
		return this._getScope().getSerialDate(e, t, r, n, o, a, l);
	}
	getNow() {
		return this._getScope().getNow();
	}
	getRandom() {
		return this._getScope().getRandom?.() ?? Math.random();
	}
	createRange(e, t, r) {
		return this._getScope().createRange(e, t, r);
	}
	flattenAreas(e) {
		if (!Array.isArray(e)) return e;
		let t = [];
		for (let r = 0; r < e.length; r++) {
			let n = e[r], { rows: o, columns: a } = n.getShape();
			for (let l = 0; l < o; l++) for (let i = 0; i < a; i++) t.push(n.getValueAt(l, i));
		}
		return this.createRange(t.length, 1, (r, n) => t[n.rowIndex]);
	}
	getRow() {
		return this._getScope().getRow?.() ?? 0;
	}
	getColumn() {
		return this._getScope().getColumn?.() ?? 0;
	}
	isImplicitIntersect() {
		return this._getScope().isImplicitIntersect?.() ?? !1;
	}
	getReference(e, t) {
		return this._getScope().getReference(e, t);
	}
	getResizedReference(e, t, r) {
		return this._getScope().getResizedReference(e, t, r);
	}
	getValueAt(e, t, r) {
		return this._getScope().getValueAt(e, t, r);
	}
	getFormulaAt(e, t, r) {
		return this._getScope().getFormulaAt?.(e, t, r) ?? null;
	}
	getSpillAt(e, t, r) {
		return this._getScope().getSpillAt?.(e, t, r) ?? null;
	}
	getSheetIndex(e) {
		return this._getScope().getSheetIndex?.(e) ?? -1;
	}
	getSheetCount() {
		return this._getScope().getSheetCount?.() ?? 1;
	}
	markVolatile() {
		this._getScope().markVolatile?.();
	}
	formatResults(e) {
		this._getScope().formatResults?.(e);
	}
	filterHidden(e, t) {
		return this._getScope().filterHidden?.(e, t) ?? e;
	}
	filterTotals(e) {
		return this._getScope().filterTotals?.(e) ?? e;
	}
	getFunction(e) {
		return this._getScope().getFunction?.(e) ?? null;
	}
	getAddress(e, t) {
		return this._getScope().getAddress(e, t);
	}
	compare(e, t, r) {
		return this._getScope().compare?.(e, t, r) ?? Ue.compare(e, t, r);
	}
	getRuntime() {
		return this._getScope().getRuntime();
	}
	getArgs() {
		let e = this._argsFn, t = e ? e() : null;
		if (!t) throw new oe(Br);
		return t;
	}
	get [Symbol.toStringTag]() {
		return "[FormulaContext]";
	}
	toString() {
		return this._getScope()?.toString?.() ?? "{STUB SCOPE}";
	}
}, zt = Object.freeze({
	tag: "en-US",
	numberingSystem: "latn",
	decimal: ".",
	group: ",",
	grouping: [3],
	minusSign: "-",
	percentSign: "%",
	permilleSign: "‰",
	currencyCode: "USD",
	currencySymbol: "$",
	currencyDisplay: "symbol",
	currencyPosition: "before",
	currencySpacing: "tight",
	date: Object.freeze({
		calendar: "gregory",
		short: "M/d/yy",
		medium: "MMM d, y",
		long: "MMMM d, y",
		timeShort: "h:mm a",
		timeLong: "h:mm:ss a",
		am: "AM",
		pm: "PM",
		firstDay: 0,
		weekend: [6, 0],
		monthsWide: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthsAbbr: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		weekdaysWide: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		weekdaysAbbr: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		hour12: !0
	}),
	listSeparator: ",",
	csvDelimiter: ",",
	rtl: !1,
	collator: Object.freeze({
		sensitivity: "base",
		numeric: !0
	})
});
new Bo();
const Ko = [
	{
		name: "param",
		group: "jsdoc",
		description: "Document a parameter. A string union type becomes a dropdown of allowed options.",
		snippet: "param \${1:name} \${2:description}"
	},
	{
		name: "returns",
		aliases: ["return"],
		group: "jsdoc",
		description: "Describe the return value."
	},
	{
		name: "category",
		group: "sheetxl",
		description: "Group the function under a category in the function list.",
		snippet: "category \${1:name}"
	},
	{
		name: "name",
		group: "sheetxl",
		description: "A name an identifier cannot spell: the name formulas call a function by (MY.FUNC), or an enum member's label.",
		snippet: "name \${1:NAME}"
	},
	{
		name: "description",
		group: "sheetxl",
		description: "A longer description of the function."
	},
	{
		name: "deprecated",
		group: "sheetxl",
		standalone: !0,
		description: "Mark the function as deprecated (optionally with a reason)."
	},
	{
		name: "hidden",
		group: "sheetxl",
		standalone: !0,
		description: "Hide the function from the function list."
	},
	{
		name: "returnkind",
		group: "sheetxl",
		description: "Declare the value kind of the return (a ValueKind word, e.g. \`number\`, \`array\`, \`reference\`) where the type spelling cannot say it (a union return collapses to any).",
		snippet: "returnKind \${1:number}"
	},
	{
		name: "example",
		group: "jsdoc",
		description: "Provide a usage example."
	},
	{
		name: "see",
		group: "jsdoc",
		description: "Reference a related function or link."
	}
], zo = (() => {
	const e = /* @__PURE__ */ new Map();
	for (const t of Ko) if (e.set(t.name, t), t.aliases) for (const r of t.aliases) e.set(r, t);
	return e;
})();
function Vo(e) {
	if (!e) return;
	const t = (e.startsWith("@") ? e.slice(1) : e).toLowerCase();
	return zo.get(t);
}
function Xo(e) {
	return Vo(e)?.standalone === !0;
}
const ct = /* @__PURE__ */ new Map([["IReferenceRange", "p"], ["IRange", "r"]]), tt = new Set(Object.values(jt).filter((e) => e !== jt.Omitted)), mt = /* @__PURE__ */ new Map([
	["IWorkbook", "workbook"],
	["ISheet", "sheet"],
	["ICellRanges", "ranges"],
	["ICellRange", "range"]
]), Go = Array.from(mt.keys()), gt = (e, t) => {
	Array.from(t.keys()).forEach((r) => {
		const n = t.get(r);
		t.set(\`\${e}.\${r}\`, n);
	});
}, Ho = /* @__PURE__ */ new Map([
	["Scalar", "*"],
	["Lambda", "l"],
	["FormulaError.Known", me.Error],
	["Date", Pt.Date],
	["IRichData", Pt.RichData]
]), zr = /* @__PURE__ */ new Map([["Repeating", "repeating"]]), Wo = /* @__PURE__ */ new Set(["Flatten", "SheetXL.Flatten"]), Vr = /* @__PURE__ */ new Set(["AcceptError"]), Xr = /* @__PURE__ */ new Set(["Omittable"]), Gr = /* @__PURE__ */ new Set(["NoLift"]), Hr = /* @__PURE__ */ new Set(["NoFilter"]), Wr = /* @__PURE__ */ new Set(["Lazy"]), ut = /* @__PURE__ */ new Set(["ReportType"]), Vt = 255, Jo = /^[a-zA-Z_-￿][a-zA-Z0-9_.-￿]*$/, Yo = /^([a-z]{1,3})([0-9]+)$/i, qo = /^r[0-9]*c[0-9]*$/i, Zo = (e) => {
	if (qo.test(e)) return !0;
	const t = Yo.exec(e);
	if (!t) return !1;
	let r = 0;
	for (const o of t[1].toUpperCase()) r = r * 26 + (o.charCodeAt(0) - 64);
	const n = Number(t[2]);
	return r <= 16384 && n >= 1 && n <= 1048576;
}, le = "SheetXL", Ee = (e) => {
	const t = e.typeName.getText();
	return t.startsWith(\`\${le}.\`) ? t.slice(8) : t;
};
gt(le, ct);
gt(le, mt);
gt(le, zr);
Vr.add(le + ".AcceptError");
Xr.add(\`\${le}.Omittable\`);
Gr.add(\`\${le}.NoLift\`);
Hr.add(\`\${le}.NoFilter\`);
Wr.add(\`\${le}.Lazy\`);
ut.add(\`\${le}.ReportType\`);
const Qo = /* @__PURE__ */ new Map([
	["Promise", () => ({ async: !0 })],
	["Observable", () => ({ stream: !0 })],
	["Volatile", () => ({ volatile: !0 })],
	[\`\${le}.Volatile\`, () => ({ volatile: !0 })]
]), Xt = "__scriptContext__", Gt = "script", ea = /* @__PURE__ */ new Set([
	"IScript.ScriptContext",
	\`\${le}.IScript.ScriptContext\`,
	"ScriptContext"
]), Ht = (e, t) => {
	const r = t.literal;
	if (r === void 0) return;
	const n = e.SyntaxKind;
	switch (r.kind) {
		case n.StringLiteral: return r.text;
		case n.NumericLiteral: return parseFloat(r.text);
		case n.TrueKeyword: return !0;
		case n.FalseKeyword: return !1;
		case n.NullKeyword: return null;
		case n.PrefixUnaryExpression: return r.operator === n.MinusToken && r.operand?.kind === n.NumericLiteral ? -parseFloat(r.operand.text) : void 0;
		default: return;
	}
}, $e = (e) => {
	if (!e || e.length === 0) return "";
	let t = "";
	for (let r = 0; r < e.length; r++) {
		const n = e[r], o = n.kind;
		if (o !== "link") {
			if (o === "linkName") {
				const a = e[r + 1];
				if (a?.kind === "linkText" && a.text.trim()) continue;
				t += n.text;
				continue;
			}
			if (o === "linkText") {
				t += n.text.trim();
				continue;
			}
			t += n.text;
		}
	}
	return t.replace(/\\r\\n?/g, \`
\`).split(/\\n[^\\S\\n]*\\n\\s*/).map((r) => r.split(\`
\`).map((n) => n.trim()).filter(Boolean).join(" ")).filter(Boolean).join(\`
\`).trim();
};
function ta(e, t, r, n) {
	const o = n?.builtInNames?.length ? new Set(n.builtInNames.map((s) => s.toUpperCase())) : null, a = [], l = /* @__PURE__ */ new Map(), i = [];
	let u = null;
	const p = (s) => {
		if (!s || typeof s.getStart != "function") return {
			start: 0,
			length: 0
		};
		try {
			return {
				start: s.getStart(),
				length: s.getWidth()
			};
		} catch {
			return {
				start: 0,
				length: 0
			};
		}
	}, h = (s, f, d, y) => {
		const { start: v, length: k } = p(s);
		i.push({
			start: v,
			length: k,
			severity: d,
			code: f,
			message: y
		});
	}, c = (s, f, d) => {
		h(s, f, "error", d);
	}, g = (s) => s?.parent?.name?.escapedText, T = (s, f, d, y, v = !1, k = !1, j = !1) => {
		const O = { count: 0 }, A = J(s, f, d, y, O, v, k, j);
		O.count >= 2 && (f.range || (f.range = "m", O.count -= 2), !y && O.count >= 1 && (O.count -= 1, O.count > 0 && c(s, w.ArrayDepth, \`Arrays of more than 2 dimensions are not supported: '\${g(s)}'.\`))), O.count > 0 && (f.arrayDepth = O.count);
		const D = f.enum;
		return D && (O.count > (j ? 1 : 0) || f.range) && !P.has(f) && (f.valueOrRange || (c(s, w.EnumPosition, \`A list cannot hold the enum '\${D.id}': '\${f.name ?? g(s)}'. Its members reach the body as they are, so nothing checks them against the enum. Take one value per argument ('...x: \${D.id}[]'), or type the list by its scalar ('\${D.type}').\`), delete f.enum)), A;
	}, I = (s, f, d, y, v) => {
		if (f !== "Lambda" && f !== \`\${le}.Lambda\`) return !1;
		const k = s.typeArguments;
		let j = "*";
		if (k && k.length === 2) if (v && k[0].kind === e.SyntaxKind.TupleType && (d.lambdaArity = k[0].elements.length), k[1].kind === e.SyntaxKind.AnyKeyword) j = "raw";
		else {
			const O = {};
			J(k[1], O, y, !1, { count: 0 }), j = O.scalar ?? "*";
		}
		else if (k && k.length === 1 && k[0].kind !== e.SyntaxKind.TupleType && k[0].kind !== e.SyntaxKind.ArrayType) if (v && (d.lambdaArity = 2), k[0].kind === e.SyntaxKind.AnyKeyword) j = "raw";
		else {
			const O = {};
			J(k[0], O, y, !1, { count: 0 }), j = O.scalar ?? "*";
		}
		return d.lambda = j, !0;
	}, M = (s, f, d, y) => {
		if (!y) {
			c(s, w.FunctionReturn, \`Function type is not a valid return type: '\${g(s)}'. Declare a 'Lambda' return instead.\`);
			return;
		}
		const v = s.type, k = {};
		let j = "*";
		v && (v.kind === e.SyntaxKind.AnyKeyword ? j = "raw" : (J(v, k, d, !1, { count: 0 }), j = k.scalar ?? "*"));
		const O = s.parameters;
		O && !O.some((A) => A.dotDotDotToken) && (f.lambdaArity = O.length), f.lambda = j;
	}, H = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new WeakSet(), Z = (s) => s !== void 0 && s.getSourceFile() === t, U = (s, f = !1) => {
		return s.getJsDocTags(r).find((y) => y.name === "name")?.text?.map((y) => y.text).join("").trim() || (f ? Qt.camelToPrettyCase(s.name) : s.name);
	}, N = (s) => {
		const f = s.getJsDocTags(r).find((d) => d.name === "deprecated");
		if (f) return f.text?.map((d) => d.text).join("").trim() || !0;
	}, L = (s, f) => {
		const d = e.isTypeReferenceNode(s) ? s.typeName : void 0, y = d ? r.getSymbolAtLocation(d) : void 0, v = y?.declarations?.length ? y : void 0;
		if (d) {
			if (v && v.flags & e.SymbolFlags.Alias) {
				c(s, w.EnumNotLocal, \`'\${d.getText()}' is imported, so its declaration cannot be read: '\${f}'. An enum must be declared in the module that uses it.\`);
				return;
			}
			if (!v || !(v.flags & e.SymbolFlags.Type)) {
				const b = d.getText();
				if (!(v ? (v.flags & e.SymbolFlags.Variable) !== 0 : t.statements.some((x) => e.isVariableStatement(x) && x.declarationList.declarations.some((K) => e.isIdentifier(K.name) && K.name.text === b)))) return null;
				c(s, w.EnumMissingAlias, \`'\${b}' is a value, not a type: '\${f}'. Pair the object with a same-name type — 'type \${b} = typeof \${b}[keyof typeof \${b}];' — or declare it as 'enum \${b} { … }'.\`);
				return;
			}
			const m = H.get(v);
			if (m !== void 0) return m;
			if (R.has(v)) return;
		}
		const k = [];
		let j = !1;
		if (v && v.flags & e.SymbolFlags.Enum) {
			if (!v.declarations?.some(Z)) {
				c(s, w.EnumNotLocal, \`'\${v.name}' is not declared in this module: '\${f}'. An enum must be declared in the module that uses it.\`);
				return;
			}
			j = !0;
			let m = !1;
			if (v.exports?.forEach((b) => {
				const x = b.valueDeclaration;
				if (!x || !e.isEnumMember(x)) return;
				const K = r.getConstantValue(x);
				if (K === void 0) {
					c(x, w.EnumMemberNotConstant, \`'\${v.name}.\${b.name}' is not a constant number or string. A formula passes the VALUE, so every member needs one that can be read at compile time.\`), m = !0;
					return;
				}
				k.push([
					U(b, !0),
					K,
					x,
					$e(b.getDocumentationComment(r)),
					N(b)
				]);
			}), m) {
				R.add(v);
				return;
			}
		} else {
			const m = r.getTypeFromTypeNode(s), b = e.TypeFlags.Null | e.TypeFlags.Undefined | e.TypeFlags.Void, x = (m.isUnion() ? m.types : [m]).filter((F) => !(F.flags & b)), K = [];
			for (const F of x) {
				if (!(F.flags & (e.TypeFlags.NumberLiteral | e.TypeFlags.StringLiteral))) return v && H.set(v, null), null;
				K.push(F.value);
			}
			if (K.length === 0) return null;
			const re = v?.declarations?.find((F) => e.isTypeAliasDeclaration(F)), Y = e.isUnionTypeNode(s) ? s : re?.type;
			if (Y && e.isUnionTypeNode(Y)) {
				const F = Y.types.map(($) => {
					const ne = r.getTypeFromTypeNode($);
					return ne.isLiteral() ? ne.value : void 0;
				}), _ = ($) => {
					const ne = F.indexOf($);
					return ne < 0 ? F.length : ne;
				};
				K.sort(($, ne) => _($) - _(ne));
			}
			const ee = v && v.flags & e.SymbolFlags.Variable ? v.valueDeclaration : void 0, ge = new Set(K);
			if (v && ee && Z(ee)) for (const F of r.getTypeOfSymbolAtLocation(v, ee).getProperties()) {
				const _ = F.valueDeclaration, $ = r.getTypeOfSymbolAtLocation(F, _ ?? ee);
				if (!($.flags & (e.TypeFlags.NumberLiteral | e.TypeFlags.StringLiteral))) continue;
				const ne = $.value;
				K.includes(ne) && (j = !0, ge.delete(ne), k.push([
					U(F, !0),
					ne,
					_,
					$e(F.getDocumentationComment(r)),
					N(F)
				]));
			}
			for (const F of K) ge.has(F) && k.push([
				String(F),
				F,
				void 0,
				null
			]);
		}
		if (k.length === 0) return null;
		const O = typeof k[0][1] == "number";
		if (k.some(([, m]) => typeof m == "number" !== O)) {
			c(s, w.EnumMixed, \`'\${v?.name ?? s.getText()}' mixes number and string members: '\${f}'. A parameter has one type, so an enum is all numbers or all strings.\`);
			return;
		}
		const A = v ? U(v) : k.map(([, m]) => String(m)).join("|"), D = v ? void 0 : E.get(A);
		if (D) return D;
		if (j) {
			const m = /* @__PURE__ */ new Map();
			for (const [b, x, K, re] of k) {
				const Y = K?.name?.getText() ?? b, ee = m.get(x);
				ee !== void 0 ? h(K ?? s, w.EnumDuplicateValue, "warning", \`'\${A}.\${Y}' has the same value as '\${A}.\${ee}' (\${JSON.stringify(x)}). A formula passes the value, so the two cannot be told apart.\`) : m.set(x, Y), re === "" && h(K ?? s, w.EnumMemberUndocumented, "warning", \`'\${A}.\${Y}' is missing a description. Add a doc comment above the member — it is what the argument dropdown shows.\`);
			}
		}
		const V = {
			id: A,
			type: O ? me.Number : me.String,
			members: k.map(([m, b, , , x]) => x ? [
				m,
				b,
				x
			] : [m, b])
		};
		v ? H.set(v, V) : E.set(A, V);
		const z = v ? $e(v.getDocumentationComment(r)) : "", B = {};
		for (const [m, , , b] of k) b && (B[m] = { description: b });
		if (z || Object.keys(B).length > 0) {
			const m = {};
			z && (m.summary = z), Object.keys(B).length > 0 && (m.members = B), C.set(V, m);
		}
		return V;
	}, pe = (s, f, d, y) => {
		const v = (O, A, D) => {
			const V = { name: O };
			return T(A, V, d, !0), D && (V.optional = !0), y && !V.acceptError && (V.acceptError = !0), V;
		};
		if (s.kind !== e.SyntaxKind.TupleType) return [v(f, s, !1)];
		const k = s.elements;
		if (k.length < 2) return c(s, w.RepeatingSlots, \`'\${f}': a repeating group of period \${k.length} must be spelled 'Repeating<T>' without the tuple.\`), null;
		const j = [];
		for (let O = 0; O < k.length; O++) {
			const A = k[O];
			if (A.kind !== e.SyntaxKind.NamedTupleMember) return c(A, w.RepeatingSlots, \`'\${f}': every slot of a repeating group must be labelled, e.g. 'Repeating<[criteriaRange: IRange, criteria: Scalar]>'.\`), null;
			const D = !!A.questionToken;
			if (D && O !== k.length - 1) return c(A, w.RepeatingOptional, \`'\${f}': only the LAST slot of a repeating group may be optional (slot '\${A.name?.getText?.()}' is not).\`), null;
			j.push(v(A.name?.getText?.() ?? \`\${O}\`, A.type, D));
		}
		return j;
	}, J = (s, f, d, y, v, k = !1, j = !1, O = !1) => {
		if (!s) {
			c(s, w.MissingType, \`Type is not defined for '\${f?.name ?? "return"}'.\`);
			return;
		}
		if (s.kind === e.SyntaxKind.ParenthesizedType) return J(s.type, f, d, y, v, k, j, O);
		if (s.kind === e.SyntaxKind.UnionType) {
			const A = (z) => z.kind === e.SyntaxKind.UndefinedKeyword || z.kind === e.SyntaxKind.VoidKeyword || z.kind === e.SyntaxKind.NullKeyword || z.kind === e.SyntaxKind.LiteralType && z.literal?.kind === e.SyntaxKind.NullKeyword, D = s.types.filter((z) => !A(z));
			if (D.length === 1) return J(D[0], f, d, y, v, k, j, O);
			const V = L(s, f.name ?? g(s));
			if (V === void 0) return;
			if (V !== null) {
				f.scalar = V.type, y && (f.enum = V);
				return;
			}
			if (!y) {
				f.scalar = "*";
				return;
			}
			if (D.length === 2) {
				const z = (m) => m.kind !== e.SyntaxKind.TypeReference ? !1 : e.isTypeReferenceNode(m) && Ee(m) === "Lambda", B = D.findIndex(z);
				if (B >= 0 && !z(D[1 - B])) {
					J(D[1 - B], f, d, y, v, k, j, O), I(D[B], Ee(D[B]), f, d, y);
					return;
				}
			}
			if (y && D.length === 2) {
				const z = (m) => {
					if (!(m.kind !== e.SyntaxKind.TypeReference || m.typeArguments?.length)) return ct.get(Ee(m));
				}, B = D.findIndex((m) => z(m) !== void 0);
				if (B >= 0 && z(D[1 - B]) === void 0) {
					const m = {}, b = v.count;
					if (J(D[1 - B], m, d, y, v, k, !1), m.scalar && !m.range && m.lambda == null && v.count === b) {
						f.range = z(D[B]), f.scalar = m.scalar, f.valueOrRange = !0;
						const x = m.enum;
						x && (f.enum = x);
						return;
					}
				}
			}
			if (y && D.length === 2) {
				const z = (m) => m.kind === e.SyntaxKind.TypeReference && !m.typeArguments?.length && Ee(m) === "Scalar", B = D.findIndex(z);
				if (B >= 0 && !z(D[1 - B])) {
					const m = L(D[1 - B], f.name ?? g(s));
					if (m === void 0) return;
					if (m !== null) {
						f.scalar = "*", f.enum = m;
						return;
					}
				}
			}
			c(s, w.InvalidParamType, \`Union parameter types are not supported: '\${g(s)}'. Use a single type, optionally with '| null' or '| undefined', 'T | Lambda<…>' for a value-or-lambda slot, 'IRange | Scalar' for a value-or-range slot, or 'E | Scalar' for an uncoerced slot whose values an enum documents.\`);
			return;
		}
		if (s.kind === e.SyntaxKind.NumberKeyword) f.scalar = me.Number;
		else if (s.kind === e.SyntaxKind.StringKeyword) f.scalar = me.String;
		else if (s.kind === e.SyntaxKind.BooleanKeyword) f.scalar = me.Boolean;
		else if (s.kind === e.SyntaxKind.UndefinedKeyword || s.kind === e.SyntaxKind.NullKeyword || s.kind === e.SyntaxKind.VoidKeyword) {
			if (y) {
				c(s, w.UndefinedInput, \`'undefined' is not a valid type for input: '\${g(s)}'.\`);
				return;
			}
			f.scalar = me.Null;
		} else if (s.kind === e.SyntaxKind.BigIntKeyword) f.scalar = me.Number;
		else if (s.kind === e.SyntaxKind.AnyKeyword) y && (f.range = "*");
		else if (s.kind === e.SyntaxKind.ArrayType) {
			const A = s.elementType;
			if (!A) {
				c(s, w.UntypedArray, \`'Array' must be typed: '\${g(s)}'.\`);
				return;
			}
			if (y && j) {
				const D = f, V = D.name ?? g(s) ?? "parameter", z = D.acceptError;
				delete D.acceptError;
				const B = { name: V };
				T(A, B, d, !0), z && !B.acceptError && (B.acceptError = !0), D.repeating = [B];
				return;
			}
			v.count++, J(A, f, d, y, v);
		} else if (s.kind !== e.SyntaxKind.TupleType) if (s.kind === e.SyntaxKind.TypeReference) {
			const A = Ee(s);
			if (Vr.has(A)) {
				const m = g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'\${A}' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = f;
				if (b.acceptError) {
					c(s, w.InvalidParamType, \`'\${m}' declares 'AcceptError' more than once.\`);
					return;
				}
				const x = s.typeArguments;
				if (!x || x.length !== 1) {
					c(s, w.GenericArity, \`'\${A}' must be typed with exactly 1 type: '\${m}'.\`);
					return;
				}
				return b.acceptError = !0, J(x[0], f, d, y, v, k, j, O);
			}
			if (ut.has(A)) {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'ReportType' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = s.typeArguments;
				if (!b || b.length !== 1) {
					c(s, w.GenericArity, \`'\${A}' must be typed with exactly 1 type: '\${m}'.\`);
					return;
				}
				return f.reportType = !0, J(b[0], f, d, y, v, k, j, O);
			}
			if (Gr.has(A)) {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'NoLift' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = s.typeArguments;
				if (!b || b.length !== 1) {
					c(s, w.GenericArity, \`'\${A}' must be typed with exactly 1 type: '\${m}'.\`);
					return;
				}
				const x = f;
				x.noLift = !0;
				const K = v.count;
				J(b[0], f, d, y, v, k, j, O), (x.range || x.lambda != null || x.repeating || v.count !== K) && c(s, w.InvalidParamType, \`'\${m}': 'NoLift' applies to a SCALAR parameter only - a range, list, repeating or lambda slot never lifts.\`);
				return;
			}
			if (Hr.has(A)) {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'NoFilter' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = s.typeArguments;
				if (!b || b.length !== 1) {
					c(s, w.GenericArity, \`'\${A}' must be typed with exactly 1 type: '\${m}'.\`);
					return;
				}
				const x = f;
				x.noFilter = !0;
				const K = v.count;
				if (J(b[0], f, d, y, v, k, j, O), x.range || x.lambda != null || v.count !== K) {
					c(s, w.InvalidParamType, \`'\${m}': 'NoFilter' applies to a SCALAR slot only - a range, list or lambda slot has no members to coerce.\`);
					return;
				}
				const re = x.repeating;
				if (re) {
					if (delete x.noFilter, re.length !== 1) {
						c(s, w.InvalidParamType, \`'\${m}': 'NoFilter' over a repeating group applies to a period-1 group only - write it on the slot that takes the members.\`);
						return;
					}
					re[0].noFilter = !0;
				} else j && c(s, w.InvalidParamType, \`'\${m}': 'NoFilter' applies to a REPEATING slot only - a single scalar argument has no members to coerce.\`);
				return;
			}
			if (Xr.has(A)) {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'Omittable' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = s.typeArguments;
				if (!b || b.length < 1 || b.length > 2) {
					c(s, w.GenericArity, \`'\${A}' must be typed with 1 or 2 types: '\${m}'.\`);
					return;
				}
				const x = f;
				if (x.omittable = !0, b.length === 2) {
					const Y = Ht(e, b[1]);
					if (Y === void 0) {
						c(s, w.InvalidParamType, \`'\${m}' declares '\${A}' with a second type that is not a literal value. Use a number, string, boolean or null - the engine substitutes it for an omitted argument.\`);
						return;
					}
					x.omittedValue = Y;
				}
				const K = J(b[0], f, d, y, v, k, j, O), re = x.omittedValue;
				return x.enum && re !== void 0 && re !== null && !x.enum.members.some(([, Y]) => Y === re) && c(b[1], w.EnumOmittedValue, \`'\${m}': \${JSON.stringify(re)} is not a member of '\${x.enum.id}'. An omitted argument must mean a member (\${x.enum.members.map(([, Y]) => JSON.stringify(Y)).join(", ")}) or null.\`), K;
			}
			if (Wr.has(A)) {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'Lazy' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = f;
				if (b.lazy) {
					c(s, w.InvalidParamType, \`'\${m}' declares 'Lazy' more than once.\`);
					return;
				}
				const x = s.typeArguments;
				if (!x || x.length < 1 || x.length > 2) {
					c(s, w.GenericArity, \`'\${A}' must be typed with 1 or 2 types: '\${m}'.\`);
					return;
				}
				if (b.lazy = !0, x.length === 2) {
					const K = Ht(e, x[1]);
					if (K === void 0) {
						c(s, w.InvalidParamType, \`'\${m}' declares '\${A}' with a second type that is not a literal value. Use a number, string, boolean or null - the engine substitutes it for an absent argument.\`);
						return;
					}
					b.optional = !0, b.defaultValue = K;
				}
				J(x[0], f, d, y, v, k, j, O), b.enum ? (c(s, w.EnumPosition, \`'\${m}': 'Lazy' cannot hold the enum '\${b.enum.id}'. The argument may never be evaluated, so there is no point at which it could be checked against the members.\`), delete b.enum) : b.lambda != null ? c(s, w.InvalidParamType, \`'\${m}': 'Lazy' cannot be combined with a Lambda parameter - a callable slot is already the body's to call, or not.\`) : b.repeating && c(s, w.InvalidParamType, \`'\${m}': 'Lazy' applies to a VALUE, not to a repeating group - mark the group's slots instead.\`);
				return;
			}
			if (Wo.has(A)) {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.InvalidReturnType, \`'Flatten' is not a valid return type: '\${m}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const b = s.typeArguments;
				if (!b || b.length !== 1) {
					c(s, w.GenericArity, \`'\${A}' must be typed with exactly 1 type: '\${m}'.\`);
					return;
				}
				return v.count++, J(b[0], f, d, y, v, k);
			}
			if (zr.get(A) === "repeating") {
				const m = f.name ?? g(s);
				if (!y) {
					c(s, w.RepeatingPosition, \`'Repeating' is not a valid return type: '\${m}'.\`);
					return;
				}
				if (v.count !== 0) {
					c(s, w.RepeatingPosition, \`'Repeating' cannot be nested inside another type: '\${m}'.\`);
					return;
				}
				const b = f, x = s.typeArguments;
				if (!x || x.length < 1 || x.length > 2) {
					c(s, w.GenericArity, \`'\${A}' must be typed with 1 type, optionally followed by a maximum argument count: '\${m}'.\`);
					return;
				}
				let K;
				if (x.length === 2) {
					const ee = x[1], ge = ee.kind === e.SyntaxKind.LiteralType ? ee.literal : null, F = ge && ge.kind === e.SyntaxKind.NumericLiteral ? Number(ge.text) : NaN;
					if (!Number.isInteger(F) || F < 1 || F > Vt) {
						c(ee, w.RepeatingMax, \`'\${m}': '\${A}'’s maximum must be a whole number between 1 and \${Vt}.\`);
						return;
					}
					K = F, d.maxArguments = F;
				}
				if (O) {
					if (K === void 0) {
						c(s, w.RepeatingPosition, \`'\${m}' is a rest parameter and a repeating group. A group already repeats — drop the '...', or give the group a maximum ('Repeating<T, 254>') if the ceiling is all you meant.\`);
						return;
					}
					return J(x[0], f, d, y, v, k, j);
				}
				const re = b.acceptError;
				delete b.acceptError;
				const Y = pe(x[0], m ?? "parameter", d, re);
				Y && (b.repeating = Y);
				return;
			}
			const D = ct.get(A);
			let V = !1;
			D && (f.range = D, V = !0);
			const z = Ho.get(A);
			if (z && (f.scalar = z), z !== void 0 && (V = !0), I(s, A, f, d, y)) return;
			if (y) {
				if (A === "Volatile" || A === \`\${le}.Volatile\`) {
					c(s, w.InvalidParamType, \`'Volatile' is not a valid parameter type: '\${g(s)}'. It describes the function's RESULT, so it belongs on the return type.\`);
					return;
				}
				if (ea.has(A)) return Xt;
				const m = mt.get(A);
				if (m) return m;
			} else {
				const m = Qo.get(A);
				if (m) {
					const b = Object.assign(f, m());
					let x = 0;
					if (b.async && x++, b.stream && x++, x > 1) {
						c(s, w.MultipleModifiers, \`'\${A}' cannot have multiple modifiers: '\${g(s)}'.\`);
						return;
					}
					V = !0;
				}
			}
			if (!V) {
				const m = L(s, f.name ?? g(s));
				if (m === void 0) return;
				if (m !== null) {
					f.scalar = m.type, y && (f.enum = m);
					return;
				}
			}
			if (!V) {
				const m = "number, string, boolean, Scalar, Lambda, Date, FormulaError.Known, IRichData, IRange, IReferenceRange (and arrays of these; optionally wrapped in AcceptError<T>, or grouped with Repeating<T>)", b = "number, string, boolean, Scalar, Date, FormulaError.Known, IRichData, IRange, Promise<T>, Observable<T>, Volatile<T> (and arrays of these)";
				let x;
				y ? k ? x = \`'\${A}' is not a valid first parameter: '\${g(s)}'. The first parameter is EITHER a macro target (making this a macro) OR a calculation input (making this a calculation function). Allowed: \${Go.join(", ")} (macro target); \${m} (calculation input).\` : x = \`'\${A}' is not a valid parameter type: '\${g(s)}'. Allowed: \${m}.\` : x = \`'\${A}' is not a valid return type: '\${g(s)}'. Allowed: \${b}.\`, c(s, y ? w.InvalidParamType : w.InvalidReturnType, x);
				return;
			}
			const B = s.typeArguments;
			if (B) {
				if (B.length !== 1) {
					c(s, w.GenericArity, \`'\${A}' must be typed with exactly 1 type: '\${g(s)}'.\`);
					return;
				}
				const m = B[0], b = y && e.isTypeReferenceNode(m) && ut.has(Ee(m)), x = f.reportType;
				b && P.add(f), T(m, f, d, y), b && x === void 0 && delete f.reportType;
				const K = f.enum;
				K && !b && (c(B[0], w.EnumPosition, \`'\${A}' cannot hold the enum '\${K.id}': '\${g(s)}'. The members of a range reach the body as they are, so nothing checks them against the enum. Take the enum as a value, or type the range by its scalar ('\${A}<\${K.type}>').\`), delete f.enum);
			}
		} else s.kind === e.SyntaxKind.FunctionType && M(s, f, d, y);
	}, Ge = (s) => (e.getCombinedModifierFlags(s) & e.ModifierFlags.Export) !== 0, He = (s) => (e.getCombinedModifierFlags(s) & e.ModifierFlags.Default) !== 0;
	try {
		e.forEachChild(t, (s) => {
			if (Ge(s) && e.isFunctionDeclaration(s)) {
				const f = s?.name?.getText();
				if (!s.body) {
					c(s, w.NoBody, \`'\${f}': function has no body.\`);
					return;
				}
				if (!f) {
					c(s, w.Anonymous, "Anonymous exported functions are not allowed.");
					return;
				}
				const d = {}, y = { parameters: {} };
				try {
					d.name = f;
					const v = r.getSymbolAtLocation(s.name), k = $e(v?.getDocumentationComment(r));
					k && (y.summary = k);
					const j = {};
					T(s.type, j, d, !1), d.returnType = j;
					const O = {};
					He(s) && (O.default = !0, u = f), d.parameters = [];
					const A = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Set();
					let z = null, B = null, m = null, b = 0, x = !1, K = 0;
					for (let F = 0; F < s.parameters.length; F++) {
						const _ = s.parameters[F], $ = {};
						$.name = _.name?.getText();
						const ne = d.parameters.length === 0;
						if (n?.lenient && F === 0 && !_.type && O.default) {
							d.context = Gt;
							continue;
						}
						const Ie = T(_.type, $, d, !0, ne, !_.dotDotDotToken, !!_.dotDotDotToken);
						if (Ie === Xt) {
							F === 0 && d.context === void 0 && (d.context = Gt);
							continue;
						}
						if (Ie) {
							if (d.parameters.length !== 0) {
								c(_, w.ContextNotFirst, \`'\${d.name}' contexts must be the first parameter: '\${$.name}'.\`);
								return;
							}
							d.context = Ie;
							continue;
						}
						if ($.lambda !== void 0) {
							if (z !== null) {
								c(_, w.MultipleLambda, \`'\${d.name}' has more than one Lambda parameter ('\${z}' and '\${$.name}'). Only one Lambda parameter is allowed.\`);
								return;
							}
							z = $.name;
						} else if (z !== null) {
							c(_, w.LambdaNotLast, \`'\${d.name}' Lambda parameter ('\${z}') must be the last parameter, but '\${$.name}' follows it.\`);
							return;
						}
						const ye = $.optional === !0 || !((_.initializer === void 0 || _.initializer === null) && (_.questionToken === void 0 || _.questionToken === null));
						let ae;
						if (ye && ($.optional = !0, _.initializer)) try {
							if (_.initializer.kind === e.SyntaxKind.StringLiteral) ae = _.initializer.text;
							else if (_.initializer.kind === e.SyntaxKind.NumericLiteral) ae = parseFloat(_.initializer.text);
							else if (_.initializer.kind === e.SyntaxKind.TrueKeyword || _.initializer.kind === e.SyntaxKind.FalseKeyword) ae = _.initializer.kind === e.SyntaxKind.TrueKeyword;
							else if (_.initializer.kind === e.SyntaxKind.NullKeyword) ae = null;
							else if (e.isPrefixUnaryExpression(_.initializer) && _.initializer.operator === e.SyntaxKind.MinusToken && _.initializer.operand.kind === e.SyntaxKind.NumericLiteral) ae = -parseFloat(_.initializer.operand.text);
							else if (e.isPropertyAccessExpression(_.initializer) || e.isElementAccessExpression(_.initializer)) {
								const ce = r.getTypeAtLocation(_.initializer);
								ce.flags & (e.TypeFlags.NumberLiteral | e.TypeFlags.StringLiteral) && (ae = ce.value);
							}
						} catch (ce) {
							console.warn(\`Couldn't extract default value for parameter '\${$.name}'\`, ce);
						}
						_.dotDotDotToken && ($.rest = !0);
						const X = $.repeating;
						if (X) {
							if ($.rest) {
								c(_, w.RepeatingPosition, \`'\${d.name}' parameter '\${$.name}' is both a rest parameter and a repeating group. A group already repeats — drop the '...'.\`);
								return;
							}
							if (ye && X.length === 1) {
								c(_, w.RepeatingOptional, \`'\${d.name}' parameter '\${$.name}' cannot be an optional repeating group. Use '...\${$.name}: T[]' for zero-or-more, or drop the '?' for one-or-more.\`);
								return;
							}
							if (B !== null) {
								c(_, w.MultipleRepeating, \`'\${d.name}' has more than one repeating group ('\${B}' and '\${$.name}'). Only one is allowed — two would make the argument count ambiguous.\`);
								return;
							}
							if (m !== null) {
								c(_, w.RepeatingOptional, \`'\${d.name}' parameter '\${m}' is optional and precedes the repeating group '\${$.name}'. Every parameter outside a group must be required.\`);
								return;
							}
							B = $.name, b = X.length, x = X[X.length - 1].optional === !0;
						} else if (B !== null && $.rest) {
							c(_, w.RepeatingOptional, \`'\${d.name}' parameter '\${$.name}' is a rest parameter and follows the repeating group '\${B}'. Two variadic tails would make the argument count ambiguous.\`);
							return;
						} else if (B !== null && ye) {
							if (K >= b - 1) {
								c(_, w.RepeatingOptional, b === 1 ? \`'\${d.name}' parameter '\${$.name}' is optional and follows the period-1 repeating group '\${B}'. One more argument is indistinguishable from one more repetition — make it required, or give the group a period.\` : \`'\${d.name}' has \${K + 1} optional parameters after the repeating group '\${B}', which has period \${b}. At most \${b - 1} may be optional, or the argument count no longer decides the parse.\`);
								return;
							}
							if (x) {
								c(_, w.RepeatingOptional, \`'\${d.name}' parameter '\${$.name}' is optional and follows '\${B}', whose own last slot is already optional. Both omissions reach the same argument count — drop one.\`);
								return;
							}
							K++;
						}
						ye && !X && (m = $.name);
						const G = ($.range ? 2 : 0) + ($.arrayDepth ?? 0), Me = $.range === "r" || $.range === "p" || $.range === "*", Q = $.rest || Me ? 3 : 2;
						if (G > Q) {
							c(_, w.ArrayDepth, \`'\${d.name}' parameter '\${$.name}' has an array depth of \${G}; the maximum is \${Q}\${$.rest ? " for a rest parameter" : " (use a rest parameter for one more level, or an IRange)"}.\`);
							return;
						}
						d.parameters.push($);
						const se = { description: "" };
						y.parameters[$.name] = se;
						const We = r.getSymbolAtLocation(_.name);
						se.description = $e(We?.getDocumentationComment(r)), ae !== void 0 && ($.defaultValue = ae);
						for (const ce of [$, ...$.repeating ?? []]) {
							const we = ce.enum ? C.get(ce.enum) : void 0;
							we && ((y.enums ??= {})[ce.enum.id] = we);
						}
						if (A.set($.name, $), D.set($.name, _), X && X.length > 1) {
							V.add($.name);
							for (const ce of X) {
								const we = \`\${$.name}.\${ce.name}\`;
								y.parameters[we] = { description: "" }, A.set(we, ce), D.set(we, _);
							}
						}
					}
					const re = d.maxArguments;
					if (re !== void 0) {
						const F = d.parameters ?? [];
						if (!F.some(($) => $.rest === !0 || $.repeating !== void 0)) {
							c(s, w.RepeatingMax, \`'\${d.name}' declares a maximum of \${re} arguments but takes a fixed \${F.length}. A maximum only means something on a variadic tail.\`);
							return;
						}
						let _ = 0;
						for (const $ of F) $.rest === !0 || $.optional === !0 || (_ += $.repeating ? $.repeating.length : 1);
						if (re < _) {
							c(s, w.RepeatingMax, \`'\${d.name}' declares a maximum of \${re} arguments but requires \${_}.\`);
							return;
						}
					}
					if (s.jsDoc && s.jsDoc.length > 0) {
						const F = s.jsDoc, _ = F.length;
						for (let $ = 0; $ < _; $++) {
							const ne = F[$]?.tags;
							if (!ne) continue;
							const Ie = ne.length;
							for (let ye = 0; ye < Ie; ye++) {
								const ae = ne[ye];
								let X = ae?.tagName?.text;
								if (!X) continue;
								X = X.toLowerCase();
								let G = ae.comment;
								const Me = Xo(X);
								if (typeof G != "string" && !Me) {
									X === "returnkind" && c(ae, w.UnknownReturnKind, \`'@returnKind' needs a value kind. Known: \${[...tt].map((Q) => \`'\${Q}'\`).join(", ")}.\`);
									continue;
								}
								if (typeof G == "string" && (G = G.replace(/\\r\\n?/g, \`
\`).trim()), !(!Me && G && (G = G.split(\`
\`)[0].trim(), !G || G.length === 0))) {
									if (G && typeof G == "string") {
										const Q = /\\{@link(code|plain)?\\s+([^}|]+)(?:\\s*\\|\\s*([^}]+))?\\}/g;
										let se, We = G, ce = [];
										for (; (se = Q.exec(G)) !== null;) {
											const [we, wa, Zr, ht] = se, Qr = [Zr.trim()];
											ht && Qr.push(ht.trim());
										}
										G = We, ce.length > 0 && X === "see" && (y.links || (y.links = []), y.links.push(...ce));
									}
									if (X === "name") {
										const Q = G;
										Q !== f && (y.name = Q);
									} else if (X !== "description") {
										if (X === "param") {
											const Q = ae.name?.getText?.() ?? ae.name?.text;
											if (!A.get(Q)) {
												c(ae, w.UnknownParam, \`Parameter '\${Q}' not found in function '\${f}'.\`);
												continue;
											}
											const se = y.parameters?.[Q];
											se && !se.description && typeof G == "string" && G && (se.description = G);
										} else if (X === "returns" || X === "return") d.returnType.description = G;
										else if (X === "returnkind") {
											const Q = (G ?? "").trim().toLowerCase();
											tt.has(Q) ? d.returnType.kind = Q : c(ae, w.UnknownReturnKind, \`'@returnKind \${Q}' is not a known value kind. Known: \${[...tt].map((se) => \`'\${se}'\`).join(", ")}.\`);
										} else if (X === "category") y.category = G;
										else if (X === "deprecated" || X === "hidden") {
											let Q = !0;
											const se = G?.toLowerCase();
											se === "false" ? Q = !1 : se !== "true" && (Q = G), Q !== !1 && (y.deprecated = Q ?? !0);
										}
									}
								}
							}
						}
					}
					Object.keys(d.returnType).length === 0 && delete d.returnType, Object.keys(O).length > 0 && (d.behavior = O), y.summary || h(s.name ?? s, w.MissingSummary, "warning", \`'\${f}': missing a description. Add a JSDoc comment above the function.\`);
					const Y = !d.context, ee = Y && y.name || f;
					if (Y && !Jo.test(ee)) {
						const F = y.name ? \`'@name \${y.name}'\` : \`'\${ee}'\`;
						c(s.name ?? s, w.InvalidName, \`'\${f}': \${F} cannot be called from a formula. A function name starts with a letter or '_', and continues with letters, digits, '_' or '.'.\` + (y.name ? "" : " Add an '@name' tag to register it under another name."));
						return;
					}
					if (Y && !n?.isBuiltIn && Zo(ee)) {
						const F = y.name ? \`'@name \${y.name}'\` : \`'\${ee}'\`;
						c(s.name ?? s, w.InvalidName, \`'\${f}': \${F} cannot be called from a formula. It reads as a cell address.\` + (y.name ? "" : " Add an '@name' tag to register it under another name."));
						return;
					}
					const ge = l.get(ee.toUpperCase());
					if (ge !== void 0) {
						c(s.name ?? s, w.DuplicateName, \`'\${f}': '\${ee}' is already the name of '\${ge}' in this module.\`);
						return;
					}
					if (l.set(ee.toUpperCase(), f), Y && o?.has(ee.toUpperCase())) {
						c(s.name ?? s, w.BuiltInName, \`'\${ee}' is a built-in function. Choose a different name - a calculation function cannot replace a built-in.\`);
						return;
					}
					if (Y) {
						const F = y.parameters ?? {};
						for (const [_, $] of Object.entries(F)) if (!V.has(_) && !$.description) {
							const ne = D.get(_);
							h(ne, w.MissingParamDescription, "warning", \`'\${f}': parameter '\${_}' is missing a description. Add an '@param \${_}' tag.\`);
						}
					}
					a.push([d, y]);
				} catch (v) {
					c(s, w.ParseError, \`'\${f}': \${v.message}\`);
				}
			}
		});
	} catch (s) {
		c(void 0, w.ParseError, \`Unable to analyze module: \${s?.message ?? s}\`);
	}
	return {
		functions: a,
		autoRun: u,
		diagnostics: i
	};
}
const Ve = "__SHEETXL";
var ra = /* @__PURE__ */ Zt({ initialize: () => na });
async function na() {
	return Te || (Te = new Promise(async (e, t) => {
		try {
			const r = "0.20.2", n = \`https://esm.sh/esbuild-wasm@\${r}\`, o = \`https://esm.sh/esbuild-wasm@\${r}/esbuild.wasm\`, a = (await import(
				/* webpackIgnore: true */
				/* @vite-ignore */
				n
)).default;
			await a.initialize({
				wasmURL: o,
				worker: !1
			}), e(a);
		} catch (r) {
			console.error("Error initializing esbuild:", r), Te = null, t(new Error("The script bundler could not be loaded. Check your connection and try again.", { cause: r }));
		}
	}), Te);
}
var Te, oa = qt((() => {
	Te = null;
}));
let xe = null, Pe = null;
async function aa() {
	if (xe) return xe;
	if (Pe) {
		if (await Pe, !xe) throw new Error("ESBuild initialization promise resolved, but instance is not available.");
		return xe;
	}
	let e, t;
	Pe = new Promise((r, n) => {
		e = r, t = n;
	});
	try {
		const { initialize: r } = await Promise.resolve().then(() => (oa(), ra));
		return xe = await r(), e(), xe;
	} catch (r) {
		throw console.error("Failed to import or initialize esbuild:", r), Pe = null, t(r), r;
	}
}
const ia = { compilerOptions: { target: "esnext" } };
async function la(e, t, r = "/script.js", n = Ve, o = !1) {
	try {
		const a = await aa(), l = "@sheetxl/primitives", i = \`
      export const FormulaContext = globalThis.\${n}?.FormulaContext;
      export const ScalarType = globalThis.\${n}?.ScalarType;
      export const Observable = globalThis.\${n}?.Observable;
      export const IRange = globalThis.\${n}?.IRange;
      export const FormulaError = globalThis.\${n}?.FormulaError;
      // Add more exports as needed
    \`, u = await a.build({
			entryPoints: [r],
			bundle: !0,
			write: !1,
			format: "esm",
			plugins: [{
				name: "sheetxl-esbuild-in-memory",
				setup(p) {
					const h = "sheetxl-" + (/* @__PURE__ */ new Date()).getTime();
					p.onResolve({ filter: new RegExp(\`^(\${r.replace("/", "\\\\/")}|\${l})$\`) }, (c) => ({
						path: c.path,
						namespace: h
					})), p.onResolve({ filter: /.*/ }, (c) => {
						if (c.namespace !== h) return console.warn(\`esbuild: Treating import "\${c.path}" as external.\`), {
							path: c.path,
							external: !0
						};
					}), p.onLoad({
						filter: /.*/,
						namespace: h
					}, (c) => {
						let g;
						if (c.path === r) g = t;
						else if (c.path === l) g = i;
						else return { errors: [{ text: \`Cannot load unknown path in \${h}: \${c.path}\` }] };
						return {
							contents: g,
							loader: "ts"
						};
					});
				}
			}],
			sourcemap: "inline",
			tsconfigRaw: ia,
			minify: o,
			platform: "neutral"
		});
		if (u.outputFiles && u.outputFiles.length > 0) return u.outputFiles[0].text;
		throw u.errors && u.errors.length > 0 ? /* @__PURE__ */ new Error(\`esbuild bundling failed: \${u.errors.map((p) => p.text).join(\`
\`)}\`) : /* @__PURE__ */ new Error("esbuild did not produce an output file.");
	} catch (a) {
		throw console.error("esbuild bundling process failed:", a), a;
	}
}
function sa(e, t, r) {
	return (n) => {
		const o = n.factory, a = () => o.createExpressionStatement(o.createCallChain(o.createPropertyAccessExpression(o.createIdentifier(Ve), "checkRun"), o.createToken(e.SyntaxKind.QuestionDotToken), void 0, [o.createStringLiteral(t), o.createNumericLiteral(r)])), l = (c) => {
			const g = c.statements;
			let T = 0;
			for (; T < g.length && e.isExpressionStatement(g[T]) && e.isStringLiteral(g[T].expression);) T++;
			return o.updateBlock(c, [
				...g.slice(0, T),
				a(),
				...g.slice(T)
			]);
		}, i = (c) => e.isBlock(c) ? l(c) : o.createBlock([a(), c], !0), u = (c) => e.isBlock(c) ? l(c) : o.createBlock([a(), o.createReturnStatement(c)], !0), p = (c) => e.isForStatement(c) || e.isForInStatement(c) || e.isForOfStatement(c) || e.isWhileStatement(c) || e.isDoStatement(c), h = (c) => {
			if (p(c)) {
				const g = c.statement;
				return e.visitEachChild(c, (T) => {
					const I = h(T);
					return T === g ? i(I) : I;
				}, n);
			}
			if (e.isFunctionLike(c) && c.body) {
				const g = c.body;
				return e.visitEachChild(c, (T) => {
					const I = h(T);
					return T === g ? u(I) : I;
				}, n);
			}
			return e.visitEachChild(c, h, n);
		};
		return (c) => e.visitNode(c, h);
	};
}
const Wt = "//# sourceMappingURL";
var Jr = /* @__PURE__ */ Zt({
	initialize: () => ca,
	readLibFile: () => ua
});
async function ca() {
	return Ce || (Ce = new Promise(async (e, t) => {
		let r = null;
		try {
			r = await import(
				/* webpackIgnore: true */
				/* @vite-ignore */
				"https://esm.sh/typescript@5.7.2"
);
		} catch (n) {
			console.error("Error initializing Browser TypeScript module:", n);
		}
		r || (console.log("use script fallback"), Ce = null), e(r);
	}), Ce);
}
function ua(e, t) {}
var Ce, Yr = qt((() => {
	Ce = null;
}));
const da = \`
/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
\`, fa = \`
  interface FirstTest {
    isTrue?: boolean;
  }
\`, pa = async () => fa;
let je = null;
const rt = "sheetxl.d.ts", Jt = "sheetxl-modules.d.ts", ma = \`declare module '@sheetxl/primitives' { export = SheetXL; }
\`, ga = [
	"lib.webworker.d.ts",
	"lib.es2020.d.ts",
	"lib.esnext.asynciterable.d.ts"
], Yt = /* @__PURE__ */ new Map();
let nt = null, ot = null;
async function ha() {
	return ot || (ot = Promise.resolve().then(() => (Yr(), Jr)).then(async (e) => {
		const t = await qr();
		return e.readLibFile(t, "lib.es5.d.ts") !== void 0 ? e.readLibFile : null;
	})), ot;
}
async function qr() {
	if (je) return je;
	try {
		const e = await (await Promise.resolve().then(() => (Yr(), Jr))).initialize();
		if (!e) throw new Error("TypeScript could not be loaded. Check your connection and try again.");
		return e;
	} catch (e) {
		throw je = null, e;
	} finally {
		je = null;
	}
}
async function ya(e) {
	const t = e?.source ?? null;
	if (!t) return {
		module: null,
		diagnostics: []
	};
	const r = (e.disableBundle || e.declarationsOnly) ?? !1, [n, o, a] = await Promise.all([
		pa(),
		qr(),
		e.ambientTypes ? ha() : null
	]), l = a ? e.ambientTypes ?? null : null;
	let i = "";
	const u = {
		allowJs: !0,
		declaration: !1,
		sourceMap: !1,
		inlineSourceMap: !1,
		inlineSources: !1,
		isolatedModules: !0,
		preserveConstEnums: !1,
		module: 99,
		noResolve: !0,
		emitDeclarationOnly: !1,
		target: o.ScriptTarget.ES2020,
		...l ? {
			lib: ga,
			skipLibCheck: !0,
			strict: !0
		} : {}
	}, p = "script", h = \`\${p}.ts\`, c = "lib.d.ts", g = "global.d.ts", T = {
		[h]: t,
		[c]: da,
		[g]: n,
		...l ? {
			[rt]: l,
			[Jt]: ma
		} : {}
	}, I = (d) => T[d] ?? (a && d.startsWith("lib.") ? a(o, d) : void 0), M = {
		getSourceFile: (d, y, v, k) => {
			if (d === rt) return nt?.text !== l && (nt = {
				text: l,
				file: o.createSourceFile(d, l, o.ScriptTarget.Latest, !1)
			}), nt.file;
			if (T[d] === void 0) {
				let j = Yt.get(d);
				if (!j) {
					const O = I(d);
					if (O === void 0) return;
					j = o.createSourceFile(d, O, o.ScriptTarget.Latest, !1), Yt.set(d, j);
				}
				return j;
			}
			return o.createSourceFile(d, T[d], o.ScriptTarget.Latest, !0);
		},
		fileExists: (d) => I(d) !== void 0,
		readFile: I,
		writeFile: (d, y) => {
			T[d] = y;
		},
		getCurrentDirectory: () => "./",
		getCanonicalFileName: (d) => d,
		useCaseSensitiveFileNames: () => !0,
		getDefaultLibFileName: (d) => c,
		getNewLine: () => \`
\`
	}, H = o.createProgram([
		h,
		g,
		...l ? [rt, Jt] : []
	], u, M), E = H.getTypeChecker(), C = H.getSourceFile(h), R = e.runGuard;
	H.emit(void 0, void 0, void 0, void 0, R ? { before: [sa(o, R.key, R.timeoutMs)] } : void 0), i = T[\`\${p}.js\`] ?? "";
	const P = (d) => ({
		start: d.start ?? 0,
		length: d.length ?? 0,
		severity: d.category === o.DiagnosticCategory.Warning ? "warning" : "error",
		code: \`TS\${d.code}\`,
		message: o.flattenDiagnosticMessageText(d.messageText, \`
\`)
	}), Z = H.getSyntacticDiagnostics(C).map(P), U = l ? H.getSemanticDiagnostics(C).filter((d) => d.category === o.DiagnosticCategory.Error || d.category === o.DiagnosticCategory.Warning).map(P) : [], N = ta(o, C, E, {
		builtInNames: e.builtInNames,
		isBuiltIn: e.isBuiltIn,
		lenient: e.lenient
	});
	let L = [
		...Z,
		...U,
		...N.diagnostics
	];
	e.lenient && (L = L.filter((d) => d.code !== w.MissingType));
	const pe = N.functions, J = N.autoRun, Ge = L.some((d) => d.severity === "error"), He = \`\${Qt.uuidV4()}-script\`;
	let s = null;
	if (Ge) i = "";
	else {
		try {
			r || (i = await la(o, i, p, void 0, e.minify ?? !1));
		} catch {
			console.warn("Error bundling script");
		}
		const d = i.indexOf(Wt);
		d > -1 && (s = i.substring(d + 20 + 1, i.length), i = i.substring(0, d), i = i.replaceAll("globalThis." + Ve, Ve));
	}
	const f = {
		functions: pe,
		commitId: He,
		source: t,
		language: "typescript",
		compiled: i
	};
	return s && (f.sourceMap = s), J && (f.autoRun = J), {
		module: f,
		diagnostics: L
	};
}
self.addEventListener("message", async (e) => {
	const { id: t, params: r } = e.data;
	try {
		const n = await ya(r);
		self.postMessage({
			id: t,
			result: n,
			error: null
		});
	} catch (n) {
		self.postMessage({
			id: t,
			result: null,
			error: {
				message: n.message,
				stack: n.stack,
				cause: n.cause
			}
		});
	}
});
`,c=typeof self<`u`&&self.Blob&&new Blob([`URL.revokeObjectURL(import.meta.url);`,s],{type:`text/javascript;charset=utf-8`}),l=async()=>{let{compileModule:e}=await n(async()=>{let{compileModule:e}=await import(`./8IBYT7vkExASLJms-F28DctyN.js`);return{compileModule:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),t=new o(t=>e(t));return await t.start(),t}})))()}u();export{i as createCompilerWorker};