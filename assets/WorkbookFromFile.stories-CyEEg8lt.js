import{j as i}from"./index-DjHwRWfA.js";import{r as c}from"./iframe-BjEmcQsQ.js";import{X as k}from"./index-BAF_6BbL.js";import{X as x,O as h}from"./index-Bu91P29L.js";import{B as f}from"./TextField-6ZLHcmH7.js";import"./index-DrTFDFai.js";import"./preload-helper-D9Z9MdNV.js";import"./client-BRZzXANe.js";import"./index-DFFNLwEW.js";import"./index-Qdaqq9Ty.js";import"./Tooltip-CSAwqu_I.js";const b=c.createContext(null),p={didCatch:!1,error:null};class y extends c.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=p}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var t,o,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];(t=(o=this.props).onReset)===null||t===void 0||t.call(o,{args:n,reason:"imperative-api"}),this.setState(p)}}componentDidCatch(e,t){var o,r;(o=(r=this.props).onError)===null||o===void 0||o.call(r,e,t)}componentDidUpdate(e,t){const{didCatch:o}=this.state,{resetKeys:r}=this.props;if(o&&t.error!==null&&g(e.resetKeys,r)){var n,s;(n=(s=this.props).onReset)===null||n===void 0||n.call(s,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(p)}}render(){const{children:e,fallbackRender:t,FallbackComponent:o,fallback:r}=this.props,{didCatch:n,error:s}=this.state;let a=e;if(n){const u={error:s,resetErrorBoundary:this.resetErrorBoundary};if(typeof t=="function")a=t(u);else if(o)a=c.createElement(o,u);else if(r!==void 0)a=r;else throw s}return c.createElement(b.Provider,{value:{didCatch:n,error:s,resetErrorBoundary:this.resetErrorBoundary}},a)}}function g(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return d.length!==e.length||d.some((t,o)=>!Object.is(t,e[o]))}const w=d=>{const{...e}=d,t={source:null},[o,r]=c.useState(null),n=async(a=null)=>{const u=a??await k.openFileDialog(h.getAllReadFormatTypeAsString().join(", "));if(!u)return;const m=await h.read({...t,source:u});if(m===null){r(null);return}r(m)},s={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%"};return i.jsx(y,{fallback:i.jsx("div",{children:"failing at storybook"}),children:i.jsx(f,{sx:{minHeight:"560px",display:"flex",position:"relative"},children:o?i.jsx(i.Fragment,{children:i.jsx(x,{sx:{...s,position:"absolute"},...e,workbook:o})}):i.jsx(f,{style:{padding:"8px 16px",display:"flex",flexDirection:"row",gap:"8px",alignItems:"start",...s},children:i.jsx("button",{onClick:()=>n(),children:"Open Workbook"})})})})},l=w.bind({});l.args={};l.storyName="From File";const A={title:"Models/From File",component:l};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const optionsLoad: ReadWorkbookOptions = {
    source: null // Will be set when fetching
    // maxColumns: 20,
    // maxRows: 100
  };
  const [workbook, setWorkbook] = useState<WorkbookHandle | Promise<WorkbookHandle>>(null);

  /**
   * This example reads a file from the local filesystem by showing a file input field until
   * a file is selected and then it will show the Studio widget.
   */
  const openFile = async (input: File | Promise<File> | string = null) => {
    const sourceResolve = input ?? (await CommonUtils.openFileDialog(WorkbookIO.getAllReadFormatTypeAsString().join(', ')));
    if (!sourceResolve) return; // was a cancel
    /*
      The Studio will show a loading indicator if a workbook promise is passed.
      Additionally we want to set the title to the name of the file.
    */
    const loadResults: WorkbookHandle = await WorkbookIO.read({
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
}`,...l.parameters?.docs?.source}}};const D=["WorkbookFromFile"];export{l as WorkbookFromFile,D as __namedExportsOrder,A as default};
