import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,l as o}from"./esm-BcpaeSfa.js";import{a as s,t as c}from"./components-DMcoRMO1.js";var l,u,d,f,p,m,h;e((()=>{l=t(n(),1),a(),c(),u=r(),d=[`A (declared 1st)`,`B (declared 2nd)`,`C (declared 3rd)`,`D (declared 4th)`],f=e=>{let{...t}=e,[n,r]=(0,l.useState)([]);return(0,u.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,padding:`8px`,alignItems:`center`},children:[(0,u.jsx)(`button`,{onClick:()=>r([]),children:`Clear log`}),(0,u.jsx)(`span`,{style:{opacity:.7},children:`Click the grid to focus it, then press a key. Expected dispatch order: D, C, B, A.`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flex:1,gap:`8px`,minHeight:0},children:[(0,u.jsx)(i,{...t,style:{position:`relative`,flex:1},renderCells:s,showGridLines:!0,children:d.map(e=>(0,u.jsx)(o,{onKeyDown:t=>{r(n=>[...n,`${e} ← '${t.key}'`])}},e))}),(0,u.jsx)(`pre`,{style:{width:280,margin:0,padding:8,overflow:`auto`,background:`rgba(0,0,0,0.04)`,border:`1px solid rgba(0,0,0,0.1)`,fontSize:12,lineHeight:1.5},children:n.length?n.join(`
`):`(press a key over the focused grid)`})]})]})},p=f.bind({}),p.args={columnCount:50,rowCount:100},p.storyName=`Dispatch Order`,m={title:`Layers`,component:p,parameters:{controls:{sort:`requiredFirst`}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [log, setLog] = useState<string[]>([]);
  return <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      padding: '8px',
      alignItems: 'center'
    }}>
        <button onClick={() => setLog([])}>Clear log</button>
        <span style={{
        opacity: 0.7
      }}>
          Click the grid to focus it, then press a key. Expected dispatch order: D, C, B, A.
        </span>
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
          {LAYERS.map(id => <Layer key={id} onKeyDown={event => {
          setLog(prev => [...prev, \`\${id} ← '\${event.key}'\`]);
        }} />)}
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
          {log.length ? log.join('\\n') : '(press a key over the focused grid)'}
        </pre>
      </div>
    </div>;
}`,...p.parameters?.docs?.source}}},h=[`GridLayerDispatchOrder`]}))();export{p as GridLayerDispatchOrder,h as __namedExportsOrder,m as default};