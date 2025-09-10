import{j as r}from"./index-Bex5ZTIz.js";import{M as t}from"./index-Bl98VB8F.js";import"./RelaxedChangeTextField-GJ1GmUND.js";import{s as i}from"./SimpleCellRenderer-rSrWNSBY.js";import"./iframe-Bhn-vlEr.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CQih4H26.js";import"./index-tI__wt30.js";import"./client-BiiePqMP.js";import"./index-CpiIqDFN.js";import"./TextField-CibThDkM.js";const l=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},cellRenderer:i})})},e=l.bind({});e.args={columnCount:200,rowCount:200};e.storyName="Default";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
      <Grid {...rest} style={{
      // For Docs view we are 400px by 'full width'
      minHeight: "400px",
      position: "relative",
      flex: "1",
      border: "blue solid 1px"
    }} cellRenderer={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const b=["DefaultGrid"];export{e as DefaultGrid,b as __namedExportsOrder,w as default};
