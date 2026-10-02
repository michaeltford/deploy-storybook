import{i as e}from"./preload-helper-BdFrVu1K.js";import{kt as t}from"./iframe-DVOsKsK5.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{$ as r,B as i,L as a}from"./esm-CnNtTDnU.js";import{a as o,n as s,t as c}from"./components-CP_B1620.js";var l,u,d,f,p,m,h,g;e((()=>{t(),r(),c(),l=n(),u=e=>{let{showVerticalScrollbar:t,showHorizontalScrollbar:n,renderScrollbarHorizontal:r,renderScrollbarVertical:i,renderScrollCorner:a,...c}=e;return(0,l.jsx)(`div`,{className:`storybook-container`,children:(0,l.jsx)(s,{...c,showVerticalScrollbar:t,showHorizontalScrollbar:n,renderScrollbarHorizontal:r,renderScrollbarVertical:i,renderScrollCorner:a,renderCells:o})})},d=u.bind({}),d.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0},d.storyName=`Scrollable Grid`,f=e=>(0,l.jsx)(a,{style:{border:`red solid 3px`},...e}),p=e=>{let{size:t,...n}=e;return(0,l.jsx)(`button`,{style:{width:`100%`,height:`100%`,background:`green`,border:`blue solid 2px`},...n})},m=u.bind({}),m.args={renderScrollbarHorizontal:f,renderScrollbarVertical:f,renderScrollCorner:p,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0},h={title:`Scrollable Grid`,component:i,parameters:{controls:{sort:`requiredFirst`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
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
}`,...m.parameters?.docs?.source}}},g=[`Scrollable`,`CustomScrollElements`]}))();export{m as CustomScrollElements,d as Scrollable,g as __namedExportsOrder,h as default};