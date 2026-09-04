import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{c as r,it as i}from"./esm-BaVuX9rf.js";var a,o,s,c,l;e((()=>{t(),i(),a=n(),o=e=>{let{workbook:t,...n}=e;return(0,a.jsx)(()=>(0,a.jsxs)(`div`,{style:{width:`100%`,height:`100%`,minHeight:`400px`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,a.jsx)(r,{style:{flex:`1`},workbook:t,...n}),(0,a.jsxs)(`div`,{style:{flex:`none`,width:`100%`,display:`flex`,alignItems:`center`,padding:`6px 4px`},children:[(0,a.jsx)(`div`,{style:{flex:`none`,paddingRight:`10px`},children:`We have two separate models:`}),(0,a.jsx)(`input`,{style:{flex:`1 1 100%`},name:`input-copy`,defaultValue:`You can copy/paste text here but this is just for demoing...`}),(0,a.jsx)(`div`,{style:{flex:`1 1 50%`}})]}),(0,a.jsx)(r,{style:{flex:`1`},workbook:t})]}),{})},s=o.bind({}),s.storyName=`Separate Models`,c={title:`Workbook/Multiple/Separate Models`,component:s},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
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
}`,...s.parameters?.docs?.source}}},l=[`multipleWorkbooksSeparateModels`]}))();export{l as __namedExportsOrder,c as default,s as multipleWorkbooksSeparateModels};