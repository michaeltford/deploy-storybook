import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{P as n,f as r,mt as i}from"./iframe-Dk6xXpge.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{B as o,H as s,W as c,ct as l,j as u}from"./esm-xMraobUN.js";import{a as d,n as f,t as p}from"./components-DMQLsyG4.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{m=e(i(),1),n(),c(),p(),h=a(),g=[{range:{rowStart:3,colStart:2,rowEnd:8,colEnd:5},name:`Sales`},{range:{rowStart:12,colStart:6,rowEnd:16,colEnd:10},name:`Inventory`}],_=[{range:{rowStart:4,colStart:8,rowEnd:5,colEnd:9},name:`Q3 figures are provisional`},{range:{rowStart:18,colStart:2,rowEnd:18,colEnd:4},name:`Reviewed by finance`}],v={font:`12px system-ui, sans-serif`,background:`white`,color:`#222`,border:`1px solid #ccc`,borderRadius:6,padding:8,minWidth:150,boxShadow:`0 4px 16px rgba(0,0,0,0.18)`,display:`flex`,flexDirection:`column`,gap:6},y={font:`12px system-ui`,padding:`3px 10px`,borderRadius:4,border:`1px solid #bbb`,cursor:`pointer`},b=e=>{let{columnCount:t,rowCount:n,freezeTop:i,freezeLeft:a,enterDelay:c,enterNextDelay:p,armedFor:b,leaveDelay:x,...S}=e,[C,w]=(0,m.useState)(`—`),T=e=>{let t=g.find(t=>r.isCellWithinRange(e,t.range));return t?{range:t.range,key:t.name,data:t}:null},E=e=>{let t=_.find(t=>r.isCellWithinRange(e,t.range));return t?{range:t.range,key:t.name,data:t}:null},D=e=>e.colIndex===0?{range:r.cellToRange(e),data:e.rowIndex+1}:null;return(0,h.jsx)(`div`,{className:`storybook-container`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,h.jsxs)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`},children:[`Hover a card region (blue), a note (green) or column A · one tip at a time · last action: `,(0,h.jsx)(`b`,{children:C})]}),(0,h.jsx)(l,{timing:{enterDelay:c,enterNextDelay:p,armedFor:b,leaveDelay:x},children:(0,h.jsxs)(f,{...S,columnCount:t,rowCount:n,renderCells:d,showGridLines:!0,freezeTop:i,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,h.jsxs)(u,{children:[g.map(e=>(0,h.jsx)(s,{range:e.range,stroke:`rgb(90,90,200)`,alignWidth:1.5,fill:`rgba(90,90,200,0.08)`},e.name)),_.map(e=>(0,h.jsx)(s,{range:e.range,stroke:`rgb(60,160,90)`,alignWidth:1.5,fill:`rgba(60,160,90,0.10)`},e.name))]},`regions`),(0,h.jsx)(o,{probe:T,placement:{side:`t`},offset:6,interactive:!0,bubble:!1,children:({data:e,range:t,tipProps:n})=>(0,h.jsxs)(`div`,{...n,style:{...v,...n.style},children:[(0,h.jsx)(`b`,{children:e.name}),(0,h.jsxs)(`span`,{style:{color:`#777`},children:[t.rowEnd-t.rowStart+1,`R × `,t.colEnd-t.colStart+1,`C`]}),(0,h.jsx)(`button`,{style:y,onClick:()=>w(`Edit ${e.name}`),children:`Edit`})]})},`cards`),(0,h.jsx)(o,{probe:E,placement:{side:`b`,align:`start`},offset:4,children:({data:e})=>e.name},`notes`),(0,h.jsx)(o,{probe:D,placement:{side:`r`},offset:4,children:({data:e})=>`Row ${e}`},`rows`)]})})]})})},x=b.bind({}),x.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3,enterDelay:300,enterNextDelay:0,armedFor:800,leaveDelay:400},x.storyName=`Range tooltip (group: single open, arming, interactive)`,S={title:`Float`,component:x,parameters:{controls:{sort:`requiredFirst`}}},C=[`RangeTooltip`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    enterDelay,
    enterNextDelay,
    armedFor,
    leaveDelay,
    ...rest
  } = props;
  const [log, setLog] = useState<string>('—');
  const probeCard = (coords: CellCoords): RangeFloatTarget<Region> | null => {
    const region = CARDS.find(r => CoordUtils.isCellWithinRange(coords, r.range));
    return region ? {
      range: region.range,
      key: region.name,
      data: region
    } : null;
  };
  const probeNote = (coords: CellCoords): RangeFloatTarget<Region> | null => {
    const region = NOTES.find(r => CoordUtils.isCellWithinRange(coords, r.range));
    return region ? {
      range: region.range,
      key: region.name,
      data: region
    } : null;
  };
  const probeRow = (coords: CellCoords): RangeFloatTarget<number> | null => {
    if (coords.colIndex !== 0) return null;
    return {
      range: CoordUtils.cellToRange(coords)!,
      data: coords.rowIndex + 1
    };
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
          Hover a card region (blue), a note (green) or column A · one tip at a time · last action: <b>{log}</b>
        </div>
        <TooltipProvider timing={{
        enterDelay,
        enterNextDelay,
        armedFor,
        leaveDelay
      }}>
          <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
          width: '100%',
          height: '100%',
          border: '1px solid black'
        }}>
            <Layer key="regions">
              {CARDS.map(r => <RangeRect key={r.name} range={r.range} stroke="rgb(90,90,200)" alignWidth={1.5} fill="rgba(90,90,200,0.08)" />)}
              {NOTES.map(r => <RangeRect key={r.name} range={r.range} stroke="rgb(60,160,90)" alignWidth={1.5} fill="rgba(60,160,90,0.10)" />)}
            </Layer>
            <RangeTooltipLayer key="cards" probe={probeCard} placement={{
            side: 't'
          }} offset={6} interactive bubble={false}>
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
            </RangeTooltipLayer>
            <RangeTooltipLayer key="notes" probe={probeNote} placement={{
            side: 'b',
            align: 'start'
          }} offset={4}>
              {({
              data
            }) => data.name}
            </RangeTooltipLayer>
            <RangeTooltipLayer key="rows" probe={probeRow} placement={{
            side: 'r'
          }} offset={4}>
              {({
              data
            }) => \`Row \${data}\`}
            </RangeTooltipLayer>
          </Grid>
        </TooltipProvider>
      </div>
    </div>;
}`,...x.parameters?.docs?.source}}}})))()}w();export{x as RangeTooltip,C as __namedExportsOrder,S as default};