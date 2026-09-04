import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{U as i,Z as a,pt as o}from"./esm-BwAES4tr.js";import{n as s,r as c,t as l}from"./CommandButton-BeMfB7kM.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{u=t(n(),1),a(),s(),d=r(),{CommandScope:f,CommandScopeContext:p,CommandAnchorProvider:m,useCommands:h,LayerActivation:g,FocusActivation:_}=o,v=({root:e,tracker:t,scopeKey:n,z:r,color:i,label:a,registerChrome:o,contribute:s})=>((0,u.useEffect)(()=>{o?.(e);let i=e.createChild(n),a=i.contribution();s(a);let c=t.register(i,r);return()=>{c(),a.remove(),i.dispose()}},[]),(0,d.jsxs)(`div`,{style:{background:i,border:`1px solid rgba(0,0,0,0.15)`,borderRadius:4,padding:`4px 10px`,fontSize:13},children:[a,` `,(0,d.jsxs)(`span`,{style:{color:`#888`},children:[`· z=`,r]})]})),y=({commandKey:e})=>{let[t]=h(e),n=t?.disabled()??!0;return(0,d.jsxs)(`tr`,{style:{borderTop:`1px solid #eee`},children:[(0,d.jsx)(`td`,{style:{padding:`3px 10px`,fontFamily:`monospace`},children:e}),(0,d.jsx)(`td`,{style:{padding:`3px 10px`},children:(0,d.jsx)(`b`,{children:t?.getLabel()??(0,d.jsx)(`span`,{style:{color:`#bbb`},children:`— not in the stack —`})})}),(0,d.jsx)(`td`,{style:{padding:`3px 10px`,fontWeight:600,color:n?`#e03131`:`#2f9e44`},children:t?n?`disabled`:`enabled`:`—`})]})},b=({push:e})=>(h([`copy`,`paste`,`formatPainterToggle`],{onExecute:t=>e(`▶ executed: ${t?.getLabel?.()??`?`}`)}),null),x=[`copy`,`paste`,`formatPainterToggle`],S=()=>{let[e,t]=(0,u.useReducer)((e,t)=>[t,...e].slice(0,6),[]),[n,r]=(0,u.useState)(!1),[a,o]=(0,u.useState)(!1),{root:s,layers:h,region:S}=(0,u.useMemo)(()=>{let e=new f(`app`);e.updateCommand(`copy`,{label:`Copy`,icon:`⧉`,shortcut:{key:`C`,modifiers:[i.Ctrl]}}),e.updateCommand(`paste`,{label:`Paste`,icon:`📋`,shortcut:{key:`V`,modifiers:[i.Ctrl]}});let t=e.createChild(`grid`);t.updateCommand(`copy`,{label:`Copy Cells`,callback:()=>{}}),t.updateCommand(`paste`,{label:`Paste Cells`,callback:()=>{}});let n=new g(t);return{root:e,layers:n,region:new _(null,n)}},[]),C=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(!C.current)return;let e=S.attach(C.current),t=S.register(C.current,h);return()=>{e(),t()}},[S,h]),(0,d.jsx)(p.Provider,{value:s,children:(0,d.jsxs)(m,{tracker:S,debounce:0,children:[(0,d.jsx)(b,{push:t}),(0,d.jsxs)(`div`,{ref:C,tabIndex:0,style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12,outline:`none`},children:[(0,d.jsx)(`h3`,{style:{margin:0},children:`Command layers — resolve down the z-stack (override by stacking, not focus)`}),(0,d.jsx)(`div`,{style:{...c,border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`},children:x.map(e=>(0,d.jsx)(l,{commandKey:e},e))}),(0,d.jsxs)(`div`,{style:{border:`1px dashed #bbb`,borderRadius:6,padding:10,display:`flex`,flexDirection:`column-reverse`,gap:6,background:`#fafafa`},children:[(0,d.jsxs)(`div`,{style:{background:`#e9ecef`,borderRadius:4,padding:`4px 10px`,fontSize:13},children:[`grid (base) `,(0,d.jsx)(`span`,{style:{color:`#888`},children:`· copy = "Copy Cells"`})]}),n&&(0,d.jsx)(v,{root:s,tracker:h,scopeKey:`ext-format-painter`,z:50,color:`#ffe8cc`,label:`🖌 FormatPainter layer (external)`,registerChrome:e=>e.updateCommand(`formatPainterToggle`,{label:`Format Painter`,icon:`🖌`,shortcut:{key:`C`,modifiers:[i.Ctrl,i.Shift]}}),contribute:e=>e.updateCommand(`formatPainterToggle`,{callback:()=>{},state:!1})}),a&&(0,d.jsx)(v,{root:s,tracker:h,scopeKey:`ext-editor`,z:100,color:`#d0ebff`,label:`✎ Editor layer (external) — overrides Copy`,contribute:e=>e.updateCommand(`copy`,{label:`Copy Text`,callback:()=>{}})})]}),(0,d.jsxs)(`div`,{style:c,children:[(0,d.jsxs)(`label`,{style:{cursor:`pointer`},children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),` `,`Add `,(0,d.jsx)(`b`,{children:`FormatPainter`}),` layer `,(0,d.jsx)(`span`,{style:{color:`#888`},children:`(external: def + behavior + draw)`})]}),(0,d.jsxs)(`label`,{style:{marginLeft:16,cursor:`pointer`},children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:a,onChange:e=>o(e.target.checked)}),` `,`Stack `,(0,d.jsx)(`b`,{children:`Editor`}),` layer (z=100) `,(0,d.jsxs)(`span`,{style:{color:`#888`},children:[`(overrides `,(0,d.jsx)(`code`,{children:`copy`}),`)`]})]})]}),(0,d.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:14,maxWidth:560,border:`1px solid #e5e5ea`,borderRadius:6},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{style:{textAlign:`left`,color:`#888`},children:[(0,d.jsx)(`th`,{style:{padding:`3px 10px`},children:`command`}),(0,d.jsx)(`th`,{style:{padding:`3px 10px`},children:`resolves to (winning label)`}),(0,d.jsx)(`th`,{style:{padding:`3px 10px`},children:`enablement`})]})}),(0,d.jsx)(`tbody`,{children:x.map(e=>(0,d.jsx)(y,{commandKey:e},e))})]}),(0,d.jsx)(`div`,{style:{display:`flex`,gap:24,color:`#888`,fontSize:14},children:(0,d.jsxs)(`span`,{children:[`exec log: `,(0,d.jsx)(`b`,{style:{color:`#222`},children:e[0]??`—`})]})}),(0,d.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.55,maxWidth:620},children:[(0,d.jsx)(`b`,{children:`Click into this box, press Ctrl+C`}),` — the log shows the SAME line as clicking the `,(0,d.jsx)(`b`,{children:`Copy`}),`button (keys ≡ commands: one `,(0,d.jsx)(`code`,{children:`resolve`}),`). `,(0,d.jsx)(`b`,{children:`Stack the Editor layer`}),` → `,(0,d.jsx)(`code`,{children:`copy`}),`resolves to `,(0,d.jsx)(`b`,{children:`"Copy Text"`}),` purely by `,(0,d.jsx)(`i`,{children:`stacking`}),` — no focus moved. Untoggle → it reverts to`,(0,d.jsx)(`b`,{children:` "Copy Cells"`}),`. `,(0,d.jsx)(`b`,{children:`Add FormatPainter`}),` → its `,(0,d.jsx)(`i`,{children:`definition`}),`, `,(0,d.jsx)(`i`,{children:`behavior`}),`, and`,(0,d.jsx)(`i`,{children:` drawing`}),` all appear from one external component; the base grid was never touched. That is the whole vision: a client builds `,(0,d.jsx)(`code`,{children:`formatPainter`}),` with zero core special-casing.`]})]})]})})},C=S.bind({}),C.args={},C.storyName=`Command Layers (z-stack resolution)`,w={title:`Commands`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [log, push] = useReducer((s: string[], m: string) => [m, ...s].slice(0, 6), []);
  const [showFormatPainter, setShowFormatPainter] = useState(false);
  const [showEditorCopy, setShowEditorCopy] = useState(false);
  const {
    root,
    layers,
    region
  } = useMemo(() => {
    const root = new CommandScope('app');
    // Base catalog: copy/paste chrome. NOTE: formatPainterToggle is deliberately ABSENT — the external
    // layer registers its own definition, proving the base knows nothing about it.
    root.updateCommand('copy', {
      label: 'Copy',
      icon: '⧉',
      shortcut: {
        key: 'C',
        modifiers: [KeyModifiers.Ctrl]
      }
    });
    root.updateCommand('paste', {
      label: 'Paste',
      icon: '📋',
      shortcut: {
        key: 'V',
        modifiers: [KeyModifiers.Ctrl]
      }
    });
    const base = root.createChild('grid');
    base.updateCommand('copy', {
      label: 'Copy Cells',
      callback: () => {}
    });
    base.updateCommand('paste', {
      label: 'Paste Cells',
      callback: () => {}
    });
    // One region (this stage) + its layer stack, focus-selected so the resolver binds keys on the root.
    const layers = new LayerActivation(base);
    const region = new FocusActivation(null, layers); // initial anchor = the layer stack-top (cold-start)
    return {
      root,
      layers,
      region
    };
  }, []);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!rootRef.current) return undefined;
    const detach = region.attach(rootRef.current);
    const unregister = region.register(rootRef.current, layers);
    return () => {
      detach();
      unregister();
    };
  }, [region, layers]);
  return <CommandScopeContext.Provider value={root}>
      {/* keyBindings on (default): the resolver binds keydown to the region root, so a real Ctrl+C
          resolves through the SAME resolve() the button uses. */}
      <CommandAnchorProvider tracker={region} debounce={0}>
        <ExecuteLogger push={push} />
        <div ref={rootRef} tabIndex={0} style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        outline: 'none'
      }}>
          <h3 style={{
          margin: 0
        }}>Command layers — resolve down the z-stack (override by stacking, not focus)</h3>

          {/* Toolbar — generic buttons; the formatPainter button is inert until its external layer mounts. */}
          <div style={{
          ...rowStyle,
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: '4px 12px'
        }}>
            {KEYS.map(k => <CommandButton key={k} commandKey={k} />)}
          </div>

          {/* The "stage": the base grid + whatever external layers are stacked on it (bottom → top). */}
          <div style={{
          border: '1px dashed #bbb',
          borderRadius: 6,
          padding: 10,
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: 6,
          background: '#fafafa'
        }}>
            <div style={{
            background: '#e9ecef',
            borderRadius: 4,
            padding: '4px 10px',
            fontSize: 13
          }}>grid (base) <span style={{
              color: '#888'
            }}>· copy = "Copy Cells"</span></div>
            {showFormatPainter && <CommandLayer root={root} tracker={layers} scopeKey="ext-format-painter" z={50} color="#ffe8cc" label="🖌 FormatPainter layer (external)" registerChrome={r => r.updateCommand('formatPainterToggle', {
            label: 'Format Painter',
            icon: '🖌',
            shortcut: {
              key: 'C',
              modifiers: [KeyModifiers.Ctrl, KeyModifiers.Shift]
            }
          })} contribute={c => c.updateCommand('formatPainterToggle', {
            callback: () => {},
            state: false
          })} />}
            {showEditorCopy && <CommandLayer root={root} tracker={layers} scopeKey="ext-editor" z={100} color="#d0ebff" label="✎ Editor layer (external) — overrides Copy" contribute={c => c.updateCommand('copy', {
            label: 'Copy Text',
            callback: () => {}
          })} />}
          </div>

          <div style={rowStyle}>
            <label style={{
            cursor: 'pointer'
          }}>
              <input type="checkbox" checked={showFormatPainter} onChange={e => setShowFormatPainter(e.target.checked)} />
              {' '}Add <b>FormatPainter</b> layer <span style={{
              color: '#888'
            }}>(external: def + behavior + draw)</span>
            </label>
            <label style={{
            marginLeft: 16,
            cursor: 'pointer'
          }}>
              <input type="checkbox" checked={showEditorCopy} onChange={e => setShowEditorCopy(e.target.checked)} />
              {' '}Stack <b>Editor</b> layer (z=100) <span style={{
              color: '#888'
            }}>(overrides <code>copy</code>)</span>
            </label>
          </div>

          <table style={{
          borderCollapse: 'collapse',
          fontSize: 14,
          maxWidth: 560,
          border: '1px solid #e5e5ea',
          borderRadius: 6
        }}>
            <thead>
              <tr style={{
              textAlign: 'left',
              color: '#888'
            }}>
                <th style={{
                padding: '3px 10px'
              }}>command</th>
                <th style={{
                padding: '3px 10px'
              }}>resolves to (winning label)</th>
                <th style={{
                padding: '3px 10px'
              }}>enablement</th>
              </tr>
            </thead>
            <tbody>{KEYS.map(k => <CommandStatus key={k} commandKey={k} />)}</tbody>
          </table>

          <div style={{
          display: 'flex',
          gap: 24,
          color: '#888',
          fontSize: 14
        }}>
            <span>exec log: <b style={{
              color: '#222'
            }}>{log[0] ?? '—'}</b></span>
          </div>

          <div style={{
          background: '#f7f7f9',
          border: '1px solid #e5e5ea',
          borderRadius: 6,
          padding: '10px 14px',
          color: '#555',
          fontSize: 14,
          lineHeight: 1.55,
          maxWidth: 620
        }}>
            <b>Click into this box, press Ctrl+C</b> — the log shows the SAME line as clicking the <b>Copy</b>
            button (keys ≡ commands: one <code>resolve</code>). <b>Stack the Editor layer</b> → <code>copy</code>
            resolves to <b>"Copy Text"</b> purely by <i>stacking</i> — no focus moved. Untoggle → it reverts to
            <b> "Copy Cells"</b>. <b>Add FormatPainter</b> → its <i>definition</i>, <i>behavior</i>, and
            <i> drawing</i> all appear from one external component; the base grid was never touched. That is the
            whole vision: a client builds <code>formatPainter</code> with zero core special-casing.
          </div>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...C.parameters?.docs?.source}}},T=[`CommandLayers`]}))();export{C as CommandLayers,T as __namedExportsOrder,w as default};