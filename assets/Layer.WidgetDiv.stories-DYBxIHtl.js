import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,R as o,l as s}from"./esm-BcpaeSfa.js";import{a as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),a(),l(),d=r(),f=[{colStart:1,rowStart:1,colEnd:3,rowEnd:3},{colStart:5,rowStart:6,colEnd:8,rowEnd:9},{colStart:2,rowStart:12,colEnd:4,rowEnd:14},{colStart:10,rowStart:20,colEnd:13,rowEnd:24}],p=e=>{let{...t}=e,[n,r]=(0,u.useState)(!0),[a,l]=(0,u.useState)(0),[p,m]=(0,u.useState)(0),h=f[a];return(0,d.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,padding:`8px`,alignItems:`center`},children:[(0,d.jsxs)(`button`,{onClick:()=>r(e=>!e),children:[n?`Hide`:`Show`,` widget`]}),(0,d.jsx)(`button`,{onClick:()=>l(e=>(e+1)%f.length),children:`Move widget`}),(0,d.jsxs)(`span`,{style:{opacity:.7},children:[`range: [`,h.colStart,`,`,h.rowStart,`]–[`,h.colEnd,`,`,h.rowEnd,`] · inner-button clicks: `,p]})]}),(0,d.jsx)(i,{...t,style:{position:`relative`,flex:`1`},renderCells:c,showGridLines:!0,children:(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{range:{colStart:6,rowStart:1,colEnd:9,rowEnd:3},coverGridlines:!0,style:{background:`linear-gradient(135deg, rgba(0,120,215,0.25), rgba(16,124,16,0.25))`,pointerEvents:`none`}}),n?(0,d.jsxs)(o,{range:h,onPointerDown:e=>e.stopPropagation(),style:{background:`rgba(255,255,255,0.96)`,border:`2px solid rgb(0,120,215)`,borderRadius:`6px`,boxShadow:`rgba(60,64,67,.3) 0px 2px 6px 1px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`6px`,overflow:`hidden`},children:[`Custom Widget`,(0,d.jsx)(`button`,{onClick:()=>m(e=>e+1),children:`click me`})]}):null]})})]})},m=p.bind({}),m.args={columnCount:50,rowCount:100},m.storyName=`Widget (host content)`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [visible, setVisible] = useState<boolean>(true);
  const [posIndex, setPosIndex] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);
  const range = POSITIONS[posIndex];
  return <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      padding: "8px",
      alignItems: "center"
    }}>
        <button onClick={() => setVisible(v => !v)}>
          {visible ? "Hide" : "Show"} widget
        </button>
        <button onClick={() => setPosIndex(i => (i + 1) % POSITIONS.length)}>
          Move widget
        </button>
        <span style={{
        opacity: 0.7
      }}>
          range: [{range.colStart},{range.rowStart}]–[{range.colEnd},{range.rowEnd}] ·
          inner-button clicks: {clicks}
        </span>
      </div>

      <Grid {...rest} style={{
      position: "relative",
      flex: "1"
    }} renderCells={sharedCellRenderer} showGridLines={true}>
        {/* One Layer (the z-slot) hosting both placed boxes. */}
        <Layer>
          {/* A CSS-background box placed at a range (like a cell fill) — content that
              can't be an SVG fill. A pure decoration, so it opts out of hit-testing
              (pointerEvents: 'none' — a VirtualDiv is hittable by default, like any div). */}
          <VirtualDiv range={{
          colStart: 6,
          rowStart: 1,
          colEnd: 9,
          rowEnd: 3
        }} coverGridlines style={{
          background: "linear-gradient(135deg, rgba(0,120,215,0.25), rgba(16,124,16,0.25))",
          pointerEvents: "none"
        }} />

          {/* An interactive widget placed at a range — VirtualDiv used like a regular
              div: arbitrary HTML / text directly inside, plus a working button. Its
              pointerdown stops propagation (the one consume signal) so interacting with
              the card doesn't also reach the grid beneath. */}
          {visible ? <VirtualDiv range={range} onPointerDown={e => e.stopPropagation()} style={{
          background: "rgba(255,255,255,0.96)",
          border: "2px solid rgb(0,120,215)",
          borderRadius: "6px",
          boxShadow: "rgba(60,64,67,.3) 0px 2px 6px 1px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          overflow: "hidden"
        }}>
              Custom Widget
              <button onClick={() => setClicks(c => c + 1)}>click me</button>
            </VirtualDiv> : null}
        </Layer>
      </Grid>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`GridWithWidgetDiv`]}))();export{m as GridWithWidgetDiv,g as __namedExportsOrder,h as default};