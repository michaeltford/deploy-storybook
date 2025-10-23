import{j as t}from"./index-BiBgeh3u.js";import{r as s}from"./iframe-mGP4b_Fh.js";import{J as n}from"./index-CmvF348R.js";import"./index-CdE0ylvR.js";import{w as a}from"./BgsyX5QL9OLy0DN3-CLQ3UbdE.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";import"./Tooltip-CXxmTuYg.js";const m=()=>{const r=s.useMemo(()=>{const e=new n;return e.getSheetAt(0).getRange("A1:B1").setValues([["Hello","World"]]),e},[]);return t.jsx(a,{workbook:r})},o=m.bind({});o.args={};o.storyName="Base";const f={title:"Workbook",component:o};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo<IWorkbook>(() => {
    const wb: IWorkbook = new Workbook();
    const sheet: ISheet = wb.getSheetAt(0);
    const range: ICellRange = sheet.getRange("A1:B1");
    range.setValues([["Hello", "World"]]);
    return wb;
  }, []);
  return <WorkbookElement workbook={workbook} />;
}`,...o.parameters?.docs?.source}}};const B=["WorkbookBase"];export{o as WorkbookBase,B as __namedExportsOrder,f as default};
