import{j as r}from"./index-Be1k0P_l.js";import{r as t}from"./iframe-CWCjrGPE.js";import{L as a}from"./index-BBX37kc2.js";import{M as d}from"./index-B3lpE7zk.js";import"./RelaxedChangeTextField-3NJsffjf.js";import{s as f}from"./SimpleCellRenderer-DchMyOiI.js";import"./index-D0kf0PFp.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BpSzD-wv.js";import"./index-D1YY320t.js";import"./index-DaE1w_lX.js";const w=u=>{const{...p}=u,[h,n]=t.useState(null),[g,c]=t.useState(null),l=t.useRef(null),s=t.useRef(null);return r.jsx("div",{className:"storybook-container",children:r.jsxs("div",{style:{display:"flex"},children:[r.jsx(a,{style:{border:"grey solid 1px",flex:"1 1 50%"},viewport:h,showVerticalScrollbar:!1,onScrollViewport:e=>{l.current?.scrollTo(e),s.current?.scrollTo({top:e.top})},children:r.jsx(d,{...p,style:{width:"100%",height:"100%"},onViewportChange:e=>{n(e),c(i=>({...i,top:e.top}))},ref:l,renderCell:f})}),r.jsx(a,{style:{border:"grey solid 1px",flex:"1 1 50%"},viewport:g,onScrollViewport:e=>{l.current?.scrollTo({top:e.top}),s.current?.scrollTo(e)},children:r.jsx(d,{style:{width:"100%",height:"100%"},...p,onViewportChange:e=>{n(i=>({...i,top:e.top})),c(e)},ref:s,renderCell:f})})]})})},o=w.bind({});o.args={columnCount:200,rowCount:200};const C={title:"Scrollable Grid",parameters:{controls:{sort:"requiredFirst"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [viewportTopLeft, setViewPortTopLeft] = useState<ScrollableViewport>(null);
  const [viewportTopRight, setViewPortTopRight] = useState<ScrollableViewport>(null);
  const gridRefTopLeft = useRef<IGridElement>(null);
  const gridRefTopRight = useRef<IGridElement>(null);
  return <div className="storybook-container">
      <div style={{
      display: "flex"
    }}>
      <ScrollPane style={{
        border: 'grey solid 1px',
        flex: "1 1 50%"
      }} viewport={viewportTopLeft} showVerticalScrollbar={false} // We don't show the first vertical scroll bar
      onScrollViewport={scrollPosition => {
        gridRefTopLeft.current?.scrollTo(scrollPosition); // scroll ourself
        gridRefTopRight.current?.scrollTo({
          top: scrollPosition.top
        });
      }}>
        <Grid {...rest} style={{
          width: '100%',
          height: '100%'
        }} onViewportChange={v => {
          setViewPortTopLeft(v);
          setViewPortTopRight(prev => {
            return {
              ...prev,
              top: v.top
            };
          });
        }} ref={gridRefTopLeft} renderCell={sharedCellRenderer} />
      </ScrollPane>
      <ScrollPane style={{
        border: 'grey solid 1px',
        flex: "1 1 50%"
      }} viewport={viewportTopRight} onScrollViewport={scrollPosition => {
        gridRefTopLeft.current?.scrollTo({
          top: scrollPosition.top
        });
        gridRefTopRight.current?.scrollTo(scrollPosition); // scroll ourself
      }}>
        <Grid style={{
          width: '100%',
          height: '100%'
        }} {...rest} onViewportChange={v => {
          setViewPortTopLeft(prev => {
            return {
              ...prev,
              top: v.top
            };
          });
          setViewPortTopRight(v);
        }} ref={gridRefTopRight} renderCell={sharedCellRenderer} />
      </ScrollPane>
      </div>
    </div>;
}`,...o.parameters?.docs?.source}}};const j=["SplitScrollable"];export{o as SplitScrollable,j as __namedExportsOrder,C as default};
