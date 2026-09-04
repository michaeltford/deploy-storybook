import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{t as i}from"./react-dom-BO5EUsYd.js";import{D as a,N as o,j as s,l as c}from"./esm-BcpaeSfa.js";import{a as l,n as u,t as d}from"./components-DMcoRMO1.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{f=t(n(),1),p=i(),o(),d(),m=r(),h={rowStart:2,colStart:2,rowEnd:9,colEnd:8},g=[`t`,`r`,`b`,`l`],_=[`start`,`center`,`end`],v=({state:e})=>{let{anchorPoint:t,owner:n,clipped:r,slid:i}=e;return(0,p.createPortal)((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{style:{position:`fixed`,left:t.x-5,top:t.y-5,width:10,height:10,borderRadius:`50%`,background:`red`,border:`1.5px solid white`,pointerEvents:`none`,zIndex:1251}}),(0,m.jsxs)(`div`,{style:{position:`fixed`,left:t.x+8,top:t.y-8,font:`11px/1.4 monospace`,color:`#b00`,background:`rgba(255,255,255,0.9)`,padding:`0 4px`,pointerEvents:`none`,zIndex:1251,whiteSpace:`nowrap`},children:[`owner=`,String(n),` @(`,Math.round(t.x),`,`,Math.round(t.y),`)`,r?` · clipped`:``,i?` · slid ${Math.round(i.distance)}px ${i.direction}`:``]})]}),document.body)},y=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:i,...o}=e,[d,p]=(0,f.useState)(`t`),[y,b]=(0,f.useState)(`center`),[x,S]=(0,f.useState)(`clamp`),C=e=>({padding:`2px 8px`,font:`12px monospace`,cursor:`pointer`,background:e?`rgb(0,120,215)`:`#eee`,color:e?`white`:`#333`,border:`1px solid #bbb`,borderRadius:3});return(0,m.jsx)(`div`,{className:`storybook-container`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`},children:[(0,m.jsx)(`span`,{style:{font:`12px monospace`},children:`side:`}),g.map(e=>(0,m.jsx)(`button`,{style:C(e===d),onClick:()=>p(e),children:e},e)),(0,m.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`align:`}),_.map(e=>(0,m.jsx)(`button`,{style:C(e===y),onClick:()=>b(e),children:e},e)),(0,m.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`whenOff:`}),[`hide`,`clamp`].map(e=>(0,m.jsx)(`button`,{style:C(e===x),onClick:()=>S(e),children:e},e))]}),(0,m.jsxs)(u,{...o,columnCount:t,rowCount:n,renderCells:l,showGridLines:!0,freezeTop:r,freezeLeft:i,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,m.jsx)(c,{children:(0,m.jsx)(s,{range:h,stroke:`rgb(0,120,215)`,alignWidth:2,fill:`rgba(0,120,215,0.10)`})},`range`),(0,m.jsx)(c,{children:(0,m.jsx)(a,{anchor:{range:h},placement:{side:d,align:y},whenOff:x,children:e=>(0,m.jsx)(v,{state:e})})},`sticky`)]})]})})},b=y.bind({}),b.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},b.storyName=`Mechanics (per-axis resolve)`,x={title:`Float`,component:b,parameters:{controls:{sort:`requiredFirst`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const [side, setSide] = useState<GridFloatSide>('t');
  const [align, setAlign] = useState<GridAlign>('center');
  const [whenOff, setWhenOff] = useState<GridWhenOff>('clamp');
  const btn = (active: boolean): React.CSSProperties => ({
    padding: '2px 8px',
    font: '12px monospace',
    cursor: 'pointer',
    background: active ? 'rgb(0,120,215)' : '#eee',
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
            <RangeRect range={STRADDLE} stroke="rgb(0,120,215)" alignWidth={2} fill="rgba(0,120,215,0.10)" />
          </Layer>
          <Layer key="sticky">
            <StickyAnchor anchor={{
            range: STRADDLE
          }} placement={{
            side,
            align
          }} whenOff={whenOff}>
              {s => <Marker state={s} />}
            </StickyAnchor>
          </Layer>
        </Grid>
      </div>
    </div>;
}`,...b.parameters?.docs?.source}}},S=[`Mechanics`]}))();export{b as Mechanics,S as __namedExportsOrder,x as default};