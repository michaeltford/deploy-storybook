import{j as r}from"./index-BiBgeh3u.js";import{M as t}from"./index-CXJVXQGg.js";import"./RelaxedChangeTextField-De8M6wFd.js";import{s as i}from"./SimpleCellRenderer-D4BHS_e_.js";import"./iframe-mGP4b_Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTwpo8e8.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CdE0ylvR.js";import"./index-CmvF348R.js";const l=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},renderCell:i})})},e=l.bind({});e.args={columnCount:200,rowCount:200};e.storyName="Default";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
    }} renderCell={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const b=["DefaultGrid"];export{e as DefaultGrid,b as __namedExportsOrder,w as default};
