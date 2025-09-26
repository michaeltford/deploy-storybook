import{j as a}from"./index-DWKpDUR-.js";import{r as s}from"./iframe-CpXbX42E.js";import{t as x,c as h}from"./index-fWxn02CS.js";import{t as g}from"./index-C4mmmnnj.js";import{t as T,r as I,n as v,W as f,a as y}from"./CzdBzjYgP1i3pkPL-BkLvlJQf.js";import{B as C,I as B}from"./index-DOP-sD40.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./client-Ba8_ROJ4.js";import"./index-C3bn2QFg.js";import"./Tooltip-CDPNXS5Z.js";const w=o=>{const{...c}=o,[S,i]=s.useState(0),[m,l]=s.useState(["Sheet 1","Sheet 2","Sheet 3","Sheet 4","Sheet 5*","Sheet 6","Sheet a","Sheet b","Sheet c","Sheet d","Sheet e","Sheet f","Sheet g","Sheet h","Sheet i","Sheet j","Sheet k","Sheet l","Sheet m","Sheet n","Sheet o","Sheet p","Sheet q","Sheet r","Sheet s","Sheet t","Sheet u","Sheet v"]),u=s.useCallback(e=>{i(e)},[]),b=s.useCallback((e,r)=>{l(t=>{const d=[...t];return d[e]=r,d})},[]),p=s.useCallback((e,r)=>{l(t=>x.arrayMove(t,e,r)),i(t=>e===t?r:e<t&&r<t||e>t&&r>t?t:e<t?t-1:t+1)},[]);return a.jsxs(C,{sx:{width:"75%",position:"relative",display:"flex"},children:[a.jsx(g,{style:{},...o,selectedTabIndex:S,tabNames:m,onSelectedTabIndexChange:u,onTabNameChange:b,onTabMove:p,background:"white",activeColor:null,createScrollStartButton:v,createScrollEndButton:I,createScrollEdgeButton:T,createTabButton:e=>a.jsx(y,{...e}),editLabelProps:{styleHover:{fontWeight:"700"}},children:a.jsx(f,{style:{padding:"0px",margin:"0px 0px",border:"none"},dense:!0,outlined:!1,color:"primary","aria-label":"menu",icon:a.jsx(h,{iconKey:"Menu"})})}),a.jsx("div",{style:{minWidth:"4px"}}),a.jsx(B,{disabled:c.disabled,sx:{padding:"0",height:"24px","&:hover:not([disabled])":{color:e=>e.palette.primary.main}},"aria-label":"addTab",size:"small",children:a.jsx(h,{iconKey:"AddCircle"})})]})},n=w.bind({});n.args={disabled:!1};n.storyName="TabStrip with MUI";const A={title:"TabStrip",component:n};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
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
}`,...n.parameters?.docs?.source}}};const D=["TabStripMUI"];export{n as TabStripMUI,D as __namedExportsOrder,A as default};
