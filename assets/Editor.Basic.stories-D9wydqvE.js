import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{G as i,Q as a,U as o,V as s,h as c,i as l,j as u,u as d}from"./esm-1pmCZayM.js";var f,p,m,h,g,_,v;e((()=>{f=t(n(),1),s(),p=r(),m=(e,t)=>`${e}:${t}`,h=e=>{let{columnCount:t,rowCount:n,...r}=e,[s,h]=(0,f.useState)(()=>({[m(0,0)]:`A long value that overflows several columns to the right`,[m(3,1)]:`Edit me`})),g=(0,f.useRef)(s);g.current=s;let _=(0,f.useRef)({rowCount:n,columnCount:t});_.current={rowCount:n,columnCount:t};let v=(0,f.useMemo)(()=>new l({getBounds:()=>({rowStart:0,colStart:0,rowEnd:_.current.rowCount-1,colEnd:_.current.columnCount-1})}),[]),y=(0,f.useMemo)(()=>new u(v,e=>e.rowIndex===1&&e.colIndex===1?null:{clean:g.current[m(e.rowIndex,e.colIndex)]??``,commit:t=>{h(n=>({...n,[m(e.rowIndex,e.colIndex)]:t}))}}),[v]),b=(0,f.useCallback)(e=>{let{key:t,range:n,...r}=e,i=s[m(n.rowStart,n.colStart)]??``;return(0,p.jsx)(a,{...r,range:n,value:i},t)},[s]);return(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,p.jsx)(`div`,{style:{padding:`4px 6px`},children:(0,p.jsx)(`button`,{onClick:()=>y.startEdit(y.getAnchor().getCoords(),{mode:`edit`}),children:`Edit active cell`})}),(0,p.jsxs)(c,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:b,showGridLines:!0,children:[(0,p.jsx)(o,{editable:y},`editor-start`),(0,p.jsx)(d,{selection:v},`selection`),(0,p.jsx)(i,{editable:y},`editor`)]})]})})},g=h.bind({}),g.args={columnCount:200,rowCount:200},g.storyName=`Basic (always-mounted layer)`,_={title:`Editor`,component:g,parameters:{controls:{sort:`requiredFirst`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`props => {
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
          <EditorStartLayer key="editor-start" editable={editable} />
          <SelectionLayer key="selection" selection={selection} />
          <EditorLayer key="editor" editable={editable} />
        </Grid>
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},v=[`EditorBasic`]}))();export{g as EditorBasic,v as __namedExportsOrder,_ as default};