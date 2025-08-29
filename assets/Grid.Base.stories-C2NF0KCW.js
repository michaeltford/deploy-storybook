import{j as r}from"./index-DjHwRWfA.js";import{R as t}from"./index-Qdaqq9Ty.js";import"./RelaxedChangeTextField-oN9Wr5wH.js";import{s as i}from"./SimpleCellRenderer-BTl0yBjN.js";import"./iframe-BjEmcQsQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DrTFDFai.js";import"./index-BAF_6BbL.js";import"./client-BRZzXANe.js";import"./index-DFFNLwEW.js";import"./TextField-6ZLHcmH7.js";const a=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",flex:"1",border:"blue solid 1px",position:"relative"},cellRenderer:i})})},e=a.bind({});e.args={width:800,height:600,columnCount:200,rowCount:200};e.storyName="Base";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  return <div style={{
    // For Canvas view we want to take full area
    width: "100%",
    height: "100%",
    display: "flex",
    border: "green solid 1px"
  }}>
      <BaseGrid {...rest} style={{
      // For Docs view we are 400px by 'full width'
      minHeight: '400px',
      flex: "1",
      border: 'blue solid 1px',
      position: 'relative'
    }} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const g=["BaseGridStory"];export{e as BaseGridStory,g as __namedExportsOrder,w as default};
