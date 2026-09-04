import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Et as i,en as a,nt as o,t as s,vt as c}from"./material-rHrZ_Y8N.js";import{i as l,n as u,r as d,t as f}from"./RelaxedChangeTextField-mkVxVCbY.js";import{Studio as p,n as m}from"./esm-DbuzZzq92.js";var h,g,_,v,y,b;e((()=>{h=t(n(),1),s(),m(),u(),l(),g=r(),_=()=>{let[e,t]=(0,h.useState)(null),n=(0,h.useRef)(null);return(0,g.jsxs)(i,{sx:{width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,g.jsxs)(a,{sx:{flex:`0`,display:`flex`,alignItems:`center`,flexDirection:`row`,m:.5,px:2,py:1,gap:2,rowGap:1},children:[(0,g.jsx)(d,{workbook:e,refIWorkbookElement:n,createWidget:e=>{let{range:t}=e,n=t?.getCells()[0][0];return(0,g.jsx)(f,{sx:{width:`200px`,...n?.getStyle().getFill().toCSS()},size:`small`,slotProps:{htmlInput:{sx:{paddingTop:`3.5px`,paddingBottom:`3.5px`,color:n?.getStyle().getFont().getColor().toCSS()}}},disabled:t?.isInvalid()||!n?.isEditAllowed(),value:n?.getText(),onChange:e=>{t.setValue(e.target.value,{autoFit:!0,description:`Type '${e.target.value}' from Widget`})}})}}),(0,g.jsx)(d,{workbook:e,refIWorkbookElement:n,createWidget:({range:e})=>{let t=e?.getCells()[0][0];return(0,g.jsx)(o,{disabled:e?.isInvalid()||!t?.isEditAllowed(),control:(0,g.jsx)(c,{sx:{padding:`1px`,marginRight:`8px`},checked:!!t?.getValue(),onChange:()=>{e.setValue(!t.getValue(),{autoFit:!0,description:`Toggle from Widget`})}}),label:`Is Checked`,labelPlacement:`end`})}})]}),(0,g.jsx)(a,{sx:{position:`relative`,flex:`1`,m:.5,display:`flex`,alignItems:`stretch`},children:(0,g.jsx)(p,{workbook:e,onWorkbookChange:e=>t(e),ref:n,propsDocumentTitle:{placeHolder:`Untitled Widget Workbook`},sx:{flex:`1 1 100%`}})})]})},v=_.bind({}),v.args={},v.storyName=`With Widgets`,y={title:`Studio/With Widgets`,component:p},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},b=[`StudioWithWidgets`]}))();export{v as StudioWithWidgets,b as __namedExportsOrder,y as default};