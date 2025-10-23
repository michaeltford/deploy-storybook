import{j as o}from"./index-BiBgeh3u.js";import{r as d}from"./iframe-mGP4b_Fh.js";import{b as i,r as p}from"./index-CXJVXQGg.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";const m=n=>{const{rowCount:t,...s}=n,a=d.useCallback(e=>{const{key:l,style:u,...c}=e;return o.jsx(i,{...c,style:{...u,background:`rgba(232, 246, 255, ${e.range.rowStart/t})`},value:`${e.range.rowStart}:${e.range.colStart}`},l)},[t]);return o.jsx("div",{className:"storybook-container",children:o.jsx(p,{style:{border:"1px solid grey"},...s,rowCount:t,getColumnWidth:e=>120,renderCell:a})})},r=m.bind({});r.args={columnCount:1e6,rowCount:1e6};r.storyName="with 1B Cells";const S={title:"Grid",component:r,parameters:{controls:{sort:"requiredFirst"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  const {
    rowCount,
    ...rest
  } = props as any;
  const renderCell = useCallback((props: CellRendererProps) => {
    const {
      key,
      style: propStyle,
      ...rest
    } = props;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      // We are making the background color a percent of the rowcount base on rowIndex
      background: \`rgba(232, 246, 255, \${props.range.rowStart / rowCount})\`
    }} value={\`\${props.range.rowStart}:\${props.range.colStart}\`} />;
  }, [rowCount]);
  return <div className="storybook-container">
      <Grid style={{
      border: '1px solid grey'
    }} {...rest} rowCount={rowCount} // because we destructured the rowCount for rendering
    getColumnWidth={(index: number): number => {
      return 120; // to be more like google sheets
    }} renderCell={renderCell} />
    </div>;
}`,...r.parameters?.docs?.source}}};const h=["GridWith10M"];export{r as GridWith10M,h as __namedExportsOrder,S as default};
