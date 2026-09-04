import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,ManualActivation:f,CommandScopeContext:p,CommandAnchorProvider:m}=a,h=()=>{let{app:e,sheet:t}=(0,l.useMemo)(()=>{let e=new d(`app`),t=e.createChild(`sheet`);return e.updateCommand(`cellInfo`,{label:`Cell 0`,callback:()=>{}}),{app:e,sheet:t}},[]),n=(0,l.useMemo)(()=>new f(t),[t]),r=(0,l.useMemo)(()=>new f(t),[t]);return(0,u.jsx)(p.Provider,{value:e,children:(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16},children:[(0,u.jsx)(`h3`,{children:`Debounced — cadence is per-container (on the resolver)`}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:160,color:`#666`},children:`Immediate:`}),(0,u.jsx)(m,{tracker:n,children:(0,u.jsx)(c,{commandKey:`cellInfo`})})]}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:160,color:`#666`},children:`Debounced (150ms):`}),(0,u.jsx)(m,{tracker:r,debounce:150,children:(0,u.jsx)(c,{commandKey:`cellInfo`})})]}),(0,u.jsx)(`div`,{style:s,children:(0,u.jsx)(`button`,{onClick:()=>{let e=0,n=window.setInterval(()=>{e++,t.updateCommand(`cellInfo`,{label:`Cell ${e}`}),e>=20&&window.clearInterval(n)},30)},style:{padding:`6px 10px`},children:`Spin "selection" ×20 (30ms each)`})}),(0,u.jsxs)(`p`,{style:{color:`#888`,maxWidth:560},children:[`Same registry, two resolvers: the immediate one updates every tick during the spin; the `,(0,u.jsxs)(`code`,{children:[`debounce=`,`{150}`]}),` one re-resolves only after the burst settles. The cadence lives on each container's resolver — actions stay immediate.`]})]})})},g=h.bind({}),g.storyName=`Debounced`,_={title:`Commands`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    app,
    sheet
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    app.updateCommand('cellInfo', {
      label: 'Cell 0',
      callback: () => {}
    });
    return {
      app,
      sheet
    };
  }, []);

  // Two containers over one registry, both anchored to the sheet — different cadences.
  const immediate = useMemo(() => new ManualActivation(sheet), [sheet]);
  const debounced = useMemo(() => new ManualActivation(sheet), [sheet]);
  const spin = (): void => {
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      sheet.updateCommand('cellInfo', {
        label: \`Cell \${i}\`
      }); // re-contribution stream
      if (i >= 20) window.clearInterval(id);
    }, 30);
  };
  return <CommandScopeContext.Provider value={app}>
      <div style={{
      fontFamily: 'sans-serif',
      padding: 16
    }}>
        <h3>Debounced — cadence is per-container (on the resolver)</h3>
        <div style={rowStyle}>
          <span style={{
          width: 160,
          color: '#666'
        }}>Immediate:</span>
          <CommandAnchorProvider tracker={immediate}>
            <CommandButton commandKey="cellInfo" />
          </CommandAnchorProvider>
        </div>
        <div style={rowStyle}>
          <span style={{
          width: 160,
          color: '#666'
        }}>Debounced (150ms):</span>
          <CommandAnchorProvider tracker={debounced} debounce={150}>
            <CommandButton commandKey="cellInfo" />
          </CommandAnchorProvider>
        </div>
        <div style={rowStyle}>
          <button onClick={spin} style={{
          padding: '6px 10px'
        }}>Spin "selection" ×20 (30ms each)</button>
        </div>
        <p style={{
        color: '#888',
        maxWidth: 560
      }}>
          Same registry, two resolvers: the immediate one updates every tick during the spin;
          the <code>debounce={'{150}'}</code> one re-resolves only after the burst settles.
          The cadence lives on each container's resolver — actions stay immediate.
        </p>
      </div>
    </CommandScopeContext.Provider>;
}`,...g.parameters?.docs?.source}}},v=[`Debounced`]}))();export{g as Debounced,v as __namedExportsOrder,_ as default};