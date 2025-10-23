import{j as t}from"./index-BiBgeh3u.js";import{r as p}from"./iframe-mGP4b_Fh.js";import{m as S,b as g,r as v}from"./index-CXJVXQGg.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";const P=c=>{const{freezeTop:n,freezeLeft:o,...i}=c,s=p.useRef(null),{selection:b,renderOverlay:d,...f}=S({gridRef:s}),m=p.useCallback(r=>{const{key:u,style:y,...z}=r,a=r.range;return t.jsx(g,{...z,style:{...y,color:`${a.rowStart<n||a.colStart<o?"blue":void 0}`},value:`${r.range.rowStart}:${r.range.colStart}`},u)},[n,o]),l={propsPath:{stroke:"blue"}};return t.jsx("div",{className:"storybook-container",children:t.jsx(v,{...i,ref:s,renderCell:m,freezeTop:n,freezeLeft:o,propsFreezeLeft:l,propsFreezeTop:l,onPointerDown:r=>{f.onPointerDown(r)},renderOverlays:[d]})})},e=P.bind({});e.args={columnCount:200,rowCount:200,freezeTop:5,freezeLeft:4};e.storyName="with Frozen Cells";const x={title:"Grid",component:e,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    freezeTop,
    freezeLeft,
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const {
    selection,
    // commands: commandsSelection,
    renderOverlay: renderSelection,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef
  });
  const renderCell = useCallback((props: CellRendererProps) => {
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
      <Grid {...rest} ref={gridRef} renderCell={renderCell} freezeTop={freezeTop} freezeLeft={freezeLeft} propsFreezeLeft={freezeDividerProps} propsFreezeTop={freezeDividerProps}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      selectionProps.onPointerDown(e);
    }} renderOverlays={[renderSelection]} />
    </div>;
}`,...e.parameters?.docs?.source}}};const F=["GridWithFrozenCells"];export{e as GridWithFrozenCells,F as __namedExportsOrder,x as default};
