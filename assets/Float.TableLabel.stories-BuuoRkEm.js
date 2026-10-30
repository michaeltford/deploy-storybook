import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,h as a}from"./esm-COMwdbTt.js";import{Et as o,Yt as s}from"./esm-CRLSzNYP.js";var c,l,u,d,f,p;function m(){return(m=t((()=>{c=e(n(),1),i(),o(),l=r(),u=()=>{let e=(0,c.useMemo)(()=>{let e=new a,t=e.getSelectedWorksheet();return t.getRange(`B2:D2`).setValues([[`Region`,`Units`,`Revenue`]]),t.getRange(`B3:D6`).setValues([[`East`,10,100],[`West`,20,250],[`North`,15,175],[`South`,12,140]]),t.getTables().add(`B2:D6`),t.getRange(`A1`).select(),e},[]);return(0,l.jsx)(`div`,{className:`storybook-container`,style:{height:`100%`},children:(0,l.jsx)(s,{workbook:e})})},d=u.bind({}),d.storyName=`Table hover toolbar + resize`,f={title:`Float`,component:d},p=[`TableLabel`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    const sheet: IWorksheet = wb.getSelectedWorksheet();
    sheet.getRange('B2:D2').setValues([['Region', 'Units', 'Revenue']]);
    sheet.getRange('B3:D6').setValues([['East', 10, 100], ['West', 20, 250], ['North', 15, 175], ['South', 12, 140]]);
    sheet.getTables().add('B2:D6');
    sheet.getRange('A1').select();
    return wb;
  }, []);
  return <div className="storybook-container" style={{
    height: '100%'
  }}>
      <WorkbookElement workbook={workbook} />
    </div>;
}`,...d.parameters?.docs?.source}}}})))()}m();export{d as TableLabel,p as __namedExportsOrder,f as default};