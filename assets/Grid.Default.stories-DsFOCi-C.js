import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{W as r,f as i}from"./esm-xMraobUN.js";import{a,t as o}from"./components-DMQLsyG4.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),r(),o(),s=n(),c=e=>{let{...t}=e;return(0,s.jsx)(`div`,{className:`storybook-container`,children:(0,s.jsx)(i,{...t,renderCells:a})})},l=c.bind({}),l.args={columnCount:8,rowCount:15},l.storyName=`Grid`,u={title:`Grid`,component:i,parameters:{controls:{sort:`requiredFirst`}}},d=[`DefaultGrid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;

  // The Grid needs no size of its own — it fills its container. \`.storybook-container\` is just a
  // full-height flex box (see .storybook/preview-head.html); for a client this is any sized element.
  return <div className="storybook-container">
      <Grid {...rest} renderCells={sharedCellRenderer} />
    </div>;
}`,...l.parameters?.docs?.source}}}})))()}f();export{l as DefaultGrid,d as __namedExportsOrder,u as default};