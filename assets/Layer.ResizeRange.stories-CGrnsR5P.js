import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{H as i,I as a,L as o,Q as s,dt as c,mt as l,rt as u}from"./esm-CBSoBgXq.js";var d,f,p,m,h,g,_;function v(){return(v=t((()=>{d=e(n(),1),i(),f=r(),p=(e,t)=>`${e}:${t}`,m=e=>{let{columnCount:t,rowCount:n,handles:r,...i}=e,m=(0,d.useMemo)(()=>{let e={};for(let t=2;t<=8;t++)for(let n=2;n<=6;n++)e[p(t,n)]=`${t},${n}`;return e},[]),[h,g]=(0,d.useState)({rowStart:3,colStart:3,rowEnd:7,colEnd:5}),_=(0,d.useCallback)(e=>{let{key:t,range:n,...r}=e,i=m[p(n.rowStart,n.colStart)]??``;return(0,f.jsx)(l,{...r,range:n,value:i},t)},[m]),v=r===4?c:a;return(0,f.jsx)(`div`,{className:`storybook-container`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,f.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,f.jsx)(`strong`,{children:`range`}),` (`,h.rowStart,`,`,h.colStart,`)…(`,h.rowEnd,`,`,h.colEnd,`)`,`  ·  `,(0,f.jsx)(`strong`,{children:`handles`}),` `,r]}),(0,f.jsx)(o,{...i,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:_,showGridLines:!0,children:(0,f.jsx)(u,{children:(0,f.jsx)(s,{range:h,anchors:v,onDragEnd:g})},`resize`)})]})})},h=m.bind({}),h.args={columnCount:60,rowCount:60,handles:8},h.storyName=`Resize range`,g={title:`Layers`,component:h,argTypes:{handles:{control:{type:`inline-radio`},options:[4,8]}},parameters:{controls:{sort:`requiredFirst`}}},_=[`ResizeRange`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    handles,
    ...rest
  } = props;

  // A few labeled cells so the resize is easy to read against the grid.
  const values = useMemo<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (let r = 2; r <= 8; r++) {
      for (let c = 2; c <= 6; c++) seed[cellIdentity(r, c)] = \`\${r},\${c}\`;
    }
    return seed;
  }, []);
  const [range, setRange] = useState<RangeCoords>({
    rowStart: 3,
    colStart: 3,
    rowEnd: 7,
    colEnd: 5
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
  const anchors = handles === 4 ? RESIZE_ANCHORS_4 : RESIZE_ANCHORS_8;
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
          {'  ·  '}<strong>handles</strong> {handles}
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          {/* One Layer hosting the resize feature (law 4: grid children are Layers). */}
          <Layer key="resize">
            <RangeResizer range={range} anchors={anchors} onDragEnd={setRange} />
          </Layer>
        </Grid>
      </div>
    </div>;
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as ResizeRange,_ as __namedExportsOrder,g as default};