import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,h as a}from"./esm-COMwdbTt.js";import{H as o,ft as s,rt as c}from"./esm-CBSoBgXq.js";import{C as l,Et as u,J as d,Yt as f,n as p}from"./esm-CRLSzNYP.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{m=e(n(),1),i(),u(),o(),h=r(),g=()=>{let e=new a,t=e.getWorksheetAt(0);return t.getRange(`B2:D6`).setValues([[`Item`,`Qty`,`Price`],[`Apples`,4,1.2],[`Pears`,2,1.5],[`Plums`,6,.8],[`Figs`,3,2.4]]),t.getRange(`B2:D6`).addTable(!0).setName(`Fruit`),e},_={position:`relative`,height:420,width:`100%`},v=()=>{let e=(0,m.useMemo)(g,[]);return(0,h.jsx)(`div`,{style:_,children:(0,h.jsxs)(f,{workbook:e,children:[(0,h.jsx)(d,{surface:[`rowHeaders`,`cells`],children:(0,h.jsx)(p,{axis:`row`})}),(0,h.jsx)(d,{surface:[`columnHeaders`,`cells`],children:(0,h.jsx)(p,{axis:`column`})})]})})},y=v.bind({}),y.storyName=`Insert buttons`,b=e=>{let t=e.getWorksheet().getTables().getItems({name:`Fruit`,address:e})[0];return!t||e.getCoords().rowStart===t.getRange().getCoords().rowStart?null:e.getIntersect(t.getRange())},x=()=>{let e=(0,m.useMemo)(g,[]);return(0,h.jsx)(`div`,{style:_,children:(0,h.jsx)(f,{workbook:e,children:(0,h.jsx)(d,{surface:[`rowHeaders`,`cells`],children:(0,h.jsx)(p,{resolve:b})})})})},S=x.bind({}),S.storyName=`Insert into a table`,C=({row:e})=>{let t=l();return t===`rowHeaders`?(0,h.jsx)(c,{children:(0,h.jsx)(s,{range:{rowStart:e,colStart:0,rowEnd:e,colEnd:0},style:{pointerEvents:`none`,borderLeft:`4px solid #e8a33d`}})}):t===`cells`?(0,h.jsx)(c,{children:(0,h.jsx)(s,{range:{rowStart:e,colStart:0,rowEnd:e,colEnd:25},style:{pointerEvents:`none`,background:`rgba(232, 163, 61, 0.15)`}})}):null},w=()=>{let e=(0,m.useMemo)(g,[]);return(0,h.jsx)(`div`,{style:_,children:(0,h.jsx)(f,{workbook:e,children:(0,h.jsx)(d,{surface:[`rowHeaders`,`cells`],children:(0,h.jsx)(C,{row:3})})})})},T=w.bind({}),T.storyName=`A layer across surfaces`,E={title:`Sheet/Sheet Layers`,component:d},D=[`InsertButtons`,`InsertIntoTable`,`AcrossSurfaces`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const workbook = useMemo(createWorkbook, []);
  return <div style={frame}>
      <WorkbookElement workbook={workbook}>
        <SheetLayers surface={['rowHeaders', 'cells']}>
          <CellInsertLayer axis="row" />
        </SheetLayers>
        <SheetLayers surface={['columnHeaders', 'cells']}>
          <CellInsertLayer axis="column" />
        </SheetLayers>
      </WorkbookElement>
    </div>;
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const workbook = useMemo(createWorkbook, []);
  return <div style={frame}>
      <WorkbookElement workbook={workbook}>
        <SheetLayers surface={['rowHeaders', 'cells']}>
          <CellInsertLayer resolve={resolveTableRow} />
        </SheetLayers>
      </WorkbookElement>
    </div>;
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const workbook = useMemo(createWorkbook, []);
  return <div style={frame}>
      <WorkbookElement workbook={workbook}>
        <SheetLayers surface={['rowHeaders', 'cells']}>
          <FlaggedRow row={3} />
        </SheetLayers>
      </WorkbookElement>
    </div>;
}`,...T.parameters?.docs?.source}}}})))()}O();export{T as AcrossSurfaces,y as InsertButtons,S as InsertIntoTable,D as __namedExportsOrder,E as default};