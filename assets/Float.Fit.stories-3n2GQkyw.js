import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{t as i}from"./react-dom-BO5EUsYd.js";import{D as a,N as o,j as s,l as c,y as l}from"./esm-BcpaeSfa.js";import{a as u,n as d,t as f}from"./components-DMcoRMO1.js";var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{p=t(n(),1),m=i(),o(),f(),h=r(),g={rowStart:8,colStart:10,rowEnd:10,colEnd:12},_=[`pane`,`data`,`viewport`],v=[`t`,`r`,`b`,`l`],y={pane:`rgb(0,150,60)`,data:`rgb(0,90,220)`,viewport:`rgb(190,0,150)`},b=e=>{let{boundary:t,active:n}=e,r=y[String(t)];return(0,h.jsx)(a,{anchor:{range:g},boundary:t,whenOff:`clamp`,children:e=>{let i=e.getBoundaryRect();return(0,m.createPortal)((0,h.jsx)(`div`,{style:{position:`fixed`,left:i.left,top:i.top,width:i.width,height:i.height,border:`${n?3:1}px ${n?`solid`:`dashed`} ${r}`,opacity:n?.9:.45,pointerEvents:`none`,zIndex:1249,boxSizing:`border-box`},children:(0,h.jsxs)(`div`,{style:{position:`absolute`,left:0,top:0,font:`10px/1.4 monospace`,color:`white`,background:r,padding:`1px 4px`,opacity:n?1:.5},children:[String(t),` `,Math.round(i.width),`×`,Math.round(i.height)]})}),document.body)}})},x=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:i,...a}=e,[o,f]=(0,p.useState)(`data`),[m,x]=(0,p.useState)(`r`),[S,C]=(0,p.useState)(`clamp`),[w,T]=(0,p.useState)(!1),[E,D]=(0,p.useState)(!1),O=(e,t)=>({padding:`2px 8px`,font:`12px monospace`,cursor:`pointer`,background:e?t??`rgb(0,120,215)`:`#eee`,color:e?`white`:`#333`,border:`1px solid #bbb`,borderRadius:3}),k=(0,h.jsxs)(d,{...a,columnCount:t,rowCount:n,renderCells:u,showGridLines:!0,freezeTop:r,freezeLeft:i,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,h.jsx)(c,{children:(0,h.jsx)(s,{range:g,stroke:`rgb(0,120,215)`,alignWidth:2,fill:`rgba(0,120,215,0.10)`})},`range`),(0,h.jsx)(c,{children:_.map(e=>(0,h.jsx)(b,{boundary:e,active:e===o},String(e)))},`bounds`),(0,h.jsx)(c,{children:(0,h.jsx)(l,{anchor:{range:g},placement:{side:m,align:`start`},boundary:o,whenOff:S,offset:6,children:e=>(0,h.jsxs)(`div`,{style:{width:180,font:`11px/1.5 system-ui, sans-serif`,color:`white`,background:y[String(o)]??`rgb(0,120,215)`,padding:`6px 10px`,borderRadius:4,boxShadow:`0 2px 8px rgba(0,0,0,0.35)`,pointerEvents:`none`},children:[(0,h.jsxs)(`div`,{style:{fontWeight:600},children:[`boundary: `,String(o)]}),(0,h.jsxs)(`div`,{style:{opacity:.85},children:[`owner=`,String(e.owner),e.slid?` · slid ${Math.round(e.slid.distance)}px`:``,e.outOfView?` · outOfView`:``]})]})})},`float`)]});return(0,h.jsx)(`div`,{className:`storybook-container`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,width:`100%`,gap:6},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`},children:[(0,h.jsx)(`span`,{style:{font:`12px monospace`},children:`boundary:`}),_.map(e=>(0,h.jsx)(`button`,{style:O(e===o,y[String(e)]),onClick:()=>f(e),children:String(e)},String(e))),(0,h.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`side:`}),v.map(e=>(0,h.jsx)(`button`,{style:O(e===m),onClick:()=>x(e),children:e},e)),(0,h.jsx)(`span`,{style:{font:`12px monospace`,marginLeft:6},children:`whenOff:`}),[`hide`,`clamp`].map(e=>(0,h.jsx)(`button`,{style:O(e===S),onClick:()=>C(e),children:e},e)),(0,h.jsx)(`button`,{style:{...O(w),marginLeft:6},onClick:()=>T(e=>!e),children:`gutter`}),(0,h.jsx)(`button`,{style:O(E),onClick:()=>D(e=>!e),children:`page`})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flex:1,minHeight:0,gap:8},children:[w?(0,h.jsx)(`div`,{style:{width:260,flex:`none`,background:`#f3f4f6`,border:`1px solid #ddd`,font:`12px/1.6 system-ui, sans-serif`,color:`#555`,padding:10},children:`A panel opening beside the grid — the grid MOVES with no scroll and no resize of its own. The float must follow.`}):null,E?(0,h.jsxs)(`div`,{style:{flex:1,minWidth:0,overflow:`auto`,border:`1px dashed #999`},children:[(0,h.jsx)(`div`,{style:{height:400,font:`12px/1.6 system-ui, sans-serif`,color:`#777`,padding:10},children:`Scroll down — the grid is below.`}),(0,h.jsx)(`div`,{style:{height:420,paddingRight:240},children:k}),(0,h.jsx)(`div`,{style:{height:400}})]}):(0,h.jsx)(`div`,{style:{flex:1,minWidth:0,paddingRight:240,paddingBottom:110},children:k})]})]})})},S=x.bind({}),S.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},S.storyName=`Fit (boundary / flip / shift)`,C={title:`Float`,component:S,parameters:{controls:{sort:`requiredFirst`}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const [boundary, setBoundary] = useState<GridBoundary>('data');
  const [side, setSide] = useState<GridFloatSide>('r');
  const [whenOff, setWhenOff] = useState<GridWhenOff>('clamp');
  const [gutter, setGutter] = useState<boolean>(false);
  const [paged, setPaged] = useState<boolean>(false);
  const btn = (active: boolean, color?: string): React.CSSProperties => ({
    padding: '2px 8px',
    font: '12px monospace',
    cursor: 'pointer',
    background: active ? color ?? 'rgb(0,120,215)' : '#eee',
    color: active ? 'white' : '#333',
    border: '1px solid #bbb',
    borderRadius: 3
  });
  const grid = <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
    width: '100%',
    height: '100%',
    border: '1px solid black'
  }}>
      <Layer key="range">
        <RangeRect range={RANGE} stroke="rgb(0,120,215)" alignWidth={2} fill="rgba(0,120,215,0.10)" />
      </Layer>
      <Layer key="bounds">
        {BOUNDARIES.map(b => <BoundaryOutline key={String(b)} boundary={b} active={b === boundary} />)}
      </Layer>
      <Layer key="float">
        <StickyFloat anchor={{
        range: RANGE
      }} placement={{
        side,
        align: 'start'
      }} boundary={boundary} whenOff={whenOff} offset={6}>
          {(state: StickyState) => <div style={{
          width: 180,
          font: '11px/1.5 system-ui, sans-serif',
          color: 'white',
          background: BOUNDARY_COLOR[String(boundary)] ?? 'rgb(0,120,215)',
          padding: '6px 10px',
          borderRadius: 4,
          boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
          pointerEvents: 'none'
        }}>
              <div style={{
            fontWeight: 600
          }}>boundary: {String(boundary)}</div>
              <div style={{
            opacity: 0.85
          }}>
                owner={String(state.owner)}
                {state.slid ? \` · slid \${Math.round(state.slid.distance)}px\` : ''}
                {state.outOfView ? ' · outOfView' : ''}
              </div>
            </div>}
        </StickyFloat>
      </Layer>
    </Grid>;
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
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
        }}>boundary:</span>
          {BOUNDARIES.map(b => <button key={String(b)} style={btn(b === boundary, BOUNDARY_COLOR[String(b)])} onClick={() => setBoundary(b)}>
              {String(b)}
            </button>)}
          <span style={{
          font: '12px monospace',
          marginLeft: 6
        }}>side:</span>
          {SIDES.map(s => <button key={s} style={btn(s === side)} onClick={() => setSide(s)}>{s}</button>)}
          <span style={{
          font: '12px monospace',
          marginLeft: 6
        }}>whenOff:</span>
          {(['hide', 'clamp'] as GridWhenOff[]).map(w => <button key={w} style={btn(w === whenOff)} onClick={() => setWhenOff(w)}>{w}</button>)}
          <button style={{
          ...btn(gutter),
          marginLeft: 6
        }} onClick={() => setGutter(v => !v)}>gutter</button>
          <button style={btn(paged)} onClick={() => setPaged(v => !v)}>page</button>
        </div>
        <div style={{
        display: 'flex',
        flex: 1,
        minHeight: 0,
        gap: 8
      }}>
          {gutter ? <div style={{
          width: 260,
          flex: 'none',
          background: '#f3f4f6',
          border: '1px solid #ddd',
          font: '12px/1.6 system-ui, sans-serif',
          color: '#555',
          padding: 10
        }}>
              A panel opening beside the grid — the grid MOVES with no scroll and no resize of its own.
              The float must follow.
            </div> : null}
          {paged ?
        // A real scrolling ancestor: scrolling it fires no grid event whatsoever.
        <div style={{
          flex: 1,
          minWidth: 0,
          overflow: 'auto',
          border: '1px dashed #999'
        }}>
              <div style={{
            height: 400,
            font: '12px/1.6 system-ui, sans-serif',
            color: '#777',
            padding: 10
          }}>
                Scroll down — the grid is below.
              </div>
              {/* Inset so \`data\` sits well inside \`viewport\` and the two collide differently. */}
              <div style={{
            height: 420,
            paddingRight: 240
          }}>{grid}</div>
              <div style={{
            height: 400
          }} />
            </div> : <div style={{
          flex: 1,
          minWidth: 0,
          paddingRight: 240,
          paddingBottom: 110
        }}>{grid}</div>}
        </div>
      </div>
    </div>;
}`,...S.parameters?.docs?.source}}},w=[`Fit`]}))();export{S as Fit,w as __namedExportsOrder,C as default};