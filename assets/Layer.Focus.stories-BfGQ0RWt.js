import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{E as i,N as a,R as o,l as s}from"./esm-BcpaeSfa.js";import{a as c,t as l}from"./components-DMcoRMO1.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),a(),l(),d=r(),f={colStart:3,rowStart:3,colEnd:8,rowEnd:7},p=e=>{let{...t}=e,[n,r]=(0,u.useState)([]),[a,l]=(0,u.useState)(!1),[p,m]=(0,u.useState)(!1),h=(0,u.useRef)(null),g=e=>r(t=>[...t,e]);return(0,d.jsxs)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,padding:`8px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,d.jsx)(`button`,{onClick:()=>r([]),children:`Clear log`}),(0,d.jsx)(`button`,{onClick:()=>h.current?.focus(),children:`grid.focus() → surface`}),(0,d.jsxs)(`label`,{style:{display:`flex`,gap:`4px`,alignItems:`center`},children:[(0,d.jsx)(`input`,{type:`checkbox`,checked:p,onChange:e=>m(e.target.checked)}),`widget consumes (stopPropagation)`]}),(0,d.jsxs)(`span`,{style:{opacity:.7},children:[`Tab into the grid (`,(0,d.jsx)(`strong`,{children:`surface`}),`), Tab again (`,(0,d.jsx)(`strong`,{children:`widget`}),`), then press a key.`]}),(0,d.jsxs)(`span`,{style:{fontFamily:`monospace`},children:[`focus: `,(0,d.jsx)(`strong`,{children:a?`widget`:`surface (grid)`})]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flex:1,gap:`8px`,minHeight:0},children:[(0,d.jsxs)(i,{ref:h,...t,style:{position:`relative`,flex:1},renderCells:c,showGridLines:!0,children:[(0,d.jsx)(s,{onKeyDown:()=>g(`floor (Layer tap) ← key`)}),(0,d.jsx)(s,{children:(0,d.jsx)(o,{range:f,tabIndex:0,style:{background:`rgba(0,120,215,0.12)`,border:`2px solid rgb(0,120,215)`,borderRadius:6,boxSizing:`border-box`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`rgb(0,90,170)`,fontWeight:600,cursor:`pointer`,userSelect:`none`,outline:a?`3px solid rgb(0,120,215)`:`none`,outlineOffset:`2px`},onFocus:()=>l(!0),onBlur:()=>l(!1),onKeyDown:e=>{g(`widget (VirtualDiv) ← key`),p&&e.stopPropagation()},children:`Focusable widget`})})]}),(0,d.jsx)(`pre`,{style:{width:300,margin:0,padding:8,overflow:`auto`,background:`rgba(0,0,0,0.04)`,border:`1px solid rgba(0,0,0,0.1)`,fontSize:12,lineHeight:1.5},children:n.length?n.join(`
`):`(Tab in, then press a key)`})]})]})},m=p.bind({}),m.args={columnCount:50,rowCount:100},m.storyName=`Focus (surface vs widget)`,h={title:`Layers`,component:m,parameters:{controls:{sort:`requiredFirst`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const [log, setLog] = useState<string[]>([]);
  const [widgetFocused, setWidgetFocused] = useState<boolean>(false);
  const [consume, setConsume] = useState<boolean>(false);
  const gridRef = useRef<IGrid>(null);
  const append = (id: string) => setLog(prev => [...prev, id]);
  return <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      padding: '8px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <button onClick={() => setLog([])}>Clear log</button>
        <button onClick={() => gridRef.current?.focus()}>grid.focus() → surface</button>
        <label style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
          <input type="checkbox" checked={consume} onChange={e => setConsume(e.target.checked)} />
          widget consumes (stopPropagation)
        </label>
        <span style={{
        opacity: 0.7
      }}>
          Tab into the grid (<strong>surface</strong>), Tab again (<strong>widget</strong>), then press a key.
        </span>
        <span style={{
        fontFamily: 'monospace'
      }}>
          focus: <strong>{widgetFocused ? 'widget' : 'surface (grid)'}</strong>
        </span>
      </div>

      <div style={{
      display: 'flex',
      flex: 1,
      gap: '8px',
      minHeight: 0
    }}>
        <Grid ref={gridRef} {...rest} style={{
        position: 'relative',
        flex: 1
      }} renderCells={sharedCellRenderer} showGridLines={true}>
          {/* The floor: a grid-wide observe-tier tap (a non-visual Layer). No element, no position —
              it hears keys after the widgets above it, whatever is focused. */}
          <Layer onKeyDown={() => append("floor (Layer tap) ← key")} />

          {/* A focusable widget — an ordinary VirtualDiv with tabIndex, hosted in its own Layer.
              Its keydown bubbles on down the stack unless it calls stopPropagation (the one
              consume signal — toggled by the checkbox). */}
          <Layer>
            <VirtualDiv range={WIDGET_RANGE} tabIndex={0} style={{
            background: 'rgba(0,120,215,0.12)',
            border: '2px solid rgb(0,120,215)',
            borderRadius: 6,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgb(0,90,170)',
            fontWeight: 600,
            cursor: 'pointer',
            userSelect: 'none',
            // Focus ring (the grid suppresses the default outline).
            outline: widgetFocused ? '3px solid rgb(0,120,215)' : 'none',
            outlineOffset: '2px'
          }} onFocus={() => setWidgetFocused(true)} onBlur={() => setWidgetFocused(false)} onKeyDown={event => {
            append("widget (VirtualDiv) ← key");
            if (consume) event.stopPropagation();
          }}>
              Focusable widget
            </VirtualDiv>
          </Layer>
        </Grid>

        <pre style={{
        width: 300,
        margin: 0,
        padding: 8,
        overflow: 'auto',
        background: 'rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.1)',
        fontSize: 12,
        lineHeight: 1.5
      }}>
          {log.length ? log.join('\\n') : '(Tab in, then press a key)'}
        </pre>
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}},g=[`GridLayerFocus`]}))();export{m as GridLayerFocus,g as __namedExportsOrder,h as default};