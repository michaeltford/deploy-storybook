import{j as a}from"./index-DjHwRWfA.js";import{r as s}from"./iframe-BjEmcQsQ.js";import{X as p}from"./index-BAF_6BbL.js";import{H as x}from"./index-DFFNLwEW.js";import{I as g,j as I,B as T,U as v,M as f,Z as C,A as B}from"./index-Bu91P29L.js";import{B as y,I as w}from"./TextField-6ZLHcmH7.js";import"./index-DrTFDFai.js";import"./preload-helper-D9Z9MdNV.js";import"./client-BRZzXANe.js";import"./index-Qdaqq9Ty.js";import"./Tooltip-CSAwqu_I.js";const N=o=>{const{...h}=o,[c,l]=s.useState(0),[S,i]=s.useState(["Sheet 1","Sheet 2","Sheet 3","Sheet 4","Sheet 5*","Sheet 6","Sheet a","Sheet b","Sheet c","Sheet d","Sheet e","Sheet f","Sheet g","Sheet h","Sheet i","Sheet j","Sheet k","Sheet l","Sheet m","Sheet n","Sheet o","Sheet p","Sheet q","Sheet r","Sheet s","Sheet t","Sheet u","Sheet v"]),m=s.useCallback(e=>{l(e)},[]),u=s.useCallback((e,r)=>{i(t=>{const d=[...t];return d[e]=r,d})},[]),b=s.useCallback((e,r)=>{i(t=>p.arrayMove(t,e,r)),l(t=>e===t?r:e<t&&r<t||e>t&&r>t?t:e<t?t-1:t+1)},[]);return a.jsxs(y,{sx:{width:"75%",position:"relative",display:"flex"},children:[a.jsx(x,{style:{},...o,selectedTabIndex:c,tabNames:S,onSelectedTabIndexChange:m,onTabNameChange:u,onTabMove:b,background:"white",activeColor:null,createScrollStartButton:T,createScrollEndButton:I,createScrollEdgeButton:g,createTabButton:e=>a.jsx(C,{...e}),editLabelProps:{styleHover:{fontWeight:"700"}},children:a.jsx(v,{style:{padding:"0px",margin:"0px 0px",border:"none"},dense:!0,outlined:!1,color:"primary","aria-label":"menu",icon:a.jsx(f,{})})}),a.jsx("div",{style:{minWidth:"4px"}}),a.jsx(w,{disabled:h.disabled,sx:{padding:"0",height:"24px","&:hover:not([disabled])":{color:e=>e.palette.primary.main}},"aria-label":"addTab",size:"small",children:a.jsx(B,{})})]})},n=N.bind({});n.args={disabled:!1};n.storyName="TabStrip with MUI";const z={title:"TabStrip",component:n};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
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
      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove} background="white" activeColor={null} createScrollStartButton={createScrollStartButton} createScrollEndButton={createScrollEndButton} createScrollEdgeButton={createScrollEdgeButton} createTabButton={props => {
      return <SheetTab {...props} />;
    }} editLabelProps={{
      styleHover: {
        fontWeight: '700'
      }
    }}>
        <ExhibitIconButton style={{
        padding: '0px',
        margin: '0px 0px',
        border: 'none'
      }} dense={true} outlined={false} color="primary" aria-label="menu" icon={<MenuIcon />} />
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
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>;
}`,...n.parameters?.docs?.source}}};const L=["TabStripMUI"];export{n as TabStripMUI,L as __namedExportsOrder,z as default};
