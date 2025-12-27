import{j as a}from"./index-Be1k0P_l.js";import{L as b,v as m}from"./index-BBX37kc2.js";import{r as p}from"./index-B3lpE7zk.js";import"./RelaxedChangeTextField-3NJsffjf.js";import{s as u}from"./SimpleCellRenderer-DchMyOiI.js";import"./iframe-CWCjrGPE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0kf0PFp.js";import"./client-BpSzD-wv.js";import"./index-D1YY320t.js";import"./index-DaE1w_lX.js";const n=r=>{const{showVerticalScrollbar:l,showHorizontalScrollbar:c,renderScrollbarHorizontal:s,renderScrollbarVertical:i,createScrollCorner:d,...S}=r;return a.jsx("div",{className:"storybook-container",children:a.jsx(p,{...S,showVerticalScrollbar:l,showHorizontalScrollbar:c,renderScrollbarHorizontal:s,renderScrollbarVertical:i,createScrollCorner:d,renderCell:u})})},o=n.bind({});o.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};o.storyName="Scrollable Grid";const t=r=>a.jsx(m,{style:{border:"red solid 3px"},...r}),h=({width:r,height:l})=>a.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${l}px`,height:`${l}px`,background:"green",border:"blue solid 2px"}}),e=n.bind({});e.args={renderScrollbarHorizontal:t,renderScrollbarVertical:t,createScrollCorner:h,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const R={title:"Scrollable Grid",component:b,parameters:{controls:{sort:"requiredFirst"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    renderScrollbarHorizontal,
    renderScrollbarVertical,
    createScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} renderScrollbarHorizontal={renderScrollbarHorizontal} renderScrollbarVertical={renderScrollbarVertical} createScrollCorner={createScrollCorner} renderCell={sharedCellRenderer} />
    </div>;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    renderScrollbarHorizontal,
    renderScrollbarVertical,
    createScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} renderScrollbarHorizontal={renderScrollbarHorizontal} renderScrollbarVertical={renderScrollbarVertical} createScrollCorner={createScrollCorner} renderCell={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const k=["Scrollable","CustomScrollElements"];export{e as CustomScrollElements,o as Scrollable,k as __namedExportsOrder,R as default};
