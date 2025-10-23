const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C1DZmlRCcKmg_HLd-CEQuqlpM.js","./preload-helper-PPVm8Dsz.js","./index-CmvF348R.js","./index-CvKDCtrJ.js","./iframe-mGP4b_Fh.js","./index-BiBgeh3u.js","./index-DTwpo8e8.js","./client-BMu68Vok.js","./index-CXJVXQGg.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-PPVm8Dsz.js";let u=class{constructor(t){this._worker=null,this._nextId=1,this._pendingRequests=new Map,this._workerFactory=t}start(){if(typeof Worker>"u")throw new Error("Web Workers are not supported in this environment.");return this._worker||(this._worker=this._workerFactory(),this._worker.onmessage=t=>{const{id:e,result:n,error:r}=t.data,o=this._pendingRequests.get(e);if(o)if(this._pendingRequests.delete(e),r){const a=new Error(r.message);a.stack=r.stack,r.cause&&(a.cause=r.cause),o.reject(a)}else o.resolve(n)},this._worker.onerror=t=>{console.error("Worker error:",t),this._pendingRequests.forEach(e=>{e.reject(new Error(`Worker failed: ${t.message}`))}),this._pendingRequests.clear(),this._worker=null}),Promise.resolve()}execute(t){if(!this._worker)throw new Error("Worker is not initialized. Call start() first.");const e=this._nextId++;return new Promise((n,r)=>{this._pendingRequests.set(e,{resolve:n,reject:r}),this._worker.postMessage({id:e,params:t})})}terminate(){this._worker&&(this._worker.terminate(),this._worker=null)}};class d{constructor(e){this._onExecute=e}execute(e){return this._onExecute(e)}start(){return Promise.resolve()}terminate(){}}const s=`/**
 * @license @sheetxl/primitives - Primitives - Base types for SheetXL functions. - v0.7.26
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */
const W = { Number: "n", String: "s", Boolean: "b", Error: "e", Null: "z" };
var Ae, le, d;
(le = Ae || (Ae = {})).Orientation = { Column: "column", Row: "row" }, le.Orientations = { ...le.Orientation, Both: "both" }, le.Direction = { Up: "up", Down: "down", Left: "left", Right: "right" }, ((e) => {
  e.Code = { Parse: 0, Null: 1, Div0: 2, Value: 3, Ref: 4, Name: 5, Num: 6, NA: 7, GettingData: 8, Spill: 9, Connect: 10, Blocked: 11, Unknown: 12, Field: 13, Calc: 14, Busy: 16, Python: 19, Timeout: 20 }, e.Label = { Parse: "#PARSE!", Null: "#NULL!", Div0: "#DIV/0!", Value: "#VALUE!", Ref: "#REF!", Name: "#NAME?", Num: "#NUM!", NA: "#N/A", GettingData: "#GETTING_DATA", Spill: "#SPILL!", Connect: "#CONNECT!", Blocked: "#BLOCKED!", Unknown: "#UNKNOWN!", Field: "#FIELD!", Calc: "#CALC!", Busy: "#BUSY!", Python: "#PYTHON!", Timeout: "#TIMEOUT!" };
  class t extends Error {
    constructor(u, h, pe, $) {
      super(pe, $), this._label = h, this._code = u, this.details = $;
    }
    static {
      this.code = e.Code.Unknown;
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
    equals(u) {
      return !!u && (this._code === u._code || this._code === u.code);
    }
    get [Symbol.toStringTag]() {
      return "[FormulaError]";
    }
    toString() {
      return this.message || this._label;
    }
  }
  e.Known = t;
  class n extends t {
    constructor(u, h) {
      super(e.Code.Parse, e.Label.Parse, u, h);
    }
    static {
      this.code = e.Code.Parse;
    }
    getDetails() {
      const u = this.details;
      return { line: u?.line ?? 1, column: u?.column ?? 1, offset: u?.offset ?? 0, length: u?.length ?? 0 };
    }
  }
  e.Parse = n;
  class r extends t {
    constructor(u, h) {
      super(e.Code.Null, e.Label.Null, u, h);
    }
    static {
      this.code = e.Code.Null;
    }
  }
  e.Null = r;
  class o extends t {
    constructor(u, h) {
      super(e.Code.Div0, e.Label.Div0, u, h);
    }
    static {
      this.code = e.Code.Div0;
    }
  }
  e.Div0 = o;
  class a extends t {
    constructor(u, h) {
      super(e.Code.Value, e.Label.Value, u, h);
    }
    static {
      this.code = e.Code.Value;
    }
  }
  e.Value = a;
  class i extends t {
    constructor(u, h) {
      super(e.Code.Ref, e.Label.Ref, u, h);
    }
    static {
      this.code = e.Code.Ref;
    }
  }
  e.Ref = i;
  class l extends t {
    constructor(u, h) {
      super(e.Code.Name, e.Label.Name, u, h);
    }
    static {
      this.code = e.Code.Name;
    }
  }
  e.Name = l;
  class s extends t {
    constructor(u, h) {
      super(e.Code.Num, e.Label.Num, u, h);
    }
    static {
      this.code = e.Code.Num;
    }
  }
  e.Num = s;
  class p extends t {
    constructor(u, h) {
      super(e.Code.NA, e.Label.NA, u, h);
    }
    static {
      this.code = e.Code.NA;
    }
  }
  e.NA = p;
  class w extends t {
    constructor(u, h) {
      super(e.Code.GettingData, e.Label.GettingData, u, h);
    }
    static {
      this.code = e.Code.GettingData;
    }
  }
  e.GettingData = w;
  class g extends t {
    constructor(u, h) {
      super(e.Code.Spill, e.Label.Spill, u, h);
    }
    static {
      this.code = e.Code.Spill;
    }
  }
  e.Spill = g;
  class f extends t {
    constructor(u, h) {
      super(e.Code.Connect, e.Label.Connect, u, h);
    }
    static {
      this.code = e.Code.Connect;
    }
  }
  e.Connect = f;
  class y extends t {
    constructor(u, h) {
      super(e.Code.Blocked, e.Label.Blocked, u, h);
    }
    static {
      this.code = e.Code.Blocked;
    }
  }
  e.Blocked = y;
  class x extends t {
    constructor(u, h) {
      super(e.Code.Unknown, e.Label.Unknown, u, h);
    }
    static {
      this.code = e.Code.Unknown;
    }
  }
  e.Unknown = x;
  class A extends t {
    constructor(u, h) {
      super(e.Code.Field, e.Label.Field, u, h);
    }
    static {
      this.code = e.Code.Field;
    }
  }
  e.Field = A;
  class U extends t {
    constructor(u, h) {
      super(e.Code.Calc, e.Label.Calc, u, h);
    }
    static {
      this.code = e.Code.Calc;
    }
  }
  e.Calc = U;
  class B extends t {
    constructor(u, h) {
      super(e.Code.Busy, e.Label.Busy, u, h);
    }
    static {
      this.code = e.Code.Busy;
    }
  }
  e.Busy = B;
  class O extends t {
    constructor(u, h) {
      super(e.Code.Python, e.Label.Python, u, h);
    }
    static {
      this.code = e.Code.Python;
    }
  }
  e.Python = O;
  class J extends t {
    constructor(u, h) {
      super(e.Code.Timeout, e.Label.Timeout, u, h);
    }
    static {
      this.code = e.Code.Timeout;
    }
  }
  e.Timeout = J;
})(d || (d = {}));
const T = {};
T[d.Code.Parse] = d.Parse, T[d.Code.Null] = d.Null, T[d.Code.Div0] = d.Div0, T[d.Code.Value] = d.Value, T[d.Code.Ref] = d.Ref, T[d.Code.Name] = d.Name, T[d.Code.Num] = d.Num, T[d.Code.NA] = d.NA, T[d.Code.GettingData] = d.GettingData, T[d.Code.Spill] = d.Spill, T[d.Code.Connect] = d.Connect, T[d.Code.Blocked] = d.Blocked, T[d.Code.Unknown] = d.Unknown, T[d.Code.Field] = d.Field, T[d.Code.Calc] = d.Calc, T[d.Code.Busy] = d.Busy, T[d.Code.Python] = d.Python, T[d.Code.Timeout] = d.Timeout;
const at = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), Me = Object.keys(T);
for (let e = 0; e < Me.length; e++) {
  const t = Me[e], n = T[t];
  it.set(d.Label[t], n), lt.set(d.Code[t], n);
  const r = new n();
  at.set(r.getLabel(), r), Ie.set(r.getCode(), r);
}
const Tt = Ie.get(d.Code.Unknown);
var v;
(v = d || (d = {})).BuiltIn = { Parse: new v.Parse(), Null: new v.Null(), Div0: new v.Div0(), Value: new v.Value(), Ref: new v.Ref(), Name: new v.Name(), Num: new v.Num(), NA: new v.NA(), GettingData: new v.GettingData(), Spill: new v.Spill(), Connect: new v.Connect(), Blocked: new v.Blocked(), Unknown: new v.Unknown(), Field: new v.Field(), Calc: new v.Calc(), Busy: new v.Busy(), Python: new v.Python(), Timeout: new v.Timeout() }, v.getBuiltInByLabel = (e) => at.get(e), v.newTypedError = (e, t, n) => {
  let r;
  return r = typeof e == "string" ? it.get(e) : lt.get(e), r || (r = v.Unknown), new r(t, n);
}, v.getBuiltInById = (e) => Ie.get(e) || Tt;
/**
 * @license @sheetxl/utils - Utils - Utilities used by most SheetXL components. - v0.7.26
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */
const P = { Column: "column", Row: "row" }, _t = Object.freeze({ colIndex: 0, rowIndex: 0 }), Ot = Object.freeze({ colStart: 0, rowStart: 0, colEnd: 0, rowEnd: 0 }), st = (e, t) => e.colStart === t.colStart ? e.rowStart - t.rowStart : e.colStart - t.colStart, ct = (e, t) => e.rowStart === t.rowStart ? e.colStart - t.colStart : e.rowStart - t.rowStart, It = (e, t) => e.rowEnd === t.rowEnd ? t.colEnd - e.colEnd : t.rowEnd - e.rowEnd, Nt = (e, t) => e.colEnd === t.colEnd ? t.rowEnd - e.rowEnd : t.colEnd - e.colEnd, je = (e, t) => e.colIndex === t.colIndex ? e.rowIndex - t.rowIndex : e.colIndex - t.colIndex, Pe = (e, t) => e.rowIndex === t.rowIndex ? e.colIndex - t.colIndex : e.rowIndex - t.rowIndex, Fe = (e, t) => e.rowIndex === t.rowIndex ? t.colIndex - e.colIndex : t.rowIndex - e.rowIndex, De = (e, t) => e.colIndex === t.colIndex ? t.rowIndex - e.rowIndex : t.colIndex - e.colIndex, ut = (e = P.Row, t = !1) => t ? e !== P.Column ? It : Nt : e !== P.Column ? ct : st, Ue = (e, t) => e === t || !(!e || !t) && e.rowIndex === t.rowIndex && e.colIndex === t.colIndex, ve = (e, t) => e === t || !(!e || !t) && e.rowStart === t.rowStart && e.rowEnd === t.rowEnd && e.colStart === t.colStart && e.colEnd === t.colEnd, Te = (e, t) => !(!e || !t) && !(e.colStart > t.colEnd || t.colStart > e.colEnd) && !(e.rowStart > t.rowEnd || t.rowStart > e.rowEnd), Be = (e, t) => {
  if (e === t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!ve(e[n], t[n])) return !1;
  return !0;
}, ye = (e, t, n) => {
  if (!e && !t) return null;
  if (!e) return n ? t : { ...t };
  if (!t) return n ? e : { ...e };
  const r = Math.min(e.colStart, t.colStart), o = Math.min(e.rowStart, t.rowStart), a = Math.max(e.colEnd, t.colEnd), i = Math.max(e.rowEnd, t.rowEnd);
  let l = n;
  return l ? (l.colStart = r, l.rowStart = o, l.colEnd = a, l.rowEnd = i) : l = { colStart: r, rowStart: o, colEnd: a, rowEnd: i }, l;
}, $e = (e, t) => {
  if (!t || t.length === 0) return e;
  const n = { ...e };
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    Te(n, o) && (n.rowStart = Math.min(n.rowStart, o.rowStart), n.colStart = Math.min(n.colStart, o.colStart), n.rowEnd = Math.max(n.rowEnd, o.rowEnd), n.colEnd = Math.max(n.colEnd, o.colEnd));
  }
  return n;
}, Rt = [null, null], kt = (e, t, n) => {
  if (e[0].value === e[1].value) return t;
};
function ze(e, t = 2, n, r = P.Row, o) {
  let a = [...e];
  if (t <= 0 || e.length <= 1) return a;
  let i = r === P.Column, l = 0, s = !1;
  do {
    const p = a.sort(ut(i ? P.Row : P.Column));
    a = [], a.push(p[0]);
    const w = p.length;
    let g = 0, f = p[0], y = f.colStart, x = f.rowStart, A = f.colEnd, U = f.rowEnd;
    for (let B = 1; B < w; B++) {
      const O = p[B];
      let J = !1;
      if (J = i ? f && x === O.rowStart && U === O.rowEnd && A + 1 === O.colStart : f && y === O.colStart && A === O.colEnd && U + 1 === O.rowStart, J) {
        let b = { colStart: y, rowStart: x, colEnd: i ? O.colEnd : A, rowEnd: i ? U : O.rowEnd };
        if (f.value !== void 0 && (b.value = f.value), n) {
          const u = o ?? [null, null];
          u[0] = f, u[1] = O, b = n(u, b, r);
        }
        if (b) {
          a[g] = b, s = !0, f = b, y = f.colStart, x = f.rowStart, A = f.colEnd, U = f.rowEnd;
          continue;
        }
      }
      a[++g] = O, f = O, y = f.colStart, x = f.rowStart, A = f.colEnd, U = f.rowEnd;
    }
    l++, i = !i, l === 1 && (s = !0);
  } while (l < t && s && a.length > 1);
  return a;
}
Object.freeze(Object.defineProperty({ __proto__: null, EmptyCell: _t, EmptyRange: Ot, cellToRange: (e, t) => {
  if (!e) return null;
  let n = t;
  return n || (n = { ...e }, delete n.colIndex, delete n.rowIndex), n.colStart = e.colIndex ?? 0, n.rowStart = e.rowIndex ?? 0, n.colEnd = e.colIndex ?? 0, n.rowEnd = e.rowIndex ?? 0, n;
}, columnFirstCellComparator: je, columnFirstRangeComparator: st, createCellComparator: (e = P.Row, t = !1) => t ? e !== P.Column ? Fe : De : e !== P.Column ? Pe : je, createConflatingRanges: (e, t = !1) => {
  const n = [];
  let r, o, a = Number.MIN_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER;
  return { append: (l, s, p) => {
    let w = !0;
    const g = p !== void 0;
    if (g) {
      const x = e ? e(o, p, t) : o === p ? p : void 0;
      x === void 0 ? w = !1 : p = x;
    }
    if (w && s === i + 1 && l === a) return t ? r.rowEnd = s : r.colEnd = s, i = s, void (o = p);
    r && n.push(r);
    const f = t ? l : s, y = t ? s : l;
    r = { colStart: f, rowStart: y, colEnd: f, rowEnd: y }, g && (r.value = p), a = l, i = s, o = p;
  }, done: (l) => (r && (n.push(r), r = null), l ? ze(n, 3, l === !0 ? kt : l, t ? P.Column : P.Row, Rt) : n) };
}, createRangeComparator: ut, defaultRange: (e, t, n) => e ? n ? (n.colStart = e.colStart ?? t.colStart, n.rowStart = e.rowStart ?? t.rowStart, n.colEnd = e.colEnd ?? t.colEnd, n.rowEnd = e.rowEnd ?? t.rowEnd, n) : { colStart: e.colStart ?? t.colStart, rowStart: e.rowStart ?? t.rowStart, colEnd: e.colEnd ?? t.colEnd, rowEnd: e.rowEnd ?? t.rowEnd } : t, extendRangeToIntersectingRanges: $e, extendRangeToUnionRanges: (e, t) => {
  if (!t || t.length === 0) return e;
  let n = e, r = null;
  for (; !ve(n, r); ) r = n, n = $e(r, t);
  return n;
}, indexOfCoords: (e, t) => {
  const n = { colStart: e.colIndex, rowStart: e.rowIndex, colEnd: e.colIndex, rowEnd: e.rowIndex };
  for (let r = t.length - 1; r >= 0; r--) if (Te(n, t[r])) return r;
  return -1;
}, intersectRanges: (e, t, n) => {
  if (!e) return n ? t : { ...t };
  if (!t) return n ? e : { ...e };
  if (!e && !t || e.rowStart > t.rowEnd || e.rowEnd < t.rowStart || e.colStart > t.colEnd || e.colEnd < t.colStart) return null;
  const r = Math.max(e.colStart, t.colStart), o = Math.max(e.rowStart, t.rowStart), a = Math.min(e.colEnd, t.colEnd), i = Math.min(e.rowEnd, t.rowEnd);
  let l = n;
  return l ? (l.colStart = r, l.rowStart = o, l.colEnd = a, l.rowEnd = i) : l = { colStart: r, rowStart: o, colEnd: a, rowEnd: i }, l;
}, isCellWithinRange: (e, t) => {
  if (!e || !t) return !1;
  const n = e.rowIndex;
  if (n < t.rowStart || n > t.rowEnd) return !1;
  const r = e.colIndex;
  return !(r < t.colStart || r > t.colEnd);
}, isEqualCells: Ue, isEqualRanges: ve, isEqualRangesArrays: Be, isEqualSelectionCoords: (e, t) => e === t || !(!e || !t) && e.rangeIndex === t.rangeIndex && !!Ue(e.cell, t.cell) && Be(e.ranges, t.ranges), isRangeWithinRange: (e, t) => !(e.rowStart < t.rowStart || e.rowEnd > t.rowEnd) && !(e.colStart < t.colStart || e.colEnd > t.colEnd), isRangesIntersect: Te, isSingleCell: (e) => !!e && e.rowEnd === e.rowStart && e.colStart === e.colEnd, isValidRange: (e) => !!e && !(typeof e.colStart != "number" || e.colStart < 0) && !(typeof e.colEnd != "number" || e.colEnd < e.colStart) && !(typeof e.rowStart != "number" || e.rowStart < 0) && !(typeof e.rowEnd != "number" || e.rowEnd < e.rowStart), mergeRangedValues: ze, reverseColumnFirstCellComparator: De, reverseRowFirstCellComparator: Fe, rowFirstCellComparator: Pe, rowFirstRangeComparator: ct, sanitizeRange: (e) => e ? { colStart: e.colIndex ?? e.colStart ?? 0, rowStart: e.rowIndex ?? e.rowStart ?? 0, colEnd: e.colIndex ?? e.colEnd ?? 0, rowEnd: e.rowIndex ?? e.rowEnd ?? 0 } : null, translateRange: (e, t = -e.rowStart, n = -e.colStart, r) => r ? (r.colStart = e.colStart + n, r.rowStart = e.rowStart + t, r.colEnd = e.colEnd + n, r.rowEnd = e.rowEnd + t, r) : { colStart: e.colStart + n, rowStart: e.rowStart + t, colEnd: e.colEnd + n, rowEnd: e.rowEnd + t }, unionRanges: ye, unionRangesArrays: (e, t, n) => {
  if (!e || e.length === 0) return null;
  if (e.length === 1 && !t) return e[0];
  let r = e[0];
  for (let o = 1; o < e.length; o++) r = ye(r, e[o], n);
  return t && (r = ye(r, t, n)), r;
} }, Symbol.toStringTag, { value: "Module" }));
const S = { html: "text/html", plain: "text/plain", png: "image/png" }, Lt = Object.freeze({ left: 0, top: 0 }), At = Object.freeze({ left: 0, top: 0, bottom: 0, right: 0 }), Mt = Object.freeze({ x: 0, y: 0, width: 0, height: 0 });
Object.freeze(Object.defineProperty({ __proto__: null, EmptyBounds: Mt, EmptyRect: At, EmptyTopLeft: Lt }, Symbol.toStringTag, { value: "Module" }));
function jt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || (function(n) {
    return n.$$typeof === Pt;
  })(e);
}
const Pt = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Ft(e) {
  return /* @__PURE__ */ (function(t) {
    return !!t && typeof t == "object";
  })(e) && !jt(e);
}
function re(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Y((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
  var n;
}
function Dt(e, t, n) {
  return e.concat(t).map(function(r) {
    return re(r, n);
  });
}
function Ke(e) {
  return Object.keys(e).concat((function(t) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.propertyIsEnumerable.call(t, n);
    }) : [];
  })(e));
}
function Ve(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Ut(e, t, n) {
  const r = {};
  return n.isMergeableObject(e) && Ke(e).forEach(function(o) {
    r[o] = re(e[o], n);
  }), Ke(t).forEach(function(o) {
    (function(a, i) {
      return Ve(a, i) && !(Object.hasOwnProperty.call(a, i) && Object.propertyIsEnumerable.call(a, i));
    })(e, o) || (Ve(e, o) && n.isMergeableObject(t[o]) ? r[o] = (function(a, i) {
      if (!i.customMerge) return Y;
      const l = i.customMerge(a);
      return typeof l == "function" ? l : Y;
    })(o, n)(e[o], t[o], n) : r[o] = re(t[o], n));
  }), r;
}
function Y(e, t, n) {
  (n = n || {}).arrayMerge = n.arrayMerge || Dt, n.isMergeableObject = n.isMergeableObject || Ft, n.cloneUnlessOtherwiseSpecified = re;
  const r = Array.isArray(t);
  return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Ut(e, t, n) : re(t, n);
}
Y.all = function(e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function(n, r) {
    return Y(n, r, t);
  }, {});
};
const ge = Object.freeze([]), Bt = Object.freeze({}), qe = (e) => e, fe = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
  let t = 16 * Math.random() | 0;
  return (e === "x" ? t : 3 & t | 8).toString(16);
}), $t = (e) => 1 * e, dt = (e, t) => e === t || !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((n, r) => n === t[r]), ne = (e) => typeof e == "object" && !Array.isArray(e) && e !== null, ft = (e) => typeof e != "object" || Array.isArray(e) || e === null ? e : (Object.keys(e).forEach(function(t) {
  e[t] && typeof e[t] == "object" ? ft(e[t]) : e[t] !== null && e[t] !== void 0 || delete e[t], typeof e[t] == "object" && Object.keys(e[t]).length === 0 && delete e[t];
}), Object.keys(e).length === 0 ? null : e), zt = (e, t) => !(e !== t && !dt(e, t)) || !!e.isEqual?.(t), pt = (e, t, n = zt) => {
  if (e == null || e === t) return null;
  if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) return n(e, t) ? null : e;
  const r = Object.keys(e), o = r.length;
  if (o === 0) return null;
  let a = !1;
  for (let i = 0; i < o; i++) {
    const l = r[i];
    pt(e[l], t?.[l], n) === null && (a = !0, delete e[l]);
  }
  return a && Object.keys(e).length === 0 ? null : void 0;
}, Ge = typeof performance == "object" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), We = (e) => e == null, Ye = (e, t) => !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top), Je = !(typeof window > "u" || !window.document || !window.document.createElement), k = { Windows: "windows", MacOS: "macos", IOS: "ios", Linux: "linux", Android: "android", Safari: "safari", Firefox: "firefox", Node: "node", Unknown: "unknown" }, oe = () => {
  if (ht()) return k.Node;
  const e = globalThis.navigator !== void 0 && globalThis.navigator.userAgent ? globalThis.navigator.userAgent.toLowerCase() : "";
  return e ? /(win32|win64|windows|wince)/i.test(e) ? k.Windows : /(macintosh|macintel|macppc|mac68k|macos)/i.test(e) ? k.MacOS : /(iphone|ipad|ipod)/i.test(e) ? k.IOS : /android/.test(e) ? k.Android : /linux/.test(e) ? k.Linux : /^((?!chrome|android|).)*safari/i.test(e) ? k.Safari : /^((?!chrome|android|Seamonkey).)*firefox/i.test(e) ? k.Firefox : k.Unknown : k.Unknown;
};
function ht() {
  return typeof process < "u" && process.release?.name === "node" || (typeof process < "u" && process.browser, !1);
}
const He = (e, t = !1) => (document.hasFocus() || t) && (e === document.activeElement || e?.contains(document.activeElement)), Kt = Object.freeze(Object.defineProperty({ __proto__: null, EmptyArray: ge, EmptyObject: Bt, OSType: k, arrayMove: function(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}, asNumber: (e) => {
  const t = $t(e);
  return Number.isFinite(t) ? t : 0;
}, camelToPrettyCase: (e) => e.length === 1 ? e.toUpperCase() : e.replace(/([A-Z])/g, " $1").replace(/^./, function(t) {
  return t.toUpperCase();
}).trim(), canUseDOM: Je, cancelTimeout: (e) => {
  cancelAnimationFrame(e.id);
}, castToString: (e) => e == null || e === void 0 ? "" : typeof e != "string" ? "" + e : e, cloneObject: (e) => We(e) ? e : JSON.parse(JSON.stringify(e)), consoleWithNoSource: (...e) => new Promise((t) => {
  setTimeout(() => {
    Function("console.log.apply(console, arguments)").apply(null, e), t();
  });
}), debounce: function(e, t = 300, n = !1) {
  let r, o, a, i, l = 0;
  function s() {
    let w = Date.now() - l;
    w < t && w >= 0 ? r = setTimeout(s, t - w) : (r = null, n || (i = e.apply(a, o), a = o = null));
  }
  t == null && (t = 100);
  const p = function() {
    a = globalThis, o = arguments, l = Date.now();
    var w = n && !r;
    return r || (r = setTimeout(s, t)), w && (i = e.apply(a, o), a = o = null), i;
  };
  return p.clear = function() {
    r && (clearTimeout(r), r = null);
  }, p.flush = function() {
    r && (i = e.apply(a, o), a = o = null, clearTimeout(r), r = null);
  }, p;
}, deepEqual: function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    let r, o, a;
    if (Array.isArray(t)) {
      if (r = t.length, r != n.length) return !1;
      for (o = r; o-- !== 0; ) if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t instanceof Map && n instanceof Map) {
      if (t.size !== n.size) return !1;
      for (o of t.entries()) if (!n.has(o[0])) return !1;
      for (o of t.entries()) if (!e(o[1], n.get(o[0]))) return !1;
      return !0;
    }
    if (t instanceof Set && n instanceof Set) {
      if (t.size !== n.size) return !1;
      for (o of t.entries()) if (!n.has(o[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
      if (r = t.length, r != n.length) return !1;
      for (o = r; o-- !== 0; ) if (t[o] !== n[o]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
    for (o = r; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(n, a[o])) return !1;
    for (o = r; o-- !== 0; ) {
      let i = a[o];
      if ((i !== "_owner" || !t.$$typeof) && !e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t != t && n != n;
}, deepFreeze: function e(t) {
  return Object.freeze(t), Object.keys(t).forEach((n) => {
    typeof t[n] != "object" || t[n] === null || Object.isFrozen(t[n]) || e(t[n]);
  }), t;
}, deepMerge: Y, diffValues: (e, t) => {
  const n = {}, r = Object.keys(t), o = r.length;
  for (let a = 0; a < o; a++) {
    const i = r[a], l = e[i], s = t[i];
    l !== s && (n[i] = l === void 0 ? s : l);
  }
  return Object.keys(n).length === 0 ? null : n;
}, findEqualOrGreater: function(e, t, n = qe) {
  let r = 0, o = e.length - 1;
  for (; r <= o; ) {
    let a = Math.floor((r + o) / 2), i = n(e[a]);
    if (i === t) return a;
    i < t ? r = a + 1 : o = a - 1;
  }
  return r;
}, findEqualOrLesser: function(e, t, n = qe) {
  let r = e.length - 1, o = 0;
  for (; r >= o; ) {
    let a = Math.floor((r + o) / 2), i = n(e[a]);
    if (i === t) return a;
    i > t ? r = a - 1 : o = a + 1;
  }
  return r;
}, findNextStep: (e, t = !0, n = 15, r = 10, o = 400) => {
  const a = Math.max(e - r, 0) + (t ? 1 : -1);
  return Math.min(o, Math[t ? "ceil" : "floor"](a / n) * n + r);
}, getDPI: () => {
  let e = 1;
  return typeof window == "object" && (e = window.devicePixelRatio || 1), e;
}, getFromPath: (e, t) => {
  const n = t.split(".");
  let r = e;
  const o = n.length;
  for (let a = 0; a < o; a++) {
    const i = n[a];
    if (!r) return null;
    let l = r[i];
    if (typeof l == "function" && (l = l.bind(r)()), !l || !ne(l)) return l;
    r = l;
  }
  return r ?? null;
}, getOS: oe, hasFocus: He, isDefined: (e) => e != null, isEmpty: (e) => e == null || e === "", isEqualArrays: dt, isEqualBounds: (e, t) => e === t || !(e && !t || t && !e) && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height, isEqualObjectKeys: (e, t) => {
  if (e === t) return !0;
  if (e && !t || t && !e) return !1;
  const n = Object.keys(e), r = n.length;
  if (r !== Object.keys(t).length) return !1;
  for (let o = 0; o < r; o++) {
    const a = n[o];
    if (e[a] !== t[a]) return !1;
  }
  return !0;
}, isNode: ht, isNullOrUndefined: We, isNumeric: (e) => {
  const t = 1 * e;
  return Number.isFinite(t) && typeof t == "number";
}, isObject: ne, isPromiseLike: (e) => !!e && typeof e.then == "function", isRectInsideRect: (e, t) => e.top >= t.top && e.bottom <= t.bottom && e.left >= t.left && e.right <= t.right, isRectIntersect: Ye, mergeContentful: (...e) => {
  const t = e.length;
  if (t > 0 && e[t - 1] !== void 0 && !ne(e[t - 1])) return e[t - 1];
  let n = e[0] || {};
  for (let r = 1; r < t; r++) n = Y(n, e[r] || {}, { arrayMerge: (o, a) => [...a] });
  return n;
}, nextTick: (e) => {
  typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(() => {
    e();
  }) : (typeof setImmediate == "function" ? setImmediate : setTimeout)(() => {
    e();
  });
}, openFileDialog: (e = "*.*") => new Promise((t, n) => {
  if (!Je) return void n("Unable to open dialog with no dom.");
  const r = document.createElement("input");
  r.type = "file", r.accept = e;
  let o = null, a = !1;
  globalThis.addEventListener?.("focus", () => {
    setTimeout(() => {
      o || a || (a = !0, t(null));
    }, 1e3);
  }, { once: !0, passive: !0 }), r.onchange = () => {
    if (o = r.files[0], o) {
      if (a) return void console.warn("File open detected after faux cancel.", o);
      t(o);
    }
  }, r.autofocus = !0, r.click();
}), rafThrottle: (e) => {
  let t, n = !1, r = function() {
    n = !1, e(t);
  };
  return function(o) {
    t = o, t && t.persist && t.persist(), n || (n = !0, requestAnimationFrame(r));
  };
}, removeEmptyProperties: ft, removeEqualValues: pt, removeListenerAll: (e) => {
  if (!e) return ge;
  const t = e.length;
  for (let n = 0; n < t; n++) {
    const r = e[n];
    r && r();
  }
  return ge;
}, requestTimeout: (e, t) => {
  const n = Ge(), r = { id: requestAnimationFrame(function o() {
    Ge() - n >= t ? e.call(null) : r.id = requestAnimationFrame(o);
  }) };
  return r;
}, roundAccurately: (e, t = 0) => {
  if (e == null || !isFinite(e)) return null;
  const n = 10 ** t;
  return Number(Math.round(e * n) / n);
}, setToPath: (e, t, n) => {
  const r = t.split(".");
  let o = e;
  if (!o) throw new Error("Can not set path to a null path.");
  const a = r.length;
  for (let i = 0; o && i < a - 1; i++) {
    const l = r[i];
    let s = o[l];
    if (s == null && (s = {}, o[l] = s), !ne(s)) throw new Error("Can not set path to a non object path.");
    o = s;
  }
  if (typeof n != "number" && typeof n != "boolean" && typeof n != "string" && !ne(n)) throw new Error(\`Can not set path to \${n} that is not a a supported primitive.\`);
  return o[r[a - 1]] = n, e;
}, splitNumber: (e) => {
  let t = Math.abs(e);
  if (isNaN(t) || !isFinite(e)) return null;
  let n = 0 | t, r = t - n, o = 0, a = 0, i = 1;
  if (r > 5e-8) for (; a < 8 && Math.abs(o / i - r) > 5e-8; ) a++, i *= 10, o = Math.round(r * i);
  return { ip: Math.trunc(e), fp: o, ipLength: Math.ceil(Math.log10(n + 1)), fpLength: a };
}, subtractRect: (e, t, n = !1) => {
  if (!t) return [e];
  if (!Ye(e, t)) return [];
  const r = [];
  let o = e;
  const a = () => {
    t.top > o.top && t.top < o.bottom && (r.push({ ...o, bottom: t.top }), o = { ...o, top: t.top });
  }, i = () => {
    t.bottom > o.top && t.bottom < o.bottom && (r.push({ ...o, top: t.bottom }), o = { ...o, bottom: t.bottom });
  }, l = () => {
    t.right > o.left && t.right < o.right && (r.push({ ...o, left: t.right }), o = { ...o, right: t.right });
  }, s = () => {
    t.left > o.left && t.left < o.right && (r.push({ ...o, right: t.left }), o = { ...o, left: t.left });
  };
  return n ? (s(), l(), a(), i()) : (a(), i(), l(), s()), r;
}, textToKey: (e) => e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(), throttle: function(e, t) {
  let n = null;
  return (...r) => {
    const o = Date.now();
    (!n || o - n >= t) && (n = o, e(...r));
  };
}, toSafeJSON: function e(t) {
  if (t === null || typeof t != "object") return t;
  if (typeof t.toJSON == "function") return t.toJSON();
  if (Array.isArray(t)) return t.map((r) => e(r));
  if (typeof t.toString == "function" && t.toString !== Object.prototype.toString) return t.toString();
  const n = {};
  for (const r in t) t.hasOwnProperty(r) && (n[r] = e(t[r]));
  return n;
}, transpose: (e) => {
  if (!e) return e;
  const t = e.length, n = e[0].length, r = [];
  for (let o = 0; o < n; o++) r[o] = Array(t);
  for (let o = 0; o < t; o++) for (let a = 0; a < n; a++) r[a][o] = e[o][a];
  return r;
}, uuidV4: fe, validEnumValue: (e, t) => {
  if (!Object.values(e).includes(t)) throw new Error(\`Invalid type: \${t ?? "null"}. Must be one of: \${Object.values(t).join(", ")}.\`);
}, whenFocus: async (e, t = !1) => new Promise((n) => {
  He(e, t) ? n(!0) : e.addEventListener("focusin", () => {
    n(!0);
  }, { once: !0 }), e.focus();
}) }, Symbol.toStringTag, { value: "Module" }));
Object.freeze(Object.defineProperty({ __proto__: null, MESSAGE_ERROR_INVALID_ARG: (e) => \`Invalid argument: '\${e}'.\` }, Symbol.toStringTag, { value: "Module" }));
const mt = (e) => {
  const t = new Uint8Array(e), n = t.byteLength;
  let r = "";
  for (let o = 0; o < n; o++) r += String.fromCharCode(t[o]);
  if (typeof window < "u" && typeof globalThis.btoa == "function") return globalThis.btoa(r);
  if (typeof Buffer < "u") return Buffer.from(r, "binary").toString("base64");
  throw new Error("Unsupported environment");
}, _e = (e) => new Promise((t, n) => {
  if (e) if (typeof FileReader < "u") {
    const r = new FileReader();
    r.onload = () => {
      t(r.result);
    }, r.onerror = () => {
      n(r.error);
    }, r.readAsText(e);
  } else if (typeof Buffer < "u") {
    const r = (o) => Buffer.from(o).toString("utf-8");
    e.arrayBuffer().then((o) => {
      t(r(o));
    }).catch((o) => {
      n(o);
    });
  } else n(new Error("Unsupported environment"));
  else t("");
});
Object.freeze(Object.defineProperty({ __proto__: null, DEFAULT_MIME_TYPE: "*/*", arrayBufferToBase64: mt, base64ToArrayBuffer: (e) => {
  const t = typeof window < "u" && typeof globalThis.atob == "function" ? globalThis.atob(e) : Buffer.from(e, "base64").toString("binary"), n = t.length, r = new Uint8Array(n);
  for (let o = 0; o < n; o++) r[o] = t.charCodeAt(o);
  return r.buffer;
}, blobToString: _e }, Symbol.toStringTag, { value: "Module" }));
const wt = "data:image/png;base64,", yt = "Unable to resolve image.", Xe = (e) => new Promise(async (t, n) => {
  let r = null;
  try {
    r = new Image(), r.src = e, r.addEventListener("load", function() {
      t({ width: r.naturalWidth, height: r.naturalHeight });
    }, { once: !0 }), r.addEventListener("error", function() {
      URL.revokeObjectURL(e), n("Invalid Image");
    }, { once: !0 }), await r.decode("sync");
  } catch {
    r?.src && URL.revokeObjectURL(r.src);
  }
  r || n(yt);
}), be = "image/svg+xml";
Object.freeze(Object.defineProperty({ __proto__: null, DATA_URL_PNG_PREFIX: wt, getImageDataUrl: (e, t = 1) => new Promise(async (n, r) => {
  let o = null;
  try {
    o = new Image(), o.src = e, o.addEventListener("load", function() {
      try {
        const a = document.createElement("canvas");
        a.width = o.naturalWidth, a.height = o.naturalHeight, a.getContext("2d").drawImage(o, 0, 0);
        const i = a.toDataURL("image/png", t);
        n({ elemImg: o, dataUrl: i });
      } catch (a) {
        URL.revokeObjectURL(e), r(a);
      }
    }, { once: !0 }), o.addEventListener("error", function() {
      URL.revokeObjectURL(e), r("Invalid Image");
    }, { once: !0 }), await o.decode("sync");
  } catch {
    o?.src && URL.revokeObjectURL(o.src);
  }
  o || r(yt);
}), loadImageDetails: async (e, t = null) => {
  let n = null;
  const r = async () => {
    try {
      const a = t ?? "image/*", i = URL.createObjectURL(new Blob([e], { type: a })), l = await Xe(i);
      n = { mimeType: a, naturalSize: l, asUrl: i };
    } catch {
    }
  }, o = async () => {
    try {
      const a = new TextDecoder().decode(e), i = URL.createObjectURL(new Blob([a], { type: be })), l = await Xe(i);
      n = { mimeType: t ?? be, naturalSize: l, asUrl: i, asSVGText: a };
    } catch {
    }
  };
  if (t === be ? await o() : t.startsWith("image/") ? await r() : (await r(), n || await o()), !n) throw new Error("Failed to load image");
  return n;
} }, Symbol.toStringTag, { value: "Module" }));
var Ze, Qe;
(Qe = Ze || (Ze = {})).resolveTypedUpdates = (e, t, n, r) => {
  if (e === null) return e;
  if (e === void 0) return r;
  let o = e;
  if (t?.shorthand) {
    const s = t?.shorthand(e, n);
    s !== void 0 && (o = s);
  }
  if (o !== null && t?.getSubType) {
    const s = t.getSubType(o);
    s && (t = s);
  }
  const a = t?.properties, i = t?.arrayType ?? !1;
  let l = o;
  if (t && t.merge && l && r) l = t.merge(l, r, n);
  else if (!i && a) {
    const s = Object.keys({ ...o, ...r });
    l = null;
    const p = s.length;
    for (let w = 0; w < p; w++) {
      const g = s[w];
      let f, y = o[g];
      if (y !== void 0) {
        const x = a[g];
        f = x ? (0, Qe.resolveTypedUpdates)(y, x, n, r?.[g]) : y;
      } else f = r?.[g];
      f != null && (l = l ?? {}, l[g] = f);
    }
  }
  return l;
};
const et = \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`, Ee = \`You do not have permissions to access the clipboard.
All copy and paste operations will be limited to the browser tab.\`, gt = { Safari: \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`, Perms: Ee, PermsWrite: oe() === k.Safari ? et : Ee, PermsRead: oe() === k.Safari ? et : Ee }, Se = async () => new Promise((e) => {
  document.hasFocus() ? e() : globalThis.addEventListener?.("focus", () => {
    e();
  }, { once: !0 }), document.activeElement.focus?.();
}), xe = async (e, t, n) => {
  if (oe() === k.Safari) return await n(new Error(gt.Safari));
  try {
    const r = async (i) => {
      try {
        return await i();
      } catch (l) {
        if (l.message?.includes("Document is not focused")) return !1;
        throw l;
      }
    }, o = await globalThis?.navigator?.permissions?.query({ name: e, allowWithoutGesture: !0, allowWithoutSanitization: !0 });
    let a = !1;
    if (o.state === "prompt" && (a = await r(t)), a || o.state !== "granted" || (a = await t()), !a) return await n(new Error(o.state));
  } catch (r) {
    return r.message === "No valid data on clipboard" || r.name === "DataError" ? void 0 : await n(r);
  }
}, bt = async (e) => {
  try {
    return await e.read({ unsanitized: [S.html] });
  } catch {
  }
  return await e.read();
}, Vt = async (e, t) => {
  if (!e) return null;
  const n = await bt(e);
  let r = !1;
  for (let o = 0; !r && n && o < n.length; o++) if (r = n[o].types.includes(t), r)
    return await n[o].getType(t);
  return r ? void 0 : null;
};
if (!globalThis.ClipboardItem) {
  const e = (n, r) => new Blob([r], { type: n });
  class t {
    constructor(r, o) {
      this._items = {}, this._types = Object.keys(r);
      const a = {}, i = Object.keys(r);
      for (let l = 0; l < i.length; l++) {
        const s = i[l];
        let p = r[s];
        a[s] = typeof p == "string" ? e(s, p) : p;
      }
      this._items = a, this._presentationStyle = o?.presentationStyle ?? "unspecified";
    }
    get types() {
      return this._types;
    }
    getType(r) {
      return Promise.resolve(this._items[r]);
    }
    supports(r) {
      return !0;
    }
  }
  globalThis.ClipboardItem = t;
}
const Oe = async (e, t = S.html) => new Promise(async (n, r) => {
  try {
    const o = await Vt(e, t);
    if (o) {
      const a = new FileReader();
      a.onload = () => {
        n(a.result);
      }, a.onerror = () => {
        n("");
      }, a.readAsText(o);
    } else n("");
  } catch (o) {
    r(o);
  }
}), tt = async (e, t = S.html) => {
  const n = await Oe(e, t);
  if (!n) return null;
  let r = null;
  try {
    r = new DOMParser().parseFromString(n, S.html);
  } catch {
    console.warn("Can't parse html from clipboard.");
  }
  return r;
}, qt = async (e) => {
  e && await e.writeText("");
}, ae = "clipboard-uuid", Q = "web text/uuid", nt = (e) => \`<div style="display:none" \${ae}="\${e}"/>\`, Gt = (e, t) => {
  let n = null;
  try {
    const r = new DOMParser().parseFromString(t, S.html);
    r.body.firstElementChild.setAttribute(ae, e), n = r.getElementsByTagName("body")[0].innerHTML;
  } catch (r) {
    console.warn("Can't embed uuid.", r);
  }
  return n;
}, rt = (e, t) => {
  if (!t || !e) return !1;
  try {
    const n = t.querySelectorAll(\`[\${ae}="\${e}"]\`);
    if (n && n.length === 1) return !0;
    if (t.querySelector("parsererror")) throw new Error("We are unable to parse node");
    return !1;
  } catch {
    return !1;
  }
};
class ot {
  constructor(t) {
    if (t?.nativeClipboard === void 0 || t?.nativeClipboard === !0) try {
      this._nativeClipboard = globalThis?.navigator.clipboard;
    } catch {
      t?.nativeClipboard === !0 && console.warn("NativeClipboard option set to true but no native clipboard available.");
    }
    else this._nativeClipboard = t?.nativeClipboard === !1 ? null : t?.nativeClipboard;
    this._disableCheckOnFocus = t?.disableCheckOnFocus ?? !1, this._init();
  }
  async _checkForChanges() {
    this._nativeClipboard && this._state && !this._disableCheckOnFocus && await xe("clipboard-read", async () => {
      await Se();
      const t = await Oe(this._nativeClipboard, Q);
      if (!this._state || t && t === this._state.uuid) return !0;
      const n = await tt(this._nativeClipboard, S.html);
      return !this._state || (rt(this._state.uuid, n) || this.clear(), !0);
    }, async (t) => {
      t?.message === "denied" || t.message?.includes("Document is not focused") || oe() === k.Safari || console.warn("Unable to detect clipboard changes: ", t);
    });
  }
  _init() {
    const t = this;
    this._listeners = /* @__PURE__ */ new Map(), this._listenersCapture = /* @__PURE__ */ new Map(), this._state = null, this._nativeClipboard && (this._onFocus = () => {
      t._checkForChanges();
    }, this._onBlur = () => {
      globalThis.addEventListener?.("focus", t._onFocus, { once: !0 });
    }, globalThis.addEventListener?.("blur", this._onBlur), this._nativeClipboard.addEventListener("clipboardchange", (n) => {
      t._checkForChanges();
    }));
  }
  async read() {
    if (!this._nativeClipboard) return this._state?.items ?? null;
    const t = this;
    return await xe("clipboard-read", async () => {
      if (await Se(), this._state?.uuid) {
        const n = await Oe(this._nativeClipboard, Q);
        if (n && n === t._state.uuid) return !0;
        const r = await tt(this._nativeClipboard, S.html);
        if (rt(t._state?.uuid, r)) return !0;
      }
      return t._state = { items: await bt(this._nativeClipboard), uuid: null, ref: null }, this.dispatchEvent(new Event("clipboardread")), !0;
    }, async (n) => {
      this.dispatchEvent(new Event("clipboarderrorread"));
    }), this._state?.items ?? [];
  }
  async write(t) {
    return this._write({ uuid: fe(), items: t, ref: null });
  }
  async _write(t) {
    if (!this._nativeClipboard) return this._state = t, this.dispatchEvent(new Event("clipboardwrite")), this.dispatchEvent(new Event("clipboardchange")), null;
    const n = this, r = [], o = t.uuid;
    let a = t.items ?? [];
    const i = () => {
      n._state = { uuid: o, ref: t.ref, items: r }, n.dispatchEvent(new Event("clipboardwrite")), n.dispatchEvent(new Event("clipboardchange"));
    };
    await xe("clipboard-write", async () => {
      await Se(), o && a.length === 0 && (a.push(new ClipboardItem({ [Q]: new Blob([o], { type: Q }) })), a.push(new ClipboardItem({ [S.html]: new Blob([nt(o)], { type: S.html }) })));
      for (let l = 0; l < Math.min(1, a.length); l++) {
        const s = a[l];
        let p = s.types.indexOf(S.html), w = null;
        if (p !== -1) {
          const y = await s.getType(S.html);
          w = await _e(y), w && (w = Gt(o, w));
        }
        if (!w && s.types.includes(S.plain)) {
          const y = await s.getType(S.plain);
          if (y) {
            let x = null;
            typeof y == "string" ? (console.warn("text as string", y), x = y) : x = await _e(y), x && (w = \`<div \${ae}="\${o}">\${x}</div>\`);
          }
        }
        if (!w && s.types.includes(S.png)) {
          const y = await s.getType(S.png), x = mt(await y.arrayBuffer());
          w = \`<div \${ae}="\${o}"><img src="\${wt + x}"/></div>\`;
        }
        !w && o && (w = nt(o));
        const g = new Blob([w ?? ""], { type: S.html }), f = {};
        for (let y = 0; y < s.types.length; y++) {
          const x = s.types[y];
          f[x] = y === p ? g : s.getType(x);
        }
        w && p === -1 && (f[S.html] = g), o && (f[Q] = new Blob([o], { type: Q })), r.push(new ClipboardItem(f));
      }
      try {
        r && r.length !== 0 ? await this._nativeClipboard.write(r) : await qt(this._nativeClipboard);
      } catch (l) {
        l.message?.includes("Document is not focused") || console.warn("Unable to write to native clipboard: ", l);
      }
      return i(), !0;
    }, async (l) => {
      this.dispatchEvent(new Event("clipboarderrorwrite")), i();
    });
  }
  async writeReference(t) {
    if (!t) return void this.clear();
    let n = null;
    const r = {};
    try {
      const a = await t.toText?.() ?? null;
      a && (r[S.plain] = new Blob([a ?? ""], { type: S.plain }));
    } catch (a) {
      n = a;
    }
    try {
      const a = await t.toHtml?.() ?? null;
      a && (r[S.html] = new Blob([a], { type: S.html }));
    } catch (a) {
      n = a, console.warn("export to html", a);
    }
    try {
      const a = await t.toImage?.() ?? null;
      a && (r[S.png] = a);
    } catch (a) {
      n = a, console.warn("export to png", a);
    }
    const o = this._write({ uuid: fe(), ref: t, items: Object.keys(r).length > 0 ? [new ClipboardItem(r)] : null });
    if (n) throw n;
    return o;
  }
  clear(t = !1) {
    this._state && (this._state = null, t && this._write({ uuid: null, ref: null, items: null }), this.dispatchEvent(new Event("clipboardwrite")), this.dispatchEvent(new Event("clipboardchange")));
  }
  async readReference() {
    return await this.read(), this._state?.ref ?? null;
  }
  readText() {
    return new Promise(async (t, n) => {
      const r = await this.read();
      let o = null;
      for (let i = 0; !o && r && i < r.length; i++) r[i].types.includes(S.plain) && (o = await r[i].getType(S.plain));
      if (!o) return void t("");
      const a = new FileReader();
      a.onload = () => {
        t(a.result);
      }, a.readAsText(o), a.onerror = (i) => {
        n(i);
      };
    });
  }
  async writeText(t) {
    const n = [new ClipboardItem({ [S.plain]: new Blob([t], { type: S.plain }) })];
    return this._write({ uuid: fe(), items: n, ref: null });
  }
  addEventListener(t, n, r = {}) {
    const o = r?.capture ? this._listenersCapture : this._listeners;
    let a = o.get(t);
    a || (a = /* @__PURE__ */ new Map(), o.set(t, a)), a.set(n, typeof r == "boolean" ? {} : r);
  }
  dispatchEvent(t) {
    if (!t) return;
    const n = (r) => {
      const o = r.get(t.type);
      o && o.forEach((a, i) => {
        try {
          typeof i == "function" ? i(t) : i.handleEvent && i.handleEvent(t), a.once && o.delete(i);
        } catch (l) {
          console.warn(l);
        }
      });
    };
    return n(this._listenersCapture), n(this._listeners), !0;
  }
  removeEventListener(t, n, r) {
    const o = r?.capture ? this._listenersCapture : this._listeners, a = o.get(t);
    a && (a.delete(n), a.size === 0 && o.delete(t));
  }
  close() {
    globalThis.removeEventListener?.("focus", this._onFocus), globalThis.removeEventListener?.("blur", this._onBlur);
  }
}
var Ce;
(Ce = ot || (ot = {})).ErrorMessages = gt, Ce.Global = new Ce();
const Wt = "__SHEETXL";
let ee = null, se = null;
async function Yt() {
  if (ee)
    return ee;
  if (se) {
    if (await se, !ee)
      throw new Error("ESBuild initialization promise resolved, but instance is not available.");
    return ee;
  }
  let e, t;
  se = new Promise((n, r) => {
    e = n, t = r;
  });
  try {
    const { initialize: n } = await Promise.resolve().then(function() {
      return ln;
    });
    return ee = await n(), e(), ee;
  } catch (n) {
    throw console.error("Failed to import or initialize esbuild:", n), se = null, t(n), n;
  }
}
const Jt = {
  // ESBuild.TsconfigRaw =
  compilerOptions: {
    target: "esnext"
  }
};
async function Ht(e, t, n = "/script.js", r = Wt) {
  try {
    const o = await Yt(), a = "@sheetxl/primitives", i = \`
      export const FormulaContext = globalThis.\${r}?.FormulaContext;
      export const ScalarType = globalThis.\${r}?.ScalarType;
      export const Observable = globalThis.\${r}?.Observable;
      export const IRange = globalThis.\${r}?.IRange;
      export const FormulaError = globalThis.\${r}?.FormulaError;
      // Add more exports as needed
    \`, l = {
      // ESBuild.Plugin = {
      name: "sheetxl-esbuild-in-memory",
      setup(p) {
        const w = "sheetxl-" + (/* @__PURE__ */ new Date()).getTime();
        p.onResolve({ filter: new RegExp(\`^(\${n.replace("/", "\\\\/")}|\${a})$\`) }, (g) => ({
          path: g.path,
          namespace: w
        })), p.onResolve({ filter: /.*/ }, (g) => {
          if (g.namespace !== w)
            return console.warn(\`esbuild: Treating import "\${g.path}" as external.\`), { path: g.path, external: !0 };
        }), p.onLoad({ filter: /.*/, namespace: w }, (g) => {
          let f;
          if (g.path === n)
            f = t;
          else if (g.path === a)
            f = i;
          else
            return {
              errors: [{ text: \`Cannot load unknown path in \${w}: \${g.path}\` }]
            };
          return {
            contents: f,
            loader: "ts"
            // leave this as 'ts' so esbuild generates proper sourcemaps
          };
        });
      }
    }, s = await o.build({
      entryPoints: [n],
      // Use the virtual entry point
      bundle: !0,
      // IMPORTANT: Enable bundling
      write: !1,
      // IMPORTANT: Return result in memory
      format: "esm",
      // Output format
      plugins: [l],
      // TODO - later change to external and prepend when executing from ui
      sourcemap: "inline",
      // Generate separate source map string
      tsconfigRaw: Jt,
      // Pass the mapped options
      minify: !0,
      // sourcemap: 'external', // Generate separate source map string
      // Or use 'inline' if you prefer data URLs embedded in the code
      // To suppress warnings about dynamic import() if esbuild complains:
      // supported: { 'dynamic-import': true },
      platform: "neutral"
      // not really needed
    });
    if (s.outputFiles && s.outputFiles.length > 0)
      return s.outputFiles[0].text;
    throw s.errors && s.errors.length > 0 ? new Error(\`esbuild bundling failed: \${s.errors.map((p) => p.text).join(\`
\`)}\`) : new Error("esbuild did not produce an output file.");
  } catch (o) {
    throw console.error("esbuild bundling process failed:", o), o;
  }
}
const Xt = \`
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
\`, Zt = \`
  interface FirstTest {
    isTrue?: boolean;
  }
\`, Qt = async () => Zt, Et = /* @__PURE__ */ new Map([
  ["IReferenceRange", "r"],
  ["IRange", "l"]
]), St = /* @__PURE__ */ new Map([
  ["IWorkbook", "workbook"],
  ["ISheet", "sheet"],
  ["ICellRanges", "ranges"],
  ["ICellRange", "range"],
  ["IFormulaContext", "context"]
]), Ne = (e, t) => {
  Array.from(t.keys()).forEach((r) => {
    const o = t.get(r);
    t.set(\`\${e}.\${r}\`, o);
  });
}, en = /* @__PURE__ */ new Map([
  ["Scalar", "*"],
  ["FormulaError.Known", W.Error],
  ["Date", "Date"],
  ["JSON", "JSON"]
]), tn = /* @__PURE__ */ new Map([
  // Repeating
]), Re = "SheetXL";
Ne(Re, Et);
Ne(Re, St);
Ne(Re, tn);
const nn = /* @__PURE__ */ new Map([
  ["Promise", () => ({ async: !0 })],
  // ['PromiseLike', (): Partial<IFunction.ReturnTypeJSON> => {
  //   return { async: true };
  // }],
  ["Observable", () => ({ stream: !0 })]
]);
let ce = null;
async function rn() {
  if (ce)
    return ce;
  try {
    return await (await Promise.resolve().then(function() {
      return cn;
    })).initialize();
  } catch (e) {
    throw ce = null, e;
  } finally {
    ce = null;
  }
}
async function on(e) {
  const t = e?.source ?? null;
  if (!t) return null;
  const n = (e.disableBundle || e.declarationsOnly) ?? !1, r = [
    Qt(),
    //import('typescript'), // when bundled, but node check causes issues. We could bundle replace isNode but felt hacky
    rn()
  ], o = await Promise.all(r), a = o[0], i = o[1];
  let l = "", s = null;
  const p = [], w = {
    allowJs: !0,
    declaration: !1,
    sourceMap: !1,
    // was true but now bundler will do this
    inlineSourceMap: !1,
    inlineSources: !1,
    isolatedModules: !0,
    preserveConstEnums: !1,
    // types: ['WebWorker'],
    module: 99,
    //"esNext",
    noResolve: !0,
    emitDeclarationOnly: !1,
    target: i.ScriptTarget.ES2020
    // lib: ['webworker', 'es2020', 'esnext.asynciterable'], // Use the webworker lib instead of dom
  }, g = "script", f = \`\${g}.ts\`, y = "lib.d.ts", x = "global.d.ts", A = {
    [f]: t,
    [y]: Xt,
    [x]: a
  }, U = {
    getSourceFile: (c, m, L, F) => i.createSourceFile(c, A[c], i.ScriptTarget.Latest, !0),
    fileExists: (c) => A[c] !== void 0,
    readFile: (c) => A[c],
    writeFile: (c, m) => {
      A[c] = m;
    },
    // not used
    getCurrentDirectory: () => "./",
    getCanonicalFileName: (c) => c,
    useCaseSensitiveFileNames: () => !0,
    getDefaultLibFileName: (c) => y,
    getNewLine: () => \`
\`
  }, B = i.createProgram([f, x], w, U), O = B.getTypeChecker(), J = B.getSourceFile(f), b = B.emit();
  b.diagnostics.length > 0 && console.warn(b.diagnostics), l = A[\`\${g}.js\`];
  const u = (c, m, L, F) => {
    if (!c) {
      z(c, new Error(\`Type is not defined for '\${m?.name ?? "return"}'.\`));
      return;
    }
    if (c.kind === i.SyntaxKind.NumberKeyword)
      m.scalar = W.Number;
    else if (c.kind === i.SyntaxKind.StringKeyword)
      m.scalar = W.String;
    else if (c.kind === i.SyntaxKind.BooleanKeyword)
      m.scalar = W.Boolean;
    else if (c.kind === i.SyntaxKind.UndefinedKeyword || c.kind === i.SyntaxKind.NullKeyword || c.kind === i.SyntaxKind.VoidKeyword) {
      if (F) {
        z(c, new Error(\`'undefined' is not a valid type for input: '\${c?.parent?.name?.escapedText}'.\`));
        return;
      }
      m.scalar = W.Null;
    } else if (c.kind === i.SyntaxKind.BigIntKeyword)
      m.scalar = W.Number;
    else if (c.kind === i.SyntaxKind.AnyKeyword)
      m.scalar = W.Null;
    else if (c.kind === i.SyntaxKind.ArrayType) {
      const M = c.elementType;
      if (!M) {
        z(c, new Error(\`'Array' must be typed: '\${c?.parent?.name?.escapedText}'.\`));
        return;
      }
      m.arrayDepth = (m.arrayDepth ?? 0) + 1, u(M, m, L, F);
    } else if (c.kind !== i.SyntaxKind.TupleType) {
      if (c.kind === i.SyntaxKind.TypeReference) {
        const M = c.typeName?.getText?.() ?? null, V = Et.get(M);
        let q = !1;
        V && (m.range = V, q = !0);
        const G = en.get(M);
        if (G && (m.scalar = G), G !== void 0 && (q = !0), F) {
          const N = St.get(M);
          if (N)
            return N;
        } else {
          const N = nn.get(M);
          if (N) {
            const E = { ...m, ...N() };
            let I = 0;
            if (E.async && I++, E.stream && I++, I > 1) {
              z(c, new Error(\`'\${M}' cannot have multiple modifiers: '\${c?.parent?.name?.escapedText}'.\`));
              return;
            }
            m = E, q = !0;
          }
        }
        if (!q) {
          z("node", new Error(\`'\${M}' is not a valid type: '\${c?.parent?.name?.escapedText}'.\`));
          return;
        }
        const H = c.typeArguments;
        if (H) {
          if (H.length !== 1) {
            z(c, new Error(\`'\${M}' must be typed with exactly 1 type: '\${c?.parent?.name?.escapedText}'.\`));
            return;
          }
          u(H[0], m, L, F);
        }
      }
    }
  }, h = (c) => (i.getCombinedModifierFlags(c) & i.ModifierFlags.Export) !== 0, pe = (c) => (i.getCombinedModifierFlags(c) & i.ModifierFlags.Default) !== 0, $ = [], z = (c, m) => {
    $.push(m);
  };
  if (i.forEachChild(J, (c) => {
    if (h(c) && i.isFunctionDeclaration(c)) {
      const m = {}, L = {
        parameters: {}
      }, F = c?.name?.getText();
      try {
        m.name = F;
        const V = O.getSymbolAtLocation(c.name).getDocumentationComment(O);
        if (V && V.length > 0 && V[0].text) {
          let N = V[0].text;
          N = N.replace(/[\\r\\n]+/g, "\\\\n").trim(), L.summary = N;
        }
        const q = {};
        u(c.type, q, m, !1), m.returnType = q;
        const G = {};
        pe(c) && (G.default = !0, s = F), Object.keys(G).length > 0 && (m.behavior = G), m.parameters = [];
        const H = /* @__PURE__ */ new Map();
        for (let N = 0; N < c.parameters.length; N++) {
          const E = c.parameters[N], I = {};
          I.name = E.name?.getText();
          const X = u(E.type, I, m, !0);
          if (X) {
            if (m.parameters.length !== 0) {
              const ie = c?.parent?.name?.getText();
              z(c, new Error(\`'\${m.name}' contexts must be the first parameter: '\${ie}'.\`));
              return;
            }
            m.context = X;
            continue;
          }
          const he = !((E.initializer === void 0 || E.initializer === null) && (E.questionToken === void 0 || E.questionToken === null));
          let j;
          if (he && (I.optional = !0, E.initializer))
            try {
              E.initializer.kind === i.SyntaxKind.StringLiteral ? j = E.initializer.text : E.initializer.kind === i.SyntaxKind.NumericLiteral ? j = parseFloat(E.initializer.text) : E.initializer.kind === i.SyntaxKind.TrueKeyword || E.initializer.kind === i.SyntaxKind.FalseKeyword ? j = E.initializer.kind === i.SyntaxKind.TrueKeyword : E.initializer.kind === i.SyntaxKind.NullKeyword ? j = null : E.initializer.kind === i.SyntaxKind.ObjectLiteralExpression || E.initializer.kind === i.SyntaxKind.ArrayLiteralExpression ? j = E.initializer.getText() : j = E.initializer.getText?.();
            } catch (C) {
              console.warn(\`Couldn't extract default value for parameter '\${I.name}'\`, C);
            }
          E.dotDotDotToken && (I.rest = !0), m.parameters.push(I);
          const D = { description: "" };
          L.parameters[I.name] = D;
          const _ = O.getSymbolAtLocation(E.name).getDocumentationComment(O);
          _ && _.length > 0 && _[0].text && (D.description = _[0].text), j !== void 0 && (D.defaultValue = j), H.set(I.name, I);
        }
        if (c.jsDoc && c.jsDoc.length > 0) {
          const N = c.jsDoc, E = N.length;
          for (let I = 0; I < E; I++) {
            const X = N[I]?.tags;
            if (!X) continue;
            const he = X.length;
            for (let j = 0; j < he; j++) {
              const D = X[j];
              let _ = D?.tagName?.text;
              if (!_) continue;
              _ = _.toLowerCase();
              let C = D.comment;
              const ie = _ === "hidden";
              if (!(typeof C != "string" && !ie) && (typeof C == "string" && (C = C.replace(/[\\r\\n]+/g, "\\\\n").trim()), !(!ie && C && (C = C.split(/\\\\n/)[0], !C || C.length === 0)))) {
                if (C && typeof C == "string") {
                  const R = /\\{@link(code|plain)?\\s+([^}|]+)(?:\\s*\\|\\s*([^}]+))?\\}/g;
                  let K, Z = C, te = [];
                  for (; (K = R.exec(C)) !== null; ) {
                    const [me, we, Ct, Le] = K, vt = [Ct.trim()];
                    Le && vt.push(Le.trim());
                  }
                  C = Z, te.length > 0 && _ === "see" && (L.links || (L.links = []), L.links.push(...te));
                }
                if (_ === "name") {
                  const R = C;
                  R !== F && (L.name = R);
                } else if (_ === "description") {
                  const R = C;
                } else if (_ === "summary") {
                  const R = C;
                  R && (L.summary = R);
                } else if (_ === "param") {
                  const R = D.name?.text, K = H.get(R);
                  if (!K) {
                    $.push(new Error(\`Parameter '\${R}' not found in function '\${F}'.\`));
                    continue;
                  }
                  if (D.typeExpression && D.typeExpression.type)
                    try {
                      const Z = D.typeExpression.type;
                      if (Z.kind === i.SyntaxKind.UnionType) {
                        const te = [];
                        K.enums = te, Z.types.forEach((me) => {
                          if (me.kind === i.SyntaxKind.LiteralType) {
                            const we = me.literal.text;
                            we && te.push(we);
                          }
                        });
                      }
                    } catch (Z) {
                      console.warn("Error parsing JSDoc type expression:", Z);
                    }
                } else if (_ === "returns" || _ === "return")
                  m.returnType.description = C;
                else if (_ === "category")
                  L.category = C;
                else if (_ === "hidden") {
                  let R = !0;
                  const K = C?.toLowerCase();
                  K === "false" ? R = !1 : K !== "true" && (R = C), R !== !1 && (L.hidden = R ?? !0);
                }
              }
            }
          }
        }
        Object.keys(m.returnType).length === 0 && delete m.returnType, p.push([m, L]);
      } catch (M) {
        z(c, new Error(\`'\${F}': \${M.message}\`));
      }
    }
  }), $.length > 0)
    throw console.warn($), new Error("There were compilation errors.", { cause: $ });
  if (p.length === 0)
    throw new Error("No exported functions.");
  const xt = \`\${Kt.uuidV4()}-script\`;
  try {
    !n && $.length === 0 && (l = await Ht(i, l, g));
  } catch {
    console.warn("Error bundling script");
  }
  const ke = {
    functions: p,
    commitId: xt,
    source: t,
    name: "Script",
    language: "typescript",
    // default
    compiled: l
  };
  return s && (ke.autoRun = s), ke;
}
self.addEventListener("message", async (e) => {
  const { id: t, params: n } = e.data;
  try {
    const r = await on(n);
    self.postMessage({ id: t, result: r, error: null });
  } catch (r) {
    self.postMessage({
      id: t,
      result: null,
      error: {
        message: r.message,
        stack: r.stack,
        cause: r.cause
      }
    });
  }
});
let ue = null;
async function an() {
  return ue || (ue = new Promise(async (e, t) => {
    try {
      const n = "0.20.2", r = \`https://esm.sh/esbuild-wasm@\${n}\`, o = \`https://esm.sh/esbuild-wasm@\${n}/esbuild.wasm\`, i = (await import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        r
      )).default;
      await i.initialize({
        wasmURL: o,
        // Provide the specific WASM URL
        worker: !1
        // Keep processing on the current thread
      }), e(i);
    } catch (n) {
      console.error("Error initializing esbuild:", n), t(n);
    }
  }), ue);
}
var ln = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  initialize: an
});
let de = null;
async function sn() {
  return de || (de = new Promise(async (e, t) => {
    let n = null;
    try {
      n = await import("https://esm.sh/typescript@5.7.2");
    } catch (r) {
      console.error("Error initializing Browser TypeScript module:", r);
    }
    n || console.log("use script fallback"), e(n);
  }), de);
}
var cn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  initialize: sn
});
`,i=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",s],{type:"text/javascript;charset=utf-8"});function p(t){let e;try{if(e=i&&(self.URL||self.webkitURL).createObjectURL(i),!e)throw"";const n=new Worker(e,{type:"module",name:t?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(s),{type:"module",name:t?.name})}}async function h(){if(typeof process<"u"&&process.versions?.node&&typeof Worker>"u")return await l();if(typeof Worker<"u"){const t=new u(()=>new p);try{return await t.start(),t}catch(e){console.error("Failed to start TypescriptCompiler worker reverting to fallback:",e)}}return await l()}const l=async()=>{const{compileModule:t}=await c(async()=>{const{compileModule:n}=await import("./C1DZmlRCcKmg_HLd-CEQuqlpM.js");return{compileModule:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),e=new d(n=>t(n));return await e.start(),e};export{h as createCompilerWorker};
