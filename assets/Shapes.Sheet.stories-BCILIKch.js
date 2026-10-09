import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{Q as i,r as a,yt as o}from"./esm-DTVy7_Fo.js";import{kt as s}from"./CKvQvOH6xV4SqE_t-CJxCiKEq.js";import{d as c}from"./esm-DLJwqohc.js";var l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{l=e(n(),1),c(),o(),u=r(),d=e=>({paragraphs:e.map(e=>({runs:[{text:e}]}))}),f=[{json:{geometry:`roundRect`,text:d([`Rounded`])},bounds:{x:40,y:30,width:160,height:80}},{json:{geometry:`ellipse`,text:d([`Ellipse`])},bounds:{x:230,y:30,width:160,height:80}},{json:{geometry:`rightArrow`,adjustments:{adj1:4e4}},bounds:{x:420,y:30,width:160,height:80}},{json:{geometry:`wedgeRectCallout`,text:d([`Callout`])},bounds:{x:610,y:30,width:160,height:80}},{json:{geometry:`star5`,fill:{type:`solid`,color:`FFC000`}},bounds:{x:40,y:150,width:120,height:120}},{json:{geometry:`cube`,fill:{type:`solid`,color:`70AD47`}},bounds:{x:190,y:150,width:140,height:120}},{json:{geometry:`can`},bounds:{x:360,y:150,width:100,height:130}},{json:{geometry:`pie`,adjustments:{adj1:0,adj2:162e5}},bounds:{x:490,y:150,width:120,height:120}},{json:{geometry:`smileyFace`},bounds:{x:640,y:150,width:120,height:120}},{json:{geometry:`triangle`,text:d([`Rotated`])},bounds:{x:40,y:310,width:140,height:100},rotation:30},{json:{geometry:`rect`,fill:{type:`none`},stroke:{width:2.25,fill:{type:`solid`,color:`C00000`}}},bounds:{x:220,y:310,width:160,height:100}},{json:{type:`group`,bounds:{x:0,y:0,width:300,height:100},childBounds:{x:0,y:0,width:300,height:100},children:[{geometry:`roundRect`,bounds:{x:0,y:20,width:80,height:60},text:d([`Step 1`])},{geometry:`rightArrow`,bounds:{x:90,y:35,width:40,height:30}},{geometry:`roundRect`,bounds:{x:140,y:20,width:80,height:60},text:d([`Step 2`])},{geometry:`ellipse`,bounds:{x:240,y:0,width:60,height:100},rotation:90}]},bounds:{x:420,y:310,width:360,height:100}}],p=({debugGeometry:e})=>{let[t]=(0,l.useState)(()=>new s),[n,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=!0;return(async()=>{for(let e of f){let n=await t.getMovables().add({type:`shape`,json:e.json,bounds:e.bounds});e.rotation&&n.setRotation(e.rotation)}e&&r(!0)})(),()=>{e=!1}},[t]);let o=(0,l.useCallback)(t=>{let{movable:n,...r}=t;return!n||n.getContent().getType()!==`shape`?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)(i,{...r,movable:n,shape:n.getContent(),debugGeometry:e})},[e]);return(0,u.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,flexDirection:`column`,height:`100%`},children:[(0,u.jsxs)(`div`,{style:{font:`12px system-ui, sans-serif`,padding:`4px 6px`},children:[n?`${f.length} shapes`:`placing shapes…`,` · select one and drag its yellow handle · Ctrl+wheel zooms`]}),(0,u.jsx)(a,{style:{flex:1,minHeight:0},sheet:t,renderMovable:o})]})},m=p.bind({}),m.storyName=`Shapes in a sheet`,m.args={debugGeometry:!1},h={title:`Shapes`,component:m,argTypes:{debugGeometry:{control:`boolean`,description:`Draw each geometry's text rectangle (red) and connection sites (green).`}}},g=[`SheetShapes`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  debugGeometry
}) => {
  const [sheet] = useState(() => new Sheet());
  const [placed, setPlaced] = useState(false);
  useEffect(() => {
    let live = true;
    (async () => {
      for (const p of SHAPES) {
        const movable: IMovable = await sheet.getMovables().add({
          type: 'shape',
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
    if (!movable || movable.getContent().getType() !== 'shape') return <></>;
    return <ShapeEditor {...rest} movable={movable} shape={movable.getContent<IShape>()} debugGeometry={debugGeometry} />;
  }, [debugGeometry]);
  return <div className="storybook-container" style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}>
      <div style={{
      font: '12px system-ui, sans-serif',
      padding: '4px 6px'
    }}>
        {placed ? \`\${SHAPES.length} shapes\` : 'placing shapes…'} · select one and drag its yellow handle · Ctrl+wheel zooms
      </div>
      <SheetElement style={{
      flex: 1,
      minHeight: 0
    }} sheet={sheet} renderMovable={renderMovable} />
    </div>;
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as SheetShapes,g as __namedExportsOrder,h as default};