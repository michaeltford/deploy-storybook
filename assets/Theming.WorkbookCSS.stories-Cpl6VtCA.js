import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{kt as i,yt as a}from"./esm-DTVy7_Fo.js";import{d as o,h as s}from"./esm-DLJwqohc.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{c=e(n(),1),o(),a(),l=r(),u=`
/* Declare the layer order once (idempotent — the workbook also declares it, first-wins). */
@layer sxl-defaults, sxl-app, sxl-overrides;

@layer sxl-overrides {
  [data-sxl-theme-mode="light"] {
    --sxl-color-primary:  #6d28d9;   /* brand violet (selection / interaction) */
    --sxl-color-accent:   #0891b2;   /* secondary accent */
    --sxl-color-base-100: #fdfdfd;   /* app paper (the grid inherits this in light mode) */
    --sxl-radius-field:   6px;
  }
  [data-sxl-theme-mode="dark"] {
    --sxl-color-primary:  #a78bfa;
    --sxl-color-accent:   #22d3ee;
    --sxl-color-base-100: #16121f;
  }
}
`,d=e=>{let{mode:t=`light`}=e,n=(0,c.useMemo)(()=>{let e=new s;return e.getSheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:u}),(0,l.jsx)(i,{workbook:n,colorScheme:t,style:{width:`100%`,height:`100%`}})]})},f=d.bind({}),f.args={mode:`light`},f.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},f.storyName=`Workbook CSS`,p={title:`Theming`,component:i,parameters:{controls:{sort:`requiredFirst`}}},m=[`CSSVariables`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    mode = 'light'
  } = props as any;
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    wb.getSheetAt(0).getRange('A1:B1').setValues([['Hello', 'World']]);
    return wb;
  }, []);
  return <>
      <style>{OVERRIDES}</style>
      <WorkbookElement workbook={workbook} colorScheme={mode} style={{
      width: '100%',
      height: '100%'
    }} />
    </>;
}`,...f.parameters?.docs?.source}}}})))()}h();export{f as CSSVariables,m as __namedExportsOrder,p as default};