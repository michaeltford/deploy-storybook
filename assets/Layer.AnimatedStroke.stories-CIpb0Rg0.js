import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,j as o,l as s,s as c}from"./esm-BcpaeSfa.js";var l,u,d,f,p,m,h,g;e((()=>{l=t(n(),1),a(),u=r(),d={rowStart:2,colStart:1,rowEnd:6,colEnd:4},f={rowStart:2,colStart:6,rowEnd:6,colEnd:9},p=e=>{let{columnCount:t,rowCount:n,...r}=e,a=(0,l.useCallback)(e=>{let{key:t,range:n,...r}=e;return(0,u.jsx)(c,{...r,range:n,value:``},t)},[]),p=(0,u.jsx)(i,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:a,showGridLines:!0,children:(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{range:d,alignWidth:2,stroke:`white`},`bg`),(0,u.jsx)(o,{range:d,alignWidth:2,stroke:`rgb(33, 115, 70)`,animatedStroke:!0},`fg`),(0,u.jsx)(o,{range:f,alignWidth:2,stroke:`white`},`bg-tuned`),(0,u.jsx)(o,{range:f,alignWidth:2,stroke:`rgb(216, 59, 1)`,animatedStroke:!0},`fg-tuned`)]},`marquees`)});return(0,u.jsx)(`div`,{className:`storybook-container`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,u.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,u.jsx)(`strong`,{children:`left`}),` default marquee \xA0·\xA0 `,(0,u.jsx)(`strong`,{children:`right`}),` tuned (longer dashes, faster)`]}),p]})})},m=p.bind({}),m.args={columnCount:60,rowCount:60},m.storyName=`Animated stroke (copy marquee)`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      range,
      ...cellRest
    } = cellProps;
    return <DefaultCellRenderer key={key} {...cellRest} range={range} value="" />;
  }, []);
  const element = <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
    flex: '1 1 100%',
    border: '1px solid black'
  }} renderCells={renderCells} showGridLines={true}>
      {/* One Layer hosting the marquee decorations (RangeRects stack by DOM order within it). */}
      <Layer key="marquees">
        {/* Copy marquee: solid base stroke + an animated (marching-ants) foreground on the same range. */}
        <RangeRect key="bg" range={RANGE} alignWidth={2} stroke="white" />
        <RangeRect key="fg" range={RANGE} alignWidth={2} stroke="rgb(33, 115, 70)" animatedStroke />
        {/* Tuned: longer dashes, faster march (AnimatedStrokeProps). */}
        <RangeRect key="bg-tuned" range={RANGE_TUNED} alignWidth={2} stroke="white" />
        <RangeRect key="fg-tuned" range={RANGE_TUNED} alignWidth={2} stroke="rgb(216, 59, 1)" animatedStroke={true} //{ dashLength: 10, dashGap: 4, speed: 20 }}
      />
      </Layer>
    </Grid>;
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
          <strong>left</strong> default marquee &nbsp;·&nbsp; <strong>right</strong> tuned (longer dashes, faster)
        </div>
        {element}
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`AnimatedStroke`]}))();export{m as AnimatedStroke,g as __namedExportsOrder,h as default};