import{j as e}from"./index-BkEiYHzc.js";import{M as n}from"./index-DpKgPYal.js";import{S as r}from"./index-ByrfcJ3T.js";import"./iframe-0eTU46SU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Z2-nrzLL.js";import"./index-DNdSmOrT.js";import"./client-BARKspf1.js";import"./index-Bv7bgGcI.js";import"./TextField-B6vnsKfh.js";import"./Tooltip-DkPcMJmj.js";const p=s=>{const{workbook:t=new n,...i}=s,l=()=>e.jsxs("div",{style:{width:"100%",height:"100%",minHeight:"400px",position:"relative",display:"flex",flexDirection:"column"},children:[e.jsx(r,{style:{flex:"1"},workbook:t,...i}),e.jsxs("div",{style:{flex:"none",width:"100%",display:"flex",alignItems:"center",padding:"6px 4px"},children:[e.jsx("div",{style:{flex:"none",paddingRight:"10px"},children:"We have one shared model:"}),e.jsx("input",{style:{flex:"1 1 100%"},name:"input-copy",defaultValue:"You can copy/paste text here but this is just for demoing..."}),e.jsx("div",{style:{flex:"1 1 50%"}})]}),e.jsx(r,{style:{flex:"1"},workbook:t})]});return e.jsx(l,{})},o=p.bind({});o.storyName="Shared Models";const g={title:"Workbook/Multiple/Shared Models",component:o};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    workbook = new Workbook(),
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
        }}>We have one shared model:</div>
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
}`,...o.parameters?.docs?.source}}};const v=["multipleWorkbooksSharedModel"];export{v as __namedExportsOrder,g as default,o as multipleWorkbooksSharedModel};
