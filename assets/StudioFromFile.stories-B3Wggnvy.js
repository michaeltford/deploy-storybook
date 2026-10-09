import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{mt as t}from"./iframe-Dk6xXpge.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{o as r,yt as i}from"./esm-DTVy7_Fo.js";import{n as a,t as o}from"./Box-7IAujWEx.js";import{i as s,t as c}from"./esm-CgKlu4AS.js";function l({children:e,didCatch:t,error:n,resetErrorBoundary:r}){let i=(0,d.useMemo)(()=>({didCatch:t,error:n,resetErrorBoundary:r}),[t,n,r]);return(0,d.createElement)(f.Provider,{value:i},e)}function u(e=[],t=[]){return e.length!==t.length||e.some((e,n)=>!Object.is(e,t[n]))}var d,f,p,m;function h(){return(h=e((()=>{d=t(),f=(0,d.createContext)(null),p={didCatch:!1,error:null},m=class extends d.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=p}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(...e){let{didCatch:t}=this.state;t&&(this.props.onReset?.({args:e,reason:`imperative-api`}),this.setState(p))}componentDidCatch(e,t){this.props.onError?.(e,t)}componentDidUpdate(e,t){let{didCatch:n}=this.state,{resetKeys:r}=this.props;n&&t.didCatch&&u(e.resetKeys,r)&&(this.props.onReset?.({next:r,prev:e.resetKeys,reason:`keys`}),this.setState(p))}render(){let{children:e,fallbackRender:t,FallbackComponent:n,fallback:r}=this.props,{didCatch:i,error:a}=this.state,o=e;if(i){let e={error:a,resetErrorBoundary:this.resetErrorBoundary};if(typeof t==`function`)o=t(e);else if(n)o=(0,d.createElement)(n,e);else if(`fallback`in this.props)o=r;else throw a}return(0,d.createElement)(l,{didCatch:i,error:a,resetErrorBoundary:this.resetErrorBoundary},o)}}})))()}var g,_,v,y,b,x;function S(){return(S=e((()=>{g=t(),h(),a(),i(),s(),_=n(),v=e=>{let{...t}=e,n={source:null},[i,a]=(0,g.useState)(null),s=async(e=null)=>{let t=await r.read({...n,source:e??null});a(t)},l={border:`blue solid 2px`,borderRadius:`8px`,flex:`1 1 100%`};return(0,_.jsx)(m,{fallback:(0,_.jsx)(`div`,{children:`failing at storybook`}),children:(0,_.jsx)(o,{sx:{height:`100%`,minHeight:`560px`,display:`flex`,position:`relative`},children:i?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(c,{sx:l,...t,workbook:i})}):(0,_.jsx)(o,{style:{padding:`8px 16px`,display:`flex`,flexDirection:`row`,gap:`8px`,alignItems:`start`,...l},children:(0,_.jsx)(`button`,{onClick:()=>s(),children:`Open Workbook`})})})})},y=v.bind({}),y.args={},y.storyName=`From File`,b={title:`Studio/From File`,component:y},x=[`StudioFromFile`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`props => {
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
}`,...y.parameters?.docs?.source}}}})))()}S();export{y as StudioFromFile,x as __namedExportsOrder,b as default};