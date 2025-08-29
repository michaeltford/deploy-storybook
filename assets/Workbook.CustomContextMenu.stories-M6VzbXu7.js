import{j as t}from"./index-DjHwRWfA.js";import{X as e}from"./index-Bu91P29L.js";import{B as n}from"./TextField-6ZLHcmH7.js";import"./iframe-BjEmcQsQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DrTFDFai.js";import"./index-BAF_6BbL.js";import"./client-BRZzXANe.js";import"./index-DFFNLwEW.js";import"./index-Qdaqq9Ty.js";import"./Tooltip-CSAwqu_I.js";const s=()=>{const r=()=>t.jsx(n,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:t.jsx(e,{sx:{flex:"1 1 100%"}})});return t.jsx(r,{})},o=s.bind({});o.storyName="Custom Context Menu";o.args={};const h={title:"Workbook/Custom Context Menu",component:e,tags:["experimental","draft","!dev"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const g=["WorkbookAppCustomContextMenu"];export{o as WorkbookAppCustomContextMenu,g as __namedExportsOrder,h as default};
