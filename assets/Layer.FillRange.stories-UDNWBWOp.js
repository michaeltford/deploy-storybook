import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,W as o,j as s,l as c,s as l}from"./esm-BcpaeSfa.js";var u,d,f,p,m,h,g,_;e((()=>{u=t(n(),1),a(),d=r(),f=(e,t)=>`${e}:${t}`,p={rowStart:2,colStart:2,rowEnd:4,colEnd:2},m=e=>{let{columnCount:t,rowCount:n,...r}=e,[a,m]=(0,u.useState)(p),[h,g]=(0,u.useState)(()=>{let e={};for(let t=p.rowStart;t<=p.rowEnd;t++)for(let n=p.colStart;n<=p.colEnd;n++)e[f(t,n)]=`${t},${n}`;return e}),_=(0,u.useCallback)(e=>{let{key:t,range:n,...r}=e,i=h[f(n.rowStart,n.colStart)]??``;return(0,d.jsx)(l,{...r,range:n,value:i},t)},[h]),v=(0,u.useCallback)(e=>{g(t=>{let n={...t};for(let r=e.rowStart;r<=e.rowEnd;r++)for(let i=e.colStart;i<=e.colEnd;i++){let e=Math.min(Math.max(r,a.rowStart),a.rowEnd),o=Math.min(Math.max(i,a.colStart),a.colEnd);n[f(r,i)]=t[f(e,o)]??``}return n}),m(e)},[a]);return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,d.jsx)(`strong`,{children:`range`}),` (`,a.rowStart,`,`,a.colStart,`)…(`,a.rowEnd,`,`,a.colEnd,`)`]}),(0,d.jsx)(i,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:_,showGridLines:!0,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(s,{range:a,stroke:`rgb(0, 120, 215)`,alignWidth:2},`range`),(0,d.jsx)(o,{range:a,stroke:`rgb(0, 120, 215)`,onDragEnd:v},`fill`)]},`fill-feature`)})]})})},h=m.bind({}),h.args={columnCount:60,rowCount:60},h.storyName=`Fill range`,g={title:`Layers`,component:h,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const [range, setRange] = useState<RangeCoords>(INITIAL_RANGE);
  const [values, setValues] = useState<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (let r = INITIAL_RANGE.rowStart; r <= INITIAL_RANGE.rowEnd; r++) {
      for (let c = INITIAL_RANGE.colStart; c <= INITIAL_RANGE.colEnd; c++) {
        seed[cellIdentity(r, c)] = \`\${r},\${c}\`;
      }
    }
    return seed;
  });
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range: cellRange,
      ...cellRest
    } = cellProps;
    const value = values[cellIdentity(cellRange.rowStart, cellRange.colStart)] ?? '';
    return <DefaultCellRenderer key={key} {...cellRest} range={cellRange} value={value} />;
  }, [values]);

  // Fill the destination from the template (the current \`range\`), repeating each column's template value
  // down/across, then extend the range to the destination.
  const handleFill = useCallback((destination: RangeCoords) => {
    setValues(prev => {
      const next = {
        ...prev
      };
      for (let r = destination.rowStart; r <= destination.rowEnd; r++) {
        for (let c = destination.colStart; c <= destination.colEnd; c++) {
          const srcR = Math.min(Math.max(r, range.rowStart), range.rowEnd);
          const srcC = Math.min(Math.max(c, range.colStart), range.colEnd);
          next[cellIdentity(r, c)] = prev[cellIdentity(srcR, srcC)] ?? '';
        }
      }
      return next;
    });
    setRange(destination);
  }, [range]);
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
          <strong>range</strong> ({range.rowStart},{range.colStart})…({range.rowEnd},{range.colEnd})
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          {/* One Layer for the fill feature: outline + fill handle travel together. */}
          <Layer key="fill-feature">
            {/* The range outline. FillHandle itself only draws the corner handle + a drag preview, so
                we draw the range here. NOTE: \`stroke\`/\`alignWidth\` are top-level props — NOT \`style\`,
                which is the <svg> element's CSS and does not drive the path stroke. */}
            <RangeRect key="range" range={range} stroke="rgb(0, 120, 215)" alignWidth={2} />
            {/* Demo: a custom stroke recolors the fill handle (the square) + the drag preview — the
                component default is green; this prop doesn't change it. */}
            <FillHandle key="fill" range={range} stroke="rgb(0, 120, 215)" onDragEnd={handleFill} />
          </Layer>
        </Grid>
      </div>
    </div>;
}`,...h.parameters?.docs?.source}}},_=[`Fill`]}))();export{h as Fill,_ as __namedExportsOrder,g as default};