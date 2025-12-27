import{j as t}from"./index-Be1k0P_l.js";import{r as s}from"./iframe-CWCjrGPE.js";import{b as n}from"./index-DaE1w_lX.js";import"./index-D1YY320t.js";import{w as a}from"./CPLIJbynjEkwF2T0-X5Okpxob.js";import"./index-D0kf0PFp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBX37kc2.js";import"./client-BpSzD-wv.js";import"./index-B3lpE7zk.js";import"./Tooltip-BnLguN1d.js";const m=()=>{const r=s.useMemo(()=>{const e=new n;return e.getSheetAt(0).getRange("A1:B1").setValues([["Hello","World"]]),e},[]);return t.jsx(a,{workbook:r})},o=m.bind({});o.args={};o.storyName="Base";const f={title:"Workbook",component:o};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo<IWorkbook>(() => {
    const wb: IWorkbook = new Workbook();
    const sheet: ISheet = wb.getSheetAt(0);
    const range: ICellRange = sheet.getRange("A1:B1");
    range.setValues([["Hello", "World"]]);
    return wb;
  }, []);
  return <WorkbookElement workbook={workbook} />;
}`,...o.parameters?.docs?.source}}};const B=["WorkbookBase"];export{o as WorkbookBase,B as __namedExportsOrder,f as default};
