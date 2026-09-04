import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{U as i,Z as a,pt as o}from"./esm-BwAES4tr.js";import{n as s,r as c,t as l}from"./CommandButton-BeMfB7kM.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{u=t(n(),1),a(),s(),d=r(),{CommandScope:f,CommandScopeContext:p,CommandAnchorProvider:m,useCommands:h,LayerActivation:g,FocusActivation:_}=o,v=({root:e,region:t,scopeKey:n,z:r,color:i,label:a,contribute:o})=>((0,u.useEffect)(()=>{let i=e.createChild(n),a=i.contribution();o(a);let s=t.register(i,r);return()=>{s(),a.remove(),i.dispose()}},[]),(0,d.jsxs)(`div`,{style:{background:i,border:`1px solid rgba(0,0,0,0.15)`,borderRadius:4,padding:`3px 8px`,fontSize:12},children:[a,` · z=`,r]})),y=({commandKey:e})=>{let[t]=h(e),n=t?.disabled()??!0;return(0,d.jsxs)(`tr`,{style:{borderTop:`1px solid #eee`},children:[(0,d.jsx)(`td`,{style:{padding:`3px 10px`,fontFamily:`monospace`},children:e}),(0,d.jsx)(`td`,{style:{padding:`3px 10px`},children:(0,d.jsx)(`b`,{children:t?.getLabel()??(0,d.jsx)(`span`,{style:{color:`#bbb`},children:`— not here —`})})}),(0,d.jsx)(`td`,{style:{padding:`3px 10px`,fontWeight:600,color:n?`#e03131`:`#2f9e44`},children:t?n?`disabled`:`enabled`:`—`})]})},b=({push:e})=>(h([`copy`,`run`],{onExecute:t=>e(`▶ ${t?.getLabel?.()??`?`}`)}),null),x=[`copy`,`run`],S=e=>({border:`2px solid ${e?`#1a73e8`:`#ccc`}`,borderRadius:8,padding:12,flex:1,display:`flex`,flexDirection:`column`,gap:8,outline:`none`,background:e?`#f2f7ff`:`#fafafa`}),C=()=>{let[e,t]=(0,u.useReducer)((e,t)=>[t,...e].slice(0,6),[]),[n,r]=(0,u.useState)(!1),[a,o]=(0,u.useState)(!1),[,s]=(0,u.useReducer)(e=>e+1,0),{root:h,gridRegion:C,scriptRegion:w,region:T}=(0,u.useMemo)(()=>{let e=new f(`app`);e.updateCommand(`copy`,{label:`Copy`,icon:`⧉`,shortcut:{key:`C`,modifiers:[i.Ctrl]}}),e.updateCommand(`run`,{label:`Run`,icon:`▶`,shortcut:{key:`Enter`,modifiers:[i.Ctrl]}});let t=e.createChild(`grid`);t.updateCommand(`copy`,{label:`Copy Cells`,callback:()=>{}});let n=e.createChild(`script`);n.updateCommand(`copy`,{label:`Copy Script`,callback:()=>{}}),n.updateCommand(`run`,{label:`Run Script`,callback:()=>{}});let r=new g(t);return{root:e,gridRegion:r,scriptRegion:new g(n),region:new _(null,r)}},[]),E=(0,u.useRef)(null),D=(0,u.useRef)(null),O=(0,u.useRef)(null);(0,u.useEffect)(()=>{if(!E.current||!D.current||!O.current)return;let e=T.attach(E.current),t=T.register(D.current,C),n=T.register(O.current,w),r=T.subscribe(s);return()=>{e(),t(),n(),r()}},[T,C,w]);let k=T.getAnchor()?.key??``,A=k===`grid`||k.startsWith(`g-`),j=k===`script`||k.startsWith(`s-`);return(0,d.jsx)(p.Provider,{value:h,children:(0,d.jsxs)(m,{tracker:T,debounce:0,children:[(0,d.jsx)(b,{push:t}),(0,d.jsxs)(`div`,{ref:E,style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12},children:[(0,d.jsx)(`h3`,{style:{margin:0},children:`Focus × z — focus picks the region, z picks the layer`}),(0,d.jsxs)(`div`,{style:{...c,border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`},children:[(0,d.jsx)(`span`,{style:{color:`#888`,marginRight:8},children:`toolbar →`}),x.map(e=>(0,d.jsx)(l,{commandKey:e},e))]}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,d.jsxs)(`div`,{ref:D,tabIndex:0,style:S(A),children:[(0,d.jsxs)(`b`,{children:[`🗂 grid region `,A&&`· ACTIVE`]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column-reverse`,gap:4},children:[(0,d.jsx)(`div`,{style:{background:`#e9ecef`,borderRadius:4,padding:`3px 8px`,fontSize:12},children:`base · copy = "Copy Cells"`}),n&&(0,d.jsx)(v,{root:h,region:C,scopeKey:`g-editor`,z:100,color:`#d0ebff`,label:`✎ editor — overrides Copy`,contribute:e=>e.updateCommand(`copy`,{label:`Copy Text`,callback:()=>{}})})]}),(0,d.jsxs)(`label`,{style:{fontSize:13,cursor:`pointer`},children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),` stack editor layer`]})]}),(0,d.jsxs)(`div`,{ref:O,tabIndex:0,style:S(j),children:[(0,d.jsxs)(`b`,{children:[`{}`,` script region `,j&&`· ACTIVE`]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column-reverse`,gap:4},children:[(0,d.jsx)(`div`,{style:{background:`#e9ecef`,borderRadius:4,padding:`3px 8px`,fontSize:12},children:`base · copy = "Copy Script" · run = "Run Script"`}),a&&(0,d.jsx)(v,{root:h,region:w,scopeKey:`s-debug`,z:100,color:`#ffe3e3`,label:`🐞 debug — overrides Run`,contribute:e=>e.updateCommand(`run`,{label:`Run Debug`,callback:()=>{}})})]}),(0,d.jsxs)(`label`,{style:{fontSize:13,cursor:`pointer`},children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:a,onChange:e=>o(e.target.checked)}),` stack debug layer`]})]})]}),(0,d.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:14,maxWidth:520,border:`1px solid #e5e5ea`,borderRadius:6},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{style:{textAlign:`left`,color:`#888`},children:[(0,d.jsx)(`th`,{style:{padding:`3px 10px`},children:`command`}),(0,d.jsx)(`th`,{style:{padding:`3px 10px`},children:`toolbar resolves to`}),(0,d.jsx)(`th`,{style:{padding:`3px 10px`},children:`enablement`})]})}),(0,d.jsx)(`tbody`,{children:x.map(e=>(0,d.jsx)(y,{commandKey:e},e))})]}),(0,d.jsxs)(`div`,{style:{color:`#888`,fontSize:14},children:[`exec log: `,(0,d.jsx)(`b`,{style:{color:`#222`},children:e[0]??`—`})]}),(0,d.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.55,maxWidth:620},children:[(0,d.jsx)(`b`,{children:`Click into the grid`}),` → toolbar `,(0,d.jsx)(`code`,{children:`copy`}),` = "Copy Cells", `,(0,d.jsx)(`code`,{children:`run`}),` disabled. Press Ctrl+C → same as clicking Copy (keys ≡ buttons). `,(0,d.jsx)(`b`,{children:`Stack the editor layer`}),` → `,(0,d.jsx)(`code`,{children:`copy`}),` = "Copy Text" by stacking (z, no focus change). Now `,(0,d.jsx)(`b`,{children:`click into the script region`}),` → `,(0,d.jsx)(`code`,{children:`copy`}),`= "Copy Script" and `,(0,d.jsx)(`code`,{children:`run`}),` enables (`,(0,d.jsx)(`i`,{children:`focus`}),` picked the region). `,(0,d.jsx)(`b`,{children:`Stack debug`}),` →`,(0,d.jsx)(`code`,{children:`run`}),` = "Run Debug" (z within the script region). Focus picks the stack; z picks the layer.`]})]})]})})},w=C.bind({}),w.args={},w.storyName=`Region Layers (focus × z)`,T={title:`Commands`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [log, push] = useReducer((s: string[], m: string) => [m, ...s].slice(0, 6), []);
  const [editorInGrid, setEditorInGrid] = useState(false);
  const [debugInScript, setDebugInScript] = useState(false);
  const [, force] = useReducer(n => n + 1, 0);
  const {
    root,
    gridRegion,
    scriptRegion,
    region
  } = useMemo(() => {
    const root = new CommandScope('app');
    // Shared catalog chrome (both regions' copy share the icon/shortcut; run is script-only chrome).
    root.updateCommand('copy', {
      label: 'Copy',
      icon: '⧉',
      shortcut: {
        key: 'C',
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
    const gridBase = root.createChild('grid');
    gridBase.updateCommand('copy', {
      label: 'Copy Cells',
      callback: () => {}
    });
    const scriptBase = root.createChild('script');
    scriptBase.updateCommand('copy', {
      label: 'Copy Script',
      callback: () => {}
    });
    scriptBase.updateCommand('run', {
      label: 'Run Script',
      callback: () => {}
    });
    const gridRegion = new LayerActivation(gridBase);
    const scriptRegion = new LayerActivation(scriptBase);
    const region = new FocusActivation(null, gridRegion); // initial anchor = grid stack-top (cold-start)
    return {
      root,
      gridRegion,
      scriptRegion,
      region
    };
  }, []);
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!rootRef.current || !gridRef.current || !scriptRef.current) return undefined;
    const detach = region.attach(rootRef.current);
    const rg = region.register(gridRef.current, gridRegion);
    const rs = region.register(scriptRef.current, scriptRegion);
    const sub = region.subscribe(force); // re-render the region highlight on focus change
    return () => {
      detach();
      rg();
      rs();
      sub();
    };
  }, [region, gridRegion, scriptRegion]);

  // (display-only) which region is active, for the highlight — derive from the anchor scope's key
  // (the base 'grid'/'script', or the stacked top layer 'g-*'/'s-*').
  const anchorKey = region.getAnchor()?.key ?? '';
  const gridActive = anchorKey === 'grid' || anchorKey.startsWith('g-');
  const scriptActive = anchorKey === 'script' || anchorKey.startsWith('s-');
  return <CommandScopeContext.Provider value={root}>
      <CommandAnchorProvider tracker={region} debounce={0}>
        <ExecuteLogger push={push} />
        <div ref={rootRef} style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <h3 style={{
          margin: 0
        }}>Focus × z — focus picks the region, z picks the layer</h3>

          {/* One toolbar, outside both regions. It resolves against whichever region is focused. */}
          <div style={{
          ...rowStyle,
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: '4px 12px'
        }}>
            <span style={{
            color: '#888',
            marginRight: 8
          }}>toolbar →</span>
            {KEYS.map(k => <CommandButton key={k} commandKey={k} />)}
          </div>

          <div style={{
          display: 'flex',
          gap: 12
        }}>
            {/* Region A: grid */}
            <div ref={gridRef} tabIndex={0} style={regionBox(gridActive)}>
              <b>🗂 grid region {gridActive && '· ACTIVE'}</b>
              <div style={{
              display: 'flex',
              flexDirection: 'column-reverse',
              gap: 4
            }}>
                <div style={{
                background: '#e9ecef',
                borderRadius: 4,
                padding: '3px 8px',
                fontSize: 12
              }}>base · copy = "Copy Cells"</div>
                {editorInGrid && <CommandLayer root={root} region={gridRegion} scopeKey="g-editor" z={100} color="#d0ebff" label="✎ editor — overrides Copy" contribute={c => c.updateCommand('copy', {
                label: 'Copy Text',
                callback: () => {}
              })} />}
              </div>
              <label style={{
              fontSize: 13,
              cursor: 'pointer'
            }}>
                <input type="checkbox" checked={editorInGrid} onChange={e => setEditorInGrid(e.target.checked)} /> stack editor layer
              </label>
            </div>

            {/* Region B: script */}
            <div ref={scriptRef} tabIndex={0} style={regionBox(scriptActive)}>
              <b>{'{}'} script region {scriptActive && '· ACTIVE'}</b>
              <div style={{
              display: 'flex',
              flexDirection: 'column-reverse',
              gap: 4
            }}>
                <div style={{
                background: '#e9ecef',
                borderRadius: 4,
                padding: '3px 8px',
                fontSize: 12
              }}>base · copy = "Copy Script" · run = "Run Script"</div>
                {debugInScript && <CommandLayer root={root} region={scriptRegion} scopeKey="s-debug" z={100} color="#ffe3e3" label="🐞 debug — overrides Run" contribute={c => c.updateCommand('run', {
                label: 'Run Debug',
                callback: () => {}
              })} />}
              </div>
              <label style={{
              fontSize: 13,
              cursor: 'pointer'
            }}>
                <input type="checkbox" checked={debugInScript} onChange={e => setDebugInScript(e.target.checked)} /> stack debug layer
              </label>
            </div>
          </div>

          <table style={{
          borderCollapse: 'collapse',
          fontSize: 14,
          maxWidth: 520,
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
              }}>toolbar resolves to</th>
                <th style={{
                padding: '3px 10px'
              }}>enablement</th>
              </tr>
            </thead>
            <tbody>{KEYS.map(k => <CommandStatus key={k} commandKey={k} />)}</tbody>
          </table>

          <div style={{
          color: '#888',
          fontSize: 14
        }}>exec log: <b style={{
            color: '#222'
          }}>{log[0] ?? '—'}</b></div>

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
            <b>Click into the grid</b> → toolbar <code>copy</code> = "Copy Cells", <code>run</code> disabled. Press
            Ctrl+C → same as clicking Copy (keys ≡ buttons). <b>Stack the editor layer</b> → <code>copy</code> =
            "Copy Text" by stacking (z, no focus change). Now <b>click into the script region</b> → <code>copy</code>
            = "Copy Script" and <code>run</code> enables (<i>focus</i> picked the region). <b>Stack debug</b> →
            <code>run</code> = "Run Debug" (z within the script region). Focus picks the stack; z picks the layer.
          </div>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...w.parameters?.docs?.source}}},E=[`RegionLayers`]}))();export{w as RegionLayers,E as __namedExportsOrder,T as default};