import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{h as i,s as a}from"./esm-Di6fsGRs.js";import{c as o,it as s}from"./esm-BaVuX9rf.js";var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),i(),s(),l=r(),u=[{address:`B2`,value:`#DIV/0!`},{address:`D4`,value:`#N/A`},{address:`F6`,value:`#NAME?`},{address:`C9`,value:`#REF!`}],d=()=>(0,l.jsx)(`div`,{className:`storybook-container`,style:{height:`100%`},children:(0,l.jsx)(o,{workbook:(0,c.useMemo)(()=>{let e=new a,t=e.getSelectedSheet();t.getRange(`A1`).setValue(`Hover the # cells (B2, D4, F6, C9) for the error tooltip →`);for(let{address:e,value:n}of u)t.getRange(e).setValue(n);return e},[]),style:{width:`100%`,height:`100%`}})}),f=d.bind({}),f.storyName=`Cell errors (CellErrorLayer, default-on)`,p={title:`Float`,component:f},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    const sheet: ISheet = wb.getSelectedSheet();
    sheet.getRange('A1').setValue('Hover the # cells (B2, D4, F6, C9) for the error tooltip →');
    for (const {
      address,
      value
    } of ERROR_CELLS) sheet.getRange(address).setValue(value);
    return wb;
  }, []);
  return <div className="storybook-container" style={{
    height: '100%'
  }}>
      <WorkbookElement workbook={workbook} style={{
      width: '100%',
      height: '100%'
    }} />
    </div>;
}`,...f.parameters?.docs?.source}}},m=[`CellErrors`]}))();export{f as CellErrors,m as __namedExportsOrder,p as default};