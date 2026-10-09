import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{kt as i,yt as a}from"./esm-DTVy7_Fo.js";import{d as o,h as s}from"./esm-DLJwqohc.js";var c,l,u,d,f,p;function m(){return(m=t((()=>{c=e(n(),1),o(),a(),l=r(),u=()=>{let e=(0,c.useMemo)(()=>{let e=new s;return e.getSheetAt(0).getRange(`A1:B3`).setValues([[`Chromeless`,`Editor`],[`No`,`MUI`],[`Just`,`@sheetxl/react`]]),e},[]);return(0,l.jsx)(`div`,{style:{display:`flex`,width:`100%`,height:`500px`},children:(0,l.jsx)(i,{workbook:e})})},d=u.bind({}),d.args={},d.storyName=`Chromeless`,f={title:`Workbook`,component:d},p=[`Chromeless`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo<IWorkbook>(() => {
    const wb: IWorkbook = new Workbook();
    const sheet: ISheet = wb.getSheetAt(0);
    const range: ICellRange = sheet.getRange("A1:B3");
    range.setValues([["Chromeless", "Editor"], ["No", "MUI"], ["Just", "@sheetxl/react"]]);
    return wb;
  }, []);
  return <div style={{
    display: 'flex',
    width: '100%',
    height: '500px'
  }}>
      <WorkbookElement workbook={workbook} />
    </div>;
}`,...d.parameters?.docs?.source}}}})))()}m();export{d as Chromeless,p as __namedExportsOrder,f as default};