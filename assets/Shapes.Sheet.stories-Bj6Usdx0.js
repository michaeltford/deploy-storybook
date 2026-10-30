import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{j as i}from"./CM0Yctza78PW8Od2-BbelfSr0.js";import{f as a}from"./esm-COMwdbTt.js";import{n as o,t as s}from"./Cxd1HPgWJABnrMtf-Bpm34llM.js";import{Et as c,w as l}from"./esm-CRLSzNYP.js";import{n as u,t as d}from"./group-DNckkJBm.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=e(n(),1),a(),c(),u(),s(),p=r(),m=e=>({paragraphs:e.map(e=>({runs:[{text:e}]}))}),h=(e,t,n,r,i,a)=>({anchor:{tl:{x:t,y:n},br:{x:r,y:i}},content:{type:`shape`,json:e},...a?{rotation:a}:{}}),g=[{json:{geometry:`roundRect`,text:m([`Rounded`])},bounds:{x:40,y:30,width:160,height:80}},{json:{geometry:`ellipse`,text:m([`Ellipse`])},bounds:{x:230,y:30,width:160,height:80}},{json:{geometry:`rightArrow`,adjustments:{adj1:4e4}},bounds:{x:420,y:30,width:160,height:80}},{json:{geometry:`wedgeRectCallout`,text:m([`Callout`])},bounds:{x:610,y:30,width:160,height:80}},{json:{geometry:`star5`,fill:{type:`solid`,color:`FFC000`}},bounds:{x:40,y:150,width:120,height:120}},{json:{geometry:`cube`,fill:{type:`solid`,color:`70AD47`}},bounds:{x:190,y:150,width:140,height:120}},{json:{geometry:`can`},bounds:{x:360,y:150,width:100,height:130}},{json:{geometry:`pie`,adjustments:{adj1:0,adj2:162e5}},bounds:{x:490,y:150,width:120,height:120}},{json:{geometry:`smileyFace`},bounds:{x:640,y:150,width:120,height:120}},{json:{geometry:`triangle`,text:m([`Rotated`])},bounds:{x:40,y:310,width:140,height:100},rotation:30},{json:{geometry:`rect`,fill:{type:`none`},stroke:{width:2.25,fill:{type:`solid`,color:`C00000`}}},bounds:{x:220,y:310,width:160,height:100}},{type:`group`,json:{childBounds:{x:0,y:0,width:300,height:100},members:[h({geometry:`roundRect`,text:m([`Step 1`])},0,20,80,60),h({geometry:`rightArrow`},90,35,40,30),h({geometry:`roundRect`,text:m([`Step 2`])},140,20,80,60),h({geometry:`ellipse`},240,0,60,100,90)]},bounds:{x:420,y:310,width:360,height:100}}],_=({debugGeometry:e})=>{let[t]=(0,f.useState)(()=>new i),[n,r]=(0,f.useState)(!1);(0,f.useEffect)(()=>{let e=!0;return(async()=>{for(let e of g){let n=await t.getMovables().add({type:e.type??`shape`,json:e.json,bounds:e.bounds});e.rotation&&n.setRotation(e.rotation)}e&&r(!0)})(),()=>{e=!1}},[t]);let a=(0,f.useCallback)(t=>{let{movable:n,...r}=t;if(!n)return(0,p.jsx)(p.Fragment,{});let i=n.getContent().getType();return i===`group`?(0,p.jsx)(d,{...r,movable:n,container:n.getContent()}):i===`shape`?(0,p.jsx)(o,{...r,movable:n,shape:n.getContent(),debugGeometry:e}):(0,p.jsx)(p.Fragment,{})},[e]);return(0,p.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,flexDirection:`column`,height:`100%`},children:[(0,p.jsxs)(`div`,{style:{flex:`none`,font:`12px system-ui, sans-serif`,padding:`4px 6px`},children:[n?`${g.length} shapes`:`placing shapes…`,` · select one and drag its yellow handle · Ctrl+wheel zooms`]}),(0,p.jsx)(l,{style:{flex:1,minHeight:0},sheet:t,renderMovable:a})]})},v=_.bind({}),v.storyName=`Shapes in a sheet`,v.args={debugGeometry:!1},y={title:`Shapes`,component:v,argTypes:{debugGeometry:{control:`boolean`,description:`Draw each geometry's text rectangle (red) and connection sites (green).`}}},b=[`SheetShapes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`({
  debugGeometry
}) => {
  const [sheet] = useState(() => new Worksheet());
  const [placed, setPlaced] = useState(false);
  useEffect(() => {
    let live = true;
    (async () => {
      for (const p of SHAPES) {
        const movable: IMovable = await sheet.getMovables().add({
          type: p.type ?? 'shape',
          json: p.json,
          bounds: p.bounds
        } as any);
        if (p.rotation) movable.setRotation(p.rotation);
      }
      if (live) setPlaced(true);
    })();
    return () => {
      live = false;
    };
  }, [sheet]);
  const renderMovable = useCallback((props: MovableElementProps) => {
    const {
      movable,
      ...rest
    } = props;
    if (!movable) return <></>;
    const type = movable.getContent().getType();
    if (type === 'group') return <GroupEditor {...rest} movable={movable} container={movable.getContent()} />;
    if (type !== 'shape') return <></>;
    return <ShapeEditor {...rest} movable={movable} shape={movable.getContent<IShape>()} debugGeometry={debugGeometry} />;
  }, [debugGeometry]);
  return <div className="storybook-container" style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}>
      <div style={{
      flex: 'none',
      font: '12px system-ui, sans-serif',
      padding: '4px 6px'
    }}>
        {placed ? \`\${SHAPES.length} shapes\` : 'placing shapes…'} · select one and drag its yellow handle · Ctrl+wheel zooms
      </div>
      <WorksheetElement style={{
      flex: 1,
      minHeight: 0
    }} sheet={sheet} renderMovable={renderMovable} />
    </div>;
}`,...v.parameters?.docs?.source}}}})))()}x();export{v as SheetShapes,b as __namedExportsOrder,y as default};