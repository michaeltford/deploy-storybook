import{j as n}from"./index-DWKpDUR-.js";import{r as d}from"./iframe-CpXbX42E.js";import{b as f,s as v}from"./index-C3bn2QFg.js";import"./RelaxedChangeTextField-2LOONziU.js";import{s as C}from"./SimpleCellRenderer-DxVH4jYM.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-DOP-sD40.js";import"./index-C4mmmnnj.js";const w=({left:i,top:s,rowIndex:o,colIndex:r})=>n.jsx("div",{style:{left:i,top:s,position:"absolute",padding:8,background:"white",boxShadow:"0 1px 2px 3px rgba(0,0,0,0.2)"},children:n.jsxs("div",{children:["You selected ",o,": ",r]})}),g=i=>{const{...s}=i,o=d.useRef(null),[r,l]=d.useState(null),{overlay:u,selection:y,...m}=f({gridRef:o});return n.jsxs("div",{className:"storybook-container",children:[n.jsx(v,{...s,ref:o,cellRenderer:C,onContextMenu:e=>{const c=o.current.getViewFromClient(e.clientX,e.clientY),a=o.current.getRelativePointFromClient(e.clientX,e.clientY);if(!c)return;const{rowIndex:p,colIndex:x}=c.getCellCoordsFromClient(e.clientX,e.clientY);l({left:a.x+3,top:a.y+3,rowIndex:p,colIndex:x}),e.preventDefault()},onPointerDown:e=>{l(null),m.onPointerDown(e)},overlays:[u]}),r&&n.jsx(w,{...r})]})},t=g.bind({});t.args={columnCount:200,rowCount:200};t.storyName="with Context Menu";const E={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const {
    // commands: commandsSelection,
    overlay: overlaySelection,
    selection,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef
  });
  return <div className="storybook-container">
      <Grid {...rest} ref={gridRef} cellRenderer={sharedCellRenderer}
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
    }} overlays={[overlaySelection]} />
      {contextMenuPosition && <ContextMenu {...contextMenuPosition} /> /* note - that this sits outsize of grid */}
    </div>;
}`,...t.parameters?.docs?.source}}};const X=["GridWithContextMenu"];export{t as GridWithContextMenu,X as __namedExportsOrder,E as default};
