import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,ManualActivation:f,CommandScopeContext:p,CommandAnchorProvider:m,useCommandExecute:h}=a,g=()=>{let e=h();return(0,u.jsx)(`button`,{onClick:()=>e(`copy`),style:{padding:`6px 10px`},children:`Fire copy imperatively`})},_=()=>{let{app:e,sheet:t}=(0,l.useMemo)(()=>{let e=new d(`app`),t=e.createChild(`sheet`);return e.updateCommand(`copy`,{label:`Copy`,icon:`📋`}),e.updateCommand(`paste`,{label:`Paste`,icon:`📥`}),t.updateCommand(`copy`,{callback:()=>console.log(`copy executed`)}),t.updateCommand(`paste`,{callback:()=>{},disabledReasons:[`Clipboard is empty`]}),{app:e,sheet:t}},[]),n=(0,l.useMemo)(()=>new f(t),[t]);return(0,u.jsx)(p.Provider,{value:e,children:(0,u.jsx)(m,{tracker:n,children:(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16},children:[(0,u.jsx)(`h3`,{children:`Imperative — per-key execute / dual ripple`}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:120,color:`#666`},children:`Toolbar:`}),(0,u.jsx)(c,{commandKey:`copy`}),(0,u.jsx)(c,{commandKey:`paste`})]}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:120,color:`#666`},children:`Context menu:`}),(0,u.jsx)(c,{commandKey:`copy`}),(0,u.jsx)(c,{commandKey:`paste`})]}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:120,color:`#666`},children:`Imperative:`}),(0,u.jsx)(g,{}),(0,u.jsx)(`span`,{style:{color:`#888`},children:`→ both "Copy" buttons ripple (one per-key execute event)`})]}),(0,u.jsxs)(`p`,{style:{color:`#888`,maxWidth:560},children:[`Label/icon from the app scope, action/veto from the sheet scope (cascade). A button just calls `,(0,u.jsx)(`code`,{children:`cmd.execute()`}),`; the imperative button calls the resolver's`,(0,u.jsx)(`code`,{children:` execute('copy')`}),`.`]})]})})})},v=_.bind({}),v.storyName=`Imperative`,y={title:`Commands`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const {
    app,
    sheet
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    app.updateCommand('copy', {
      label: 'Copy',
      icon: '📋'
    });
    app.updateCommand('paste', {
      label: 'Paste',
      icon: '📥'
    });
    sheet.updateCommand('copy', {
      callback: () => console.log('copy executed')
    });
    sheet.updateCommand('paste', {
      callback: () => {},
      disabledReasons: ['Clipboard is empty']
    });
    return {
      app,
      sheet
    };
  }, []);
  // This container pins its anchor to the sheet (no focus regions in this story).
  const tracker = useMemo(() => new ManualActivation(sheet), [sheet]);
  return <CommandScopeContext.Provider value={app}>
      <CommandAnchorProvider tracker={tracker}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16
      }}>
          <h3>Imperative — per-key execute / dual ripple</h3>
          <div style={rowStyle}>
            <span style={{
            width: 120,
            color: '#666'
          }}>Toolbar:</span>
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="paste" />
          </div>
          <div style={rowStyle}>
            <span style={{
            width: 120,
            color: '#666'
          }}>Context menu:</span>
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="paste" />
          </div>
          <div style={rowStyle}>
            <span style={{
            width: 120,
            color: '#666'
          }}>Imperative:</span>
            <FireButton />
            <span style={{
            color: '#888'
          }}>→ both "Copy" buttons ripple (one per-key execute event)</span>
          </div>
          <p style={{
          color: '#888',
          maxWidth: 560
        }}>
            Label/icon from the app scope, action/veto from the sheet scope (cascade). A button
            just calls <code>cmd.execute()</code>; the imperative button calls the resolver's
            <code> execute('copy')</code>.
          </p>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...v.parameters?.docs?.source}}},b=[`Imperative`]}))();export{v as Imperative,b as __namedExportsOrder,y as default};