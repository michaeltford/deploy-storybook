import{j as r}from"./index-BiBgeh3u.js";import{r as s}from"./iframe-mGP4b_Fh.js";import{t as p}from"./index-CvKDCtrJ.js";import{U as x}from"./index-CmvF348R.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";const g=function(){return r.jsx("div",{style:{background:"grey",marginLeft:"4px",marginRight:"4px",minHeight:"24px",minWidth:"24px",padding:"0",display:"flex",justifyContent:"center",alignItems:"center"}})},T=o=>{const{showMenuSquare:l,...c}=o,[m,i]=s.useState(0),[S,h]=s.useState(["Sheet 1","Sheet 2"]),u=s.useCallback(n=>{i(n)},[]),b=s.useCallback((n,a)=>{h(e=>{const d=[...e];return d[n]=a,d})},[]),M=s.useCallback((n,a)=>{h(e=>p.arrayMove(e,n,a)),i(e=>n===e?a:n<e&&a<e||n>e&&a>e?e:n<e?e-1:e+1)},[]);return r.jsx("div",{style:{width:"75%",position:"relative"},...c,children:r.jsx(x,{style:{},...o,selectedTabIndex:m,tabNames:S,onSelectedTabIndexChange:u,onTabNameChange:b,onTabMove:M,children:l?g():r.jsx(r.Fragment,{})})})},t=T.bind({});t.args={disabled:!1,showMenuSquare:!0};t.storyName="TabStrip";const k={title:"TabStrip",component:t};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
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
      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove}>
        {showMenuSquare ? createScrollMenuButton() : <></>}
      </TabStrip>
    </div>;
}`,...t.parameters?.docs?.source}}};const q=["TabStripBasic"];export{t as TabStripBasic,q as __namedExportsOrder,k as default};
