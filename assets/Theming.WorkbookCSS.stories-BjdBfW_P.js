import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,r as a}from"./esm-D9igw9py.js";import{a as o,ut as s}from"./esm-BxkbVGb8.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{c=e(n(),1),i(),s(),l=r(),u=`
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
`,d=e=>{let{mode:t=`light`}=e,n=(0,c.useMemo)(()=>{let e=new a;return e.getSheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:u}),(0,l.jsx)(o,{workbook:n,colorScheme:t,style:{width:`100%`,height:`100%`}})]})},f=d.bind({}),f.args={mode:`light`},f.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},f.storyName=`Workbook CSS`,p={title:`Theming`,component:o,parameters:{controls:{sort:`requiredFirst`}}},m=[`CSSVariables`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
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