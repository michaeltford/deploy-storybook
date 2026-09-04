import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Q as i,Z as a,lt as o,ot as s}from"./esm-BwAES4tr.js";import{E as c,N as l}from"./esm-BcpaeSfa.js";import{a as u,t as d}from"./components-DMcoRMO1.js";var f,p,m,h,g,_;e((()=>{f=t(n(),1),a(),l(),d(),p=r(),m=e=>{let{...t}=e,{left:n,right:r}=(0,f.useMemo)(()=>{let e=new i,t=new i,n=new i;return{left:new o(t,e,!1,!1,e),right:new o(n,e,!1,!1,e)}},[]);return(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsxs)(`div`,{style:{display:`flex`},children:[(0,p.jsx)(s,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:n,showVerticalScrollbar:!1,children:(0,p.jsx)(c,{...t,style:{width:`100%`,height:`100%`},viewport:n,renderCells:u})}),(0,p.jsx)(s,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:r,children:(0,p.jsx)(c,{...t,style:{width:`100%`,height:`100%`},viewport:r,renderCells:u})})]})})},h=m.bind({}),h.args={columnCount:200,rowCount:200},g={title:`Scrollable Grid`,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;

  // Shared vertical controller + per-grid horizontal controllers, composed per grid. Both grids drive
  // the shared vertical (followV=false), so either pane's vertical scroll moves both.
  const {
    left: viewportLeft,
    right: viewportRight
  } = useMemo(() => {
    const sharedVertical = new Viewport();
    const leftOwnH = new Viewport();
    const rightOwnH = new Viewport();
    return {
      left: new AxisViewport(leftOwnH, sharedVertical, false, false, sharedVertical),
      right: new AxisViewport(rightOwnH, sharedVertical, false, false, sharedVertical)
    };
  }, []);
  return <div className="storybook-container">
      <div style={{
      display: "flex"
    }}>
      <ScrollPane style={{
        border: 'grey solid 1px',
        flex: "1 1 50%"
      }} viewport={viewportLeft} showVerticalScrollbar={false} // the shared vertical scroll is shown on the right pane only
      >
        <Grid {...rest} style={{
          width: '100%',
          height: '100%'
        }} viewport={viewportLeft} renderCells={sharedCellRenderer} />
      </ScrollPane>
      <ScrollPane style={{
        border: 'grey solid 1px',
        flex: "1 1 50%"
      }} viewport={viewportRight}>
        <Grid {...rest} style={{
          width: '100%',
          height: '100%'
        }} viewport={viewportRight} renderCells={sharedCellRenderer} />
      </ScrollPane>
      </div>
    </div>;
}`,...h.parameters?.docs?.source}}},_=[`SplitScrollable`]}))();export{h as SplitScrollable,_ as __namedExportsOrder,g as default};