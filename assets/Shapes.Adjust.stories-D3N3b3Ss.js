import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./BmtOFUPFKF3YrTmP-yqF_BWT1.js";import{d as a}from"./esm-DLJwqohc.js";import{a as o,i as s,r as c,t as l}from"./ShapeBox-C0CctaFN.js";var u,d,f,p,m,h,g;function _(){return(_=t((()=>{u=e(n(),1),a(),c(),s(),d=r(),f=Object.values(i.Preset),p=()=>{let[e,t]=(0,u.useState)(i.Preset.RoundRect),[n,r]=(0,u.useState)(240),[a,s]=(0,u.useState)(160),[c,p]=(0,u.useState)(null),m=(0,u.useRef)(null),h=(0,u.useRef)(null),g=o({geometry:e},n,a),_=(0,u.useMemo)(()=>g&&c?g.withAdjustments(c):g,[g,c]),v=e=>{t(e),p(null)},y=[],b=[];_?.forEachHandle(e=>y.push(e)),_?.forEachConnection(e=>b.push(e));let x=_?.getTextRect();return(0,d.jsxs)(`div`,{style:{display:`flex`,gap:24,padding:12,font:`12px system-ui, sans-serif`},children:[(0,d.jsxs)(`div`,{style:{width:280,display:`flex`,flexDirection:`column`,gap:8},children:[(0,d.jsxs)(`label`,{children:[`Shape `,(0,d.jsx)(`select`,{value:e,onChange:e=>v(e.target.value),style:{width:`100%`},children:f.map(e=>(0,d.jsx)(`option`,{value:e,children:e},e))})]}),(0,d.jsxs)(`label`,{children:[`Width `,(0,d.jsx)(`input`,{type:`range`,min:10,max:600,value:n,onChange:e=>r(Number(e.target.value))}),` `,n]}),(0,d.jsxs)(`label`,{children:[`Height `,(0,d.jsx)(`input`,{type:`range`,min:10,max:600,value:a,onChange:e=>s(Number(e.target.value))}),` `,a]}),c?(0,d.jsx)(`button`,{onClick:()=>p(null),children:`reset adjustments`}):null,(0,d.jsx)(`pre`,{style:{whiteSpace:`pre-wrap`,wordBreak:`break-all`,fontSize:10,color:`#555`,maxHeight:300,overflow:`auto`},children:JSON.stringify(c??{},null,1)})]}),(0,d.jsx)(`svg`,{ref:m,width:n+80,height:a+80,style:{border:`1px solid #ddd`,overflow:`visible`,touchAction:`none`},onPointerMove:e=>{let t=h.current,n=m.current?.getScreenCTM();if(t===null||!_||!n)return;let r=new DOMPoint(e.clientX,e.clientY).matrixTransform(n.inverse());p(_.adjustmentsFromHandle(t,r.x-40,r.y-40))},onPointerUp:()=>{h.current=null},onPointerLeave:()=>{h.current=null},children:(0,d.jsxs)(`g`,{transform:`translate(40 40)`,children:[(0,d.jsx)(`rect`,{width:n,height:a,fill:`none`,stroke:`#ccc`,strokeDasharray:`2 2`}),_?(0,d.jsx)(l,{geometry:_}):null,x?(0,d.jsx)(`rect`,{x:x.l,y:x.t,width:Math.max(0,x.r-x.l),height:Math.max(0,x.b-x.t),fill:`none`,stroke:`#c00`,strokeDasharray:`4 2`}):null,b.map(e=>(0,d.jsx)(`rect`,{x:e.x-3,y:e.y-3,width:6,height:6,fill:`#0a0`},`c${e.index}`)),y.map(e=>(0,d.jsx)(`circle`,{cx:e.x,cy:e.y,r:5,fill:`#ffc000`,stroke:`#000`,style:{cursor:`crosshair`},onPointerDown:t=>{h.current=e.index,t.target.setPointerCapture?.(t.pointerId)}},`h${e.index}`))]})})]})},m=p.bind({}),m.storyName=`Adjust one shape`,h={title:`Shapes`,component:m},g=[`Adjust`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [name, setName] = useState<string>(IGeometry.Preset.RoundRect);
  const [width, setWidth] = useState(240);
  const [height, setHeight] = useState(160);
  const [adjustments, setAdjustments] = useState<Record<string, number> | null>(null);
  const refSvg = useRef<SVGSVGElement>(null);
  const refDrag = useRef<number | null>(null);
  const base = useShapeGeometry({
    geometry: name
  }, width, height);
  const geometry = useMemo(() => base && adjustments ? base.withAdjustments(adjustments) : base, [base, adjustments]);
  const pick = (next: string): void => {
    setName(next);
    setAdjustments(null);
  };
  const handles: IGeometry.IHandle[] = [];
  const connections: IGeometry.IConnection[] = [];
  geometry?.forEachHandle(h => handles.push(h));
  geometry?.forEachConnection(c => connections.push(c));
  const t = geometry?.getTextRect();
  const onPointerMove = (e: React.PointerEvent): void => {
    const index = refDrag.current;
    const ctm = refSvg.current?.getScreenCTM();
    if (index === null || !geometry || !ctm) return;
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    setAdjustments(geometry.adjustmentsFromHandle(index, p.x - 40, p.y - 40));
  };
  return <div style={{
    display: 'flex',
    gap: 24,
    padding: 12,
    font: '12px system-ui, sans-serif'
  }}>
      <div style={{
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <label>Shape <select value={name} onChange={e => pick(e.target.value)} style={{
          width: '100%'
        }}>
          {PRESETS.map(n => <option key={n} value={n}>{n}</option>)}
        </select></label>
        <label>Width <input type="range" min={10} max={600} value={width} onChange={e => setWidth(Number(e.target.value))} /> {width}</label>
        <label>Height <input type="range" min={10} max={600} value={height} onChange={e => setHeight(Number(e.target.value))} /> {height}</label>
        {adjustments ? <button onClick={() => setAdjustments(null)}>reset adjustments</button> : null}
        <pre style={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        fontSize: 10,
        color: '#555',
        maxHeight: 300,
        overflow: 'auto'
      }}>
          {JSON.stringify(adjustments ?? {}, null, 1)}
        </pre>
      </div>
      <svg ref={refSvg} width={width + 80} height={height + 80} style={{
      border: '1px solid #ddd',
      overflow: 'visible',
      touchAction: 'none'
    }} onPointerMove={onPointerMove} onPointerUp={() => {
      refDrag.current = null;
    }} onPointerLeave={() => {
      refDrag.current = null;
    }}>
        <g transform="translate(40 40)">
          <rect width={width} height={height} fill="none" stroke="#ccc" strokeDasharray="2 2" />
          {geometry ? <GeometryPaths geometry={geometry} /> : null}
          {t ? <rect x={t.l} y={t.t} width={Math.max(0, t.r - t.l)} height={Math.max(0, t.b - t.t)} fill="none" stroke="#c00" strokeDasharray="4 2" /> : null}
          {connections.map(c => <rect key={\`c\${c.index}\`} x={c.x - 3} y={c.y - 3} width={6} height={6} fill="#0a0" />)}
          {handles.map(h => <circle key={\`h\${h.index}\`} cx={h.x} cy={h.y} r={5} fill="#ffc000" stroke="#000" style={{
          cursor: 'crosshair'
        }} onPointerDown={e => {
          refDrag.current = h.index;
          (e.target as Element).setPointerCapture?.(e.pointerId);
        }} />)}
        </g>
      </svg>
    </div>;
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as Adjust,g as __namedExportsOrder,h as default};