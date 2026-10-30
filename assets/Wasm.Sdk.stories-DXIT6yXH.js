const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_sdkWasm-BA0J510Y.js","./rolldown-runtime-DkW27tQK.js","./esm-BHaKJxLo.js","./preload-helper-wdlQj8DP.js"])))=>i.map(i=>d[i]);
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./preload-helper-wdlQj8DP.js";import{t as i}from"./react-Q1GcV6wX.js";import{G as a,z as o}from"./esm-BHaKJxLo.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";var c,l,u;function d(){return(d=t((()=>{o(),n(),c=a(`sdk:wasm`,()=>r(()=>import(`./_sdkWasm-BA0J510Y.js`),__vite__mapDeps([0,1,2,3]),import.meta.url)),l=async()=>(await c.load()).wasm,u=()=>c.peek()?.wasm})))()}var f;function p(){return(p=t((()=>{d(),f={load:()=>l(),peek:()=>u()}})))()}var m,h,g,_,v,y;function b(){return(b=t((()=>{m=e(i(),1),p(),h=s(),g=()=>{let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(null);return(0,m.useEffect)(()=>{let e=performance.now();f.load().then(n=>{t({linePitch:n.line_pitch(12,3),baseline:n.baseline(12,3),charCount:n.char_count(`😀`),loadMs:performance.now()-e})},e=>r(String(e?.cause??e)))},[]),n?(0,h.jsx)(`pre`,{"data-testid":`sdk-wasm-error`,children:n}):e?(0,h.jsxs)(`dl`,{"data-testid":`sdk-wasm-answers`,children:[(0,h.jsx)(`dt`,{children:`line_pitch(12, 3), Calibri 11's row (ascent + descent + 2)`}),(0,h.jsx)(`dd`,{"data-testid":`line-pitch`,children:e.linePitch}),(0,h.jsx)(`dt`,{children:`baseline(12, 3)`}),(0,h.jsx)(`dd`,{"data-testid":`baseline`,children:e.baseline}),(0,h.jsxs)(`dt`,{children:[`char_count('😀'), scalar values ('😀'.length is `,2,`)`]}),(0,h.jsx)(`dd`,{"data-testid":`char-count`,children:e.charCount}),(0,h.jsx)(`dt`,{children:`load and instantiate`}),(0,h.jsxs)(`dd`,{children:[e.loadMs.toFixed(1),` ms`]})]}):(0,h.jsx)(`div`,{children:`Loading the sdk's WebAssembly…`})},_=g.bind({}),_.storyName=`Sdk wasm`,v={title:`Wasm`,component:_},y=[`SdkWasmLoads`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [answers, setAnswers] = useState<Answers | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const start = performance.now();
    SdkWasm.load().then(wasm => {
      setAnswers({
        linePitch: wasm.line_pitch(12, 3),
        baseline: wasm.baseline(12, 3),
        charCount: wasm.char_count('😀'),
        loadMs: performance.now() - start
      });
    }, (e: unknown) => setError(String((e as Error)?.cause ?? e)));
  }, []);
  if (error) return <pre data-testid="sdk-wasm-error">{error}</pre>;
  if (!answers) return <div>Loading the sdk's WebAssembly…</div>;
  return <dl data-testid="sdk-wasm-answers">
      <dt>line_pitch(12, 3), Calibri 11's row (ascent + descent + 2)</dt>
      <dd data-testid="line-pitch">{answers.linePitch}</dd>
      <dt>baseline(12, 3)</dt>
      <dd data-testid="baseline">{answers.baseline}</dd>
      <dt>char_count('😀'), scalar values ('😀'.length is {'😀'.length})</dt>
      <dd data-testid="char-count">{answers.charCount}</dd>
      <dt>load and instantiate</dt>
      <dd>{answers.loadMs.toFixed(1)} ms</dd>
    </dl>;
}`,..._.parameters?.docs?.source}}}})))()}b();export{_ as SdkWasmLoads,y as __namedExportsOrder,v as default};