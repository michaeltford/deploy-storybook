import{i as e}from"./preload-helper-BdFrVu1K.js";import{kt as t}from"./iframe-DVOsKsK5.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{V as r,h as i}from"./esm-1pmCZayM.js";import{a,t as o}from"./components-CP_B1620.js";var s,c,l,u,d;e((()=>{t(),r(),o(),s=n(),c=e=>{let{...t}=e;return(0,s.jsx)(`div`,{className:`storybook-container`,children:(0,s.jsx)(i,{...t,renderCells:a})})},l=c.bind({}),l.args={columnCount:8,rowCount:15},l.storyName=`Grid`,u={title:`Grid`,component:i,parameters:{controls:{sort:`requiredFirst`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;

  // The Grid needs no size of its own — it fills its container. \`.storybook-container\` is just a
  // full-height flex box (see .storybook/preview-head.html); for a client this is any sized element.
  return <div className="storybook-container">
      <Grid {...rest} renderCells={sharedCellRenderer} />
    </div>;
}`,...l.parameters?.docs?.source}}},d=[`DefaultGrid`]}))();export{l as DefaultGrid,d as __namedExportsOrder,u as default};