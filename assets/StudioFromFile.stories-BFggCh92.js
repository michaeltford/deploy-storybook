import{i as e}from"./preload-helper-BdFrVu1K.js";import{N as t}from"./iframe-9WhXNj5T.js";import{t as n}from"./jsx-runtime-f3rHp9ZU.js";import{it as r,vt as i}from"./esm-BaVuX9rf.js";import{Et as a,t as o}from"./material-rHrZ_Y8N.js";import{Studio as s,n as c}from"./esm-DbuzZzq92.js";function l(e=[],t=[]){return e.length!==t.length||e.some((e,n)=>!Object.is(e,t[n]))}var u,d,f,p,m=e((()=>{u=t(),d=(0,u.createContext)(null),f={didCatch:!1,error:null},p=class extends u.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=f}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(...e){let{error:t}=this.state;t!==null&&(this.props.onReset?.({args:e,reason:`imperative-api`}),this.setState(f))}componentDidCatch(e,t){this.props.onError?.(e,t)}componentDidUpdate(e,t){let{didCatch:n}=this.state,{resetKeys:r}=this.props;n&&t.error!==null&&l(e.resetKeys,r)&&(this.props.onReset?.({next:r,prev:e.resetKeys,reason:`keys`}),this.setState(f))}render(){let{children:e,fallbackRender:t,FallbackComponent:n,fallback:r}=this.props,{didCatch:i,error:a}=this.state,o=e;if(i){let e={error:a,resetErrorBoundary:this.resetErrorBoundary};if(typeof t==`function`)o=t(e);else if(n)o=(0,u.createElement)(n,e);else if(r!==void 0)o=r;else throw a}return(0,u.createElement)(d.Provider,{value:{didCatch:i,error:a,resetErrorBoundary:this.resetErrorBoundary}},o)}}})),h,g,_,v,y,b;e((()=>{h=t(),m(),o(),r(),c(),g=n(),_=e=>{let{...t}=e,n={source:null},[r,o]=(0,h.useState)(null),c=async(e=null)=>{let t=await i.read({...n,source:e??null});o(t)},l={border:`blue solid 2px`,borderRadius:`8px`,flex:`1 1 100%`};return(0,g.jsx)(p,{fallback:(0,g.jsx)(`div`,{children:`failing at storybook`}),children:(0,g.jsx)(a,{sx:{height:`100%`,minHeight:`560px`,display:`flex`,position:`relative`},children:r?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(s,{sx:l,...t,workbook:r})}):(0,g.jsx)(a,{style:{padding:`8px 16px`,display:`flex`,flexDirection:`row`,gap:`8px`,alignItems:`start`,...l},children:(0,g.jsx)(`button`,{onClick:()=>c(),children:`Open Workbook`})})})})},v=_.bind({}),v.args={},v.storyName=`From File`,y={title:`Studio/From File`,component:v},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const optionsLoad: IWorkbookIO.ReadOptions = {
    source: null // Will be set when fetching
    // maxColumns: 20,
    // maxRows: 100
  };
  const [workbook, setWorkbook] = useState<IWorkbook | Promise<IWorkbook>>(null);

  /**
   * This example reads a file from the local filesystem by showing a file input field until
   * a file is selected and then it will show the Studio widget.
   */
  const openFile = async (input: File | Promise<File> | string = null) => {
    /*
      With no \`source\`, WorkbookIO.read lets the backing store resolve one — a File System
      Access open dialog, or an <input type=file> fallback — and resolves to null if the user
      cancels. Pass an explicit File (e.g. from a drag/drop or input element) to skip the dialog.
      The Studio shows a loading indicator if a workbook promise is passed.
    */
    const loadResults = await WorkbookIO.read({
      ...optionsLoad,
      source: input ?? null
    });
    setWorkbook(loadResults); // null when cancelled; the Studio handles null
  };
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%'
  };

  /**
   * Show an input control until we select a file, then show the workbook.
   */
  return <ErrorBoundary fallback={<div>failing at storybook</div>}>
    <Box sx={{
      height: '100%',
      // fill the storybook root (which is 100% tall)
      minHeight: "560px",
      // arbitrary min height to layout nicely.
      display: 'flex',
      position: 'relative'
    }}>
    {workbook ? <>
      <Studio sx={style} /* Studio self-fills a sized parent; no position wrapper needed */ {...rest} workbook={workbook} />
    </> : <Box style={{
        padding: '8px 16px',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'start',
        ...style
      }}>
        {/* - Traditional file input but we also have a file input utility that easily attaches to any event that provides input choices.
         <input
          style={{
            minWidth: '360px'
          }}
          name: \`from-file\`,
          autoComplete: "off",
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            if (e.target?.files?.length > 0)
              openFile(e.target.files[0]);
          }}
         />
         */}
        <button onClick={() => openFile()}>
          Open Workbook
        </button>
      </Box>}
    </Box>
    </ErrorBoundary>;
}`,...v.parameters?.docs?.source}}},b=[`StudioFromFile`]}))();export{v as StudioFromFile,b as __namedExportsOrder,y as default};