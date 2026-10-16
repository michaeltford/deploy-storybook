import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{E as i,U as a,l as o,lt as s,n as c,x as l}from"./esm-uTuOMcSU.js";import{a as u,n as d,t as f}from"./components-DqOkHNPt.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{p=e(n(),1),a(),f(),m=r(),h={rowStart:3,colStart:2,rowEnd:8,colEnd:5},g={rowStart:12,colStart:6,rowEnd:16,colEnd:10},_={rowStart:5,colStart:3,rowEnd:6,colEnd:4},v={rowStart:0,colStart:0,rowEnd:199,colEnd:0},y={rowStart:20,colStart:2,rowEnd:20,colEnd:4},b={font:`12px system-ui, sans-serif`,background:`white`,color:`#222`,border:`1px solid #ccc`,borderRadius:6,padding:8,minWidth:150,boxShadow:`0 4px 16px rgba(0,0,0,0.18)`,display:`flex`,flexDirection:`column`,gap:6},x={font:`12px system-ui`,padding:`3px 10px`,borderRadius:4,border:`1px solid #bbb`,cursor:`pointer`},S=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:a,enterDelay:f,leaveDelay:S,...C}=e,[w,T]=(0,p.useState)(`—`),[E,D]=(0,p.useState)(0);return(0,m.jsx)(`div`,{className:`storybook-container`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,m.jsxs)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`,display:`flex`,gap:12,alignItems:`center`},children:[(0,m.jsxs)(`span`,{children:[`Hover a region · last action: `,(0,m.jsx)(`b`,{children:w})]}),(0,m.jsxs)(`button`,{style:x,onClick:()=>D(e=>e+1),children:[`Count: `,E]})]}),(0,m.jsx)(i,{timing:{enterDelay:f,leaveDelay:S},children:(0,m.jsxs)(s,{children:[(0,m.jsx)(l,{range:v,placement:{side:`r`},offset:4,content:`Column A, declared outside the grid`}),(0,m.jsxs)(d,{...C,columnCount:t,rowCount:n,renderCells:u,showGridLines:!0,freezeTop:r,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(o,{range:h,stroke:`rgb(90,90,200)`,alignWidth:1.5,fill:`rgba(90,90,200,0.08)`}),(0,m.jsx)(o,{range:g,stroke:`rgb(90,90,200)`,alignWidth:1.5,fill:`rgba(90,90,200,0.08)`}),(0,m.jsx)(o,{range:_,stroke:`rgb(60,160,90)`,alignWidth:1.5,fill:`rgba(60,160,90,0.10)`}),(0,m.jsx)(o,{range:y,stroke:`rgb(220,160,40)`,alignWidth:1.5,fill:`rgba(220,160,40,0.12)`})]},`regions`),(0,m.jsx)(l,{range:h,placement:{side:`t`},interactive:!0,bubble:!1,content:({tipProps:e})=>(0,m.jsxs)(`div`,{...e,style:{...b,...e.style},children:[(0,m.jsx)(`b`,{children:`Sales`}),(0,m.jsx)(`button`,{style:x,onClick:()=>T(`Edit Sales`),children:`Edit`})]})},`sales`),(0,m.jsx)(l,{range:g,placement:{side:`b`,align:`start`},offset:4,content:`Inventory`},`inventory`),(0,m.jsx)(l,{range:_,placement:{side:`b`,align:`start`},offset:4,content:`Q3 figures are provisional`},`q3`),(0,m.jsx)(l,{range:y,placement:{side:`r`},content:`Count is ${E}`},`counter`)]})]})})]})})},C=S.bind({}),C.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3,enterDelay:300,leaveDelay:400},C.storyName=`Range tooltip, declared (no layer, no probe)`,w={title:`Float`,component:C,parameters:{controls:{sort:`requiredFirst`}}},T=[`RangeTooltipDeclared`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    enterDelay,
    leaveDelay,
    ...rest
  } = props;
  const [log, setLog] = useState<string>('—');
  const [count, setCount] = useState<number>(0);
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
        color: '#555',
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }}>
          <span>Hover a region · last action: <b>{log}</b></span>
          <button style={BTN} onClick={() => setCount(c => c + 1)}>Count: {count}</button>
        </div>
        <TooltipProvider timing={{
        enterDelay,
        leaveDelay
      }}>
          <RangeTooltipProvider>
            {/* Declared outside the grid: registers with the provider around both. */}
            <RangeTooltip range={COLUMN_A} placement={{
            side: 'r'
          }} offset={4} content="Column A, declared outside the grid" />
            <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
            width: '100%',
            height: '100%',
            border: '1px solid black'
          }}>
              <Layer key="regions">
                <RangeRect range={SALES} stroke="rgb(90,90,200)" alignWidth={1.5} fill="rgba(90,90,200,0.08)" />
                <RangeRect range={INVENTORY} stroke="rgb(90,90,200)" alignWidth={1.5} fill="rgba(90,90,200,0.08)" />
                <RangeRect range={Q3} stroke="rgb(60,160,90)" alignWidth={1.5} fill="rgba(60,160,90,0.10)" />
                <RangeRect range={COUNTER} stroke="rgb(220,160,40)" alignWidth={1.5} fill="rgba(220,160,40,0.12)" />
              </Layer>
              <RangeTooltip key="sales" range={SALES} placement={{
              side: 't'
            }} interactive bubble={false} content={({
              tipProps
            }) => <div {...tipProps} style={{
              ...CARD_STYLE,
              ...tipProps.style
            }}>
                    <b>Sales</b>
                    <button style={BTN} onClick={() => setLog('Edit Sales')}>Edit</button>
                  </div>} />
              <RangeTooltip key="inventory" range={INVENTORY} placement={{
              side: 'b',
              align: 'start'
            }} offset={4} content="Inventory" />
              <RangeTooltip key="q3" range={Q3} placement={{
              side: 'b',
              align: 'start'
            }} offset={4} content="Q3 figures are provisional" />
              <RangeTooltip key="counter" range={COUNTER} placement={{
              side: 'r'
            }} content={\`Count is \${count}\`} />
            </Grid>
          </RangeTooltipProvider>
        </TooltipProvider>
      </div>
    </div>;
}`,...C.parameters?.docs?.source}}}})))()}E();export{C as RangeTooltipDeclared,T as __namedExportsOrder,w as default};