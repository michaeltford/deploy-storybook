import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{E as r,N as i,f as a}from"./esm-BcpaeSfa.js";import{a as o,t as s}from"./components-DMcoRMO1.js";var c,l,u,d,f,p,m;e((()=>{t(),i(),s(),c=n(),l=a(),u=({label:e,forceMode:t,count:n})=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,flex:`1`,minWidth:0,gap:4},children:[(0,c.jsx)(`div`,{style:{fontFamily:`var(--sxl-font-family)`,fontSize:12,opacity:.7},children:e}),(0,c.jsx)(`div`,{"data-sxl-theme-surface":`grid`,...t?{"data-sxl-theme-mode":t}:{},style:{display:`flex`,flex:`1`,minHeight:`360px`,background:`var(--sxl-color-base-100)`,color:`var(--sxl-color-base-content)`,border:`1px solid var(--sxl-color-base-300)`},children:(0,c.jsx)(r,{columnCount:n,rowCount:n,style:{position:`relative`,flex:`1`},renderCells:o})})]}),d=e=>{let{mode:t=`light`,count:n=200}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:l}),(0,c.jsxs)(`div`,{"data-sxl-theme-mode":t,style:{width:`100%`,height:`100%`,display:`flex`,gap:12,padding:12,boxSizing:`border-box`,background:`var(--sxl-color-base-200)`,color:`var(--sxl-color-base-content)`},children:[(0,c.jsx)(u,{label:`app mode = ${t} (inherited)`,count:n}),(0,c.jsx)(u,{label:`forced dark (data-sxl-theme-mode="dark")`,forceMode:`dark`,count:n})]})]})},f=d.bind({}),f.args={mode:`light`,count:200},f.argTypes={mode:{control:`inline-radio`,options:[`light`,`dark`],name:`mode`}},f.storyName=`Mixed (dark grid in light app)`,p={title:`Theming`,component:r,parameters:{controls:{sort:`requiredFirst`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    mode = 'light',
    count = 200
  } = props as any;
  return <>
      <style>{THEME_CSS}</style>
      <div data-sxl-theme-mode={mode} style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      gap: 12,
      padding: 12,
      boxSizing: 'border-box',
      background: 'var(--sxl-color-base-200)',
      color: 'var(--sxl-color-base-content)'
    }}>
        <Panel label={\`app mode = \${mode} (inherited)\`} count={count} />
        <Panel label="forced dark (data-sxl-theme-mode=&quot;dark&quot;)" forceMode="dark" count={count} />
      </div>
    </>;
}`,...f.parameters?.docs?.source}}},m=[`Mixed`]}))();export{f as Mixed,m as __namedExportsOrder,p as default};