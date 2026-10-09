import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{kt as r,yt as i}from"./esm-DTVy7_Fo.js";import{d as a,h as o}from"./esm-DLJwqohc.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),i(),s=n(),c=e=>{let{workbook:t=new o,...n}=e;return(0,s.jsx)(()=>(0,s.jsxs)(`div`,{style:{width:`100%`,height:`100%`,minHeight:`400px`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,s.jsx)(r,{style:{flex:`1`},workbook:t,...n}),(0,s.jsxs)(`div`,{style:{flex:`none`,width:`100%`,display:`flex`,alignItems:`center`,padding:`6px 4px`},children:[(0,s.jsx)(`div`,{style:{flex:`none`,paddingRight:`10px`},children:`We have one shared model:`}),(0,s.jsx)(`input`,{style:{flex:`1 1 100%`},name:`input-copy`,defaultValue:`You can copy/paste text here but this is just for demoing...`}),(0,s.jsx)(`div`,{style:{flex:`1 1 50%`}})]}),(0,s.jsx)(r,{style:{flex:`1`},workbook:t})]}),{})},l=c.bind({}),l.storyName=`Shared Models`,u={title:`Workbook/Multiple/Shared Models`,component:l},d=[`multipleWorkbooksSharedModel`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
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
}`,...l.parameters?.docs?.source}}}})))()}f();export{d as __namedExportsOrder,u as default,l as multipleWorkbooksSharedModel};