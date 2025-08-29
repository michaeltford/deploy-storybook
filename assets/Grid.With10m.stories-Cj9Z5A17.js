import{j as o}from"./index-DjHwRWfA.js";import{r as d}from"./iframe-BjEmcQsQ.js";import{E as i,c as p}from"./index-Qdaqq9Ty.js";import"./index-DrTFDFai.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BAF_6BbL.js";import"./client-BRZzXANe.js";const m=n=>{const{rowCount:t,...s}=n,a=d.useCallback(e=>{const{key:l,style:c,...u}=e;return o.jsx(i,{...u,style:{...c,background:`rgba(232, 246, 255, ${e.range.rowStart/t})`},value:`${e.range.rowStart}:${e.range.colStart}`},l)},[t]);return o.jsx("div",{className:"storybook-container",children:o.jsx(p,{style:{border:"1px solid grey"},...s,rowCount:t,getColumnWidth:e=>120,cellRenderer:a})})},r=m.bind({});r.args={columnCount:1e6,rowCount:1e6};r.storyName="with 1B Cells";const S={title:"Grid",component:r,parameters:{controls:{sort:"requiredFirst"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  const {
    rowCount,
    ...rest
  } = props as any;
  const cellRenderer = useCallback((props: CellRendererProps) => {
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
    }} cellRenderer={cellRenderer} />
    </div>;
}`,...r.parameters?.docs?.source}}};const h=["GridWith10M"];export{r as GridWith10M,h as __namedExportsOrder,S as default};
