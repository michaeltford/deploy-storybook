import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{P as n,R as r,mt as i}from"./iframe-Dk6xXpge.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{tt as o,yt as s}from"./esm-DTVy7_Fo.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{c=e(i(),1),n(),s(),l=a(),u=function(){return(0,l.jsx)(`div`,{style:{background:`grey`,marginLeft:`4px`,marginRight:`4px`,minHeight:`24px`,minWidth:`24px`,padding:`0`,display:`flex`,justifyContent:`center`,alignItems:`center`}})},d=e=>{let{showMenuSquare:t,...n}=e,[i,a]=(0,c.useState)(0),[s,d]=(0,c.useState)([`Sheet 1`,`Sheet 2`]),f=(0,c.useCallback)(e=>{a(e)},[]),p=(0,c.useCallback)((e,t)=>{d(n=>{let r=[...n];return r[e]=t,r})},[]),m=(0,c.useCallback)((e,t)=>{d(n=>r.arrayMove(n,e,t)),a(n=>e===n?t:e<n&&t<n||e>n&&t>n?n:e<n?n-1:n+1)},[]);return(0,l.jsx)(`div`,{style:{width:`75%`,position:`relative`},...n,children:(0,l.jsx)(o,{...e,selectedTabIndex:i,tabNames:s,onSelectedTabIndexChange:f,onTabNameChange:p,onTabMove:m,children:t?u():(0,l.jsx)(l.Fragment,{})})})},f=d.bind({}),f.args={disabled:!1,showMenuSquare:!0},f.storyName=`TabStrip`,p={title:`TabStrip`,component:f},m=[`TabStripBasic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    showMenuSquare,
    ...rest
  } = props as any;

  // This is the selected tab not the focused tab
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [sheetNames, setSheetNames] = useState<string[]>(['Sheet 1', 'Sheet 2'
  // 'Sheet 3',
  // 'Sheet 4',
  // '1',
  // 'A     ',
  // 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
  // 'Sheet 6',
  // 'Sheet a',
  // 'Sheet b',
  // 'Sheet c',
  // 'Sheet d',
  // 'Sheet e',
  // 'Sheet f',
  // 'Sheet g',
  // 'Sheet h',
  // 'Sheet i',
  // 'Sheet j',
  // 'Sheet k',
  // 'Sheet l',
  // 'Sheet m',
  // 'Sheet n',
  // 'Sheet o',
  // 'Sheet p',
  // 'Sheet q',
  // 'Sheet r',
  // 'Sheet s',
  // 'Sheet t',
  // 'Sheet u',
  // 'Sheet v',
  ]);
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

  // Should the editable label fire the tabindex and when the name changes?
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
  return <div style={{
    // For Canvas view we want to center @ 75%
    width: '75%',
    position: 'relative'
  }} {...rest}>
      <TabStrip {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove}>
        {showMenuSquare ? createScrollMenuButton() : <></>}
      </TabStrip>
    </div>;
}`,...f.parameters?.docs?.source}}}})))()}h();export{f as TabStripBasic,m as __namedExportsOrder,p as default};