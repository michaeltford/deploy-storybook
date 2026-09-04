import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,Y as o,j as s,l as c,s as l}from"./esm-BcpaeSfa.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=t(n(),1),a(),d=r(),f=(e,t)=>`${e}:${t}`,p={rowStart:3,colStart:2,rowEnd:6,colEnd:4},m=(e,t,n)=>{let r=n.rowStart-t.rowStart,i=n.colStart-t.colStart,a={...e},o={};for(let e=t.rowStart;e<=t.rowEnd;e++)for(let n=t.colStart;n<=t.colEnd;n++){let t=f(e,n);t in a&&(o[f(e+r,n+i)]=a[t],delete a[t])}return{...a,...o}},h=e=>{let{columnCount:t,rowCount:n,grip:r,...a}=e,[h,g]=(0,u.useState)(p),[_,v]=(0,u.useState)(()=>{let e={};for(let t=p.rowStart;t<=p.rowEnd;t++)for(let n=p.colStart;n<=p.colEnd;n++)e[f(t,n)]=`${t},${n}`;return e}),y=(0,u.useRef)(null),b=(0,u.useCallback)(e=>{let{key:t,range:n,...r}=e,i=_[f(n.rowStart,n.colStart)]??``;return(0,d.jsx)(l,{...r,range:n,value:i},t)},[_]);return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,d.jsx)(`strong`,{children:`range`}),` (`,h.rowStart,`,`,h.colStart,`)…(`,h.rowEnd,`,`,h.colEnd,`)`,`  ·  `,(0,d.jsx)(`strong`,{children:`grip`}),` `,r]}),(0,d.jsx)(i,{...a,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:b,showGridLines:!0,children:(0,d.jsx)(c,{children:(0,d.jsx)(o,{range:h,grip:r,onDragStart:e=>{y.current=e},onDragMove:e=>g(e),onDragEnd:e=>{let t=y.current??h;y.current=null,v(n=>m(n,t,e)),g(e)},children:(0,d.jsx)(s,{range:h,stroke:`rgb(33, 115, 70)`,alignWidth:2,fill:`rgba(16, 124, 65, 0.10)`})})},`move`)})]})})},g=h.bind({}),g.args={columnCount:60,rowCount:60,grip:`entire`},g.storyName=`Movable range`,_={title:`Layers`,component:g,argTypes:{grip:{control:{type:`inline-radio`},options:[`edges`,`entire`]}},parameters:{controls:{sort:`requiredFirst`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    grip,
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
  // Live \`onDragMove\` overwrites \`range\`, so capture the drag's origin for the cut-move's \`from\`.
  const moveFromRef = useRef<RangeCoords | null>(null);
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range: cellRange,
      ...cellRest
    } = cellProps;
    const value = values[cellIdentity(cellRange.rowStart, cellRange.colStart)] ?? '';
    return <DefaultCellRenderer key={key} {...cellRest} range={cellRange} value={value} />;
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
          <strong>range</strong> ({range.rowStart},{range.colStart})…({range.rowEnd},{range.colEnd})
          {'  ·  '}<strong>grip</strong> {grip}
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          {/* One Layer for the movable feature (law 4: grid children are Layers). */}
          <Layer key="move">
            <Draggable range={range} grip={grip} onDragStart={r => {
            moveFromRef.current = r;
          }} onDragMove={to => setRange(to)} onDragEnd={to => {
            const from = moveFromRef.current ?? range;
            moveFromRef.current = null;
            setValues(prev => relocate(prev, from, to));
            setRange(to);
          }}>
              <RangeRect range={range} stroke="rgb(33, 115, 70)" alignWidth={2} fill="rgba(16, 124, 65, 0.10)" />
            </Draggable>
          </Layer>
        </Grid>
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},v=[`Movable`]}))();export{g as Movable,v as __namedExportsOrder,_ as default};