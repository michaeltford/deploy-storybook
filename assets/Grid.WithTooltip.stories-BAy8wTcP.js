import{j as c}from"./index-DWKpDUR-.js";import{r as p,m as u}from"./iframe-CpXbX42E.js";import{b as T,s as b}from"./index-C3bn2QFg.js";import"./RelaxedChangeTextField-2LOONziU.js";import{s as I}from"./SimpleCellRenderer-DxVH4jYM.js";import{T as O}from"./Tooltip-CDPNXS5Z.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-DOP-sD40.js";import"./index-C4mmmnnj.js";const E=h=>{const{...m}=h,l=p.useRef(null),[w,g]=p.useState(null),[x,R]=p.useState(),n=u.useRef({x:0,y:0,width:0,height:0}),a=u.useRef(null),y=e=>{const r=l.current.getViewFromClient(e.clientX,e.clientY);if(!r)return;const o=r.getCellCoordsFromClient(e.clientX,e.clientY),s=r.getRelativePointFromClient(0,0),i=r.getLayout(),d=i.getColOffset(o.colIndex)-s.x,f=i.getRowOffset(o.rowIndex)-s.y,P=i.getColOffset(o.colIndex+1)-s.x,S=i.getRowOffset(o.rowIndex+1)-s.y;n.current={x:d,y:f,width:P-d,height:S-f},R(`This is a hover text for (${o.rowIndex}, ${o.colIndex})`),a.current!==null&&a.current.update()},{overlay:v,...C}=T({gridRef:l,selection:w,onSelectionChange:e=>g(e)});return c.jsx(O,{arrow:!0,title:c.jsxs("a",{href:"https://www.sheetxl.com",children:["Hover over ",x]}),placement:"right",PopperProps:{popperRef:a,anchorEl:{getBoundingClientRect:()=>new DOMRect(n.current.x,n.current.y,n.current.width,n.current.height)},modifiers:[{name:"offset",options:{offset:[0,10]}}]},children:c.jsx("div",{className:"storybook-container",children:c.jsx(b,{...m,ref:l,cellRenderer:I,onPointerDown:e=>{C.onPointerDown(e)},onPointerMove:y,overlays:[v]})})})},t=E.bind({});t.args={columnCount:200,rowCount:200};t.storyName="with Tooltip";const N={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
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
    overlay: overlaySelection,
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
        <Grid {...rest} ref={gridRef} cellRenderer={sharedCellRenderer}
      // onKeyDown={(e: React.KeyboardEvent<any>) => {
      //   commandsSelection.onKeyDown(e);
      // }}
      onPointerDown={(e: React.PointerEvent<any>) => {
        selectionProps.onPointerDown(e);
      }} onPointerMove={handlePointerMove} overlays={[overlaySelection]} />
      </div>
    </Tooltip>;
}`,...t.parameters?.docs?.source}}};const B=["GridWithTooltip"];export{t as GridWithTooltip,B as __namedExportsOrder,N as default};
