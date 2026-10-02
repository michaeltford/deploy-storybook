import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i}from"./DWBFNL2gnqd19aG6-CISFPKd0.js";import{m as a}from"./esm-eaDQoQha.js";import{dt as o,rt as s}from"./esm-MDtJPe6l.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),a(),o(),l=r(),u=e=>{let{maxColumns:t,maxRows:n,showRowHeaders:r,showColumnHeaders:a,...o}=e,[u]=(0,c.useState)(()=>new i({json:{entireSize:{width:t,height:n}}}));return(0,l.jsx)(s,{style:{minHeight:`100%`,border:`blue solid 2px`,borderRadius:`8px`,flex:`1`},sheet:u,showRowHeaders:r,showColumnHeaders:a,...o})},d=u.bind({}),d.args={maxRows:100,maxColumns:50,showRowHeaders:!0,showColumnHeaders:!0},d.storyName=`Base`,f={title:`Sheet/Base`,component:s},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    showRowHeaders,
    showColumnHeaders,
    ...rest
  } = props as any;
  const [sheet] = useState(() => {
    return new Sheet({
      json: {
        entireSize: {
          width: maxColumns,
          height: maxRows
        }
      }
    });
  });
  return <SheetElement style={{
    // minHeight: '400px',
    minHeight: '100%',
    border: 'blue solid 2px',
    borderRadius: '8px',
    // note - the scrollbars will overflow. To fix this set the w
    flex: "1"
  }} sheet={sheet} // Required
  showRowHeaders={showRowHeaders} showColumnHeaders={showColumnHeaders} {...rest} />;
}`,...d.parameters?.docs?.source}}},p=[`BaseSheet`]}))();export{d as BaseSheet,p as __namedExportsOrder,f as default};