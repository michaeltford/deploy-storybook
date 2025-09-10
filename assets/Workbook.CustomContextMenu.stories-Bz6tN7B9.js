import{j as o}from"./index-Bex5ZTIz.js";import{t as e}from"./index-9kA3aVAG.js";import{B as n}from"./TextField-CibThDkM.js";import"./iframe-Bhn-vlEr.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CQih4H26.js";import"./index-tI__wt30.js";import"./client-BiiePqMP.js";import"./index-CpiIqDFN.js";import"./index-Bl98VB8F.js";import"./Tooltip-BCGaakb4.js";const s=()=>{const r=()=>o.jsx(n,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:o.jsx(e,{sx:{flex:"1 1 100%"}})});return o.jsx(r,{})},t=s.bind({});t.storyName="Custom Context Menu";t.args={};const h={title:"Workbook/Custom Context Menu",component:e,tags:["experimental","draft","!dev"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const App = () => {
    return <Box sx={{
      width: '100%',
      // to layout in storybook
      height: '100%',
      // to layout in storybook
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      rowGap: '4px'
    }}>
        <Studio sx={{
        flex: '1 1 100%'
      }}
      // insertCommands={{
      //   "customCommand": {
      //     label: "Custom Command",
      //     execute: (context) => {
      //       console.log("Custom Command", context);
      //     },
      //     // when?
      //   }
      // }}
      // insertCommandButtons={{
      //   'toolbar.home.format': {
      //     command: string or OCommand
      //     render: function that returns a widget // default to a commandButton
      //     after: false // before or after entry point. @defaultValue false
      //   }
      // }}
      />
      </Box>;
  };
  return <App />;
}`,...t.parameters?.docs?.source}}};const g=["WorkbookAppCustomContextMenu"];export{t as WorkbookAppCustomContextMenu,g as __namedExportsOrder,h as default};
