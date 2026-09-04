import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,N as a,h as o}from"./esm-BcpaeSfa.js";import{a as s,n as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{u=t(n(),1),a(),l(),d=r(),f=e=>{let t=``,n=e;do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},p=e=>{let t=`${f(e.colStart)}${e.rowStart+1}`,n=`${f(e.colEnd)}${e.rowEnd+1}`;return t===n?t:`${t}:${n}`},m=e=>`${e.rowEnd-e.rowStart+1}R × ${e.colEnd-e.colStart+1}C`,h={font:`11px/1.5 system-ui, sans-serif`,color:`white`,background:`rgb(40,40,45)`,padding:`2px 7px`,borderRadius:4,whiteSpace:`nowrap`,boxShadow:`0 2px 8px rgba(0,0,0,0.35)`},g=e=>{if(e.kind===`select`){let{rowStart:t,colStart:n,rowEnd:r,colEnd:i}=e.range;return t===r&&n===i?null:(0,d.jsx)(`div`,{style:h,children:m(e.range)})}return e.kind===`move`?(0,d.jsx)(`div`,{style:h,children:p(e.to)}):(0,d.jsx)(`div`,{style:h,children:m(e.destination)})},_=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:a,...l}=e,f=(0,u.useMemo)(()=>new i({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1}),initial:{cell:{rowIndex:8,colIndex:5},ranges:[{rowStart:8,colStart:5,rowEnd:10,colEnd:7}],rangeIndex:0}}),[n,t]);return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,d.jsx)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`},children:`Drag to select (R×C) · drag the selection border to move (address) · drag the fill handle (R×C)`}),(0,d.jsx)(c,{...l,columnCount:t,rowCount:n,renderCells:s,showGridLines:!0,freezeTop:r,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:(0,d.jsx)(o,{selection:f,enabledMove:!0,enableFill:!0,renderTip:g})})]})})},v=_.bind({}),v.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},v.storyName=`Selection gesture tips`,y={title:`Float`,component:v,parameters:{controls:{sort:`requiredFirst`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`props => {
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
          Drag to select (R×C) · drag the selection border to move (address) · drag the fill handle (R×C)
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          <SelectionLayer selection={selection} enabledMove enableFill renderTip={renderTip} />
        </Grid>
      </div>
    </div>;
}`,...v.parameters?.docs?.source}}},b=[`SelectionTip`]}))();export{v as SelectionTip,b as __namedExportsOrder,y as default};