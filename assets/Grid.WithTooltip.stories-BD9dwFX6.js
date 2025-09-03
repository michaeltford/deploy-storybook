import{j as c}from"./index-BkEiYHzc.js";import{r as p,m as u}from"./iframe-0eTU46SU.js";import{y as T,c as I}from"./index-Bv7bgGcI.js";import"./RelaxedChangeTextField-DxEY1TwQ.js";import{s as b}from"./SimpleCellRenderer-B0CT_mCd.js";import{T as O}from"./Tooltip-DkPcMJmj.js";import"./index-Z2-nrzLL.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DNdSmOrT.js";import"./client-BARKspf1.js";import"./index-DpKgPYal.js";import"./TextField-B6vnsKfh.js";const E=h=>{const{...m}=h,l=p.useRef(null),[w,g]=p.useState(null),[x,y]=p.useState(),n=u.useRef({x:0,y:0,width:0,height:0}),a=u.useRef(null),R=e=>{const r=l.current.getViewFromClient(e.clientX,e.clientY);if(!r)return;const o=r.getCellCoordsFromClient(e.clientX,e.clientY),i=r.getRelativePointFromClient(0,0),s=r.getLayout(),d=s.getColOffset(o.colIndex)-i.x,f=s.getRowOffset(o.rowIndex)-i.y,P=s.getColOffset(o.colIndex+1)-i.x,S=s.getRowOffset(o.rowIndex+1)-i.y;n.current={x:d,y:f,width:P-d,height:S-f},y(`This is a hover text for (${o.rowIndex}, ${o.colIndex})`),a.current!==null&&a.current.update()},{overlay:v,...C}=T({gridRef:l,selection:w,onSelectionChange:e=>g(e)});return c.jsx(O,{arrow:!0,title:c.jsxs("a",{href:"https://www.sheetxl.com",children:["Hover over ",x]}),placement:"right",PopperProps:{popperRef:a,anchorEl:{getBoundingClientRect:()=>new DOMRect(n.current.x,n.current.y,n.current.width,n.current.height)},modifiers:[{name:"offset",options:{offset:[0,10]}}]},children:c.jsx("div",{className:"storybook-container",children:c.jsx(I,{...m,ref:l,cellRenderer:b,onPointerDown:e=>{C.onPointerDown(e)},onPointerMove:R,overlays:[v]})})})},t=E.bind({});t.args={columnCount:200,rowCount:200};t.storyName="with Tooltip";const N={title:"Grid",component:t,parameters:{controls:{sort:"requiredFirst"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
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
