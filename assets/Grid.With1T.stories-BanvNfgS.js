import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{N as i,s as a}from"./esm-BcpaeSfa.js";import{n as o,t as s}from"./components-DMcoRMO1.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),i(),s(),l=r(),u=e=>{let{rowCount:t,columnCount:n,...r}=e,i=(0,c.useCallback)(e=>{let{key:n,style:r,...i}=e,o=e.range;return(0,l.jsx)(a,{...i,style:{...r,background:`rgba(232, 246, 255, ${o.rowStart/t})`},value:`${o.rowStart}:${o.colStart}`},n)},[t,n]);return(0,l.jsx)(`div`,{className:`storybook-container`,children:(0,l.jsx)(o,{style:{border:`1px solid grey`},...r,columnCount:n,rowCount:t,getColumnWidth:e=>120,renderCells:i})})},d=u.bind({}),d.args={columnCount:1e6,rowCount:1e6},d.storyName=`(1 Trillion) Cells`,f={title:`Grid`,component:d,parameters:{controls:{sort:`requiredFirst`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
  const {
    rowCount,
    columnCount,
    ...rest
  } = props as any;
  const renderCells = useCallback((props: CellRendererProps) => {
    const {
      key,
      style: propStyle,
      ...rest
    } = props;
    const range: RangeCoords = props.range;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      // We are making the background color a percent of the rowcount base on rowIndex
      background: \`rgba(232, 246, 255, \${range.rowStart / rowCount})\`
    }} value={\`\${range.rowStart}:\${range.colStart}\`} />;
  }, [rowCount, columnCount]);
  return <div className="storybook-container">
      <Grid style={{
      border: '1px solid grey'
    }} {...rest} columnCount={columnCount} rowCount={rowCount} // because we destructured the rowCount for rendering
    getColumnWidth={(index: number): number => {
      return 120; // like google sheets
    }} renderCells={renderCells} />
    </div>;
}`,...d.parameters?.docs?.source}}},p=[`GridWithLots`]}))();export{d as GridWithLots,p as __namedExportsOrder,f as default};