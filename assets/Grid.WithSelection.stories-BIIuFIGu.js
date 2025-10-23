import{j as o}from"./index-BiBgeh3u.js";import{r as t}from"./iframe-mGP4b_Fh.js";import{b as y,m as g,r as C}from"./index-CXJVXQGg.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";const b=a=>{const{rowCount:r,...l}=a,s=t.useRef(null),[c,i]=t.useState(()=>({cell:{colIndex:2,rowIndex:2},ranges:[{colStart:2,rowStart:2,colEnd:3,rowEnd:20}]})),d=t.useCallback(e=>{const{style:m,key:S,...w}=e;return o.jsx(y,{...w,style:{...m,background:`rgba(232, 246, 255, ${e.range.rowStart/r})`},value:`${e.range.rowStart}:${e.range.colStart}`},S)},[r]),{renderOverlay:u,...p}=g({selection:c,onSelectionChange:e=>i(e),gridRef:s});return o.jsx("div",{className:"storybook-container",children:o.jsx(C,{...l,rowCount:r,ref:s,renderCell:d,onPointerDown:e=>{p.onPointerDown(e)},renderOverlays:[u]})})},n=b.bind({});n.args={columnCount:200,rowCount:1e5};n.storyName="with Selection";const h={title:"Grid",component:n,parameters:{controls:{sort:"requiredFirst"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
  const {
    rowCount,
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const [selection, setSelection] = useState<SelectionCoords>(() => {
    return {
      cell: {
        colIndex: 2,
        rowIndex: 2
      },
      ranges: [{
        colStart: 2,
        rowStart: 2,
        colEnd: 3,
        rowEnd: 20
      }]
    };
  });
  const renderCell = useCallback((props: CellRendererProps) => {
    const {
      style: propStyle,
      key,
      ...rest
    } = props;
    return <DefaultCellRenderer key={key} {...rest} style={{
      ...propStyle,
      // We are making the background color a percent of the rowcount base on rowIndex
      background: \`rgba(232, 246, 255, \${props.range.rowStart / rowCount})\`
    }} value={\`\${props.range.rowStart}:\${props.range.colStart}\`} />;
  }, [rowCount]);
  const {
    // commands: commandsSelection,
    renderOverlay: renderSelection,
    ...selectionProps // used for callbacks
  } = useSelection({
    selection,
    onSelectionChange: (selection: SelectionCoords) => setSelection(selection),
    gridRef
  });
  return <div className="storybook-container">
      <Grid {...rest} rowCount={rowCount} ref={gridRef} renderCell={renderCell}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      selectionProps.onPointerDown(e);
    }} renderOverlays={[renderSelection]} />
    </div>;
}`,...n.parameters?.docs?.source}}};const D=["GridWithSelection"];export{n as GridWithSelection,D as __namedExportsOrder,h as default};
