import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,N as a,P as o,h as s,j as c,l}from"./esm-BcpaeSfa.js";import{a as u,n as d,t as f}from"./components-DMcoRMO1.js";var p,m,h,g,_,v,y,b,x,S,C;e((()=>{p=t(n(),1),a(),f(),m=r(),h=[{range:{rowStart:3,colStart:2,rowEnd:6,colEnd:5},data:{name:`Alpha`,color:`rgb(0,120,215)`,fill:`rgba(0,120,215,0.12)`}},{range:{rowStart:9,colStart:7,rowEnd:12,colEnd:11},data:{name:`Bravo`,color:`rgb(200,80,0)`,fill:`rgba(200,80,0,0.12)`}},{range:{rowStart:16,colStart:3,rowEnd:18,colEnd:9},data:{name:`Charlie`,color:`rgb(0,140,90)`,fill:`rgba(0,140,90,0.12)`}}],g=(e,t)=>t.rowIndex>=e.rowStart&&t.rowIndex<=e.rowEnd&&t.colIndex>=e.colStart&&t.colIndex<=e.colEnd,_=(e,t)=>{let n=h.find(t=>g(t.range,e));return n?{range:n.range,key:n.data.name,data:n.data}:null},v=[`hover`,`selection`,`either`,`controlled`],y={hover:`hover`,selection:`selection`,either:[`hover`,`selection`],controlled:void 0},b=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:a,...f}=e,[g,b]=(0,p.useState)(`hover`),[x,S]=(0,p.useState)(!1),[C,w]=(0,p.useState)(null),[T,E]=(0,p.useState)(null),D=(0,p.useMemo)(()=>new i({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1}),initial:{cell:{rowIndex:0,colIndex:0},ranges:[],rangeIndex:-1}}),[n,t]),O=(e,t)=>({padding:`2px 8px`,font:`12px monospace`,cursor:`pointer`,background:e?t??`rgb(0,120,215)`:`#eee`,color:e?`white`:`#333`,border:`1px solid #bbb`,borderRadius:3});return(0,m.jsx)(`div`,{className:`storybook-container`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`},children:[(0,m.jsx)(`span`,{style:{font:`12px monospace`},children:`activateOn:`}),v.map(e=>(0,m.jsx)(`button`,{style:O(e===g),onClick:()=>b(e),children:e},e)),(0,m.jsx)(`button`,{style:{...O(x,`rgb(180,0,0)`),marginLeft:6},onClick:()=>S(e=>!e),children:`dismiss`}),g===`controlled`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`target:`}),h.map(e=>(0,m.jsx)(`button`,{style:O(C?.key===e.data.name,e.data.color),onClick:()=>w({range:e.range,key:e.data.name,data:e.data}),children:e.data.name},e.data.name)),(0,m.jsx)(`button`,{style:O(C===null),onClick:()=>w(null),children:`none`})]}):null,(0,m.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6,color:`#666`},children:T?`pressed: ${T}`:`press the float`})]}),(0,m.jsxs)(d,{...f,columnCount:t,rowCount:n,renderCells:u,showGridLines:!0,freezeTop:r,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,m.jsx)(s,{selection:D},`selection`),(0,m.jsx)(l,{children:h.map(e=>(0,m.jsx)(c,{range:e.range,stroke:e.data.color,alignWidth:2,fill:e.data.fill},e.data.name))},`regions`),(0,m.jsx)(o,{activateOn:y[g],probe:_,selection:D,target:g===`controlled`?C:void 0,dismiss:x,placement:{side:`r`,align:`start`},offset:6,children:({range:e,data:t,floatProps:n,state:r})=>(0,m.jsxs)(`div`,{...n,onPointerDown:e=>{e.stopPropagation(),E(`${t.name} @ ${r.owner}`)},style:{...n.style,font:`11px/1.5 system-ui, sans-serif`,color:`white`,background:t.color,padding:`5px 9px`,borderRadius:4,cursor:`pointer`,whiteSpace:`nowrap`,boxShadow:`0 2px 8px rgba(0,0,0,0.35)`},children:[(0,m.jsx)(`div`,{style:{fontWeight:600},children:t.name}),(0,m.jsxs)(`div`,{style:{opacity:.85},children:[`r`,e.rowStart,`:c`,e.colStart,` · owner=`,String(r.owner)]})]})},`float`)]})]})})},x=b.bind({}),x.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},x.storyName=`RangeFloat (activation)`,S={title:`Float`,component:x,parameters:{controls:{sort:`requiredFirst`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const [mode, setMode] = useState<Mode>('hover');
  const [dismiss, setDismiss] = useState<boolean>(false);
  const [controlled, setControlled] = useState<RangeFloatTarget<RegionData> | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    }),
    initial: {
      cell: {
        rowIndex: 0,
        colIndex: 0
      },
      ranges: [],
      rangeIndex: -1
    }
  }), [rowCount, columnCount]);
  const btn = (active: boolean, color?: string): React.CSSProperties => ({
    padding: '2px 8px',
    font: '12px monospace',
    cursor: 'pointer',
    background: active ? color ?? 'rgb(0,120,215)' : '#eee',
    color: active ? 'white' : '#333',
    border: '1px solid #bbb',
    borderRadius: 3
  });
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        padding: '4px 6px',
        flexWrap: 'wrap'
      }}>
          <span style={{
          font: '12px monospace'
        }}>activateOn:</span>
          {MODES.map(m => <button key={m} style={btn(m === mode)} onClick={() => setMode(m)}>{m}</button>)}
          <button style={{
          ...btn(dismiss, 'rgb(180,0,0)'),
          marginLeft: 6
        }} onClick={() => setDismiss(v => !v)}>
            dismiss
          </button>
          {mode === 'controlled' ? <>
              <span style={{
            font: '12px monospace',
            marginLeft: 6
          }}>target:</span>
              {REGIONS.map(r => <button key={r.data.name} style={btn(controlled?.key === r.data.name, r.data.color)} onClick={() => setControlled({
            range: r.range,
            key: r.data.name,
            data: r.data
          })}>
                  {r.data.name}
                </button>)}
              <button style={btn(controlled === null)} onClick={() => setControlled(null)}>none</button>
            </> : null}
          <span style={{
          font: '12px monospace',
          marginLeft: 6,
          color: '#666'
        }}>
            {pressed ? \`pressed: \${pressed}\` : 'press the float'}
          </span>
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          <SelectionLayer key="selection" selection={selection} />
          <Layer key="regions">
            {REGIONS.map(r => <RangeRect key={r.data.name} range={r.range} stroke={r.data.color} alignWidth={2} fill={r.data.fill} />)}
          </Layer>
          <RangeFloatLayer<RegionData> key="float" activateOn={ACTIVATION[mode]} probe={probe} selection={selection} target={mode === 'controlled' ? controlled : undefined} dismiss={dismiss} placement={{
          side: 'r',
          align: 'start'
        }} offset={6}>
            {({
            range,
            data,
            floatProps,
            state
          }) => <div {...floatProps} onPointerDown={e => {
            e.stopPropagation();
            setPressed(\`\${data.name} @ \${state.owner}\`);
          }} style={{
            ...floatProps.style,
            font: '11px/1.5 system-ui, sans-serif',
            color: 'white',
            background: data.color,
            padding: '5px 9px',
            borderRadius: 4,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.35)'
          }}>
                <div style={{
              fontWeight: 600
            }}>{data.name}</div>
                <div style={{
              opacity: 0.85
            }}>
                  r{range.rowStart}:c{range.colStart} · owner={String(state.owner)}
                </div>
              </div>}
          </RangeFloatLayer>
        </Grid>
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}},C=[`RangeFloat`]}))();export{x as RangeFloat,C as __namedExportsOrder,S as default};