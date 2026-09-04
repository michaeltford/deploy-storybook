import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,Zt as a,jt as o,pt as s}from"./esm-BwAES4tr.js";import{K as c,it as l}from"./esm-BaVuX9rf.js";import{n as u,r as d,t as f}from"./CommandButton-BeMfB7kM.js";var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{p=t(n(),1),a(),i(),l(),m=r(),u(),h=e=>{e.updateCommand(`undo`,{label:`Undo`,shortcut:{key:`z`,modifiers:[`ctrl`]}}),e.updateCommand(`redo`,{label:`Redo`,shortcut:{key:`y`,modifiers:[`ctrl`]}})},{CommandScope:g,FocusActivation:_,CommandScopeContext:v,CommandAnchorProvider:y}=s,b=({title:e,hint:t,accent:n,active:r,scope:i,focus:a,children:o})=>{let s=(0,p.useRef)(null);return(0,p.useEffect)(()=>{if(s.current)return a.register(s.current,i)},[a,i]),(0,m.jsxs)(`div`,{ref:s,tabIndex:0,style:{flex:1,minHeight:96,borderRadius:6,padding:12,cursor:`pointer`,outline:`none`,border:`2px solid ${r?n:`#ccc`}`,background:r?`${n}14`:`#fafafa`,boxShadow:r?`0 0 0 3px ${n}33`:`none`},children:[(0,m.jsxs)(`b`,{style:{color:r?n:`#444`},children:[e,r?` — anchor`:``]}),(0,m.jsx)(`div`,{style:{color:`#888`,fontSize:13,margin:`6px 0`},children:t}),o]})},x=()=>{let e=(0,p.useRef)(null),{studio:t,sheet:n,editor:r,scripting:i,focus:a,manager:s}=(0,p.useMemo)(()=>{let e=new o,t=new g(`studio`),n=t.createChild(`undo`,c,{manager:e}).createChild(`workbook`),r=n.createChild(`sheet`),i=r.createChild(`selection`).createChild(`editor`),a=n.createChild(`scripting`);return h(t),t.updateCommand(`undo`,{icon:`↶`}),t.updateCommand(`redo`,{icon:`↷`}),{studio:t,sheet:r,editor:i,scripting:a,focus:new _(null,r),manager:e}},[]),[l,u]=(0,p.useState)(0),[,x]=(0,p.useState)(0);(0,p.useEffect)(()=>s.addListener({onStackChange:()=>x(e=>e+1)}),[s]);let S=()=>{let e=l+1;u(e),s.addUndoOperation({description:`Edit #${e}`,undo:()=>(u(e-1),()=>u(e))})},[C,w]=(0,p.useState)(`sheet`);return(0,p.useEffect)(()=>a.subscribe(()=>w(a.getAnchor()?.key??`(root)`)),[a]),(0,p.useEffect)(()=>{if(e.current)return a.attach(e.current)},[a]),(0,m.jsx)(v.Provider,{value:t,children:(0,m.jsxs)(`div`,{ref:e,style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12,height:`100%`,boxSizing:`border-box`},children:[(0,m.jsx)(`h3`,{style:{margin:0},children:`Undo/Redo — dynamic disable + description (recipe-setter)`}),(0,m.jsx)(y,{tracker:a,children:(0,m.jsxs)(`div`,{style:{...d,border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`},children:[(0,m.jsx)(f,{commandKey:`undo`}),(0,m.jsx)(f,{commandKey:`redo`}),(0,m.jsx)(`span`,{style:{width:1,height:24,background:`#ddd`}}),(0,m.jsxs)(`button`,{onClick:S,style:{padding:`6px 10px`,borderRadius:4,border:`1px solid #1971c2`,background:`#e7f5ff`,cursor:`pointer`},children:[`Do action (Edit #`,l+1,`)`]}),(0,m.jsxs)(`span`,{style:{color:`#888`},children:[`doc value: `,(0,m.jsx)(`b`,{style:{color:`#222`},children:l})]})]})}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,m.jsx)(b,{title:`Sheet`,hint:`anchor: sheet → workbook → undo → studio`,accent:`#1971c2`,active:C===`sheet`,scope:n,focus:a,children:(0,m.jsx)(b,{title:`Editor (deeper z)`,hint:`anchor: editor → selection → sheet → … → undo`,accent:`#d9480f`,active:C===`editor`,scope:r,focus:a})}),(0,m.jsx)(b,{title:`Scripting (TaskPane)`,hint:`anchor: scripting → workbook → undo → studio`,accent:`#7048e8`,active:C===`scripting`,scope:i,focus:a})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:24,color:`#888`},children:[(0,m.jsxs)(`span`,{children:[`anchor: `,(0,m.jsx)(`b`,{children:C})]}),(0,m.jsxs)(`span`,{children:[`top undo: `,(0,m.jsx)(`b`,{style:{color:`#222`},children:s.getTopUndoDescription()??`—`})]}),(0,m.jsxs)(`span`,{children:[`top redo: `,(0,m.jsx)(`b`,{style:{color:`#222`},children:s.getTopRedoDescription()??`—`})]})]}),(0,m.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.5},children:[`Click `,(0,m.jsx)(`b`,{children:`Do action`}),` a few times → `,(0,m.jsx)(`i`,{children:`Undo`}),` enables and its tooltip/label becomes`,(0,m.jsx)(`b`,{children:` "Undo Edit #n"`}),` (dynamic description from the stack). Click `,(0,m.jsx)(`i`,{children:`Undo`}),` → the doc value reverts and `,(0,m.jsx)(`i`,{children:`Redo`}),` enables as `,(0,m.jsx)(`b`,{children:`"Redo Edit #n"`}),`. Undo to empty → `,(0,m.jsx)(`i`,{children:`Undo`}),` disables (`,(0,m.jsx)(`code`,{children:`title="Nothing to undo"`}),`). Now focus the `,(0,m.jsx)(`b`,{children:`Editor`}),` (deepest) or the`,(0,m.jsx)(`b`,{children:` Scripting`}),` branch — undo/redo stay fully resolvable from either, because the behavior lives on the `,(0,m.jsx)(`b`,{children:`Undo`}),` scope above them all. Same dynamic-disable/description recipe that the sheet's disable-block needs, in ~15 lines.`]})]})})},S=x.bind({}),S.args={},S.storyName=`Undo/Redo (recipe-setter)`,C={title:`Commands`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const rootElRef = useRef<HTMLDivElement>(null);
  const {
    studio,
    sheet,
    editor,
    scripting,
    focus,
    manager
  } = useMemo(() => {
    const manager = new UndoManager();
    const studio = new CommandScope('studio');
    // Bind the undo BEHAVIOR to the \`undo\` scope's lifetime at creation (no separate useEffect): the
    // contributor is passed by reference with its arg, runs now, and its disposer fires on dispose().
    const undo = studio.createChild('undo', contributeUndoCommands, {
      manager
    });
    const workbook = undo.createChild('workbook');
    const sheet = workbook.createChild('sheet');
    const selection = sheet.createChild('selection');
    const editor = selection.createChild('editor'); // deeper child = higher z
    const scripting = workbook.createChild('scripting'); // sibling branch
    seedUndoChrome(studio); // catalog chrome (story-local seed)
    studio.updateCommand('undo', {
      icon: '↶'
    }); // story-only: emoji icons read better than the 'Undo'/'Redo' tokens
    studio.updateCommand('redo', {
      icon: '↷'
    });
    return {
      studio,
      sheet,
      editor,
      scripting,
      focus: new FocusActivation(null, sheet),
      manager
    };
  }, []);

  // The "document": a counter; each action is an undoable step (revert ↔ redo).
  const [count, setCount] = useState(0);
  const [, force] = useState(0);
  useEffect(() => manager.addListener({
    onStackChange: () => force(n => n + 1)
  }), [manager]);
  const doAction = (): void => {
    // Side-effect (push) kept OUT of the setState updater so StrictMode's double-invoke can't push twice.
    const next = count + 1;
    setCount(next);
    manager.addUndoOperation({
      description: \`Edit #\${next}\`,
      undo: () => {
        setCount(next - 1);
        return () => setCount(next);
      } // returns the redo
    });
  };
  const [anchorKey, setAnchorKey] = useState('sheet');
  useEffect(() => {
    // (The cold-start anchor is the tracker's ctor \`initialAnchor\` — \`sheet\`, above.)
    return focus.subscribe(() => setAnchorKey(focus.getAnchor()?.key ?? '(root)'));
  }, [focus]);
  useEffect(() => {
    if (!rootElRef.current) return;
    return focus.attach(rootElRef.current);
  }, [focus]);
  return <CommandScopeContext.Provider value={studio}>
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
      }}>Undo/Redo — dynamic disable + description (recipe-setter)</h3>

        {/* Toolbar resolves against the focus anchor; undo/redo live up on the \`Undo\` ancestor scope. */}
        <CommandAnchorProvider tracker={focus}>
          <div style={{
          ...rowStyle,
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: '4px 12px'
        }}>
            <CommandButton commandKey="undo" />
            <CommandButton commandKey="redo" />
            <span style={{
            width: 1,
            height: 24,
            background: '#ddd'
          }} />
            <button onClick={doAction} style={{
            padding: '6px 10px',
            borderRadius: 4,
            border: '1px solid #1971c2',
            background: '#e7f5ff',
            cursor: 'pointer'
          }}>
              Do action (Edit #{count + 1})
            </button>
            <span style={{
            color: '#888'
          }}>doc value: <b style={{
              color: '#222'
            }}>{count}</b></span>
          </div>
        </CommandAnchorProvider>

        {/* The tree's leaves — focus any of them; undo/redo stay resolvable from all (ancestor placement). */}
        <div style={{
        display: 'flex',
        gap: 12
      }}>
          <FocusPanel title="Sheet" hint="anchor: sheet → workbook → undo → studio" accent="#1971c2" active={anchorKey === 'sheet'} scope={sheet} focus={focus}>
            <FocusPanel title="Editor (deeper z)" hint="anchor: editor → selection → sheet → … → undo" accent="#d9480f" active={anchorKey === 'editor'} scope={editor} focus={focus} />
          </FocusPanel>
          <FocusPanel title="Scripting (TaskPane)" hint="anchor: scripting → workbook → undo → studio" accent="#7048e8" active={anchorKey === 'scripting'} scope={scripting} focus={focus} />
        </div>
        {/* \`selection\` is an intermediate scope in the chain (no anchor element of its own here). */}

        <div style={{
        display: 'flex',
        gap: 24,
        color: '#888'
      }}>
          <span>anchor: <b>{anchorKey}</b></span>
          <span>top undo: <b style={{
            color: '#222'
          }}>{manager.getTopUndoDescription() ?? '—'}</b></span>
          <span>top redo: <b style={{
            color: '#222'
          }}>{manager.getTopRedoDescription() ?? '—'}</b></span>
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
          Click <b>Do action</b> a few times → <i>Undo</i> enables and its tooltip/label becomes
          <b> "Undo Edit #n"</b> (dynamic description from the stack). Click <i>Undo</i> → the doc value
          reverts and <i>Redo</i> enables as <b>"Redo Edit #n"</b>. Undo to empty → <i>Undo</i> disables
          (<code>title="Nothing to undo"</code>). Now focus the <b>Editor</b> (deepest) or the
          <b> Scripting</b> branch — undo/redo stay fully resolvable from either, because the behavior
          lives on the <b>Undo</b> scope above them all. Same dynamic-disable/description recipe that the
          sheet's disable-block needs, in ~15 lines.
        </div>
      </div>
    </CommandScopeContext.Provider>;
}`,...S.parameters?.docs?.source}}},w=[`UndoRedo`]}))();export{S as UndoRedo,w as __namedExportsOrder,C as default};