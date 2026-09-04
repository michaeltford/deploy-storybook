import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{N as r,j as i,l as a,t as o,y as s}from"./esm-BcpaeSfa.js";import{a as c,n as l,t as u}from"./components-DMcoRMO1.js";var d,f,p,m,h,g,_,v;e((()=>{t(),r(),u(),d=n(),f={font:`11px/1.5 system-ui, sans-serif`,color:`white`,background:`rgb(200,40,40)`,padding:`3px 8px`,borderRadius:4,whiteSpace:`nowrap`,maxWidth:220,boxShadow:`0 2px 8px rgba(0,0,0,0.35)`,cursor:`default`},p=({def:e,openDelay:t,closeDelay:n})=>{let{open:r,tipProps:c}=o(e.range,{openDelay:t,closeDelay:n});return(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{range:e.range,stroke:e.stroke,alignWidth:1.5,fill:`${e.stroke}22`}),(0,d.jsx)(s,{anchor:{range:e.range},placement:{side:e.side},offset:6,open:r,whenOff:`hide`,children:(0,d.jsx)(`div`,{...c,style:{...f,...c.style},children:e.message})})]})},m=[{range:{rowStart:8,colStart:5,rowEnd:9,colEnd:6},side:`t`,stroke:`rgb(200,40,40)`,message:`⚠ Value must be a positive number`},{range:{rowStart:14,colStart:9,rowEnd:14,colEnd:9},side:`r`,stroke:`rgb(210,140,0)`,message:`⚠ Circular reference`}],h=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:i,openDelay:a,closeDelay:o,...s}=e;return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,d.jsxs)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`},children:[`Hover a marked range → tip after `,a,`ms · move onto the tip to keep it · leave → closes after `,o,`ms`]}),(0,d.jsx)(l,{...s,columnCount:t,rowCount:n,renderCells:c,showGridLines:!0,freezeTop:r,freezeLeft:i,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:m.map((e,t)=>(0,d.jsx)(p,{def:e,openDelay:a,closeDelay:o},t))})]})})},g=h.bind({}),g.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3,openDelay:300,closeDelay:150},g.storyName=`Range hover (tooltip)`,_={title:`Float`,component:g,parameters:{controls:{sort:`requiredFirst`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    openDelay,
    closeDelay,
    ...rest
  } = props;
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
          Hover a marked range → tip after {openDelay}ms · move onto the tip to keep it · leave → closes after {closeDelay}ms
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          {TIPS.map((def, i) => <RangeTip key={i} def={def} openDelay={openDelay} closeDelay={closeDelay} />)}
        </Grid>
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},v=[`RangeHover`]}))();export{g as RangeHover,v as __namedExportsOrder,_ as default};