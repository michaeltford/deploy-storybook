import{j as n}from"./index-BiBgeh3u.js";import{r as s}from"./iframe-mGP4b_Fh.js";import{t as x,c as h}from"./index-CvKDCtrJ.js";import{U as g}from"./index-CmvF348R.js";import{r as T,i as I,o as v,W as f,Z as y}from"./BgsyX5QL9OLy0DN3-CLQ3UbdE.js";import{B as C,I as B}from"./index-CdE0ylvR.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";import"./Tooltip-CXxmTuYg.js";const w=o=>{const{...S}=o,[c,i]=s.useState(0),[m,d]=s.useState(["Sheet 1","Sheet 2","Sheet 3","Sheet 4","Sheet 5*","Sheet 6","Sheet a","Sheet b","Sheet c","Sheet d","Sheet e","Sheet f","Sheet g","Sheet h","Sheet i","Sheet j","Sheet k","Sheet l","Sheet m","Sheet n","Sheet o","Sheet p","Sheet q","Sheet r","Sheet s","Sheet t","Sheet u","Sheet v"]),u=s.useCallback(e=>{i(e)},[]),p=s.useCallback((e,a)=>{d(t=>{const l=[...t];return l[e]=a,l})},[]),b=s.useCallback((e,a)=>{d(t=>x.arrayMove(t,e,a)),i(t=>e===t?a:e<t&&a<t||e>t&&a>t?t:e<t?t-1:t+1)},[]);return n.jsxs(C,{sx:{width:"75%",position:"relative",display:"flex"},children:[n.jsx(g,{style:{},...o,selectedTabIndex:c,tabNames:m,onSelectedTabIndexChange:u,onTabNameChange:p,onTabMove:b,background:"white",activeColor:null,renderScrollButtonStart:v,renderScrollButtonEnd:I,renderScrollButtonEdge:T,renderTabButton:e=>n.jsx(y,{...e}),propsEditLabel:{styleHover:{fontWeight:"700"}},children:n.jsx(f,{style:{padding:"0px",margin:"0px 0px",border:"none"},dense:!0,outlined:!1,color:"primary","aria-label":"menu",icon:n.jsx(h,{iconKey:"Menu"})})}),n.jsx("div",{style:{minWidth:"4px"}}),n.jsx(B,{disabled:S.disabled,sx:{padding:"0",height:"24px","&:hover:not([disabled])":{color:e=>e.palette.primary.main}},"aria-label":"addTab",size:"small",children:n.jsx(h,{iconKey:"AddCircle"})})]})},r=w.bind({});r.args={disabled:!1};r.storyName="TabStrip with MUI";const A={title:"TabStrip",component:r};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;

  // This is the selected tab not the focused tab
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [sheetNames, setSheetNames] = useState<string[]>(['Sheet 1', 'Sheet 2', 'Sheet 3', 'Sheet 4', 'Sheet 5*', 'Sheet 6', 'Sheet a', 'Sheet b', 'Sheet c', 'Sheet d', 'Sheet e', 'Sheet f', 'Sheet g', 'Sheet h', 'Sheet i', 'Sheet j', 'Sheet k', 'Sheet l', 'Sheet m', 'Sheet n', 'Sheet o', 'Sheet p', 'Sheet q', 'Sheet r', 'Sheet s', 'Sheet t', 'Sheet u', 'Sheet v']);
  const handleSelectedTabIndexChange = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);
  const handleTabNameChange = useCallback((index: number, value: string) => {
    setSheetNames(items => {
      const newItems = [...items];
      newItems[index] = value;
      return newItems;
    });
  }, []);

  // Should the editable label fire the tabindex and the name changes?
  // review when integrating into sheet
  const handleTabMove = useCallback((indexFrom: number, indexTo: number) => {
    setSheetNames(items => CommonUtils.arrayMove(items, indexFrom, indexTo));
    setSelectedIndex(prev => {
      // If moving selected
      if (indexFrom === prev) return indexTo;
      // if to/from don't cross then return previous
      if (indexFrom < prev && indexTo < prev || indexFrom > prev && indexTo > prev) return prev;
      if (indexFrom < prev) return prev - 1;else return prev + 1;
    });
  }, []);
  return <Box sx={{
    // For Canvas view we want to center @ 75%
    width: '75%',
    position: 'relative',
    display: 'flex'
  }}>
      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove} background="white" activeColor={null} renderScrollButtonStart={renderScrollButtonStart} renderScrollButtonEnd={renderScrollButtonEnd} renderScrollButtonEdge={renderScrollButtonEdge} renderTabButton={props => {
      return <SheetTab {...props} />;
    }} propsEditLabel={{
      styleHover: {
        fontWeight: '700'
      }
    }}>
        <ExhibitIconButton style={{
        padding: '0px',
        margin: '0px 0px',
        border: 'none'
      }} dense={true} outlined={false} color="primary" aria-label="menu" icon={<DynamicIcon iconKey="Menu" />} />
      </TabStrip>
      <div style={{
      minWidth: '4px'
    }} />
      <IconButton disabled={rest.disabled} sx={{
      padding: '0',
      height: '24px',
      // why is this required?
      "&:hover:not([disabled])": {
        color: (theme: Theme) => {
          return theme.palette.primary.main;
        }
      }
    }} aria-label="addTab" size="small">
        <DynamicIcon iconKey="AddCircle" />
      </IconButton>
    </Box>;
}`,...r.parameters?.docs?.source}}};const D=["TabStripMUI"];export{r as TabStripMUI,D as __namedExportsOrder,A as default};
