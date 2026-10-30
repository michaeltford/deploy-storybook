import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,h as a}from"./esm-COMwdbTt.js";import{H as o,ht as s}from"./esm-xDuNd2aE.js";import{Et as c,Yt as l}from"./esm-CRLSzNYP.js";var u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{u=e(n(),1),s(),i(),c(),d=r(),f={"color-primary":`#6d28d9`,"color-accent":`#0891b2`},p={"color-primary":`#a78bfa`,"color-accent":`#22d3ee`},m=e=>{let{mode:t=`light`}=e,n=(0,u.useMemo)(()=>{let e=new a;return e.getWorksheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,d.jsx)(o,{light:f,dark:p,children:(0,d.jsx)(l,{workbook:n,colorScheme:t,style:{width:`100%`,height:`100%`}})})},h=m.bind({}),h.args={mode:`light`},h.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},h.storyName=`Workbook Provider`,g={title:`Theming`,component:o,parameters:{controls:{sort:`requiredFirst`}}},_=[`Provider`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    mode = 'light'
  } = props as any;
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    wb.getWorksheetAt(0).getRange('A1:B1').setValues([['Hello', 'World']]);
    return wb;
  }, []);
  return <TokenThemeProvider light={LIGHT} dark={DARK}>
      <WorkbookElement workbook={workbook} colorScheme={mode} style={{
      width: '100%',
      height: '100%'
    }} />
    </TokenThemeProvider>;
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as Provider,_ as __namedExportsOrder,g as default};