import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{M as i,P as a,S as o,nt as s}from"./esm-B64qfjsV.js";import{W as c,f as l}from"./esm-xMraobUN.js";import{a as u,t as d}from"./components-DMQLsyG4.js";var f,p,m,h,g,_;function v(){return(v=t((()=>{f=e(n(),1),s(),c(),d(),p=r(),m=e=>{let{...t}=e,{left:n,right:r}=(0,f.useMemo)(()=>{let e=new i,t=new i,n=new i;return{left:new o(t,e,!1,!1,e),right:new o(n,e,!1,!1,e)}},[]);return(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsxs)(`div`,{style:{display:`flex`},children:[(0,p.jsx)(a,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:n,showVerticalScrollbar:!1,children:(0,p.jsx)(l,{...t,style:{width:`100%`,height:`100%`},viewport:n,renderCells:u})}),(0,p.jsx)(a,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:r,children:(0,p.jsx)(l,{...t,style:{width:`100%`,height:`100%`},viewport:r,renderCells:u})})]})})},h=m.bind({}),h.args={columnCount:200,rowCount:200},g={title:`Scrollable Grid`,parameters:{controls:{sort:`requiredFirst`}}},_=[`SplitScrollable`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
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
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as SplitScrollable,_ as __namedExportsOrder,g as default};