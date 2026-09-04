import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,N as a,h as o,s}from"./esm-BcpaeSfa.js";import{n as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h;e((()=>{u=t(n(),1),a(),l(),d=r(),f=e=>{let{freezeTop:t,freezeLeft:n,columnCount:r=200,rowCount:a=200,...l}=e,f=(0,u.useRef)(null),p=(0,u.useMemo)(()=>new i({getBounds:()=>({rowStart:0,colStart:0,rowEnd:a-1,colEnd:r-1})}),[a,r]),m=(0,u.useCallback)(e=>{let{key:r,style:i,...a}=e,o=e.range;return(0,d.jsx)(s,{...a,style:{...i,color:`${o.rowStart<t||o.colStart<n?`blue`:void 0}`},value:`${e.range.rowStart}:${e.range.colStart}`},r)},[t,n]),h={propsPath:{stroke:`blue`}};return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsx)(c,{...l,ref:f,columnCount:r,rowCount:a,renderCells:m,freezeTop:t,freezeLeft:n,propsFreezeLeft:h,propsFreezeTop:h,children:(0,d.jsx)(o,{selection:p},`selection`)})})},p=f.bind({}),p.args={columnCount:200,rowCount:200,freezeTop:5,freezeLeft:4},p.storyName=`Frozen Cells`,m={title:`Grid`,component:p,parameters:{controls:{sort:`requiredFirst`}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`props => {
  const {
    freezeTop,
    freezeLeft,
    columnCount = 200,
    rowCount = 200,
    ...rest
  } = props as any;
  const gridRef = useRef<IGrid>(null);
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    })
  }), [rowCount, columnCount]);
  const renderCells = useCallback((props: CellRendererProps) => {
    const {
      key,
      style: propStyle,
      ...rest
    } = props;
    const range = props.range;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      color: \`\${range.rowStart < freezeTop || range.colStart < freezeLeft ? 'blue' : undefined}\`
    }} value={\`\${props.range.rowStart}:\${props.range.colStart}\`} />;
  }, [freezeTop, freezeLeft]);
  const freezeDividerProps = {
    propsPath: {
      stroke: 'blue'
    }
  };
  return <div className="storybook-container">
      <Grid {...rest} ref={gridRef} columnCount={columnCount} rowCount={rowCount} renderCells={renderCells} freezeTop={freezeTop} freezeLeft={freezeLeft} propsFreezeLeft={freezeDividerProps} propsFreezeTop={freezeDividerProps}>
        <SelectionLayer key="selection" selection={selection} />
      </Grid>
    </div>;
}`,...p.parameters?.docs?.source}}},h=[`GridWithFrozenCells`]}))();export{p as GridWithFrozenCells,h as __namedExportsOrder,m as default};