import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Studio as i,n as a}from"./esm-BFm3ASoQ2.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(n(),1),a(),s=r(),c=()=>{(0,o.useEffect)(()=>{let e=document.getElementById(`storybook-root`),t={htmlHeight:document.documentElement.style.height,bodyPosition:document.body.style.position,bodyHeight:document.body.style.height,rootPosition:e?.style.position,rootHeight:e?.style.height};return document.documentElement.style.height=`auto`,document.body.style.position=`static`,document.body.style.height=`auto`,e&&(e.style.position=`static`,e.style.height=`auto`),()=>{document.documentElement.style.height=t.htmlHeight,document.body.style.position=t.bodyPosition,document.body.style.height=t.bodyHeight,e&&(e.style.position=t.rootPosition??``,e.style.height=t.rootHeight??``)}},[])},l=()=>{let[e,t]=(0,o.useState)(0),[n,r]=(0,o.useState)(`none`),i=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=window.scrollY,n=()=>{i.current=performance.now()},a=()=>{document.activeElement===document.body&&n()},o=()=>{let n=window.scrollY;if(!(performance.now()-i.current<250)&&Math.abs(n-e)>50){let t=document.activeElement,i=t?`${t.tagName.toLowerCase()}${t.className?`.`+String(t.className).split(` `).join(`.`):``}`:`none`,a=`${Math.round(e)} → ${Math.round(n)} (focus: ${i})`;r(a),console.warn(`[scroll-jump]`,a,t)}e=n,t(n)};window.addEventListener(`scroll`,o,{passive:!0}),window.addEventListener(`wheel`,n,{passive:!0}),window.addEventListener(`keydown`,a,{passive:!0});let s=e=>{e.target===document.documentElement&&n()};return window.addEventListener(`pointerdown`,s,{passive:!0}),()=>{window.removeEventListener(`scroll`,o),window.removeEventListener(`wheel`,n),window.removeEventListener(`keydown`,a),window.removeEventListener(`pointerdown`,s)}},[]),(0,s.jsxs)(`div`,{style:{position:`fixed`,right:12,top:12,zIndex:2e3,padding:`6px 10px`,borderRadius:6,font:`12px monospace`,background:`rgba(0,0,0,0.75)`,color:`#fff`,pointerEvents:`none`},children:[(0,s.jsxs)(`div`,{children:[`scrollY: `,Math.round(e)]}),(0,s.jsxs)(`div`,{children:[`last jump: `,n]})]})},u=({label:e,height:t})=>(0,s.jsx)(`section`,{style:{height:t,padding:24,boxSizing:`border-box`,background:`repeating-linear-gradient(0deg, #f4f6f8, #f4f6f8 40px, #e9edf1 40px, #e9edf1 80px)`,font:`14px sans-serif`,color:`#445`},children:e}),d=e=>{let{studioHeight:t,spaceAbove:n,spaceBelow:r,...a}=e;return c(),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(l,{}),(0,s.jsx)(u,{label:`Page content above the Studio. Scroll down.`,height:n}),(0,s.jsx)(`div`,{style:{display:`flex`,height:t,margin:`0 24px`,border:`solid 1px #99a`},children:(0,s.jsx)(i,{...a,title:`Studio in a scrollable page`,sx:{flex:1}})}),(0,s.jsx)(u,{label:`Page content below the Studio.`,height:r})]})},f=d.bind({}),f.args={studioHeight:600,spaceAbove:1200,spaceBelow:1200},f.storyName=`In Scrollable Page`,p={title:`Studio/In Scrollable Page`,component:f},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    studioHeight,
    spaceAbove,
    spaceBelow,
    ...rest
  } = props as any;
  usePageScrollHost();
  return <div>
      <ScrollMonitor />
      <Filler label="Page content above the Studio. Scroll down." height={spaceAbove} />
      <div style={{
      display: 'flex',
      height: studioHeight,
      margin: '0 24px',
      border: 'solid 1px #99a'
    }}>
        <Studio {...rest} title="Studio in a scrollable page" sx={{
        flex: 1
      }} />
      </div>
      <Filler label="Page content below the Studio." height={spaceBelow} />
    </div>;
}`,...f.parameters?.docs?.source}}},m=[`StudioInScrollablePage`]}))();export{f as StudioInScrollablePage,m as __namedExportsOrder,p as default};