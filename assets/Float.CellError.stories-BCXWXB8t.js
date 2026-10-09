import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{kt as i,yt as a}from"./esm-DTVy7_Fo.js";import{d as o,h as s}from"./esm-DLJwqohc.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{c=e(n(),1),o(),a(),l=r(),u=[{address:`B2`,value:`#DIV/0!`},{address:`D4`,value:`#N/A`},{address:`F6`,value:`#NAME?`},{address:`C9`,value:`#REF!`}],d=()=>{let e=(0,c.useMemo)(()=>{let e=new s,t=e.getSelectedSheet();t.getRange(`A1`).setValue(`Hover the # cells (B2, D4, F6, C9) for the error tooltip →`);for(let{address:e,value:n}of u)t.getRange(e).setValue(n);return e},[]);return(0,l.jsx)(`div`,{className:`storybook-container`,style:{height:`100%`},children:(0,l.jsx)(i,{workbook:e,style:{width:`100%`,height:`100%`}})})},f=d.bind({}),f.storyName=`Cell errors (CellErrorLayer, default-on)`,p={title:`Float`,component:f},m=[`CellErrors`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}}})))()}h();export{f as CellErrors,m as __namedExportsOrder,p as default};