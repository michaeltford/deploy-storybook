import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{L as n,N as r,kt as i}from"./iframe-DVOsKsK5.js";import{t as a}from"./jsx-runtime-f3rHp9ZU.js";import{$ as o,Ot as s}from"./esm-CnNtTDnU.js";import{G as c,dt as l}from"./esm-MDtJPe6l.js";import{At as u,Kt as d,t as f}from"./material-vBc3Gr42.js";import{Qn as p,Xn as m,gr as h,hr as g,m as _,pr as v}from"./CsvK4k2dWaEZex8d-Bp7mDcDm.js";import{n as y}from"./esm-BFm3ASoQ2.js";var b,x,S,C,w,T;e((()=>{b=t(i(),1),f(),r(),l(),o(),v(),y(),x=a(),S=e=>{let{...t}=e,[r,i]=(0,b.useState)(0),[a,o]=(0,b.useState)(`Sheet 1.Sheet 2.Sheet 3.Sheet 4.Sheet 5*.Sheet 6.Sheet a.Sheet b.Sheet c.Sheet d.Sheet e.Sheet f.Sheet g.Sheet h.Sheet i.Sheet j.Sheet k.Sheet l.Sheet m.Sheet n.Sheet o.Sheet p.Sheet q.Sheet r.Sheet s.Sheet t.Sheet u.Sheet v`.split(`.`)),l=(0,b.useCallback)(e=>{i(e)},[]),f=(0,b.useCallback)((e,t)=>{o(n=>{let r=[...n];return r[e]=t,r})},[]),v=(0,b.useCallback)((e,t)=>{o(r=>n.arrayMove(r,e,t)),i(n=>e===n?t:e<n&&t<n||e>n&&t>n?n:e<n?n-1:n+1)},[]);return(0,x.jsxs)(u,{sx:{width:`75%`,position:`relative`,display:`flex`},children:[(0,x.jsx)(c,{style:{},...e,selectedTabIndex:r,tabNames:a,onSelectedTabIndexChange:l,onTabNameChange:f,onTabMove:v,background:`white`,activeColor:null,renderScrollButtonStart:g,renderScrollButtonEnd:m,renderScrollButtonEdge:p,renderTabButton:e=>_(e),propsEditLabel:{styleHover:{fontWeight:`700`}},children:(0,x.jsx)(h,{style:{padding:`0px`,margin:`0px 0px`,border:`none`},dense:!0,outlined:!1,color:`primary`,"aria-label":`menu`,icon:(0,x.jsx)(s,{iconKey:`Menu`})})}),(0,x.jsx)(`div`,{style:{minWidth:`4px`}}),(0,x.jsx)(d,{disabled:t.disabled,sx:{padding:`0`,height:`24px`,"&:hover:not([disabled])":{color:e=>e.palette.primary.main}},"aria-label":`addTab`,size:`small`,children:(0,x.jsx)(s,{iconKey:`AddCircle`})})]})},C=S.bind({}),C.args={disabled:!1},C.storyName=`TabStrip with MUI`,w={title:`TabStrip`,component:C},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => {
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
      return renderWorkbookSheetTab(props as any);
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
}`,...C.parameters?.docs?.source}}},T=[`TabStripMUI`]}))();export{C as TabStripMUI,T as __namedExportsOrder,w as default};