import{j as r}from"./index-Bex5ZTIz.js";import{r as t}from"./iframe-Bhn-vlEr.js";import{E as w,y as g,c as C}from"./index-Bl98VB8F.js";import"./index-CQih4H26.js";import"./preload-helper-D9Z9MdNV.js";import"./index-tI__wt30.js";import"./client-BiiePqMP.js";const f=a=>{const{rowCount:o,...c}=a,s=t.useRef(null),[l,i]=t.useState(()=>({cell:{colIndex:2,rowIndex:2},ranges:[{colStart:2,rowStart:2,colEnd:3,rowEnd:20}]})),d=t.useCallback(e=>{const{style:S,key:m,...y}=e;return r.jsx(w,{...y,style:{...S,background:`rgba(232, 246, 255, ${e.range.rowStart/o})`},value:`${e.range.rowStart}:${e.range.colStart}`},m)},[o]),{overlay:u,...p}=g({selection:l,onSelectionChange:e=>i(e),gridRef:s});return r.jsx("div",{className:"storybook-container",children:r.jsx(C,{...c,rowCount:o,ref:s,cellRenderer:d,onPointerDown:e=>{p.onPointerDown(e)},overlays:[u]})})},n=f.bind({});n.args={columnCount:200,rowCount:1e5};n.storyName="with Selection";const h={title:"Grid",component:n,parameters:{controls:{sort:"requiredFirst"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
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
  const cellRenderer = useCallback((props: CellRendererProps) => {
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
    overlay: overlaySelection,
    ...selectionProps // used for callbacks
  } = useSelection({
    selection,
    onSelectionChange: (selection: SelectionCoords) => setSelection(selection),
    gridRef
  });
  return <div className="storybook-container">
      <Grid {...rest} rowCount={rowCount} ref={gridRef} cellRenderer={cellRenderer}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      selectionProps.onPointerDown(e);
    }} overlays={[overlaySelection]} />
    </div>;
}`,...n.parameters?.docs?.source}}};const D=["GridWithSelection"];export{n as GridWithSelection,D as __namedExportsOrder,h as default};
