const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CwhaPB7R93eqixfq-zUw2bm3q.js","./rolldown-runtime-DkW27tQK.js","./preload-helper-wdlQj8DP.js","./esm-BHaKJxLo.js","./BxiAkxNyUQseLNBv-BShQESXm.js","./CUERvTrIURHqOWKm-f_GLaJO_.js","./esm-D3ai8PN-.js","./4VkvY2rXOd49uHcQ-DulsxhUb.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";function r(e){let t;try{if(t=c&&(self.URL||self.webkitURL).createObjectURL(c),!t)throw``;let n=new Worker(t,{type:`module`,name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(s),{type:`module`,name:e?.name})}}async function i(){if(globalThis.process?.versions?.node&&typeof Worker>`u`)return await l();if(typeof Worker<`u`){let e=new a(()=>new r);try{return await e.start(),e}catch(e){console.error(`Failed to start TypescriptCompiler worker reverting to fallback:`,e)}}return await l()}var a,o,s,c,l;function u(){return(u=e((()=>{t(),a=class{constructor(e){this._worker=null,this._nextId=1,this._pendingRequests=new Map,this._workerFactory=e}start(){if(typeof Worker>`u`)throw Error(`Web Workers are not supported in this environment.`);return this._worker||(this._worker=this._workerFactory(),this._worker.onmessage=e=>{let{id:t,result:n,error:r}=e.data,i=this._pendingRequests.get(t);if(i){if(this._pendingRequests.delete(t),r){let e=Error(r.message);e.stack=r.stack,r.cause&&(e.cause=r.cause),i.reject(e)}else i.resolve(n)}},this._worker.onerror=e=>{console.error(`Worker error:`,e),this._pendingRequests.forEach(t=>{t.reject(Error(`Worker failed: ${e.message}`))}),this._pendingRequests.clear(),this._worker=null}),Promise.resolve()}execute(e){if(!this._worker)throw Error(`Worker is not initialized. Call start() first.`);let t=this._nextId++;return new Promise((n,r)=>{this._pendingRequests.set(t,{resolve:n,reject:r}),this._worker.postMessage({id:t,params:e})})}terminate(){this._worker&&=(this._worker.terminate(),null)}},o=class{constructor(e){this._onExecute=e}execute(e){return this._onExecute(e)}start(){return Promise.resolve()}terminate(){}},s=`var _t = Object.defineProperty, ar = (e, t, r) => () => {
	if (r) throw r[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (n) {
		throw r = [n], n;
	}
}, or = (e, t) => {
	let r = {};
	for (var n in e) _t(r, n, {
		get: e[n],
		enumerable: !0
	});
	return t || _t(r, Symbol.toStringTag, { value: "Module" }), r;
}, xt = Object.defineProperty, ge = (e, t) => {
	let r = {};
	for (var n in e) xt(r, n, {
		get: e[n],
		enumerable: !0
	});
	return t || xt(r, Symbol.toStringTag, { value: "Module" }), r;
}, ie = {
	Column: "column",
	Row: "row"
};
({ ...ie });
function Xe(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (e.constructor !== t.constructor) return !1;
		let r, n, i;
		if (Array.isArray(e)) {
			if (r = e.length, r != t.length) return !1;
			for (n = r; n-- !== 0;) if (!Xe(e[n], t[n])) return !1;
			return !0;
		}
		if (e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (n of e.entries()) if (!t.has(n[0])) return !1;
			for (n of e.entries()) if (!Xe(n[1], t.get(n[0]))) return !1;
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
		if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length) return !1;
		for (n = r; n-- !== 0;) if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
		for (n = r; n-- !== 0;) {
			let a = i[n];
			if ((a !== "_owner" || !e.$$typeof) && !Xe(e[a], t[a])) return !1;
		}
		return !0;
	}
	return e != e && t != t;
}
function un(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || (function(r) {
		return r.$$typeof === dn;
	})(e);
}
var dn = typeof Symbol == "function" && Symbol.for ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
function fn(e) {
	return /* @__PURE__ */ (function(t) {
		return !!t && typeof t == "object";
	})(e) && !un(e);
}
function Oe(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Ee((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
	var r;
}
function pn(e, t, r) {
	return e.concat(t).map(function(n) {
		return Oe(n, r);
	});
}
function Tt(e) {
	return Object.keys(e).concat((function(t) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(r) {
			return Object.propertyIsEnumerable.call(t, r);
		}) : [];
	})(e));
}
function Ct(e, t) {
	try {
		return t in e;
	} catch {
		return !1;
	}
}
function mn(e, t, r) {
	let n = {};
	return r.isMergeableObject(e) && Tt(e).forEach(function(i) {
		n[i] = Oe(e[i], r);
	}), Tt(t).forEach(function(i) {
		(function(a, l) {
			return Ct(a, l) && !(Object.hasOwnProperty.call(a, l) && Object.propertyIsEnumerable.call(a, l));
		})(e, i) || (Ct(e, i) && r.isMergeableObject(t[i]) ? n[i] = (function(a, l) {
			if (!l.customMerge) return Ee;
			let s = l.customMerge(a);
			return typeof s == "function" ? s : Ee;
		})(i, r)(e[i], t[i], r) : n[i] = Oe(t[i], r));
	}), n;
}
function Ee(e, t, r) {
	(r ||= {}).arrayMerge = r.arrayMerge || pn, r.isMergeableObject = r.isMergeableObject || fn, r.cloneUnlessOtherwiseSpecified = Oe;
	let n = Array.isArray(t);
	return n === Array.isArray(e) ? n ? r.arrayMerge(e, t, r) : mn(e, t, r) : Oe(t, r);
}
Ee.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(r, n) {
		return Ee(r, n, t);
	}, {});
};
var lr = ge({
	DonePromise: () => gn,
	EmptyArray: () => De,
	EmptyObject: () => hn,
	OSType: () => pe,
	arrayMove: () => Ln,
	asNumber: () => bn,
	camelToPrettyCase: () => wn,
	castToString: () => Mn,
	cloneObject: () => xn,
	consoleWithNoSource: () => zn,
	deepEqual: () => Xe,
	deepFreeze: () => gr,
	deepMerge: () => Ee,
	diffValues: () => $n,
	findEqualOrGreater: () => Nn,
	findEqualOrLesser: () => kn,
	getFromPath: () => Bn,
	getPlatform: () => qe,
	isDefined: () => On,
	isEmpty: () => Dn,
	isEqualArrays: () => cr,
	isEqualBounds: () => Cn,
	isNullOrUndefined: () => mr,
	isNumeric: () => vn,
	isObject: () => Fe,
	isPromiseLike: () => Fn,
	isRectInsideRect: () => Un,
	isRectIntersect: () => hr,
	mergeContentful: () => Rn,
	removeEmptyProperties: () => ur,
	removeEqualValues: () => fr,
	removeEqualValuesLayered: () => pr,
	removeListenerAll: () => An,
	roundAccurately: () => _n,
	setToPath: () => jn,
	splitNumber: () => En,
	subtractRect: () => Pn,
	textToKey: () => Sn,
	toSafeJSON: () => dt,
	transpose: () => In,
	uuidV4: () => He,
	validEnumValue: () => yn
}), De = Object.freeze([]), hn = Object.freeze({}), gn = Promise.resolve(), sr = (e) => e;
function yn(e, t) {
	if (!Object.values(e).includes(t)) throw Error(\`Invalid type: \${t ?? "null"}. Must be one of: \${Object.values(e).join(", ")}.\`);
}
function wn(e) {
	return e ? e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase()) : "";
}
function Sn(e) {
	return e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
var oe = Array.from({ length: 256 }, (e, t) => (t + 256).toString(16).slice(1));
function He() {
	let e = globalThis.crypto;
	if (e?.randomUUID) return e.randomUUID();
	if (e?.getRandomValues) {
		let t = e.getRandomValues(/* @__PURE__ */ new Uint8Array(16));
		return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, oe[t[0]] + oe[t[1]] + oe[t[2]] + oe[t[3]] + "-" + oe[t[4]] + oe[t[5]] + "-" + oe[t[6]] + oe[t[7]] + "-" + oe[t[8]] + oe[t[9]] + "-" + oe[t[10]] + oe[t[11]] + oe[t[12]] + oe[t[13]] + oe[t[14]] + oe[t[15]];
	}
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
		let r = 16 * Math.random() | 0;
		return (t === "x" ? r : 3 & r | 8).toString(16);
	});
}
function bn(e) {
	let t = (function(r) {
		return 1 * r;
	})(e);
	return Number.isFinite(t) ? t : 0;
}
function vn(e) {
	let t = 1 * e;
	return Number.isFinite(t) && typeof t == "number";
}
var et = [
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
function En(e) {
	let t = Math.abs(e);
	if (!Number.isFinite(t)) return null;
	let r = Math.trunc(t), n = t - r, i;
	r > 2 ** 53 - 1 ? i = Number(r.toExponential().split("e")[1]) + 1 : (i = Math.ceil(Math.log10(r + 1)), et[i] <= r && i++);
	let a = 0, l = 0, s = 15 - i;
	if (n > 0 && s > 0) {
		let c = et[s];
		if (a = Math.round(n * c), a === c) r++, a = 0, r >= et[i] && i++;
		else if (a > 0) for (l = s; a % 10 == 0;) a /= 10, l--;
	}
	return {
		ip: e < 0 ? -r : r,
		fp: a,
		ipLength: i,
		fpLength: l
	};
}
function _n(e, t = 0) {
	if (e == null || !isFinite(e)) return null;
	let r = 10 ** t;
	return Number(Math.round(e * r) / r);
}
function xn(e) {
	return mr(e) ? e : JSON.parse(JSON.stringify(e));
}
var Tn = (e, t) => e === t;
function cr(e, t, r) {
	if (e === t) return !0;
	if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
	r ||= Tn;
	let n = e.length;
	for (let i = 0; i < n; i++) if (!r(e[i], t[i])) return !1;
	return !0;
}
function Cn(e, t) {
	return e === t || !(!e || !t) && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fe(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function ur(e) {
	if (typeof e != "object" || Array.isArray(e) || e === null) return e;
	let t = e;
	return Object.keys(t).forEach(function(r) {
		t[r] && typeof t[r] == "object" ? ur(t[r]) : t[r] !== null && t[r] !== void 0 || delete t[r], typeof t[r] == "object" && Object.keys(t[r]).length === 0 && delete t[r];
	}), Object.keys(e).length === 0 ? null : e;
}
function An(e, t) {
	if (!e) return De;
	let r = e.length;
	for (let n = 0; n < r; n++) {
		let i = e[n];
		i && i(t);
	}
	return De;
}
function In(e) {
	if (!e) return e;
	let t = e.length, r = e[0].length, n = [];
	for (let i = 0; i < r; i++) n[i] = Array(t);
	for (let i = 0; i < t; i++) {
		let a = e[i];
		for (let l = 0; l < r; l++) n[l][i] = a[l];
	}
	return n;
}
var dr = (e, t) => !(e !== t && !cr(e, t)) || !!e.isEqual?.(t);
function fr(e, t, r = dr) {
	if (e == null || e === t) return null;
	if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) return r(e, t) ? null : e;
	let n = Object.keys(e), i = n.length;
	if (i === 0) return null;
	let a = !1;
	for (let l = 0; l < i; l++) {
		let s = n[l];
		fr(e[s], t?.[s], r) === null && (a = !0, delete e[s]);
	}
	return a && Object.keys(e).length === 0 ? null : void 0;
}
function pr(e, t, r = dr) {
	if (e == null) return !0;
	if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) {
		let s, c = !1;
		for (let d = 0; !c && d < t.length; d++) t[d] !== void 0 && (c = !0, s = t[d]);
		return c && (e === s || r(e, s));
	}
	let n = Object.keys(e), i = n.length;
	if (i === 0) return !0;
	let a = t.length, l = !1;
	for (let s = 0; s < i; s++) {
		let c = n[s], d = [];
		for (let m = 0; m < a; m++) {
			let o = t[m]?.[c];
			o !== void 0 && d.push(o);
		}
		pr(e[c], d, r) && (l = !0, delete e[c]);
	}
	return l && Object.keys(e).length === 0;
}
function Rn(...e) {
	let t = e.length;
	if (t > 0 && e[t - 1] !== void 0 && !Fe(e[t - 1])) return e[t - 1];
	let r = e[0] || {};
	for (let n = 1; n < t; n++) r = Ee(r, e[n] || {}, { arrayMerge: (i, a) => [...a] });
	return r;
}
function $n(e, t) {
	let r = {}, n = Object.keys(t), i = n.length;
	for (let a = 0; a < i; a++) {
		let l = n[a], s = e[l], c = t[l];
		s !== c && (r[l] = s === void 0 ? c : s);
	}
	return Object.keys(r).length === 0 ? null : r;
}
function Nn(e, t, r = sr) {
	let n = 0, i = e.length - 1;
	for (; n <= i;) {
		let a = Math.floor((n + i) / 2), l = r(e[a]);
		if (l === t) return a;
		l < t ? n = a + 1 : i = a - 1;
	}
	return n;
}
function kn(e, t, r = sr) {
	let n = e.length - 1, i = 0;
	for (; n >= i;) {
		let a = Math.floor((n + i) / 2), l = r(e[a]);
		if (l === t) return a;
		l > t ? n = a - 1 : i = a + 1;
	}
	return n;
}
function Ln(e, t, r) {
	let n = e.slice();
	return n.splice(r < 0 ? n.length + r : r, 0, n.splice(t, 1)[0]), n;
}
function Mn(e) {
	return e == null || e === void 0 ? "" : typeof e == "string" ? e : "" + e;
}
function mr(e) {
	return e == null;
}
function On(e) {
	return e != null;
}
function Dn(e) {
	return e == null || e === "";
}
function Fn(e) {
	return !!e && typeof e.then == "function";
}
function hr(e, t) {
	return !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top);
}
function Un(e, t) {
	return e.top >= t.top && e.bottom <= t.bottom && e.left >= t.left && e.right <= t.right;
}
function Pn(e, t, r = !1) {
	if (!t) return [e];
	if (!hr(e, t)) return [];
	let n = [], i = e, a = () => {
		t.top > i.top && t.top < i.bottom && (n.push({
			...i,
			bottom: t.top
		}), i = {
			...i,
			top: t.top
		});
	}, l = () => {
		t.bottom > i.top && t.bottom < i.bottom && (n.push({
			...i,
			top: t.bottom
		}), i = {
			...i,
			bottom: t.bottom
		});
	}, s = () => {
		t.right > i.left && t.right < i.right && (n.push({
			...i,
			left: t.right
		}), i = {
			...i,
			right: t.right
		});
	}, c = () => {
		t.left > i.left && t.left < i.right && (n.push({
			...i,
			right: t.left
		}), i = {
			...i,
			left: t.left
		});
	};
	return r ? (c(), s(), a(), l()) : (a(), l(), s(), c()), n;
}
function Bn(e, t) {
	let r = t.split("."), n = e, i = r.length;
	for (let a = 0; a < i; a++) {
		let l = r[a];
		if (!n) return null;
		let s = n[l];
		if (typeof s == "function" && (s = s.bind(n)()), !s || !Fe(s)) return s;
		n = s;
	}
	return n ?? null;
}
function jn(e, t, r) {
	let n = t.split("."), i = e;
	if (!i) throw Error("Can not set path to a null path.");
	let a = n.length;
	for (let l = 0; i && l < a - 1; l++) {
		let s = n[l], c = i[s];
		if (c ?? (c = {}, i[s] = c), !Fe(c)) throw Error("Can not set path to a non object path.");
		i = c;
	}
	if (typeof r != "number" && typeof r != "boolean" && typeof r != "string" && !Fe(r)) throw Error(\`Can not set path to \${r} that is not a a supported primitive.\`);
	return i[n[a - 1]] = r, e;
}
function zn(...e) {
	return new Promise((t) => {
		setTimeout(() => {
			Function("console.log.apply(console, arguments)").apply(null, e), t();
		});
	});
}
var pe = {
	Windows: "windows",
	MacOS: "macos",
	IOS: "ios",
	Linux: "linux",
	Android: "android",
	Safari: "safari",
	Firefox: "firefox",
	Unknown: "unknown"
};
function qe() {
	let e = globalThis.navigator !== void 0 && globalThis.navigator.userAgent ? globalThis.navigator.userAgent.toLowerCase() : "";
	return e ? /(win32|win64|windows|wince)/i.test(e) ? pe.Windows : /(macintosh|macintel|macppc|mac68k|macos)/i.test(e) ? pe.MacOS : /(iphone|ipad|ipod)/i.test(e) ? pe.IOS : /android/.test(e) ? pe.Android : /linux/.test(e) ? pe.Linux : /^((?!chrome|android|).)*safari/i.test(e) ? pe.Safari : /^((?!chrome|android|Seamonkey).)*firefox/i.test(e) ? pe.Firefox : pe.Unknown : pe.Unknown;
}
function gr(e) {
	Object.freeze(e);
	let t = e;
	return Object.keys(t).forEach((r) => {
		typeof t[r] != "object" || t[r] === null || Object.isFrozen(t[r]) || gr(t[r]);
	}), e;
}
function dt(e) {
	if (typeof e != "object" || !e) return e;
	if (typeof e.toJSON == "function") return e.toJSON();
	if (Array.isArray(e)) return e.map((r) => dt(r));
	if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) return e.toString();
	let t = {};
	for (let r in e) e.hasOwnProperty(r) && (t[r] = dt(e[r]));
	return t;
}
ge({
	EmptyCell: () => yr,
	EmptyRange: () => Kn,
	EmptyRanges: () => Vn,
	EmptySelection: () => Gn,
	InsertCutShift: () => ve,
	cellToRange: () => Wn,
	classifyInsertCut: () => ii,
	columnFirstCellComparator: () => Er,
	columnFirstRangeComparator: () => wr,
	createCellComparator: () => Ar,
	createConflatingRanges: () => ni,
	createRangeComparator: () => Cr,
	defaultRange: () => ei,
	extendRangeToIntersectingRanges: () => Lr,
	extendRangeToUnionRanges: () => qn,
	intersectRanges: () => Nr,
	isCellWithinRange: () => Xn,
	isEqualCells: () => Ir,
	isEqualRanges: () => yt,
	isEqualRangesArrays: () => $r,
	isEqualSelectionCoords: () => kr,
	isRangeWithinRange: () => Rr,
	isRangesIntersect: () => wt,
	isRefusedInsertCut: () => ai,
	isSingleCell: () => Hn,
	isValidRange: () => Yn,
	mergeRangeCoordValues: () => Or,
	reverseColumnFirstCellComparator: () => Tr,
	reverseColumnFirstRangeComparator: () => vr,
	reverseRowFirstCellComparator: () => xr,
	reverseRowFirstRangeComparator: () => br,
	rowFirstCellComparator: () => _r,
	rowFirstRangeComparator: () => Sr,
	sanitizeRange: () => Mr,
	sanitizeRangeArray: () => Qn,
	translateRange: () => Zn,
	unionRanges: () => ft,
	unionRangesArrays: () => Jn
});
var yr = Object.freeze({
	colIndex: 0,
	rowIndex: 0
}), Kn = Object.freeze({
	colStart: 0,
	rowStart: 0,
	colEnd: 0,
	rowEnd: 0
}), Vn = De, Gn = Object.freeze({
	cell: yr,
	ranges: De,
	rangeIndex: -1
});
function wr(e, t) {
	return e.colStart === t.colStart ? e.rowStart - t.rowStart : e.colStart - t.colStart;
}
function Sr(e, t) {
	return e.rowStart === t.rowStart ? e.colStart - t.colStart : e.rowStart - t.rowStart;
}
function br(e, t) {
	return e.rowEnd === t.rowEnd ? t.colEnd - e.colEnd : t.rowEnd - e.rowEnd;
}
function vr(e, t) {
	return e.colEnd === t.colEnd ? t.rowEnd - e.rowEnd : t.colEnd - e.colEnd;
}
function Er(e, t) {
	return e.colIndex === t.colIndex ? e.rowIndex - t.rowIndex : e.colIndex - t.colIndex;
}
function _r(e, t) {
	return e.rowIndex === t.rowIndex ? e.colIndex - t.colIndex : e.rowIndex - t.rowIndex;
}
function xr(e, t) {
	return e.rowIndex === t.rowIndex ? t.colIndex - e.colIndex : t.rowIndex - e.rowIndex;
}
function Tr(e, t) {
	return e.colIndex === t.colIndex ? t.rowIndex - e.rowIndex : t.colIndex - e.colIndex;
}
function Cr(e = ie.Row, t = !1) {
	return t ? e === ie.Column ? vr : br : e === ie.Column ? wr : Sr;
}
function Ar(e = ie.Row, t = !1) {
	return t ? e === ie.Column ? Tr : xr : e === ie.Column ? Er : _r;
}
function Ir(e, t) {
	return e === t || !(!e || !t) && e.rowIndex === t.rowIndex && e.colIndex === t.colIndex && e.scope === t.scope;
}
function yt(e, t) {
	return e === t || !(!e || !t) && e.rowStart === t.rowStart && e.rowEnd === t.rowEnd && e.colStart === t.colStart && e.colEnd === t.colEnd && e.scope === t.scope;
}
function Xn(e, t) {
	if (!e || !t) return !1;
	let r = e.rowIndex;
	if (r < t.rowStart || r > t.rowEnd) return !1;
	let n = e.colIndex;
	return !(n < t.colStart || n > t.colEnd);
}
function Rr(e, t) {
	return !(!e || !t) && !(e.rowStart < t.rowStart || e.rowEnd > t.rowEnd) && !(e.colStart < t.colStart || e.colEnd > t.colEnd);
}
function wt(e, t) {
	return !(!e || !t) && !(e.colStart > t.colEnd || t.colStart > e.colEnd) && !(e.rowStart > t.rowEnd || t.rowStart > e.rowEnd);
}
function $r(e, t) {
	if (e === t) return !0;
	if (!e || !t || e.length !== t.length) return !1;
	for (let r = 0; r < e.length; r++) if (!yt(e[r], t[r])) return !1;
	return !0;
}
function Hn(e) {
	return !!e && e.rowEnd === e.rowStart && e.colStart === e.colEnd;
}
function Wn(e, t) {
	if (!e) return null;
	let r = t;
	return r || (r = { ...e }, delete r.colIndex, delete r.rowIndex), r.colStart = e.colIndex ?? 0, r.rowStart = e.rowIndex ?? 0, r.colEnd = e.colIndex ?? 0, r.rowEnd = e.rowIndex ?? 0, r;
}
function Nr(e, t, r) {
	if (!e) return r ? t : { ...t };
	if (!t) return r ? e : { ...e };
	if (!e && !t || e.rowStart > t.rowEnd || e.rowEnd < t.rowStart || e.colStart > t.colEnd || e.colEnd < t.colStart) return null;
	let n = Math.max(e.colStart, t.colStart), i = Math.max(e.rowStart, t.rowStart), a = Math.min(e.colEnd, t.colEnd), l = Math.min(e.rowEnd, t.rowEnd), s = r;
	return s ? (s.colStart = n, s.rowStart = i, s.colEnd = a, s.rowEnd = l) : s = {
		colStart: n,
		rowStart: i,
		colEnd: a,
		rowEnd: l
	}, s;
}
function ft(e, t, r) {
	if (!e && !t) return null;
	if (!e) return r ? t : { ...t };
	if (!t) return r ? e : { ...e };
	let n = Math.min(e.colStart, t.colStart), i = Math.min(e.rowStart, t.rowStart), a = Math.max(e.colEnd, t.colEnd), l = Math.max(e.rowEnd, t.rowEnd), s = r;
	return s ? (s.colStart = n, s.rowStart = i, s.colEnd = a, s.rowEnd = l) : s = {
		colStart: n,
		rowStart: i,
		colEnd: a,
		rowEnd: l
	}, s;
}
function kr(e, t) {
	return e === t || !(!e || !t) && e.rangeIndex === t.rangeIndex && !!Ir(e.cell, t.cell) && $r(e.ranges, t.ranges);
}
function Jn(e, t, r) {
	if (!e || e.length === 0) return null;
	if (e.length === 1 && !t) return e[0];
	let n = e[0];
	for (let i = 1; i < e.length; i++) n = ft(n, e[i], r);
	return t && (n = ft(n, t, r)), n;
}
function Yn(e) {
	return !!e && !(typeof e.colStart != "number" || e.colStart < 0) && !(typeof e.colEnd != "number" || e.colEnd < e.colStart) && !(typeof e.rowStart != "number" || e.rowStart < 0) && !(typeof e.rowEnd != "number" || e.rowEnd < e.rowStart);
}
function qn(e, t) {
	if (!t || t.length === 0) return e;
	let r = e, n = null;
	for (; !yt(r, n);) n = r, r = Lr(n, t);
	return r;
}
function Lr(e, t) {
	if (!t || t.length === 0) return e;
	let r = { ...e };
	for (let n = 0; n < t.length; n++) {
		let i = t[n];
		wt(r, i) && (r.rowStart = Math.min(r.rowStart, i.rowStart), r.colStart = Math.min(r.colStart, i.colStart), r.rowEnd = Math.max(r.rowEnd, i.rowEnd), r.colEnd = Math.max(r.colEnd, i.colEnd));
	}
	return r;
}
function Zn(e, t = -e.rowStart, r = -e.colStart, n) {
	return n ? (n.colStart = e.colStart + r, n.rowStart = e.rowStart + t, n.colEnd = e.colEnd + r, n.rowEnd = e.rowEnd + t, n) : {
		colStart: e.colStart + r,
		rowStart: e.rowStart + t,
		colEnd: e.colEnd + r,
		rowEnd: e.rowEnd + t
	};
}
function Mr(e, t) {
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
function Qn(e, t) {
	if (!e) return null;
	let r = e.length, n = Array(r);
	for (let i = 0; i < r; i++) n[i] = Mr(e[i], t);
	return n;
}
function ei(e, t, r) {
	return e ? r ? (r.colStart = e.colStart ?? t.colStart, r.rowStart = e.rowStart ?? t.rowStart, r.colEnd = e.colEnd ?? t.colEnd, r.rowEnd = e.rowEnd ?? t.rowEnd, r) : {
		colStart: e.colStart ?? t.colStart,
		rowStart: e.rowStart ?? t.rowStart,
		colEnd: e.colEnd ?? t.colEnd,
		rowEnd: e.rowEnd ?? t.rowEnd
	} : t;
}
var ti = [null, null], ri = (e, t, r) => {
	if (e[0].value === e[1].value) return t;
};
function Or(e, t = 2, r, n = ie.Row, i) {
	let a = [...e];
	if (t <= 0 || e.length <= 1) return a;
	let l = n === ie.Column, s = 0, c = !1;
	do {
		let d = a.sort(Cr(l ? ie.Row : ie.Column));
		a = [], a.push(d[0]);
		let m = d.length, o = 0, f = d[0], b = f.colStart, S = f.rowStart, A = f.colEnd, k = f.rowEnd;
		for (let h = 1; h < m; h++) {
			let y = d[h], w = !1;
			if (w = l ? f && S === y.rowStart && k === y.rowEnd && A + 1 === y.colStart : f && b === y.colStart && A === y.colEnd && k + 1 === y.rowStart, w) {
				let D = {
					colStart: b,
					rowStart: S,
					colEnd: l ? y.colEnd : A,
					rowEnd: l ? k : y.rowEnd
				};
				if (f.value !== void 0 && (D.value = f.value), r) {
					let K = i ?? [null, null];
					K[0] = f, K[1] = y, D = r(K, D, n);
				}
				if (D) {
					a[o] = D, c = !0, f = D, b = f.colStart, S = f.rowStart, A = f.colEnd, k = f.rowEnd;
					continue;
				}
			}
			a[++o] = y, f = y, b = f.colStart, S = f.rowStart, A = f.colEnd, k = f.rowEnd;
		}
		s++, l = !l, s === 1 && (c = !0);
	} while (s < t && c && a.length > 1);
	return a;
}
function ni(e, t = !1) {
	let r = [], n, i = null, a = -(2 ** 53 - 1), l = -(2 ** 53 - 1);
	return {
		append: (s, c, d) => {
			let m = !0, o = d !== void 0;
			if (o) {
				let S = e ? e(n, d, t) : n === d ? d : void 0;
				S === void 0 ? m = !1 : d = S;
			}
			if (m && c === l + 1 && s === a) return t ? i.rowEnd = c : i.colEnd = c, l = c, void (n = d);
			i && r.push(i);
			let f = t ? s : c, b = t ? c : s;
			i = {
				colStart: f,
				rowStart: b,
				colEnd: f,
				rowEnd: b
			}, o && (i.value = d), a = s, l = c, n = d;
		},
		done: (s) => (i &&= (r.push(i), null), s ? Or(r, 3, s === !0 ? ri : s, t ? ie.Column : ie.Row, ti) : r)
	};
}
var ve = {
	Close: "close",
	Blank: "blank",
	Inside: "inside",
	Tear: "tear"
};
function ii(e, t, r) {
	let n = r === ie.Row;
	return (n ? e.colStart === t.colStart && e.colEnd === t.colEnd : e.rowStart === t.rowStart && e.rowEnd === t.rowEnd) ? (n ? t.rowStart > e.rowStart && t.rowStart <= e.rowEnd : t.colStart > e.colStart && t.colStart <= e.colEnd) ? ve.Inside : ve.Close : (n ? e.rowEnd >= t.rowStart && e.colStart <= t.colEnd && e.colEnd >= t.colStart : e.colEnd >= t.colStart && e.rowStart <= t.rowEnd && e.rowEnd >= t.rowStart) ? ve.Tear : ve.Blank;
}
function ai(e) {
	return e === ve.Inside || e === ve.Tear;
}
var q = {
	Up: "up",
	Down: "down",
	Left: "left",
	Right: "right"
}, J = {
	Html: "text/html",
	Plain: "text/plain",
	Png: "image/png"
};
ge({
	findNextCellWithinSelection: () => Dr,
	traverseHiddenHeaders: () => fe
});
function fe(e, t, r, n) {
	if (!e) return t;
	let i = t, a = r === q.Right || r === q.Down;
	for (;;) {
		let l = e(i, !a);
		if (l === 0) return i;
		let s = a ? i + l : i - l;
		if (n !== void 0 && (a ? s > n : s < n)) return n;
		i = s;
	}
}
function Dr(e, t = q.Right, r, n, i, a = null) {
	if (a && kr(a, e)) return e;
	let l = e.ranges, s = e.rangeIndex, c = l[s];
	if (!wt({
		rowStart: e.cell.rowIndex,
		colStart: e.cell.colIndex,
		rowEnd: e.cell.rowIndex,
		colEnd: e.cell.colIndex
	}, c)) return e;
	let d = { ...e.cell }, m = s;
	switch (t) {
		case q.Right:
			d.colIndex = fe(i, d.colIndex + 1, t, c.colEnd + 1);
			break;
		case q.Left:
			d.colIndex = fe(i, d.colIndex - 1, t, c.colStart - 1);
			break;
		case q.Down:
			d.rowIndex = fe(n, d.rowIndex + 1, t, c.rowEnd + 1);
			break;
		case q.Up: d.rowIndex = fe(n, d.rowIndex - 1, t, c.rowStart - 1);
	}
	let o = (S) => {
		if (S) {
			m = s >= l.length - 1 ? 0 : s + 1;
			let A = l[m];
			d = {
				colIndex: A.colStart,
				rowIndex: A.rowStart
			};
		} else {
			m = s <= 0 ? l.length - 1 : s - 1;
			let A = l[m];
			d = {
				colIndex: A.colEnd,
				rowIndex: A.rowEnd
			};
		}
	};
	if (t === q.Right && d.colIndex > c.colEnd && d.rowIndex === c.rowEnd) o(!0);
	else if (t === q.Left && d.colIndex < c.colStart && d.rowIndex === c.rowStart) o(!1);
	else if (t === q.Down && d.colIndex === c.colEnd && d.rowIndex > c.rowEnd) o(!0);
	else if (t === q.Up && d.colIndex === c.colStart && d.rowIndex < c.rowStart) o(!1);
	else {
		let S = d.rowIndex, A = d.colIndex;
		switch (t) {
			case q.Right:
				A > c.colEnd && (S = fe(n, S + 1, t, c.rowEnd + 1), A = c.colStart, S > c.rowEnd && (S = c.rowStart));
				break;
			case q.Left:
				A < c.colStart && (S = fe(n, S - 1, t, c.rowStart - 1), A = c.colEnd, S < c.rowStart && (S = c.rowEnd));
				break;
			case q.Down:
				S > c.rowEnd && (A = fe(i, A + 1, t, c.colEnd + 1), S = c.rowStart, A > c.colEnd && (A = c.colStart));
				break;
			case q.Up: S < c.rowStart && (A = fe(i, A - 1, t, c.colStart - 1), S = c.rowEnd, A < c.colStart && (A = c.colEnd));
		}
		d = {
			rowIndex: S,
			colIndex: A
		};
	}
	let f = r(d);
	if (!Rr(f, c)) {
		let S = Nr(f, c);
		S && (f = S);
	}
	let b = {
		rowStart: fe(n, f.rowStart, q.Down, f.rowEnd),
		colStart: fe(i, f.colStart, q.Right, f.colEnd),
		rowEnd: fe(n, f.rowEnd, q.Up, f.rowStart),
		colEnd: fe(i, f.colEnd, q.Left, f.colStart)
	};
	if (b.rowStart !== d.rowIndex || b.colStart !== d.colIndex) {
		switch (t) {
			case q.Right:
				l[m].colStart === b.colStart && l[m].colEnd === b.colEnd && (d.rowIndex = b.rowEnd), d.colIndex = b.colEnd;
				break;
			case q.Left:
				l[m].colStart === b.colStart && l[m].colEnd === b.colEnd && (d.rowIndex = b.rowStart), d.rowIndex === b.rowStart ? d.colIndex = b.colStart + 1 : d.colIndex = b.colStart;
				break;
			case q.Down:
				l[m].rowStart === b.rowStart && l[m].rowEnd === b.rowEnd && (d.colIndex = b.colEnd), d.rowIndex = b.rowEnd;
				break;
			case q.Up: l[m].rowStart === b.rowStart && l[m].rowEnd === b.rowEnd && (d.colIndex = b.colStart), d.colIndex === b.colStart ? d.rowIndex = b.rowStart + 1 : d.rowIndex = b.rowStart;
		}
		return Dr({
			cell: d,
			ranges: e.ranges,
			rangeIndex: m
		}, t, r, n, i, a ?? e);
	}
	return {
		ranges: e.ranges,
		cell: d,
		rangeIndex: m
	};
}
var oi, $e = (e, t) => {
	if (e.length >= t) return e;
	let r = new Int32Array(Math.max(t, 2 * e.length));
	return r.set(e), r;
}, Ne = /* @__PURE__ */ new Int32Array(1024), tt = (e) => (Ne.length < e && (Ne = new Int32Array(Math.max(e, 2 * Ne.length))), Ne.fill(0, 0, e), Ne), li = class {
	constructor(e, t, r, n) {
		this._nextOrder = 0, this._activeLen = 0, this._events = /* @__PURE__ */ new Int32Array(64), this._hasBand = !1, this._bandStart = 0, this._bandEnd = 0, this._rMinS = /* @__PURE__ */ new Int32Array(64), this._rMinE = /* @__PURE__ */ new Int32Array(64), this._rOff = /* @__PURE__ */ new Int32Array(65), this._rCount = 0, this._pool = /* @__PURE__ */ new Int32Array(256), this._overlaps = /* @__PURE__ */ new Int32Array(16), this._rInter = null, this._region = -1, this._major = 0, this._minor = 0, this._done = !1, this.rowStart = 0, this.rowEnd = 0, this.colStart = 0, this.colEnd = 0, this.cellRow = 0, this.cellCol = 0, this.intersection = null, this._isColumn = r, this._isReverse = n, this._store = e;
		let i = e.count;
		this._n = i;
		let a = new Int32Array(i), l = new Int32Array(i), s = new Int32Array(i), c = new Int32Array(i), d = r ? e.colS : e.rowS, m = r ? e.colE : e.rowE, o = r ? e.rowS : e.colS, f = r ? e.rowE : e.colE;
		for (let h = 0; h < i; h++) n ? (a[h] = -m[h], l[h] = -d[h], s[h] = -f[h], c[h] = -o[h]) : (a[h] = d[h], l[h] = m[h], s[h] = o[h], c[h] = f[h]);
		this._M0 = a, this._M1 = l, this._m0 = s, this._m1 = c;
		let b = r ? t.colStart : t.rowStart, S = r ? t.colEnd : t.rowEnd, A = S - b + 1, k = new Int32Array(i);
		if (i < 256 || A > 16 * i) {
			for (let h = 0; h < i; h++) k[h] = h;
			k.sort((h, y) => a[h] - a[y] || h - y);
		} else {
			let h = n ? -S : b, y = tt(A + 1);
			for (let w = 0; w < i; w++) y[a[w] - h + 1]++;
			for (let w = 1; w <= A; w++) y[w] += y[w - 1];
			for (let w = 0; w < i; w++) k[y[a[w] - h]++] = w;
		}
		this._order = k, this._active = new Int32Array(Math.min(2 * i, 1024)), this._scratch = new Int32Array(this._active.length);
	}
	_stable(e) {
		return this._isReverse ? this._n - 1 - e : e;
	}
	_compareEvents(e, t) {
		let r = e >> 1, n = t >> 1, i = 1 & e, a = 1 & t, l = this._m0, s = this._m1, c = i ? s[r] : l[r], d = a ? s[n] : l[n];
		if (c !== d) return c - d;
		if (i !== a) return i - a;
		let m = i ? l[r] : s[r], o = a ? l[n] : s[n];
		return m === o ? this._stable(r) - this._stable(n) : m - o;
	}
	_sortEvents(e, t, r, n) {
		let i = n - r + 1;
		if (t < 256 || i > 16 * t) return e.subarray(0, t).sort((o, f) => this._compareEvents(o, f)), e;
		let a = this._m0, l = this._m1, s = e, c = this._scratch;
		c.length < t && (c = this._scratch = new Int32Array(t));
		let d = tt(i + 1);
		for (let o = 0; o < t; o++) {
			let f = s[o];
			d[(1 & f ? a[f >> 1] : l[f >> 1]) - r + 1]++;
		}
		for (let o = 1; o <= i; o++) d[o] += d[o - 1];
		for (let o = 0; o < t; o++) {
			let f = s[o];
			c[d[(1 & f ? a[f >> 1] : l[f >> 1]) - r]++] = f;
		}
		let m = 0;
		for (let o = 0; o < t; o++) 1 & c[o] || (s[m++] = c[o]);
		for (let o = 0; o < t; o++) 1 & ~c[o] || (s[m++] = c[o]);
		d = tt(i + 1);
		for (let o = 0; o < t; o++) {
			let f = s[o];
			d[(1 & f ? l[f >> 1] : a[f >> 1]) - r + 1]++;
		}
		for (let o = 1; o <= i; o++) d[o] += d[o - 1];
		for (let o = 0; o < t; o++) {
			let f = s[o];
			c[d[(1 & f ? l[f >> 1] : a[f >> 1]) - r]++] = f;
		}
		return this._scratch = s, this._events = c, c;
	}
	_advanceBand() {
		let e = this._n, t = this._M0, r = this._M1, n = this._order, i, a = this._active, l = this._activeLen;
		if (this._hasBand) {
			let o = this._bandEnd, f = 0;
			for (let b = 0; b < l; b++) {
				let S = a[b];
				r[S >> 1] > o && (a[f++] = S);
			}
			l = f;
		}
		let s = this._nextOrder;
		if (l > 0) i = this._bandEnd + 1;
		else {
			if (s >= e) return this._activeLen = 0, this._done = !0, !1;
			i = t[n[s]];
		}
		let c = s;
		for (; c < e && t[n[c]] === i;) c++;
		let d = c - s;
		if (d > 0) {
			let o = 2 * d, f = this._events;
			f.length < o && (f = this._events = new Int32Array(Math.max(o, 2 * f.length)));
			let b = this._m0, S = this._m1, A = 2 ** 53 - 1, k = -(2 ** 53 - 1), h = 0;
			if (this._isReverse) for (let K = c - 1; K >= s; K--) {
				let L = n[K];
				f[h++] = L << 1, f[h++] = L << 1 | 1, b[L] < A && (A = b[L]), S[L] > k && (k = S[L]);
			}
			else for (let K = s; K < c; K++) {
				let L = n[K];
				f[h++] = L << 1, f[h++] = L << 1 | 1, b[L] < A && (A = b[L]), S[L] > k && (k = S[L]);
			}
			let y = this._sortEvents(f, o, A, k), w = l + o, D = this._scratch;
			if ((D === y || D.length < w) && (D = new Int32Array(Math.max(w, 2 * a.length))), l === 0) D.set(y.subarray(0, o));
			else {
				let K = 0, L = 0, R = 0;
				for (; K < l && L < o;) this._compareEvents(a[K], y[L]) <= 0 ? D[R++] = a[K++] : D[R++] = y[L++];
				for (; K < l;) D[R++] = a[K++];
				for (; L < o;) D[R++] = y[L++];
			}
			this._scratch = a.length >= D.length ? a : new Int32Array(D.length), a = this._active = D, l = w;
		}
		this._activeLen = l, this._nextOrder = c;
		let m = c < e ? t[n[c]] - 1 : 2 ** 53 - 1;
		for (let o = 0; o < l; o++) {
			let f = r[a[o] >> 1];
			f < m && (m = f);
		}
		return this._bandStart = i, this._bandEnd = m, this._hasBand = !0, this._sweepBand(), !0;
	}
	_sweepBand() {
		let e = this._active, t = this._activeLen, r = this._m0, n = this._m1, i = this._rMinS, a = this._rMinE, l = this._rOff, s = this._pool, c = this._overlaps, d = 0, m = 0, o = 0, f = 0, b = (S, A) => {
			o >= i.length && (i = this._rMinS = $e(i, o + 1), a = this._rMinE = $e(a, o + 1), l = this._rOff = $e(l, i.length + 1)), i[o] = S, a[o] = A, l[o] = m, o++, m + d > s.length && (s = this._pool = $e(s, m + d));
			for (let k = 0; k < d; k++) s[m++] = c[k];
		};
		for (let S = 0; S < t; S++) {
			let A = e[S], k = A >> 1;
			if (1 & A) {
				let h = n[k];
				if (f <= h && b(f, h), d > 1) {
					let y = d - 1;
					for (; y >= 0 && c[y] !== k;) y--;
					y !== -1 && (c[y] = c[d - 1]);
				}
				d--, f = h + 1;
			} else {
				let h = r[k];
				d > 0 && f < h && b(f, h - 1), d >= c.length && (c = this._overlaps = $e(c, d + 1)), c[d++] = k, f = h;
			}
		}
		l[o] = m, this._rCount = o, this._region = -1, this._rInter = null;
	}
	_setRegion(e) {
		let t = this._isReverse, r = t ? 0 - this._bandEnd : this._bandStart, n = t ? 0 - this._bandStart : this._bandEnd, i = this._rMinS[e], a = this._rMinE[e], l = t ? 0 - a : i, s = t ? 0 - i : a;
		this._isColumn ? (this.colStart = r, this.colEnd = n, this.rowStart = l, this.rowEnd = s) : (this.rowStart = r, this.rowEnd = n, this.colStart = l, this.colEnd = s);
		let c = this._rInter;
		if (c) {
			let d = c[e];
			d ||= c[e] = this._materialize(e), this.intersection = d;
		} else this.intersection = this._materialize(e);
	}
	nextRegion() {
		if (this._done) return !1;
		let e = this._region + 1;
		for (; !this._hasBand || e >= this._rCount;) {
			if (!this._advanceBand()) return !1;
			e = 0;
		}
		return this._region = e, this._setRegion(e), !0;
	}
	_setCell(e) {
		let t = this._isReverse, r = t ? 0 - this._major : this._major, n = t ? 0 - this._minor : this._minor;
		this._isColumn ? (this.cellCol = r, this.cellRow = n) : (this.cellRow = r, this.cellCol = n), e !== this._region && (this._region = e, this._setRegion(e));
	}
	_enterBandByCell() {
		this._rInter = this._bandEnd > this._bandStart ? Array(this._rCount) : null, this._major = this._bandStart;
	}
	nextCell() {
		if (this._done) return !1;
		let e = this._region;
		if (!this._hasBand || e < 0) {
			if (!this._hasBand) {
				if (!this._advanceBand()) return !1;
				this._enterBandByCell();
			}
			return this._minor = this._rMinS[0], this._setCell(0), !0;
		}
		let t = this._minor + 1;
		if (t <= this._rMinE[e]) return this._minor = t, this._setCell(e), !0;
		if (e++, e >= this._rCount && (e = 0, ++this._major > this._bandEnd)) {
			if (!this._advanceBand()) return !1;
			this._enterBandByCell();
		}
		return this._minor = this._rMinS[e], this._setCell(e), !0;
	}
	seekCell(e, t) {
		if (this._done) return !1;
		let r = this._isReverse, n = this._isColumn ? t : e, i = this._isColumn ? e : t;
		if (r && (n = -n, i = -i), this._hasBand && this._region >= 0 && (n < this._major || n === this._major && i <= this._minor)) return this.nextCell();
		for (;;) {
			if (!this._hasBand || n > this._bandEnd) {
				if (!this._advanceBand()) return !1;
				this._enterBandByCell();
				continue;
			}
			if (n < this._bandStart) return this._major = this._bandStart, this._minor = this._rMinS[0], this._setCell(0), !0;
			this._major = n;
			let a = this._rMinE, l = 0, s = this._rCount;
			for (; l < s;) {
				let c = l + s >>> 1;
				a[c] < i ? l = c + 1 : s = c;
			}
			if (l < this._rCount) {
				let c = this._rMinS[l];
				return this._minor = c > i ? c : i, this._setCell(l), !0;
			}
			if (!(++this._major > this._bandEnd)) return this._minor = this._rMinS[0], this._setCell(0), !0;
			if (!this._advanceBand()) return !1;
			this._enterBandByCell();
		}
	}
}, je = Object.freeze({
	done: !0,
	value: void 0
});
(function(e) {
	class t extends li {
		constructor(...i) {
			super(...i), this._reuseOverlaps = null;
		}
		_materialize(i) {
			let a = this._rOff, l = this._pool, s = this._store.value, c = a[i], d = a[i + 1], m = this._reuseOverlaps;
			m ? m.length = 0 : m = [];
			for (let o = c; o < d; o++) m.push(s[l[o]]);
			return m;
		}
	}
	class r {
		constructor(i, a) {
			if (this._sweep = null, this._isByCell = !1, this._cellComparator = null, this._lastCell = null, this._reuse = null, !i || i.length === 0) return;
			let l, s = !0, c = !1, d = !1;
			if (a && (s = (a.axis ?? ie.Column) !== ie.Row, c = a.reverse ?? !1, d = a.byCell ?? !1, l = a.reuseIterator), this._isByCell = d, l) {
				let y = typeof l == "boolean" ? {
					done: !1,
					value: {
						cell: null,
						range: null,
						overlaps: null
					}
				} : l;
				y.done = !1;
				let w = y.value;
				w ||= y.value = {
					cell: null,
					range: null,
					overlaps: null
				}, w.range || (w.range = {
					colStart: 0,
					rowStart: 0,
					colEnd: 0,
					rowEnd: 0
				}), w.cell = d ? w.cell ?? {
					colIndex: -1,
					rowIndex: -1
				} : null, this._reuse = y;
			}
			let m = i.length, o = {
				count: m,
				rowS: new Int32Array(m),
				rowE: new Int32Array(m),
				colS: new Int32Array(m),
				colE: new Int32Array(m),
				type: new Uint16Array(m),
				value: [],
				keys: ["range"]
			}, f = 2 ** 53 - 1, b = -(2 ** 53 - 1), S = 2 ** 53 - 1, A = -(2 ** 53 - 1);
			for (let y = 0; y < m; y++) {
				let w = i[y];
				o.rowS[y] = w.rowStart, o.rowE[y] = w.rowEnd, o.colS[y] = w.colStart, o.colE[y] = w.colEnd, o.value.push(w), w.rowStart < f && (f = w.rowStart), w.rowEnd > b && (b = w.rowEnd), w.colStart < S && (S = w.colStart), w.colEnd > A && (A = w.colEnd);
			}
			let k = {
				rowStart: f,
				rowEnd: b,
				colStart: S,
				colEnd: A
			}, h = this._sweep = new t(o, k, s, c);
			d ? this._cellComparator = Ar(s ? ie.Column : ie.Row, c) : l && (h._reuseOverlaps = []);
		}
		next(i) {
			let a = this._sweep;
			if (!a) return je;
			let l = this._isByCell, s;
			if (i) {
				if (!l) throw Error("nextCell is only supported when byCell is true");
				let o = this._lastCell;
				if (o && this._cellComparator(o, i) >= 0) throw Error("nextCell must be after the current iteration cell");
				s = a.seekCell(i.rowIndex, i.colIndex);
			} else s = l ? a.nextCell() : a.nextRegion();
			if (!s) return this._sweep = null, je;
			let c = this._reuse;
			if (c) {
				let o = c.value;
				c.done = !1;
				let f = o.range;
				if (f.colStart = a.colStart, f.rowStart = a.rowStart, f.colEnd = a.colEnd, f.rowEnd = a.rowEnd, l) {
					let b = o.cell;
					b.colIndex = a.cellCol, b.rowIndex = a.cellRow;
					let S = this._lastCell;
					S ||= this._lastCell = {
						colIndex: 0,
						rowIndex: 0
					}, S.colIndex = a.cellCol, S.rowIndex = a.cellRow;
				}
				return o.overlaps = a.intersection, c;
			}
			let d = null, m = a.intersection;
			return l && (d = this._lastCell = {
				colIndex: a.cellCol,
				rowIndex: a.cellRow
			}, m = m.slice()), {
				done: !1,
				value: {
					cell: d,
					range: {
						colStart: a.colStart,
						rowStart: a.rowStart,
						colEnd: a.colEnd,
						rowEnd: a.rowEnd
					},
					overlaps: m
				}
			};
		}
		return(i) {
			return je;
		}
		throw(i) {
			return je;
		}
		[Symbol.iterator]() {
			return this;
		}
	}
	e.IteratorInstance = r;
})(oi ||= {});
var si = class {
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
		let n = r?.meta, i = this._overrides;
		if (i) {
			let a = i[e];
			if (a) return void a.bind(i)(t, r);
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
new si();
var rt;
ge({
	EmptyBounds: () => di,
	EmptyRect: () => ui,
	EmptyTopLeft: () => ci
});
var ci = Object.freeze({
	left: 0,
	top: 0
}), ui = Object.freeze({
	left: 0,
	top: 0,
	bottom: 0,
	right: 0
}), di = Object.freeze({
	x: 0,
	y: 0,
	width: 0,
	height: 0
});
ge({
	canUseDOM: () => Fr,
	getDPI: () => pi,
	hasFocus: () => Ur,
	openFileDialog: () => fi,
	scrollIntoContainer: () => mi,
	whenFocus: () => hi
});
var Fr = !(typeof window > "u" || !window.document || !window.document.createElement), fi = (e = "*.*") => new Promise((t, r) => {
	if (!Fr) return void r("Unable to open dialog with no dom.");
	let n = document.createElement("input");
	n.type = "file", n.accept = e;
	let i = null, a = !1;
	globalThis.addEventListener?.("focus", () => {
		setTimeout(() => {
			i || a || (a = !0, t(null));
		}, 1e3);
	}, {
		once: !0,
		passive: !0
	}), n.onchange = () => {
		if (i = n.files?.[0] ?? null, i) {
			if (a) return void console.warn("File open detected after faux cancel.", i);
			t(i);
		}
	}, n.autofocus = !0, n.click();
}), pi = () => {
	let e = 1;
	return typeof window == "object" && (e = window.devicePixelRatio || 1), e;
}, Ur = (e, t = !1) => (document.hasFocus() || t) && (e === document.activeElement || e?.contains(document.activeElement)), mi = (e, t, r = "auto") => {
	if ((() => {
		if (rt === void 0) {
			let c = !1;
			try {
				document.createElement("div").scrollIntoView({ get container() {
					return c = !0, "nearest";
				} });
			} catch {}
			rt = c;
		}
		return rt;
	})()) return void t.scrollIntoView({
		block: "nearest",
		inline: "nearest",
		behavior: r,
		container: "nearest"
	});
	let n = e.getBoundingClientRect(), i = t.getBoundingClientRect(), a = n.top + e.clientTop, l = a + e.clientHeight, s = 0;
	i.top < a ? s = i.top - a : i.bottom > l && (s = Math.min(i.bottom - l, i.top - a)), s !== 0 && e.scrollBy({
		top: s,
		behavior: r
	});
}, hi = async (e, t = !1) => new Promise((r) => {
	Ur(e, t) ? r(!0) : e.addEventListener("focusin", () => {
		r(!0);
	}, { once: !0 }), e.focus();
});
ge({
	cancelTimeout: () => vi,
	debounce: () => wi,
	nextTick: () => bi,
	rafThrottle: () => Si,
	requestTimeout: () => Ei,
	throttle: () => yi
});
var Ue = globalThis.requestAnimationFrame, gi = globalThis.cancelAnimationFrame;
function yi(e, t) {
	let r = null;
	return (...n) => {
		let i = Date.now();
		(!r || i - r >= t) && (r = i, e(...n));
	};
}
function wi(e, t = 300, r = !1) {
	let n, i, a, l = null, s = 0;
	function c() {
		let m = Date.now() - s;
		m < t && m >= 0 ? l = setTimeout(c, t - m) : (l = null, r || (a = e.apply(i, n), i = n = null));
	}
	t ??= 100;
	let d = function() {
		i = globalThis, n = arguments, s = Date.now();
		var m = r && !l;
		return l ||= setTimeout(c, t), m && (a = e.apply(i, n), i = n = null), a;
	};
	return d.clear = function() {
		l &&= (clearTimeout(l), null);
	}, d.flush = function() {
		l &&= (a = e.apply(i, n), i = n = null, clearTimeout(l), null);
	}, d;
}
var Si = (e) => {
	let t, r = !1, n = function() {
		r = !1, e(t);
	};
	return function(i) {
		t = i, t && t.persist && t.persist(), r || (r = !0, Ue(n));
	};
}, bi = (e) => {
	if (typeof Ue == "function") Ue(() => {
		e();
	});
	else {
		let t = globalThis.setImmediate;
		(typeof t == "function" ? t : setTimeout)(() => {
			e();
		});
	}
}, At = typeof performance == "object" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), vi = (e) => {
	gi(e.id);
}, Ei = (e, t) => {
	let r = At(), n = { id: Ue(function i() {
		At() - r >= t ? e.call(null) : n.id = Ue(i);
	}) };
	return n;
};
ge({ MESSAGE_ERROR_INVALID_ARG: () => _i });
var _i = (e) => \`Invalid argument: '\${e}'.\`;
ge({
	APP_MIME_TYPE: () => xi,
	DEFAULT_MIME_TYPE: () => "*/*",
	JSONStableStringify: () => Ri,
	arrayBufferToBase64: () => Pr,
	base64ToArrayBuffer: () => Ii,
	blobToString: () => pt,
	isLittleEndian: () => Ai,
	isNodeBuffer: () => Ti,
	isSharedArrayBufferSupported: () => Ci
});
var xi = "application/octet-stream", Ae = globalThis.Buffer, Ti = (e) => Ae?.isBuffer(e) ?? !1, Ci = typeof SharedArrayBuffer == "function" && (globalThis.crossOriginIsolated === void 0 || globalThis.crossOriginIsolated === !0), Ai = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1, It = globalThis.FileReader, Ii = (e) => {
	let t = typeof globalThis.atob == "function" ? globalThis.atob(e) : Ae.from(e, "base64").toString("binary"), r = t.length, n = new Uint8Array(r);
	for (let i = 0; i < r; i++) n[i] = t.charCodeAt(i);
	return n.buffer;
}, Pr = (e) => {
	let t = new Uint8Array(e), r = t.byteLength, n = "";
	for (let i = 0; i < r; i++) n += String.fromCharCode(t[i]);
	if (typeof globalThis.btoa == "function") return globalThis.btoa(n);
	if (Ae) return Ae.from(n, "binary").toString("base64");
	throw Error("Unsupported environment");
}, pt = (e) => new Promise((t, r) => {
	if (e) if (It) {
		let n = new It();
		n.onload = () => {
			t(n.result);
		}, n.onerror = () => {
			r(n.error);
		}, n.readAsText(e);
	} else if (Ae) {
		let n = (i) => Ae.from(i).toString("utf-8");
		e.arrayBuffer().then((i) => {
			t(n(i));
		}).catch((i) => {
			r(i);
		});
	} else r(/* @__PURE__ */ Error("Unsupported environment"));
	else t("");
});
function Ri(e, t) {
	t ||= {}, typeof t == "function" && (t = { cmp: t });
	let r = typeof t.cycles == "boolean" && t.cycles, n = t.cmp && (i = t.cmp, function(l) {
		return function(s, c) {
			return i({
				key: s,
				value: l[s]
			}, {
				key: c,
				value: l[c]
			});
		};
	});
	var i;
	let a = [];
	return (function l(s) {
		if (s && s.toJSON && typeof s.toJSON == "function" && (s = s.toJSON()), s === void 0) return;
		if (typeof s == "number") return isFinite(s) ? "" + s : "null";
		if (typeof s != "object") return JSON.stringify(s);
		let c;
		if (Array.isArray(s)) {
			c = "[";
			for (let o = 0; o < s.length; o++) o && (c += ","), c += l(s[o]) || "null";
			return c + "]";
		}
		if (s === null) return "null";
		if (a.indexOf(s) !== -1) {
			if (r) return JSON.stringify("__cycle__");
			throw TypeError("Converting circular structure to JSON");
		}
		let d = a.push(s) - 1, m = Object.keys(s).sort(n && n(s));
		c = "";
		for (let o = 0; o < m.length; o++) {
			let f = m[o], b = l(s[f]);
			b && (c && (c += ","), c += JSON.stringify(f) + ":" + b);
		}
		return a.splice(d, 1), "{" + c + "}";
	})(e);
}
var $i;
ge({
	DATA_URL_PNG_PREFIX: () => Br,
	getImageDataUrl: () => Ni,
	getPngStatedSize: () => ki,
	loadImageDetails: () => Li
});
var Br = "data:image/png;base64,", jr = "Unable to resolve image.", Rt = (e) => new Promise(async (t, r) => {
	let n = null;
	try {
		let i = n = new Image();
		i.src = e, i.addEventListener("load", function() {
			t({
				width: i.naturalWidth,
				height: i.naturalHeight
			});
		}, { once: !0 }), i.addEventListener("error", function(a) {
			URL.revokeObjectURL(e);
			let l = a?.error?.message ?? "";
			l &&= \`: \${l}\`, r(\`Invalid Image\${l}\`);
		}, { once: !0 }), await i.decode();
	} catch {
		n?.src && URL.revokeObjectURL(n.src);
	}
	n || r(Error(jr));
}), Ni = (e, t = 1) => new Promise(async (r, n) => {
	let i = null;
	try {
		let a = i = new Image();
		a.src = e, a.addEventListener("load", function() {
			try {
				let l = document.createElement("canvas");
				l.width = a.naturalWidth, l.height = a.naturalHeight;
				let s = l.getContext("2d");
				if (!s) throw Error("Unable to create 2d context");
				s.drawImage(a, 0, 0);
				let c = l.toDataURL("image/png", t);
				r({
					elemImg: a,
					dataUrl: c
				});
			} catch (l) {
				URL.revokeObjectURL(e), n(l);
			}
		}, { once: !0 }), a.addEventListener("error", function() {
			URL.revokeObjectURL(e), n("Invalid Image");
		}, { once: !0 }), await a.decode();
	} catch {
		i?.src && URL.revokeObjectURL(i.src);
	}
	i || n(Error(jr));
}), $t = [2303741511, 218765834], Nt = 96 / .0254, ki = (e) => {
	let t = new DataView(e);
	if (t.byteLength < 24 || t.getUint32(0) !== $t[0] || t.getUint32(4) !== $t[1]) return null;
	let r = 8;
	for (; r + 8 <= t.byteLength;) {
		let n = t.getUint32(r), i = t.getUint32(r + 4);
		if (i === 1229209940) return null;
		if (i === 1883789683) {
			if (n !== 9 || r + 17 > t.byteLength) return null;
			let a = t.getUint32(r + 8), l = t.getUint32(r + 12);
			return t.getUint8(r + 16) === 1 && a && l ? {
				width: Math.max(1, Math.round(t.getUint32(16) * Nt / a)),
				height: Math.max(1, Math.round(t.getUint32(20) * Nt / l))
			} : null;
		}
		r += 12 + n;
	}
	return null;
}, nt = "image/svg+xml", Li = async (e, t = null) => {
	let r = null, n = async () => {
		try {
			let a = t ?? "image/*", l = URL.createObjectURL(new Blob([e], { type: a }));
			r = {
				mimeType: a,
				naturalSize: await Rt(l),
				asUrl: l
			};
		} catch {}
	}, i = async () => {
		try {
			let a = new TextDecoder().decode(e), l = URL.createObjectURL(new Blob([a], { type: nt })), s = await Rt(l);
			r = {
				mimeType: t ?? nt,
				naturalSize: s,
				asUrl: l,
				asSVGText: a
			};
		} catch {}
	};
	if (t === nt ? await i() : t?.startsWith("image/") ? await n() : (await n(), r || await i()), !r) throw Error("Failed to load image");
	return r;
}, kt = /* @__PURE__ */ new Set(), Mi = (e) => {
	kt.has(e) || (kt.add(e), console.warn(\`Unknown property '\${e}' in update; ignoring.\`));
};
(function(e) {
	e.PassThrough = Object.freeze({});
	let t = e.resolveTypedUpdates = (r, n, i, a, l = !1) => {
		if (r === null) return r;
		if (r === void 0) return a;
		let s = r;
		if (n?.shorthand) {
			let o = n?.shorthand(r, i);
			o !== void 0 && (s = o);
		}
		if (s !== null && n?.getSubType) {
			let o = n.getSubType(s, a);
			o && (n = o);
		}
		let c = n?.properties, d = n?.arrayType ?? !1, m = s;
		if (n && n.merge && m && a) m = n.merge(m, a, i);
		else if (!d && c) {
			let o = Object.keys({
				...s,
				...a
			});
			m = null;
			let f = o.length;
			for (let b = 0; b < f; b++) {
				let S = o[b], A, k = s?.[S];
				if (k !== void 0) {
					let h = c[S];
					if (!h) {
						Mi(S);
						continue;
					}
					A = t(k, h, i, a?.[S], l);
				} else A = a?.[S];
				A == null ? l && k === null && (m ??= {}, m[S] = null) : (m ??= {}, m[S] = A);
			}
		}
		return m;
	};
})($i ||= {});
var St = {
	code: "safari",
	message: \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`
}, zr = {
	code: "perms",
	message: \`You do not have permissions to access the clipboard.
All copy and paste operations will be limited to the browser tab.\`
}, Lt = qe() === pe.Safari ? St : zr, Oi = {
	Safari: St,
	Perms: zr,
	PermsWrite: Lt,
	PermsRead: Lt
}, it = async () => new Promise((e) => {
	document.hasFocus() ? e() : globalThis.addEventListener?.("focus", () => {
		e();
	}, { once: !0 }), document.activeElement.focus?.();
}), at = async (e, t, r) => {
	if (qe() === pe.Safari) return await r(Error(St.message));
	try {
		let n = async (l) => {
			try {
				return await l();
			} catch (s) {
				if (s.message?.includes("Document is not focused")) return !1;
				throw s;
			}
		}, i = await globalThis?.navigator?.permissions?.query({
			name: e,
			allowWithoutGesture: !0,
			allowWithoutSanitization: !0
		}), a = !1;
		if (i.state === "prompt" && (a = await n(t)), a || i.state !== "granted" || (a = await t()), !a) return await r(Error(i.state));
	} catch (n) {
		return n.message === "No valid data on clipboard" || n.name === "DataError" ? void 0 : await r(n);
	}
}, Kr = async (e) => {
	if (!e) return null;
	try {
		return await e.read({ unsanitized: [J.Html] });
	} catch {}
	return await e.read();
}, Di = async (e, t) => {
	if (!e) return null;
	let r = await Kr(e), n = !1;
	for (let i = 0; !n && r && i < r.length; i++) if (n = r[i].types.includes(t), n) return await r[i].getType(t);
	return null;
};
if (!globalThis.ClipboardItem) {
	let e = (r, n) => new Blob([n], { type: r });
	class t {
		constructor(n, i) {
			this._items = {}, this._types = Object.keys(n);
			let a = {}, l = Object.keys(n);
			for (let s = 0; s < l.length; s++) {
				let c = l[s], d = n[c];
				a[c] = typeof d == "string" ? e(c, d) : d;
			}
			this._items = a, this._presentationStyle = i?.presentationStyle ?? "unspecified";
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
var Mt, mt = async (e, t = J.Html) => new Promise(async (r, n) => {
	try {
		let i = await Di(e, t);
		if (i) {
			let a = new FileReader();
			a.onload = () => {
				r(a.result);
			}, a.onerror = () => {
				r("");
			}, a.readAsText(i);
		} else r("");
	} catch (i) {
		n(i);
	}
}), Ot = async (e, t = J.Html) => {
	let r = await mt(e, t);
	if (!r) return null;
	let n = null;
	try {
		n = new DOMParser().parseFromString(r, J.Html);
	} catch {
		console.warn("Can't parse html from clipboard.");
	}
	return n;
}, Fi = async (e) => {
	e && await e.writeText("");
}, Pe = "clipboard-uuid", Me = "web text/uuid", Dt = (e) => \`<div style="display:none" \${Pe}="\${e}"/>\`, Ft = { type: J.Plain }, Ut = { type: J.Html }, Pt = { type: Me }, Ui = (e, t) => {
	let r = null;
	try {
		let n = new DOMParser().parseFromString(t, J.Html);
		n.body.firstElementChild?.setAttribute(Pe, e), r = n.getElementsByTagName("body")[0].innerHTML;
	} catch (n) {
		console.warn("Can't embed uuid.", n);
	}
	return r;
}, Bt = (e, t) => {
	if (!t || !e) return !1;
	try {
		let r = t.querySelectorAll(\`[\${Pe}="\${e}"]\`);
		if (r && r.length === 1) return !0;
		if (t.querySelector("parsererror")) throw Error("We are unable to parse node");
		return !1;
	} catch {
		return !1;
	}
}, jt = class {
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
		this._nativeClipboard && this._state && !this._disableCheckOnFocus && await at("clipboard-read", async () => {
			await it();
			let e = await mt(this._nativeClipboard, Me);
			if (!this._state || e && e === this._state.uuid) return !0;
			let t = await Ot(this._nativeClipboard, J.Html);
			return !this._state || (Bt(this._state.uuid, t) || this.clear(), !0);
		}, async (e) => {
			e?.message === "denied" || e.message?.includes("Document is not focused") || qe() === pe.Safari || console.warn("Unable to detect clipboard changes: ", e);
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
		return await at("clipboard-read", async () => {
			if (await it(), this._state?.uuid) {
				let t = await mt(this._nativeClipboard, Me);
				if (t && t === e._state?.uuid) return !0;
				let r = await Ot(this._nativeClipboard, J.Html);
				if (Bt(e._state?.uuid, r)) return !0;
			}
			return e._state = {
				items: await Kr(this._nativeClipboard),
				uuid: null,
				ref: null
			}, this.dispatchEvent(new Event("clipboardread")), !0;
		}, async (t) => {
			this.dispatchEvent(new Event("clipboarderrorread"));
		}), this._state?.items ?? [];
	}
	async write(e) {
		return this._write({
			uuid: He(),
			items: e,
			ref: null
		});
	}
	async _write(e) {
		if (!this._nativeClipboard) return this._state = e, this.dispatchEvent(new Event("clipboardwrite")), void this.dispatchEvent(new Event("clipboardchange"));
		let t = this, r = [], n = e.uuid, i = e.items ?? [], a = () => {
			t._state = {
				uuid: n,
				ref: e.ref,
				items: r
			}, t.dispatchEvent(new Event("clipboardwrite")), t.dispatchEvent(new Event("clipboardchange"));
		};
		await at("clipboard-write", async () => {
			await it(), n && i.length === 0 && (i.push(new ClipboardItem({ [Me]: new Blob([n], Pt) })), i.push(new ClipboardItem({ [J.Html]: new Blob([Dt(n)], Ut) })));
			for (let l = 0; l < Math.min(1, i.length); l++) {
				let s = i[l], c = s.types.indexOf(J.Html), d = null;
				if (c !== -1 && (d = await pt(await s.getType(J.Html)), d &&= Ui(n, d)), !d && s.types.includes(J.Plain)) {
					let S = await s.getType(J.Plain);
					if (S) {
						let A = null;
						typeof S == "string" ? (console.warn("text as string", S), A = S) : A = await pt(S), A && (d = \`<div \${Pe}="\${n}">\${A}</div>\`);
					}
				}
				if (!d && s.types.includes(J.Png)) {
					let S = Pr(await (await s.getType(J.Png)).arrayBuffer());
					d = \`<div \${Pe}="\${n}"><img src="\${Br + S}"/></div>\`;
				}
				!d && n && (d = Dt(n));
				let m = new Blob([d ?? ""], Ut), o = {}, f = s.types, b = f.length;
				for (let S = 0; S < b; S++) {
					let A = f[S];
					o[A] = S === c ? m : s.getType(A);
				}
				d && c === -1 && (o[J.Html] = m), n && (o[Me] = new Blob([n], Pt)), r.push(new ClipboardItem(o));
			}
			try {
				r && r.length !== 0 ? await this._nativeClipboard.write(r) : await Fi(this._nativeClipboard);
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
			let i = await e.toText?.() ?? null;
			i && (r[J.Plain] = new Blob([i ?? ""], Ft));
		} catch (i) {
			t = i;
		}
		try {
			let i = await e.toHtml?.() ?? null;
			i && (r[J.Html] = new Blob([i], { type: J.Html }));
		} catch (i) {
			t = i, console.warn("export to html", i);
		}
		try {
			let i = await e.toImage?.() ?? null;
			i && (r[J.Png] = i);
		} catch (i) {
			t = i, console.warn("export to png", i);
		}
		let n = this._write({
			uuid: He(),
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
			let r = await this.read(), n = null, i = r ? r.length : 0;
			for (let l = 0; !n && l < i; l++) {
				let s = r[l];
				s.types.includes(J.Plain) && (n = await s.getType(J.Plain));
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
		let t = [new ClipboardItem({ [J.Plain]: new Blob([e], Ft) })];
		return this._write({
			uuid: He(),
			items: t,
			ref: null
		});
	}
	addEventListener(e, t, r = {}) {
		let n = r?.capture ? this._listenersCapture : this._listeners, i = n.get(e);
		i || (i = /* @__PURE__ */ new Map(), n.set(e, i)), t && i.set(t, typeof r == "boolean" ? {} : r);
	}
	dispatchEvent(e) {
		if (!e) return !1;
		let t = (r) => {
			let n = r.get(e.type);
			n && n.forEach((i, a) => {
				try {
					typeof a == "function" ? a(e) : a.handleEvent && a.handleEvent(e), i.once && n.delete(a);
				} catch (l) {
					console.warn(l);
				}
			});
		};
		return t(this._listenersCapture), t(this._listeners), !0;
	}
	removeEventListener(e, t, r) {
		let n = r?.capture ? this._listenersCapture : this._listeners, i = n.get(e);
		i && t && (i.delete(t), i.size === 0 && n.delete(e));
	}
	close() {
		this._onFocus && globalThis.removeEventListener?.("focus", this._onFocus), this._onBlur && globalThis.removeEventListener?.("blur", this._onBlur);
	}
};
(Mt = jt ||= {}).ErrorMessages = Oi, Mt.Global = new jt();
Object.freeze({});
new TextDecoder();
const E = Object.freeze({
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
var Xi;
(function(e) {
	e.MAX_TEXT_LENGTH = 32767;
	let t = e.MAX_SIGNIFICANT_DIGITS = 15;
	e.truncateNumberText = function(n) {
		let i = n.length;
		if (i <= t) return n;
		let a = 0, l = null;
		for (let s = 0; s < i; s++) {
			let c = n.charCodeAt(s);
			if (c >= 48 && c <= 57) {
				if (a === 0 && c === 48) continue;
				a++, a > t && ((l ??= n.split(""))[s] = "0");
			} else if ((c === 69 || c === 101) && a > 0) break;
		}
		return l === null ? n : l.join("");
	};
	let r = e.MIN_NUMBER = 22250738585072014e-324;
	e.flushSubnormal = function(n) {
		return n > -r && n < r ? 0 : n;
	}, e.isNumberTextInRange = function(n, i = ".") {
		let a = n.length;
		if (a < 309 && n.indexOf("E") < 0 && n.indexOf("e") < 0) return !0;
		let l = i.charCodeAt(0), s = !1, c = !1, d = !1, m = 0, o = 0, f = 0, b = 0;
		for (; b < a; b++) {
			let k = n.charCodeAt(b);
			if (k >= 48 && k <= 57) s = !0, c ? (f++, d || (k === 48 ? o++ : d = !0)) : (d || k !== 48) && (d = !0, m++);
			else if (k === l) c = !0;
			else if ((k === 69 || k === 101) && s) break;
		}
		let S = 0;
		if (b < a) {
			let k = b + 1, h = !1, y = n.charCodeAt(k);
			y === 45 ? (h = !0, k++) : y === 43 && k++;
			let w = 0;
			for (; k < a; k++) {
				let D = n.charCodeAt(k);
				if (D < 48 || D > 57) break;
				S = 10 * S + (D - 48), w++;
			}
			if (w === 0) return !0;
			h && (S = -S);
		}
		if (d) {
			let k = (m > 0 ? m - 1 : -(o + 1)) + S;
			return k >= -309 && k <= 307;
		}
		let A = S - f;
		return A >= -308 && A <= 308;
	};
})(Xi ||= {});
var Xt, ot, Hi, T, me = {
	Number: "number",
	String: "string",
	Boolean: "boolean",
	Error: "error",
	RichData: "richData",
	Null: "null"
}, Ht = {
	...me,
	Date: "date"
}, Wt = {
	...me,
	Reference: "reference",
	Array: "array",
	Lambda: "lambda",
	Omitted: "omitted"
};
(ot = Xt ||= {}).Axis = {
	Column: "column",
	Row: "row"
}, ot.AxisSelection = {
	...Xt.Axis,
	Both: "both"
}, ot.Direction = {
	Up: "up",
	Down: "down",
	Left: "left",
	Right: "right"
}, (Hi ||= {}).Aggregate = {
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
		constructor(R, F, de, we) {
			super(de, we), this._label = F, this._code = R, this.details = we;
		}
		static {
			this.code = T.Code.Unknown;
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
		equals(R) {
			return !!R && (this._code === R._code || this._code === R.code);
		}
		get [Symbol.toStringTag]() {
			return "[FormulaError]";
		}
		toString() {
			return this._label;
		}
	}
	e.Known = n;
	class i extends n {
		constructor(R, F) {
			super(t.Parse, r.Parse, R, F);
		}
		static {
			this.code = T.Code.Parse;
		}
		getDetails() {
			let R = this.details;
			return {
				line: R?.line ?? 1,
				column: R?.column ?? 1,
				offset: R?.offset ?? 0,
				length: R?.length ?? 0
			};
		}
	}
	e.Parse = i;
	class a extends n {
		constructor(R, F) {
			super(t.Null, r.Null, R, F);
		}
		static {
			this.code = T.Code.Null;
		}
	}
	e.Null = a;
	class l extends n {
		constructor(R, F) {
			super(t.Div0, r.Div0, R, F);
		}
		static {
			this.code = T.Code.Div0;
		}
	}
	e.Div0 = l;
	class s extends n {
		constructor(R, F) {
			super(t.Value, r.Value, R, F);
		}
		static {
			this.code = T.Code.Value;
		}
	}
	e.Value = s;
	class c extends n {
		constructor(R, F) {
			super(t.Ref, r.Ref, R, F);
		}
		static {
			this.code = T.Code.Ref;
		}
	}
	e.Ref = c;
	class d extends n {
		constructor(R, F) {
			super(t.Name, r.Name, R, F);
		}
		static {
			this.code = T.Code.Name;
		}
	}
	e.Name = d;
	class m extends n {
		constructor(R, F) {
			super(t.Num, r.Num, R, F);
		}
		static {
			this.code = T.Code.Num;
		}
	}
	e.Num = m;
	class o extends n {
		constructor(R, F) {
			super(t.NA, r.NA, R, F);
		}
		static {
			this.code = T.Code.NA;
		}
	}
	e.NA = o;
	class f extends n {
		constructor(R, F) {
			super(t.GettingData, r.GettingData, R, F);
		}
		static {
			this.code = T.Code.GettingData;
		}
	}
	e.GettingData = f;
	class b extends n {
		constructor(R, F) {
			super(t.Spill, r.Spill, R, F);
		}
		static {
			this.code = T.Code.Spill;
		}
	}
	e.Spill = b;
	class S extends n {
		constructor(R, F) {
			super(t.Connect, r.Connect, R, F);
		}
		static {
			this.code = T.Code.Connect;
		}
	}
	e.Connect = S;
	class A extends n {
		constructor(R, F) {
			super(t.Blocked, r.Blocked, R, F);
		}
		static {
			this.code = T.Code.Blocked;
		}
	}
	e.Blocked = A;
	class k extends n {
		constructor(R, F) {
			super(t.Unknown, r.Unknown, R, F);
		}
		static {
			this.code = T.Code.Unknown;
		}
	}
	e.Unknown = k;
	class h extends n {
		constructor(R, F) {
			super(t.Field, r.Field, R, F);
		}
		static {
			this.code = T.Code.Field;
		}
	}
	e.Field = h;
	class y extends n {
		constructor(R, F) {
			super(t.Calc, r.Calc, R, F);
		}
		static {
			this.code = T.Code.Calc;
		}
	}
	e.Calc = y;
	class w extends n {
		constructor(R, F) {
			super(t.Busy, r.Busy, R, F);
		}
		static {
			this.code = T.Code.Busy;
		}
	}
	e.Busy = w;
	class D extends n {
		constructor(R, F) {
			super(t.Python, r.Python, R, F);
		}
		static {
			this.code = T.Code.Python;
		}
	}
	e.Python = D;
	class K extends n {
		constructor(R, F) {
			super(t.Timeout, r.Timeout, R, F);
		}
		static {
			this.code = T.Code.Timeout;
		}
	}
	e.Timeout = K;
})(T ||= {});
var ee = {};
ee[T.Code.Parse] = T.Parse, ee[T.Code.Null] = T.Null, ee[T.Code.Div0] = T.Div0, ee[T.Code.Value] = T.Value, ee[T.Code.Ref] = T.Ref, ee[T.Code.Name] = T.Name, ee[T.Code.Num] = T.Num, ee[T.Code.NA] = T.NA, ee[T.Code.GettingData] = T.GettingData, ee[T.Code.Spill] = T.Spill, ee[T.Code.Connect] = T.Connect, ee[T.Code.Blocked] = T.Blocked, ee[T.Code.Unknown] = T.Unknown, ee[T.Code.Field] = T.Field, ee[T.Code.Calc] = T.Calc, ee[T.Code.Busy] = T.Busy, ee[T.Code.Python] = T.Python, ee[T.Code.Timeout] = T.Timeout;
var Xr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), Jt = Object.keys(ee);
for (let e = 0; e < Jt.length; e++) {
	let t = ee[Jt[e]], r = new t();
	Wr.set(r.getLabel(), t), Jr.set(r.getCode(), t), Xr.set(r.getLabel(), r), Hr.set(r.getCode(), r);
}
(function(e) {
	let t = e.getBuiltInByCode = (r) => Hr.get(r);
	e.BuiltIn = {
		Parse: t(T.Code.Parse),
		Null: t(T.Code.Null),
		Div0: t(T.Code.Div0),
		Value: t(T.Code.Value),
		Ref: t(T.Code.Ref),
		Name: t(T.Code.Name),
		Num: t(T.Code.Num),
		NA: t(T.Code.NA),
		GettingData: t(T.Code.GettingData),
		Spill: t(T.Code.Spill),
		Connect: t(T.Code.Connect),
		Blocked: t(T.Code.Blocked),
		Unknown: t(T.Code.Unknown),
		Field: t(T.Code.Field),
		Calc: t(T.Code.Calc),
		Busy: t(T.Code.Busy),
		Python: t(T.Code.Python),
		Timeout: t(T.Code.Timeout)
	}, e.newTypedError = (r, n, i) => {
		let a;
		return a = typeof r == "string" ? Wr.get(r) : Jr.get(r), a ||= T.Unknown, new a(n, i);
	}, e.getBuiltInByLabel = (r) => Xr.get(r), e.isError = function(r, n) {
		return !!r && r.isFormulaError === !0 && (n === void 0 || r.getCode() === n);
	};
})(T ||= {});
var Wi = class {
	createRange(e, t, r) {
		throw le("createRange");
	}
	flattenAreas(e) {
		throw le("flattenAreas");
	}
	getReference(e, t) {
		throw le("getReference");
	}
	getResizedReference(e, t, r) {
		throw le("getResizedReference");
	}
	getNumberFormat(e, t) {
		throw le("getNumberFormat");
	}
	fromSerialDate(e, t) {
		throw le("fromSerialDate");
	}
	toSerialDate(e, t) {
		throw le("toSerialDate");
	}
	getDateParts(e, t) {
		throw le("getDateParts");
	}
	getSerialDate(e, t, r, n, i, a, l) {
		throw le("getSerialDate");
	}
	getNow() {
		throw le("getNow");
	}
	getRandom() {
		return Math.random();
	}
	getValueAt(e, t, r, n) {
		return null;
	}
	getEntireCoords() {
		return qr;
	}
	isValidDate(e, t) {
		return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]" ? !isNaN(e.getTime()) : !t && typeof e == "number" && !(e < 0 || e > qi);
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
	defer(e, t) {}
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
		throw le("getAddress");
	}
	parseAsSerialDate(e, t) {
		throw le("parseAsSerialDate");
	}
	parseAsDate(e, t) {
		throw le("parseAsDate");
	}
	parseAsNumber(e, t) {
		throw le("parseAsNumber");
	}
	createCriteria(e, t) {
		throw le("createCriteria");
	}
	createGrouping(e, t) {
		throw le("createGrouping");
	}
	parseAsLiteral(e) {
		let t = e.toUpperCase();
		return t === "TRUE" || t !== "FALSE" && T.getBuiltInByLabel(t);
	}
	toText(e) {
		return typeof e == "string" ? e : e == null ? "" : typeof e == "boolean" ? e ? "TRUE" : "FALSE" : e?.isFormulaError ? e.getLabel() : String(e);
	}
	compare(e, t, r) {
		if (e === t) return 0;
		let n = Yt(e), i = Yt(t);
		return n === i ? e < t ? -1 : +(e > t) : n < i ? -1 : 1;
	}
	getRuntime() {
		return Yi;
	}
	getArgs() {
		throw new Je(Yr);
	}
	createRichData(e, t) {
		throw new Je(Ji);
	}
}, Yt = (e) => {
	if (e == null) return 0;
	switch (typeof e) {
		case "number": return 1;
		case "string": return 2;
		case "boolean": return 3;
		default: return 4;
	}
}, le = (e) => new Je(\`FormulaContext.\${e}() is only valid while a function body is running. A deferred executor reads its workbook through ctx.getFormulaContext().\`), Yr = "FormulaContext.getArgs() is only valid while a function body is running", Ji = "FormulaContext.createRichData() needs a workbook being calculated", Je = class extends Error {
	constructor(e = "Not implemented in StubbedFormulaContext") {
		super(e), this.name = "NotImplementedError";
	}
}, qr = Object.freeze({
	colStart: 0,
	rowStart: 0,
	colEnd: 2 ** 14 - 1,
	rowEnd: 2 ** 20 - 1
}), Yi = {
	isDate1904: () => !1,
	getLocale: () => qt.tag,
	getLocaleProfile: () => qt,
	isR1C1: () => !1,
	getNow: () => 0,
	getRandom: () => Math.random(),
	getLocation: () => "unknown",
	getVersion: () => "1.0.0",
	getOS: () => "unknown",
	getUser: () => "unidentified",
	getDescription: () => "Stubbed Formula Context"
}, qi = 2958465, ke = new Wi(), Zi = class {
	constructor() {
		this._scope = ke, this._argsFn = null;
	}
	_setScope(e) {
		this._scope = e ?? ke;
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
		return this._getScope().getEntireCoords() ?? qr;
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
	createGrouping(e, t) {
		return this._getScope().createGrouping(e, t);
	}
	parseAsLiteral(e) {
		let t = this._getScope();
		return t.parseAsLiteral ? t.parseAsLiteral(e) : ke.parseAsLiteral(e);
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
	getSerialDate(e, t, r, n = 0, i = 0, a = 0, l = 0) {
		return this._getScope().getSerialDate(e, t, r, n, i, a, l);
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
			let n = e[r], { rows: i, columns: a } = n.getShape();
			for (let l = 0; l < i; l++) for (let s = 0; s < a; s++) t.push(n.getValueAt(l, s));
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
	defer(e, t) {
		return this._getScope().defer?.(e, t);
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
		return this._getScope().compare?.(e, t, r) ?? ke.compare(e, t, r);
	}
	getRuntime() {
		return this._getScope().getRuntime();
	}
	createRichData(e, t) {
		let r = this._getScope();
		return r.createRichData ? r.createRichData(e, t) : ke.createRichData(e, t);
	}
	getArgs() {
		let e = this._argsFn, t = e ? e() : null;
		if (!t) throw new Je(Yr);
		return t;
	}
	get [Symbol.toStringTag]() {
		return "[FormulaContext]";
	}
	toString() {
		return this._getScope()?.toString?.() ?? "{STUB SCOPE}";
	}
}, qt = Object.freeze({
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
new Zi();
const Qi = [
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
], ea = (() => {
	const e = /* @__PURE__ */ new Map();
	for (const t of Qi) if (e.set(t.name, t), t.aliases) for (const r of t.aliases) e.set(r, t);
	return e;
})();
function ta(e) {
	if (!e) return;
	const t = (e.startsWith("@") ? e.slice(1) : e).toLowerCase();
	return ea.get(t);
}
function ra(e) {
	return ta(e)?.standalone === !0;
}
const ht = /* @__PURE__ */ new Map([["IReferenceRange", "p"], ["IRange", "r"]]), lt = new Set(Object.values(Wt).filter((e) => e !== Wt.Omitted)), bt = /* @__PURE__ */ new Map([
	["IWorkbook", "workbook"],
	["IWorksheet", "sheet"],
	["ICellRanges", "ranges"],
	["ICellRange", "range"]
]), na = Array.from(bt.keys()), vt = (e, t) => {
	Array.from(t.keys()).forEach((r) => {
		const n = t.get(r);
		t.set(\`\${e}.\${r}\`, n);
	});
}, ia = /* @__PURE__ */ new Map([
	["Scalar", "*"],
	["Lambda", "l"],
	["FormulaError.Known", me.Error],
	["Date", Ht.Date],
	["IRichData", Ht.RichData]
]), Zr = /* @__PURE__ */ new Map([["Repeating", "repeating"]]), aa = /* @__PURE__ */ new Set(["Flatten", "SheetXL.Flatten"]), Qr = /* @__PURE__ */ new Set(["AcceptError"]), en = /* @__PURE__ */ new Set(["Omittable"]), tn = /* @__PURE__ */ new Set(["NoLift"]), rn = /* @__PURE__ */ new Set(["NoFilter"]), nn = /* @__PURE__ */ new Set(["Lazy"]), gt = /* @__PURE__ */ new Set(["ReportType"]), Zt = 255, oa = /^[a-zA-Z_-￿][a-zA-Z0-9_.-￿]*$/, la = /^([a-z]{1,3})([0-9]+)$/i, sa = /^r[0-9]*c[0-9]*$/i, ca = (e) => {
	if (sa.test(e)) return !0;
	const t = la.exec(e);
	if (!t) return !1;
	let r = 0;
	for (const i of t[1].toUpperCase()) r = r * 26 + (i.charCodeAt(0) - 64);
	const n = Number(t[2]);
	return r <= 16384 && n >= 1 && n <= 1048576;
}, se = "SheetXL", _e = (e) => {
	const t = e.typeName.getText();
	return t.startsWith(\`\${se}.\`) ? t.slice(8) : t;
};
vt(se, ht);
vt(se, bt);
vt(se, Zr);
Qr.add(se + ".AcceptError");
en.add(\`\${se}.Omittable\`);
tn.add(\`\${se}.NoLift\`);
rn.add(\`\${se}.NoFilter\`);
nn.add(\`\${se}.Lazy\`);
gt.add(\`\${se}.ReportType\`);
const ua = /* @__PURE__ */ new Map([["Volatile", () => ({ volatile: !0 })], [\`\${se}.Volatile\`, () => ({ volatile: !0 })]]), Qt = "__scriptContext__", er = "script", da = /* @__PURE__ */ new Set([
	"IScript.ScriptContext",
	\`\${se}.IScript.ScriptContext\`,
	"ScriptContext"
]), tr = (e, t) => {
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
}, Le = (e) => {
	if (!e || e.length === 0) return "";
	let t = "";
	for (let r = 0; r < e.length; r++) {
		const n = e[r], i = n.kind;
		if (i !== "link") {
			if (i === "linkName") {
				const a = e[r + 1];
				if (a?.kind === "linkText" && a.text.trim()) continue;
				t += n.text;
				continue;
			}
			if (i === "linkText") {
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
function fa(e, t, r, n) {
	const i = n?.builtInNames?.length ? new Set(n.builtInNames.map((u) => u.toUpperCase())) : null, a = [], l = /* @__PURE__ */ new Map(), s = [];
	let c = null;
	const d = (u) => {
		if (!u || typeof u.getStart != "function") return {
			start: 0,
			length: 0
		};
		try {
			return {
				start: u.getStart(),
				length: u.getWidth()
			};
		} catch {
			return {
				start: 0,
				length: 0
			};
		}
	}, m = (u, p, v, _) => {
		const { start: C, length: M } = d(u);
		s.push({
			start: C,
			length: M,
			severity: v,
			code: p,
			message: _
		});
	}, o = (u, p, v) => {
		m(u, p, "error", v);
	}, f = (u) => u?.parent?.name?.escapedText;
	let b = null;
	const S = (u, p, v, _, C = !1, M = !1, z = !1) => {
		const U = { count: 0 }, $ = te(u, p, v, _, U, C, M, z);
		U.count >= 2 && (p.range || (p.range = "m", U.count -= 2), !_ && U.count >= 1 && (U.count -= 1, U.count > 0 && o(u, E.ArrayDepth, \`Arrays of more than 2 dimensions are not supported: '\${f(u)}'.\`))), U.count > 0 && (p.arrayDepth = U.count);
		const B = p.enum;
		return B && (U.count > (z ? 1 : 0) || p.range) && !K.has(p) && (p.valueOrRange || (o(u, E.EnumPosition, \`A list cannot hold the enum '\${B.id}': '\${p.name ?? f(u)}'. Its members reach the body as they are, so nothing checks them against the enum. Take one value per argument ('...x: \${B.id}[]'), or type the list by its scalar ('\${B.type}').\`), delete p.enum)), $;
	}, A = (u, p, v, _, C) => {
		if (p !== "Lambda" && p !== \`\${se}.Lambda\`) return !1;
		const M = u.typeArguments;
		let z = "*";
		if (M && M.length === 2) if (C && M[0].kind === e.SyntaxKind.TupleType && (v.lambdaArity = M[0].elements.length), M[1].kind === e.SyntaxKind.AnyKeyword) z = "raw";
		else {
			const U = {};
			te(M[1], U, _, !1, { count: 0 }), z = U.scalar ?? "*";
		}
		else if (M && M.length === 1 && M[0].kind !== e.SyntaxKind.TupleType && M[0].kind !== e.SyntaxKind.ArrayType) if (C && (v.lambdaArity = 2), M[0].kind === e.SyntaxKind.AnyKeyword) z = "raw";
		else {
			const U = {};
			te(M[0], U, _, !1, { count: 0 }), z = U.scalar ?? "*";
		}
		return v.lambda = z, !0;
	}, k = (u, p, v, _) => {
		if (!_) {
			o(u, E.FunctionReturn, \`Function type is not a valid return type: '\${f(u)}'. Declare a 'Lambda' return instead.\`);
			return;
		}
		const C = u.type, M = {};
		let z = "*";
		C && (C.kind === e.SyntaxKind.AnyKeyword ? z = "raw" : (te(C, M, v, !1, { count: 0 }), z = M.scalar ?? "*"));
		const U = u.parameters;
		U && !U.some(($) => $.dotDotDotToken) && (p.lambdaArity = U.length), p.lambda = z;
	}, h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new WeakSet(), L = (u) => u !== void 0 && u.getSourceFile() === t, R = (u, p = !1) => {
		return u.getJsDocTags(r).find((_) => _.name === "name")?.text?.map((_) => _.text).join("").trim() || (p ? lr.camelToPrettyCase(u.name) : u.name);
	}, F = (u) => {
		const p = u.getJsDocTags(r).find((v) => v.name === "deprecated");
		if (p) return p.text?.map((v) => v.text).join("").trim() || !0;
	}, de = (u, p) => {
		const v = e.isTypeReferenceNode(u) ? u.typeName : void 0, _ = v ? r.getSymbolAtLocation(v) : void 0, C = _?.declarations?.length ? _ : void 0;
		if (v) {
			if (C && C.flags & e.SymbolFlags.Alias) {
				o(u, E.EnumNotLocal, \`'\${v.getText()}' is imported, so its declaration cannot be read: '\${p}'. An enum must be declared in the module that uses it.\`);
				return;
			}
			if (!C || !(C.flags & e.SymbolFlags.Type)) {
				const x = v.getText();
				if (!(C ? (C.flags & e.SymbolFlags.Variable) !== 0 : t.statements.some((I) => e.isVariableStatement(I) && I.declarationList.declarations.some((V) => e.isIdentifier(V.name) && V.name.text === x)))) return null;
				o(u, E.EnumMissingAlias, \`'\${x}' is a value, not a type: '\${p}'. Pair the object with a same-name type — 'type \${x} = typeof \${x}[keyof typeof \${x}];' — or declare it as 'enum \${x} { … }'.\`);
				return;
			}
			const g = h.get(C);
			if (g !== void 0) return g;
			if (D.has(C)) return;
		}
		const M = [];
		let z = !1;
		if (C && C.flags & e.SymbolFlags.Enum) {
			if (!C.declarations?.some(L)) {
				o(u, E.EnumNotLocal, \`'\${C.name}' is not declared in this module: '\${p}'. An enum must be declared in the module that uses it.\`);
				return;
			}
			z = !0;
			let g = !1;
			if (C.exports?.forEach((x) => {
				const I = x.valueDeclaration;
				if (!I || !e.isEnumMember(I)) return;
				const V = r.getConstantValue(I);
				if (V === void 0) {
					o(I, E.EnumMemberNotConstant, \`'\${C.name}.\${x.name}' is not a constant number or string. A formula passes the VALUE, so every member needs one that can be read at compile time.\`), g = !0;
					return;
				}
				M.push([
					R(x, !0),
					V,
					I,
					Le(x.getDocumentationComment(r)),
					F(x)
				]);
			}), g) {
				D.add(C);
				return;
			}
		} else {
			const g = r.getTypeFromTypeNode(u), x = e.TypeFlags.Null | e.TypeFlags.Undefined | e.TypeFlags.Void, I = (g.isUnion() ? g.types : [g]).filter((P) => !(P.flags & x)), V = [];
			for (const P of I) {
				if (!(P.flags & (e.TypeFlags.NumberLiteral | e.TypeFlags.StringLiteral))) return C && h.set(C, null), null;
				V.push(P.value);
			}
			if (V.length === 0) return null;
			const re = C?.declarations?.find((P) => e.isTypeAliasDeclaration(P)), Y = e.isUnionTypeNode(u) ? u : re?.type;
			if (Y && e.isUnionTypeNode(Y)) {
				const P = Y.types.map((N) => {
					const ne = r.getTypeFromTypeNode(N);
					return ne.isLiteral() ? ne.value : void 0;
				}), O = (N) => {
					const ne = P.indexOf(N);
					return ne < 0 ? P.length : ne;
				};
				V.sort((N, ne) => O(N) - O(ne));
			}
			const Q = C && C.flags & e.SymbolFlags.Variable ? C.valueDeclaration : void 0, he = new Set(V);
			if (C && Q && L(Q)) for (const P of r.getTypeOfSymbolAtLocation(C, Q).getProperties()) {
				const O = P.valueDeclaration, N = r.getTypeOfSymbolAtLocation(P, O ?? Q);
				if (!(N.flags & (e.TypeFlags.NumberLiteral | e.TypeFlags.StringLiteral))) continue;
				const ne = N.value;
				V.includes(ne) && (z = !0, he.delete(ne), M.push([
					R(P, !0),
					ne,
					O,
					Le(P.getDocumentationComment(r)),
					F(P)
				]));
			}
			for (const P of V) he.has(P) && M.push([
				String(P),
				P,
				void 0,
				null
			]);
		}
		if (M.length === 0) return null;
		const U = typeof M[0][1] == "number";
		if (M.some(([, g]) => typeof g == "number" !== U)) {
			o(u, E.EnumMixed, \`'\${C?.name ?? u.getText()}' mixes number and string members: '\${p}'. A parameter has one type, so an enum is all numbers or all strings.\`);
			return;
		}
		const $ = C ? R(C) : M.map(([, g]) => String(g)).join("|"), B = C ? void 0 : y.get($);
		if (B) return B;
		if (z) {
			const g = /* @__PURE__ */ new Map();
			for (const [x, I, V, re] of M) {
				const Y = V?.name?.getText() ?? x, Q = g.get(I);
				Q !== void 0 ? m(V ?? u, E.EnumDuplicateValue, "warning", \`'\${$}.\${Y}' has the same value as '\${$}.\${Q}' (\${JSON.stringify(I)}). A formula passes the value, so the two cannot be told apart.\`) : g.set(I, Y), re === "" && m(V ?? u, E.EnumMemberUndocumented, "warning", \`'\${$}.\${Y}' is missing a description. Add a doc comment above the member — it is what the argument dropdown shows.\`);
			}
		}
		const X = {
			id: $,
			type: U ? me.Number : me.String,
			members: M.map(([g, x, , , I]) => I ? [
				g,
				x,
				I
			] : [g, x])
		};
		C ? h.set(C, X) : y.set($, X);
		const G = C ? Le(C.getDocumentationComment(r)) : "", j = {};
		for (const [g, , , x] of M) x && (j[g] = { description: x });
		if (G || Object.keys(j).length > 0) {
			const g = {};
			G && (g.summary = G), Object.keys(j).length > 0 && (g.members = j), w.set(X, g);
		}
		return X;
	}, we = (u, p, v, _) => {
		const C = (U, $, B) => {
			const X = { name: U };
			return S($, X, v, !0), B && (X.optional = !0), _ && !X.acceptError && (X.acceptError = !0), X;
		};
		if (u.kind !== e.SyntaxKind.TupleType) return [C(p, u, !1)];
		const M = u.elements;
		if (M.length < 2) return o(u, E.RepeatingSlots, \`'\${p}': a repeating group of period \${M.length} must be spelled 'Repeating<T>' without the tuple.\`), null;
		const z = [];
		for (let U = 0; U < M.length; U++) {
			const $ = M[U];
			if ($.kind !== e.SyntaxKind.NamedTupleMember) return o($, E.RepeatingSlots, \`'\${p}': every slot of a repeating group must be labelled, e.g. 'Repeating<[criteriaRange: IRange, criteria: Scalar]>'.\`), null;
			const B = !!$.questionToken;
			if (B && U !== M.length - 1) return o($, E.RepeatingOptional, \`'\${p}': only the LAST slot of a repeating group may be optional (slot '\${$.name?.getText?.()}' is not).\`), null;
			z.push(C($.name?.getText?.() ?? \`\${U}\`, $.type, B));
		}
		return z;
	}, te = (u, p, v, _, C, M = !1, z = !1, U = !1) => {
		if (!u) {
			o(u, E.MissingType, \`Type is not defined for '\${p?.name ?? "return"}'.\`);
			return;
		}
		if (u.kind === e.SyntaxKind.ParenthesizedType) return te(u.type, p, v, _, C, M, z, U);
		if (u.kind === e.SyntaxKind.UnionType) {
			const $ = (G) => G.kind === e.SyntaxKind.UndefinedKeyword || G.kind === e.SyntaxKind.VoidKeyword || G.kind === e.SyntaxKind.NullKeyword || G.kind === e.SyntaxKind.LiteralType && G.literal?.kind === e.SyntaxKind.NullKeyword, B = u.types.filter((G) => !$(G));
			if (B.length === 1) return te(B[0], p, v, _, C, M, z, U);
			const X = de(u, p.name ?? f(u));
			if (X === void 0) return;
			if (X !== null) {
				p.scalar = X.type, _ && (p.enum = X);
				return;
			}
			if (!_) {
				p.scalar = "*";
				return;
			}
			if (B.length === 2) {
				const G = (g) => g.kind !== e.SyntaxKind.TypeReference ? !1 : e.isTypeReferenceNode(g) && _e(g) === "Lambda", j = B.findIndex(G);
				if (j >= 0 && !G(B[1 - j])) {
					te(B[1 - j], p, v, _, C, M, z, U), A(B[j], _e(B[j]), p, v, _);
					return;
				}
			}
			if (_ && B.length === 2) {
				const G = (g) => {
					if (!(g.kind !== e.SyntaxKind.TypeReference || g.typeArguments?.length)) return ht.get(_e(g));
				}, j = B.findIndex((g) => G(g) !== void 0);
				if (j >= 0 && G(B[1 - j]) === void 0) {
					const g = {}, x = C.count;
					if (te(B[1 - j], g, v, _, C, M, !1), g.scalar && !g.range && g.lambda == null && C.count === x) {
						p.range = G(B[j]), p.scalar = g.scalar, p.valueOrRange = !0;
						const I = g.enum;
						I && (p.enum = I);
						return;
					}
				}
			}
			if (_ && B.length === 2) {
				const G = (g) => g.kind === e.SyntaxKind.TypeReference && !g.typeArguments?.length && _e(g) === "Scalar", j = B.findIndex(G);
				if (j >= 0 && !G(B[1 - j])) {
					const g = de(B[1 - j], p.name ?? f(u));
					if (g === void 0) return;
					if (g !== null) {
						p.scalar = "*", p.enum = g;
						return;
					}
				}
			}
			o(u, E.InvalidParamType, \`Union parameter types are not supported: '\${f(u)}'. Use a single type, optionally with '| null' or '| undefined', 'T | Lambda<…>' for a value-or-lambda slot, 'IRange | Scalar' for a value-or-range slot, or 'E | Scalar' for an uncoerced slot whose values an enum documents.\`);
			return;
		}
		if (u.kind === e.SyntaxKind.NumberKeyword) p.scalar = me.Number;
		else if (u.kind === e.SyntaxKind.StringKeyword) p.scalar = me.String;
		else if (u.kind === e.SyntaxKind.BooleanKeyword) p.scalar = me.Boolean;
		else if (u.kind === e.SyntaxKind.UndefinedKeyword || u.kind === e.SyntaxKind.NullKeyword || u.kind === e.SyntaxKind.VoidKeyword) {
			if (_) {
				o(u, E.UndefinedInput, \`'undefined' is not a valid type for input: '\${f(u)}'.\`);
				return;
			}
			p.scalar = me.Null;
		} else if (u.kind === e.SyntaxKind.BigIntKeyword) p.scalar = me.Number;
		else if (u.kind === e.SyntaxKind.AnyKeyword) _ && (p.range = "*");
		else if (u.kind === e.SyntaxKind.ArrayType) {
			const $ = u.elementType;
			if (!$) {
				o(u, E.UntypedArray, \`'Array' must be typed: '\${f(u)}'.\`);
				return;
			}
			if (_ && z) {
				const B = p, X = B.name ?? f(u) ?? "parameter", G = B.acceptError;
				delete B.acceptError;
				const j = { name: X };
				S($, j, v, !0), G && !j.acceptError && (j.acceptError = !0), B.repeating = [j];
				return;
			}
			C.count++, te($, p, v, _, C);
		} else if (u.kind !== e.SyntaxKind.TupleType) if (u.kind === e.SyntaxKind.TypeReference) {
			const $ = _e(u);
			if (Qr.has($)) {
				const g = f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'\${$}' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = p;
				if (x.acceptError) {
					o(u, E.InvalidParamType, \`'\${g}' declares 'AcceptError' more than once.\`);
					return;
				}
				const I = u.typeArguments;
				if (!I || I.length !== 1) {
					o(u, E.GenericArity, \`'\${$}' must be typed with exactly 1 type: '\${g}'.\`);
					return;
				}
				return x.acceptError = !0, te(I[0], p, v, _, C, M, z, U);
			}
			if (gt.has($)) {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'ReportType' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = u.typeArguments;
				if (!x || x.length !== 1) {
					o(u, E.GenericArity, \`'\${$}' must be typed with exactly 1 type: '\${g}'.\`);
					return;
				}
				return p.reportType = !0, te(x[0], p, v, _, C, M, z, U);
			}
			if (tn.has($)) {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'NoLift' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = u.typeArguments;
				if (!x || x.length !== 1) {
					o(u, E.GenericArity, \`'\${$}' must be typed with exactly 1 type: '\${g}'.\`);
					return;
				}
				const I = p;
				I.noLift = !0;
				const V = C.count;
				te(x[0], p, v, _, C, M, z, U), (I.range || I.lambda != null || I.repeating || C.count !== V) && o(u, E.InvalidParamType, \`'\${g}': 'NoLift' applies to a SCALAR parameter only - a range, list, repeating or lambda slot never lifts.\`);
				return;
			}
			if (rn.has($)) {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'NoFilter' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = u.typeArguments;
				if (!x || x.length !== 1) {
					o(u, E.GenericArity, \`'\${$}' must be typed with exactly 1 type: '\${g}'.\`);
					return;
				}
				const I = p;
				I.noFilter = !0;
				const V = C.count;
				if (te(x[0], p, v, _, C, M, z, U), I.range || I.lambda != null || C.count !== V) {
					o(u, E.InvalidParamType, \`'\${g}': 'NoFilter' applies to a SCALAR slot only - a range, list or lambda slot has no members to coerce.\`);
					return;
				}
				const re = I.repeating;
				if (re) {
					if (delete I.noFilter, re.length !== 1) {
						o(u, E.InvalidParamType, \`'\${g}': 'NoFilter' over a repeating group applies to a period-1 group only - write it on the slot that takes the members.\`);
						return;
					}
					re[0].noFilter = !0;
				} else z && o(u, E.InvalidParamType, \`'\${g}': 'NoFilter' applies to a REPEATING slot only - a single scalar argument has no members to coerce.\`);
				return;
			}
			if (en.has($)) {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'Omittable' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = u.typeArguments;
				if (!x || x.length < 1 || x.length > 2) {
					o(u, E.GenericArity, \`'\${$}' must be typed with 1 or 2 types: '\${g}'.\`);
					return;
				}
				const I = p;
				if (I.omittable = !0, x.length === 2) {
					const Y = tr(e, x[1]);
					if (Y === void 0) {
						o(u, E.InvalidParamType, \`'\${g}' declares '\${$}' with a second type that is not a literal value. Use a number, string, boolean or null - the engine substitutes it for an omitted argument.\`);
						return;
					}
					I.omittedValue = Y;
				}
				const V = te(x[0], p, v, _, C, M, z, U), re = I.omittedValue;
				return I.enum && re !== void 0 && re !== null && !I.enum.members.some(([, Y]) => Y === re) && o(x[1], E.EnumOmittedValue, \`'\${g}': \${JSON.stringify(re)} is not a member of '\${I.enum.id}'. An omitted argument must mean a member (\${I.enum.members.map(([, Y]) => JSON.stringify(Y)).join(", ")}) or null.\`), V;
			}
			if (nn.has($)) {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'Lazy' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = p;
				if (x.lazy) {
					o(u, E.InvalidParamType, \`'\${g}' declares 'Lazy' more than once.\`);
					return;
				}
				const I = u.typeArguments;
				if (!I || I.length < 1 || I.length > 2) {
					o(u, E.GenericArity, \`'\${$}' must be typed with 1 or 2 types: '\${g}'.\`);
					return;
				}
				if (x.lazy = !0, I.length === 2) {
					const V = tr(e, I[1]);
					if (V === void 0) {
						o(u, E.InvalidParamType, \`'\${g}' declares '\${$}' with a second type that is not a literal value. Use a number, string, boolean or null - the engine substitutes it for an absent argument.\`);
						return;
					}
					x.optional = !0, x.defaultValue = V;
				}
				te(I[0], p, v, _, C, M, z, U), x.enum ? (o(u, E.EnumPosition, \`'\${g}': 'Lazy' cannot hold the enum '\${x.enum.id}'. The argument may never be evaluated, so there is no point at which it could be checked against the members.\`), delete x.enum) : x.lambda != null ? o(u, E.InvalidParamType, \`'\${g}': 'Lazy' cannot be combined with a Lambda parameter - a callable slot is already the body's to call, or not.\`) : x.repeating && o(u, E.InvalidParamType, \`'\${g}': 'Lazy' applies to a VALUE, not to a repeating group - mark the group's slots instead.\`);
				return;
			}
			if (aa.has($)) {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.InvalidReturnType, \`'Flatten' is not a valid return type: '\${g}'. It describes how an ARGUMENT is received.\`);
					return;
				}
				const x = u.typeArguments;
				if (!x || x.length !== 1) {
					o(u, E.GenericArity, \`'\${$}' must be typed with exactly 1 type: '\${g}'.\`);
					return;
				}
				return C.count++, te(x[0], p, v, _, C, M);
			}
			if (Zr.get($) === "repeating") {
				const g = p.name ?? f(u);
				if (!_) {
					o(u, E.RepeatingPosition, \`'Repeating' is not a valid return type: '\${g}'.\`);
					return;
				}
				if (C.count !== 0) {
					o(u, E.RepeatingPosition, \`'Repeating' cannot be nested inside another type: '\${g}'.\`);
					return;
				}
				const x = p, I = u.typeArguments;
				if (!I || I.length < 1 || I.length > 2) {
					o(u, E.GenericArity, \`'\${$}' must be typed with 1 type, optionally followed by a maximum argument count: '\${g}'.\`);
					return;
				}
				let V;
				if (I.length === 2) {
					const Q = I[1], he = Q.kind === e.SyntaxKind.LiteralType ? Q.literal : null, P = he && he.kind === e.SyntaxKind.NumericLiteral ? Number(he.text) : NaN;
					if (!Number.isInteger(P) || P < 1 || P > Zt) {
						o(Q, E.RepeatingMax, \`'\${g}': '\${$}'’s maximum must be a whole number between 1 and \${Zt}.\`);
						return;
					}
					V = P, v.maxArguments = P;
				}
				if (U) {
					if (V === void 0) {
						o(u, E.RepeatingPosition, \`'\${g}' is a rest parameter and a repeating group. A group already repeats — drop the '...', or give the group a maximum ('Repeating<T, 254>') if the ceiling is all you meant.\`);
						return;
					}
					return te(I[0], p, v, _, C, M, z);
				}
				const re = x.acceptError;
				delete x.acceptError;
				const Y = we(I[0], g ?? "parameter", v, re);
				Y && (x.repeating = Y);
				return;
			}
			const B = ht.get($);
			let X = !1;
			B && (p.range = B, X = !0);
			const G = ia.get($);
			if (G && (p.scalar = G), G !== void 0 && (X = !0), A(u, $, p, v, _)) return;
			if (_) {
				if ($ === "Volatile" || $ === \`\${se}.Volatile\`) {
					o(u, E.InvalidParamType, \`'Volatile' is not a valid parameter type: '\${f(u)}'. It describes the function's RESULT, so it belongs on the return type.\`);
					return;
				}
				if (da.has($)) return Qt;
				const g = bt.get($);
				if (g) return g;
			} else if ($ === "Promise") b = u, X = !0;
			else {
				const g = ua.get($);
				g && (Object.assign(p, g()), X = !0);
			}
			if (!X) {
				const g = de(u, p.name ?? f(u));
				if (g === void 0) return;
				if (g !== null) {
					p.scalar = g.type, _ && (p.enum = g);
					return;
				}
			}
			if (!X) {
				const g = "number, string, boolean, Scalar, Lambda, Date, FormulaError.Known, IRichData, IRange, IReferenceRange (and arrays of these; optionally wrapped in AcceptError<T>, or grouped with Repeating<T>)", x = "number, string, boolean, Scalar, Date, FormulaError.Known, IRichData, IRange, Volatile<T> (and arrays of these)";
				let I;
				_ ? M ? I = \`'\${$}' is not a valid first parameter: '\${f(u)}'. The first parameter is EITHER a macro target (making this a macro) OR a calculation input (making this a calculation function). Allowed: \${na.join(", ")} (macro target); \${g} (calculation input).\` : I = \`'\${$}' is not a valid parameter type: '\${f(u)}'. Allowed: \${g}.\` : I = \`'\${$}' is not a valid return type: '\${f(u)}'. Allowed: \${x}.\`, o(u, _ ? E.InvalidParamType : E.InvalidReturnType, I);
				return;
			}
			const j = u.typeArguments;
			if (j) {
				if (j.length !== 1) {
					o(u, E.GenericArity, \`'\${$}' must be typed with exactly 1 type: '\${f(u)}'.\`);
					return;
				}
				const g = j[0], x = _ && e.isTypeReferenceNode(g) && gt.has(_e(g)), I = p.reportType;
				x && K.add(p), S(g, p, v, _), x && I === void 0 && delete p.reportType;
				const V = p.enum;
				V && !x && (o(j[0], E.EnumPosition, \`'\${$}' cannot hold the enum '\${V.id}': '\${f(u)}'. The members of a range reach the body as they are, so nothing checks them against the enum. Take the enum as a value, or type the range by its scalar ('\${$}<\${V.type}>').\`), delete p.enum);
			}
		} else u.kind === e.SyntaxKind.FunctionType && k(u, p, v, _);
	}, Ze = (u) => (e.getCombinedModifierFlags(u) & e.ModifierFlags.Export) !== 0, Ie = (u) => (e.getCombinedModifierFlags(u) & e.ModifierFlags.Default) !== 0;
	try {
		e.forEachChild(t, (u) => {
			if (Ze(u) && e.isFunctionDeclaration(u)) {
				const p = u?.name?.getText();
				if (!u.body) {
					o(u, E.NoBody, \`'\${p}': function has no body.\`);
					return;
				}
				if (!p) {
					o(u, E.Anonymous, "Anonymous exported functions are not allowed.");
					return;
				}
				const v = {}, _ = { parameters: {} };
				try {
					v.name = p;
					const C = r.getSymbolAtLocation(u.name), M = Le(C?.getDocumentationComment(r));
					M && (_.summary = M);
					const z = {};
					b = null, S(u.type, z, v, !1), v.returnType = z;
					const U = {};
					Ie(u) && (U.default = !0, c = p), v.parameters = [];
					const $ = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Set();
					let G = null, j = null, g = null, x = 0, I = !1, V = 0;
					for (let P = 0; P < u.parameters.length; P++) {
						const O = u.parameters[P], N = {};
						N.name = O.name?.getText();
						const ne = v.parameters.length === 0;
						if (n?.lenient && P === 0 && !O.type && U.default) {
							v.context = er;
							continue;
						}
						const Re = S(O.type, N, v, !0, ne, !O.dotDotDotToken, !!O.dotDotDotToken);
						if (Re === Qt) {
							P === 0 && v.context === void 0 && (v.context = er);
							continue;
						}
						if (Re) {
							if (v.parameters.length !== 0) {
								o(O, E.ContextNotFirst, \`'\${v.name}' contexts must be the first parameter: '\${N.name}'.\`);
								return;
							}
							v.context = Re;
							continue;
						}
						if (N.lambda !== void 0) {
							if (G !== null) {
								o(O, E.MultipleLambda, \`'\${v.name}' has more than one Lambda parameter ('\${G}' and '\${N.name}'). Only one Lambda parameter is allowed.\`);
								return;
							}
							G = N.name;
						} else if (G !== null) {
							o(O, E.LambdaNotLast, \`'\${v.name}' Lambda parameter ('\${G}') must be the last parameter, but '\${N.name}' follows it.\`);
							return;
						}
						const ye = N.optional === !0 || !((O.initializer === void 0 || O.initializer === null) && (O.questionToken === void 0 || O.questionToken === null));
						let ae;
						if (ye && (N.optional = !0, O.initializer)) try {
							if (O.initializer.kind === e.SyntaxKind.StringLiteral) ae = O.initializer.text;
							else if (O.initializer.kind === e.SyntaxKind.NumericLiteral) ae = parseFloat(O.initializer.text);
							else if (O.initializer.kind === e.SyntaxKind.TrueKeyword || O.initializer.kind === e.SyntaxKind.FalseKeyword) ae = O.initializer.kind === e.SyntaxKind.TrueKeyword;
							else if (O.initializer.kind === e.SyntaxKind.NullKeyword) ae = null;
							else if (e.isPrefixUnaryExpression(O.initializer) && O.initializer.operator === e.SyntaxKind.MinusToken && O.initializer.operand.kind === e.SyntaxKind.NumericLiteral) ae = -parseFloat(O.initializer.operand.text);
							else if (e.isPropertyAccessExpression(O.initializer) || e.isElementAccessExpression(O.initializer)) {
								const ue = r.getTypeAtLocation(O.initializer);
								ue.flags & (e.TypeFlags.NumberLiteral | e.TypeFlags.StringLiteral) && (ae = ue.value);
							}
						} catch (ue) {
							console.warn(\`Couldn't extract default value for parameter '\${N.name}'\`, ue);
						}
						O.dotDotDotToken && (N.rest = !0);
						const H = N.repeating;
						if (H) {
							if (N.rest) {
								o(O, E.RepeatingPosition, \`'\${v.name}' parameter '\${N.name}' is both a rest parameter and a repeating group. A group already repeats — drop the '...'.\`);
								return;
							}
							if (ye && H.length === 1) {
								o(O, E.RepeatingOptional, \`'\${v.name}' parameter '\${N.name}' cannot be an optional repeating group. Use '...\${N.name}: T[]' for zero-or-more, or drop the '?' for one-or-more.\`);
								return;
							}
							if (j !== null) {
								o(O, E.MultipleRepeating, \`'\${v.name}' has more than one repeating group ('\${j}' and '\${N.name}'). Only one is allowed — two would make the argument count ambiguous.\`);
								return;
							}
							if (g !== null) {
								o(O, E.RepeatingOptional, \`'\${v.name}' parameter '\${g}' is optional and precedes the repeating group '\${N.name}'. Every parameter outside a group must be required.\`);
								return;
							}
							j = N.name, x = H.length, I = H[H.length - 1].optional === !0;
						} else if (j !== null && N.rest) {
							o(O, E.RepeatingOptional, \`'\${v.name}' parameter '\${N.name}' is a rest parameter and follows the repeating group '\${j}'. Two variadic tails would make the argument count ambiguous.\`);
							return;
						} else if (j !== null && ye) {
							if (V >= x - 1) {
								o(O, E.RepeatingOptional, x === 1 ? \`'\${v.name}' parameter '\${N.name}' is optional and follows the period-1 repeating group '\${j}'. One more argument is indistinguishable from one more repetition — make it required, or give the group a period.\` : \`'\${v.name}' has \${V + 1} optional parameters after the repeating group '\${j}', which has period \${x}. At most \${x - 1} may be optional, or the argument count no longer decides the parse.\`);
								return;
							}
							if (I) {
								o(O, E.RepeatingOptional, \`'\${v.name}' parameter '\${N.name}' is optional and follows '\${j}', whose own last slot is already optional. Both omissions reach the same argument count — drop one.\`);
								return;
							}
							V++;
						}
						ye && !H && (g = N.name);
						const W = (N.range ? 2 : 0) + (N.arrayDepth ?? 0), Be = N.range === "r" || N.range === "p" || N.range === "*", Z = N.rest || Be ? 3 : 2;
						if (W > Z) {
							o(O, E.ArrayDepth, \`'\${v.name}' parameter '\${N.name}' has an array depth of \${W}; the maximum is \${Z}\${N.rest ? " for a rest parameter" : " (use a rest parameter for one more level, or an IRange)"}.\`);
							return;
						}
						v.parameters.push(N);
						const ce = { description: "" };
						_.parameters[N.name] = ce;
						const Qe = r.getSymbolAtLocation(O.name);
						ce.description = Le(Qe?.getDocumentationComment(r)), ae !== void 0 && (N.defaultValue = ae);
						for (const ue of [N, ...N.repeating ?? []]) {
							const Se = ue.enum ? w.get(ue.enum) : void 0;
							Se && ((_.enums ??= {})[ue.enum.id] = Se);
						}
						if ($.set(N.name, N), B.set(N.name, O), H && H.length > 1) {
							X.add(N.name);
							for (const ue of H) {
								const Se = \`\${N.name}.\${ue.name}\`;
								_.parameters[Se] = { description: "" }, $.set(Se, ue), B.set(Se, O);
							}
						}
					}
					const re = v.maxArguments;
					if (re !== void 0) {
						const P = v.parameters ?? [];
						if (!P.some((N) => N.rest === !0 || N.repeating !== void 0)) {
							o(u, E.RepeatingMax, \`'\${v.name}' declares a maximum of \${re} arguments but takes a fixed \${P.length}. A maximum only means something on a variadic tail.\`);
							return;
						}
						let O = 0;
						for (const N of P) N.rest === !0 || N.optional === !0 || (O += N.repeating ? N.repeating.length : 1);
						if (re < O) {
							o(u, E.RepeatingMax, \`'\${v.name}' declares a maximum of \${re} arguments but requires \${O}.\`);
							return;
						}
					}
					if (u.jsDoc && u.jsDoc.length > 0) {
						const P = u.jsDoc, O = P.length;
						for (let N = 0; N < O; N++) {
							const ne = P[N]?.tags;
							if (!ne) continue;
							const Re = ne.length;
							for (let ye = 0; ye < Re; ye++) {
								const ae = ne[ye];
								let H = ae?.tagName?.text;
								if (!H) continue;
								H = H.toLowerCase();
								let W = ae.comment;
								const Be = ra(H);
								if (typeof W != "string" && !Be) {
									H === "returnkind" && o(ae, E.UnknownReturnKind, \`'@returnKind' needs a value kind. Known: \${[...lt].map((Z) => \`'\${Z}'\`).join(", ")}.\`);
									continue;
								}
								if (typeof W == "string" && (W = W.replace(/\\r\\n?/g, \`
\`).trim()), !(!Be && W && (W = W.split(\`
\`)[0].trim(), !W || W.length === 0))) {
									if (W && typeof W == "string") {
										const Z = /\\{@link(code|plain)?\\s+([^}|]+)(?:\\s*\\|\\s*([^}]+))?\\}/g;
										let ce, Qe = W, ue = [];
										for (; (ce = Z.exec(W)) !== null;) {
											const [Se, Ra, sn, Et] = ce, cn = [sn.trim()];
											Et && cn.push(Et.trim());
										}
										W = Qe, ue.length > 0 && H === "see" && (_.links || (_.links = []), _.links.push(...ue));
									}
									if (H === "name") {
										const Z = W;
										Z !== p && (_.name = Z);
									} else if (H !== "description") {
										if (H === "param") {
											const Z = ae.name?.getText?.() ?? ae.name?.text;
											if (!$.get(Z)) {
												o(ae, E.UnknownParam, \`Parameter '\${Z}' not found in function '\${p}'.\`);
												continue;
											}
											const ce = _.parameters?.[Z];
											ce && !ce.description && typeof W == "string" && W && (ce.description = W);
										} else if (H === "returns" || H === "return") v.returnType.description = W;
										else if (H === "returnkind") {
											const Z = (W ?? "").trim().toLowerCase();
											lt.has(Z) ? v.returnType.kind = Z : o(ae, E.UnknownReturnKind, \`'@returnKind \${Z}' is not a known value kind. Known: \${[...lt].map((ce) => \`'\${ce}'\`).join(", ")}.\`);
										} else if (H === "category") _.category = W;
										else if (H === "deprecated" || H === "hidden") {
											let Z = !0;
											const ce = W?.toLowerCase();
											ce === "false" ? Z = !1 : ce !== "true" && (Z = W), Z !== !1 && (_.deprecated = Z ?? !0, v.hidden = !0);
										}
									}
								}
							}
						}
					}
					if (!v.context && b) {
						o(b, E.InvalidReturnType, \`'\${p}': Promise<T> is not a valid return type for a calculation function. Return the value the cell shows now, and call FormulaContext.defer(executor, payload) to deliver the result later.\`);
						return;
					}
					Object.keys(v.returnType).length === 0 && delete v.returnType, Object.keys(U).length > 0 && (v.behavior = U), _.summary || m(u.name ?? u, E.MissingSummary, "warning", \`'\${p}': missing a description. Add a JSDoc comment above the function.\`);
					const Y = !v.context, Q = Y && _.name || p;
					if (Y && !oa.test(Q)) {
						const P = _.name ? \`'@name \${_.name}'\` : \`'\${Q}'\`;
						o(u.name ?? u, E.InvalidName, \`'\${p}': \${P} cannot be called from a formula. A function name starts with a letter or '_', and continues with letters, digits, '_' or '.'.\` + (_.name ? "" : " Add an '@name' tag to register it under another name."));
						return;
					}
					if (Y && !n?.isBuiltIn && ca(Q)) {
						const P = _.name ? \`'@name \${_.name}'\` : \`'\${Q}'\`;
						o(u.name ?? u, E.InvalidName, \`'\${p}': \${P} cannot be called from a formula. It reads as a cell address.\` + (_.name ? "" : " Add an '@name' tag to register it under another name."));
						return;
					}
					const he = l.get(Q.toUpperCase());
					if (he !== void 0) {
						o(u.name ?? u, E.DuplicateName, \`'\${p}': '\${Q}' is already the name of '\${he}' in this module.\`);
						return;
					}
					if (l.set(Q.toUpperCase(), p), Y && i?.has(Q.toUpperCase())) {
						o(u.name ?? u, E.BuiltInName, \`'\${Q}' is a built-in function. Choose a different name - a calculation function cannot replace a built-in.\`);
						return;
					}
					if (Y) {
						const P = _.parameters ?? {};
						for (const [O, N] of Object.entries(P)) if (!X.has(O) && !N.description) {
							const ne = B.get(O);
							m(ne, E.MissingParamDescription, "warning", \`'\${p}': parameter '\${O}' is missing a description. Add an '@param \${O}' tag.\`);
						}
					}
					a.push([v, _]);
				} catch (C) {
					o(u, E.ParseError, \`'\${p}': \${C.message}\`);
				}
			}
		});
	} catch (u) {
		o(void 0, E.ParseError, \`Unable to analyze module: \${u?.message ?? u}\`);
	}
	return {
		functions: a,
		autoRun: c,
		diagnostics: s
	};
}
const Ye = "__SHEETXL";
var pa = /* @__PURE__ */ or({ initialize: () => ma });
async function ma() {
	return Te || (Te = new Promise(async (e, t) => {
		try {
			const r = "0.20.2", n = \`https://esm.sh/esbuild-wasm@\${r}\`, i = \`https://esm.sh/esbuild-wasm@\${r}/esbuild.wasm\`, a = (await import(
				/* webpackIgnore: true */
				/* @vite-ignore */
				n
)).default;
			await a.initialize({
				wasmURL: i,
				worker: !1
			}), e(a);
		} catch (r) {
			console.error("Error initializing esbuild:", r), Te = null, t(new Error("The script bundler could not be loaded. Check your connection and try again.", { cause: r }));
		}
	}), Te);
}
var Te, ha = ar((() => {
	Te = null;
}));
let xe = null, Ve = null;
async function ga() {
	if (xe) return xe;
	if (Ve) {
		if (await Ve, !xe) throw new Error("ESBuild initialization promise resolved, but instance is not available.");
		return xe;
	}
	let e, t;
	Ve = new Promise((r, n) => {
		e = r, t = n;
	});
	try {
		const { initialize: r } = await Promise.resolve().then(() => (ha(), pa));
		return xe = await r(), e(), xe;
	} catch (r) {
		throw console.error("Failed to import or initialize esbuild:", r), Ve = null, t(r), r;
	}
}
const ya = { compilerOptions: { target: "esnext" } };
async function wa(e, t, r = "/script.js", n = Ye, i = !1) {
	try {
		const a = await ga(), l = "@sheetxl/primitives", s = \`
      export const FormulaContext = globalThis.\${n}?.FormulaContext;
      export const ScalarType = globalThis.\${n}?.ScalarType;
      export const Observable = globalThis.\${n}?.Observable;
      export const IRange = globalThis.\${n}?.IRange;
      export const FormulaError = globalThis.\${n}?.FormulaError;
      // Add more exports as needed
    \`, c = await a.build({
			entryPoints: [r],
			bundle: !0,
			write: !1,
			format: "esm",
			plugins: [{
				name: "sheetxl-esbuild-in-memory",
				setup(d) {
					const m = "sheetxl-" + (/* @__PURE__ */ new Date()).getTime();
					d.onResolve({ filter: new RegExp(\`^(\${r.replace("/", "\\\\/")}|\${l})$\`) }, (o) => ({
						path: o.path,
						namespace: m
					})), d.onResolve({ filter: /.*/ }, (o) => {
						if (o.namespace !== m) return console.warn(\`esbuild: Treating import "\${o.path}" as external.\`), {
							path: o.path,
							external: !0
						};
					}), d.onLoad({
						filter: /.*/,
						namespace: m
					}, (o) => {
						let f;
						if (o.path === r) f = t;
						else if (o.path === l) f = s;
						else return { errors: [{ text: \`Cannot load unknown path in \${m}: \${o.path}\` }] };
						return {
							contents: f,
							loader: "ts"
						};
					});
				}
			}],
			sourcemap: "inline",
			tsconfigRaw: ya,
			minify: i,
			platform: "neutral"
		});
		if (c.outputFiles && c.outputFiles.length > 0) return c.outputFiles[0].text;
		throw c.errors && c.errors.length > 0 ? /* @__PURE__ */ new Error(\`esbuild bundling failed: \${c.errors.map((d) => d.text).join(\`
\`)}\`) : /* @__PURE__ */ new Error("esbuild did not produce an output file.");
	} catch (a) {
		throw console.error("esbuild bundling process failed:", a), a;
	}
}
function Sa(e, t, r) {
	return (n) => {
		const i = n.factory, a = () => i.createExpressionStatement(i.createCallChain(i.createPropertyAccessExpression(i.createIdentifier(Ye), "checkRun"), i.createToken(e.SyntaxKind.QuestionDotToken), void 0, [i.createStringLiteral(t), i.createNumericLiteral(r)])), l = (o) => {
			const f = o.statements;
			let b = 0;
			for (; b < f.length && e.isExpressionStatement(f[b]) && e.isStringLiteral(f[b].expression);) b++;
			return i.updateBlock(o, [
				...f.slice(0, b),
				a(),
				...f.slice(b)
			]);
		}, s = (o) => e.isBlock(o) ? l(o) : i.createBlock([a(), o], !0), c = (o) => e.isBlock(o) ? l(o) : i.createBlock([a(), i.createReturnStatement(o)], !0), d = (o) => e.isForStatement(o) || e.isForInStatement(o) || e.isForOfStatement(o) || e.isWhileStatement(o) || e.isDoStatement(o), m = (o) => {
			if (d(o)) {
				const f = o.statement;
				return e.visitEachChild(o, (b) => {
					const S = m(b);
					return b === f ? s(S) : S;
				}, n);
			}
			if (e.isFunctionLike(o) && o.body) {
				const f = o.body;
				return e.visitEachChild(o, (b) => {
					const S = m(b);
					return b === f ? c(S) : S;
				}, n);
			}
			return e.visitEachChild(o, m, n);
		};
		return (o) => e.visitNode(o, m);
	};
}
const rr = "//# sourceMappingURL";
var an = /* @__PURE__ */ or({
	initialize: () => ba,
	readLibFile: () => va
});
async function ba() {
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
function va(e, t) {}
var Ce, on = ar((() => {
	Ce = null;
}));
const Ea = \`
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
\`, _a = \`
  interface FirstTest {
    isTrue?: boolean;
  }
\`, xa = async () => _a;
let Ge = null;
const st = "sheetxl.d.ts", nr = "sheetxl-modules.d.ts", Ta = \`declare module '@sheetxl/primitives' { export = SheetXL; }
\`, Ca = [
	"lib.webworker.d.ts",
	"lib.es2020.d.ts",
	"lib.esnext.asynciterable.d.ts"
], ir = /* @__PURE__ */ new Map();
let ct = null, ut = null;
async function Aa() {
	return ut || (ut = Promise.resolve().then(() => (on(), an)).then(async (e) => {
		const t = await ln();
		return e.readLibFile(t, "lib.es5.d.ts") !== void 0 ? e.readLibFile : null;
	})), ut;
}
async function ln() {
	if (Ge) return Ge;
	try {
		const e = await (await Promise.resolve().then(() => (on(), an))).initialize();
		if (!e) throw new Error("TypeScript could not be loaded. Check your connection and try again.");
		return e;
	} catch (e) {
		throw Ge = null, e;
	} finally {
		Ge = null;
	}
}
async function Ia(e) {
	const t = e?.source ?? null;
	if (!t) return {
		module: null,
		diagnostics: []
	};
	const r = (e.disableBundle || e.declarationsOnly) ?? !1, [n, i, a] = await Promise.all([
		xa(),
		ln(),
		e.ambientTypes ? Aa() : null
	]), l = a ? e.ambientTypes ?? null : null;
	let s = "";
	const c = {
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
		target: i.ScriptTarget.ES2020,
		...l ? {
			lib: Ca,
			skipLibCheck: !0,
			strict: !0
		} : {}
	}, d = "script", m = \`\${d}.ts\`, o = "lib.d.ts", f = "global.d.ts", b = {
		[m]: t,
		[o]: Ea,
		[f]: n,
		...l ? {
			[st]: l,
			[nr]: Ta
		} : {}
	}, S = (p) => b[p] ?? (a && p.startsWith("lib.") ? a(i, p) : void 0), A = {
		getSourceFile: (p, v, _, C) => {
			if (p === st) return ct?.text !== l && (ct = {
				text: l,
				file: i.createSourceFile(p, l, i.ScriptTarget.Latest, !1)
			}), ct.file;
			if (b[p] === void 0) {
				let M = ir.get(p);
				if (!M) {
					const z = S(p);
					if (z === void 0) return;
					M = i.createSourceFile(p, z, i.ScriptTarget.Latest, !1), ir.set(p, M);
				}
				return M;
			}
			return i.createSourceFile(p, b[p], i.ScriptTarget.Latest, !0);
		},
		fileExists: (p) => S(p) !== void 0,
		readFile: S,
		writeFile: (p, v) => {
			b[p] = v;
		},
		getCurrentDirectory: () => "./",
		getCanonicalFileName: (p) => p,
		useCaseSensitiveFileNames: () => !0,
		getDefaultLibFileName: (p) => o,
		getNewLine: () => \`
\`
	}, k = i.createProgram([
		m,
		f,
		...l ? [st, nr] : []
	], c, A), h = k.getTypeChecker(), y = k.getSourceFile(m), w = e.runGuard;
	k.emit(void 0, void 0, void 0, void 0, w ? { before: [Sa(i, w.key, w.timeoutMs)] } : void 0), s = b[\`\${d}.js\`] ?? "";
	const D = (p) => ({
		start: p.start ?? 0,
		length: p.length ?? 0,
		severity: p.category === i.DiagnosticCategory.Warning ? "warning" : "error",
		code: \`TS\${p.code}\`,
		message: i.flattenDiagnosticMessageText(p.messageText, \`
\`)
	}), K = k.getSyntacticDiagnostics(y).map(D), L = l ? k.getSemanticDiagnostics(y).filter((p) => p.category === i.DiagnosticCategory.Error || p.category === i.DiagnosticCategory.Warning).map(D) : [], R = fa(i, y, h, {
		builtInNames: e.builtInNames,
		isBuiltIn: e.isBuiltIn,
		lenient: e.lenient
	});
	let F = [
		...K,
		...L,
		...R.diagnostics
	];
	e.lenient && (F = F.filter((p) => p.code !== E.MissingType));
	const de = R.functions, we = R.autoRun, te = F.some((p) => p.severity === "error"), Ze = \`\${lr.uuidV4()}-script\`;
	let Ie = null;
	if (te) s = "";
	else {
		try {
			r || (s = await wa(i, s, d, void 0, e.minify ?? !1));
		} catch {
			console.warn("Error bundling script");
		}
		const p = s.indexOf(rr);
		p > -1 && (Ie = s.substring(p + 20 + 1, s.length), s = s.substring(0, p), s = s.replaceAll("globalThis." + Ye, Ye));
	}
	const u = {
		functions: de,
		commitId: Ze,
		source: t,
		language: "typescript",
		compiled: s
	};
	return Ie && (u.sourceMap = Ie), we && (u.autoRun = we), {
		module: u,
		diagnostics: F
	};
}
self.addEventListener("message", async (e) => {
	const { id: t, params: r } = e.data;
	try {
		const n = await Ia(r);
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
`,c=typeof self<`u`&&self.Blob&&new Blob([`URL.revokeObjectURL(import.meta.url);`,s],{type:`text/javascript;charset=utf-8`}),l=async()=>{let{compileModule:e}=await n(async()=>{let{compileModule:e}=await import(`./CwhaPB7R93eqixfq-zUw2bm3q.js`);return{compileModule:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),t=new o(t=>e(t));return await t.start(),t}})))()}u();export{i as createCompilerWorker};