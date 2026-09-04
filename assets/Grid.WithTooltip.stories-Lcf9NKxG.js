import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,N as a,h as o}from"./esm-BcpaeSfa.js";import{b as s,t as c}from"./material-rHrZ_Y8N.js";import{a as l,n as u,t as d}from"./components-DMcoRMO1.js";var f,p,m,h,g,_;e((()=>{f=t(n(),1),c(),a(),d(),p=r(),m=e=>{let{columnCount:t=200,rowCount:n=200,...r}=e,a=(0,f.useRef)(null),c=(0,f.useMemo)(()=>new i({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1})}),[n,t]),[d,m]=(0,f.useState)(),h=f.useRef({x:0,y:0,width:0,height:0}),g=f.useRef(null),_=e=>{let t=a.current.getPaneFromClient(e.clientX,e.clientY);if(!t)return;let n=t.getCellFromPointer(e.clientX,e.clientY),r=t.getPanePointFromPointer(0,0),i=t.getMetrics(),o=i.getColOffset(n.colIndex)-r.x,s=i.getRowOffset(n.rowIndex)-r.y,c=i.getColOffset(n.colIndex+1)-r.x,l=i.getRowOffset(n.rowIndex+1)-r.y;h.current={x:o,y:s,width:c-o,height:l-s},m(`This is a hover text for (${n.rowIndex}, ${n.colIndex})`),g.current!==null&&g.current.update()};return(0,p.jsx)(s,{arrow:!0,title:(0,p.jsxs)(`a`,{href:`https://www.sheetxl.com`,children:[`Hover over `,d]}),placement:`right`,slotProps:{popper:{popperRef:g,anchorEl:{getBoundingClientRect:()=>new DOMRect(h.current.x,h.current.y,h.current.width,h.current.height)},modifiers:[{name:`offset`,options:{offset:[0,10]}}]}},children:(0,p.jsx)(`div`,{className:`storybook-container`,children:(0,p.jsx)(u,{...r,ref:a,columnCount:t,rowCount:n,renderCells:l,onPointerMove:_,children:(0,p.jsx)(o,{selection:c},`selection`)})})})},h=m.bind({}),h.args={columnCount:200,rowCount:200},h.storyName=`Tooltip`,g={title:`Grid`,component:h,parameters:{controls:{sort:`requiredFirst`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount = 200,
    rowCount = 200,
    ...rest
  } = props as any;
  const gridRef = useRef<IGrid>(null);
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    })
  }), [rowCount, columnCount]);
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
    const view = gridRef.current.getPaneFromClient(e.clientX, e.clientY);
    // now we get the offset since we are adding menu as absolute
    if (!view) return;
    // get the coords to display
    const coords = view.getCellFromPointer(e.clientX, e.clientY);
    const point = view.getPanePointFromPointer(0, 0); //e.clientX, e.clientY);

    const metrics = view.getMetrics();
    // We want our tooltip to snap to be to the right or the cell
    const x = metrics.getColOffset(coords.colIndex) - point.x;
    const y = metrics.getRowOffset(coords.rowIndex) - point.y;
    const right = metrics.getColOffset(coords.colIndex + 1) - point.x;
    const bottom = metrics.getRowOffset(coords.rowIndex + 1) - point.y;
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
  return <Tooltip arrow
  // disableInteractive
  title={<a href="https://www.sheetxl.com">Hover over {hoverText}</a>} placement="right" //right"
  slotProps={{
    popper: {
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
    }
  }}>
      <div className="storybook-container">
        <Grid {...rest} ref={gridRef} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} onPointerMove={handlePointerMove}>
          <SelectionLayer key="selection" selection={selection} />
        </Grid>
      </div>
    </Tooltip>;
}`,...h.parameters?.docs?.source}}},_=[`GridWithTooltip`]}))();export{h as GridWithTooltip,_ as __namedExportsOrder,g as default};