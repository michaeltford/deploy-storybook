import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{H as i,W as a,f as o,h as s,j as c}from"./esm-xMraobUN.js";var l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{l=e(n(),1),a(),u=r(),d={rowStart:2,colStart:1,rowEnd:6,colEnd:4},f={rowStart:2,colStart:6,rowEnd:6,colEnd:9},p=e=>{let{columnCount:t,rowCount:n,...r}=e,a=(0,l.useCallback)(e=>{let{key:t,range:n,...r}=e;return(0,u.jsx)(s,{...r,range:n,value:``},t)},[]),p=(0,u.jsx)(o,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:a,showGridLines:!0,children:(0,u.jsxs)(c,{children:[(0,u.jsx)(i,{range:d,alignWidth:2,stroke:`white`},`bg`),(0,u.jsx)(i,{range:d,alignWidth:2,stroke:`rgb(33, 115, 70)`,animatedStroke:!0},`fg`),(0,u.jsx)(i,{range:f,alignWidth:2,stroke:`white`},`bg-tuned`),(0,u.jsx)(i,{range:f,alignWidth:2,stroke:`rgb(216, 59, 1)`,animatedStroke:!0},`fg-tuned`)]},`marquees`)});return(0,u.jsx)(`div`,{className:`storybook-container`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,u.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[(0,u.jsx)(`strong`,{children:`left`}),` default marquee \xA0·\xA0 `,(0,u.jsx)(`strong`,{children:`right`}),` tuned (longer dashes, faster)`]}),p]})})},m=p.bind({}),m.args={columnCount:60,rowCount:60},m.storyName=`Animated stroke (copy marquee)`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},g=[`AnimatedStroke`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
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
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as AnimatedStroke,g as __namedExportsOrder,h as default};