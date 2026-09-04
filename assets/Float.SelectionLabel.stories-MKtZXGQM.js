import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,x as a}from"./esm-BwAES4tr.js";import{A as o,D as s,N as c,h as l,l as u,y as d}from"./esm-BcpaeSfa.js";import{a as f,n as p,t as m}from"./components-DMcoRMO1.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{h=t(n(),1),i(),c(),m(),g=r(),_=e=>{let t=e.ranges[e.rangeIndex];if(t)return t;let{rowIndex:n,colIndex:r}=e.cell;return{rowStart:n,colStart:r,rowEnd:n,colEnd:r}},v={font:`11px/1.6 system-ui, sans-serif`,color:`white`,background:`rgb(0,120,215)`,padding:`0 6px`,borderRadius:3,whiteSpace:`nowrap`,pointerEvents:`none`,boxShadow:`0 1px 4px rgba(0,0,0,0.3)`},y=({selection:e,side:t,align:n,portal:r})=>{let i=a(e,e=>e.getSelection()),o=_(i),c=`${o.rowEnd-o.rowStart+1}R × ${o.colEnd-o.colStart+1}C`;return(0,g.jsx)(u,{children:r?(0,g.jsx)(d,{anchor:{range:o},placement:{side:t,align:n},whenOff:`hide`,style:v,children:c}):(0,g.jsx)(s,{anchor:{range:o},placement:{side:t,align:n},whenOff:`hide`,children:(0,g.jsx)(`div`,{style:v,children:c})})})},b=[`t`,`r`,`b`,`l`],x=[`start`,`center`,`end`],S=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:i,...a}=e,[s,c]=(0,h.useState)(`t`),[u,d]=(0,h.useState)(`center`),[m,_]=(0,h.useState)(!1),v=(0,h.useMemo)(()=>new o({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1}),initial:{cell:{rowIndex:8,colIndex:5},ranges:[{rowStart:8,colStart:5,rowEnd:11,colEnd:8}],rangeIndex:0}}),[n,t]),S=e=>({padding:`2px 8px`,font:`12px monospace`,cursor:`pointer`,background:e?`rgb(0,120,215)`:`#eee`,color:e?`white`:`#333`,border:`1px solid #bbb`,borderRadius:3});return(0,g.jsx)(`div`,{className:`storybook-container`,children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`},children:[(0,g.jsx)(`span`,{style:{font:`12px monospace`},children:`side:`}),b.map(e=>(0,g.jsx)(`button`,{style:S(e===s),onClick:()=>c(e),children:e},e)),(0,g.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`align:`}),x.map(e=>(0,g.jsx)(`button`,{style:S(e===u),onClick:()=>d(e),children:e},e)),(0,g.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`render:`}),[[`inline`,!1],[`portal`,!0]].map(([e,t])=>(0,g.jsx)(`button`,{style:S(t===m),onClick:()=>_(t),children:e},e))]}),(0,g.jsxs)(p,{...a,columnCount:t,rowCount:n,renderCells:f,showGridLines:!0,freezeTop:r,freezeLeft:i,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,g.jsx)(l,{selection:v,enabledMove:!0},`selection`),(0,g.jsx)(y,{selection:v,side:s,align:u,portal:m},`selection-label`)]})]})})},C=S.bind({}),C.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},C.storyName=`Selection label (inline vs portal)`,w={title:`Float`,component:C,parameters:{controls:{sort:`requiredFirst`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => {
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