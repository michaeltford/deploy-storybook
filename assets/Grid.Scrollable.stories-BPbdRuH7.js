import{j as a}from"./index-DWKpDUR-.js";import{$ as m,o as d}from"./index-fWxn02CS.js";import{s as p}from"./index-C3bn2QFg.js";import"./RelaxedChangeTextField-2LOONziU.js";import{s as u}from"./SimpleCellRenderer-DxVH4jYM.js";import"./iframe-CpXbX42E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-z4VAroti.js";import"./client-Ba8_ROJ4.js";import"./index-DOP-sD40.js";import"./index-C4mmmnnj.js";const c=r=>{const{showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,...b}=r;return a.jsx("div",{className:"storybook-container",children:a.jsx(p,{...b,showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,cellRenderer:u})})},o=c.bind({});o.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};o.storyName="Scrollable Grid";const t=r=>a.jsx(d,{style:{border:"red solid 3px"},...r}),h=({width:r,height:l})=>a.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${l}px`,height:`${l}px`,background:"green",border:"blue solid 2px"}}),e=c.bind({});e.args={createHorizontalScrollbar:t,createVerticalScrollbar:t,createScrollCorner:h,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const f={title:"Scrollable Grid",component:m,parameters:{controls:{sort:"requiredFirst"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    createHorizontalScrollbar,
    createVerticalScrollbar,
    createScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} createHorizontalScrollbar={createHorizontalScrollbar} createVerticalScrollbar={createVerticalScrollbar} createScrollCorner={createScrollCorner} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    createHorizontalScrollbar,
    createVerticalScrollbar,
    createScrollCorner,
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <ScrollableGrid {...rest} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} createHorizontalScrollbar={createHorizontalScrollbar} createVerticalScrollbar={createVerticalScrollbar} createScrollCorner={createScrollCorner} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const v=["Scrollable","CustomScrollElements"];export{e as CustomScrollElements,o as Scrollable,v as __namedExportsOrder,f as default};
