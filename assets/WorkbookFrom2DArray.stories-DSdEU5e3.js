import{j as i}from"./index-BiBgeh3u.js";import{r as a}from"./iframe-mGP4b_Fh.js";import{J as u,y as p}from"./index-CmvF348R.js";import"./index-CdE0ylvR.js";import{e as d}from"./BgsyX5QL9OLy0DN3-CLQ3UbdE.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";import"./Tooltip-CXxmTuYg.js";const w=m=>{const{maxColumns:t,maxRows:s,...l}=m,b=a.useMemo(()=>{const e=new u({createSheetCallback:r=>new p({...r,maxRows:s,maxColumns:t})});return e.getSelectedSheet().getRange("A1:C3").setValues([[1,2,3],[4,5,6],[7,8,9]]),e},[s,t]),c={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%",minHeight:"460px"},n=a.useRef(null);return i.jsx(d,{sx:c,ref:n,onElementLoad:e=>{const r=n.current,k=e.source;r.getWorkbook(),k.getWorkbook()},...l,workbook:b,title:"From 2D Array"})},o=w.bind({});o.args={maxRows:100,maxColumns:20};o.storyName="From 2D Array";const F={title:"Models/From 2D Array",component:o};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    ...rest
  } = props as any;

  /*
   * Create a simple workbook. Wrap in a memo so that it is only created once.
   */
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook({
      createSheetCallback: (options: ISheet.ConstructorOptions) => {
        return new Sheet({
          ...options,
          maxRows,
          maxColumns
        });
      }
    });
    wb.getSelectedSheet().getRange('A1:C3').setValues([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    return wb;
  }, [maxRows, maxColumns]);
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%',
    minHeight: "460px" // arbitrary min height to layout nicely.
  };

  // Note used but for illustration purposes.
  const refIWorkbookElement = useRef<IWorkbookElement>(null);
  return <Studio sx={style} ref={refIWorkbookElement} onElementLoad={(e: WorkbookLoadEvent) => {
    // The on load source has the workbookElement and so does the ref.
    // From a workbook element you can
    const wbElement1 = refIWorkbookElement.current;
    const wbElement2 = e.source;
    const _wb1 = wbElement1.getWorkbook();
    const _wb2 = wbElement2.getWorkbook();
  }} {...rest} workbook={workbook} title='From 2D Array' />;
}`,...o.parameters?.docs?.source}}};const I=["WorkbookFrom2DArray"];export{o as WorkbookFrom2DArray,I as __namedExportsOrder,F as default};
