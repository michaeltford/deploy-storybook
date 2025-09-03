import{j as a}from"./index-BkEiYHzc.js";import{T as m,t as d}from"./index-DNdSmOrT.js";import{c as p}from"./index-Bv7bgGcI.js";import"./RelaxedChangeTextField-DxEY1TwQ.js";import{s as u}from"./SimpleCellRenderer-B0CT_mCd.js";import"./iframe-0eTU46SU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Z2-nrzLL.js";import"./client-BARKspf1.js";import"./index-DpKgPYal.js";import"./TextField-B6vnsKfh.js";const c=r=>{const{showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,...b}=r;return a.jsx("div",{className:"storybook-container",children:a.jsx(p,{...b,showVerticalScrollbar:l,showHorizontalScrollbar:n,createHorizontalScrollbar:s,createVerticalScrollbar:i,createScrollCorner:S,cellRenderer:u})})},o=c.bind({});o.args={columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};o.storyName="Scrollable Grid";const t=r=>a.jsx(d,{style:{border:"red solid 3px"},...r}),h=({width:r,height:l})=>a.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${l}px`,height:`${l}px`,background:"green",border:"blue solid 2px"}}),e=c.bind({});e.args={createHorizontalScrollbar:t,createVerticalScrollbar:t,createScrollCorner:h,columnCount:200,rowCount:200,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const v={title:"Scrollable Grid",component:m,parameters:{controls:{sort:"requiredFirst"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
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
}`,...e.parameters?.docs?.source}}};const k=["Scrollable","CustomScrollElements"];export{e as CustomScrollElements,o as Scrollable,k as __namedExportsOrder,v as default};
