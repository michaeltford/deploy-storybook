const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CznW7WDW7SvC4ydc-RXFGZ3qh.js","./preload-helper-D9Z9MdNV.js","./index-CpiIqDFN.js","./index-tI__wt30.js","./index-Bex5ZTIz.js","./iframe-Bhn-vlEr.js","./index-CQih4H26.js","./client-BiiePqMP.js","./index-Bl98VB8F.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-D9Z9MdNV.js";let u=class{constructor(t){this._worker=null,this._nextId=1,this._pendingRequests=new Map,this._workerFactory=t}start(){if(typeof Worker>"u")throw new Error("Web Workers are not supported in this environment.");return this._worker||(this._worker=this._workerFactory(),this._worker.onmessage=t=>{const{id:e,result:n,error:r}=t.data,o=this._pendingRequests.get(e);if(o)if(this._pendingRequests.delete(e),r){const i=new Error(r.message);i.stack=r.stack,r.cause&&(i.cause=r.cause),o.reject(i)}else o.resolve(n)},this._worker.onerror=t=>{console.error("Worker error:",t),this._pendingRequests.forEach(e=>{e.reject(new Error(`Worker failed: ${t.message}`))}),this._pendingRequests.clear(),this._worker=null}),Promise.resolve()}execute(t){if(!this._worker)throw new Error("Worker is not initialized. Call start() first.");const e=this._nextId++;return new Promise((n,r)=>{this._pendingRequests.set(e,{resolve:n,reject:r}),this._worker.postMessage({id:e,params:t})})}terminate(){this._worker&&(this._worker.terminate(),this._worker=null)}};class d{constructor(e){this._onExecute=e}execute(e){return this._onExecute(e)}start(){return Promise.resolve()}terminate(){}}const s=`/**
 * @license @sheetxl/primitives - Primitives - Base types for SheetXL functions. - v0.7.5
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */
const W = { Number: "n", String: "s", Boolean: "b", Error: "e", Null: "z" };
var Re, ae, d;
(ae = Re || (Re = {})).Orientation = { Column: "column", Row: "row" }, ae.Orientations = { ...ae.Orientation, Both: "both" }, ae.Direction = { Up: "up", Down: "down", Left: "left", Right: "right" }, ((e) => {
  e.Code = { Parse: 0, Null: 1, Div0: 2, Value: 3, Ref: 4, Name: 5, Num: 6, NA: 7, GettingData: 8, Spill: 9, Connect: 10, Blocked: 11, Unknown: 12, Field: 13, Calc: 14, Busy: 16, Python: 19, Timeout: 20 }, e.Label = { Parse: "#PARSE!", Null: "#NULL!", Div0: "#DIV/0!", Value: "#VALUE!", Ref: "#REF!", Name: "#NAME?", Num: "#NUM!", NA: "#N/A", GettingData: "#GETTING_DATA", Spill: "#SPILL!", Connect: "#CONNECT!", Blocked: "#BLOCKED!", Unknown: "#UNKNOWN!", Field: "#FIELD!", Calc: "#CALC!", Busy: "#BUSY!", Python: "#PYTHON!", Timeout: "#TIMEOUT!" };
  class t extends Error {
    constructor(c, h, fe, B) {
      super(fe, B), this._label = h, this._code = c, this.details = B;
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
    equals(c) {
      return !!c && (this._code === c._code || this._code === c.code);
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
    constructor(c, h) {
      super(e.Code.Parse, e.Label.Parse, c, h);
    }
    static {
      this.code = e.Code.Parse;
    }
    getDetails() {
      const c = this.details;
      return { line: c?.line ?? 1, column: c?.column ?? 1, offset: c?.offset ?? 0, length: c?.length ?? 0 };
    }
  }
  e.Parse = n;
  class r extends t {
    constructor(c, h) {
      super(e.Code.Null, e.Label.Null, c, h);
    }
    static {
      this.code = e.Code.Null;
    }
  }
  e.Null = r;
  class o extends t {
    constructor(c, h) {
      super(e.Code.Div0, e.Label.Div0, c, h);
    }
    static {
      this.code = e.Code.Div0;
    }
  }
  e.Div0 = o;
  class i extends t {
    constructor(c, h) {
      super(e.Code.Value, e.Label.Value, c, h);
    }
    static {
      this.code = e.Code.Value;
    }
  }
  e.Value = i;
  class a extends t {
    constructor(c, h) {
      super(e.Code.Ref, e.Label.Ref, c, h);
    }
    static {
      this.code = e.Code.Ref;
    }
  }
  e.Ref = a;
  class l extends t {
    constructor(c, h) {
      super(e.Code.Name, e.Label.Name, c, h);
    }
    static {
      this.code = e.Code.Name;
    }
  }
  e.Name = l;
  class u extends t {
    constructor(c, h) {
      super(e.Code.Num, e.Label.Num, c, h);
    }
    static {
      this.code = e.Code.Num;
    }
  }
  e.Num = u;
  class p extends t {
    constructor(c, h) {
      super(e.Code.NA, e.Label.NA, c, h);
    }
    static {
      this.code = e.Code.NA;
    }
  }
  e.NA = p;
  class w extends t {
    constructor(c, h) {
      super(e.Code.GettingData, e.Label.GettingData, c, h);
    }
    static {
      this.code = e.Code.GettingData;
    }
  }
  e.GettingData = w;
  class g extends t {
    constructor(c, h) {
      super(e.Code.Spill, e.Label.Spill, c, h);
    }
    static {
      this.code = e.Code.Spill;
    }
  }
  e.Spill = g;
  class f extends t {
    constructor(c, h) {
      super(e.Code.Connect, e.Label.Connect, c, h);
    }
    static {
      this.code = e.Code.Connect;
    }
  }
  e.Connect = f;
  class y extends t {
    constructor(c, h) {
      super(e.Code.Blocked, e.Label.Blocked, c, h);
    }
    static {
      this.code = e.Code.Blocked;
    }
  }
  e.Blocked = y;
  class x extends t {
    constructor(c, h) {
      super(e.Code.Unknown, e.Label.Unknown, c, h);
    }
    static {
      this.code = e.Code.Unknown;
    }
  }
  e.Unknown = x;
  class A extends t {
    constructor(c, h) {
      super(e.Code.Field, e.Label.Field, c, h);
    }
    static {
      this.code = e.Code.Field;
    }
  }
  e.Field = A;
  class D extends t {
    constructor(c, h) {
      super(e.Code.Calc, e.Label.Calc, c, h);
    }
    static {
      this.code = e.Code.Calc;
    }
  }
  e.Calc = D;
  class U extends t {
    constructor(c, h) {
      super(e.Code.Busy, e.Label.Busy, c, h);
    }
    static {
      this.code = e.Code.Busy;
    }
  }
  e.Busy = U;
  class I extends t {
    constructor(c, h) {
      super(e.Code.Python, e.Label.Python, c, h);
    }
    static {
      this.code = e.Code.Python;
    }
  }
  e.Python = I;
  class J extends t {
    constructor(c, h) {
      super(e.Code.Timeout, e.Label.Timeout, c, h);
    }
    static {
      this.code = e.Code.Timeout;
    }
  }
  e.Timeout = J;
})(d || (d = {}));
const _ = {};
_[d.Code.Parse] = d.Parse, _[d.Code.Null] = d.Null, _[d.Code.Div0] = d.Div0, _[d.Code.Value] = d.Value, _[d.Code.Ref] = d.Ref, _[d.Code.Name] = d.Name, _[d.Code.Num] = d.Num, _[d.Code.NA] = d.NA, _[d.Code.GettingData] = d.GettingData, _[d.Code.Spill] = d.Spill, _[d.Code.Connect] = d.Connect, _[d.Code.Blocked] = d.Blocked, _[d.Code.Unknown] = d.Unknown, _[d.Code.Field] = d.Field, _[d.Code.Calc] = d.Calc, _[d.Code.Busy] = d.Busy, _[d.Code.Python] = d.Python, _[d.Code.Timeout] = d.Timeout;
const nt = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ke = Object.keys(_);
for (let e = 0; e < ke.length; e++) {
  const t = ke[e], n = _[t];
  rt.set(d.Label[t], n), ot.set(d.Code[t], n);
  const r = new n();
  nt.set(r.getLabel(), r), Te.set(r.getCode(), r);
}
const xt = Te.get(d.Code.Unknown);
var T;
(T = d || (d = {})).BuiltIn = { Parse: new T.Parse(), Null: new T.Null(), Div0: new T.Div0(), Value: new T.Value(), Ref: new T.Ref(), Name: new T.Name(), Num: new T.Num(), NA: new T.NA(), GettingData: new T.GettingData(), Spill: new T.Spill(), Connect: new T.Connect(), Blocked: new T.Blocked(), Unknown: new T.Unknown(), Field: new T.Field(), Calc: new T.Calc(), Busy: new T.Busy(), Python: new T.Python(), Timeout: new T.Timeout() }, T.getBuiltInByLabel = (e) => nt.get(e), T.newTypedError = (e, t, n) => {
  let r;
  return r = typeof e == "string" ? rt.get(e) : ot.get(e), r || (r = T.Unknown), new r(t, n);
}, T.getBuiltInById = (e) => Te.get(e) || xt;
/**
 * @license @sheetxl/utils - Utils - Utilities used by most SheetXL components. - v0.7.5
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */
const j = { Column: "column", Row: "row" }, Ct = Object.freeze({ colIndex: 0, rowIndex: 0 }), vt = Object.freeze({ colStart: 0, rowStart: 0, colEnd: 0, rowEnd: 0 }), it = (e, t) => e.colStart === t.colStart ? e.rowStart - t.rowStart : e.colStart - t.colStart, at = (e, t) => e.rowStart === t.rowStart ? e.colStart - t.colStart : e.rowStart - t.rowStart, Tt = (e, t) => e.rowEnd === t.rowEnd ? t.colEnd - e.colEnd : t.rowEnd - e.rowEnd, _t = (e, t) => e.colEnd === t.colEnd ? t.rowEnd - e.rowEnd : t.colEnd - e.colEnd, Le = (e, t) => e.colIndex === t.colIndex ? e.rowIndex - t.rowIndex : e.colIndex - t.colIndex, Ae = (e, t) => e.rowIndex === t.rowIndex ? e.colIndex - t.colIndex : e.rowIndex - t.rowIndex, Me = (e, t) => e.rowIndex === t.rowIndex ? t.colIndex - e.colIndex : t.rowIndex - e.rowIndex, je = (e, t) => e.colIndex === t.colIndex ? t.rowIndex - e.rowIndex : t.colIndex - e.colIndex, lt = (e = j.Row, t = !1) => t ? e !== j.Column ? Tt : _t : e !== j.Column ? at : it, Pe = (e, t) => e === t || !(!e || !t) && e.rowIndex === t.rowIndex && e.colIndex === t.colIndex, Se = (e, t) => e === t || !(!e || !t) && e.rowStart === t.rowStart && e.rowEnd === t.rowEnd && e.colStart === t.colStart && e.colEnd === t.colEnd, xe = (e, t) => !(!e || !t) && !(e.colStart > t.colEnd || t.colStart > e.colEnd) && !(e.rowStart > t.rowEnd || t.rowStart > e.rowEnd), Fe = (e, t) => {
  if (e === t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!Se(e[n], t[n])) return !1;
  return !0;
}, me = (e, t, n) => {
  if (!e && !t) return null;
  if (!e) return n ? t : { ...t };
  if (!t) return n ? e : { ...e };
  const r = Math.min(e.colStart, t.colStart), o = Math.min(e.rowStart, t.rowStart), i = Math.max(e.colEnd, t.colEnd), a = Math.max(e.rowEnd, t.rowEnd);
  let l = n;
  return l ? (l.colStart = r, l.rowStart = o, l.colEnd = i, l.rowEnd = a) : l = { colStart: r, rowStart: o, colEnd: i, rowEnd: a }, l;
}, De = (e, t) => {
  if (!t || t.length === 0) return e;
  const n = { ...e };
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    xe(n, o) && (n.rowStart = Math.min(n.rowStart, o.rowStart), n.colStart = Math.min(n.colStart, o.colStart), n.rowEnd = Math.max(n.rowEnd, o.rowEnd), n.colEnd = Math.max(n.colEnd, o.colEnd));
  }
  return n;
}, Ot = [null, null], It = (e, t, n) => {
  if (e[0].value === e[1].value) return t;
};
function Ue(e, t = 2, n, r = j.Row, o) {
  let i = [...e];
  if (t <= 0 || e.length <= 1) return i;
  let a = r === j.Column, l = 0, u = !1;
  do {
    const p = i.sort(lt(a ? j.Row : j.Column));
    i = [], i.push(p[0]);
    const w = p.length;
    let g = 0, f = p[0], y = f.colStart, x = f.rowStart, A = f.colEnd, D = f.rowEnd;
    for (let U = 1; U < w; U++) {
      const I = p[U];
      let J = !1;
      if (J = a ? f && x === I.rowStart && D === I.rowEnd && A + 1 === I.colStart : f && y === I.colStart && A === I.colEnd && D + 1 === I.rowStart, J) {
        let E = { colStart: y, rowStart: x, colEnd: a ? I.colEnd : A, rowEnd: a ? D : I.rowEnd };
        if (f.value !== void 0 && (E.value = f.value), n) {
          const c = o ?? [null, null];
          c[0] = f, c[1] = I, E = n(c, E, r);
        }
        if (E) {
          i[g] = E, u = !0, f = E, y = f.colStart, x = f.rowStart, A = f.colEnd, D = f.rowEnd;
          continue;
        }
      }
      i[++g] = I, f = I, y = f.colStart, x = f.rowStart, A = f.colEnd, D = f.rowEnd;
    }
    l++, a = !a, l === 1 && (u = !0);
  } while (l < t && u && i.length > 1);
  return i;
}
Object.freeze(Object.defineProperty({ __proto__: null, EmptyCell: Ct, EmptyRange: vt, cellToRange: (e, t) => {
  if (!e) return null;
  let n = t;
  return n || (n = { ...e }, delete n.colIndex, delete n.rowIndex), n.colStart = e.colIndex ?? 0, n.rowStart = e.rowIndex ?? 0, n.colEnd = e.colIndex ?? 0, n.rowEnd = e.rowIndex ?? 0, n;
}, columnFirstCellComparator: Le, columnFirstRangeComparator: it, createCellComparator: (e = j.Row, t = !1) => t ? e !== j.Column ? Me : je : e !== j.Column ? Ae : Le, createConflatingRanges: (e, t = !1) => {
  const n = [];
  let r, o, i = Number.MIN_SAFE_INTEGER, a = Number.MIN_SAFE_INTEGER;
  return { append: (l, u, p) => {
    let w = !0;
    const g = p !== void 0;
    if (g) {
      const x = e ? e(o, p, t) : o === p ? p : void 0;
      x === void 0 ? w = !1 : p = x;
    }
    if (w && u === a + 1 && l === i) return t ? r.rowEnd = u : r.colEnd = u, a = u, void (o = p);
    r && n.push(r);
    const f = t ? l : u, y = t ? u : l;
    r = { colStart: f, rowStart: y, colEnd: f, rowEnd: y }, g && (r.value = p), i = l, a = u, o = p;
  }, done: (l) => (r && (n.push(r), r = null), l ? Ue(n, 3, l === !0 ? It : l, t ? j.Column : j.Row, Ot) : n) };
}, createRangeComparator: lt, defaultRange: (e, t, n) => e ? n ? (n.colStart = e.colStart ?? t.colStart, n.rowStart = e.rowStart ?? t.rowStart, n.colEnd = e.colEnd ?? t.colEnd, n.rowEnd = e.rowEnd ?? t.rowEnd, n) : { colStart: e.colStart ?? t.colStart, rowStart: e.rowStart ?? t.rowStart, colEnd: e.colEnd ?? t.colEnd, rowEnd: e.rowEnd ?? t.rowEnd } : t, extendRangeToIntersectingRanges: De, extendRangeToUnionRanges: (e, t) => {
  if (!t || t.length === 0) return e;
  let n = e, r = null;
  for (; !Se(n, r); ) r = n, n = De(r, t);
  return n;
}, indexOfCoords: (e, t) => {
  const n = { colStart: e.colIndex, rowStart: e.rowIndex, colEnd: e.colIndex, rowEnd: e.rowIndex };
  for (let r = t.length - 1; r >= 0; r--) if (xe(n, t[r])) return r;
  return -1;
}, intersectRanges: (e, t, n) => {
  if (!e) return n ? t : { ...t };
  if (!t) return n ? e : { ...e };
  if (!e && !t || e.rowStart > t.rowEnd || e.rowEnd < t.rowStart || e.colStart > t.colEnd || e.colEnd < t.colStart) return null;
  const r = Math.max(e.colStart, t.colStart), o = Math.max(e.rowStart, t.rowStart), i = Math.min(e.colEnd, t.colEnd), a = Math.min(e.rowEnd, t.rowEnd);
  let l = n;
  return l ? (l.colStart = r, l.rowStart = o, l.colEnd = i, l.rowEnd = a) : l = { colStart: r, rowStart: o, colEnd: i, rowEnd: a }, l;
}, isCellWithinRange: (e, t) => {
  if (!e || !t) return !1;
  const n = e.rowIndex;
  if (n < t.rowStart || n > t.rowEnd) return !1;
  const r = e.colIndex;
  return !(r < t.colStart || r > t.colEnd);
}, isEqualCells: Pe, isEqualRanges: Se, isEqualRangesArrays: Fe, isEqualSelectionCoords: (e, t) => e === t || !(!e || !t) && e.rangeIndex === t.rangeIndex && !!Pe(e.cell, t.cell) && Fe(e.ranges, t.ranges), isRangeWithinRange: (e, t) => !(e.rowStart < t.rowStart || e.rowEnd > t.rowEnd) && !(e.colStart < t.colStart || e.colEnd > t.colEnd), isRangesIntersect: xe, isSingleCell: (e) => !!e && e.rowEnd === e.rowStart && e.colStart === e.colEnd, isValidRange: (e) => !!e && !(typeof e.colStart != "number" || e.colStart < 0) && !(typeof e.colEnd != "number" || e.colEnd < e.colStart) && !(typeof e.rowStart != "number" || e.rowStart < 0) && !(typeof e.rowEnd != "number" || e.rowEnd < e.rowStart), mergeRangedValues: Ue, reverseColumnFirstCellComparator: je, reverseRowFirstCellComparator: Me, rowFirstCellComparator: Ae, rowFirstRangeComparator: at, sanitizeRange: (e) => e ? { colStart: e.colIndex ?? e.colStart ?? 0, rowStart: e.rowIndex ?? e.rowStart ?? 0, colEnd: e.colIndex ?? e.colEnd ?? 0, rowEnd: e.rowIndex ?? e.rowEnd ?? 0 } : null, translateRange: (e, t = -e.rowStart, n = -e.colStart, r) => r ? (r.colStart = e.colStart + n, r.rowStart = e.rowStart + t, r.colEnd = e.colEnd + n, r.rowEnd = e.rowEnd + t, r) : { colStart: e.colStart + n, rowStart: e.rowStart + t, colEnd: e.colEnd + n, rowEnd: e.rowEnd + t }, unionRanges: me, unionRangesArrays: (e, t, n) => {
  if (!e || e.length === 0) return null;
  if (e.length === 1 && !t) return e[0];
  let r = e[0];
  for (let o = 1; o < e.length; o++) r = me(r, e[o], n);
  return t && (r = me(r, t, n)), r;
} }, Symbol.toStringTag, { value: "Module" }));
const S = { html: "text/html", plain: "text/plain", png: "image/png" }, Nt = Object.freeze({ left: 0, top: 0 }), Rt = Object.freeze({ left: 0, top: 0, bottom: 0, right: 0 }), kt = Object.freeze({ x: 0, y: 0, width: 0, height: 0 });
Object.freeze(Object.defineProperty({ __proto__: null, EmptyBounds: kt, EmptyRect: Rt, EmptyTopLeft: Nt }, Symbol.toStringTag, { value: "Module" }));
function Lt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || (function(n) {
    return n.$$typeof === At;
  })(e);
}
const At = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Mt(e) {
  return /* @__PURE__ */ (function(t) {
    return !!t && typeof t == "object";
  })(e) && !Lt(e);
}
function re(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Y((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
  var n;
}
function jt(e, t, n) {
  return e.concat(t).map(function(r) {
    return re(r, n);
  });
}
function Be(e) {
  return Object.keys(e).concat((function(t) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.propertyIsEnumerable.call(t, n);
    }) : [];
  })(e));
}
function $e(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Pt(e, t, n) {
  const r = {};
  return n.isMergeableObject(e) && Be(e).forEach(function(o) {
    r[o] = re(e[o], n);
  }), Be(t).forEach(function(o) {
    (function(i, a) {
      return $e(i, a) && !(Object.hasOwnProperty.call(i, a) && Object.propertyIsEnumerable.call(i, a));
    })(e, o) || ($e(e, o) && n.isMergeableObject(t[o]) ? r[o] = (function(i, a) {
      if (!a.customMerge) return Y;
      const l = a.customMerge(i);
      return typeof l == "function" ? l : Y;
    })(o, n)(e[o], t[o], n) : r[o] = re(t[o], n));
  }), r;
}
function Y(e, t, n) {
  (n = n || {}).arrayMerge = n.arrayMerge || jt, n.isMergeableObject = n.isMergeableObject || Mt, n.cloneUnlessOtherwiseSpecified = re;
  const r = Array.isArray(t);
  return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Pt(e, t, n) : re(t, n);
}
Y.all = function(e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function(n, r) {
    return Y(n, r, t);
  }, {});
};
const Ft = Object.freeze([]), Dt = Object.freeze({}), ze = (e) => e, de = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
  let t = 16 * Math.random() | 0;
  return (e === "x" ? t : 3 & t | 8).toString(16);
}), Ut = (e) => 1 * e, st = (e, t) => e === t || !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((n, r) => n === t[r]), ne = (e) => typeof e == "object" && !Array.isArray(e) && e !== null, ct = (e) => typeof e != "object" || Array.isArray(e) || e === null ? e : (Object.keys(e).forEach(function(t) {
  e[t] && typeof e[t] == "object" ? ct(e[t]) : e[t] !== null && e[t] !== void 0 || delete e[t], typeof e[t] == "object" && Object.keys(e[t]).length === 0 && delete e[t];
}), Object.keys(e).length === 0 ? null : e), Bt = (e, t) => !(e !== t && !st(e, t)) || !!e.isEqual?.(t), ut = (e, t, n = Bt) => {
  if (e == null || e === t) return null;
  if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) return n(e, t) ? null : e;
  const r = Object.keys(e);
  if (r.length === 0) return null;
  let o = !1;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    ut(e[a], t?.[a], n) === null && (o = !0, delete e[a]);
  }
  return o && Object.keys(e).length === 0 ? null : void 0;
}, Ke = typeof performance == "object" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), Ve = (e) => e == null, qe = (e, t) => !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top), Ge = !(typeof window > "u" || !window.document || !window.document.createElement), k = { Windows: "windows", MacOS: "macos", IOS: "ios", Linux: "linux", Android: "android", Safari: "safari", Firefox: "firefox", Node: "node", Unknown: "unknown" }, oe = () => {
  if (dt()) return k.Node;
  const e = globalThis.navigator !== void 0 && globalThis.navigator.userAgent ? globalThis.navigator.userAgent.toLowerCase() : "";
  return e ? /(win32|win64|windows|wince)/i.test(e) ? k.Windows : /(macintosh|macintel|macppc|mac68k|macos)/i.test(e) ? k.MacOS : /(iphone|ipad|ipod)/i.test(e) ? k.IOS : /android/.test(e) ? k.Android : /linux/.test(e) ? k.Linux : /^((?!chrome|android|).)*safari/i.test(e) ? k.Safari : /^((?!chrome|android|Seamonkey).)*firefox/i.test(e) ? k.Firefox : k.Unknown : k.Unknown;
};
function dt() {
  return typeof process < "u" && process.release?.name === "node" || (typeof process < "u" && process.browser, !1);
}
const We = (e, t = !1) => (document.hasFocus() || t) && (e === document.activeElement || e?.contains(document.activeElement)), $t = Object.freeze(Object.defineProperty({ __proto__: null, EmptyArray: Ft, EmptyObject: Dt, OSType: k, arrayMove: function(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}, asNumber: (e) => {
  const t = Ut(e);
  return Number.isFinite(t) ? t : 0;
}, camelToPrettyCase: (e) => e.length === 1 ? e.toUpperCase() : e.replace(/([A-Z])/g, " $1").replace(/^./, function(t) {
  return t.toUpperCase();
}).trim(), canUseDOM: Ge, cancelTimeout: (e) => {
  cancelAnimationFrame(e.id);
}, castToString: (e) => e == null || e === void 0 ? "" : typeof e != "string" ? "" + e : e, cloneObject: (e) => Ve(e) ? e : JSON.parse(JSON.stringify(e)), consoleWithNoSource: (...e) => new Promise((t) => {
  setTimeout(() => {
    Function("console.log.apply(console, arguments)").apply(null, e), t();
  });
}), debounce: function(e, t = 300, n = !1) {
  let r, o, i, a, l = 0;
  function u() {
    let w = Date.now() - l;
    w < t && w >= 0 ? r = setTimeout(u, t - w) : (r = null, n || (a = e.apply(i, o), i = o = null));
  }
  t == null && (t = 100);
  const p = function() {
    i = globalThis, o = arguments, l = Date.now();
    var w = n && !r;
    return r || (r = setTimeout(u, t)), w && (a = e.apply(i, o), i = o = null), a;
  };
  return p.clear = function() {
    r && (clearTimeout(r), r = null);
  }, p.flush = function() {
    r && (a = e.apply(i, o), i = o = null, clearTimeout(r), r = null);
  }, p;
}, deepEqual: function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    let r, o, i;
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
    if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length) return !1;
    for (o = r; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
    for (o = r; o-- !== 0; ) {
      let a = i[o];
      if ((a !== "_owner" || !t.$$typeof) && !e(t[a], n[a])) return !1;
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
  for (let i = 0; i < o; i++) {
    const a = r[i];
    e[a] !== t[a] && (e[a] === void 0 ? n[a] = t[a] : n[a] = e[a]);
  }
  return Object.keys(n).length === 0 ? null : n;
}, findEqualOrGreater: function(e, t, n = ze) {
  let r = 0, o = e.length - 1;
  for (; r <= o; ) {
    let i = Math.floor((r + o) / 2), a = n(e[i]);
    if (a === t) return i;
    a < t ? r = i + 1 : o = i - 1;
  }
  return r;
}, findEqualOrLesser: function(e, t, n = ze) {
  let r = e.length - 1, o = 0;
  for (; r >= o; ) {
    let i = Math.floor((r + o) / 2), a = n(e[i]);
    if (a === t) return i;
    a > t ? r = i - 1 : o = i + 1;
  }
  return r;
}, findNextStep: (e, t = !0, n = 15, r = 10, o = 400) => {
  const i = Math.max(e - r, 0) + (t ? 1 : -1);
  return Math.min(o, Math[t ? "ceil" : "floor"](i / n) * n + r);
}, getDPI: () => {
  let e = 1;
  return typeof window == "object" && (e = window.devicePixelRatio || 1), e;
}, getFromPath: (e, t) => {
  const n = t.split(".");
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r) return null;
    let a = r[i];
    if (typeof a == "function" && (a = a.bind(r)()), !a || !ne(a)) return a;
    r = a;
  }
  return r ?? null;
}, getOS: oe, hasFocus: We, isDefined: (e) => e != null, isEmpty: (e) => e == null || e === "", isEqualArrays: st, isEqualBounds: (e, t) => e === t || !(e && !t || t && !e) && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height, isEqualObjectKeys: (e, t) => {
  if (e === t) return !0;
  if (e && !t || t && !e) return !1;
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++) if (e[n[r]] !== t[n[r]]) return !1;
  return !0;
}, isNode: dt, isNullOrUndefined: Ve, isNumeric: (e) => {
  const t = 1 * e;
  return Number.isFinite(t) && typeof t == "number";
}, isObject: ne, isPromiseLike: (e) => !!e && typeof e.then == "function", isRectInsideRect: (e, t) => e.top >= t.top && e.bottom <= t.bottom && e.left >= t.left && e.right <= t.right, isRectIntersect: qe, mergeContentful: (...e) => {
  const t = e.length;
  if (t > 0 && e[t - 1] !== void 0 && !ne(e[t - 1])) return e[t - 1];
  let n = e[0] || {};
  for (let r = 1; r < t; r++) n = Y(n, e[r] || {}, { arrayMerge: (o, i) => [...i] });
  return n;
}, nextTick: (e) => {
  typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(() => {
    e();
  }) : (typeof setImmediate == "function" ? setImmediate : setTimeout)(() => {
    e();
  });
}, openFileDialog: (e = "*.*") => new Promise((t, n) => {
  if (!Ge) return void n("Unable to open dialog with no dom.");
  const r = document.createElement("input");
  r.type = "file", r.accept = e;
  let o = null, i = !1;
  globalThis.addEventListener?.("focus", () => {
    setTimeout(() => {
      o || i || (i = !0, t(null));
    }, 1e3);
  }, { once: !0, passive: !0 }), r.onchange = () => {
    if (o = r.files[0], o) {
      if (i) return void console.warn("File open detected after faux cancel.", o);
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
}, removeEmptyProperties: ct, removeEqualValues: ut, removeListenerAll: (e) => {
  if (!e) return [];
  for (let t = 0; t < e.length; t++) e[t] && e[t]();
  return [];
}, requestTimeout: (e, t) => {
  const n = Ke(), r = { id: requestAnimationFrame(function o() {
    Ke() - n >= t ? e.call(null) : r.id = requestAnimationFrame(o);
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
  for (let i = 0; o && i < r.length - 1; i++) {
    const a = r[i];
    let l = o[a];
    if (l == null && (l = {}, o[a] = l), !ne(l)) throw new Error("Can not set path to a non object path.");
    o = l;
  }
  if (typeof n != "number" && typeof n != "boolean" && typeof n != "string" && !ne(n)) throw new Error(\`Can not set path to \${n} that is not a a supported primitive.\`);
  return o[r[r.length - 1]] = n, e;
}, splitNumber: (e) => {
  let t = Math.abs(e);
  if (isNaN(t) || !isFinite(e)) return null;
  let n = 0 | t, r = t - n, o = 0, i = 0, a = 1;
  if (r > 5e-8) for (; i < 8 && Math.abs(o / a - r) > 5e-8; ) i++, a *= 10, o = Math.round(r * a);
  return { ip: Math.trunc(e), fp: o, ipLength: Math.ceil(Math.log10(n + 1)), fpLength: i };
}, subtractRect: (e, t, n = !1) => {
  if (!t) return [e];
  if (!qe(e, t)) return [];
  const r = [];
  let o = e;
  const i = () => {
    t.top > o.top && t.top < o.bottom && (r.push({ ...o, bottom: t.top }), o = { ...o, top: t.top });
  }, a = () => {
    t.bottom > o.top && t.bottom < o.bottom && (r.push({ ...o, top: t.bottom }), o = { ...o, bottom: t.bottom });
  }, l = () => {
    t.right > o.left && t.right < o.right && (r.push({ ...o, left: t.right }), o = { ...o, right: t.right });
  }, u = () => {
    t.left > o.left && t.left < o.right && (r.push({ ...o, right: t.left }), o = { ...o, left: t.left });
  };
  return n ? (u(), l(), i(), a()) : (i(), a(), l(), u()), r;
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
  for (let o = 0; o < t; o++) for (let i = 0; i < n; i++) r[i][o] = e[o][i];
  return r;
}, uuidV4: de, validEnumValue: (e, t) => {
  if (!Object.values(e).includes(t)) throw new Error(\`Invalid type: \${t ?? "null"}. Must be one of: \${Object.values(t).join(", ")}.\`);
}, whenFocus: async (e, t = !1) => new Promise((n) => {
  We(e, t) ? n(!0) : e.addEventListener("focusin", () => {
    n(!0);
  }, { once: !0 }), e.focus();
}) }, Symbol.toStringTag, { value: "Module" }));
Object.freeze(Object.defineProperty({ __proto__: null, MESSAGE_ERROR_INVALID_ARG: (e) => \`Invalid argument: '\${e}'.\` }, Symbol.toStringTag, { value: "Module" }));
const ft = (e) => {
  const t = new Uint8Array(e), n = t.byteLength;
  let r = "";
  for (let o = 0; o < n; o++) r += String.fromCharCode(t[o]);
  if (typeof window < "u" && typeof globalThis.btoa == "function") return globalThis.btoa(r);
  if (typeof Buffer < "u") return Buffer.from(r, "binary").toString("base64");
  throw new Error("Unsupported environment");
}, Ce = (e) => new Promise((t, n) => {
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
Object.freeze(Object.defineProperty({ __proto__: null, DEFAULT_MIME_TYPE: "*/*", arrayBufferToBase64: ft, base64ToArrayBuffer: (e) => {
  const t = typeof window < "u" && typeof globalThis.atob == "function" ? globalThis.atob(e) : Buffer.from(e, "base64").toString("binary"), n = t.length, r = new Uint8Array(n);
  for (let o = 0; o < n; o++) r[o] = t.charCodeAt(o);
  return r.buffer;
}, blobToString: Ce }, Symbol.toStringTag, { value: "Module" }));
const pt = "data:image/png;base64,", ht = "Unable to resolve image.", Ye = (e) => new Promise(async (t, n) => {
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
  r || n(ht);
}), we = "image/svg+xml";
Object.freeze(Object.defineProperty({ __proto__: null, DATA_URL_PNG_PREFIX: pt, getImageDataUrl: (e, t = 1) => new Promise(async (n, r) => {
  let o = null;
  try {
    o = new Image(), o.src = e, o.addEventListener("load", function() {
      try {
        const i = document.createElement("canvas");
        i.width = o.naturalWidth, i.height = o.naturalHeight, i.getContext("2d").drawImage(o, 0, 0);
        const a = i.toDataURL("image/png", t);
        n({ elemImg: o, dataUrl: a });
      } catch (i) {
        URL.revokeObjectURL(e), r(i);
      }
    }, { once: !0 }), o.addEventListener("error", function() {
      URL.revokeObjectURL(e), r("Invalid Image");
    }, { once: !0 }), await o.decode("sync");
  } catch {
    o?.src && URL.revokeObjectURL(o.src);
  }
  o || r(ht);
}), loadImageDetails: async (e, t = null) => {
  let n = null;
  const r = async () => {
    try {
      const i = t ?? "image/*", a = URL.createObjectURL(new Blob([e], { type: i })), l = await Ye(a);
      n = { mimeType: i, naturalDimensions: l, asUrl: a };
    } catch {
    }
  }, o = async () => {
    try {
      const i = new TextDecoder().decode(e), a = URL.createObjectURL(new Blob([i], { type: we })), l = await Ye(a);
      n = { mimeType: t ?? we, naturalDimensions: l, asUrl: a, asSVGText: i };
    } catch {
    }
  };
  if (t === we ? await o() : t.startsWith("image/") ? await r() : (await r(), n || await o()), !n) throw new Error("Failed to load image");
  return n;
} }, Symbol.toStringTag, { value: "Module" }));
var Je, He;
(He = Je || (Je = {})).resolveTypedUpdates = (e, t, n, r) => {
  if (e === null) return e;
  if (e === void 0) return r;
  let o = e;
  if (t?.shorthand) {
    const u = t?.shorthand(e, n);
    u !== void 0 && (o = u);
  }
  if (o !== null && t?.getSubType) {
    const u = t.getSubType(o);
    u && (t = u);
  }
  const i = t?.properties, a = t?.arrayType ?? !1;
  let l = o;
  if (t && t.merge && l && r) l = t.merge(l, r, n);
  else if (!a && i) {
    const u = Object.keys({ ...o, ...r });
    l = null;
    const p = u.length;
    for (let w = 0; w < p; w++) {
      const g = u[w];
      let f, y = o[g];
      if (y !== void 0) {
        const x = i[g];
        f = x ? (0, He.resolveTypedUpdates)(y, x, n, r?.[g]) : y;
      } else f = r?.[g];
      f != null && (l = l ?? {}, l[g] = f);
    }
  }
  return l;
};
const Xe = \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`, ye = \`You do not have permissions to access the clipboard.
All copy and paste operations will be limited to the browser tab.\`, mt = { Safari: \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`, Perms: ye, PermsWrite: oe() === k.Safari ? Xe : ye, PermsRead: oe() === k.Safari ? Xe : ye }, ge = async () => new Promise((e) => {
  document.hasFocus() ? e() : globalThis.addEventListener?.("focus", () => {
    e();
  }, { once: !0 }), document.activeElement.focus?.();
}), be = async (e, t, n) => {
  if (oe() === k.Safari) return await n(new Error(mt.Safari));
  try {
    const r = async (a) => {
      try {
        return await a();
      } catch (l) {
        if (l.message?.includes("Document is not focused")) return !1;
        throw l;
      }
    }, o = await globalThis?.navigator?.permissions?.query({ name: e, allowWithoutGesture: !0, allowWithoutSanitization: !0 });
    let i = !1;
    if (o.state === "prompt" && (i = await r(t)), i || o.state !== "granted" || (i = await t()), !i) return await n(new Error(o.state));
  } catch (r) {
    return r.message === "No valid data on clipboard" || r.name === "DataError" ? void 0 : await n(r);
  }
}, wt = async (e) => {
  try {
    return await e.read({ unsanitized: [S.html] });
  } catch {
  }
  return await e.read();
}, zt = async (e, t) => {
  if (!e) return null;
  const n = await wt(e);
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
      const i = {}, a = Object.keys(r);
      for (let l = 0; l < a.length; l++) {
        const u = a[l];
        let p = r[u];
        i[u] = typeof p == "string" ? e(u, p) : p;
      }
      this._items = i, this._presentationStyle = o?.presentationStyle ?? "unspecified";
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
const ve = async (e, t = S.html) => new Promise(async (n, r) => {
  try {
    const o = await zt(e, t);
    if (o) {
      const i = new FileReader();
      i.onload = () => {
        n(i.result);
      }, i.onerror = () => {
        n("");
      }, i.readAsText(o);
    } else n("");
  } catch (o) {
    r(o);
  }
}), Ze = async (e, t = S.html) => {
  const n = await ve(e, t);
  if (!n) return null;
  let r = null;
  try {
    r = new DOMParser().parseFromString(n, S.html);
  } catch {
    console.warn("Can't parse html from clipboard.");
  }
  return r;
}, Kt = async (e) => {
  e && await e.writeText("");
}, ie = "clipboard-uuid", Q = "web text/uuid", Qe = (e) => \`<div style="display:none" \${ie}="\${e}"/>\`, Vt = (e, t) => {
  let n = null;
  try {
    const r = new DOMParser().parseFromString(t, S.html);
    r.body.firstElementChild.setAttribute(ie, e), n = r.getElementsByTagName("body")[0].innerHTML;
  } catch (r) {
    console.warn("Can't embed uuid.", r);
  }
  return n;
}, et = (e, t) => {
  if (!t || !e) return !1;
  try {
    const n = t.querySelectorAll(\`[\${ie}="\${e}"]\`);
    if (n && n.length === 1) return !0;
    if (t.querySelector("parsererror")) throw new Error("We are unable to parse node");
    return !1;
  } catch {
    return !1;
  }
};
class tt {
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
    this._nativeClipboard && this._state && !this._disableCheckOnFocus && await be("clipboard-read", async () => {
      await ge();
      const t = await ve(this._nativeClipboard, Q);
      if (!this._state || t && t === this._state.uuid) return !0;
      const n = await Ze(this._nativeClipboard, S.html);
      return !this._state || (et(this._state.uuid, n) || this.clear(), !0);
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
    return await be("clipboard-read", async () => {
      if (await ge(), this._state?.uuid) {
        const n = await ve(this._nativeClipboard, Q);
        if (n && n === t._state.uuid) return !0;
        const r = await Ze(this._nativeClipboard, S.html);
        if (et(t._state?.uuid, r)) return !0;
      }
      return t._state = { items: await wt(this._nativeClipboard), uuid: null, ref: null }, this.dispatchEvent(new Event("clipboardread")), !0;
    }, async (n) => {
      this.dispatchEvent(new Event("clipboarderrorread"));
    }), this._state?.items ?? [];
  }
  async write(t) {
    return this._write({ uuid: de(), items: t, ref: null });
  }
  async _write(t) {
    if (!this._nativeClipboard) return this._state = t, this.dispatchEvent(new Event("clipboardwrite")), this.dispatchEvent(new Event("clipboardchange")), null;
    const n = this, r = [], o = t.uuid;
    let i = t.items ?? [];
    const a = () => {
      n._state = { uuid: o, ref: t.ref, items: r }, n.dispatchEvent(new Event("clipboardwrite")), n.dispatchEvent(new Event("clipboardchange"));
    };
    await be("clipboard-write", async () => {
      await ge(), o && i.length === 0 && (i.push(new ClipboardItem({ [Q]: new Blob([o], { type: Q }) })), i.push(new ClipboardItem({ [S.html]: new Blob([Qe(o)], { type: S.html }) })));
      for (let l = 0; l < Math.min(1, i.length); l++) {
        const u = i[l];
        let p = u.types.indexOf(S.html), w = null;
        if (p !== -1) {
          const y = await u.getType(S.html);
          w = await Ce(y), w && (w = Vt(o, w));
        }
        if (!w && u.types.includes(S.plain)) {
          const y = await u.getType(S.plain);
          if (y) {
            let x = null;
            typeof y == "string" ? (console.warn("text as string", y), x = y) : x = await Ce(y), x && (w = \`<div \${ie}="\${o}">\${x}</div>\`);
          }
        }
        if (!w && u.types.includes(S.png)) {
          const y = await u.getType(S.png), x = ft(await y.arrayBuffer());
          w = \`<div \${ie}="\${o}"><img src="\${pt + x}"/></div>\`;
        }
        !w && o && (w = Qe(o));
        const g = new Blob([w ?? ""], { type: S.html }), f = {};
        for (let y = 0; y < u.types.length; y++) {
          const x = u.types[y];
          f[x] = y === p ? g : u.getType(x);
        }
        w && p === -1 && (f[S.html] = g), o && (f[Q] = new Blob([o], { type: Q })), r.push(new ClipboardItem(f));
      }
      try {
        r && r.length !== 0 ? await this._nativeClipboard.write(r) : await Kt(this._nativeClipboard);
      } catch (l) {
        l.message?.includes("Document is not focused") || console.warn("Unable to write to native clipboard: ", l);
      }
      return a(), !0;
    }, async (l) => {
      this.dispatchEvent(new Event("clipboarderrorwrite")), a();
    });
  }
  async writeReference(t) {
    if (!t) return void this.clear();
    let n = null;
    const r = {};
    try {
      const i = await t.toText?.() ?? null;
      i && (r[S.plain] = new Blob([i ?? ""], { type: S.plain }));
    } catch (i) {
      n = i;
    }
    try {
      const i = await t.toHtml?.() ?? null;
      i && (r[S.html] = new Blob([i], { type: S.html }));
    } catch (i) {
      n = i, console.warn("export to html", i);
    }
    try {
      const i = await t.toImage?.() ?? null;
      i && (r[S.png] = i);
    } catch (i) {
      n = i, console.warn("export to png", i);
    }
    const o = this._write({ uuid: de(), ref: t, items: Object.keys(r).length > 0 ? [new ClipboardItem(r)] : null });
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
      for (let a = 0; !o && r && a < r.length; a++) r[a].types.includes(S.plain) && (o = await r[a].getType(S.plain));
      if (!o) return void t("");
      const i = new FileReader();
      i.onload = () => {
        t(i.result);
      }, i.readAsText(o), i.onerror = (a) => {
        n(a);
      };
    });
  }
  async writeText(t) {
    const n = [new ClipboardItem({ [S.plain]: new Blob([t], { type: S.plain }) })];
    return this._write({ uuid: de(), items: n, ref: null });
  }
  addEventListener(t, n, r = {}) {
    const o = r?.capture ? this._listenersCapture : this._listeners;
    let i = o.get(t);
    i || (i = /* @__PURE__ */ new Map(), o.set(t, i)), i.set(n, typeof r == "boolean" ? {} : r);
  }
  dispatchEvent(t) {
    if (!t) return;
    const n = (r) => {
      const o = r.get(t.type);
      o && o.forEach((i, a) => {
        try {
          typeof a == "function" ? a(t) : a.handleEvent && a.handleEvent(t), i.once && o.delete(a);
        } catch (l) {
          console.warn(l);
        }
      });
    };
    return n(this._listenersCapture), n(this._listeners), !0;
  }
  removeEventListener(t, n, r) {
    const o = r?.capture ? this._listenersCapture : this._listeners, i = o.get(t);
    i && (i.delete(n), i.size === 0 && o.delete(t));
  }
  close() {
    globalThis.removeEventListener?.("focus", this._onFocus), globalThis.removeEventListener?.("blur", this._onBlur);
  }
}
var Ee;
(Ee = tt || (tt = {})).ErrorMessages = mt, Ee.Global = new Ee();
const qt = "__SHEETXL";
let ee = null, le = null;
async function Gt() {
  if (ee)
    return ee;
  if (le) {
    if (await le, !ee)
      throw new Error("ESBuild initialization promise resolved, but instance is not available.");
    return ee;
  }
  let e, t;
  le = new Promise((n, r) => {
    e = n, t = r;
  });
  try {
    const { initialize: n } = await Promise.resolve().then(function() {
      return on;
    });
    return ee = await n(), e(), ee;
  } catch (n) {
    throw console.error("Failed to import or initialize esbuild:", n), le = null, t(n), n;
  }
}
const Wt = {
  // ESBuild.TsconfigRaw =
  compilerOptions: {
    target: "esnext"
  }
};
async function Yt(e, t, n = "/script.js", r = qt) {
  try {
    const o = await Gt(), i = "@sheetxl/primitives", a = \`
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
        p.onResolve({ filter: new RegExp(\`^(\${n.replace("/", "\\\\/")}|\${i})$\`) }, (g) => ({
          path: g.path,
          namespace: w
        })), p.onResolve({ filter: /.*/ }, (g) => {
          if (g.namespace !== w)
            return console.warn(\`esbuild: Treating import "\${g.path}" as external.\`), { path: g.path, external: !0 };
        }), p.onLoad({ filter: /.*/, namespace: w }, (g) => {
          let f;
          if (g.path === n)
            f = t;
          else if (g.path === i)
            f = a;
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
    }, u = await o.build({
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
      tsconfigRaw: Wt,
      // Pass the mapped options
      minify: !0,
      // sourcemap: 'external', // Generate separate source map string
      // Or use 'inline' if you prefer data URLs embedded in the code
      // To suppress warnings about dynamic import() if esbuild complains:
      // supported: { 'dynamic-import': true },
      platform: "neutral"
      // not really needed
    });
    if (u.outputFiles && u.outputFiles.length > 0)
      return u.outputFiles[0].text;
    throw u.errors && u.errors.length > 0 ? new Error(\`esbuild bundling failed: \${u.errors.map((p) => p.text).join(\`
\`)}\`) : new Error("esbuild did not produce an output file.");
  } catch (o) {
    throw console.error("esbuild bundling process failed:", o), o;
  }
}
const Jt = \`
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
\`, Ht = \`
  interface FirstTest {
    isTrue?: boolean;
  }
\`, Xt = async () => Ht, yt = /* @__PURE__ */ new Map([
  ["IReferenceRange", "r"],
  ["IRange", "l"]
]), gt = /* @__PURE__ */ new Map([
  ["IWorkbook", "workbook"],
  ["ISheet", "sheet"],
  ["ICellRanges", "ranges"],
  ["ICellRange", "range"],
  ["IFormulaContext", "context"]
]), _e = (e, t) => {
  Array.from(t.keys()).forEach((r) => {
    const o = t.get(r);
    t.set(\`\${e}.\${r}\`, o);
  });
}, Zt = /* @__PURE__ */ new Map([
  ["Scalar", "*"],
  ["FormulaError.Known", W.Error],
  ["Date", "Date"],
  ["JSON", "JSON"]
]), Qt = /* @__PURE__ */ new Map([
  // Repeating
]), Oe = "SheetXL";
_e(Oe, yt);
_e(Oe, gt);
_e(Oe, Qt);
const en = /* @__PURE__ */ new Map([
  ["Promise", () => ({ async: !0 })],
  // ['PromiseLike', (): Partial<IFunction.ReturnTypeJSON> => {
  //   return { async: true };
  // }],
  ["Observable", () => ({ stream: !0 })]
]);
let se = null;
async function tn() {
  if (se)
    return se;
  try {
    return await (await Promise.resolve().then(function() {
      return ln;
    })).initialize();
  } catch (e) {
    throw se = null, e;
  } finally {
    se = null;
  }
}
async function nn(e) {
  const t = e?.source ?? null;
  if (!t) return null;
  const n = (e.disableBundle || e.declarationsOnly) ?? !1, r = [
    Xt(),
    //import('typescript'), // when bundled, but node check causes issues. We could bundle replace isNode but felt hacky
    tn()
  ], o = await Promise.all(r), i = o[0], a = o[1];
  let l = "", u = null;
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
    target: a.ScriptTarget.ES2020
    // lib: ['webworker', 'es2020', 'esnext.asynciterable'], // Use the webworker lib instead of dom
  }, g = "script", f = \`\${g}.ts\`, y = "lib.d.ts", x = "global.d.ts", A = {
    [f]: t,
    [y]: Jt,
    [x]: i
  }, D = {
    getSourceFile: (s, m, L, P) => a.createSourceFile(s, A[s], a.ScriptTarget.Latest, !0),
    fileExists: (s) => A[s] !== void 0,
    readFile: (s) => A[s],
    writeFile: (s, m) => {
      A[s] = m;
    },
    // not used
    getCurrentDirectory: () => "./",
    getCanonicalFileName: (s) => s,
    useCaseSensitiveFileNames: () => !0,
    getDefaultLibFileName: (s) => y,
    getNewLine: () => \`
\`
  }, U = a.createProgram([f, x], w, D), I = U.getTypeChecker(), J = U.getSourceFile(f), E = U.emit();
  E.diagnostics.length > 0 && console.warn(E.diagnostics), l = A[\`\${g}.js\`];
  const c = (s, m, L, P) => {
    if (!s) {
      $(s, new Error(\`Type is not defined for '\${m?.name ?? "return"}'.\`));
      return;
    }
    if (s.kind === a.SyntaxKind.NumberKeyword)
      m.scalar = W.Number;
    else if (s.kind === a.SyntaxKind.StringKeyword)
      m.scalar = W.String;
    else if (s.kind === a.SyntaxKind.BooleanKeyword)
      m.scalar = W.Boolean;
    else if (s.kind === a.SyntaxKind.UndefinedKeyword || s.kind === a.SyntaxKind.NullKeyword || s.kind === a.SyntaxKind.VoidKeyword) {
      if (P) {
        $(s, new Error(\`'undefined' is not a valid type for input: '\${s?.parent?.name?.escapedText}'.\`));
        return;
      }
      m.scalar = W.Null;
    } else if (s.kind === a.SyntaxKind.BigIntKeyword)
      m.scalar = W.Number;
    else if (s.kind === a.SyntaxKind.AnyKeyword)
      m.scalar = W.Null;
    else if (s.kind === a.SyntaxKind.ArrayType) {
      const M = s.elementType;
      if (!M) {
        $(s, new Error(\`'Array' must be typed: '\${s?.parent?.name?.escapedText}'.\`));
        return;
      }
      m.arrayDepth = (m.arrayDepth ?? 0) + 1, c(M, m, L, P);
    } else if (s.kind !== a.SyntaxKind.TupleType) {
      if (s.kind === a.SyntaxKind.TypeReference) {
        const M = s.typeName?.getText?.() ?? null, K = yt.get(M);
        let V = !1;
        K && (m.range = K, V = !0);
        const q = Zt.get(M);
        if (q && (m.scalar = q), q !== void 0 && (V = !0), P) {
          const R = gt.get(M);
          if (R)
            return R;
        } else {
          const R = en.get(M);
          if (R) {
            const b = { ...m, ...R() };
            let N = 0;
            if (b.async && N++, b.stream && N++, N > 1) {
              $(s, new Error(\`'\${M}' cannot have multiple modifiers: '\${s?.parent?.name?.escapedText}'.\`));
              return;
            }
            m = b, V = !0;
          }
        }
        if (!V) {
          $("node", new Error(\`'\${M}' is not a valid type: '\${s?.parent?.name?.escapedText}'.\`));
          return;
        }
        const H = s.typeArguments;
        if (H) {
          if (H.length !== 1) {
            $(s, new Error(\`'\${M}' must be typed with exactly 1 type: '\${s?.parent?.name?.escapedText}'.\`));
            return;
          }
          c(H[0], m, L, P);
        }
      }
    }
  }, h = (s) => (a.getCombinedModifierFlags(s) & a.ModifierFlags.Export) !== 0, fe = (s) => (a.getCombinedModifierFlags(s) & a.ModifierFlags.Default) !== 0, B = [], $ = (s, m) => {
    B.push(m);
  };
  if (a.forEachChild(J, (s) => {
    if (h(s) && a.isFunctionDeclaration(s)) {
      const m = {}, L = {
        parameters: {}
      }, P = s?.name?.getText();
      try {
        m.name = P;
        const K = I.getSymbolAtLocation(s.name).getDocumentationComment(I);
        if (K && K.length > 0 && K[0].text) {
          let R = K[0].text;
          R = R.replace(/[\\r\\n]+/g, "\\\\n").trim(), L.summary = R;
        }
        const V = {};
        c(s.type, V, m, !1), m.returnType = V;
        const q = {};
        fe(s) && (q.default = !0, u = P), Object.keys(q).length > 0 && (m.behavior = q), m.parameters = [];
        const H = /* @__PURE__ */ new Map();
        for (let R = 0; R < s.parameters.length; R++) {
          const b = s.parameters[R], N = {};
          N.name = b.name?.getText();
          const X = c(b.type, N, m, !0);
          if (X) {
            if (m.parameters.length !== 0) {
              const F = s?.parent?.name?.getText();
              $(s, new Error(\`'\${m.name}' contexts must be the first parameter: '\${F}'.\`));
              return;
            }
            m.context = X;
            continue;
          }
          const z = !((b.initializer === void 0 || b.initializer === null) && (b.questionToken === void 0 || b.questionToken === null));
          let v;
          if (z && (N.optional = !0, b.initializer))
            try {
              b.initializer.kind === a.SyntaxKind.StringLiteral ? v = b.initializer.text : b.initializer.kind === a.SyntaxKind.NumericLiteral ? v = parseFloat(b.initializer.text) : b.initializer.kind === a.SyntaxKind.TrueKeyword || b.initializer.kind === a.SyntaxKind.FalseKeyword ? v = b.initializer.kind === a.SyntaxKind.TrueKeyword : b.initializer.kind === a.SyntaxKind.NullKeyword ? v = null : b.initializer.kind === a.SyntaxKind.ObjectLiteralExpression || b.initializer.kind === a.SyntaxKind.ArrayLiteralExpression ? v = b.initializer.getText() : v = b.initializer.getText?.();
            } catch (O) {
              console.warn(\`Couldn't extract default value for parameter '\${N.name}'\`, O);
            }
          b.dotDotDotToken && (N.rest = !0), m.parameters.push(N);
          const C = { description: "" };
          L.parameters[N.name] = C;
          const G = I.getSymbolAtLocation(b.name).getDocumentationComment(I);
          G && G.length > 0 && G[0].text && (C.description = G[0].text), v !== void 0 && (C.defaultValue = v), H.set(N.name, N);
        }
        if (s.jsDoc && s.jsDoc.length > 0) {
          const R = s.jsDoc;
          for (let b = 0; b < R.length; b++) {
            const N = R[b]?.tags;
            if (N)
              for (let X = 0; X < N.length; X++) {
                const z = N[X];
                let v = z?.tagName?.text;
                if (!v) continue;
                v = v.toLowerCase();
                let C = z.comment;
                const G = v === "hidden";
                if (!(typeof C != "string" && !G) && (typeof C == "string" && (C = C.replace(/[\\r\\n]+/g, "\\\\n").trim()), !(!G && C && (C = C.split(/\\\\n/)[0], !C || C.length === 0)))) {
                  if (C && typeof C == "string") {
                    const O = /\\{@link(code|plain)?\\s+([^}|]+)(?:\\s*\\|\\s*([^}]+))?\\}/g;
                    let F, Z = C, te = [];
                    for (; (F = O.exec(C)) !== null; ) {
                      const [pe, he, Et, Ne] = F, St = [Et.trim()];
                      Ne && St.push(Ne.trim());
                    }
                    C = Z, te.length > 0 && v === "see" && (L.links || (L.links = []), L.links.push(...te));
                  }
                  if (v === "name") {
                    const O = C;
                    O !== P && (L.name = O);
                  } else if (v === "description") {
                    const O = C;
                  } else if (v === "summary") {
                    const O = C;
                    O && (L.summary = O);
                  } else if (v === "param") {
                    const O = z.name?.text, F = H.get(O);
                    if (!F) {
                      B.push(new Error(\`Parameter '\${O}' not found in function '\${P}'.\`));
                      continue;
                    }
                    if (z.typeExpression && z.typeExpression.type)
                      try {
                        const Z = z.typeExpression.type;
                        if (Z.kind === a.SyntaxKind.UnionType) {
                          const te = [];
                          F.enums = te, Z.types.forEach((pe) => {
                            if (pe.kind === a.SyntaxKind.LiteralType) {
                              const he = pe.literal.text;
                              he && te.push(he);
                            }
                          });
                        }
                      } catch (Z) {
                        console.warn("Error parsing JSDoc type expression:", Z);
                      }
                  } else if (v === "returns" || v === "return")
                    m.returnType.description = C;
                  else if (v === "category")
                    L.category = C;
                  else if (v === "hidden") {
                    let O = !0;
                    const F = C?.toLowerCase();
                    F === "false" ? O = !1 : F !== "true" && (O = C), O !== !1 && (L.hidden = O ?? !0);
                  }
                }
              }
          }
        }
        Object.keys(m.returnType).length === 0 && delete m.returnType, p.push([m, L]);
      } catch (M) {
        $(s, new Error(\`'\${P}': \${M.message}\`));
      }
    }
  }), B.length > 0)
    throw console.warn(B), new Error("There were compilation errors.", { cause: B });
  if (p.length === 0)
    throw new Error("No exported functions.");
  const bt = \`\${$t.uuidV4()}-script\`;
  try {
    !n && B.length === 0 && (l = await Yt(a, l, g));
  } catch {
    console.warn("Error bundling script");
  }
  const Ie = {
    functions: p,
    commitId: bt,
    source: t,
    name: "Script",
    language: "typescript",
    // default
    compiled: l
  };
  return u && (Ie.autoRun = u), Ie;
}
self.addEventListener("message", async (e) => {
  const { id: t, params: n } = e.data;
  try {
    const r = await nn(n);
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
let ce = null;
async function rn() {
  return ce || (ce = new Promise(async (e, t) => {
    try {
      const n = "0.20.2", r = \`https://esm.sh/esbuild-wasm@\${n}\`, o = \`https://esm.sh/esbuild-wasm@\${n}/esbuild.wasm\`, a = (await import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        r
      )).default;
      await a.initialize({
        wasmURL: o,
        // Provide the specific WASM URL
        worker: !1
        // Keep processing on the current thread
      }), e(a);
    } catch (n) {
      console.error("Error initializing esbuild:", n), t(n);
    }
  }), ce);
}
var on = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  initialize: rn
});
let ue = null;
async function an() {
  return ue || (ue = new Promise(async (e, t) => {
    let n = null;
    try {
      n = await import("https://esm.sh/typescript@5.7.2");
    } catch (r) {
      console.error("Error initializing Browser TypeScript module:", r);
    }
    n || console.log("use script fallback"), e(n);
  }), ue);
}
var ln = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  initialize: an
});
`,a=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",s],{type:"text/javascript;charset=utf-8"});function p(t){let e;try{if(e=a&&(self.URL||self.webkitURL).createObjectURL(a),!e)throw"";const n=new Worker(e,{type:"module",name:t?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(s),{type:"module",name:t?.name})}}async function h(){if(typeof process<"u"&&process.versions?.node&&typeof Worker>"u")return await l();if(typeof Worker<"u"){const t=new u(()=>new p);try{return await t.start(),t}catch(e){console.error("Failed to start TypescriptCompiler worker reverting to fallback:",e)}}return await l()}const l=async()=>{const{compileModule:t}=await c(async()=>{const{compileModule:n}=await import("./CznW7WDW7SvC4ydc-RXFGZ3qh.js");return{compileModule:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),e=new d(n=>t(n));return await e.start(),e};export{h as createCompilerWorker};
