import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{h as i,s as a}from"./esm-Di6fsGRs.js";import{c as o,it as s}from"./esm-BaVuX9rf.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),i(),s(),l=r(),u=()=>(0,l.jsx)(`div`,{className:`storybook-container`,style:{height:`100%`},children:(0,l.jsx)(o,{workbook:(0,c.useMemo)(()=>{let e=new a,t=e.getSelectedSheet();return t.getRange(`B2:D2`).setValues([[`Region`,`Units`,`Revenue`]]),t.getRange(`B3:D6`).setValues([[`East`,10,100],[`West`,20,250],[`North`,15,175],[`South`,12,140]]),t.getTables().add(`B2:D6`),t.getRange(`A1`).select(),e},[])})}),d=u.bind({}),d.storyName=`Table hover toolbar + resize (in TableLayer)`,f={title:`Float`,component:d},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},p=[`TableLabel`]}))();export{d as TableLabel,p as __namedExportsOrder,f as default};