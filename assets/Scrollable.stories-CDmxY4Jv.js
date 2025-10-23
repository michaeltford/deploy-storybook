import{j as o}from"./index-BiBgeh3u.js";import{r as i}from"./iframe-mGP4b_Fh.js";import{L as p,v as m}from"./index-CvKDCtrJ.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BMu68Vok.js";const s=r=>o.jsx(m,{style:{border:"red solid 3px"},...r}),x=({width:r,height:t})=>o.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${t}px`,height:`${t}px`,background:"green",border:"blue solid 2px"}}),g=r=>{const{showVerticalScrollbar:t,showHorizontalScrollbar:d,renderScrollbarHorizontal:S,renderScrollbarVertical:h,createScrollCorner:b,...u}=r,w=u,a=i.useRef(null),[l,f]=i.useState({left:0,top:0,width:100,height:100,totalWidth:1e3,totalHeight:1e3});return o.jsx("div",{className:"storybook-container",children:o.jsx(p,{...w,viewport:l,onScrollViewport:c=>{f(n=>({...n,top:c.top??n.top,left:c.left??n.left}))},ref:a,showVerticalScrollbar:t,showHorizontalScrollbar:d,renderScrollbarHorizontal:S,renderScrollbarVertical:h,createScrollCorner:b,children:o.jsx("div",{style:{border:"1px solid green",width:"100%",height:"100%",background:"pink",overflow:"hidden"},children:o.jsx("button",{style:{position:"relative",left:`${650-l.left}px`,top:`${550-l.top}px`,width:"100px",height:"20px"},onClick:()=>{console.log(a.current)},children:"Floating"})})})})},e=g.bind({});e.args={renderScrollbarHorizontal:s,renderScrollbarVertical:s,createScrollCorner:x,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const k={title:"Scrollable",component:p,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    renderScrollbarHorizontal,
    renderScrollbarVertical,
    createScrollCorner,
    ...rest
  } = props as any;
  const propsScrollPane: ScrollPaneProps = rest;
  const refScrollPane = useRef<IScrollPaneElement>(null);
  const [viewport, setViewport] = useState<ScrollableViewport>({
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    totalWidth: 1000,
    totalHeight: 1000
  });
  return <div className="storybook-container">
      <ScrollPane {...propsScrollPane} viewport={viewport} onScrollViewport={(scrollPoint: Partial<TopLeft>) => {
      setViewport((prev: ScrollableViewport) => {
        return {
          ...prev,
          top: scrollPoint.top ?? prev.top,
          left: scrollPoint.left ?? prev.left
        };
      });
    }} ref={refScrollPane} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} renderScrollbarHorizontal={renderScrollbarHorizontal} renderScrollbarVertical={renderScrollbarVertical} createScrollCorner={createScrollCorner}>
        <div style={{
        border: '1px solid green',
        width: '100%',
        height: '100%',
        background: 'pink',
        overflow: 'hidden'
      }}>
          <button style={{
          position: 'relative',
          left: \`\${650 - viewport.left}px\`,
          top: \`\${550 - viewport.top}px\`,
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
}`,...e.parameters?.docs?.source}}};const C=["ScrollPaneTemplate"];export{e as ScrollPaneTemplate,C as __namedExportsOrder,k as default};
