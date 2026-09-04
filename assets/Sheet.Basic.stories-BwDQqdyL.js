import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Bt as i}from"./Drf58mcoTOQoptfv-BT1mBXV9.js";import{h as a}from"./esm-Di6fsGRs.js";import{Tt as o,it as s}from"./esm-BaVuX9rf.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),a(),s(),l=r(),u=e=>{let{maxColumns:t,maxRows:n,showRowHeaders:r,showColumnHeaders:a,...s}=e,[u]=(0,c.useState)(()=>new i({json:{entireSize:{width:t,height:n}}}));return(0,l.jsx)(o,{style:{minHeight:`100%`,border:`blue solid 2px`,borderRadius:`8px`,flex:`1`},sheet:u,showRowHeaders:r,showColumnHeaders:a,...s})},d=u.bind({}),d.args={maxRows:100,maxColumns:50,showRowHeaders:!0,showColumnHeaders:!0},d.storyName=`Base`,f={title:`Sheet/Base`,component:o},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
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