import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{h as i,s as a}from"./esm-Di6fsGRs.js";import{A as o,E as s,N as c,h as l,q as u,s as d,z as f}from"./esm-BcpaeSfa.js";import{A as p,N as m,it as h,ut as g}from"./esm-BaVuX9rf.js";var _,v,y,b,x,S;e((()=>{_=t(n(),1),i(),c(),h(),v=r(),y=e=>{let{columnCount:t,rowCount:n,...r}=e,i=(0,_.useMemo)(()=>{let e=new a().getSelectedSheet();return e.getRange(`A1`).setValue(`A long value that overflows several columns to the right`),e.getRange(`B4`).setValue(`Edit me`),e.getRange(`B6`).setValue(1234.5),e.getRange(`C3`).setValue(`=1+2`),e.getRange(`D3`).setValue(`=C3*10`),e},[]),c=(0,_.useRef)(null),[,h]=(0,_.useReducer)(e=>e+1,0);(0,_.useEffect)(()=>i.getEntireRange().addListener(()=>{h(),c.current?.invalidate()}),[i]);let y=(0,_.useRef)({rowCount:n,columnCount:t});y.current={rowCount:n,columnCount:t};let b=(0,_.useMemo)(()=>new o({getBounds:()=>({rowStart:0,colStart:0,rowEnd:y.current.rowCount-1,colEnd:y.current.columnCount-1})}),[]),x=(0,_.useMemo)(()=>new u(b,p(i)),[b,i]),S=(0,_.useMemo)(()=>g({selection:b}),[b]),C=(0,_.useCallback)(e=>{let{key:t,range:n,...r}=e,a=i.getRange({rowIndex:n.rowStart,colIndex:n.colStart}).getCell().getText({hideStringPrefix:!0});return(0,v.jsx)(d,{...r,range:n,value:a},t)},[i]);return(0,v.jsx)(`div`,{className:`storybook-container`,children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,v.jsx)(`div`,{style:{padding:`4px 6px`},children:(0,v.jsx)(`button`,{onClick:()=>x.startEdit(x.getAnchor().getCoords(),{mode:`edit`}),children:`Edit active cell`})}),(0,v.jsxs)(s,{ref:c,...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:C,showGridLines:!0,children:[(0,v.jsx)(l,{selection:b},`selection`),(0,v.jsx)(f,{editable:x,background:e=>m(i.getRange(e).getCell(),i,!1,`#ffffff`),renderEditor:e=>(0,v.jsx)(S,{...e})},`editor`)]})]})})},b=y.bind({}),b.args={columnCount:200,rowCount:200},b.storyName=`Sheet (ISheet-backed)`,x={title:`Editor`,component:b,parameters:{controls:{sort:`requiredFirst`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`props => {
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
          <SelectionLayer key="selection" selection={selection} />
          <EditorLayer key="editor" editable={editable}
        // The box paints the cell's grid background (cell→normal→body); the input paints only the
        // cell's own fill. Here the sheet has no fills, so resolve to white.
        background={coords => resolveCellBackground(sheet.getRange(coords).getCell(), sheet, false, '#ffffff')} renderEditor={inputProps => <SheetCellEditor {...inputProps} />} />
        </Grid>
      </div>
    </div>;
}`,...b.parameters?.docs?.source}}},S=[`EditorSheet`]}))();export{b as EditorSheet,S as __namedExportsOrder,x as default};