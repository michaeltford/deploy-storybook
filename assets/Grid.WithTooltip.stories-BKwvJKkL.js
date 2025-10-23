import{j as c}from"./index-BiBgeh3u.js";import{r as d,g as u}from"./iframe-mGP4b_Fh.js";import{m as T,r as O}from"./index-CXJVXQGg.js";import"./RelaxedChangeTextField-De8M6wFd.js";import{s as I}from"./SimpleCellRenderer-D4BHS_e_.js";import{T as b}from"./Tooltip-CXxmTuYg.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CdE0ylvR.js";import"./index-CmvF348R.js";const E=h=>{const{...m}=h,l=d.useRef(null),[g,w]=d.useState(null),[x,R]=d.useState(),o=u.useRef({x:0,y:0,width:0,height:0}),a=u.useRef(null),y=e=>{const r=l.current.getViewFromClient(e.clientX,e.clientY);if(!r)return;const n=r.getCellCoordsFromClient(e.clientX,e.clientY),i=r.getRelativePointFromClient(0,0),s=r.getLayout(),p=s.getColOffset(n.colIndex)-i.x,f=s.getRowOffset(n.rowIndex)-i.y,P=s.getColOffset(n.colIndex+1)-i.x,S=s.getRowOffset(n.rowIndex+1)-i.y;o.current={x:p,y:f,width:P-p,height:S-f},R(`This is a hover text for (${n.rowIndex}, ${n.colIndex})`),a.current!==null&&a.current.update()},{renderOverlay:v,...C}=T({gridRef:l,selection:g,onSelectionChange:e=>w(e)});return c.jsx(b,{arrow:!0,title:c.jsxs("a",{href:"https://www.sheetxl.com",children:["Hover over ",x]}),placement:"right",PopperProps:{popperRef:a,anchorEl:{getBoundingClientRect:()=>new DOMRect(o.current.x,o.current.y,o.current.width,o.current.height)},modifiers:[{name:"offset",options:{offset:[0,10]}}]},children:c.jsx("div",{className:"storybook-container",children:c.jsx(O,{...m,ref:l,renderCell:I,onPointerDown:e=>{C.onPointerDown(e)},onPointerMove:y,renderOverlays:[v]})})})},t=E.bind({});t.args={columnCount:200,rowCount:200};t.storyName="with Tooltip";const N={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);
  const [selection, setSelection] = useState<SelectionCoords>(null);
  const [hoverText, setHoverText] = useState<string>();
  const positionRef = React.useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0
    // right: 0,
    // bottom: 0
  });
  const popperRef = React.useRef(null);
  const handlePointerMove = (e: React.PointerEvent<any>): void => {
    const view = gridRef.current.getViewFromClient(e.clientX, e.clientY);
    // now we get the offset since we are adding menu as absolute
    if (!view) return;
    // get the coords to display
    const coords = view.getCellCoordsFromClient(e.clientX, e.clientY);
    const point = view.getRelativePointFromClient(0, 0); //e.clientX, e.clientY);

    const layout = view.getLayout();
    // We want our tooltip to snap to be to the right or the cell
    const x = layout.getColOffset(coords.colIndex) - point.x;
    const y = layout.getRowOffset(coords.rowIndex) - point.y;
    const right = layout.getColOffset(coords.colIndex + 1) - point.x;
    const bottom = layout.getRowOffset(coords.rowIndex + 1) - point.y;
    positionRef.current = {
      x: x,
      y: y,
      width: right - x,
      height: bottom - y
    };
    setHoverText(\`This is a hover text for (\${coords.rowIndex}, \${coords.colIndex})\`);
    if (popperRef.current !== null) {
      popperRef.current.update();
    }
  };
  const {
    // commands: commandsSelection,
    renderOverlay: renderSelection,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef,
    selection,
    onSelectionChange: (selection: SelectionCoords) => setSelection(selection)
  });
  return <Tooltip arrow
  // disableInteractive
  title={<a href="https://www.sheetxl.com">Hover over {hoverText}</a>} placement="right" //right"
  PopperProps={{
    // style: { pointerEvents: 'none' },
    popperRef,
    anchorEl: {
      getBoundingClientRect: () => {
        return new DOMRect(positionRef.current.x, positionRef.current.y, positionRef.current.width, positionRef.current.height);
      }
    },
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, 10] // We offset so that we can mouse away in the tooltip's direction
      }
    }]
  }}>
      <div className="storybook-container">
        <Grid {...rest} ref={gridRef} renderCell={sharedCellRenderer}
      // onKeyDown={(e: React.KeyboardEvent<any>) => {
      //   commandsSelection.onKeyDown(e);
      // }}
      onPointerDown={(e: React.PointerEvent<any>) => {
        selectionProps.onPointerDown(e);
      }} onPointerMove={handlePointerMove} renderOverlays={[renderSelection]} />
      </div>
    </Tooltip>;
}`,...t.parameters?.docs?.source}}};const B=["GridWithTooltip"];export{t as GridWithTooltip,B as __namedExportsOrder,N as default};
