import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{$ as i,g as a}from"./esm-CnNtTDnU.js";import{$ as o,V as s,_ as c,i as l,n as u,u as d}from"./esm-1pmCZayM.js";import{a as f,n as p,t as m}from"./components-CP_B1620.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{h=t(n(),1),i(),s(),m(),g=r(),_=e=>{let t=e.ranges[e.rangeIndex];if(t)return t;let{rowIndex:n,colIndex:r}=e.cell;return{rowStart:n,colStart:r,rowEnd:n,colEnd:r}},v={font:`11px/1.6 system-ui, sans-serif`,color:`white`,background:`rgb(0,120,215)`,padding:`0 6px`,borderRadius:3,whiteSpace:`nowrap`,pointerEvents:`none`,boxShadow:`0 1px 4px rgba(0,0,0,0.3)`},y=({selection:e,side:t,align:n,portal:r})=>{let i=a(e,e=>e.getSelection()),s=_(i),l=`${s.rowEnd-s.rowStart+1}R × ${s.colEnd-s.colStart+1}C`;return(0,g.jsx)(u,{children:r?(0,g.jsx)(c,{anchor:{range:s},placement:{side:t,align:n},whenOff:`hide`,style:v,children:l}):(0,g.jsx)(o,{anchor:{range:s},placement:{side:t,align:n},whenOff:`hide`,children:(0,g.jsx)(`div`,{style:v,children:l})})})},b=[`t`,`r`,`b`,`l`],x=[`start`,`center`,`end`],S=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:i,...a}=e,[o,s]=(0,h.useState)(`t`),[c,u]=(0,h.useState)(`center`),[m,_]=(0,h.useState)(!1),v=(0,h.useMemo)(()=>new l({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1}),initial:{cell:{rowIndex:8,colIndex:5},ranges:[{rowStart:8,colStart:5,rowEnd:11,colEnd:8}],rangeIndex:0}}),[n,t]),S=e=>({padding:`2px 8px`,font:`12px monospace`,cursor:`pointer`,background:e?`rgb(0,120,215)`:`#eee`,color:e?`white`:`#333`,border:`1px solid #bbb`,borderRadius:3});return(0,g.jsx)(`div`,{className:`storybook-container`,children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`},children:[(0,g.jsx)(`span`,{style:{font:`12px monospace`},children:`side:`}),b.map(e=>(0,g.jsx)(`button`,{style:S(e===o),onClick:()=>s(e),children:e},e)),(0,g.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`align:`}),x.map(e=>(0,g.jsx)(`button`,{style:S(e===c),onClick:()=>u(e),children:e},e)),(0,g.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`render:`}),[[`inline`,!1],[`portal`,!0]].map(([e,t])=>(0,g.jsx)(`button`,{style:S(t===m),onClick:()=>_(t),children:e},e))]}),(0,g.jsxs)(p,{...a,columnCount:t,rowCount:n,renderCells:f,showGridLines:!0,freezeTop:r,freezeLeft:i,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,g.jsx)(d,{selection:v,enabledMove:!0},`selection`),(0,g.jsx)(y,{selection:v,side:o,align:c,portal:m},`selection-label`)]})]})})},C=S.bind({}),C.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},C.storyName=`Selection label (inline vs portal)`,w={title:`Float`,component:C,parameters:{controls:{sort:`requiredFirst`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const [side, setSide] = useState<GridFloatSide>('t');
  const [align, setAlign] = useState<GridAlign>('center');
  const [portal, setPortal] = useState<boolean>(false);
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    }),
    initial: {
      cell: {
        rowIndex: 8,
        colIndex: 5
      },
      ranges: [{
        rowStart: 8,
        colStart: 5,
        rowEnd: 11,
        colEnd: 8
      }],
      rangeIndex: 0
    }
  }), [rowCount, columnCount]);
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
        }}>render:</span>
          {([['inline', false], ['portal', true]] as const).map(([label, v]) => <button key={label} style={btn(v === portal)} onClick={() => setPortal(v)}>{label}</button>)}
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          <SelectionLayer key="selection" selection={selection} enabledMove />
          <SelectionLabel key="selection-label" selection={selection} side={side} align={align} portal={portal} />
        </Grid>
      </div>
    </div>;
}`,...C.parameters?.docs?.source}}},T=[`SelectionLabelStory`]}))();export{C as SelectionLabelStory,T as __namedExportsOrder,w as default};