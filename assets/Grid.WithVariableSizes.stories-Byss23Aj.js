import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{N as r,s as i}from"./esm-BcpaeSfa.js";import{n as a,t as o}from"./components-DMcoRMO1.js";var s,c,l,u,d,f;e((()=>{t(),r(),o(),s=n(),c=e=>{let{style:t,key:n,...r}=e,a=e.range;return(0,s.jsx)(i,{...r,style:{...t,background:`${a.colStart%4==0?`rgba(30, 167, 253, 0.1)`:a.rowStart%3==0?`#eee`:`transparent`}`},value:`${e.range.rowStart}:${e.range.colStart}`},n)},l=e=>{let{...t}=e;return(0,s.jsx)(`div`,{className:`storybook-container`,children:(0,s.jsx)(a,{...t,renderCells:c,getColumnWidth:e=>e%4==0?180:60,getRowHeight:e=>e%3==0?60:20})})},u=l.bind({}),u.args={columnCount:200,rowCount:200},u.storyName=`Variable Sizes`,d={title:`Grid`,component:u,parameters:{GridWithVariableSizes:{sort:`requiredFirst`}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <Grid {...rest} renderCells={sharedCellRenderer} getColumnWidth={(index: number): number => {
      if (index % 4 === 0) return 180;
      return 60;
    }} getRowHeight={(index: number): number => {
      if (index % 3 === 0) return 60;
      return 20;
    }} />
    </div>;
}`,...u.parameters?.docs?.source}}},f=[`GridWithVariableSizes`]}))();export{u as GridWithVariableSizes,f as __namedExportsOrder,d as default};