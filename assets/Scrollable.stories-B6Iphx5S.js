import{j as o}from"./index-DjHwRWfA.js";import{r as i}from"./iframe-BjEmcQsQ.js";import{T as p,t as m}from"./index-BAF_6BbL.js";import"./index-DrTFDFai.js";import"./preload-helper-D9Z9MdNV.js";import"./client-BRZzXANe.js";const s=r=>o.jsx(m,{style:{border:"red solid 3px"},...r}),x=({width:r,height:t})=>o.jsx("button",{style:{minWidth:`${r}px`,width:`${r}px`,minHeight:`${t}px`,height:`${t}px`,background:"green",border:"blue solid 2px"}}),g=r=>{const{showVerticalScrollbar:t,showHorizontalScrollbar:S,createHorizontalScrollbar:d,createVerticalScrollbar:b,createScrollCorner:h,...w}=r,u=w,a=i.useRef(null),[l,f]=i.useState({left:0,top:0,width:100,height:100,totalWidth:1e3,totalHeight:1e3});return o.jsx("div",{className:"storybook-container",children:o.jsx(p,{...u,viewport:l,onScrollViewport:c=>{f(n=>({...n,top:c.top??n.top,left:c.left??n.left}))},ref:a,showVerticalScrollbar:t,showHorizontalScrollbar:S,createHorizontalScrollbar:d,createVerticalScrollbar:b,createScrollCorner:h,children:o.jsx("div",{style:{border:"1px solid green",width:"100%",height:"100%",background:"pink",overflow:"hidden"},children:o.jsx("button",{style:{position:"relative",left:`${650-l.left}px`,top:`${550-l.top}px`,width:"100px",height:"20px"},onClick:()=>{console.log(a.current)},children:"Floating"})})})})},e=g.bind({});e.args={createHorizontalScrollbar:s,createVerticalScrollbar:s,createScrollCorner:x,showVerticalScrollbar:!0,showHorizontalScrollbar:!0};const k={title:"Scrollable",component:p,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    showVerticalScrollbar,
    showHorizontalScrollbar,
    createHorizontalScrollbar,
    createVerticalScrollbar,
    createScrollCorner,
    ...rest
  } = props as any;
  const scrollPaneProps: ScrollPaneProps = rest;
  const refScrollPane = useRef<IScrollPaneElement>(null);

  // const viewport:ScrollableViewport =
  const [viewport, setViewport] = useState<ScrollableViewport>({
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    totalWidth: 1000,
    totalHeight: 1000
  });
  return <div className="storybook-container">
      <ScrollPane {...scrollPaneProps} viewport={viewport} onScrollViewport={(scrollPoint: Partial<TopLeft>) => {
      setViewport((prev: ScrollableViewport) => {
        return {
          ...prev,
          top: scrollPoint.top ?? prev.top,
          left: scrollPoint.left ?? prev.left
        };
      });
    }} ref={refScrollPane} showVerticalScrollbar={showVerticalScrollbar} showHorizontalScrollbar={showHorizontalScrollbar} createHorizontalScrollbar={createHorizontalScrollbar} createVerticalScrollbar={createVerticalScrollbar} createScrollCorner={createScrollCorner}>
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
