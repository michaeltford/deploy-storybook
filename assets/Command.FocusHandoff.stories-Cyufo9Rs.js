import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,FocusActivation:f,CommandScopeContext:p,CommandAnchorProvider:m}=a,h=()=>{let e=(0,l.useRef)(null),t=(0,l.useRef)(null),n=(0,l.useRef)(null),{app:r,sheet:i,scripting:a,focus:o}=(0,l.useMemo)(()=>{let e=new d(`app`),t=e.createChild(`sheet`),n=e.createChild(`scripting`);return e.updateCommand(`copy`,{label:`Copy`,icon:`📋`}),t.updateCommand(`copy`,{callback:()=>console.log(`copy`)}),n.updateCommand(`run`,{label:`Run`,icon:`▶`,callback:()=>console.log(`run`)}),{app:e,sheet:t,scripting:n,focus:new f}},[]),[h,g]=(0,l.useState)(()=>o.getAnchor()?.key??`(none)`);(0,l.useEffect)(()=>o.subscribe(()=>g(o.getAnchor()?.key??`(none)`)),[o]),(0,l.useEffect)(()=>{if(!e.current)return;let r=o.attach(e.current),s=[];return t.current&&s.push(o.register(t.current,i)),n.current&&s.push(o.register(n.current,a)),()=>{r(),s.forEach(e=>e())}},[o,i,a]);let _=(e,t,n)=>(0,u.jsxs)(`div`,{ref:n,tabIndex:0,style:{flex:1,padding:12,borderRadius:4,outline:`none`,border:`2px solid ${h===e?`#3b82f6`:`#ccc`}`,background:h===e?`#eaf2ff`:`#fafafa`},children:[t,` `,h===e?`(active)`:``]});return(0,u.jsx)(p.Provider,{value:r,children:(0,u.jsx)(m,{tracker:o,debounce:150,children:(0,u.jsxs)(`div`,{ref:e,style:{fontFamily:`sans-serif`,padding:16},children:[(0,u.jsx)(`h3`,{children:`Focus Handoff — the toolbar's resolver tracks focus`}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(c,{commandKey:`copy`}),(0,u.jsx)(c,{commandKey:`run`}),(0,u.jsxs)(`span`,{style:{color:`#888`},children:[`active: `,(0,u.jsx)(`b`,{children:h})]})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:8},children:[_(`sheet`,`Sheet area — click to focus`,t),_(`scripting`,`Scripting area — click to focus`,n)]}),(0,u.jsxs)(`p`,{style:{color:`#888`,maxWidth:560},children:[`Focus the `,(0,u.jsx)(`b`,{children:`Sheet area`}),` → `,(0,u.jsx)(`b`,{children:`Copy`}),` enables, `,(0,u.jsx)(`b`,{children:`Run`}),` disables. Focus the`,(0,u.jsx)(`b`,{children:` Scripting area`}),` → the reverse. Focusing a button (chrome) leaves the anchor unchanged.`]})]})})})},g=h.bind({}),g.storyName=`Focus Handoff`,_={title:`Commands`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const scriptingRef = useRef<HTMLDivElement>(null);
  const {
    app,
    sheet,
    scripting,
    focus
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    const scripting = app.createChild('scripting');
    app.updateCommand('copy', {
      label: 'Copy',
      icon: '📋'
    });
    sheet.updateCommand('copy', {
      callback: () => console.log('copy')
    });
    scripting.updateCommand('run', {
      label: 'Run',
      icon: '▶',
      callback: () => console.log('run')
    });
    return {
      app,
      sheet,
      scripting,
      focus: new FocusActivation()
    };
  }, []);

  // Live "active" indicator straight off the focus tracker.
  const [activeKey, setActiveKey] = useState(() => focus.getAnchor()?.key ?? '(none)');
  useEffect(() => focus.subscribe(() => setActiveKey(focus.getAnchor()?.key ?? '(none)')), [focus]);

  // NOTE: this is the **manual** form — you would almost never hand-roll attach/register in
  // real code. A feature-region provider creates its scope (\`parent.createChild\`) and lets
  // \`CommandScopeContext\` dispose it on unmount, and registers/unregisters its element with
  // the tracker. It's inlined here only so the focus→scope wiring is visible. (Same spirit as
  // keybinds being baked into the resolver rather than wired by hand.)
  useEffect(() => {
    if (!rootRef.current) return;
    const detach = focus.attach(rootRef.current);
    const removers: Array<() => void> = [];
    if (sheetRef.current) removers.push(focus.register(sheetRef.current, sheet));
    if (scriptingRef.current) removers.push(focus.register(scriptingRef.current, scripting));
    return () => {
      detach();
      removers.forEach(r => r());
    };
  }, [focus, sheet, scripting]);
  const region = (key: string, label: string, ref: React.Ref<HTMLDivElement>): React.ReactNode => <div ref={ref} tabIndex={0} style={{
    flex: 1,
    padding: 12,
    borderRadius: 4,
    outline: 'none',
    border: \`2px solid \${activeKey === key ? '#3b82f6' : '#ccc'}\`,
    background: activeKey === key ? '#eaf2ff' : '#fafafa'
  }}>
      {label} {activeKey === key ? '(active)' : ''}
    </div>;
  return <CommandScopeContext.Provider value={app}>
      <CommandAnchorProvider tracker={focus} debounce={150}>
        <div ref={rootRef} style={{
        fontFamily: 'sans-serif',
        padding: 16
      }}>
          <h3>Focus Handoff — the toolbar's resolver tracks focus</h3>
          <div style={rowStyle}>
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="run" />
            <span style={{
            color: '#888'
          }}>active: <b>{activeKey}</b></span>
          </div>
          <div style={{
          display: 'flex',
          gap: 12,
          marginTop: 8
        }}>
            {region('sheet', 'Sheet area — click to focus', sheetRef)}
            {region('scripting', 'Scripting area — click to focus', scriptingRef)}
          </div>
          <p style={{
          color: '#888',
          maxWidth: 560
        }}>
            Focus the <b>Sheet area</b> → <b>Copy</b> enables, <b>Run</b> disables. Focus the
            <b> Scripting area</b> → the reverse. Focusing a button (chrome) leaves the anchor
            unchanged.
          </p>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...g.parameters?.docs?.source}}},v=[`FocusHandoff`]}))();export{g as FocusHandoff,v as __namedExportsOrder,_ as default};