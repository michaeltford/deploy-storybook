import{j as e}from"./index-DjHwRWfA.js";import{m as n}from"./iframe-BjEmcQsQ.js";import{X as p,T as c,a as o,S as h}from"./index-Bu91P29L.js";import{c as m,B as l,P as u}from"./TextField-6ZLHcmH7.js";import"./index-DrTFDFai.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BAF_6BbL.js";import"./client-BRZzXANe.js";import"./index-DFFNLwEW.js";import"./index-Qdaqq9Ty.js";import"./Tooltip-CSAwqu_I.js";const s=m({palette:{primary:{main:"#ffc107"},secondary:{main:"#ff6e40"},info:{main:"#9c27b0"}}}),x=m({palette:{mode:"dark",primary:{main:"#ffa000"},secondary:{main:"#ff7043"},info:{main:"#b388ff"}}}),d=()=>{const[a,t]=n.useState(s),i=()=>e.jsx(c,{theme:a,children:e.jsxs(l,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:[e.jsxs(u,{sx:{padding:"4px"},children:[e.jsx(o,{onClick:()=>t(s),color:"primary",children:"Light"}),e.jsx(o,{onClick:()=>t(x),color:"primary",children:"Dark"})]}),e.jsx(h,{sx:{flex:"1 1 100%"}})]})});return e.jsx(i,{})},r=d.bind({});r.args={};r.storyName="Custom AppTheme";const S={title:"Workbook/Custom AppTheme",component:p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
