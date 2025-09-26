import{j as e}from"./index-DWKpDUR-.js";import"./index-DOP-sD40.js";import{R as s}from"./CzdBzjYgP1i3pkPL-BkLvlJQf.js";import"./iframe-CpXbX42E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-z4VAroti.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-C4mmmnnj.js";import"./index-C3bn2QFg.js";import"./Tooltip-CDPNXS5Z.js";const p=i=>{const{workbook:o,...r}=i,l=()=>e.jsxs("div",{style:{width:"100%",height:"100%",minHeight:"400px",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx(s,{style:{flex:"1"},workbook:o,...r}),e.jsxs("div",{style:{flex:"none",width:"100%",display:"flex",alignItems:"center",padding:"6px 4px"},children:[e.jsx("div",{style:{flex:"none",paddingRight:"10px"},children:"We have two separate models:"}),e.jsx("input",{style:{flex:"1 1 100%"},name:"input-copy",defaultValue:"You can copy/paste text here but this is just for demoing..."}),e.jsx("div",{style:{flex:"1 1 50%"}})]}),e.jsx(s,{style:{flex:"1"},workbook:o})]});return e.jsx(l,{})},t=p.bind({});t.storyName="Separate Models";const g={title:"Workbook/Multiple/Separate Models",component:t};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
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
