import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{$ as i,B as a,Ct as o,b as s}from"./esm-CnNtTDnU.js";import{V as c,h as l}from"./esm-1pmCZayM.js";import{a as u,t as d}from"./components-CP_B1620.js";var f,p,m,h,g,_;e((()=>{f=t(n(),1),i(),c(),d(),p=r(),m=e=>{let{...t}=e,{left:n,right:r}=(0,f.useMemo)(()=>{let e=new o,t=new o,n=new o;return{left:new s(t,e,!1,!1,e),right:new s(n,e,!1,!1,e)}},[]);return(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsxs)(`div`,{style:{display:`flex`},children:[(0,p.jsx)(a,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:n,showVerticalScrollbar:!1,children:(0,p.jsx)(l,{...t,style:{width:`100%`,height:`100%`},viewport:n,renderCells:u})}),(0,p.jsx)(a,{style:{border:`grey solid 1px`,flex:`1 1 50%`},viewport:r,children:(0,p.jsx)(l,{...t,style:{width:`100%`,height:`100%`},viewport:r,renderCells:u})})]})})},h=m.bind({}),h.args={columnCount:200,rowCount:200},g={title:`Scrollable Grid`,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
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