import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,FocusActivation:f,CommandScopeContext:p,CommandAnchorProvider:m}=a,h=()=>{let e=(0,l.useRef)(null),t=(0,l.useRef)(null),n=(0,l.useRef)(null),{app:r,sheet:i,scripting:a,mainFocus:o,scriptFocus:h}=(0,l.useMemo)(()=>{let e=new d(`app`),t=e.createChild(`sheet`),n=e.createChild(`scripting`);return e.updateCommand(`undo`,{label:`Undo`,icon:`↶`,callback:()=>console.log(`undo`)}),t.updateCommand(`bold`,{label:`Bold`,icon:`B`,callback:()=>console.log(`bold`)}),n.updateCommand(`save`,{label:`Save`,icon:`💾`,callback:()=>console.log(`save`)}),{app:e,sheet:t,scripting:n,mainFocus:new f(null,t),scriptFocus:new f(null,n)}},[]),[g,_]=(0,l.useState)(()=>o.getAnchor()?.key??`(none)`),[v,y]=(0,l.useState)(()=>h.getAnchor()?.key??`(none)`);(0,l.useEffect)(()=>o.subscribe(()=>_(o.getAnchor()?.key??`(none)`)),[o]),(0,l.useEffect)(()=>h.subscribe(()=>y(h.getAnchor()?.key??`(none)`)),[h]),(0,l.useEffect)(()=>{if(!e.current)return;let r=o.attach(e.current),s=[];return t.current&&s.push(o.register(t.current,i)),n.current&&s.push(o.register(n.current,a)),()=>{r(),s.forEach(e=>e())}},[o,i,a]),(0,l.useEffect)(()=>{if(!n.current)return;let e=h.attach(n.current),t=h.register(n.current,a);return()=>{e(),t()}},[h,a]);let b=e=>({flex:1,padding:12,borderRadius:4,outline:`none`,border:`2px solid ${e?`#3b82f6`:`#ccc`}`,background:e?`#eaf2ff`:`#fafafa`});return(0,u.jsxs)(`div`,{ref:e,style:{fontFamily:`sans-serif`,padding:16},children:[(0,u.jsx)(`h3`,{children:`Two toolbars — both focus-driven, region-scoped`}),(0,u.jsx)(p.Provider,{value:r,children:(0,u.jsx)(m,{tracker:o,debounce:150,children:(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`strong`,{style:{width:70},children:`Main`}),(0,u.jsx)(c,{commandKey:`bold`}),(0,u.jsx)(c,{commandKey:`undo`}),(0,u.jsxs)(`span`,{style:{color:`#888`},children:[`anchor: `,(0,u.jsx)(`b`,{children:g})]})]})})}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:8},children:[(0,u.jsx)(`div`,{ref:t,tabIndex:0,style:b(g===`sheet`),children:`Sheet area — click to focus`}),(0,u.jsxs)(`div`,{ref:n,tabIndex:0,style:b(g===`scripting`),children:[(0,u.jsx)(p.Provider,{value:a,children:(0,u.jsx)(m,{tracker:h,debounce:150,children:(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(`strong`,{style:{width:70},children:`Script`}),(0,u.jsx)(c,{commandKey:`save`}),(0,u.jsx)(c,{commandKey:`undo`}),(0,u.jsxs)(`span`,{style:{color:`#888`},children:[`anchor: `,(0,u.jsx)(`b`,{children:v})]})]})})}),(0,u.jsx)(`div`,{style:{marginTop:8,color:`#555`},children:`Scripting area — click to focus`})]})]}),(0,u.jsxs)(`p`,{style:{color:`#888`,maxWidth:640,marginTop:12},children:[`Focus the `,(0,u.jsx)(`b`,{children:`Sheet area`}),` → main `,(0,u.jsx)(`b`,{children:`Bold`}),` enabled. Focus the `,(0,u.jsx)(`b`,{children:`Scripting area`}),` → main`,` `,(0,u.jsx)(`b`,{children:`Bold disables`}),` (sheet isn't in the `,(0,u.jsx)(`code`,{children:`scripting → root`}),` chain). The `,(0,u.jsx)(`b`,{children:`Script`}),` `,`toolbar's `,(0,u.jsx)(`b`,{children:`Save`}),` stays enabled either way — focus in the sheet is outside its region, so its anchor never leaves `,(0,u.jsx)(`code`,{children:`scripting`}),`. `,(0,u.jsx)(`b`,{children:`Undo`}),` (root) is always enabled in both. No pin — just region-scoped focus.`]})]})},g=h.bind({}),g.storyName=`Two Toolbars (Focus)`,_={title:`Commands`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const scriptingRef = useRef<HTMLDivElement>(null);
  const {
    app,
    sheet,
    scripting,
    mainFocus,
    scriptFocus
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    const scripting = app.createChild('scripting');
    app.updateCommand('undo', {
      label: 'Undo',
      icon: '↶',
      callback: () => console.log('undo')
    });
    sheet.updateCommand('bold', {
      label: 'Bold',
      icon: 'B',
      callback: () => console.log('bold')
    });
    scripting.updateCommand('save', {
      label: 'Save',
      icon: '💾',
      callback: () => console.log('save')
    });
    // Each tracker's cold-start value is its ctor \`initialAnchor\` — so each toolbar resolves
    // correctly BEFORE anything is focused; real focus advances the anchors thereafter.
    return {
      app,
      sheet,
      scripting,
      mainFocus: new FocusActivation(null, sheet),
      scriptFocus: new FocusActivation(null, scripting)
    };
  }, []);

  // Live anchor indicators straight off each tracker.
  const [mainKey, setMainKey] = useState(() => mainFocus.getAnchor()?.key ?? '(none)');
  const [scriptKey, setScriptKey] = useState(() => scriptFocus.getAnchor()?.key ?? '(none)');
  useEffect(() => mainFocus.subscribe(() => setMainKey(mainFocus.getAnchor()?.key ?? '(none)')), [mainFocus]);
  useEffect(() => scriptFocus.subscribe(() => setScriptKey(scriptFocus.getAnchor()?.key ?? '(none)')), [scriptFocus]);

  // Main tracker: attached to the app root, so it sees focus in BOTH regions.
  useEffect(() => {
    if (!rootRef.current) return;
    const detach = mainFocus.attach(rootRef.current);
    const removers: Array<() => void> = [];
    if (sheetRef.current) removers.push(mainFocus.register(sheetRef.current, sheet));
    if (scriptingRef.current) removers.push(mainFocus.register(scriptingRef.current, scripting));
    return () => {
      detach();
      removers.forEach(r => r());
    };
  }, [mainFocus, sheet, scripting]);

  // Script tracker: attached to the SCRIPTING region only — focus outside it never reaches this tracker.
  useEffect(() => {
    if (!scriptingRef.current) return;
    const detach = scriptFocus.attach(scriptingRef.current);
    const remove = scriptFocus.register(scriptingRef.current, scripting);
    return () => {
      detach();
      remove();
    };
  }, [scriptFocus, scripting]);
  const regionStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: 12,
    borderRadius: 4,
    outline: 'none',
    border: \`2px solid \${active ? '#3b82f6' : '#ccc'}\`,
    background: active ? '#eaf2ff' : '#fafafa'
  });
  return <div ref={rootRef} style={{
    fontFamily: 'sans-serif',
    padding: 16
  }}>
      <h3>Two toolbars — both focus-driven, region-scoped</h3>

      {/* Main toolbar — its resolver follows focus across the whole app. */}
      <CommandScopeContext.Provider value={app}>
        <CommandAnchorProvider tracker={mainFocus} debounce={150}>
          <div style={rowStyle}>
            <strong style={{
            width: 70
          }}>Main</strong>
            <CommandButton commandKey="bold" />
            <CommandButton commandKey="undo" />
            <span style={{
            color: '#888'
          }}>anchor: <b>{mainKey}</b></span>
          </div>
        </CommandAnchorProvider>
      </CommandScopeContext.Provider>

      <div style={{
      display: 'flex',
      gap: 12,
      marginTop: 8
    }}>
        <div ref={sheetRef} tabIndex={0} style={regionStyle(mainKey === 'sheet')}>
          Sheet area — click to focus
        </div>

        {/* Scripting region contains its OWN toolbar, whose tracker is scoped to this region. */}
        <div ref={scriptingRef} tabIndex={0} style={regionStyle(mainKey === 'scripting')}>
          <CommandScopeContext.Provider value={scripting}>
            <CommandAnchorProvider tracker={scriptFocus} debounce={150}>
              <div style={rowStyle}>
                <strong style={{
                width: 70
              }}>Script</strong>
                <CommandButton commandKey="save" />
                <CommandButton commandKey="undo" />
                <span style={{
                color: '#888'
              }}>anchor: <b>{scriptKey}</b></span>
              </div>
            </CommandAnchorProvider>
          </CommandScopeContext.Provider>
          <div style={{
          marginTop: 8,
          color: '#555'
        }}>Scripting area — click to focus</div>
        </div>
      </div>

      <p style={{
      color: '#888',
      maxWidth: 640,
      marginTop: 12
    }}>
        Focus the <b>Sheet area</b> → main <b>Bold</b> enabled. Focus the <b>Scripting area</b> → main{' '}
        <b>Bold disables</b> (sheet isn't in the <code>scripting → root</code> chain). The <b>Script</b>{' '}
        toolbar's <b>Save</b> stays enabled either way — focus in the sheet is outside its region, so its
        anchor never leaves <code>scripting</code>. <b>Undo</b> (root) is always enabled in both. No pin —
        just region-scoped focus.
      </p>
    </div>;
}`,...g.parameters?.docs?.source}}},v=[`TwoToolbarsFocus`]}))();export{g as TwoToolbarsFocus,v as __namedExportsOrder,_ as default};