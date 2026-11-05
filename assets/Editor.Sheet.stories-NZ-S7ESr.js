import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,h as a}from"./esm-BGYLa-oz.js";import{D as o,H as s,O as c,R as l,_t as u,a as d,ht as f,s as p}from"./esm-C8XjPpc3.js";import{Dt as m,b as h,i as g,k as _}from"./esm-DWpwXhBJ.js";var v,y,b,x,S,C;function w(){return(w=t((()=>{v=e(n(),1),a(),s(),m(),y=r(),b=e=>{let{columnCount:t,rowCount:n,...r}=e,a=(0,v.useMemo)(()=>{let e=new i().getSelectedWorksheet();return e.getRange(`A1`).setValue(`A long value that overflows several columns to the right`),e.getRange(`B4`).setValue(`Edit me`),e.getRange(`B6`).setValue(1234.5),e.getRange(`C3`).setValue(`=1+2`),e.getRange(`D3`).setValue(`=C3*10`),e},[]),s=(0,v.useRef)(null),[,m]=(0,v.useReducer)(e=>e+1,0);(0,v.useEffect)(()=>a.getEntireRange().addListener(()=>{m(),s.current?.invalidate()}),[a]);let b=(0,v.useRef)({rowCount:n,columnCount:t});b.current={rowCount:n,columnCount:t};let x=(0,v.useMemo)(()=>new o({getBounds:()=>({rowStart:0,colStart:0,rowEnd:b.current.rowCount-1,colEnd:b.current.columnCount-1})}),[]),S=(0,v.useMemo)(()=>new p(x,g(a)),[x,a]),C=(0,v.useMemo)(()=>h({selection:x}),[x]),w=(0,v.useCallback)(e=>{let{key:t,range:n,...r}=e,i=a.getRange({rowIndex:n.rowStart,colIndex:n.colStart}).getCell().getText({hideStringPrefix:!0});return(0,y.jsx)(u,{...r,range:n,value:i},t)},[a]);return(0,y.jsx)(`div`,{className:`storybook-container`,children:(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,y.jsx)(`div`,{style:{padding:`4px 6px`},children:(0,y.jsx)(`button`,{onClick:()=>S.startEdit(S.getAnchor().getCoords(),{mode:`edit`}),children:`Edit active cell`})}),(0,y.jsxs)(l,{ref:s,...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:w,showGridLines:!0,children:[(0,y.jsx)(c,{editable:S},`editor-start`),(0,y.jsx)(f,{selection:x},`selection`),(0,y.jsx)(d,{editable:S,background:e=>_(a.getRange(e).getCell(),a,!1,`#ffffff`),renderEditor:e=>(0,y.jsx)(C,{...e})},`editor`)]})]})})},x=b.bind({}),x.args={columnCount:200,rowCount:200},x.storyName=`Sheet (IWorksheet-backed)`,S={title:`Editor`,component:x,parameters:{controls:{sort:`requiredFirst`}}},C=[`EditorSheet`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;

  // A real, headless sheet — seeded once. (No Workbook chrome; just the model + a Grid.)
  const sheet = useMemo<IWorksheet>(() => {
    const workbook = new Workbook();
    const s = workbook.getSelectedWorksheet();
    s.getRange('A1').setValue('A long value that overflows several columns to the right');
    s.getRange('B4').setValue('Edit me');
    s.getRange('B6').setValue(1234.5);
    s.getRange('C3').setValue('=1+2');
    s.getRange('D3').setValue('=C3*10');
    return s;
  }, []);

  // Repaint on any cell change (e.g. after a commit): bump for a re-render AND invalidate the grid's
  // cell cache. The tiled CellLayer caches rendered cells by content token / pane identity, so an
  // external model write must bust it (the real WorksheetElement does this via its self-subscribing layer).
  const gridRef = useRef<IGrid>(null);
  const [, bump] = useReducer((x: number) => x + 1, 0);
  useEffect(() => sheet.getEntireRange().addListener(() => {
    bump();
    gridRef.current?.invalidate();
  }), [sheet]);

  // Stable selection + editable, composed once. The editable edits THROUGH the sheet; the selection is
  // a dumb store whose navigation reads the latest grid dims through a ref (its bounds port).
  const dimsRef = useRef({
    rowCount,
    columnCount
  });
  dimsRef.current = {
    rowCount,
    columnCount
  };
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: dimsRef.current.rowCount - 1,
      colEnd: dimsRef.current.columnCount - 1
    })
  }), []);
  const editable = useMemo(() => new DefaultEditable(selection, createSheetCreateEdit(sheet)), [selection, sheet]);

  // The cell-aware input, bound to the sheet (for the normal-style fill fallback). Rendered as a
  // component element so its hooks stay isolated.
  // Drive navigation through the SAME selection the grid renders (the DefaultSelection) — so a
  // committed Enter/Tab moves the visible selection. (WorksheetElement passes \`sheet.getSelection()\`.)
  const SheetCellEditor = useMemo(() => createSheetCellInput({
    selection
  }), [selection]);
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range,
      ...cellRest
    } = cellProps;
    const text = sheet.getRange({
      rowIndex: range.rowStart,
      colIndex: range.colStart
    }).getCell().getText({
      hideStringPrefix: true
    });
    return <DefaultCellRenderer key={key} {...cellRest} range={range} value={text} />;
  }, [sheet]);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        padding: '4px 6px'
      }}>
          <button onClick={() => editable.startEdit(editable.getAnchor().getCoords(), {
          mode: 'edit'
        })}>
            Edit active cell
          </button>
        </div>
        <Grid ref={gridRef} {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          <EditorStartLayer key="editor-start" editable={editable} />
          <SelectionLayer key="selection" selection={selection} />
          <EditorLayer key="editor" editable={editable}
        // The box paints the cell's grid background (cell→normal→body); the input paints only the
        // cell's own fill. Here the sheet has no fills, so resolve to white.
        background={coords => resolveCellBackground(sheet.getRange(coords).getCell(), sheet, false, '#ffffff')} renderEditor={inputProps => <SheetCellEditor {...inputProps} />} />
        </Grid>
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}}})))()}w();export{x as EditorSheet,C as __namedExportsOrder,S as default};