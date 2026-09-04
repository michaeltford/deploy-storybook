import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,ManualActivation:f,CommandScopeContext:p,CommandAnchorProvider:m,useCommands:h}=a,g=[{key:`bold`,label:`Bold`,icon:`𝐁`,tags:[`mutator`]},{key:`fill`,label:`Fill`,icon:`🪣`,tags:[`mutator`]},{key:`copy`,label:`Copy`,icon:`📋`},{key:`zoomIn`,label:`Zoom In`,icon:`🔍`}],_=g.filter(e=>e.tags?.includes(`mutator`)).map(e=>e.key),v=e=>{g.forEach(t=>e.updateCommand(t.key,{label:t.label,icon:t.icon,tags:t.tags}))},y=(e,t)=>{(0,l.useEffect)(()=>{for(let n of _)e.updateCommand(n,{disabledReasons:t?[`Workbook is protected`]:[]})},[e,t])},b=(e,t,n)=>{(0,l.useEffect)(()=>{for(let r of g){let i=r.key===`bold`&&!t?[`No selection`]:[];e.updateCommand(r.key,{callback:()=>n(r.key),disabledReasons:i})}},[e,t,n])},x=({commandKey:e})=>{let[t]=h(e),n=t?.getTags()??[],r=t?.disabledReasons()??[],i=t?.disabled()??!0;return(0,u.jsxs)(`tr`,{style:{borderTop:`1px solid #eee`},children:[(0,u.jsx)(`td`,{style:{padding:`4px 10px`},children:t?.getLabel()??e}),(0,u.jsx)(`td`,{style:{padding:`4px 10px`,color:n.includes(`mutator`)?`#d9480f`:`#aaa`},children:n.join(`, `)||`—`}),(0,u.jsx)(`td`,{style:{padding:`4px 10px`,fontWeight:600,color:i?`#e03131`:`#2f9e44`},children:i?`disabled`:`enabled`}),(0,u.jsx)(`td`,{style:{padding:`4px 10px`,color:`#555`},children:r.length?r.join(`  •  `):`—`})]})},S=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!0),[i,a]=(0,l.useState)(`—`),{root:o,workbook:h,sheet:_,tracker:S}=(0,l.useMemo)(()=>{let e=new d(`root`),t=e.createChild(`workbook`),n=t.createChild(`sheet`);return v(e),{root:e,workbook:t,sheet:n,tracker:new f(n)}},[]),C=(0,l.useMemo)(()=>e=>a(`executed: ${e}`),[]);return y(h,e),b(_,n,C),(0,u.jsx)(p.Provider,{value:o,children:(0,u.jsx)(m,{tracker:S,children:(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12},children:[(0,u.jsx)(`h3`,{style:{margin:0},children:`Mutator-tag → protection disable + accumulating reasons`}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(c,{commandKey:`bold`}),(0,u.jsx)(c,{commandKey:`fill`}),(0,u.jsx)(c,{commandKey:`copy`}),(0,u.jsx)(c,{commandKey:`zoomIn`}),(0,u.jsx)(`span`,{style:{width:1,height:24,background:`#ddd`}}),(0,u.jsxs)(`span`,{style:{color:`#888`},children:[`last: `,(0,u.jsx)(`b`,{style:{color:`#222`},children:i})]})]}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsxs)(`label`,{style:{display:`flex`,gap:6,alignItems:`center`,cursor:`pointer`},children:[(0,u.jsx)(`input`,{type:`checkbox`,checked:e,onChange:e=>t(e.target.checked)}),`Protect workbook `,(0,u.jsxs)(`span`,{style:{color:`#888`},children:[`(cross-cutting reducer → all `,(0,u.jsx)(`code`,{children:`mutator`}),` commands)`]})]}),(0,u.jsxs)(`label`,{style:{display:`flex`,gap:6,alignItems:`center`,cursor:`pointer`,marginLeft:16},children:[(0,u.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`Has selection `,(0,u.jsx)(`span`,{style:{color:`#888`},children:`(Bold's own intrinsic reason)`})]})]}),(0,u.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:14,maxWidth:680,border:`1px solid #e5e5ea`,borderRadius:6},children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{style:{textAlign:`left`,color:`#888`},children:[(0,u.jsx)(`th`,{style:{padding:`4px 10px`},children:`command`}),(0,u.jsx)(`th`,{style:{padding:`4px 10px`},children:`tags`}),(0,u.jsx)(`th`,{style:{padding:`4px 10px`},children:`state`}),(0,u.jsx)(`th`,{style:{padding:`4px 10px`},children:`disabledReasons (accumulated)`})]})}),(0,u.jsx)(`tbody`,{children:g.map(e=>(0,u.jsx)(x,{commandKey:e.key},e.key))})]}),(0,u.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.5,maxWidth:680},children:[`Toggle `,(0,u.jsx)(`b`,{children:`Protect workbook`}),` → only `,(0,u.jsx)(`i`,{children:`Bold`}),` and `,(0,u.jsx)(`i`,{children:`Fill`}),` (tagged `,(0,u.jsx)(`code`,{children:`mutator`}),`) disable with `,(0,u.jsx)(`b`,{children:`"Workbook is protected"`}),`; `,(0,u.jsx)(`i`,{children:`Copy`}),` and `,(0,u.jsx)(`i`,{children:`Zoom In`}),` stay enabled — the reducer keyed on the tag, no per-command wiring. Now also untick `,(0,u.jsx)(`b`,{children:`Has selection`}),` → `,(0,u.jsx)(`i`,{children:`Bold`}),`shows `,(0,u.jsx)(`b`,{children:`two`}),` stacked reasons (`,(0,u.jsx)(`i`,{children:`No selection`}),` from the sheet, `,(0,u.jsx)(`i`,{children:`Workbook is protected`}),`from the workbook) — `,(0,u.jsx)(`code`,{children:`disabledReasons`}),` accumulating most-specific-first across scopes. This is disable-block as a tag + a one-pass reducer.`]})]})})})},C=S.bind({}),C.args={},C.storyName=`Mutator Protection (disable reducer)`,w={title:`Commands`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [isProtected, setProtected] = useState(false);
  const [hasSelection, setHasSelection] = useState(true);
  const [last, setLast] = useState('—');
  const {
    root,
    workbook,
    sheet,
    tracker
  } = useMemo(() => {
    const root = new CommandScope('root');
    const workbook = root.createChild('workbook');
    const sheet = workbook.createChild('sheet');
    registerDefinitions(root);
    return {
      root,
      workbook,
      sheet,
      tracker: new ManualActivation(sheet)
    }; // pinned to sheet
  }, []);
  const onRun = useMemo(() => (key: string) => setLast(\`executed: \${key}\`), []);
  useProtectionReducer(workbook, isProtected);
  useSheetBehavior(sheet, hasSelection, onRun);
  return <CommandScopeContext.Provider value={root}>
      <CommandAnchorProvider tracker={tracker}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <h3 style={{
          margin: 0
        }}>Mutator-tag → protection disable + accumulating reasons</h3>

          <div style={rowStyle}>
            <CommandButton commandKey="bold" />
            <CommandButton commandKey="fill" />
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="zoomIn" />
            <span style={{
            width: 1,
            height: 24,
            background: '#ddd'
          }} />
            <span style={{
            color: '#888'
          }}>last: <b style={{
              color: '#222'
            }}>{last}</b></span>
          </div>

          <div style={rowStyle}>
            <label style={{
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            cursor: 'pointer'
          }}>
              <input type="checkbox" checked={isProtected} onChange={e => setProtected(e.target.checked)} />
              Protect workbook <span style={{
              color: '#888'
            }}>(cross-cutting reducer → all <code>mutator</code> commands)</span>
            </label>
            <label style={{
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            cursor: 'pointer',
            marginLeft: 16
          }}>
              <input type="checkbox" checked={hasSelection} onChange={e => setHasSelection(e.target.checked)} />
              Has selection <span style={{
              color: '#888'
            }}>(Bold's own intrinsic reason)</span>
            </label>
          </div>

          <table style={{
          borderCollapse: 'collapse',
          fontSize: 14,
          maxWidth: 680,
          border: '1px solid #e5e5ea',
          borderRadius: 6
        }}>
            <thead>
              <tr style={{
              textAlign: 'left',
              color: '#888'
            }}>
                <th style={{
                padding: '4px 10px'
              }}>command</th>
                <th style={{
                padding: '4px 10px'
              }}>tags</th>
                <th style={{
                padding: '4px 10px'
              }}>state</th>
                <th style={{
                padding: '4px 10px'
              }}>disabledReasons (accumulated)</th>
              </tr>
            </thead>
            <tbody>
              {CATALOG.map(d => <CommandStatus key={d.key} commandKey={d.key} />)}
            </tbody>
          </table>

          <div style={{
          background: '#f7f7f9',
          border: '1px solid #e5e5ea',
          borderRadius: 6,
          padding: '10px 14px',
          color: '#555',
          fontSize: 14,
          lineHeight: 1.5,
          maxWidth: 680
        }}>
            Toggle <b>Protect workbook</b> → only <i>Bold</i> and <i>Fill</i> (tagged <code>mutator</code>)
            disable with <b>"Workbook is protected"</b>; <i>Copy</i> and <i>Zoom In</i> stay enabled — the
            reducer keyed on the tag, no per-command wiring. Now also untick <b>Has selection</b> → <i>Bold</i>
            shows <b>two</b> stacked reasons (<i>No selection</i> from the sheet, <i>Workbook is protected</i>
            from the workbook) — <code>disabledReasons</code> accumulating most-specific-first across scopes.
            This is disable-block as a tag + a one-pass reducer.
          </div>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...C.parameters?.docs?.source}}},T=[`MutatorProtection`]}))();export{C as MutatorProtection,T as __namedExportsOrder,w as default};