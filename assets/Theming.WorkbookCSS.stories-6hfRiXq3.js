import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-DCluhXK3.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{h as i,m as a}from"./esm-ybCGF21G.js";import{Bt as o,dt as s}from"./esm-CecFMiEc.js";import{n as c,t as l}from"./components-CbXTsRv6.js";var u,d,f,p,m,h,g;function _(){return(_=t((()=>{u=e(n(),1),i(),o(),l(),d=r(),f=`
@layer sxl-overrides {
  [data-sxl-theme-mode="light"] {
    --sxl-color-primary: #6d28d9;   /* selection and interaction */
    --sxl-radius-field:  6px;
  }
  [data-sxl-theme-mode="dark"] {
    --sxl-color-primary: #a78bfa;
  }
}
`,p=e=>{let{mode:t=`light`}=e,n=(0,u.useMemo)(()=>{let e=new a;return e.getWorksheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`style`,{children:f}),(0,d.jsx)(s,{workbook:n,colorScheme:t,style:{width:`100%`,height:`100%`}})]})},m=c(p),m.args={mode:`light`},m.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},m.storyName=`Workbook CSS`,h={title:`Theming`,component:s,parameters:{controls:{sort:`requiredFirst`}}},g=[`CSSVariables`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`asStory(Template)`,...m.parameters?.docs?.source}}}})))()}_();export{m as CSSVariables,g as __namedExportsOrder,h as default};