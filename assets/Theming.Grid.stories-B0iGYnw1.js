import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{E as r,N as i,f as a}from"./esm-BcpaeSfa.js";import{a as o,t as s}from"./components-DMcoRMO1.js";var c,l,u,d,f,p;e((()=>{t(),i(),s(),c=n(),l=a(),u=e=>{let{mode:t=`light`,...n}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:l}),(0,c.jsx)(`div`,{"data-sxl-theme-mode":t,style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,background:`var(--sxl-color-base-100)`,color:`var(--sxl-color-base-content)`},children:(0,c.jsx)(`div`,{"data-sxl-theme-surface":`grid`,style:{display:`flex`,flex:`1`,minHeight:`400px`},children:(0,c.jsx)(r,{...n,style:{position:`relative`,flex:`1`},renderCells:o})})})]})},d=u.bind({}),d.args={columnCount:200,rowCount:200,mode:`light`},d.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},d.storyName=`Grid`,f={title:`Theming`,component:r,parameters:{controls:{sort:`requiredFirst`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
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
}`,...d.parameters?.docs?.source}}},p=[`Grid_`]}))();export{d as Grid_,p as __namedExportsOrder,f as default};