/**
 * @license @sheetxl/scripting - Scripting - Scripting engine for Macros and formulas; includes TypeScript and EsBuild. - v0.7.26
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */let s=null;async function l(){return s||(s=new Promise(async(e,a)=>{try{const i="0.20.2",r=`https://esm.sh/esbuild-wasm@${i}`,n=`https://esm.sh/esbuild-wasm@${i}/esbuild.wasm`,t=(await import(r)).default;await t.initialize({wasmURL:n,worker:!1}),e(t)}catch(i){console.error("Error initializing esbuild:",i),a(i)}}),s)}export{l as initialize};
