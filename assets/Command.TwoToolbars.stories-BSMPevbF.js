import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{U as i,Z as a,pt as o}from"./esm-BwAES4tr.js";import{n as s,r as c,t as l}from"./CommandButton-BeMfB7kM.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{u=t(n(),1),a(),s(),d=r(),{CommandScope:f,FocusActivation:p,ManualActivation:m,CommandScopeContext:h,CommandAnchorProvider:g,useCommands:_}=o,v=({title:e,hint:t,accent:n,active:r,scope:i,focus:a})=>{let o=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(o.current)return a.register(o.current,i)},[a,i]),(0,d.jsxs)(`div`,{ref:o,tabIndex:0,style:{flex:1,minHeight:120,borderRadius:6,padding:12,cursor:`pointer`,outline:`none`,border:`2px solid ${r?n:`#ccc`}`,background:r?`${n}14`:`#fafafa`,boxShadow:r?`0 0 0 3px ${n}33`:`none`},children:[(0,d.jsxs)(`b`,{style:{color:r?n:`#444`},children:[e,r?` — anchor`:``]}),(0,d.jsx)(`div`,{style:{color:`#888`,fontSize:13,marginTop:6},children:t})]})},y=()=>{let[e]=_(`bold`);return(0,d.jsxs)(`span`,{style:{color:`#888`},children:[`bold state: `,(0,d.jsx)(`b`,{children:e?.getState()??!1?`ON`:`OFF`})]})},b=()=>{let e=(0,u.useRef)(null),{root:t,grid:n,script:r,focus:a,manualScript:o}=(0,u.useMemo)(()=>{let e=new f(`root`),t=e.createChild(`grid`),n=e.createChild(`script`);return e.updateCommand(`copy`,{label:`Copy`,icon:`📋`,shortcut:{key:`C`,modifiers:[i.Ctrl]}}),e.updateCommand(`bold`,{label:`Bold`,icon:`𝐁`,shortcut:{key:`B`,modifiers:[i.Ctrl]}}),e.updateCommand(`run`,{label:`Run`,icon:`▶`,shortcut:{key:`Enter`,modifiers:[i.Ctrl]}}),{root:e,grid:t,script:n,focus:new p(null,t),manualScript:new m(n)}},[]),[s,_]=(0,u.useState)(!1),[b,x]=(0,u.useState)(`—`);(0,u.useEffect)(()=>{n.updateCommand(`copy`,{callback:()=>x(`copy → CELLS (grid)`)})},[n]),(0,u.useEffect)(()=>{n.updateCommand(`bold`,{state:s,callback:()=>{_(e=>!e),x(`bold → ${s?`OFF`:`ON`} (grid)`)}})},[n,s]),(0,u.useEffect)(()=>{r.updateCommand(`copy`,{callback:()=>x(`copy → TEXT (script)`)}),r.updateCommand(`run`,{callback:()=>x(`run → SCRIPT (script)`)})},[r]);let[S,C]=(0,u.useState)(`grid`);return(0,u.useEffect)(()=>a.subscribe(()=>C(a.getAnchor()?.key??`(root)`)),[a]),(0,u.useEffect)(()=>{if(e.current)return a.attach(e.current)},[a]),(0,d.jsx)(h.Provider,{value:t,children:(0,d.jsxs)(`div`,{ref:e,style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12,height:`100%`,boxSizing:`border-box`},children:[(0,d.jsx)(`h3`,{style:{margin:0},children:`Two toolbars · two resolvers · one registry`}),(0,d.jsxs)(`div`,{style:{border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`},children:[(0,d.jsxs)(`div`,{style:{fontSize:12,color:`#999`,marginTop:4},children:[`Main toolbar — `,(0,d.jsx)(`code`,{children:`tracker=focus`})]}),(0,d.jsx)(g,{tracker:a,children:(0,d.jsxs)(`div`,{style:c,children:[(0,d.jsx)(l,{commandKey:`copy`}),(0,d.jsx)(l,{commandKey:`bold`}),(0,d.jsx)(y,{})]})}),(0,d.jsxs)(`div`,{style:{marginLeft:16,borderLeft:`3px solid #7048e8`,paddingLeft:12},children:[(0,d.jsxs)(`div`,{style:{fontSize:12,color:`#7048e8`,marginTop:4},children:[`Scripting subbar — `,(0,d.jsx)(`code`,{children:`tracker=manual(script)`})]}),(0,d.jsx)(g,{tracker:o,children:(0,d.jsxs)(`div`,{style:c,children:[(0,d.jsx)(l,{commandKey:`run`}),(0,d.jsx)(l,{commandKey:`copy`})]})})]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,d.jsx)(v,{title:`Grid area`,hint:`Click to focus. Contributes copy → CELLS and bold.`,accent:`#1971c2`,active:S===`grid`,scope:n,focus:a}),(0,d.jsx)(v,{title:`Script editor`,hint:`Click to focus. Contributes copy → TEXT and run.`,accent:`#7048e8`,active:S===`script`,scope:r,focus:a})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:24,color:`#888`},children:[(0,d.jsxs)(`span`,{children:[`anchor: `,(0,d.jsx)(`b`,{children:S})]}),(0,d.jsxs)(`span`,{children:[`last action: `,(0,d.jsx)(`b`,{style:{color:`#222`},children:b})]})]}),(0,d.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.5},children:[(0,d.jsx)(`b`,{children:`Focus the grid`}),` → main `,(0,d.jsx)(`i`,{children:`Copy`}),` = `,(0,d.jsx)(`b`,{children:`CELLS`}),`, subbar `,(0,d.jsx)(`i`,{children:`Copy`}),` = `,(0,d.jsx)(`b`,{children:`TEXT`}),` (same key, two anchors). `,(0,d.jsx)(`b`,{children:`Bold`}),` enabled, toggles its state. `,(0,d.jsx)(`b`,{children:`Focus the script editor`}),` → main `,(0,d.jsx)(`i`,{children:`Copy`}),` flips to `,(0,d.jsx)(`b`,{children:`TEXT`}),` and `,(0,d.jsx)(`i`,{children:`Bold`}),` goes `,(0,d.jsx)(`b`,{children:`disabled`}),` (off-chain). The subbar never changes — `,(0,d.jsx)(`i`,{children:`Run`}),` stays enabled and `,(0,d.jsx)(`i`,{children:`Copy`}),` stays TEXT no matter what is focused (pinned resolver). `,(0,d.jsx)(`code`,{children:`Mod+C`}),` / `,(0,d.jsx)(`code`,{children:`Mod+B`}),` work while a panel is focused.`]})]})})},x=b.bind({}),x.args={},x.storyName=`Two Toolbars (pinned vs focus)`,S={title:`Commands`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const rootElRef = useRef<HTMLDivElement>(null);
  const {
    root,
    grid,
    script,
    focus,
    manualScript
  } = useMemo(() => {
    const root = new CommandScope('root');
    const grid = root.createChild('grid');
    const script = root.createChild('script');
    // Catalog (app-load): static chrome at the ROOT — buttons render even when the behavior is
    // off-chain. copy has NO callback here ⇒ disabled at root (the "chrome at load" state).
    root.updateCommand('copy', {
      label: 'Copy',
      icon: '📋',
      shortcut: {
        key: 'C',
        modifiers: [KeyModifiers.Ctrl]
      }
    });
    root.updateCommand('bold', {
      label: 'Bold',
      icon: '𝐁',
      shortcut: {
        key: 'B',
        modifiers: [KeyModifiers.Ctrl]
      }
    });
    root.updateCommand('run', {
      label: 'Run',
      icon: '▶',
      shortcut: {
        key: 'Enter',
        modifiers: [KeyModifiers.Ctrl]
      }
    });
    return {
      root,
      grid,
      script,
      focus: new FocusActivation(null, grid),
      // initial anchor = grid (cold-start)
      manualScript: new ManualActivation(script) // pinned: the subbar resolves from \`script\`, always
    };
  }, []);
  const [bold, setBold] = useState(false);
  const [last, setLast] = useState('—');

  // grid feature (mounts once, persistent): copy → CELLS, and bold as a STATE toggle. Re-contributing
  // on \`bold\` change re-resolves the toggle (the \`updateCommand\` + invalidate pattern of Q4 step 2).
  useEffect(() => {
    grid.updateCommand<boolean>('copy', {
      callback: () => setLast('copy → CELLS (grid)')
    });
  }, [grid]);
  useEffect(() => {
    grid.updateCommand<boolean>('bold', {
      state: bold,
      callback: () => {
        setBold(v => !v);
        setLast(\`bold → \${bold ? 'OFF' : 'ON'} (grid)\`);
      }
    });
  }, [grid, bold]);

  // scripting feature (mounts once, persistent): copy → TEXT, and run.
  useEffect(() => {
    script.updateCommand('copy', {
      callback: () => setLast('copy → TEXT (script)')
    });
    script.updateCommand('run', {
      callback: () => setLast('run → SCRIPT (script)')
    });
  }, [script]);

  // Anchor readout. (The cold-start anchor is the tracker's ctor \`initialAnchor\` — \`grid\`, above.)
  const [anchorKey, setAnchorKey] = useState('grid');
  useEffect(() => {
    return focus.subscribe(() => setAnchorKey(focus.getAnchor()?.key ?? '(root)'));
  }, [focus]);
  useEffect(() => {
    if (!rootElRef.current) return;
    return focus.attach(rootElRef.current);
  }, [focus]);
  return <CommandScopeContext.Provider value={root}>
      <div ref={rootElRef} style={{
      fontFamily: 'sans-serif',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      height: '100%',
      boxSizing: 'border-box'
    }}>
        <h3 style={{
        margin: 0
      }}>Two toolbars · two resolvers · one registry</h3>

        {/* MAIN TOOLBAR — resolver A: anchored to focus (grid │ script). */}
        <div style={{
        border: '1px solid #ddd',
        borderRadius: 6,
        padding: '4px 12px'
      }}>
          <div style={{
          fontSize: 12,
          color: '#999',
          marginTop: 4
        }}>Main toolbar — <code>tracker=focus</code></div>
          <CommandAnchorProvider tracker={focus}>
            <div style={rowStyle}>
              <CommandButton commandKey="copy" />
              <CommandButton commandKey="bold" />
              <BoldStateBadge />
            </div>
          </CommandAnchorProvider>

          {/* SCRIPTING SUBBAR — resolver B: pinned to \`script\`, ignores focus. Nested visually under
              the main toolbar (the real app's layout), but its own resolver/anchor. */}
          <div style={{
          marginLeft: 16,
          borderLeft: '3px solid #7048e8',
          paddingLeft: 12
        }}>
            <div style={{
            fontSize: 12,
            color: '#7048e8',
            marginTop: 4
          }}>Scripting subbar — <code>tracker=manual(script)</code></div>
            <CommandAnchorProvider tracker={manualScript}>
              <div style={rowStyle}>
                <CommandButton commandKey="run" />
                <CommandButton commandKey="copy" />
              </div>
            </CommandAnchorProvider>
          </div>
        </div>

        {/* The two focusable areas that drive the focus tracker. */}
        <div style={{
        display: 'flex',
        gap: 12
      }}>
          <FocusPanel title="Grid area" hint="Click to focus. Contributes copy → CELLS and bold." accent="#1971c2" active={anchorKey === 'grid'} scope={grid} focus={focus} />
          <FocusPanel title="Script editor" hint="Click to focus. Contributes copy → TEXT and run." accent="#7048e8" active={anchorKey === 'script'} scope={script} focus={focus} />
        </div>

        <div style={{
        display: 'flex',
        gap: 24,
        color: '#888'
      }}>
          <span>anchor: <b>{anchorKey}</b></span>
          <span>last action: <b style={{
            color: '#222'
          }}>{last}</b></span>
        </div>

        <div style={{
        background: '#f7f7f9',
        border: '1px solid #e5e5ea',
        borderRadius: 6,
        padding: '10px 14px',
        color: '#555',
        fontSize: 14,
        lineHeight: 1.5
      }}>
          <b>Focus the grid</b> → main <i>Copy</i> = <b>CELLS</b>, subbar <i>Copy</i> = <b>TEXT</b> (same
          key, two anchors). <b>Bold</b> enabled, toggles its state. <b>Focus the script editor</b> →
          main <i>Copy</i> flips to <b>TEXT</b> and <i>Bold</i> goes <b>disabled</b> (off-chain). The
          subbar never changes — <i>Run</i> stays enabled and <i>Copy</i> stays TEXT no matter what is
          focused (pinned resolver). <code>Mod+C</code> / <code>Mod+B</code> work while a panel is focused.
        </div>
      </div>
    </CommandScopeContext.Provider>;
}`,...x.parameters?.docs?.source}}},C=[`TwoToolbars`]}))();export{x as TwoToolbars,C as __namedExportsOrder,S as default};