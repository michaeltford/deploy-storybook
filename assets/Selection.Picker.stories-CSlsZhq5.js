import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,x as a}from"./esm-BwAES4tr.js";import{A as o,E as s,N as c,o as l,s as u}from"./esm-BcpaeSfa.js";var d,f,p,m,h,g,_;e((()=>{d=t(n(),1),i(),c(),f=r(),p=({selection:e})=>{let t=a(e,e=>e.getSelection()),n=t.ranges?.[t.rangeIndex??-1];return(0,f.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,f.jsx)(`strong`,{children:`active`}),` `,n?`(${n.rowStart},${n.colStart})…(${n.rowEnd},${n.colEnd})`:`—`]})},m=e=>{let{columnCount:t,rowCount:n,pickerCount:r,pickerIndex:i,...a}=e,c=(0,d.useMemo)(()=>{let e=Math.max(1,r),t=Array.from({length:e},(e,t)=>({rowStart:3+t,colStart:2+t,rowEnd:7+t,colEnd:5+t})),n=Math.min(Math.max(0,i),e-1);return new o({initial:{cell:{rowIndex:t[n].rowStart,colIndex:t[n].colStart},ranges:t,rangeIndex:n}})},[r,i]),m=(0,d.useCallback)(e=>{let{key:t,range:n,...r}=e;return(0,f.jsx)(u,{...r,range:n,value:``},t)},[]);return(0,f.jsx)(`div`,{className:`storybook-container`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,f.jsx)(p,{selection:c}),(0,f.jsx)(s,{...a,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:m,showGridLines:!0,children:(0,f.jsx)(l,{selection:c,enabledMove:!0,animated:!0})})]})})},h=m.bind({}),h.args={columnCount:200,rowCount:200,pickerCount:3,pickerIndex:0},h.storyName=`Picker`,g={title:`Selection`,component:h,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    pickerCount,
    pickerIndex,
    ...rest
  } = props;

  // The selection model the picker binds to — re-seeded when the args change.
  const selection = useMemo(() => {
    const count = Math.max(1, pickerCount);
    const ranges: RangeCoords[] = Array.from({
      length: count
    }, (_, i) => ({
      rowStart: 3 + i,
      colStart: 2 + i,
      rowEnd: 7 + i,
      colEnd: 5 + i
    }));
    const active = Math.min(Math.max(0, pickerIndex), count - 1);
    const initial: SelectionCoords = {
      cell: {
        rowIndex: ranges[active].rowStart,
        colIndex: ranges[active].colStart
      },
      ranges,
      rangeIndex: active
    };
    return new DefaultSelection({
      initial
    });
  }, [pickerCount, pickerIndex]);
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range,
      ...cellRest
    } = cellProps;
    return <DefaultCellRenderer key={key} {...cellRest} range={range} value="" />;
  }, []);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <CoordsReadout selection={selection} />
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          <RangesPickerLayer selection={selection} enabledMove animated />
        </Grid>
      </div>
    </div>;
}`,...h.parameters?.docs?.source}}},_=[`Range`]}))();export{h as Range,_ as __namedExportsOrder,g as default};