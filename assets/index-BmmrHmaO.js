const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CK8MRqWqfl-NPBmN-BpUcGeqz.js","./preload-helper-D9Z9MdNV.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-D9Z9MdNV.js";import{t as u}from"./index-tI__wt30.js";import"./index-Bex5ZTIz.js";import"./iframe-Bhn-vlEr.js";import"./index-CQih4H26.js";import"./client-BiiePqMP.js";/**
 * @license @sheetxl/scripting - Scripting - Scripting engine for Macros and formulas; includes TypeScript and EsBuild. - v0.7.5
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */let o=null,e=null,t=null;const w=Object.freeze({compileTypescript:async function(r){if(!(r?.source??null))return null;if(e&&u.deepEqual(e,r))return o;const n=await(async function(){if(t)return t;const{TypeScriptCompiler:p}=await c(async()=>{const{TypeScriptCompiler:l}=await import("./CK8MRqWqfl-NPBmN-BpUcGeqz.js");return{TypeScriptCompiler:l}},__vite__mapDeps([0,1]),import.meta.url);return t=new p,t})(),i=await n.compileModule(r);return o=i,e=r,i}});export{w as ScriptingUtils};
