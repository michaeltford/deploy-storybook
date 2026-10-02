import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{m as i,v as a}from"./esm-eaDQoQha.js";import{G as o,Q as s,U as c,V as l,h as u,i as d,j as f,u as p}from"./esm-1pmCZayM.js";import{J as m,Tt as h,dt as g,t as _}from"./esm-MDtJPe6l.js";var v,y,b,x,S,C;e((()=>{v=t(n(),1),i(),l(),g(),y=r(),b=e=>{let{columnCount:t,rowCount:n,...r}=e,i=(0,v.useMemo)(()=>{let e=new a().getSelectedSheet();return e.getRange(`A1`).setValue(`A long value that overflows several columns to the right`),e.getRange(`B4`).setValue(`Edit me`),e.getRange(`B6`).setValue(1234.5),e.getRange(`C3`).setValue(`=1+2`),e.getRange(`D3`).setValue(`=C3*10`),e},[]),l=(0,v.useRef)(null),[,g]=(0,v.useReducer)(e=>e+1,0);(0,v.useEffect)(()=>i.getEntireRange().addListener(()=>{g(),l.current?.invalidate()}),[i]);let b=(0,v.useRef)({rowCount:n,columnCount:t});b.current={rowCount:n,columnCount:t};let x=(0,v.useMemo)(()=>new d({getBounds:()=>({rowStart:0,colStart:0,rowEnd:b.current.rowCount-1,colEnd:b.current.columnCount-1})}),[]),S=(0,v.useMemo)(()=>new f(x,_(i)),[x,i]),C=(0,v.useMemo)(()=>h({selection:x}),[x]),w=(0,v.useCallback)(e=>{let{key:t,range:n,...r}=e,a=i.getRange({rowIndex:n.rowStart,colIndex:n.colStart}).getCell().getText({hideStringPrefix:!0});return(0,y.jsx)(s,{...r,range:n,value:a},t)},[i]);return(0,y.jsx)(`div`,{className:`storybook-container`,children:(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,y.jsx)(`div`,{style:{padding:`4px 6px`},children:(0,y.jsx)(`button`,{onClick:()=>S.startEdit(S.getAnchor().getCoords(),{mode:`edit`}),children:`Edit active cell`})}),(0,y.jsxs)(u,{ref:l,...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:w,showGridLines:!0,children:[(0,y.jsx)(c,{editable:S},`editor-start`),(0,y.jsx)(p,{selection:x},`selection`),(0,y.jsx)(o,{editable:S,background:e=>m(i.getRange(e).getCell(),i,!1,`#ffffff`),renderEditor:e=>(0,y.jsx)(C,{...e})},`editor`)]})]})})},x=b.bind({}),x.args={columnCount:200,rowCount:200},x.storyName=`Sheet (ISheet-backed)`,S={title:`Editor`,component:x,parameters:{controls:{sort:`requiredFirst`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;

  // A real, headless sheet — seeded once. (No Workbook chrome; just the model + a Grid.)
  const sheet = useMemo<ISheet>(() => {
    const workbook = new Workbook();
    const s = workbook.getSelectedSheet();
    s.getRange('A1').setValue('A long value that overflows several columns to the right');
    s.getRange('B4').setValue('Edit me');
    s.getRange('B6').setValue(1234.5);
    s.getRange('C3').setValue('=1+2');
    s.getRange('D3').setValue('=C3*10');
    return s;
  }, []);

  // Repaint on any cell change (e.g. after a commit): bump for a re-render AND invalidate the grid's
  // cell cache. The tiled CellLayer caches rendered cells by content token / pane identity, so an
  // external model write must bust it (the real SheetElement does this via its self-subscribing layer).
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
  // committed Enter/Tab moves the visible selection. (SheetElement passes \`sheet.getSelection()\`.)
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
}`,...x.parameters?.docs?.source}}},C=[`EditorSheet`]}))();export{x as EditorSheet,C as __namedExportsOrder,S as default};