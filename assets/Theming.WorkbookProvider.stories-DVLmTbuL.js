import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,w as a}from"./esm-BwAES4tr.js";import{h as o,s}from"./esm-Di6fsGRs.js";import{c,it as l}from"./esm-BaVuX9rf.js";var u,d,f,p,m,h,g,_;e((()=>{u=t(n(),1),i(),o(),l(),d=r(),f={"color-primary":`#6d28d9`,"color-accent":`#0891b2`},p={"color-primary":`#a78bfa`,"color-accent":`#22d3ee`},m=e=>{let{mode:t=`light`}=e,n=(0,u.useMemo)(()=>{let e=new s;return e.getSheetAt(0).getRange(`A1:B1`).setValues([[`Hello`,`World`]]),e},[]);return(0,d.jsx)(a,{light:f,dark:p,children:(0,d.jsx)(c,{workbook:n,colorScheme:t,style:{width:`100%`,height:`100%`}})})},h=m.bind({}),h.args={mode:`light`},h.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},h.storyName=`Workbook Provider`,g={title:`Theming`,component:a,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
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
}`,...h.parameters?.docs?.source}}},_=[`Provider`]}))();export{h as Provider,_ as __namedExportsOrder,g as default};