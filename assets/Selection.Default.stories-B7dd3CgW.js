import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,x as a}from"./esm-BwAES4tr.js";import{A as o,E as s,N as c,h as l,s as u}from"./esm-BcpaeSfa.js";var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),i(),c(),f=r(),p=(e,t)=>`${e}:${t}`,m=({selection:e})=>{let t=a(e,e=>e.getSelection());return(0,f.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:[(0,f.jsx)(`strong`,{children:`cell`}),` (`,t.cell.rowIndex,`,`,t.cell.colIndex,`)`,`  ·  `,(0,f.jsx)(`strong`,{children:`ranges`}),` `,t.ranges&&t.ranges.length?t.ranges.map(e=>`(${e.rowStart},${e.colStart})…(${e.rowEnd},${e.colEnd})`).join(`  `):`—`,`  ·  `,(0,f.jsx)(`strong`,{children:`active`}),` `,t.rangeIndex]})},h=e=>{let{columnCount:t,rowCount:n,...r}=e,i=(0,d.useMemo)(()=>new o({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1})}),[n,t]),[a,c]=(0,d.useState)(()=>{let e={};for(let t=0;t<5;t++)e[p(t,0)]=`r${t}`;return e}),h=(0,d.useCallback)(e=>{let{key:t,range:n,...r}=e,i=a[p(n.rowStart,n.colStart)]??``;return(0,f.jsx)(u,{...r,range:n,value:i},t)},[a]),g=(0,d.useCallback)((e,t)=>{c(n=>{let r={...n};for(let i=t.rowStart;i<=t.rowEnd;i++)for(let a=t.colStart;a<=t.colEnd;a++){let t=Math.min(Math.max(i,e.rowStart),e.rowEnd),o=Math.min(Math.max(a,e.colStart),e.colEnd);r[p(i,a)]=n[p(t,o)]??``}return r})},[]);return(0,f.jsx)(`div`,{className:`storybook-container`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,f.jsx)(m,{selection:i}),(0,f.jsx)(s,{...r,freezeLeft:2,freezeTop:3,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:h,showGridLines:!0,children:(0,f.jsx)(l,{selection:i,enabledMove:!0,enableFill:!0,onFill:g},`selection`)})]})})},g=h.bind({}),g.args={columnCount:200,rowCount:200},g.storyName=`Default`,_={title:`Selection`,component:g,parameters:{controls:{sort:`requiredFirst`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    })
  }), [rowCount, columnCount]);
  const [values, setValues] = useState<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (let r = 0; r < 5; r++) seed[cellIdentity(r, 0)] = \`r\${r}\`;
    return seed;
  });
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range,
      ...cellRest
    } = cellProps;
    const value = values[cellIdentity(range.rowStart, range.colStart)] ?? '';
    return <DefaultCellRenderer key={key} {...cellRest} range={range} value={value} />;
  }, [values]);

  // The fill data side-effect: repeat the template's per-column value across the destination.
  const handleFill = useCallback((template: RangeCoords, destination: RangeCoords) => {
    setValues(prev => {
      const next = {
        ...prev
      };
      for (let r = destination.rowStart; r <= destination.rowEnd; r++) {
        for (let c = destination.colStart; c <= destination.colEnd; c++) {
          const srcR = Math.min(Math.max(r, template.rowStart), template.rowEnd);
          const srcC = Math.min(Math.max(c, template.colStart), template.colEnd);
          next[cellIdentity(r, c)] = prev[cellIdentity(srcR, srcC)] ?? '';
        }
      }
      return next;
    });
  }, []);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <SelectionReadout selection={selection} />
        <Grid {...rest} freezeLeft={2} freezeTop={3} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          <SelectionLayer key="selection" selection={selection} enabledMove enableFill onFill={handleFill} />
        </Grid>
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},v=[`Default`]}))();export{g as Default,v as __namedExportsOrder,_ as default};