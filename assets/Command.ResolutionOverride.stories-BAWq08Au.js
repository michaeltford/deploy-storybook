import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{U as i,Z as a,pt as o}from"./esm-BwAES4tr.js";import{n as s,r as c,t as l}from"./CommandButton-BeMfB7kM.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{u=t(n(),1),a(),s(),d=r(),{CommandScope:f,FocusActivation:p,CommandScopeContext:m,CommandAnchorProvider:h}=o,g=()=>{let e=(0,u.useRef)(null),t=(0,u.useRef)(null),n=(0,u.useRef)(null),r=(0,u.useRef)(null),[a,o]=(0,u.useState)(`—`),s=(0,u.useRef)(o);s.current=o;let{app:g,sheet:_,editor:v,focus:y}=(0,u.useMemo)(()=>{let e=new f(`app`),t=e.createChild(`sheet`),n=t.createChild(`editor`);return e.updateCommand(`whoami`,{icon:`🧭`,label:`Nowhere special`,shortcut:{key:`I`,modifiers:[i.Ctrl]},callback:()=>s.current(`ran: app`)}),t.updateCommand(`whoami`,{label:`On the Sheet`,callback:()=>s.current(`ran: sheet`)}),n.updateCommand(`whoami`,{label:`In the Cell Editor`,callback:()=>s.current(`ran: editor`)}),{app:e,sheet:t,editor:n,focus:new p}},[]),[b,x]=(0,u.useState)(()=>y.getAnchor()?.key??`(root)`);(0,u.useEffect)(()=>y.subscribe(()=>x(y.getAnchor()?.key??`(root)`)),[y]),(0,u.useEffect)(()=>{if(!e.current)return;let i=y.attach(e.current),a=[];return t.current&&a.push(y.register(t.current,g)),n.current&&a.push(y.register(n.current,_)),r.current&&a.push(y.register(r.current,v)),()=>{i(),a.forEach(e=>e())}},[y,g,_,v]);let S=e=>({padding:12,marginTop:8,borderRadius:4,outline:`none`,cursor:`pointer`,border:`2px solid ${b===e?`#3b82f6`:`#ccc`}`,background:b===e?`#eaf2ff`:`#fafafa`});return(0,d.jsx)(m.Provider,{value:g,children:(0,d.jsx)(h,{tracker:y,children:(0,d.jsxs)(`div`,{ref:e,style:{fontFamily:`sans-serif`,padding:16},children:[(0,d.jsx)(`h3`,{children:`Resolution Override — one button + one shortcut, both follow focus`}),(0,d.jsxs)(`div`,{style:c,children:[(0,d.jsx)(l,{commandKey:`whoami`}),(0,d.jsxs)(`span`,{style:{color:`#888`},children:[`anchored to: `,(0,d.jsx)(`b`,{children:b})]}),(0,d.jsxs)(`span`,{style:{color:`#888`},children:[`last shortcut: `,(0,d.jsx)(`b`,{children:a})]})]}),(0,d.jsxs)(`div`,{ref:t,tabIndex:0,style:S(`app`),children:[`App level — click here (root default)`,(0,d.jsxs)(`div`,{ref:n,tabIndex:0,style:S(`sheet`),children:[`Sheet — click here`,(0,d.jsx)(`div`,{ref:r,tabIndex:0,style:S(`editor`),children:`Cell editor — click here (most specific)`})]})]}),(0,d.jsxs)(`p`,{style:{color:`#888`,maxWidth:600},children:[`The button's `,(0,d.jsx)(`b`,{children:`icon`}),` (🧭) and the `,(0,d.jsx)(`b`,{children:`Ctrl/⌘+I`}),` shortcut come from the root and never change. Click a deeper region and only the `,(0,d.jsx)(`b`,{children:`label`}),` re-resolves — `,(0,d.jsx)(`i`,{children:`Nowhere special`}),` → `,(0,d.jsx)(`i`,{children:`On the Sheet`}),` → `,(0,d.jsx)(`i`,{children:`In the Cell Editor`}),`. Now press `,(0,d.jsx)(`b`,{children:`Ctrl/⌘+I`}),`in each region: the `,(0,d.jsx)(`i`,{children:`last shortcut`}),` readout shows the dispatcher ran the`,(0,d.jsx)(`b`,{children:` overriding`}),` callback for the focused scope — key dispatch resolves through the exact same anchor/override path as the button.`]})]})})})},_=g.bind({}),_.storyName=`Resolution Override`,v={title:`Commands`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [lastRan, setLastRan] = useState('—');
  const ranRef = useRef(setLastRan);
  ranRef.current = setLastRan;
  const {
    app,
    sheet,
    editor,
    focus
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    const editor = sheet.createChild('editor');
    // Root owns the shared bits (icon + shortcut); nested scopes override label AND callback.
    app.updateCommand('whoami', {
      icon: '🧭',
      label: 'Nowhere special',
      shortcut: {
        key: 'I',
        modifiers: [KeyModifiers.Ctrl]
      },
      callback: () => ranRef.current('ran: app')
    });
    sheet.updateCommand('whoami', {
      label: 'On the Sheet',
      callback: () => ranRef.current('ran: sheet')
    });
    editor.updateCommand('whoami', {
      label: 'In the Cell Editor',
      callback: () => ranRef.current('ran: editor')
    });
    return {
      app,
      sheet,
      editor,
      focus: new FocusActivation()
    };
  }, []);

  // Live readout of which scope the focus tracker currently anchors to.
  const [anchorKey, setAnchorKey] = useState(() => focus.getAnchor()?.key ?? '(root)');
  useEffect(() => focus.subscribe(() => setAnchorKey(focus.getAnchor()?.key ?? '(root)')), [focus]);

  // NOTE: this is the **manual** form — you would almost never hand-roll attach/register in
  // real code. A feature-region provider creates its scope (\`parent.createChild\`) and lets
  // \`CommandScopeContext\` dispose it on unmount, and registers/unregisters its element with
  // the tracker. It's inlined here only so the focus→scope wiring is visible. (Same spirit as
  // keybinds being baked into the resolver rather than wired by hand.)
  useEffect(() => {
    if (!rootRef.current) return;
    const detach = focus.attach(rootRef.current);
    const removers: Array<() => void> = [];
    if (appRef.current) removers.push(focus.register(appRef.current, app));
    if (sheetRef.current) removers.push(focus.register(sheetRef.current, sheet));
    if (editorRef.current) removers.push(focus.register(editorRef.current, editor));
    return () => {
      detach();
      removers.forEach(r => r());
    };
  }, [focus, app, sheet, editor]);
  const regionStyle = (key: string): React.CSSProperties => ({
    padding: 12,
    marginTop: 8,
    borderRadius: 4,
    outline: 'none',
    cursor: 'pointer',
    border: \`2px solid \${anchorKey === key ? '#3b82f6' : '#ccc'}\`,
    background: anchorKey === key ? '#eaf2ff' : '#fafafa'
  });
  return <CommandScopeContext.Provider value={app}>
      <CommandAnchorProvider tracker={focus}>
        {/* Keybinds are automatic: the resolver binds them to the focus tracker's region. */}
        <div ref={rootRef} style={{
        fontFamily: 'sans-serif',
        padding: 16
      }}>
          <h3>Resolution Override — one button + one shortcut, both follow focus</h3>
          <div style={rowStyle}>
            <CommandButton commandKey="whoami" />
            <span style={{
            color: '#888'
          }}>anchored to: <b>{anchorKey}</b></span>
            <span style={{
            color: '#888'
          }}>last shortcut: <b>{lastRan}</b></span>
          </div>

          {/* Nested registered regions: app ⊃ sheet ⊃ editor. */}
          <div ref={appRef} tabIndex={0} style={regionStyle('app')}>
            App level — click here (root default)
            <div ref={sheetRef} tabIndex={0} style={regionStyle('sheet')}>
              Sheet — click here
              <div ref={editorRef} tabIndex={0} style={regionStyle('editor')}>
                Cell editor — click here (most specific)
              </div>
            </div>
          </div>

          <p style={{
          color: '#888',
          maxWidth: 600
        }}>
            The button's <b>icon</b> (🧭) and the <b>Ctrl/⌘+I</b> shortcut come from the root and
            never change. Click a deeper region and only the <b>label</b> re-resolves — <i>Nowhere
            special</i> → <i>On the Sheet</i> → <i>In the Cell Editor</i>. Now press <b>Ctrl/⌘+I</b>
            in each region: the <i>last shortcut</i> readout shows the dispatcher ran the
            <b> overriding</b> callback for the focused scope — key dispatch resolves through the
            exact same anchor/override path as the button.
          </p>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,..._.parameters?.docs?.source}}},y=[`ResolutionOverride`]}))();export{_ as ResolutionOverride,y as __namedExportsOrder,v as default};