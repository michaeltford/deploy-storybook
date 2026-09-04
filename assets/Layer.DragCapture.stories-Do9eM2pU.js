import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,l as o}from"./esm-BcpaeSfa.js";import{a as s,t as c}from"./components-DMcoRMO1.js";var l,u,d,f,p,m;e((()=>{l=t(n(),1),a(),c(),u=r(),d=e=>{let{...t}=e,[n,r]=(0,l.useState)({x:160,y:140}),[a,c]=(0,l.useState)(!1),[d,f]=(0,l.useState)(!0),[p,m]=(0,l.useState)(0),h=(0,l.useRef)(null);return(0,u.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,padding:`8px`,alignItems:`center`},children:[(0,u.jsxs)(`label`,{style:{display:`flex`,gap:`4px`,alignItems:`center`},children:[(0,u.jsx)(`input`,{type:`checkbox`,checked:d,onChange:e=>f(e.target.checked)}),`use pointer capture`]}),(0,u.jsxs)(`span`,{style:{opacity:.7},children:[`Drag the box (try fast / off-grid). grid-wide clicks: `,p,` · `,a?`dragging`:`idle`]})]}),(0,u.jsxs)(i,{...t,style:{position:`relative`,flex:1},renderCells:s,showGridLines:!0,children:[(0,u.jsx)(o,{onPointerDown:()=>m(e=>e+1)}),(0,u.jsx)(o,{children:(0,u.jsx)(`div`,{style:{position:`absolute`,left:n.x,top:n.y,width:150,height:110,display:`flex`,alignItems:`center`,justifyContent:`center`,background:a?`rgba(16,124,16,0.18)`:`rgba(0,120,215,0.14)`,border:`2px solid ${a?`rgb(16,124,16)`:`rgb(0,120,215)`}`,borderRadius:6,boxSizing:`border-box`,cursor:a?`grabbing`:`grab`,userSelect:`none`,touchAction:`none`},onPointerDown:e=>{e.stopPropagation(),d&&e.currentTarget.setPointerCapture(e.pointerId),h.current={cx:e.clientX,cy:e.clientY,x:n.x,y:n.y},c(!0)},onPointerMove:e=>{let t=h.current;t&&(e.stopPropagation(),r({x:t.x+(e.clientX-t.cx),y:t.y+(e.clientY-t.cy)}))},onPointerUp:e=>{if(h.current){if(e.stopPropagation(),d)try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}h.current=null,c(!1)}},children:`drag me`})})]})]})},f=d.bind({}),f.args={columnCount:50,rowCount:100},f.storyName=`Drag Capture`,p={title:`Layers`,component:f,parameters:{controls:{sort:`requiredFirst`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [pos, setPos] = useState({
    x: 160,
    y: 140
  });
  const [dragging, setDragging] = useState(false);
  const [useCapture, setUseCapture] = useState(true);
  const [gridClicks, setGridClicks] = useState(0);
  const refDrag = useRef<{
    cx: number;
    cy: number;
    x: number;
    y: number;
  } | null>(null);
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
        <label style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
          <input type="checkbox" checked={useCapture} onChange={e => setUseCapture(e.target.checked)} />
          use pointer capture
        </label>
        <span style={{
        opacity: 0.7
      }}>
          Drag the box (try fast / off-grid). grid-wide clicks: {gridClicks} · {dragging ? 'dragging' : 'idle'}
        </span>
      </div>

      <Grid {...rest} style={{
      position: 'relative',
      flex: 1
    }} renderCells={sharedCellRenderer} showGridLines={true}>
        {/* grid-wide tap (a non-visual Layer) — should NOT fire while grabbing the box (it consumes) */}
        <Layer onPointerDown={() => setGridClicks(c => c + 1)} />

        {/* draggable widget — a plain div using native setPointerCapture, hosted in its own Layer
            (law 4: grid children are Layers) */}
        <Layer>
          <div style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: 150,
          height: 110,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: dragging ? 'rgba(16,124,16,0.18)' : 'rgba(0,120,215,0.14)',
          border: \`2px solid \${dragging ? 'rgb(16,124,16)' : 'rgb(0,120,215)'}\`,
          borderRadius: 6,
          boxSizing: 'border-box',
          cursor: dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          touchAction: 'none'
        }} onPointerDown={event => {
          event.stopPropagation();
          if (useCapture) event.currentTarget.setPointerCapture(event.pointerId);
          refDrag.current = {
            cx: event.clientX,
            cy: event.clientY,
            x: pos.x,
            y: pos.y
          };
          setDragging(true);
        }} onPointerMove={event => {
          const d = refDrag.current;
          if (!d) return;
          event.stopPropagation();
          setPos({
            x: d.x + (event.clientX - d.cx),
            y: d.y + (event.clientY - d.cy)
          });
        }} onPointerUp={event => {
          if (!refDrag.current) return;
          event.stopPropagation();
          if (useCapture) {
            try {
              event.currentTarget.releasePointerCapture(event.pointerId);
            } catch {/* already released */}
          }
          refDrag.current = null;
          setDragging(false);
        }}>
            drag me
          </div>
        </Layer>
      </Grid>
    </div>;
}`,...f.parameters?.docs?.source}}},m=[`LayerDragCapture`]}))();export{f as LayerDragCapture,m as __namedExportsOrder,p as default};