import{j as r}from"./index-BiBgeh3u.js";import{E as t}from"./index-CXJVXQGg.js";import"./RelaxedChangeTextField-De8M6wFd.js";import{s as i}from"./SimpleCellRenderer-D4BHS_e_.js";import"./iframe-mGP4b_Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTwpo8e8.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CdE0ylvR.js";import"./index-CmvF348R.js";const a=o=>{const{...s}=o;return r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",border:"green solid 1px"},children:r.jsx(t,{...s,style:{minHeight:"400px",flex:"1",border:"blue solid 1px",position:"relative"},renderCell:i})})},e=a.bind({});e.args={width:800,height:600,columnCount:200,rowCount:200};e.storyName="Base";const w={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
