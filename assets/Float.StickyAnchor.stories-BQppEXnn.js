import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{D as i,N as a,j as o,l as s}from"./esm-BcpaeSfa.js";import{a as c,n as l,t as u}from"./components-DMcoRMO1.js";var d,f,p,m,h,g,_,v,y;e((()=>{d=t(n(),1),a(),u(),f=r(),p={rowStart:6,colStart:5,rowEnd:10,colEnd:9},m=[`t`,`r`,`b`,`l`],h=[`start`,`center`,`end`],g=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:a,...u}=e,[g,_]=(0,d.useState)(`t`),[v,y]=(0,d.useState)(`center`),[b,x]=(0,d.useState)(`hide`),S=e=>({padding:`2px 8px`,font:`12px monospace`,cursor:`pointer`,background:e?`rgb(0,120,215)`:`#eee`,color:e?`white`:`#333`,border:`1px solid #bbb`,borderRadius:3}),C=`${p.rowStart}:${p.colStart}…${p.rowEnd}:${p.colEnd}`;return(0,f.jsx)(`div`,{className:`storybook-container`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{font:`12px monospace`},children:`side:`}),m.map(e=>(0,f.jsx)(`button`,{style:S(e===g),onClick:()=>_(e),children:e},e)),(0,f.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`align:`}),h.map(e=>(0,f.jsx)(`button`,{style:S(e===v),onClick:()=>y(e),children:e},e)),(0,f.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`whenOff:`}),[`hide`,`clamp`].map(e=>(0,f.jsx)(`button`,{style:S(e===b),onClick:()=>x(e),children:e},e))]}),(0,f.jsxs)(l,{...u,columnCount:t,rowCount:n,renderCells:c,showGridLines:!0,freezeTop:r,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,f.jsx)(s,{children:(0,f.jsx)(o,{range:p,stroke:`rgb(0,120,215)`,alignWidth:2,fill:`rgba(0,120,215,0.10)`})},`range`),(0,f.jsx)(s,{children:(0,f.jsx)(i,{anchor:{range:p},placement:{side:g,align:v},whenOff:b,children:(0,f.jsx)(`div`,{style:{font:`11px/1.6 system-ui, sans-serif`,color:`white`,background:`rgb(0,120,215)`,padding:`0 8px`,borderRadius:3,whiteSpace:`nowrap`,pointerEvents:`none`,boxShadow:`0 1px 4px rgba(0,0,0,0.3)`},children:C})})},`sticky`)]})]})})},_=g.bind({}),_.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},_.storyName=`StickyAnchor (plain div)`,v={title:`Float`,component:_,parameters:{controls:{sort:`requiredFirst`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const [side, setSide] = useState<GridFloatSide>('t');
  const [align, setAlign] = useState<GridAlign>('center');
  const [whenOff, setWhenOff] = useState<GridWhenOff>('hide');
  const btn = (active: boolean): React.CSSProperties => ({
    padding: '2px 8px',
    font: '12px monospace',
    cursor: 'pointer',
    background: active ? 'rgb(0,120,215)' : '#eee',
    color: active ? 'white' : '#333',
    border: '1px solid #bbb',
    borderRadius: 3
  });
  const text = \`\${RANGE.rowStart}:\${RANGE.colStart}…\${RANGE.rowEnd}:\${RANGE.colEnd}\`;
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
        }}>side:</span>
          {SIDES.map(s => <button key={s} style={btn(s === side)} onClick={() => setSide(s)}>{s}</button>)}
          <span style={{
          font: '12px monospace',
          marginLeft: 6
        }}>align:</span>
          {ALIGNS.map(a => <button key={a} style={btn(a === align)} onClick={() => setAlign(a)}>{a}</button>)}
          <span style={{
          font: '12px monospace',
          marginLeft: 6
        }}>whenOff:</span>
          {(['hide', 'clamp'] as GridWhenOff[]).map(w => <button key={w} style={btn(w === whenOff)} onClick={() => setWhenOff(w)}>{w}</button>)}
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          <Layer key="range">
            <RangeRect range={RANGE} stroke="rgb(0,120,215)" alignWidth={2} fill="rgba(0,120,215,0.10)" />
          </Layer>
          <Layer key="sticky">
          <StickyAnchor anchor={{
            range: RANGE
          }} placement={{
            side,
            align
          }} whenOff={whenOff}>
            {/* just a div — StickyAnchor positions it */}
            <div style={{
              font: '11px/1.6 system-ui, sans-serif',
              color: 'white',
              background: 'rgb(0,120,215)',
              padding: '0 8px',
              borderRadius: 3,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
            }}>
              {text}
            </div>
          </StickyAnchor>
          </Layer>
        </Grid>
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}},y=[`Sticky`]}))();export{_ as Sticky,y as __namedExportsOrder,v as default};