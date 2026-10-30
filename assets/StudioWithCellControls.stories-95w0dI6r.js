import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,h as a}from"./esm-COMwdbTt.js";import{c as o,s}from"./esm-gLCMd2WH.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./storyCellControls-2BDLWZOG.js";var m,h,g,_,v,y;function b(){return(b=t((()=>{m=e(n(),1),i(),o(),l(),h=r(),c(),g=()=>{let e=(0,m.useMemo)(()=>{let e=new a,t=e.getSelectedWorksheet();return d(t),f(t),e},[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`style`,{children:u+p}),(0,h.jsx)(s,{workbook:e,title:`Cell controls`})]})},_=g.bind({}),_.storyName=`With cell controls`,v={title:`Studio`,component:_},y=[`StudioWithCellControls`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook();
    const sheet = wb.getSelectedWorksheet();
    seedCellControls(sheet);
    void addButtonMacro(sheet);
    return wb;
  }, []);
  return <>
      <style>{RATING_CSS + BUTTON_CSS}</style>
      <Studio workbook={workbook} title="Cell controls" />
    </>;
}`,..._.parameters?.docs?.source}}}})))()}b();export{_ as StudioWithCellControls,y as __namedExportsOrder,v as default};