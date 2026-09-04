import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{N as i,c as a}from"./esm-BcpaeSfa.js";var o,s,c,l,u,d;e((()=>{o=t(n(),1),i(),s=r(),c=e=>{let{itemCount:t}=e,n=(0,o.useMemo)(()=>Array.from({length:t},(e,t)=>`Value ${String(t+1).padStart(5,`0`)}`),[t]),[r,i]=(0,o.useState)(()=>new Set),[c,l]=(0,o.useState)(``),u=(0,o.useMemo)(()=>{let e=c.trim().toLowerCase();if(!e)return Array.from({length:n.length},(e,t)=>t);let t=[];for(let r=0;r<n.length;r++)n[r].toLowerCase().includes(e)&&t.push(r);return t},[c,n]),d=(0,o.useCallback)((e,t)=>{i(n=>{let r=new Set(n);for(let n of e){let e=u[n];e!==void 0&&(t?r.add(e):r.delete(e))}return r})},[u]),f=u.reduce((e,t)=>e+ +!!r.has(t),0);return(0,s.jsx)(`div`,{className:`storybook-container`,children:(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,width:260,border:`1px solid #bbb`,borderRadius:4,overflow:`hidden`,fontFamily:`Calibri, sans-serif`,fontSize:13},children:[(0,s.jsx)(`div`,{style:{padding:8,borderBottom:`1px solid #eee`},children:(0,s.jsx)(`input`,{type:`text`,placeholder:`Search…`,value:c,onChange:e=>l(e.target.value),style:{width:`100%`,boxSizing:`border-box`,padding:`4px 6px`}})}),(0,s.jsx)(a,{itemCount:u.length,itemHeight:24,isChecked:e=>r.has(u[e]),onCheckedChange:d,renderValue:e=>n[u[e]],selectAllLabel:`(Select All)`,cacheToken:r,style:{flex:`1 1 100%`,borderTop:`1px solid #eee`}}),(0,s.jsxs)(`div`,{style:{padding:`4px 10px`,borderTop:`1px solid #eee`,color:`#666`,fontSize:12},children:[f,` / `,u.length,` checked`,c?` (filtered)`:``]})]})})},l=c.bind({}),l.args={itemCount:5e4},l.storyName=`Checkbox Filter`,u={title:`List`,component:a,parameters:{controls:{sort:`requiredFirst`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
  const {
    itemCount
  } = props;

  // Store #1 — the distinct values (eventually \`ICell[]\`, rendered through DefaultCellRenderer so
  // dates/numbers format exactly like the sheet).
  const labels = useMemo(() => Array.from({
    length: itemCount
  }, (_, i) => \`Value \${String(i + 1).padStart(5, '0')}\`), [itemCount]);
  // Store #2 — checked source indices. Independent of selection/focus.
  const [checked, setChecked] = useState<Set<number>>(() => new Set());
  const [search, setSearch] = useState<string>('');

  // The view: source indices passing the search. Stores stay authoritative — this is just a map.
  const view = useMemo<number[]>(() => {
    const q = search.trim().toLowerCase();
    if (!q) return Array.from({
      length: labels.length
    }, (_, i) => i);
    const out: number[] = [];
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].toLowerCase().includes(q)) out.push(i);
    }
    return out;
  }, [search, labels]);

  // CheckboxList works in *view-index* space; map each to its source index for the checked store.
  const onCheckedChange = useCallback((viewIndices: number[], value: boolean) => {
    setChecked(prev => {
      const next = new Set(prev);
      for (const vi of viewIndices) {
        const src = view[vi];
        if (src === undefined) continue;
        if (value) next.add(src);else next.delete(src);
      }
      return next;
    });
  }, [view]);
  const checkedInView = view.reduce((n, src) => n + (checked.has(src) ? 1 : 0), 0);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: 260,
      border: '1px solid #bbb',
      borderRadius: 4,
      overflow: 'hidden',
      fontFamily: 'Calibri, sans-serif',
      fontSize: 13
    }}>
        <div style={{
        padding: 8,
        borderBottom: '1px solid #eee'
      }}>
          <input type="text" placeholder="Search…" value={search} onChange={e => setSearch(e.target.value)} style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '4px 6px'
        }} />
        </div>
        <CheckboxList itemCount={view.length} itemHeight={24} isChecked={viewIndex => checked.has(view[viewIndex])} onCheckedChange={onCheckedChange} renderValue={viewIndex => labels[view[viewIndex]]} selectAllLabel="(Select All)" cacheToken={checked} style={{
        flex: '1 1 100%',
        borderTop: '1px solid #eee'
      }} />
        <div style={{
        padding: '4px 10px',
        borderTop: '1px solid #eee',
        color: '#666',
        fontSize: 12
      }}>
          {checkedInView} / {view.length} checked{search ? ' (filtered)' : ''}
        </div>
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}},d=[`CheckboxFilter`]}))();export{l as CheckboxFilter,d as __namedExportsOrder,u as default};