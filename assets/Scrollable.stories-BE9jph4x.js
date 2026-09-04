import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Q as i,Z as a,f as o,ot as s,x as c}from"./esm-BwAES4tr.js";var l,u,d,f,p,m,h,g;e((()=>{l=t(n(),1),a(),u=r(),d=e=>(0,u.jsx)(o,{style:{border:`red solid 3px`},...e}),f=e=>{let{size:t,...n}=e;return(0,u.jsx)(`button`,{style:{width:`100%`,height:`100%`,background:`green`,border:`blue solid 2px`},...n})},p=e=>{let{showVerticalScrollbar:t,showHorizontalScrollbar:n,renderScrollbarHorizontal:r,renderScrollbarVertical:a,renderScrollCorner:o,...d}=e,f=d,p=(0,l.useRef)(null),m=(0,l.useMemo)(()=>{let e=new i;return e.setSizes(100,100,1e3,1e3),e.setBounds({minLeft:0,maxLeft:900,minTop:0,maxTop:900}),e},[]),h=c(m,e=>e.getMetrics());return(0,u.jsx)(`div`,{className:`storybook-container`,children:(0,u.jsx)(s,{...f,viewport:m,ref:p,showVerticalScrollbar:t,showHorizontalScrollbar:n,renderScrollbarHorizontal:r,renderScrollbarVertical:a,renderScrollCorner:o,children:(0,u.jsx)(`div`,{style:{border:`1px solid green`,width:`100%`,height:`100%`,background:`pink`,overflow:`hidden`},children:(0,u.jsx)(`button`,{style:{position:`relative`,left:`${250-h.left}px`,top:`${150-h.top}px`,width:`100px`,height:`20px`},onClick:()=>{console.log(p.current)},children:`Floating`})})})})},m=p.bind({}),m.args={renderScrollbarHorizontal:d,renderScrollbarVertical:d,renderScrollCorner:f,showVerticalScrollbar:!0,showHorizontalScrollbar:!0},m.storyName=`Floating`,h={title:`Scrollable`,component:s,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    renderScrollbarHorizontal,
    renderScrollbarVertical,
    renderScrollCorner,
    ...rest
  } = props as any;
  const propsScrollPane: ScrollPaneProps = rest;
  const refScrollPane = useRef<IScrollPaneElement>(null);

  // A standalone ScrollPane (no grid): drive arbitrary content from a Viewport. The sizes
  // (a 100×100 view over 1000×1000 content) are pushed once; the ScrollPane subscribes for position +
  // sizes and drives scroll into it.
  const viewport = useMemo(() => {
    const controller = new Viewport();
    controller.setSizes(100, 100, 1000, 1000);
    controller.setBounds({
      minLeft: 0,
      maxLeft: 900,
      minTop: 0,
      maxTop: 900
    });
    return controller;
  }, []);
  const vp = useBoundSyncExternalStore(viewport, s => s.getMetrics());
  return <div className="storybook-container">
      <ScrollPane {...propsScrollPane} viewport={viewport} ref={refScrollPane} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} renderScrollbarHorizontal={renderScrollbarHorizontal} renderScrollbarVertical={renderScrollbarVertical} renderScrollCorner={renderScrollCorner}>
        <div style={{
        border: '1px solid green',
        width: '100%',
        height: '100%',
        background: 'pink',
        overflow: 'hidden'
      }}>
          <button style={{
          position: 'relative',
          left: \`\${250 - vp.left}px\`,
          top: \`\${150 - vp.top}px\`,
          width: '100px',
          height: '20px'
        }} onClick={() => {
          // scrollPane is a regular component
          console.log(refScrollPane.current);
        }}>
            Floating
          </button>
        </div>

      </ScrollPane>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`ScrollPaneFloating`]}))();export{m as ScrollPaneFloating,g as __namedExportsOrder,h as default};