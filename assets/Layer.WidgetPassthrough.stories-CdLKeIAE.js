import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,l as o}from"./esm-BcpaeSfa.js";import{a as s,t as c}from"./components-DMcoRMO1.js";var l,u,d,f,p,m,h;e((()=>{l=t(n(),1),a(),c(),u=r(),d={position:`absolute`,width:200,height:130,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,borderRadius:6,boxSizing:`border-box`,cursor:`pointer`,userSelect:`none`,textAlign:`center`,gap:4},f=e=>{let{...t}=e,[n,r]=(0,l.useState)([]),a=e=>r(t=>[...t,e]);return(0,u.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,padding:`8px`,alignItems:`center`},children:[(0,u.jsx)(`button`,{onClick:()=>r([]),children:`Clear log`}),(0,u.jsx)(`span`,{style:{opacity:.7},children:`Click each widget: blue bubbles on to the grid; green consumes (stopPropagation).`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flex:1,gap:`8px`,minHeight:0},children:[(0,u.jsxs)(i,{...t,style:{position:`relative`,flex:1},renderCells:s,showGridLines:!0,children:[(0,u.jsx)(o,{onPointerDown:()=>a(`grid-wide (Layer tap)`)}),(0,u.jsxs)(o,{children:[(0,u.jsxs)(`div`,{style:{...d,left:120,top:140,background:`rgba(0,120,215,0.12)`,border:`2px solid rgb(0,120,215)`},onPointerDown:()=>a(`widget (bubbles)`),children:[(0,u.jsx)(`b`,{children:`bubbles`}),(0,u.jsxs)(`span`,{style:{fontSize:12,opacity:.75},children:[`no stopPropagation —`,(0,u.jsx)(`br`,{}),`the grid hears it too`]})]}),(0,u.jsxs)(`div`,{style:{...d,left:380,top:140,background:`rgba(16,124,16,0.12)`,border:`2px solid rgb(16,124,16)`},onPointerDown:e=>{a(`widget (consumes)`),e.stopPropagation()},children:[(0,u.jsx)(`b`,{children:`consumes`}),(0,u.jsxs)(`span`,{style:{fontSize:12,opacity:.75},children:[`stopPropagation —`,(0,u.jsx)(`br`,{}),`the grid is blocked`]})]})]})]}),(0,u.jsx)(`pre`,{style:{width:280,margin:0,padding:8,overflow:`auto`,background:`rgba(0,0,0,0.04)`,border:`1px solid rgba(0,0,0,0.1)`,fontSize:12,lineHeight:1.5},children:n.length?n.join(`
`):`(click a widget / the grid)`})]})]})},p=f.bind({}),p.args={columnCount:50,rowCount:100},p.storyName=`Widget (one-bubble law)`,m={title:`Layers`,component:p,parameters:{controls:{sort:`requiredFirst`}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [log, setLog] = useState<string[]>([]);
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
      alignItems: 'center'
    }}>
        <button onClick={() => setLog([])}>Clear log</button>
        <span style={{
        opacity: 0.7
      }}>
          Click each widget: blue bubbles on to the grid; green consumes (stopPropagation).
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
          {/* grid-wide tap — a non-visual Layer (z-slot + event tap), heard whatever is under the
              pointer, after everything above it in the stack */}
          <Layer onPointerDown={() => append('grid-wide (Layer tap)')} />

          {/* the widgets — normal React divs with native handlers, hosted in one Layer */}
          <Layer>
            {/* bubbles: no stopPropagation → the grid still reacts underneath */}
            <div style={{
            ...WIDGET_BASE,
            left: 120,
            top: 140,
            background: 'rgba(0,120,215,0.12)',
            border: '2px solid rgb(0,120,215)'
          }} onPointerDown={() => append('widget (bubbles)')}>
              <b>bubbles</b>
              <span style={{
              fontSize: 12,
              opacity: 0.75
            }}>no stopPropagation —<br />the grid hears it too</span>
            </div>
            {/* consumes: stopPropagation → the grid is blocked */}
            <div style={{
            ...WIDGET_BASE,
            left: 380,
            top: 140,
            background: 'rgba(16,124,16,0.12)',
            border: '2px solid rgb(16,124,16)'
          }} onPointerDown={event => {
            append('widget (consumes)');
            event.stopPropagation();
          }}>
              <b>consumes</b>
              <span style={{
              fontSize: 12,
              opacity: 0.75
            }}>stopPropagation —<br />the grid is blocked</span>
            </div>
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
          {log.length ? log.join('\\n') : '(click a widget / the grid)'}
        </pre>
      </div>
    </div>;
}`,...p.parameters?.docs?.source}}},h=[`GridLayerWidgetPassthrough`]}))();export{p as GridLayerWidgetPassthrough,h as __namedExportsOrder,m as default};