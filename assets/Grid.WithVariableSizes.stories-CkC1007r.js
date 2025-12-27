import{j as o}from"./index-Be1k0P_l.js";import{r as i,b as d}from"./index-B3lpE7zk.js";import"./iframe-CWCjrGPE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0kf0PFp.js";import"./index-BBX37kc2.js";import"./client-BpSzD-wv.js";const l=e=>{const{style:n,key:t,...a}=e,s=e.range;return o.jsx(d,{...a,style:{...n,background:`${s.colStart%4===0?"rgba(30, 167, 253, 0.1)":s.rowStart%3===0?"#eee":"transparent"}`},value:`${e.range.rowStart}:${e.range.colStart}`},t)},m=e=>{const{...n}=e;return o.jsx("div",{className:"storybook-container",children:o.jsx(i,{...n,renderCell:l,getColumnWidth:t=>t%4===0?180:60,getRowHeight:t=>t%3===0?60:20})})},r=m.bind({});r.args={columnCount:200,rowCount:200};r.storyName="with Variable Sizes";const S={title:"Grid",component:r,parameters:{GridWithVariableSizes:{sort:"requiredFirst"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <Grid {...rest} renderCell={sharedCellRenderer} getColumnWidth={(index: number): number => {
      if (index % 4 === 0) return 180;
      return 60;
    }} getRowHeight={(index: number): number => {
      if (index % 3 === 0) return 60;
      return 20;
    }} />
    </div>;
}`,...r.parameters?.docs?.source}}};const y=["GridWithVariableSizes"];export{r as GridWithVariableSizes,y as __namedExportsOrder,S as default};
