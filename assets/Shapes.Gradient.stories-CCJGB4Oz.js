import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{E as i}from"./ClB5ix51roQOpZEr-CzAvOe14.js";import{Z as a}from"./zqJOaweiXE9D8RY1-BXtGT3r7.js";import{d as o}from"./esm-D9igw9py.js";import{n as s,t as c}from"./J8cPagZBeXz86Lnd-8ZM6CLRb.js";import{ut as l,x as u}from"./esm-BxkbVGb8.js";import{p as d}from"./COv-m-c2byCgvU3M-B-m1m8tj.js";import{C as f,P as p}from"./esm-Bjza6FYd.js";import{o as m,s as h}from"./sam1KGQZ59B_fADz-DiPv5zIU.js";import{s as g}from"./esm-DRC3oiMm.js";var _,v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{_=e(n(),1),o(),l(),s(),f(),g(),v=r(),d(),y=e=>({paragraphs:e.map(e=>({runs:[{text:e}]}))}),b=(e,t)=>({type:i.Type.Gradient,angle:e,stops:[{offset:0,color:`ffffff`},{offset:1,color:`4472c4`}],...t}),x=[{json:{geometry:`roundRect`,fill:b(90),text:y([`edit me`])},bounds:{x:30,y:30,width:200,height:100}},{json:{geometry:`rect`,fill:b(180),text:y([`180°`])},bounds:{x:260,y:30,width:200,height:100}},{json:{geometry:`rect`,fill:b(135,{scaled:!0}),text:y([`135° scaled`])},bounds:{x:490,y:30,width:200,height:100}},{json:{geometry:`rect`,fill:b(135,{scaled:!1}),text:y([`135° unscaled`])},bounds:{x:720,y:30,width:200,height:100}},{json:{geometry:`ellipse`,fill:b(0,{gradientType:i.GradientType.Path,focus:{left:.5,top:.5,right:.5,bottom:.5}}),text:y([`radial`])},bounds:{x:30,y:160,width:200,height:120}},{json:{geometry:`rect`,fill:b(0,{gradientType:i.GradientType.Path}),text:y([`radial, no focus`])},bounds:{x:260,y:160,width:200,height:120}},{json:{geometry:`star5`,fill:{type:i.Type.Gradient,angle:90,stops:[{offset:0,color:`ffc000`},{offset:.5,color:`ff0000`},{offset:1,color:`7030a0`}]}},bounds:{x:490,y:160,width:140,height:130}},{json:{geometry:`rect`,fill:{type:i.Type.None},stroke:{width:8,fill:b(90,{stops:[{offset:0,color:`ff0000`},{offset:1,color:`0000ff`}]})},text:y([`gradient line`])},bounds:{x:660,y:160,width:260,height:120}}],S=({shape:e,deferredApply:t})=>{let[,n]=(0,_.useReducer)(e=>e+1,0);(0,_.useEffect)(()=>e.addListeners({onAnyChange:n}),[e]);let r=e.getStyle().getFill();return r.getType()===i.Type.Gradient?(0,v.jsx)(m,{value:h(r),onChange:r=>{let a=()=>{e.getStyle().setFill({type:i.Type.Gradient,gradientType:r.gradientType,angle:r.angle,stops:r.stops.map(e=>({offset:e.offset,color:e.color}))})};t?(n(),setTimeout(a,30)):a()}}):(0,v.jsx)(`div`,{children:`not a gradient`})},C=({deferredApply:e})=>{let[t]=(0,_.useState)(()=>new a),[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=!0;return(async()=>{let n=null;for(let e of x){let r=await t.getMovables().add({type:`shape`,json:e.json,bounds:e.bounds});n??=r.getContent()}e&&r(n)})(),()=>{e=!1}},[t]);let i=(0,_.useCallback)(e=>{let{movable:t,...n}=e;return!t||t.getContent().getType()!==`shape`?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)(c,{...n,movable:t,shape:t.getContent()})},[]);return(0,v.jsx)(p,{children:(0,v.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,height:`100%`},children:[(0,v.jsx)(u,{style:{flex:1,minWidth:0},sheet:t,renderMovable:i}),(0,v.jsx)(`div`,{className:`gradient-pane`,style:{flex:`none`,width:320,padding:12,boxSizing:`border-box`,borderLeft:`1px solid #ddd`},children:n?(0,v.jsx)(S,{shape:n,deferredApply:e}):`placing shapes…`})]})})},w=C.bind({}),w.storyName=`Gradient fills`,w.args={deferredApply:!1},T={title:`Shapes`,component:w,argTypes:{deferredApply:{control:`boolean`,description:`Re-render the editor before the write lands, as a host with deferred model notifications does.`}}},E=[`Gradients`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  deferredApply
}) => {
  const [sheet] = useState(() => new Sheet());
  const [first, setFirst] = useState<IShape | null>(null);
  useEffect(() => {
    let live = true;
    (async () => {
      let firstShape: IShape | null = null;
      for (const p of SHAPES) {
        const movable: IMovable = await sheet.getMovables().add({
          type: 'shape',
          json: p.json,
          bounds: p.bounds
        } as any);
        firstShape ??= movable.getContent<IShape>();
      }
      if (live) setFirst(firstShape);
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
    return <ShapeEditor {...rest} movable={movable} shape={movable.getContent<IShape>()} />;
  }, []);
  return <ExhibitFloatProvider>
      <div className="storybook-container" style={{
      display: 'flex',
      height: '100%'
    }}>
        <SheetElement style={{
        flex: 1,
        minWidth: 0
      }} sheet={sheet} renderMovable={renderMovable} />
        <div className="gradient-pane" style={{
        flex: 'none',
        width: 320,
        padding: 12,
        boxSizing: 'border-box',
        borderLeft: '1px solid #ddd'
      }}>
          {first ? <BoundEditor shape={first} deferredApply={deferredApply} /> : 'placing shapes…'}
        </div>
      </div>
    </ExhibitFloatProvider>;
}`,...w.parameters?.docs?.source}}}})))()}D();export{w as Gradients,E as __namedExportsOrder,T as default};