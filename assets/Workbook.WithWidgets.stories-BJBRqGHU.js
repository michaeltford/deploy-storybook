import{j as e}from"./index-DWKpDUR-.js";import{r as a}from"./iframe-CpXbX42E.js";import{B as x,P as d}from"./index-DOP-sD40.js";import{B as p,R as k}from"./RelaxedChangeTextField-2LOONziU.js";import{i as g,F as m,C as u}from"./CzdBzjYgP1i3pkPL-BkLvlJQf.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-C4mmmnnj.js";import"./index-C3bn2QFg.js";import"./Tooltip-CDPNXS5Z.js";const b=()=>{const[i,c]=a.useState(null),n=a.useRef(null);return e.jsxs(x,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs(d,{sx:{flex:"0",display:"flex",alignItems:"center",flexDirection:"row",m:.5,px:2,py:1,gap:2,rowGap:1},children:[e.jsx(p,{workbook:i,refIWorkbookElement:n,createWidget:o=>{const{range:t}=o,r=t?.getCells()[0][0];return e.jsx(k,{sx:{width:"200px",...r?.getStyle().getFill().toCSS()},size:"small",InputProps:{inputProps:{sx:{paddingTop:"3.5px",paddingBottom:"3.5px",color:r?.getStyle().getFont().getFill().toCSS()}}},disabled:t?.isInvalid()||!r?.isEditAllowed(),value:r?.toText(),onChange:s=>{t.setValue(s.target.value,{autoFit:!0,description:`Type '${s.target.value}' from Widget`})}})}}),e.jsx(p,{workbook:i,refIWorkbookElement:n,createWidget:({range:o})=>{const t=o?.getCells()[0][0];return e.jsx(m,{disabled:o?.isInvalid()||!t?.isEditAllowed(),control:e.jsx(u,{sx:{padding:"1px",marginRight:"8px"},checked:!!t?.getValue(),onChange:()=>{o.setValue(!t.getValue(),{autoFit:!0,description:"Toggle from Widget"})}}),label:"Is Checked",labelPlacement:"end"})}})]}),e.jsx(d,{sx:{position:"relative",flex:"1",m:.5,display:"flex",alignItems:"stretch"},children:e.jsx(g,{workbook:i,onWorkbookChange:o=>c(o),ref:n,titleProps:{placeHolder:"Untitled Widget Workbook"},sx:{flex:"1 1 100%"}})})]})},l=b.bind({});l.args={};l.storyName="With Widgets";const T={title:"Workbook/With Widgets",component:g};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
        }} size="small" InputProps={{
          inputProps: {
            sx: {
              paddingTop: '3.5px',
              paddingBottom: '3.5px',
              color: cell?.getStyle().getFont().getFill().toCSS()
            }
          }
        }} disabled={range?.isInvalid() || !cell?.isEditAllowed()} value={cell?.toText()} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
        <Studio workbook={workbook} onWorkbookChange={(model: IWorkbook) => setWorkbook(model)} ref={refIWorkbookElement} titleProps={{
        placeHolder: 'Untitled Widget Workbook'
      }} sx={{
        flex: '1 1 100%'
      }} />
      </Paper>
    </Box>;
}`,...l.parameters?.docs?.source}}};const j=["WorkbookAppWithWidgets"];export{l as WorkbookAppWithWidgets,j as __namedExportsOrder,T as default};
