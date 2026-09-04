import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,ManualActivation:f,CommandScopeContext:p,CommandAnchorProvider:m}=a,h=()=>{let{app:e,sheet:t,scripting:n}=(0,l.useMemo)(()=>{let e=new d(`app`),t=e.createChild(`sheet`),n=e.createChild(`scripting`);return e.updateCommand(`copy`,{label:`Copy`,icon:`📋`}),t.updateCommand(`copy`,{callback:()=>console.log(`copy (from context menu)`)}),n.updateCommand(`run`,{label:`Run`,icon:`▶`,callback:()=>console.log(`run`)}),{app:e,sheet:t,scripting:n}},[]),r=(0,l.useMemo)(()=>new f(n),[n]),i=(0,l.useMemo)(()=>new f(t),[t]),[a,o]=(0,l.useState)(!1);return(0,u.jsx)(p.Provider,{value:e,children:(0,u.jsx)(m,{tracker:r,children:(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16},children:[(0,u.jsx)(`h3`,{children:`Context Menu — its own resolver (a parallel anchor)`}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:180,color:`#666`},children:`Main toolbar (anchor: scripting):`}),(0,u.jsx)(c,{commandKey:`copy`}),(0,u.jsx)(c,{commandKey:`run`})]}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`span`,{style:{width:180,color:`#666`},children:`Sheet:`}),(0,u.jsx)(`button`,{onClick:()=>o(e=>!e),style:{padding:`6px 10px`},children:`Right-click a sheet cell ▾`})]}),a&&(0,u.jsx)(m,{tracker:i,children:(0,u.jsx)(`div`,{style:{border:`1px solid #bbb`,borderRadius:4,width:220,padding:4,boxShadow:`0 2px 8px rgba(0,0,0,0.15)`,background:`white`},children:(0,u.jsx)(c,{commandKey:`copy`,onExecuted:()=>o(!1)})})}),(0,u.jsxs)(`p`,{style:{color:`#888`,maxWidth:560},children:[`Main `,(0,u.jsx)(`b`,{children:`Copy`}),` is disabled (its resolver's anchor is scripting), but the context menu has its `,(0,u.jsx)(`b`,{children:`own resolver`}),` anchored to the sheet → Copy `,(0,u.jsx)(`b`,{children:`enabled`}),`. Picking it ripples the main Copy button (per-key event across resolvers); the main toolbar's anchor is untouched.`]})]})})})},g=h.bind({}),g.storyName=`Context Menu (own resolver)`,_={title:`Commands`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    app,
    sheet,
    scripting
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    const scripting = app.createChild('scripting');
    app.updateCommand('copy', {
      label: 'Copy',
      icon: '📋'
    });
    sheet.updateCommand('copy', {
      callback: () => console.log('copy (from context menu)')
    });
    scripting.updateCommand('run', {
      label: 'Run',
      icon: '▶',
      callback: () => console.log('run')
    });
    return {
      app,
      sheet,
      scripting
    };
  }, []);

  // Main toolbar pinned to scripting (so "Copy" is off-chain → disabled).
  const mainTracker = useMemo(() => new ManualActivation(scripting), [scripting]);
  // The context menu is a SEPARATE resolver anchored to the sheet snapshot.
  const menuTracker = useMemo(() => new ManualActivation(sheet), [sheet]);
  const [menuOpen, setMenuOpen] = useState(false);
  return <CommandScopeContext.Provider value={app}>
      <CommandAnchorProvider tracker={mainTracker}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16
      }}>
          <h3>Context Menu — its own resolver (a parallel anchor)</h3>
          <div style={rowStyle}>
            <span style={{
            width: 180,
            color: '#666'
          }}>Main toolbar (anchor: scripting):</span>
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="run" />
          </div>
          <div style={rowStyle}>
            <span style={{
            width: 180,
            color: '#666'
          }}>Sheet:</span>
            <button onClick={() => setMenuOpen(o => !o)} style={{
            padding: '6px 10px'
          }}>
              Right-click a sheet cell ▾
            </button>
          </div>

          {menuOpen && <CommandAnchorProvider tracker={menuTracker}>
              <div style={{
            border: '1px solid #bbb',
            borderRadius: 4,
            width: 220,
            padding: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            background: 'white'
          }}>
                <CommandButton commandKey="copy" onExecuted={() => setMenuOpen(false)} />
              </div>
            </CommandAnchorProvider>}

          <p style={{
          color: '#888',
          maxWidth: 560
        }}>
            Main <b>Copy</b> is disabled (its resolver's anchor is scripting), but the context
            menu has its <b>own resolver</b> anchored to the sheet → Copy <b>enabled</b>. Picking
            it ripples the main Copy button (per-key event across resolvers); the main toolbar's
            anchor is untouched.
          </p>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...g.parameters?.docs?.source}}},v=[`ContextMenu`]}))();export{g as ContextMenu,v as __namedExportsOrder,_ as default};