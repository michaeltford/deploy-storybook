import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Box-7IAujWEx.js";import{R as o,z as s}from"./Grow-DGf1J21W.js";import{i as c,n as l,r as u,t as d}from"./FormControlLabel-BsEXStn-.js";import{i as f,n as p,r as m,t as h}from"./RelaxedChangeTextField-Dq2KTjm9.js";import{i as g,t as _}from"./esm-CgKlu4AS.js";var v,y,b,x,S,C;function w(){return(w=t((()=>{v=e(n(),1),i(),s(),c(),l(),g(),p(),f(),y=r(),b=()=>{let[e,t]=(0,v.useState)(null),n=(0,v.useRef)(null);return(0,y.jsxs)(a,{sx:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,y.jsxs)(o,{sx:{flex:`0`,display:`flex`,alignItems:`center`,flexDirection:`row`,m:.5,px:2,py:1,gap:2,rowGap:1},children:[(0,y.jsx)(m,{workbook:e,refIWorkbookElement:n,createWidget:e=>{let{range:t}=e,n=t?.getCells()[0][0];return(0,y.jsx)(h,{sx:{width:`200px`,...n?.getStyle().getFill().toCSS()},size:`small`,slotProps:{htmlInput:{sx:{paddingTop:`3.5px`,paddingBottom:`3.5px`,color:n?.getStyle().getFont().getColor().toCSS()}}},disabled:t?.isInvalid()||!n?.isEditAllowed(),value:n?.getText(),onChange:e=>{t.setValue(e.target.value,{autoFit:!0,description:`Type '${e.target.value}' from Widget`})}})}}),(0,y.jsx)(m,{workbook:e,refIWorkbookElement:n,createWidget:({range:e})=>{let t=e?.getCells()[0][0];return(0,y.jsx)(d,{disabled:e?.isInvalid()||!t?.isEditAllowed(),control:(0,y.jsx)(u,{sx:{padding:`1px`,marginRight:`8px`},checked:!!t?.getValue(),onChange:()=>{e.setValue(!t.getValue(),{autoFit:!0,description:`Toggle from Widget`})}}),label:`Is Checked`,labelPlacement:`end`})}})]}),(0,y.jsx)(o,{sx:{position:`relative`,flex:`1`,m:.5,display:`flex`,alignItems:`stretch`},children:(0,y.jsx)(_,{workbook:e,onWorkbookChange:e=>t(e),ref:n,propsDocumentTitle:{placeHolder:`Untitled Widget Workbook`},sx:{flex:`1 1 100%`}})})]})},x=b.bind({}),x.args={},x.storyName=`With Widgets`,S={title:`Studio/With Widgets`,component:_},C=[`StudioWithWidgets`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [workbook, setWorkbook] = useState<IWorkbook>(null);
  // The widgets don't bind to the UI element but this is required for the goto link
  const refIWorkbookElement = useRef<IWorkbookElement>(null);
  return <Box sx={{
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column'
  }}>
      <Paper sx={{
      flex: '0',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      m: 0.5,
      px: 2,
      py: 1,
      gap: 2,
      rowGap: 1
    }}>
        <BoundedWidget workbook={workbook} refIWorkbookElement={refIWorkbookElement} createWidget={(props: BoundedWidgetElementProps) => {
        const {
          range
        } = props;
        const cell: ICell = range?.getCells()[0][0]; // guaranteed to be non null
        return <RelaxedChangeTextField // only fires onChange on enter or blur
        sx={{
          width: '200px',
          ...cell?.getStyle().getFill().toCSS()
        }} size="small" slotProps={{
          htmlInput: {
            sx: {
              paddingTop: '3.5px',
              paddingBottom: '3.5px',
              color: cell?.getStyle().getFont().getColor().toCSS()
            }
          }
        }} disabled={range?.isInvalid() || !cell?.isEditAllowed()} value={cell?.getText()} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          range.setValue(event.target.value, {
            autoFit: true,
            description: \`Type '\${event.target.value}' from Widget\`
          });
        }} />;
      }} />
        <BoundedWidget workbook={workbook} refIWorkbookElement={refIWorkbookElement} createWidget={({
        range
      }) => {
        const cell = range?.getCells()[0][0]; // guaranteed to be non null
        // const update = range?.update;
        return <FormControlLabel disabled={range?.isInvalid() || !cell?.isEditAllowed()} control={<Checkbox sx={{
          padding: '1px',
          marginRight: '8px'
        }} checked={!!cell?.getValue()} // truthy check
        onChange={() => {
          range.setValue(!cell.getValue(), {
            autoFit: true,
            description: \`Toggle from Widget\`
          });
        }} />} label="Is Checked" labelPlacement="end" />;
      }} />
      </Paper>
      <Paper sx={{
      position: "relative",
      flex: "1",
      m: 0.5,
      display: 'flex',
      alignItems: 'stretch'
    }}>
        <Studio workbook={workbook} onWorkbookChange={workbook => setWorkbook(workbook)} ref={refIWorkbookElement as any} propsDocumentTitle={{
        placeHolder: 'Untitled Widget Workbook'
      }} sx={{
        flex: '1 1 100%'
      }} />
      </Paper>
    </Box>;
}`,...x.parameters?.docs?.source}}}})))()}w();export{x as StudioWithWidgets,C as __namedExportsOrder,S as default};