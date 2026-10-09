import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{kt as i,yt as a}from"./esm-DTVy7_Fo.js";import{d as o,h as s}from"./esm-DLJwqohc.js";var c,l,u,d,f,p;function m(){return(m=t((()=>{c=e(n(),1),o(),a(),l=r(),u=()=>{let e=(0,c.useMemo)(()=>{let e=new s,t=e.getSelectedSheet();return t.getRange(`B2:D2`).setValues([[`Region`,`Units`,`Revenue`]]),t.getRange(`B3:D6`).setValues([[`East`,10,100],[`West`,20,250],[`North`,15,175],[`South`,12,140]]),t.getTables().add(`B2:D6`),t.getRange(`A1`).select(),e},[]);return(0,l.jsx)(`div`,{className:`storybook-container`,style:{height:`100%`},children:(0,l.jsx)(i,{workbook:e})})},d=u.bind({}),d.storyName=`Table hover toolbar + resize`,f={title:`Float`,component:d},p=[`TableLabel`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    const sheet: ISheet = wb.getSelectedSheet();
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