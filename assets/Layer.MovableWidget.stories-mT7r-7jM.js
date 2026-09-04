import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,R as o,Y as s,l as c,s as l}from"./esm-BcpaeSfa.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),a(),d=r(),f={rowStart:2,colStart:1,rowEnd:6,colEnd:4},p=e=>{let{columnCount:t,rowCount:n,...r}=e,[a,p]=(0,u.useState)(f),[m,h]=(0,u.useState)(!1),g=(0,u.useCallback)(e=>{let{key:t,...n}=e;return(0,d.jsx)(l,{...n},t)},[]);return(0,d.jsx)(`div`,{className:`storybook-container`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`4px 6px`},children:[`Drag the note anywhere — it follows the pointer live. `,(0,d.jsx)(`strong`,{children:`range`}),` `,`(`,a.rowStart,`,`,a.colStart,`)…(`,a.rowEnd,`,`,a.colEnd,`)`]}),(0,d.jsx)(i,{...r,columnCount:t,rowCount:n,style:{flex:`1 1 100%`,border:`1px solid black`},renderCells:g,showGridLines:!0,children:(0,d.jsx)(c,{children:(0,d.jsx)(s,{range:a,onDragStateChange:h,onDragMove:e=>p(e),children:(0,d.jsxs)(o,{range:a,style:{display:`flex`,flexDirection:`column`,borderRadius:8,overflow:`hidden`,background:`#FFF8C5`,border:`1px solid #E6D88A`,boxShadow:m?`0 10px 24px rgba(0,0,0,0.28)`:`0 2px 6px rgba(0,0,0,0.18)`,transform:m?`scale(1.02)`:`scale(1)`,transition:`box-shadow 120ms ease`,font:`13px/1.4 system-ui, sans-serif`,color:`#5C4A00`,pointerEvents:`none`},children:[(0,d.jsxs)(`div`,{style:{padding:`6px 10px`,background:`#F4E58A`,borderBottom:`1px solid #E6D88A`,fontWeight:600,display:`flex`,alignItems:`center`,gap:6},children:[(0,d.jsx)(`span`,{style:{fontSize:14},children:`📌`}),` Sticky note`]}),(0,d.jsx)(`div`,{style:{padding:`8px 10px`,flex:`1 1 auto`,pointerEvents:`auto`,userSelect:`text`,cursor:`text`},onPointerDown:e=>e.stopPropagation(),children:`Grab the header to move me. This body is just regular selectable text.`})]})})},`note`)})]})})},m=p.bind({}),m.args={columnCount:20,rowCount:20},m.storyName=`Movable widget`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    ...rest
  } = props;
  const [range, setRange] = useState<RangeCoords>(INITIAL_RANGE);
  const [dragging, setDragging] = useState(false);
  const renderCells = useCallback((cellProps: CellRendererProps) => {
    const {
      key,
      ...cellRest
    } = cellProps;
    return <DefaultCellRenderer key={key} {...cellRest} />;
  }, []);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        fontFamily: 'monospace',
        fontSize: 12,
        padding: '4px 6px'
      }}>
          Drag the note anywhere — it follows the pointer live. <strong>range</strong>{' '}
          ({range.rowStart},{range.colStart})…({range.rowEnd},{range.colEnd})
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} renderCells={renderCells} showGridLines={true}>
          {/* One Layer for the note feature (law 4: grid children are Layers). */}
          <Layer key="note">
            <Draggable range={range}
          // Drives the drag affordance (shadow/scale). Use onDragStateChange, NOT onDragStart+onDragEnd:
          // onDragEnd fires only on an actual move, so a press-with-no-move would never clear \`dragging\`
          // and the shadow would stay lit. onDragStateChange fires true on press / false on release, always.
          onDragStateChange={setDragging} onDragMove={to => setRange(to)}>
            {/* The widget card — a VirtualDiv (a real div placed at the range). The card + header are
                pointer-events:none, so a press there falls through to the move grip beneath — grab the
                header to slide the note. The body (below) opts back into pointer-events and stops
                propagation, so it's regular selectable text, not a handle. */}
            <VirtualDiv range={range} style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 8,
              overflow: 'hidden',
              background: '#FFF8C5',
              border: '1px solid #E6D88A',
              boxShadow: dragging ? '0 10px 24px rgba(0,0,0,0.28)' : '0 2px 6px rgba(0,0,0,0.18)',
              transform: dragging ? 'scale(1.02)' : 'scale(1)',
              // Only the shadow transitions; \`transform\` now also carries placement (VirtualDiv
              // composes it), so transitioning it would make the drag lag behind the pointer.
              transition: 'box-shadow 120ms ease',
              font: '13px/1.4 system-ui, sans-serif',
              color: '#5C4A00',
              pointerEvents: 'none'
            }}>
              <div style={{
                padding: '6px 10px',
                background: '#F4E58A',
                borderBottom: '1px solid #E6D88A',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                <span style={{
                  fontSize: 14
                }}>📌</span> Sticky note
              </div>
              {/* Regular selectable content — NOT a drag handle. stopPropagation (the one consume signal)
                  keeps the pointerdown from continuing down the stack to the grip beneath;
                  userSelect re-enables text selection (the grid root sets user-select:none). */}
              <div style={{
                padding: '8px 10px',
                flex: '1 1 auto',
                pointerEvents: 'auto',
                userSelect: 'text',
                cursor: 'text'
              }} onPointerDown={e => e.stopPropagation()}>
                Grab the header to move me. This body is just regular selectable text.
              </div>
            </VirtualDiv>
            </Draggable>
          </Layer>
        </Grid>
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`MovableWidget`]}))();export{m as MovableWidget,g as __namedExportsOrder,h as default};