import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,nt as a}from"./esm-B64qfjsV.js";import{N as o,W as s,m as c}from"./esm-xMraobUN.js";var l,u,d,f,p,m;function h(){return(h=t((()=>{l=e(n(),1),a(),s(),u=r(),d=e=>{let{itemCount:t,itemHeight:n}=e,r=(0,l.useMemo)(()=>Array.from({length:t},(e,t)=>`Item ${t+1}`),[t]),a=(0,l.useMemo)(()=>new o({getBounds:()=>({rowStart:0,colStart:0,rowEnd:Math.max(0,t-1),colEnd:0})}),[t]),s=i(a,e=>e.getSelection()).cell.rowIndex;return(0,u.jsx)(`div`,{className:`storybook-container`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,u.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12},children:[`active: `,s,` · `,r[s]]}),(0,u.jsx)(c,{itemCount:t,itemHeight:n,selection:a,renderItem:e=>r[e],style:{flex:`1 1 100%`,width:280,border:`1px solid #ccc`}})]})})},f=d.bind({}),f.args={itemCount:1e5,itemHeight:24},f.storyName=`Basic`,p={title:`List`,component:c,parameters:{controls:{sort:`requiredFirst`}}},m=[`Basic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`props => {
  const {
    itemCount,
    itemHeight
  } = props;
  const items = useMemo(() => Array.from({
    length: itemCount
  }, (_, i) => \`Item \${i + 1}\`), [itemCount]);
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: Math.max(0, itemCount - 1),
      colEnd: 0
    })
  }), [itemCount]);
  const active = useBoundSyncExternalStore(selection, s => s.getSelection()).cell.rowIndex;
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        fontFamily: 'monospace',
        fontSize: 12
      }}>
          active: {active} · {items[active]}
        </div>
        <List itemCount={itemCount} itemHeight={itemHeight} selection={selection} renderItem={i => items[i]} style={{
        flex: '1 1 100%',
        width: 280,
        border: '1px solid #ccc'
      }} />
      </div>
    </div>;
}`,...f.parameters?.docs?.source}}}})))()}h();export{f as Basic,m as __namedExportsOrder,p as default};