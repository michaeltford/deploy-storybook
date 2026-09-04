import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{h as r,s as i}from"./esm-Di6fsGRs.js";import{c as a,it as o}from"./esm-BaVuX9rf.js";var s,c,l,u,d;e((()=>{t(),r(),o(),s=n(),c=e=>{let{workbook:t=new i,...n}=e;return(0,s.jsx)(()=>(0,s.jsxs)(`div`,{style:{width:`100%`,height:`100%`,minHeight:`400px`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,s.jsx)(a,{style:{flex:`1`},workbook:t,...n}),(0,s.jsxs)(`div`,{style:{flex:`none`,width:`100%`,display:`flex`,alignItems:`center`,padding:`6px 4px`},children:[(0,s.jsx)(`div`,{style:{flex:`none`,paddingRight:`10px`},children:`We have one shared model:`}),(0,s.jsx)(`input`,{style:{flex:`1 1 100%`},name:`input-copy`,defaultValue:`You can copy/paste text here but this is just for demoing...`}),(0,s.jsx)(`div`,{style:{flex:`1 1 50%`}})]}),(0,s.jsx)(a,{style:{flex:`1`},workbook:t})]}),{})},l=c.bind({}),l.storyName=`Shared Models`,u={title:`Workbook/Multiple/Shared Models`,component:l},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
  const {
    workbook = new Workbook(),
    ...rest
  } = props as any;
  const App = () => {
    return <div style={{
      // We want to take full area
      width: "100%",
      height: "100%",
      minHeight: "400px",
      position: "relative",
      display: "flex",
      flexDirection: 'column'
    }}>
        <WorkbookElement style={{
        flex: "1"
      }} workbook={workbook} {...rest} />
        <div style={{
        flex: 'none',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '6px 4px'
      }}>
          <div style={{
          flex: 'none',
          paddingRight: '10px'
        }}>We have one shared model:</div>
          <input style={{
          flex: '1 1 100%'
        }} name="input-copy" defaultValue={"You can copy/paste text here but this is just for demoing..."} />
          <div style={{
          flex: '1 1 50%'
        }} />
        </div>
        <WorkbookElement style={{
        flex: "1"
      }} workbook={workbook} />
      </div>;
  };
  return <App />;
}`,...l.parameters?.docs?.source}}},d=[`multipleWorkbooksSharedModel`]}))();export{d as __namedExportsOrder,u as default,l as multipleWorkbooksSharedModel};