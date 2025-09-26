import{j as e}from"./index-DWKpDUR-.js";import{m as n}from"./iframe-CpXbX42E.js";import{c as m,B as p,P as c}from"./index-DOP-sD40.js";import{i as h,T as l,B as o,R as u}from"./CzdBzjYgP1i3pkPL-BkLvlJQf.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-C4mmmnnj.js";import"./index-C3bn2QFg.js";import"./Tooltip-CDPNXS5Z.js";const s=m({palette:{primary:{main:"#ffc107"},secondary:{main:"#ff6e40"},info:{main:"#9c27b0"}}}),x=m({palette:{mode:"dark",primary:{main:"#ffa000"},secondary:{main:"#ff7043"},info:{main:"#b388ff"}}}),d=()=>{const[i,t]=n.useState(s),a=()=>e.jsx(l,{theme:i,children:e.jsxs(p,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:[e.jsxs(c,{sx:{padding:"4px"},children:[e.jsx(o,{onClick:()=>t(s),color:"primary",children:"Light"}),e.jsx(o,{onClick:()=>t(x),color:"primary",children:"Dark"})]}),e.jsx(u,{sx:{flex:"1 1 100%"}})]})});return e.jsx(a,{})},r=d.bind({});r.args={};r.storyName="Custom AppTheme";const S={title:"Workbook/Custom AppTheme",component:h};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(lightTheme);
  const App = () => {
    return <ThemeProvider theme={currentTheme}>
      <Box sx={{
        width: '100%',
        // to layout in storybook
        height: '100%',
        // to layout in storybook
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        rowGap: '4px'
      }}>
        <Paper sx={{
          padding: '4px'
        }}>
          <Button onClick={() => setCurrentTheme(lightTheme)} color="primary">
            Light
          </Button>
          <Button onClick={() => setCurrentTheme(darkTheme)} color="primary">
            Dark
          </Button>
        </Paper>
        {/* <Studio
          square={false}
          sx={{
            flex: '1 1 100%'
          }}
         /> */}
        <WorkbookElement sx={{
          flex: '1 1 100%'
        }} />
      </Box>
      </ThemeProvider>;
  };
  return <App />;
}`,...r.parameters?.docs?.source}}};const w=["WorkbookAppCustomAppThemes"];export{r as WorkbookAppCustomAppThemes,w as __namedExportsOrder,S as default};
