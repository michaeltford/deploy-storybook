import{j as n}from"./index-BiBgeh3u.js";import{r as u}from"./iframe-mGP4b_Fh.js";import{t as x}from"./index-CvKDCtrJ.js";import{B as f}from"./index-CdE0ylvR.js";import{e as b,$ as k}from"./BgsyX5QL9OLy0DN3-CLQ3UbdE.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BMu68Vok.js";import"./index-CmvF348R.js";import"./index-CXJVXQGg.js";import"./Tooltip-CXxmTuYg.js";const g=u.createContext(null),p={didCatch:!1,error:null};class y extends u.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=p}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var t,o,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];(t=(o=this.props).onReset)===null||t===void 0||t.call(o,{args:i,reason:"imperative-api"}),this.setState(p)}}componentDidCatch(e,t){var o,r;(o=(r=this.props).onError)===null||o===void 0||o.call(r,e,t)}componentDidUpdate(e,t){const{didCatch:o}=this.state,{resetKeys:r}=this.props;if(o&&t.error!==null&&w(e.resetKeys,r)){var i,s;(i=(s=this.props).onReset)===null||i===void 0||i.call(s,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(p)}}render(){const{children:e,fallbackRender:t,FallbackComponent:o,fallback:r}=this.props,{didCatch:i,error:s}=this.state;let l=e;if(i){const c={error:s,resetErrorBoundary:this.resetErrorBoundary};if(typeof t=="function")l=t(c);else if(o)l=u.createElement(o,c);else if(r!==void 0)l=r;else throw s}return u.createElement(g.Provider,{value:{didCatch:i,error:s,resetErrorBoundary:this.resetErrorBoundary}},l)}}function w(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return d.length!==e.length||d.some((t,o)=>!Object.is(t,e[o]))}const v=d=>{const{...e}=d,t={source:null},[o,r]=u.useState(null),i=async(l=null)=>{const c=await k.getAllReadFormatsAsString(),m=l??await x.openFileDialog(c);if(!m)return;const h=await k.read({...t,source:m});if(h===null){r(null);return}r(h)},s={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%"};return n.jsx(y,{fallback:n.jsx("div",{children:"failing at storybook"}),children:n.jsx(f,{sx:{minHeight:"560px",display:"flex",position:"relative"},children:o?n.jsx(n.Fragment,{children:n.jsx(b,{sx:{...s,position:"absolute"},...e,workbook:o})}):n.jsx(f,{style:{padding:"8px 16px",display:"flex",flexDirection:"row",gap:"8px",alignItems:"start",...s},children:n.jsx("button",{onClick:()=>i(),children:"Open Workbook"})})})})},a=v.bind({});a.args={};a.storyName="From File";const O={title:"Models/From File",component:a};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const optionsLoad: ReadWorkbookOptions = {
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
    const asFormatString = await WorkbookIO.getAllReadFormatsAsString();
    const sourceResolve = input ?? (await CommonUtils.openFileDialog(asFormatString));
    if (!sourceResolve) return; // was a cancel
    /*
      The Studio will show a loading indicator if a workbook promise is passed.
      Additionally we want to set the title to the name of the file.
    */
    const loadResults: IWorkbook = await WorkbookIO.read({
      ...optionsLoad,
      source: sourceResolve
    });
    if (loadResults === null) {
      // cancelled
      setWorkbook(null);
      return;
    }
    setWorkbook(loadResults);
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
      minHeight: "560px",
      // arbitrary min height to layout nicely.
      display: 'flex',
      position: 'relative'
    }}>
    {workbook ? <>
      <Studio sx={{
          ...style,
          position: 'absolute'
        }} {...rest} workbook={workbook} />
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
}`,...a.parameters?.docs?.source}}};const T=["WorkbookFromFile"];export{a as WorkbookFromFile,T as __namedExportsOrder,O as default};
