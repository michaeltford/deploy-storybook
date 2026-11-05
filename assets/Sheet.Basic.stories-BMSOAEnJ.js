import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{Da as i}from"./gQzj95vSMXdKhpWf-CQqfUi5i.js";import{h as a}from"./esm-BGYLa-oz.js";import{Dt as o,Ht as s}from"./esm-DWpwXhBJ.js";var c,l,u,d,f,p;function m(){return(m=t((()=>{c=e(n(),1),a(),o(),l=r(),u=e=>{let{maxColumns:t,maxRows:n,showRowHeaders:r,showColumnHeaders:a,...o}=e,[u]=(0,c.useState)(()=>new i({json:{entireSize:{width:t,height:n}}}));return(0,l.jsx)(s,{style:{minHeight:`100%`,border:`blue solid 2px`,borderRadius:`8px`,flex:`1`},sheet:u,showRowHeaders:r,showColumnHeaders:a,...o})},d=u.bind({}),d.args={maxRows:100,maxColumns:50,showRowHeaders:!0,showColumnHeaders:!0},d.storyName=`Base`,f={title:`Sheet/Base`,component:s},p=[`BaseSheet`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    showRowHeaders,
    showColumnHeaders,
    ...rest
  } = props as any;
  const [sheet] = useState(() => {
    return new Worksheet({
      json: {
        entireSize: {
          width: maxColumns,
          height: maxRows
        }
      }
    });
  });
  return <WorksheetElement style={{
    // minHeight: '400px',
    minHeight: '100%',
    border: 'blue solid 2px',
    borderRadius: '8px',
    // note - the scrollbars will overflow. To fix this set the w
    flex: "1"
  }} sheet={sheet} // Required
  showRowHeaders={showRowHeaders} showColumnHeaders={showColumnHeaders} {...rest} />;
}`,...d.parameters?.docs?.source}}}})))()}m();export{d as BaseSheet,p as __namedExportsOrder,f as default};