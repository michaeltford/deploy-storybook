import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{V as r,z as i}from"./esm-BHaKJxLo.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{r as o}from"./DzcAWzik-oPAnCJw-9bHKJpnd.js";import{ht as s}from"./esm-xDuNd2aE.js";import{Et as c,Kt as l}from"./esm-CRLSzNYP.js";import{n as u,t as d}from"./Box-BVZWQ34u.js";import{A as f,T as p,k as m,n as h,u as g}from"./esm-DFWHotMq.js";import{t as _}from"./D0VwgFKxXuxaOX1G-DIKvo1lf.js";import{n as v,t as y}from"./IconButton-BiEqTGHX.js";import{c as b}from"./esm-gLCMd2WH.js";var x,S,C,w,T,E;function D(){return(D=t((()=>{x=e(n(),1),u(),v(),i(),c(),s(),m(),b(),S=a(),C=e=>{let{...t}=e,[n,i]=(0,x.useState)(0),[a,s]=(0,x.useState)(`Sheet 1.Sheet 2.Sheet 3.Sheet 4.Sheet 5*.Sheet 6.Sheet a.Sheet b.Sheet c.Sheet d.Sheet e.Sheet f.Sheet g.Sheet h.Sheet i.Sheet j.Sheet k.Sheet l.Sheet m.Sheet n.Sheet o.Sheet p.Sheet q.Sheet r.Sheet s.Sheet t.Sheet u.Sheet v`.split(`.`)),c=(0,x.useCallback)(e=>{i(e)},[]),u=(0,x.useCallback)((e,t)=>{s(n=>{let r=[...n];return r[e]=t,r})},[]),m=(0,x.useCallback)((e,t)=>{s(n=>r.arrayMove(n,e,t)),i(n=>e===n?t:e<n&&t<n||e>n&&t>n?n:e<n?n-1:n+1)},[]);return(0,S.jsxs)(d,{sx:{width:`75%`,position:`relative`,display:`flex`},children:[(0,S.jsx)(l,{style:{},...e,selectedTabIndex:n,tabNames:a,onSelectedTabIndexChange:c,onTabNameChange:u,onTabMove:m,background:`white`,activeColor:null,renderScrollButtonStart:h,renderScrollButtonEnd:f,renderScrollButtonEdge:g,renderTabButton:e=>_(e),propsEditLabel:{styleHover:{fontWeight:`700`}},children:(0,S.jsx)(p,{style:{padding:`0px`,margin:`0px 0px`,border:`none`},dense:!0,outlined:!1,color:`primary`,"aria-label":`menu`,icon:(0,S.jsx)(o,{iconKey:`Menu`})})}),(0,S.jsx)(`div`,{style:{minWidth:`4px`}}),(0,S.jsx)(y,{disabled:t.disabled,sx:{padding:`0`,height:`24px`,"&:hover:not([disabled])":{color:e=>e.palette.primary.main}},"aria-label":`addTab`,size:`small`,children:(0,S.jsx)(o,{iconKey:`AddCircle`})})]})},w=C.bind({}),w.args={disabled:!1},w.storyName=`TabStrip with MUI`,T={title:`TabStrip`,component:w},E=[`TabStripMUI`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`props => {
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
      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove} background="white" activeColor={null} renderScrollButtonStart={defaultRenderScrollButtonStart} renderScrollButtonEnd={defaultRenderScrollButtonEnd} renderScrollButtonEdge={defaultRenderScrollButtonEdge} renderTabButton={props => {
      return defaultRenderSheetTab(props as any);
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
}`,...w.parameters?.docs?.source}}}})))()}D();export{w as TabStripMUI,E as __namedExportsOrder,T as default};