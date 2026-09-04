import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{it as r,vt as i}from"./esm-BaVuX9rf.js";import{Et as a,t as o}from"./material-rHrZ_Y8N.js";import{Studio as s,n as c}from"./esm-DbuzZzq92.js";var l,u,d,f,p,m;e((()=>{l=t(),o(),r(),c(),u=n(),d=e=>{let{...t}=e,n={source:null},[r,o]=(0,l.useState)(`https://www.sheetxl.com/docs/examples/feature-highlights.xlsx`),[c,d]=(0,l.useState)(null),[f,p]=(0,l.useState)(``),m=async e=>{let t=await fetch(r);if(!t.ok)throw`Unable to fetch: ${t.url}`;let a=await i.read({...n,source:{input:r},format:`Excel`});return p(a.getName()),d(a),a},h={border:`blue solid 2px`,borderRadius:`8px`,flex:`1 1 100%`};return(0,u.jsx)(a,{sx:{height:`100%`,minHeight:`560px`,display:`flex`,position:`relative`},children:c?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s,{sx:h,...t,workbook:c,title:f})}):(0,u.jsxs)(a,{style:{padding:`8px 16px`,display:`flex`,flexDirection:`row`,gap:`8px`,alignItems:`start`,...h},children:[(0,u.jsx)(`input`,{style:{minWidth:`360px`},name:`input-url`,autoComplete:`off`,value:r,onChange:e=>{o(e.target.value)}}),(0,u.jsx)(`button`,{onClick:m,children:`Fetch`})]})})},f=d.bind({}),f.args={},f.storyName=`From URL`,p={title:`Studio/From URL`,component:f},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const optionsLoad: IWorkbookIO.ReadOptions = {
    source: null // Will be set when fetching
    // maxColumns: 20,
    // maxRows: 100
  };
  const [fetchUrl, setFetchUrl] = useState<string>(\`https://www.sheetxl.com/docs/examples/feature-highlights.xlsx\`);
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
    const importResults: IWorkbook = (await WorkbookIO.read({
      ...optionsLoad,
      source: {
        input: fetchUrl
      },
      format: "Excel"
    }))!;

    /* not needed but we want to show a title for the workbook too */
    setWorkbookTitle(importResults.getName());
    setWorkbook(importResults);
    return importResults;
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
    height: '100%',
    // fill the storybook root (which is 100% tall)
    minHeight: "560px",
    // arbitrary min height to layout nicely.
    display: 'flex',
    position: 'relative'
  }}>
    {workbook ? <>
      <Studio sx={style} /* Studio self-fills a sized parent; no position wrapper needed */ {...rest} workbook={workbook} /* if null a default model is used. If set will use the model. If a promise of a model it will show a load until the promise resolves */ title={workbookTitle} /* optional title to show in the header */ />
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
}`,...f.parameters?.docs?.source}}},m=[`StudioFromURL`]}))();export{f as StudioFromURL,m as __namedExportsOrder,p as default};