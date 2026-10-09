import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{d as r,h as i}from"./esm-DLJwqohc.js";import{i as a,t as o}from"./esm-CgKlu4AS.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),r(),a(),c=n(),l=e=>{let{maxColumns:t,maxRows:n,...r}=e,a=(0,s.useMemo)(()=>{let e=new i;return e.getSelectedSheet().getRange(`A1:C3`).setValues([[1,2,3],[4,5,6],[7,8,9]]),e},[]);(0,s.useEffect)(()=>{a&&a.getSelectedSheet().setEntireSize({width:t,height:n})},[n,t,a]);let l={border:`blue solid 2px`,borderRadius:`8px`,flex:`1 1 100%`,minHeight:`460px`},u=(0,s.useRef)(null);return(0,c.jsx)(o,{sx:l,ref:u,onWorkbookLoad:e=>{let t=u.current,n=e.source;t.getWorkbook(),n.getWorkbook()},...r,workbook:a,title:`From 2D Array`})},u=l.bind({}),u.args={maxRows:100,maxColumns:20},u.storyName=`From 2D Array`,d={title:`Studio/From 2D Array`,component:u},f=[`StudioFrom2DArray`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    ...rest
  } = props as any;

  /*
   * Create a simple workbook. Wrap in a memo so that it is only created once.
   */
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook();
    wb.getSelectedSheet().getRange('A1:C3').setValues([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    return wb;
  }, []);

  // update the sheet size to match the requested maxRows/maxColumns
  useEffect(() => {
    if (!workbook) return;
    workbook.getSelectedSheet().setEntireSize({
      width: maxColumns,
      height: maxRows
    });
  }, [maxRows, maxColumns, workbook]);
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%',
    minHeight: "460px" // arbitrary min height to layout nicely.
  };

  // Note used but for illustration purposes.
  const refWBElement = useRef<IStudioElement>(null);
  return <Studio sx={style} ref={refWBElement} onWorkbookLoad={(e: WorkbookLoadEvent) => {
    // The on load source has the workbookElement and so does the ref.
    // From a workbook element you can
    const wbElement1 = refWBElement.current;
    const wbElement2 = e.source;
    const _wb1 = wbElement1.getWorkbook();
    const _wb2 = wbElement2.getWorkbook();
  }} {...rest} workbook={workbook} title='From 2D Array' />;
}`,...u.parameters?.docs?.source}}}})))()}p();export{u as StudioFrom2DArray,f as __namedExportsOrder,d as default};