import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{$ as r,P as i,nt as a}from"./esm-B64qfjsV.js";import{a as o,n as s,t as c}from"./components-DMQLsyG4.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),a(),c(),l=n(),u=e=>{let{showVerticalScrollbar:t,showHorizontalScrollbar:n,renderScrollbarHorizontal:r,renderScrollbarVertical:i,renderScrollCorner:a,...c}=e;return(0,l.jsx)(`div`,{className:`storybook-container`,children:(0,l.jsx)(s,{...c,showVerticalScrollbar:t,showHorizontalScrollbar:n,renderScrollbarHorizontal:r,renderScrollbarVertical:i,renderScrollCorner:a,renderCells:o})})},d=u.bind({}),d.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0},d.storyName=`Scrollable Grid`,f=e=>(0,l.jsx)(r,{style:{border:`red solid 3px`},...e}),p=e=>{let{size:t,...n}=e;return(0,l.jsx)(`button`,{style:{width:`100%`,height:`100%`,background:`green`,border:`blue solid 2px`},...n})},m=u.bind({}),m.args={renderScrollbarHorizontal:f,renderScrollbarVertical:f,renderScrollCorner:p,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0},h={title:`Scrollable Grid`,component:i,parameters:{controls:{sort:`requiredFirst`}}},g=[`Scrollable`,`CustomScrollElements`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    renderScrollbarHorizontal,
    renderScrollbarVertical,
    renderScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} renderScrollbarHorizontal={renderScrollbarHorizontal} renderScrollbarVertical={renderScrollbarVertical} renderScrollCorner={renderScrollCorner} renderCells={sharedCellRenderer} />
    </div>;
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    renderScrollbarHorizontal,
    renderScrollbarVertical,
    renderScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} renderScrollbarHorizontal={renderScrollbarHorizontal} renderScrollbarVertical={renderScrollbarVertical} renderScrollCorner={renderScrollCorner} renderCells={sharedCellRenderer} />
    </div>;
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as CustomScrollElements,d as Scrollable,g as __namedExportsOrder,h as default};