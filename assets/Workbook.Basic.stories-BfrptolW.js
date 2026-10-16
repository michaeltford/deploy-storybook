import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,r as a}from"./esm-D9igw9py.js";import{a as o,ut as s}from"./esm-BxkbVGb8.js";var c,l,u,d,f,p;function m(){return(m=t((()=>{c=e(n(),1),i(),s(),l=r(),u=()=>{let e=(0,c.useMemo)(()=>{let e=new a;return e.getSheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,l.jsx)(o,{workbook:e})},d=u.bind({}),d.args={},d.storyName=`Base`,f={title:`Workbook`,component:d},p=[`WorkbookBase`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo<IWorkbook>(() => {
    const wb: IWorkbook = new Workbook();
    const sheet: ISheet = wb.getSheetAt(0);
    const range: ICellRange = sheet.getRange("A1:B1");
    range.setValues([["Hello", "World"]]);
    return wb;
  }, []);
  return <WorkbookElement workbook={workbook} />;
}`,...d.parameters?.docs?.source}}}})))()}m();export{d as WorkbookBase,p as __namedExportsOrder,f as default};