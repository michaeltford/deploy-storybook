import{j as o}from"./index-DWKpDUR-.js";import{r as s}from"./iframe-CpXbX42E.js";import{B as p}from"./index-DOP-sD40.js";import{i as b,L as w}from"./CzdBzjYgP1i3pkPL-BkLvlJQf.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";import"./index-C4mmmnnj.js";import"./index-C3bn2QFg.js";import"./Tooltip-CDPNXS5Z.js";const y=u=>{const{...c}=u,k={source:null},[t,h]=s.useState("https://www.sheetxl.com/examples/features-checklist.xlsx"),[l,m]=s.useState(null),[f,d]=s.useState(""),x=async a=>{const n=await fetch(t);if(!n.ok)throw`Unable to fetch: ${n.url}`;const r=await w.read({...k,source:{input:t},formatType:"xlsx"});return d(r.title),m(r.workbook),r.workbook},i={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%"};return o.jsx(p,{sx:{minHeight:"560px",display:"flex",position:"relative"},children:l?o.jsx(o.Fragment,{children:o.jsx(b,{sx:{...i,position:"absolute"},...c,workbook:l,title:f})}):o.jsxs(p,{style:{padding:"8px 16px",display:"flex",flexDirection:"row",gap:"8px",alignItems:"start",...i},children:[o.jsx("input",{style:{minWidth:"360px"},name:"input-url",autoComplete:"off",value:t,onChange:a=>{h(a.target.value)}}),o.jsx("button",{onClick:x,children:"Fetch"})]})})},e=y.bind({});e.args={};e.storyName="From URL";const F={title:"Models/From URL",component:e};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const optionsLoad: ReadWorkbookOptions = {
    source: null // Will be set when fetching
    // maxColumns: 20,
    // maxRows: 100
  };
  const [fetchUrl, setFetchUrl] = useState<string>(\`https://www.sheetxl.com/examples/features-checklist.xlsx\`);
  const [workbook, setWorkbook] = useState<IWorkbook | Promise<IWorkbook>>(null);
  const [workbookTitle, setWorkbookTitle] = useState<string>('');

  /**
   * This example reads a an ArrayBuffer from a fetch but could get the ArrayBuffer
   * from any source. If then displays this in the Studio widget.
   *
   * The Studio widget requires an IWorkbook or a Promise<IWorkbook>
   * In this example we:
   * 1. fetch from a url to get an array buffer
   * 2. use the WorkbookIO.fromArrayBuffer method to convert a ArrayBuffer to an IWorkbook
   * 3. replace the null workbook with the resolved workbook
   */
  const handleClick = async (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<IWorkbook> => {
    // Note - We are using a fetch to get an ArrayBuffer but this could be any source.
    const fetchResponse = await fetch(fetchUrl);
    if (!fetchResponse.ok) {
      throw \`Unable to fetch: \${fetchResponse.url}\`;
    }
    const importResults: WorkbookHandle = await WorkbookIO.read({
      ...optionsLoad,
      source: {
        input: fetchUrl
      },
      formatType: "xlsx"
    });

    /* not needed but we want to show a title for the workbook too */
    setWorkbookTitle(importResults.title);
    setWorkbook(importResults.workbook);
    return importResults.workbook;
  };
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%'
  };

  /**
   * Show an input control until we type a url a file, then show the workbook.
   */
  return <Box sx={{
    minHeight: "560px",
    // arbitrary min height to layout nicely.
    display: 'flex',
    position: 'relative'
  }}>
    {workbook ? <>
      <Studio sx={{
        ...style,
        position: 'absolute' /* to place correctly in storybook */
      }} {...rest} workbook={workbook} /* if null a default model is used. If set will use the model. If a promise of a model it will show a load until the promise resolves */ title={workbookTitle} /* optional title to show in the header */ />
    </> : <Box style={{
      padding: '8px 16px',
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      alignItems: 'start',
      ...style
    }}>
        <input style={{
        minWidth: '360px'
      }} name="input-url" autoComplete="off" value={fetchUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
        setFetchUrl(e.target.value);
      }} />
        <button onClick={handleClick}>
          Fetch
        </button>
      </Box>}
    </Box>;
}`,...e.parameters?.docs?.source}}};const j=["WorkbookFromURL"];export{e as WorkbookFromURL,j as __namedExportsOrder,F as default};
