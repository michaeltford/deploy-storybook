import{j as e}from"./index-Be1k0P_l.js";import{g as c,r as l}from"./iframe-CWCjrGPE.js";import{b as h}from"./index-DaE1w_lX.js";import{c as a,B as u,P as k}from"./index-D1YY320t.js";import{e as d,T as x,B as s,w as f}from"./CPLIJbynjEkwF2T0-X5Okpxob.js";import"./index-D0kf0PFp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBX37kc2.js";import"./client-BpSzD-wv.js";import"./index-B3lpE7zk.js";import"./Tooltip-BnLguN1d.js";const n=a({palette:{primary:{main:"#ffc107"},secondary:{main:"#ff6e40"},info:{main:"#9c27b0"}}}),g=a({palette:{mode:"dark",primary:{main:"#ffa000"},secondary:{main:"#ff7043"},info:{main:"#b388ff"}}}),b=()=>{const[m,r]=c.useState(n),i=l.useMemo(()=>{const t=new h;return t.getSheetAt(0).getRange("A1:B1").setValues([["Hello","World"]]),t},[]),p=()=>e.jsx(x,{theme:m,children:e.jsxs(u,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"stretch",rowGap:"4px"},children:[e.jsxs(k,{sx:{padding:"4px"},children:[e.jsx(s,{onClick:()=>r(n),color:"primary",children:"Light"}),e.jsx(s,{onClick:()=>r(g),color:"primary",children:"Dark"})]}),e.jsx(f,{sx:{flex:"1 1 100%"},workbook:i})]})});return e.jsx(p,{})},o=b.bind({});o.args={};o.storyName="Custom AppTheme";const E={title:"Workbook/Custom AppTheme",component:d};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
