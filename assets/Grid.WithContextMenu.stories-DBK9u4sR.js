import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{A as i,N as a,h as o}from"./esm-BcpaeSfa.js";import{a as s,n as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),a(),l(),d=r(),f=({left:e,top:t,rowIndex:n,colIndex:r})=>(0,d.jsx)(`div`,{style:{left:e,top:t,position:`absolute`,padding:8,background:`white`,boxShadow:`0 1px 2px 3px rgba(0,0,0,0.2)`},children:(0,d.jsxs)(`div`,{children:[`You selected `,n,`: `,r]})}),p=e=>{let{columnCount:t=200,rowCount:n=200,...r}=e,a=(0,u.useRef)(null),[l,p]=(0,u.useState)(null),m=(0,u.useMemo)(()=>new i({getBounds:()=>({rowStart:0,colStart:0,rowEnd:n-1,colEnd:t-1})}),[n,t]);return(0,d.jsxs)(`div`,{className:`storybook-container`,children:[(0,d.jsx)(c,{...r,ref:a,columnCount:t,rowCount:n,renderCells:s,onContextMenu:e=>{let t=a.current.getPaneFromClient(e.clientX,e.clientY);if(!t)return;let{rowIndex:n,colIndex:r}=t.getCellFromPointer(e.clientX,e.clientY),i=a.current.getBoundingClientRect();p({left:e.clientX-i.x+3,top:e.clientY-i.y+3,rowIndex:n,colIndex:r}),e.preventDefault()},onPointerDown:e=>{p(null)},children:(0,d.jsx)(o,{selection:m},`selection`)}),l&&(0,d.jsx)(f,{...l})]})},m=p.bind({}),m.args={columnCount:200,rowCount:200},m.storyName=`Context Menu`,h={title:`Grid`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount = 200,
    rowCount = 200,
    ...rest
  } = props as any;
  const gridRef = useRef<IGrid>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: rowCount - 1,
      colEnd: columnCount - 1
    })
  }), [rowCount, columnCount]);
  return <div className="storybook-container">
      <Grid {...rest} ref={gridRef} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer}
    // context menu here
    onContextMenu={e => {
      // We get the view
      const view = gridRef.current.getPaneFromClient(e.clientX, e.clientY);
      if (!view) return;
      // get the coords to display
      const {
        rowIndex,
        colIndex
      } = view.getCellFromPointer(e.clientX, e.clientY);
      // the menu is positioned absolutely, so convert client → grid-relative pixels off the element
      const rect = gridRef.current.getBoundingClientRect();
      setContextMenuPosition({
        left: e.clientX - rect.x + 3,
        // offset by our current border
        top: e.clientY - rect.y + 3,
        rowIndex,
        colIndex
      });
      e.preventDefault();
    }} onPointerDown={(_e: React.PointerEvent<any>) => {
      setContextMenuPosition(null); // dismiss the context menu; SelectionLayer handles selection itself
    }}>
        <SelectionLayer key="selection" selection={selection} />
      </Grid>
      {contextMenuPosition && <ContextMenu {...contextMenuPosition} /> /* note - that this sits outsize of grid */}
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`GridWithContextMenu`]}))();export{m as GridWithContextMenu,g as __namedExportsOrder,h as default};