import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./BmtOFUPFKF3YrTmP-yqF_BWT1.js";import{d as a}from"./esm-DLJwqohc.js";import{a as o,i as s,r as c,t as l}from"./ShapeBox-C0CctaFN.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{u=e(n(),1),a(),c(),s(),d=r(),f=[{label:`square`,w:96,h:96},{label:`wide`,w:144,h:72},{label:`tall`,w:60,h:120}],p=Object.values(i.Preset),m=({name:e,w:t,h:n})=>{let r=o({geometry:e},t,n),i=0;return r?.forEachHandle(()=>{i++}),(0,d.jsxs)(`figure`,{style:{margin:0,padding:8,border:`1px solid #ddd`,borderRadius:4},children:[(0,d.jsx)(`div`,{style:{height:124,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,d.jsx)(`svg`,{width:t,height:n,overflow:`visible`,style:{display:`block`},children:r?(0,d.jsx)(l,{geometry:r}):null})}),(0,d.jsxs)(`figcaption`,{style:{textAlign:`center`,marginTop:4},children:[e,i?(0,d.jsxs)(`span`,{style:{color:`#888`},children:[` · `,i,` handle`,i>1?`s`:``]}):null]})]})},h=()=>{let[e,t]=(0,u.useState)(``),[n,r]=(0,u.useState)(0),i=(0,u.useMemo)(()=>{let t=e.trim().toLowerCase();return t?p.filter(e=>e.toLowerCase().includes(t)):p},[e]),{w:a,h:o}=f[n];return(0,d.jsxs)(`div`,{style:{padding:12,font:`12px system-ui, sans-serif`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,marginBottom:12},children:[(0,d.jsx)(`input`,{placeholder:`filter by name`,value:e,onChange:e=>t(e.target.value)}),f.map((e,t)=>(0,d.jsxs)(`label`,{children:[(0,d.jsx)(`input`,{type:`radio`,name:`extent`,checked:n===t,onChange:()=>r(t)}),` `,e.label]},e.label)),(0,d.jsxs)(`span`,{children:[i.length,` of `,p.length]})]}),(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(170px, 1fr))`,gap:10},children:i.map(e=>(0,d.jsx)(m,{name:e,w:a,h:o},e))})]})},g=h.bind({}),g.storyName=`All presets`,_={title:`Shapes`,component:g},v=[`Presets`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [filter, setFilter] = useState('');
  const [extent, setExtent] = useState(0);
  const names = useMemo(() => {
    const f = filter.trim().toLowerCase();
    return f ? PRESETS.filter(n => n.toLowerCase().includes(f)) : PRESETS;
  }, [filter]);
  const {
    w,
    h
  } = EXTENTS[extent];
  return <div style={{
    padding: 12,
    font: '12px system-ui, sans-serif'
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 12
    }}>
        <input placeholder="filter by name" value={filter} onChange={e => setFilter(e.target.value)} />
        {EXTENTS.map((e, i) => <label key={e.label}>
            <input type="radio" name="extent" checked={extent === i} onChange={() => setExtent(i)} /> {e.label}
          </label>)}
        <span>{names.length} of {PRESETS.length}</span>
      </div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
      gap: 10
    }}>
        {names.map(name => <Tile key={name} name={name} w={w} h={h} />)}
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}}})))()}y();export{g as Presets,v as __namedExportsOrder,_ as default};