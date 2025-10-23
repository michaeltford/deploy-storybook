import{j as e}from"./index-BiBgeh3u.js";import{g as c,r as l}from"./iframe-mGP4b_Fh.js";import{J as h}from"./index-CmvF348R.js";import{c as a,B as u,P as k}from"./index-CdE0ylvR.js";import{e as d,T as x,B as s,w as f}from"./BgsyX5QL9OLy0DN3-CLQ3UbdE.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";import"./Tooltip-CXxmTuYg.js";const n=a({palette:{primary:{main:"#ffc107"},secondary:{main:"#ff6e40"},info:{main:"#9c27b0"}}}),g=a({palette:{mode:"dark",primary:{main:"#ffa000"},secondary:{main:"#ff7043"},info:{main:"#b388ff"}}}),T=()=>{const[m,r]=c.useState(n),i=l.useMemo(()=>{const t=new h;return t.getSheetAt(0).getRange("A1:B1").setValues([["Hello","World"]]),t},[]),p=()=>e.jsx(x,{theme:m,children:e.jsxs(u,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:[e.jsxs(k,{sx:{padding:"4px"},children:[e.jsx(s,{onClick:()=>r(n),color:"primary",children:"Light"}),e.jsx(s,{onClick:()=>r(g),color:"primary",children:"Dark"})]}),e.jsx(f,{sx:{flex:"1 1 100%"},workbook:i})]})});return e.jsx(p,{})},o=T.bind({});o.args={};o.storyName="Custom AppTheme";const E={title:"Workbook/Custom AppTheme",component:d};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(lightTheme);
  const workbook: IWorkbook = useMemo<IWorkbook>(() => {
    const wb: IWorkbook = new Workbook();
    const sheet: ISheet = wb.getSheetAt(0);
    const range: ICellRange = sheet.getRange("A1:B1");
    range.setValues([["Hello", "World"]]);
    return wb;
  }, []);
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
        }} workbook={workbook} />
      </Box>
      </ThemeProvider>;
  };
  return <App />;
}`,...o.parameters?.docs?.source}}};const v=["WorkbookAppCustomAppThemes"];export{o as WorkbookAppCustomAppThemes,v as __namedExportsOrder,E as default};
