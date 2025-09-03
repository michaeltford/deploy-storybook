const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DIhjZgHuP4IdRnyX-B689Z9Yy.js","./preload-helper-D9Z9MdNV.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-D9Z9MdNV.js";import{X as u}from"./index-DNdSmOrT.js";import"./index-BkEiYHzc.js";import"./iframe-0eTU46SU.js";import"./index-Z2-nrzLL.js";import"./client-BARKspf1.js";/**
 * @license @sheetxl/scripting - Scripting - Scripting engine for Macros and formulas; includes TypeScript and EsBuild. - v0.7.0
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */let o=null,i=null,t=null;const w=Object.freeze({compileTypescript:async function(r){if(!(r?.source??null))return null;if(i&&u.deepEqual(i,r))return o;const n=await(async function(){if(t)return t;const{TypeScriptCompiler:p}=await c(async()=>{const{TypeScriptCompiler:l}=await import("./DIhjZgHuP4IdRnyX-B689Z9Yy.js");return{TypeScriptCompiler:l}},__vite__mapDeps([0,1]),import.meta.url);return t=new p,t})(),e=await n.compileModule(r);return o=e,i=r,e}});export{w as ScriptingUtils};
