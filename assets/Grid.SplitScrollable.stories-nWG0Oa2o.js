import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{A as i,C as a,Z as o,dt as s}from"./esm-BDbLBVLc.js";import{U as c,r as l}from"./esm-uTuOMcSU.js";import{a as u,t as d}from"./components-DqOkHNPt.js";var f,p,m,h,g,_;function v(){return(v=t((()=>{f=e(n(),1),o(),c(),d(),p=r(),m=e=>{let{...t}=e,{left:n,right:r}=(0,f.useMemo)(()=>{let e=new a,t=new a,n=new a;return{left:new s(t,e,!1,!1,e),right:new s(n,e,!1,!1,e)}},[]);return(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsxs)(`div`,{style:{display:`flex`},children:[(0,p.jsx)(i,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:n,showVerticalScrollbar:!1,children:(0,p.jsx)(l,{...t,style:{width:`100%`,height:`100%`},viewport:n,renderCells:u})}),(0,p.jsx)(i,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:r,children:(0,p.jsx)(l,{...t,style:{width:`100%`,height:`100%`},viewport:r,renderCells:u})})]})})},h=m.bind({}),h.args={columnCount:200,rowCount:200},g={title:`Scrollable Grid`,parameters:{controls:{sort:`requiredFirst`}}},_=[`SplitScrollable`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
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