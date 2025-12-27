import{j as r}from"./index-Be1k0P_l.js";import{E as t}from"./index-B3lpE7zk.js";import"./RelaxedChangeTextField-3NJsffjf.js";import{s as i}from"./SimpleCellRenderer-DchMyOiI.js";import"./iframe-CWCjrGPE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0kf0PFp.js";import"./index-BBX37kc2.js";import"./client-BpSzD-wv.js";import"./index-D1YY320t.js";import"./index-DaE1w_lX.js";const a=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",flex:"1",border:"blue solid 1px",position:"relative"},renderCell:i})})},e=a.bind({});e.args={width:800,height:600,columnCount:200,rowCount:200};e.storyName="Base";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
    }} renderCell={sharedCellRenderer} />
    </div>;
}`,...e.parameters?.docs?.source}}};const g=["BaseGridStory"];export{e as BaseGridStory,g as __namedExportsOrder,w as default};
