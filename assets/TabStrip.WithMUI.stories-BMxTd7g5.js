import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Qt as i,Z as a,Zt as o,wt as s}from"./esm-BwAES4tr.js";import{P as c,it as l}from"./esm-BaVuX9rf.js";import{Bt as u,Et as d,t as f}from"./material-rHrZ_Y8N.js";import{Fn as p,Jn as m,Pn as h,Zn as g,er as _,hn as v}from"./D8G42xZ7XSAIgohe-1Ath938B.js";import{n as y}from"./esm-DbuzZzq92.js";var b,x,S,C,w,T;e((()=>{b=t(n(),1),f(),o(),l(),a(),g(),y(),x=r(),S=e=>{let{...t}=e,[n,r]=(0,b.useState)(0),[a,o]=(0,b.useState)(`Sheet 1.Sheet 2.Sheet 3.Sheet 4.Sheet 5*.Sheet 6.Sheet a.Sheet b.Sheet c.Sheet d.Sheet e.Sheet f.Sheet g.Sheet h.Sheet i.Sheet j.Sheet k.Sheet l.Sheet m.Sheet n.Sheet o.Sheet p.Sheet q.Sheet r.Sheet s.Sheet t.Sheet u.Sheet v`.split(`.`)),l=(0,b.useCallback)(e=>{r(e)},[]),f=(0,b.useCallback)((e,t)=>{o(n=>{let r=[...n];return r[e]=t,r})},[]),g=(0,b.useCallback)((e,t)=>{o(n=>i.arrayMove(n,e,t)),r(n=>e===n?t:e<n&&t<n||e>n&&t>n?n:e<n?n-1:n+1)},[]);return(0,x.jsxs)(d,{sx:{width:`75%`,position:`relative`,display:`flex`},children:[(0,x.jsx)(c,{style:{},...e,selectedTabIndex:n,tabNames:a,onSelectedTabIndexChange:l,onTabNameChange:f,onTabMove:g,background:`white`,activeColor:null,renderScrollButtonStart:p,renderScrollButtonEnd:h,renderScrollButtonEdge:_,renderTabButton:e=>v(e),propsEditLabel:{styleHover:{fontWeight:`700`}},children:(0,x.jsx)(m,{style:{padding:`0px`,margin:`0px 0px`,border:`none`},dense:!0,outlined:!1,color:`primary`,"aria-label":`menu`,icon:(0,x.jsx)(s,{iconKey:`Menu`})})}),(0,x.jsx)(`div`,{style:{minWidth:`4px`}}),(0,x.jsx)(u,{disabled:t.disabled,sx:{padding:`0`,height:`24px`,"&:hover:not([disabled])":{color:e=>e.palette.primary.main}},"aria-label":`addTab`,size:`small`,children:(0,x.jsx)(s,{iconKey:`AddCircle`})})]})},C=S.bind({}),C.args={disabled:!1},C.storyName=`TabStrip with MUI`,w={title:`TabStrip`,component:C},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`props => {
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