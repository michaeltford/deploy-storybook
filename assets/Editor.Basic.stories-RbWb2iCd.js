import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,E as a,N as o,h as s,q as c,s as l,z as u}from"./esm-BcpaeSfa.js";var d,f,p,m,h,g,_;e((()=>{d=t(n(),1),o(),f=r(),p=(e,t)=>`${e}:${t}`,m=e=>{let{columnCount:t,rowCount:n,...r}=e,[o,m]=(0,d.useState)(()=>({[p(0,0)]:`A long value that overflows several columns to the right`,[p(3,1)]:`Edit me`})),h=(0,d.useRef)(o);h.current=o;let g=(0,d.useRef)({rowCount:n,columnCount:t});g.current={rowCount:n,columnCount:t};let _=(0,d.useMemo)(()=>new i({getBounds:()=>({rowStart:0,colStart:0,rowEnd:g.current.rowCount-1,colEnd:g.current.columnCount-1})}),[]),v=(0,d.useMemo)(()=>new c(_,e=>e.rowIndex===1&&e.colIndex===1?null:{clean:h.current[p(e.rowIndex,e.colIndex)]??``,commit:t=>{m(n=>({...n,[p(e.rowIndex,e.colIndex)]:t}))}}),[_]),y=(0,d.useCallback)(e=>{let{key:t,range:n,...r}=e,i=o[p(n.rowStart,n.colStart)]??``;return(0,f.jsx)(l,{...r,range:n,value:i},t)},[o]);return(0,f.jsx)(`div`,{className:`storybook-container`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,f.jsx)(`div`,{style:{padding:`4px 6px`},children:(0,f.jsx)(`button`,{onClick:()=>v.startEdit(v.getAnchor().getCoords(),{mode:`edit`}),children:`Edit active cell`})}),(0,f.jsxs)(a,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:y,showGridLines:!0,children:[(0,f.jsx)(s,{selection:_},`selection`),(0,f.jsx)(u,{editable:v},`editor`)]})]})})},h=m.bind({}),h.args={columnCount:200,rowCount:200},h.storyName=`Basic (always-mounted layer)`,g={title:`Editor`,component:h,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const [values, setValues] = useState<Record<string, string>>(() => ({
    [cellIdentity(0, 0)]: 'A long value that overflows several columns to the right',
    [cellIdentity(3, 1)]: 'Edit me'
  }));
  // The store is created once, so its model reads the latest values through a ref.
  const valuesRef = useRef(values);
  valuesRef.current = values;

  // Stable selection + editable, composed once. The selection owns the anchor (writes); the editable
  // reads the same anchor and, on \`startEdit\`, mints the single current \`EditSession\` via \`createEdit\`
  // (null ⇒ not editable). The real app's \`IEditable\` is an \`ISheet\`-backed editable.
  // The selection is stable; navigation reads the latest grid dims through a ref (its bounds port).
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
  const editable = useMemo(() => new DefaultEditable<string>(selection, (coords: CellCoords) => {
    if (coords.rowIndex === 1 && coords.colIndex === 1) return null; // B2 read-only
    return {
      clean: valuesRef.current[cellIdentity(coords.rowIndex, coords.colIndex)] ?? '',
      commit: (dirty: string) => {
        setValues(prev => ({
          ...prev,
          [cellIdentity(coords.rowIndex, coords.colIndex)]: dirty
        }));
      }
    };
  }), [selection]);
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range,
      ...cellRest
    } = cellProps;
    const value = values[cellIdentity(range.rowStart, range.colStart)] ?? '';
    return <DefaultCellRenderer key={key} {...cellRest} range={range} value={value} />;
  }, [values]);
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
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          <SelectionLayer key="selection" selection={selection} />
          <EditorLayer key="editor" editable={editable} />
        </Grid>
      </div>
    </div>;
}`,...h.parameters?.docs?.source}}},_=[`EditorBasic`]}))();export{h as EditorBasic,_ as __namedExportsOrder,g as default};