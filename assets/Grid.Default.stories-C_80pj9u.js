import{j as r}from"./index-DWKpDUR-.js";import{M as t}from"./index-C3bn2QFg.js";import"./RelaxedChangeTextField-2LOONziU.js";import{s as i}from"./SimpleCellRenderer-DxVH4jYM.js";import"./iframe-CpXbX42E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-z4VAroti.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-DOP-sD40.js";import"./index-C4mmmnnj.js";const l=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},cellRenderer:i})})},e=l.bind({});e.args={columnCount:200,rowCount:200};e.storyName="Default";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
