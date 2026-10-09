import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{kt as r,yt as i}from"./esm-DTVy7_Fo.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),a=n(),o=e=>{let{workbook:t,...n}=e;return(0,a.jsx)(()=>(0,a.jsxs)(`div`,{style:{width:`100%`,height:`100%`,minHeight:`400px`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,a.jsx)(r,{style:{flex:`1`},workbook:t,...n}),(0,a.jsxs)(`div`,{style:{flex:`none`,width:`100%`,display:`flex`,alignItems:`center`,padding:`6px 4px`},children:[(0,a.jsx)(`div`,{style:{flex:`none`,paddingRight:`10px`},children:`We have two separate models:`}),(0,a.jsx)(`input`,{style:{flex:`1 1 100%`},name:`input-copy`,defaultValue:`You can copy/paste text here but this is just for demoing...`}),(0,a.jsx)(`div`,{style:{flex:`1 1 50%`}})]}),(0,a.jsx)(r,{style:{flex:`1`},workbook:t})]}),{})},s=o.bind({}),s.storyName=`Separate Models`,c={title:`Workbook/Multiple/Separate Models`,component:s},l=[`multipleWorkbooksSeparateModels`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
  const {
    workbook,
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
        }}>We have two separate models:</div>
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
}`,...s.parameters?.docs?.source}}}})))()}u();export{l as __namedExportsOrder,c as default,s as multipleWorkbooksSeparateModels};