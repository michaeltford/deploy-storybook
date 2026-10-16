import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{U as r,W as i,n as a}from"./esm-uTuOMcSU.js";import{Z as o}from"./zqJOaweiXE9D8RY1-BXtGT3r7.js";import{d as s}from"./esm-D9igw9py.js";import{ut as c,x as l}from"./esm-BxkbVGb8.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{u=t(),s(),c(),r(),d=n(),f=e=>{let{maxColumns:t,maxRows:n,showRowHeaders:r,showColumnHeaders:s,...c}=e,[f]=(0,u.useState)(()=>{let e=new o;return e.setEntireSize({width:t,height:n}),e});return(0,d.jsx)(l,{style:{flex:`1`,minHeight:`400px`,width:`100%`,height:`100%`},sheet:f,layers:[(0,d.jsx)(a,{children:(0,d.jsxs)(i,{tabIndex:0,range:{colStart:2,rowStart:2,colEnd:5,rowEnd:6},style:{display:`flex`,flexDirection:`column`,borderRadius:8,overflow:`hidden`,background:`#FFF8C5`,border:`1px solid #E6D88A`,boxShadow:`0 2px 6px rgba(0,0,0,0.18)`,transition:`box-shadow 120ms ease`,font:`13px/1.4 system-ui, sans-serif`,color:`#5C4A00`},children:[(0,d.jsxs)(`div`,{style:{padding:`6px 10px`,background:`#F4E58A`,borderBottom:`1px solid #E6D88A`,fontWeight:600,display:`flex`,alignItems:`center`,gap:6},children:[(0,d.jsx)(`span`,{style:{fontSize:14},children:`📌`}),` Sticky note`]}),(0,d.jsx)(`div`,{style:{padding:`8px 10px`,flex:`1 1 auto`},children:`I am a sticky note.`})]})},`sticky`)],showRowHeaders:r,showColumnHeaders:s,...c})},p=f.bind({}),p.args={maxRows:200,maxColumns:200,showRowHeaders:!0,showColumnHeaders:!0},p.storyName=`with layers`,m={title:`Sheet/With Layers`,component:l,parameters:{controls:{sort:`requiredFirst`}}},h=[`SheetWithLayers`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    showRowHeaders,
    showColumnHeaders,
    ...rest
  } = props as any;
  const [sheet] = useState(() => {
    const sheet = new Sheet();
    sheet.setEntireSize({
      width: maxColumns,
      height: maxRows
    });
    return sheet;
  });
  return <SheetElement style={{
    // For Docs view we are 400px by 'full width'
    flex: "1",
    minHeight: "400px",
    width: "100%",
    height: "100%"
  }} sheet={sheet} // Required
  layers={[
  // Each layers[] item is a grid child, so it must be Layer-rooted (law 4: the flat stack);
  // the widget itself is a VirtualDiv — a real div placed at a range (hittable by default).
  <Layer key="sticky">
          <VirtualDiv tabIndex={0} range={{
      colStart: 2,
      rowStart: 2,
      colEnd: 5,
      rowEnd: 6
    }} style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      background: '#FFF8C5',
      border: '1px solid #E6D88A',
      boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
      // NOTE: do NOT transition \`transform\` — the box's scroll tracking IS its transform, so a
      // transform transition makes the note glide/lag on every scroll instead of staying anchored.
      transition: 'box-shadow 120ms ease',
      font: '13px/1.4 system-ui, sans-serif',
      color: '#5C4A00'
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
            <div style={{
        padding: '8px 10px',
        flex: '1 1 auto'
      }}>
              I am a sticky note.
            </div>
          </VirtualDiv>
        </Layer>]} showRowHeaders={showRowHeaders} showColumnHeaders={showColumnHeaders} {...rest} />;
}`,...p.parameters?.docs?.source}}}})))()}g();export{p as SheetWithLayers,h as __namedExportsOrder,m as default};