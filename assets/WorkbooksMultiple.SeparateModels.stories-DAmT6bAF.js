import{j as e}from"./index-Be1k0P_l.js";import"./index-D1YY320t.js";import{w as s}from"./CPLIJbynjEkwF2T0-X5Okpxob.js";import"./iframe-CWCjrGPE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0kf0PFp.js";import"./index-BBX37kc2.js";import"./client-BpSzD-wv.js";import"./index-DaE1w_lX.js";import"./index-B3lpE7zk.js";import"./Tooltip-BnLguN1d.js";const p=i=>{const{workbook:o,...r}=i,l=()=>e.jsxs("div",{style:{width:"100%",height:"100%",minHeight:"400px",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx(s,{style:{flex:"1"},workbook:o,...r}),e.jsxs("div",{style:{flex:"none",width:"100%",display:"flex",alignItems:"center",padding:"6px 4px"},children:[e.jsx("div",{style:{flex:"none",paddingRight:"10px"},children:"We have two separate models:"}),e.jsx("input",{style:{flex:"1 1 100%"},name:"input-copy",defaultValue:"You can copy/paste text here but this is just for demoing..."}),e.jsx("div",{style:{flex:"1 1 50%"}})]}),e.jsx(s,{style:{flex:"1"},workbook:o})]});return e.jsx(l,{})},t=p.bind({});t.storyName="Separate Models";const g={title:"Workbook/Multiple/Separate Models",component:t};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    workbook,
    ...rest
  } = props as any;
  const App = () => {
    return <div style={{
      // We want to take full area
      width: "100%",
      height: "100%",
      minHeight: "400px",
      position: "relative",
      display: "flex",
      flexDirection: 'column'
    }}>
        <WorkbookElement style={{
        flex: "1"
      }} workbook={workbook} {...rest} />
        <div style={{
        flex: 'none',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '6px 4px'
      }}>
          <div style={{
          flex: 'none',
          paddingRight: '10px'
        }}>We have two separate models:</div>
          <input style={{
          flex: '1 1 100%'
        }} name="input-copy" defaultValue={"You can copy/paste text here but this is just for demoing..."} />
          <div style={{
          flex: '1 1 50%'
        }} />
        </div>
        <WorkbookElement style={{
        flex: "1"
      }} workbook={workbook} />
      </div>;
  };
  return <App />;
}`,...t.parameters?.docs?.source}}};const v=["multipleWorkbooksSeparateModels"];export{v as __namedExportsOrder,g as default,t as multipleWorkbooksSeparateModels};
