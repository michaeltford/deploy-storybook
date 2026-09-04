import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,j as o,l as s,r as c,s as l}from"./esm-BcpaeSfa.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{u=t(n(),1),a(),d=r(),f=(e,t)=>`${e}:${t}`,p=`rgb(33, 115, 70)`,m=`rgb(26, 115, 232)`,h=({handleProps:e,size:t,background:n})=>{let r=t/2-2.5,i=t/3;return(0,d.jsx)(`div`,{...e,style:{...e.style,width:t,height:t},children:(0,d.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 ${t} ${t}`,style:{display:`block`,overflow:`visible`},children:(0,d.jsx)(`path`,{shapeRendering:`crispEdges`,d:`M ${r-i} ${r} L ${r} ${r} L ${r} ${r-i}`,stroke:n,strokeWidth:2,strokeLinejoin:`miter`,fill:`none`})})})},g=e=>{let{columnCount:t,rowCount:n,...r}=e,[a,g]=(0,u.useState)({rowStart:3,colStart:2,rowEnd:7,colEnd:5}),_=(0,u.useMemo)(()=>{let e={};for(let t=3;t<=12;t++)for(let n=2;n<=8;n++)e[f(t,n)]=`${t},${n}`;return e},[]),v=(0,u.useCallback)(e=>{let{key:t,range:n,...r}=e,i=_[f(n.rowStart,n.colStart)]??``;return(0,d.jsx)(l,{...r,range:n,value:i},t)},[_]);return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,d.jsx)(`strong`,{children:`table`}),` (`,a.rowStart,`,`,a.colStart,`)…(`,a.rowEnd,`,`,a.colEnd,`)`]}),(0,d.jsx)(i,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:v,showGridLines:!0,children:(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{range:a,stroke:p,alignWidth:1},`outline`),(0,d.jsx)(c,{range:a,anchor:`br`,size:12,background:m,renderHandle:h,onDragMove:(e,t)=>g(e=>({...e,rowEnd:Math.max(e.rowStart,t.rowIndex),colEnd:Math.max(e.colStart,t.colIndex)}))},`tick`)]},`table`)})]})})},_=g.bind({}),_.args={columnCount:60,rowCount:60},_.storyName=`DragHandle (custom handle))`,v={title:`Layers`,component:_,parameters:{controls:{sort:`requiredFirst`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const [table, setTable] = useState<RangeCoords>({
    rowStart: 3,
    colStart: 2,
    rowEnd: 7,
    colEnd: 5
  });
  const values = useMemo<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (let r = 3; r <= 12; r++) {
      for (let c = 2; c <= 8; c++) seed[cellIdentity(r, c)] = \`\${r},\${c}\`;
    }
    return seed;
  }, []);
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
        fontFamily: 'monospace',
        fontSize: 12,
        padding: '4px 6px'
      }}>
          <strong>table</strong> ({table.rowStart},{table.colStart})…({table.rowEnd},{table.colEnd})
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          {/* One Layer for the table feature: the outline + its resize tick travel together. */}
          <Layer key="table">
            <RangeRect key="outline" range={table} stroke={GREEN} alignWidth={1} />
            <DragHandle key="tick" range={table} anchor="br" size={12} background={BLUE} renderHandle={tableTick} onDragMove={(_from, to) => setTable(prev => ({
            ...prev,
            rowEnd: Math.max(prev.rowStart, to.rowIndex),
            colEnd: Math.max(prev.colStart, to.colIndex)
          }))} />
          </Layer>
        </Grid>
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}},y=[`DragHandleTick`]}))();export{_ as DragHandleTick,y as __namedExportsOrder,v as default};