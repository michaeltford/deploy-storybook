import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,j as o,l as s}from"./esm-BcpaeSfa.js";import{a as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),a(),l(),d=r(),f=[{id:`C (z=1, declared 1st)`,z:1,range:{colStart:3,rowStart:3,colEnd:8,rowEnd:7},stroke:`rgb(0,120,215)`,fill:`rgba(0,120,215,0.25)`},{id:`D (z=1, declared 2nd)`,z:1,range:{colStart:5,rowStart:5,colEnd:10,rowEnd:9},stroke:`rgb(136,23,152)`,fill:`rgba(136,23,152,0.25)`},{id:`A (z=0, declared 3rd)`,z:0,range:{colStart:1,rowStart:1,colEnd:6,rowEnd:5},stroke:`rgb(215,0,0)`,fill:`rgba(215,0,0,0.25)`},{id:`B (z=0, declared 4th)`,z:0,range:{colStart:2,rowStart:2,colEnd:7,rowEnd:6},stroke:`rgb(0,150,0)`,fill:`rgba(0,150,0,0.25)`}],p=e=>{let{...t}=e,[n,r]=(0,u.useState)([]),a=e=>r(t=>[...t,e]);return(0,d.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,padding:`8px`,alignItems:`center`},children:[(0,d.jsx)(`button`,{onClick:()=>r([]),children:`Clear log`}),(0,d.jsx)(`span`,{style:{opacity:.7},children:`C/D declare z=1 (though declared first) so they paint above A/B. Click the grid, then press a key — dispatch is top-of-z first → expected D, C, B, A.`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flex:1,gap:`8px`,minHeight:0},children:[(0,d.jsx)(i,{...t,style:{position:`relative`,flex:1},renderCells:c,showGridLines:!0,children:f.map(e=>(0,d.jsx)(s,{zIndex:e.z,onKeyDown:t=>a(`${e.id} ← '${t.key}'`),children:(0,d.jsx)(o,{range:e.range,alignWidth:2,stroke:e.stroke,fill:e.fill})},e.id))}),(0,d.jsx)(`pre`,{style:{width:300,margin:0,padding:8,overflow:`auto`,background:`rgba(0,0,0,0.04)`,border:`1px solid rgba(0,0,0,0.1)`,fontSize:12,lineHeight:1.5},children:n.length?n.join(`
`):`(press a key over the focused grid)`})]})]})},m=p.bind({}),m.args={columnCount:50,rowCount:100},m.storyName=`Stack Order (z override)`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [log, setLog] = useState<string[]>([]);
  const append = (id: string) => setLog(prev => [...prev, id]);
  return <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      padding: '8px',
      alignItems: 'center'
    }}>
        <button onClick={() => setLog([])}>Clear log</button>
        <span style={{
        opacity: 0.7
      }}>
          C/D declare z=1 (though declared first) so they paint above A/B. Click the grid, then
          press a key — dispatch is top-of-z first → expected D, C, B, A.
        </span>
      </div>

      <div style={{
      display: 'flex',
      flex: 1,
      gap: '8px',
      minHeight: 0
    }}>
        <Grid {...rest} style={{
        position: 'relative',
        flex: 1
      }} renderCells={sharedCellRenderer} showGridLines={true}>
          {/* One Layer per band: the z-slot (zIndex), the visual (RangeRect), and the tap
              (onKeyDown) travel together. All are DIRECT grid children — the stack is flat. */}
          {BANDS.map(b => <Layer key={b.id} zIndex={b.z} onKeyDown={e => append(\`\${b.id} ← '\${e.key}'\`)}>
              <RangeRect range={b.range} alignWidth={2} stroke={b.stroke} fill={b.fill} />
            </Layer>)}
        </Grid>

        <pre style={{
        width: 300,
        margin: 0,
        padding: 8,
        overflow: 'auto',
        background: 'rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.1)',
        fontSize: 12,
        lineHeight: 1.5
      }}>
          {log.length ? log.join('\\n') : '(press a key over the focused grid)'}
        </pre>
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`LayerStackOrder`]}))();export{m as LayerStackOrder,g as __namedExportsOrder,h as default};