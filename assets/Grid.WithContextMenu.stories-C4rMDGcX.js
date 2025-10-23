import{j as o}from"./index-BiBgeh3u.js";import{r as d}from"./iframe-mGP4b_Fh.js";import{m as f,r as C}from"./index-CXJVXQGg.js";import"./RelaxedChangeTextField-De8M6wFd.js";import{s as v}from"./SimpleCellRenderer-D4BHS_e_.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CdE0ylvR.js";import"./index-CmvF348R.js";const w=({left:i,top:s,rowIndex:n,colIndex:r})=>o.jsx("div",{style:{left:i,top:s,position:"absolute",padding:8,background:"white",boxShadow:"0 1px 2px 3px rgba(0,0,0,0.2)"},children:o.jsxs("div",{children:["You selected ",n,": ",r]})}),g=i=>{const{...s}=i,n=d.useRef(null),[r,l]=d.useState(null),{renderOverlay:u,selection:P,...m}=f({gridRef:n});return o.jsxs("div",{className:"storybook-container",children:[o.jsx(C,{...s,ref:n,renderCell:v,onContextMenu:e=>{const c=n.current.getViewFromClient(e.clientX,e.clientY),a=n.current.getRelativePointFromClient(e.clientX,e.clientY);if(!c)return;const{rowIndex:p,colIndex:x}=c.getCellCoordsFromClient(e.clientX,e.clientY);l({left:a.x+3,top:a.y+3,rowIndex:p,colIndex:x}),e.preventDefault()},onPointerDown:e=>{l(null),m.onPointerDown(e)},renderOverlays:[u]}),r&&o.jsx(w,{...r})]})},t=g.bind({});t.args={columnCount:200,rowCount:200};t.storyName="with Context Menu";const E={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const {
    // commands: commandsSelection,
    renderOverlay: renderSelection,
    selection,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef
  });
  return <div className="storybook-container">
      <Grid {...rest} ref={gridRef} renderCell={sharedCellRenderer}
    // context menu here
    onContextMenu={e => {
      // We get the view
      const view = gridRef.current.getViewFromClient(e.clientX, e.clientY);
      // now we get the offset since we are adding menu as absolute
      const relativePoint = gridRef.current.getRelativePointFromClient(e.clientX, e.clientY);
      if (!view) return;
      // get the coords to display
      const {
        rowIndex,
        colIndex
      } = view.getCellCoordsFromClient(e.clientX, e.clientY);
      setContextMenuPosition({
        left: relativePoint.x + 3,
        // offset by our current border
        top: relativePoint.y + 3,
        rowIndex,
        colIndex
      });
      e.preventDefault();
    }}
    // onKeyDown={(e: React.KeyboardEvent<any>) => {
    //   commandsSelection.onKeyDown(e);
    // }}
    onPointerDown={(e: React.PointerEvent<any>) => {
      setContextMenuPosition(null); // context menu here, notice it's before we pass to selection
      selectionProps.onPointerDown(e);
    }} renderOverlays={[renderSelection]} />
      {contextMenuPosition && <ContextMenu {...contextMenuPosition} /> /* note - that this sits outsize of grid */}
    </div>;
}`,...t.parameters?.docs?.source}}};const X=["GridWithContextMenu"];export{t as GridWithContextMenu,X as __namedExportsOrder,E as default};
