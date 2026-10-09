import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,nt as a}from"./esm-B64qfjsV.js";import{N as o,W as s,f as c,g as l,h as u,l as d}from"./esm-xMraobUN.js";var f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{f=e(n(),1),a(),s(),p=r(),m=(e,t)=>`${e}:${t}`,h=({selection:e})=>{let t=i(e,e=>e.getSelection());return(0,p.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,p.jsx)(`strong`,{children:`cell`}),` (`,t.cell.rowIndex,`,`,t.cell.colIndex,`)`,`  ·  `,(0,p.jsx)(`strong`,{children:`ranges`}),` `,t.ranges&&t.ranges.length?t.ranges.map(e=>`(${e.rowStart},${e.colStart})…(${e.rowEnd},${e.colEnd})`).join(`  `):`—`]})},g=e=>{let{columnCount:t,rowCount:n,...r}=e,i=(0,f.useMemo)(()=>{let e={};for(let t=2;t<=8;t++)for(let n=1;n<=5;n++)e[m(t,n)]=`${t},${n}`;return e},[]),a=(0,f.useMemo)(()=>new o({initial:{cell:{rowIndex:3,colIndex:2},ranges:[{rowStart:3,colStart:2,rowEnd:6,colEnd:4}],rangeIndex:0},getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1})}),[n,t]),s=(0,f.useCallback)(e=>{let{key:t,range:n,...r}=e,a=i[m(n.rowStart,n.colStart)]??``;return(0,p.jsx)(u,{...r,range:n,value:a},t)},[i]);return(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,p.jsx)(h,{selection:a}),(0,p.jsxs)(c,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:s,showGridLines:!0,children:[(0,p.jsx)(l,{selection:a},`selection`),(0,p.jsx)(d,{selection:a},`touch`)]})]})})},_=g.bind({}),_.args={columnCount:60,rowCount:60},_.storyName=`Touch`,v={title:`Selection`,component:_,parameters:{controls:{sort:`requiredFirst`}}},y=[`Touch`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const values = useMemo<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (let r = 2; r <= 8; r++) {
      for (let c = 1; c <= 5; c++) seed[cellIdentity(r, c)] = \`\${r},\${c}\`;
    }
    return seed;
  }, []);
  const selection = useMemo(() => new DefaultSelection({
    // Start with a range so the touch handles are visible immediately.
    initial: {
      cell: {
        rowIndex: 3,
        colIndex: 2
      },
      ranges: [{
        rowStart: 3,
        colStart: 2,
        rowEnd: 6,
        colEnd: 4
      }],
      rangeIndex: 0
    },
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    })
  }), [rowCount, columnCount]);
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
        <SelectionReadout selection={selection} />
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          <SelectionLayer key="selection" selection={selection} />
          <SelectionTouchGrips key="touch" selection={selection} />
        </Grid>
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}}})))()}b();export{_ as Touch,y as __namedExportsOrder,v as default};