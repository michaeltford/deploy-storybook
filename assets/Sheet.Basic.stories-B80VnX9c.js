import{j as l}from"./index-DWKpDUR-.js";import{r as p}from"./iframe-CpXbX42E.js";import{P as s,b as u}from"./index-C4mmmnnj.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-C3bn2QFg.js";const d=o=>{const{maxColumns:r,maxRows:t,showRowHeaders:a,showColumnHeaders:m,...n}=o,[i]=p.useState(()=>new u({maxColumns:r,maxRows:t}));return l.jsx(s,{style:{minHeight:"100%",border:"blue solid 2px",borderRadius:"8px",flex:"1"},sheet:i,showRowHeaders:a,showColumnHeaders:m,...n})},e=d.bind({});e.args={maxRows:100,maxColumns:50,showRowHeaders:!0,showColumnHeaders:!0};e.storyName="Base";const S={title:"Sheet",component:s};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    showRowHeaders,
    showColumnHeaders,
    ...rest
  } = props as any;
  const [sheet] = useState(() => {
    return new Sheet({
      maxColumns,
      maxRows
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
}`,...e.parameters?.docs?.source}}};const f=["BaseSheet"];export{e as BaseSheet,f as __namedExportsOrder,S as default};
