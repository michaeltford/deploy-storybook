import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{h as i,s as a}from"./esm-Di6fsGRs.js";import{c as o,it as s}from"./esm-BaVuX9rf.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),i(),s(),l=r(),u=()=>(0,l.jsx)(o,{workbook:(0,c.useMemo)(()=>{let e=new a;return e.getSheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[])}),d=u.bind({}),d.args={},d.storyName=`Base`,f={title:`Workbook`,component:d},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo<IWorkbook>(() => {
    const wb: IWorkbook = new Workbook();
    const sheet: ISheet = wb.getSheetAt(0);
    const range: ICellRange = sheet.getRange("A1:B1");
    range.setValues([["Hello", "World"]]);
    return wb;
  }, []);
  return <WorkbookElement workbook={workbook} />;
}`,...d.parameters?.docs?.source}}},p=[`WorkbookBase`]}))();export{d as WorkbookBase,p as __namedExportsOrder,f as default};