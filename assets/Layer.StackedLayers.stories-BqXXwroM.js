import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,R as o,l as s}from"./esm-BcpaeSfa.js";import{a as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),a(),l(),d=r(),f=[{id:`A (bottom)`,range:{colStart:1,rowStart:1,colEnd:6,rowEnd:8},fill:`rgba(215,0,0,0.14)`,line:`rgb(215,0,0)`},{id:`B (middle)`,range:{colStart:3,rowStart:3,colEnd:8,rowEnd:10},fill:`rgba(0,150,0,0.14)`,line:`rgb(0,150,0)`},{id:`C (top)`,range:{colStart:5,rowStart:5,colEnd:10,rowEnd:12},fill:`rgba(0,120,215,0.14)`,line:`rgb(0,120,215)`}],p=e=>{let{...t}=e,[n,r]=(0,u.useState)([]),[a,l]=(0,u.useState)({}),[p,m]=(0,u.useState)(null),h=e=>r(t=>[...t,e]);return(0,d.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,padding:`8px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,d.jsx)(`button`,{onClick:()=>r([]),children:`Clear log`}),f.map(e=>(0,d.jsxs)(`label`,{style:{display:`flex`,gap:`4px`,alignItems:`center`,color:e.line},children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:!!a[e.id],onChange:t=>l(n=>({...n,[e.id]:t.target.checked}))}),e.id,` consumes`]},e.id)),(0,d.jsx)(`span`,{style:{opacity:.7},children:`Click the overlap → C, B, A. Click a widget to focus, then press a key.`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flex:1,gap:`8px`,minHeight:0},children:[(0,d.jsx)(i,{...t,style:{position:`relative`,flex:1},renderCells:c,showGridLines:!0,children:(0,d.jsx)(s,{children:f.map(e=>(0,d.jsx)(o,{range:e.range,tabIndex:0,style:{background:e.fill,border:`2px solid ${e.line}`,borderRadius:6,boxSizing:`border-box`,cursor:`pointer`,display:`flex`,alignItems:`flex-start`,justifyContent:`flex-end`,padding:`4px 6px`,color:e.line,fontWeight:600,userSelect:`none`,outline:p===e.id?`3px solid ${e.line}`:`none`,outlineOffset:`2px`},onFocus:()=>m(e.id),onBlur:()=>m(t=>t===e.id?null:t),onPointerDown:t=>{h(`${e.id} ← pointer`),a[e.id]&&t.stopPropagation()},onKeyDown:t=>{h(`${e.id} ← '${t.key}'`),a[e.id]&&t.stopPropagation()},children:e.id},e.id))})}),(0,d.jsx)(`pre`,{style:{width:280,margin:0,padding:8,overflow:`auto`,background:`rgba(0,0,0,0.04)`,border:`1px solid rgba(0,0,0,0.1)`,fontSize:12,lineHeight:1.5},children:n.length?n.join(`
`):`(click the overlapping boxes)`})]})]})},m=p.bind({}),m.args={columnCount:50,rowCount:100},m.storyName=`Stacked Widgets (geometry)`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [log, setLog] = useState<string[]>([]);
  const [consume, setConsume] = useState<Record<string, boolean>>({});
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const append = (id: string) => setLog(prev => [...prev, id]);
  return <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      padding: '8px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <button onClick={() => setLog([])}>Clear log</button>
        {WIDGETS.map(l => <label key={l.id} style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        color: l.line
      }}>
            <input type="checkbox" checked={!!consume[l.id]} onChange={e => setConsume(c => ({
          ...c,
          [l.id]: e.target.checked
        }))} />
            {l.id} consumes
          </label>)}
        <span style={{
        opacity: 0.7
      }}>Click the overlap → C, B, A. Click a widget to focus, then press a key.</span>
      </div>

      <div style={{
      display: 'flex',
      flex: 1,
      gap: '8px',
      minHeight: 0
    }}>
        <Grid {...rest} style={{
        position: 'relative',
        flex: 1
      }} renderCells={sharedCellRenderer} showGridLines={true}>
          {/* One Layer (the z-slot) hosting all three widgets — they stack by DOM order within it. */}
          <Layer>
            {WIDGETS.map(l => <VirtualDiv key={l.id} range={l.range} tabIndex={0} style={{
            background: l.fill,
            border: \`2px solid \${l.line}\`,
            borderRadius: 6,
            boxSizing: 'border-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '4px 6px',
            color: l.line,
            fontWeight: 600,
            userSelect: 'none',
            // Focus ring (the grid suppresses the default outline), so keyboard routing is visible.
            outline: focusedId === l.id ? \`3px solid \${l.line}\` : 'none',
            outlineOffset: '2px'
          }} onFocus={() => setFocusedId(l.id)} onBlur={() => setFocusedId(cur => cur === l.id ? null : cur)} onPointerDown={event => {
            append(\`\${l.id} ← pointer\`);
            if (consume[l.id]) event.stopPropagation();
          }} onKeyDown={event => {
            append(\`\${l.id} ← '\${event.key}'\`);
            if (consume[l.id]) event.stopPropagation();
          }}>
                {l.id}
              </VirtualDiv>)}
          </Layer>
        </Grid>

        <pre style={{
        width: 280,
        margin: 0,
        padding: 8,
        overflow: 'auto',
        background: 'rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.1)',
        fontSize: 12,
        lineHeight: 1.5
      }}>
          {log.length ? log.join('\\n') : '(click the overlapping boxes)'}
        </pre>
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`GridLayerStacked`]}))();export{m as GridLayerStacked,g as __namedExportsOrder,h as default};