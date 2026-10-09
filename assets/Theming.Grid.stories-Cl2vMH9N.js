import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{R as r,W as i,f as a}from"./esm-xMraobUN.js";import{a as o,t as s}from"./components-DMQLsyG4.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{t(),i(),s(),c=n(),l=r(),u=e=>{let{mode:t=`light`,...n}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:l}),(0,c.jsx)(`div`,{"data-sxl-theme-mode":t,style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,background:`var(--sxl-color-base-100)`,color:`var(--sxl-color-base-content)`},children:(0,c.jsx)(`div`,{"data-sxl-theme-surface":`grid`,style:{display:`flex`,flex:`1`,minHeight:`400px`},children:(0,c.jsx)(a,{...n,style:{position:`relative`,flex:`1`},renderCells:o})})})]})},d=u.bind({}),d.args={columnCount:200,rowCount:200,mode:`light`},d.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},d.storyName=`Grid`,f={title:`Theming`,component:a,parameters:{controls:{sort:`requiredFirst`}}},p=[`Grid_`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
  const {
    mode = 'light',
    ...rest
  } = props as any;
  return <>
      <style>{THEME_CSS}</style>
      <div data-sxl-theme-mode={mode} style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--sxl-color-base-100)',
      color: 'var(--sxl-color-base-content)'
    }}>
        <div data-sxl-theme-surface="grid" style={{
        display: 'flex',
        flex: '1',
        minHeight: '400px'
      }}>
          <Grid {...rest} style={{
          position: 'relative',
          flex: '1'
        }} renderCells={sharedCellRenderer} />
        </div>
      </div>
    </>;
}`,...d.parameters?.docs?.source}}}})))()}m();export{d as Grid_,p as __namedExportsOrder,f as default};