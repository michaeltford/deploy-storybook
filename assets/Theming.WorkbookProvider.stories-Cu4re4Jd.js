import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{nt as i,s as a}from"./esm-B64qfjsV.js";import{kt as o,yt as s}from"./esm-DTVy7_Fo.js";import{d as c,h as l}from"./esm-DLJwqohc.js";var u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{u=e(n(),1),i(),c(),s(),d=r(),f={"color-primary":`#6d28d9`,"color-accent":`#0891b2`},p={"color-primary":`#a78bfa`,"color-accent":`#22d3ee`},m=e=>{let{mode:t=`light`}=e,n=(0,u.useMemo)(()=>{let e=new l;return e.getSheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,d.jsx)(a,{light:f,dark:p,children:(0,d.jsx)(o,{workbook:n,colorScheme:t,style:{width:`100%`,height:`100%`}})})},h=m.bind({}),h.args={mode:`light`},h.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},h.storyName=`Workbook Provider`,g={title:`Theming`,component:a,parameters:{controls:{sort:`requiredFirst`}}},_=[`Provider`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    mode = 'light'
  } = props as any;
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    wb.getSheetAt(0).getRange('A1:B1').setValues([['Hello', 'World']]);
    return wb;
  }, []);
  return <TokenThemeProvider light={LIGHT} dark={DARK}>
      <WorkbookElement workbook={workbook} colorScheme={mode} style={{
      width: '100%',
      height: '100%'
    }} />
    </TokenThemeProvider>;
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as Provider,_ as __namedExportsOrder,g as default};