import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Pt as i,Zt as a}from"./esm-BwAES4tr.js";import{N as o,T as s,j as c,l}from"./esm-BcpaeSfa.js";import{a as u,n as d,t as f}from"./components-DMcoRMO1.js";var p,m,h,g,_,v,y,b,x;e((()=>{p=t(n(),1),a(),o(),f(),m=r(),h=[{range:{rowStart:3,colStart:2,rowEnd:8,colEnd:5},name:`Sales`},{range:{rowStart:12,colStart:6,rowEnd:16,colEnd:10},name:`Inventory`}],g={font:`12px system-ui, sans-serif`,background:`white`,color:`#222`,border:`1px solid #ccc`,borderRadius:6,padding:8,minWidth:150,boxShadow:`0 4px 16px rgba(0,0,0,0.18)`,display:`flex`,flexDirection:`column`,gap:6},_={font:`12px system-ui`,padding:`3px 10px`,borderRadius:4,border:`1px solid #bbb`,cursor:`pointer`},v=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:a,openDelay:o,closeDelay:f,...v}=e,[y,b]=(0,p.useState)(`—`),x=e=>{let t=h.find(t=>i.isCellWithinRange(e,t.range));return t?{range:t.range,key:t.name,data:t}:null};return(0,m.jsx)(`div`,{className:`storybook-container`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,m.jsxs)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`},children:[`Hover a region (Sales / Inventory) → info card with an Edit action · last action: `,(0,m.jsx)(`b`,{children:y})]}),(0,m.jsxs)(d,{...v,columnCount:t,rowCount:n,renderCells:u,showGridLines:!0,freezeTop:r,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,m.jsx)(l,{children:h.map(e=>(0,m.jsx)(c,{range:e.range,stroke:`rgb(90,90,200)`,alignWidth:1.5,fill:`rgba(90,90,200,0.08)`},e.name))},`regions`),(0,m.jsx)(s,{probe:x,placement:{side:`t`},offset:6,openDelay:o,closeDelay:f,children:({data:e,range:t,tipProps:n})=>(0,m.jsxs)(`div`,{...n,style:{...g,...n.style},children:[(0,m.jsx)(`b`,{children:e.name}),(0,m.jsxs)(`span`,{style:{color:`#777`},children:[t.rowEnd-t.rowStart+1,`R × `,t.colEnd-t.colStart+1,`C`]}),(0,m.jsx)(`button`,{style:_,onClick:()=>b(`Edit ${e.name}`),children:`Edit`})]})})]})]})})},y=v.bind({}),y.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3,openDelay:300,closeDelay:150},y.storyName=`Hover tip (generic + interactive)`,b={title:`Float`,component:y,parameters:{controls:{sort:`requiredFirst`}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    openDelay,
    closeDelay,
    ...rest
  } = props;
  const [log, setLog] = useState<string>('—');
  const probe = (coords: CellCoords): HoverTarget<Region> | null => {
    const region = REGIONS.find(r => CoordUtils.isCellWithinRange(coords, r.range));
    return region ? {
      range: region.range,
      key: region.name,
      data: region
    } : null;
  };
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
          Hover a region (Sales / Inventory) → info card with an Edit action · last action: <b>{log}</b>
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          {/* The region outlines — decorations, hosted in one Layer (law 4: grid children are Layers). */}
          <Layer key="regions">
            {REGIONS.map(r => <RangeRect key={r.name} range={r.range} stroke="rgb(90,90,200)" alignWidth={1.5} fill="rgba(90,90,200,0.08)" />)}
          </Layer>
          <HoverTipLayer probe={probe} placement={{
          side: 't'
        }} offset={6} openDelay={openDelay} closeDelay={closeDelay}>
            {({
            data,
            range,
            tipProps
          }) => <div {...tipProps} style={{
            ...CARD_STYLE,
            ...tipProps.style
          }}>
                <b>{data.name}</b>
                <span style={{
              color: '#777'
            }}>
                  {range.rowEnd - range.rowStart + 1}R × {range.colEnd - range.colStart + 1}C
                </span>
                <button style={BTN} onClick={() => setLog(\`Edit \${data.name}\`)}>Edit</button>
              </div>}
          </HoverTipLayer>
        </Grid>
      </div>
    </div>;
}`,...y.parameters?.docs?.source}}},x=[`HoverTip`]}))();export{y as HoverTip,x as __namedExportsOrder,b as default};