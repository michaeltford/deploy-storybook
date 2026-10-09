import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{H as r,W as i,f as a,j as o}from"./esm-xMraobUN.js";import{a as s,t as c}from"./components-DMQLsyG4.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),i(),c(),l=n(),u=e=>{let{...t}=e;return(0,l.jsx)(`div`,{className:`storybook-container`,children:(0,l.jsx)(a,{...t,renderCells:s,showGridLines:!0,children:(0,l.jsxs)(o,{children:[(0,l.jsx)(r,{range:{colStart:1,rowStart:1,colEnd:3,rowEnd:4},alignWidth:1,stroke:`rgb(0,120,215)`}),(0,l.jsx)(r,{range:{colStart:5,rowStart:1,colEnd:7,rowEnd:4},alignWidth:1,stroke:`rgb(16,124,16)`,fill:`rgba(16,124,16,0.15)`}),(0,l.jsx)(r,{range:{colStart:1,rowStart:6,colEnd:3,rowEnd:9},alignWidth:2,stroke:`rgb(216,59,1)`}),(0,l.jsx)(r,{range:{colStart:5,rowStart:6,colEnd:7,rowEnd:9},alignWidth:3,stroke:`rgb(136,23,152)`}),[{colStart:1,rowStart:11,colEnd:2,rowEnd:12},{colStart:4,rowStart:11,colEnd:5,rowEnd:12}].map((e,t)=>(0,l.jsx)(r,{range:e,alignWidth:1,stroke:`rgb(0,0,0)`,fill:`rgba(0,0,0,0.06)`},t))]})})})},d=u.bind({}),d.args={columnCount:50,rowCount:50},d.storyName=`Range Rects`,f={title:`Grid`,component:d,parameters:{controls:{sort:`requiredFirst`}}},p=[`GridWithRanges`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  return <div className="storybook-container">
      <Grid {...rest} renderCells={sharedCellRenderer} showGridLines={true}>
        {/* One Layer (the z-slot) holding all the decorations — RangeRects are pure visuals. */}
        <Layer>
          {/* 1px — should land exactly on the gridlines at this range's edges */}
          <RangeRect range={{
          colStart: 1,
          rowStart: 1,
          colEnd: 3,
          rowEnd: 4
        }} alignWidth={1} stroke="rgb(0,120,215)" />
          {/* 1px + fill — fill should butt the stroke on all four sides */}
          <RangeRect range={{
          colStart: 5,
          rowStart: 1,
          colEnd: 7,
          rowEnd: 4
        }} alignWidth={1} stroke="rgb(16,124,16)" fill="rgba(16,124,16,0.15)" />
          {/* 2px (even) — trailing edges sit after the divider */}
          <RangeRect range={{
          colStart: 1,
          rowStart: 6,
          colEnd: 3,
          rowEnd: 9
        }} alignWidth={2} stroke="rgb(216,59,1)" />
          {/* 3px (odd) — centered, 1px each side */}
          <RangeRect range={{
          colStart: 5,
          rowStart: 6,
          colEnd: 7,
          rowEnd: 9
        }} alignWidth={3} stroke="rgb(136,23,152)" />
          {/* multiple disjoint ranges — render independently (one RangeRect each), no merge */}
          {[{
          colStart: 1,
          rowStart: 11,
          colEnd: 2,
          rowEnd: 12
        }, {
          colStart: 4,
          rowStart: 11,
          colEnd: 5,
          rowEnd: 12
        }].map((range, i) => <RangeRect key={i} range={range} alignWidth={1} stroke="rgb(0,0,0)" fill="rgba(0,0,0,0.06)" />)}
        </Layer>
      </Grid>
    </div>;
}`,...d.parameters?.docs?.source}}}})))()}m();export{d as GridWithRanges,p as __namedExportsOrder,f as default};