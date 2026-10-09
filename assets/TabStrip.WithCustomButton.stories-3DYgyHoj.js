import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{P as n,R as r,mt as i}from"./iframe-Dk6xXpge.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{tt as o,yt as s}from"./esm-DTVy7_Fo.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{c=e(i(),1),n(),s(),l=a(),u=(0,c.memo)((0,c.forwardRef)((e,t)=>{let{children:n,style:r,className:i,value:a,editing:o,editable:s,disabled:c,index:u,selectedIndex:d,background:f,activeColor:p,dragging:m,borderColor:h,borderWidth:g,..._}=e;return(0,l.jsx)(`div`,{ref:t,style:{...r,display:`flex`,flexDirection:`column`,background:d===u?`lightgray`:f,minHeight:`0px`,fontFamily:`inherit`,fontSize:`16px`,fontWeight:d===u?`500`:`400`,lineHeight:`1`,letterSpacing:`0px`,textTransform:`none`,minWidth:`unset`,borderBottom:d===u?`${p} solid 2px`:`none`,borderLeft:d===u?`${p} solid 2px`:`none`,borderRight:d===u?`${p} solid 2px`:`none`,borderBottomLeftRadius:d===u?`4px`:void 0,borderBottomRightRadius:d===u?`4px`:void 0,cursor:m?void 0:`pointer`},..._,children:(0,l.jsx)(`div`,{style:{flex:`1 1 100%`,display:`flex`,flexDirection:`row`},children:n})})})),d=e=>{let[t,n]=(0,c.useState)(0),[i,a]=(0,c.useState)([`Sheet 1`,`Sheet 2`,`Sheet 3`,`Sheet 4`,`Sheet 5`]),s=(0,c.useCallback)(e=>{n(e)},[]),d=(0,c.useCallback)((e,t)=>{a(n=>{let r=[...n];return r[e]=t,r})},[]),f=(0,c.useCallback)((e,t)=>{a(n=>r.arrayMove(n,e,t)),n(n=>e===n?t:e<n&&t<n||e>n&&t>n?n:e<n?n-1:n+1)},[]);return(0,l.jsx)(`div`,{style:{width:`75%`,position:`relative`},children:(0,l.jsx)(o,{style:{},...e,selectedTabIndex:t,tabNames:i,onSelectedTabIndexChange:s,onTabNameChange:d,onTabMove:f,renderTabButton:e=>(0,l.jsx)(u,{...e}),activeColor:`red`,propsEditLabel:{renderInput:e=>(0,l.jsx)(`input`,{...e,style:{...e.style,color:`red`}})}})})},f=d.bind({}),f.args={disabled:!1},f.storyName=`TabStrip with Custom Tabs`,p={title:`TabStrip`,component:f},m=[`TabStripWithCustomTabs`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  // const {
  //   showMenuSquare,
  //   ...rest
  // } = props as any;

  // This is the selected tab not the focused tab
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [sheetNames, setSheetNames] = useState<string[]>(['Sheet 1', 'Sheet 2', 'Sheet 3', 'Sheet 4', 'Sheet 5']);
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

  // Should the editable label fire the tabindex when the name changes?
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
  }}>
      <TabStrip style={{}} {...props} selectedTabIndex={selectedIndex} tabNames={sheetNames} onSelectedTabIndexChange={handleSelectedTabIndexChange} onTabNameChange={handleTabNameChange} onTabMove={handleTabMove} renderTabButton={props => {
      return <CustomTab {...props} />;
    }} activeColor="red" propsEditLabel={{
      renderInput: props => {
        return <input {...props} style={{
          ...props.style,
          color: 'red'
        }} />;
      }
    }}>
      </TabStrip>
    </div>;
}`,...f.parameters?.docs?.source}}}})))()}h();export{f as TabStripWithCustomTabs,m as __namedExportsOrder,p as default};