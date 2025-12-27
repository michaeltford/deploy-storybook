import{j as r}from"./index-Be1k0P_l.js";import{M as t}from"./index-B3lpE7zk.js";import"./RelaxedChangeTextField-3NJsffjf.js";import{s as i}from"./SimpleCellRenderer-DchMyOiI.js";import"./iframe-CWCjrGPE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0kf0PFp.js";import"./index-BBX37kc2.js";import"./client-BpSzD-wv.js";import"./index-D1YY320t.js";import"./index-DaE1w_lX.js";const l=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",position:"relative",flex:"1",border:"blue solid 1px"},renderCell:i})})},e=l.bind({});e.args={columnCount:200,rowCount:200};e.storyName="Default";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
