const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C_2SCwrJ3CRR32wO-CGgmTTrE.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-PPVm8Dsz.js";import{t as u}from"./index-CvKDCtrJ.js";import"./iframe-mGP4b_Fh.js";import"./index-BiBgeh3u.js";import"./index-DTwpo8e8.js";import"./client-BMu68Vok.js";/**
 * @license @sheetxl/scripting - Scripting - Scripting engine for Macros and formulas; includes TypeScript and EsBuild. - v0.7.26
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */let o=null,e=null,t=null;const w=Object.freeze({compileTypescript:async function(r){if(!(r?.source??null))return null;if(e&&u.deepEqual(e,r))return o;const n=await(async function(){if(t)return t;const{TypeScriptCompiler:p}=await c(async()=>{const{TypeScriptCompiler:l}=await import("./C_2SCwrJ3CRR32wO-CGgmTTrE.js");return{TypeScriptCompiler:l}},__vite__mapDeps([0,1]),import.meta.url);return t=new p,t})(),i=await n.compileModule(r);return o=i,e=r,i}});export{w as ScriptingUtils};
