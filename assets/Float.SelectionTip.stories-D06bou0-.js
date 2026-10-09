import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{P as n,f as r,mt as i}from"./iframe-Dk6xXpge.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{B as o,N as s,W as c,g as l}from"./esm-xMraobUN.js";import{a as u,n as d,t as f}from"./components-DMQLsyG4.js";var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{p=e(i(),1),n(),c(),f(),m=a(),h=e=>{let t=``,n=e;do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},g=e=>{let t=`${h(e.colStart)}${e.rowStart+1}`,n=`${h(e.colEnd)}${e.rowEnd+1}`;return t===n?t:`${t}:${n}`},_=e=>`${e.rowEnd-e.rowStart+1}R × ${e.colEnd-e.colStart+1}C`,v=e=>{if(e.kind===`select`){let{rowStart:t,colStart:n,rowEnd:r,colEnd:i}=e.range;return t===r&&n===i?null:_(e.range)}return e.kind===`move`?g(e.to):_(e.destination)},y=e=>e.colIndex===0?{range:r.cellToRange(e),data:e.rowIndex+1}:null,b=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:i,...a}=e,c=(0,p.useMemo)(()=>new s({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1}),initial:{cell:{rowIndex:8,colIndex:5},ranges:[{rowStart:8,colStart:5,rowEnd:10,colEnd:7}],rangeIndex:0}}),[n,t]);return(0,m.jsx)(`div`,{className:`storybook-container`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,m.jsx)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`},children:`Drag to select (R×C) · drag the selection border to move (address) · drag the fill handle (R×C) · column A has a hover tip`}),(0,m.jsxs)(d,{...a,columnCount:t,rowCount:n,renderCells:u,showGridLines:!0,freezeTop:r,freezeLeft:i,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,m.jsx)(l,{selection:c,enabledMove:!0,enableFill:!0,renderTip:v}),(0,m.jsx)(o,{probe:y,placement:{side:`r`,align:`center`},children:({data:e})=>`Row ${e}`})]})]})})},x=b.bind({}),x.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},x.storyName=`Selection gesture tips`,S={title:`Float`,component:x,parameters:{controls:{sort:`requiredFirst`}}},C=[`SelectionTip`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    }),
    initial: {
      cell: {
        rowIndex: 8,
        colIndex: 5
      },
      ranges: [{
        rowStart: 8,
        colStart: 5,
        rowEnd: 10,
        colEnd: 7
      }],
      rangeIndex: 0
    }
  }), [rowCount, columnCount]);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        font: '12px monospace',
        padding: '4px 6px',
        color: '#555'
      }}>
          Drag to select (R×C) · drag the selection border to move (address) · drag the fill handle (R×C) · column A has a hover tip
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          <SelectionLayer selection={selection} enabledMove enableFill renderTip={renderTip} />
          <RangeTooltipLayer probe={probeRow} placement={{
          side: 'r',
          align: 'center'
        }}>
            {({
            data
          }) => \`Row \${data}\`}
          </RangeTooltipLayer>
        </Grid>
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}}})))()}w();export{x as SelectionTip,C as __namedExportsOrder,S as default};