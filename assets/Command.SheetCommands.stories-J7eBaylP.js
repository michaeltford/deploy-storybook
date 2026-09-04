import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,ManualActivation:f,CommandScopeContext:p,CommandAnchorProvider:m,useCommands:h}=a,g=class{constructor(){this.shape=`range`,this.formatProtected=!1,this.bold=!1,this.hasTable=!1,this.showTotals=!1,this.busy=null,this.log=[],this._listeners=new Set}subscribe(e){return this._listeners.add(e),()=>{this._listeners.delete(e)}}_emit(){this._listeners.forEach(e=>e())}async batch(e,t){this.busy=e,this._emit();try{await t(),this.log=[`✔ ${e}`,...this.log].slice(0,6)}finally{this.busy=null,this._emit()}}toggleBold(){this.bold=!this.bold,this._emit()}fillDown(){this._emit()}sortAsc(){this._emit()}toggleTotals(){this.showTotals=!this.showTotals,this._emit()}toggleGridlines(){this._emit()}patch(e){Object.assign(this,e),this._emit()}},_=[{key:`formatBoldToggle`,label:`Bold`,icon:`𝐁`,tags:[`mutator`]},{key:`fillDown`,label:`Fill Down`,icon:`⬇`,tags:[`mutator`]},{key:`sortAscending`,label:`Sort Asc`,icon:`🔼`,tags:[`mutator`]},{key:`tableTotalRowToggle`,label:`Total Row`,icon:`Σ`,tags:[`mutator`,`table`]},{key:`gridlinesToggle`,label:`Gridlines`,icon:`#`}],v=e=>!!_.find(t=>t.key===e)?.tags?.includes(`mutator`),y=e=>{for(let t of _)e.updateCommand(t.key,{label:t.label,icon:t.icon,tags:t.tags})},b=(e,t)=>{e.use(e=>async(n,r)=>{await t.batch(r?.getLabel()??`Command`,async()=>{await e(n,r)})}),e.updateCommand(`formatBoldToggle`,{callback:()=>t.toggleBold()}),e.updateCommand(`fillDown`,{callback:()=>t.fillDown()}),e.updateCommand(`sortAscending`,{callback:()=>t.sortAsc()}),e.updateCommand(`tableTotalRowToggle`,{callback:()=>t.toggleTotals()}),e.updateCommand(`gridlinesToggle`,{callback:()=>t.toggleGridlines()});let n=()=>{let n=e=>t.formatProtected&&v(e)?[`Sheet is protected`]:[];e.updateCommand(`formatBoldToggle`,{state:t.bold,disabledReasons:n(`formatBoldToggle`)}),e.updateCommand(`fillDown`,{disabledReasons:n(`fillDown`)}),e.updateCommand(`sortAscending`,{disabledReasons:[...t.shape===`range`?[]:[`Select a single range`],...n(`sortAscending`)]}),e.updateCommand(`tableTotalRowToggle`,{state:t.showTotals,disabledReasons:[...t.hasTable?[]:[`No table selected`],...n(`tableTotalRowToggle`)]})};return n(),t.subscribe(n)},x=({commandKey:e})=>{let[t]=h(e),n=t?.disabledReasons()??[],r=t?.disabled()??!0,i=t?.getState();return(0,u.jsxs)(`tr`,{style:{borderTop:`1px solid #eee`},children:[(0,u.jsx)(`td`,{style:{padding:`3px 10px`},children:t?.getLabel()??e}),(0,u.jsx)(`td`,{style:{padding:`3px 10px`},children:i===void 0?`—`:(0,u.jsx)(`b`,{children:i?`on`:`off`})}),(0,u.jsx)(`td`,{style:{padding:`3px 10px`,fontWeight:600,color:r?`#e03131`:`#2f9e44`},children:r?`disabled`:`enabled`}),(0,u.jsx)(`td`,{style:{padding:`3px 10px`,color:`#555`},children:n.length?n.join(`  •  `):`—`})]})},S=()=>{let[,e]=(0,l.useReducer)(e=>e+1,0),{root:t,sheet:n,tracker:r}=(0,l.useMemo)(()=>{let e=new g,t=new d(`app`);y(t);let n=t.createChild(`sheet`,b,e);return{root:t,sheet:e,tracker:new f(n)}},[]);(0,l.useEffect)(()=>n.subscribe(e),[n]);let[i,a]=(0,l.useState)(!1),[o,h]=(0,l.useState)(`range`),[v,S]=(0,l.useState)(!1);return(0,u.jsx)(p.Provider,{value:t,children:(0,u.jsx)(m,{tracker:r,debounce:150,children:(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12},children:[(0,u.jsx)(`h3`,{style:{margin:0},children:`useSheetCommands recipe — slice (middleware · mutator-disable · selection-shape · state)`}),(0,u.jsxs)(`div`,{style:{...s,border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`},children:[_.map(e=>(0,u.jsx)(c,{commandKey:e.key},e.key)),(0,u.jsx)(`span`,{style:{width:1,height:24,background:`#ddd`}}),(0,u.jsx)(`span`,{style:{color:n.busy?`#d9480f`:`#aaa`},children:n.busy?`⏳ ${n.busy}…`:`idle`})]}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsxs)(`label`,{style:{cursor:`pointer`},children:[(0,u.jsx)(`input`,{type:`checkbox`,checked:i,onChange:e=>{a(e.target.checked),n.patch({formatProtected:e.target.checked})}}),` `,`Protect sheet `,(0,u.jsxs)(`span`,{style:{color:`#888`},children:[`(disables `,(0,u.jsx)(`code`,{children:`mutator`}),` commands)`]})]}),(0,u.jsxs)(`label`,{style:{marginLeft:16},children:[`Selection:`,` `,(0,u.jsxs)(`select`,{value:o,onChange:e=>{let t=e.target.value;h(t),n.patch({shape:t})},children:[(0,u.jsx)(`option`,{value:`cell`,children:`single cell`}),(0,u.jsx)(`option`,{value:`range`,children:`single range`}),(0,u.jsx)(`option`,{value:`multi`,children:`multi range`})]}),` `,(0,u.jsx)(`span`,{style:{color:`#888`},children:`(Sort needs a single range)`})]}),(0,u.jsxs)(`label`,{style:{marginLeft:16,cursor:`pointer`},children:[(0,u.jsx)(`input`,{type:`checkbox`,checked:v,onChange:e=>{S(e.target.checked),n.patch({hasTable:e.target.checked})}}),` `,`Table selected `,(0,u.jsx)(`span`,{style:{color:`#888`},children:`(Total Row needs a table)`})]})]}),(0,u.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:14,maxWidth:640,border:`1px solid #e5e5ea`,borderRadius:6},children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{style:{textAlign:`left`,color:`#888`},children:[(0,u.jsx)(`th`,{style:{padding:`3px 10px`},children:`command`}),(0,u.jsx)(`th`,{style:{padding:`3px 10px`},children:`state`}),(0,u.jsx)(`th`,{style:{padding:`3px 10px`},children:`enablement`}),(0,u.jsx)(`th`,{style:{padding:`3px 10px`},children:`disabledReasons (accumulated)`})]})}),(0,u.jsx)(`tbody`,{children:_.map(e=>(0,u.jsx)(x,{commandKey:e.key},e.key))})]}),(0,u.jsx)(`div`,{style:{display:`flex`,gap:24,color:`#888`,fontSize:14},children:(0,u.jsxs)(`span`,{children:[`undo log: `,(0,u.jsx)(`b`,{style:{color:`#222`},children:n.log[0]??`—`})]})}),(0,u.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.5,maxWidth:640},children:[`Click `,(0,u.jsx)(`b`,{children:`Bold`}),`/`,(0,u.jsx)(`b`,{children:`Total Row`}),` → toggles its `,(0,u.jsx)(`i`,{children:`state`}),`; every click logs a batch entry (the `,(0,u.jsx)(`code`,{children:`use(tx)`}),` middleware — callbacks stay pure). `,(0,u.jsx)(`b`,{children:`Protect sheet`}),` → all five except `,(0,u.jsx)(`i`,{children:`Gridlines`}),` disable with `,(0,u.jsx)(`b`,{children:`"Sheet is protected"`}),` (the `,(0,u.jsx)(`code`,{children:`mutator`}),`reducer). Change `,(0,u.jsx)(`b`,{children:`Selection`}),` away from a single range → `,(0,u.jsx)(`i`,{children:`Sort`}),` disables; toggle`,(0,u.jsx)(`b`,{children:` Table selected`}),` → `,(0,u.jsx)(`i`,{children:`Total Row`}),` enables. Stacked reasons accumulate (protect + shape). This is the whole sheet recipe; the rest is repetition.`]})]})})})},C=S.bind({}),C.args={},C.storyName=`Sheet Commands (recipe slice)`,w={title:`Commands`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [, force] = useReducer(n => n + 1, 0);
  const {
    root,
    sheet,
    tracker
  } = useMemo(() => {
    const sheet = new MockSheet();
    const root = new CommandScope('app');
    registerSheetSliceDefinitions(root);
    // Behavior bound to the \`sheet\` scope's lifetime (contributor + arg, no useEffect).
    const sheetScope = root.createChild('sheet', contributeSheetSlice, sheet);
    return {
      root,
      sheet,
      tracker: new ManualActivation(sheetScope)
    };
  }, []);

  // Re-render the surrounding chrome (log/busy) on model change — the commands re-resolve via the
  // resolver's own subscription independently.
  useEffect(() => sheet.subscribe(force), [sheet]);
  const [protectedOn, setProtectedOn] = useState(false);
  const [shape, setShape] = useState<Shape>('range');
  const [hasTable, setHasTable] = useState(false);
  return <CommandScopeContext.Provider value={root}>
      {/* debounce: the 210/120ms selection debounces collapse to one container cadence. */}
      <CommandAnchorProvider tracker={tracker} debounce={150}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <h3 style={{
          margin: 0
        }}>useSheetCommands recipe — slice (middleware · mutator-disable · selection-shape · state)</h3>

          <div style={{
          ...rowStyle,
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: '4px 12px'
        }}>
            {SLICE.map(d => <CommandButton key={d.key} commandKey={d.key} />)}
            <span style={{
            width: 1,
            height: 24,
            background: '#ddd'
          }} />
            <span style={{
            color: sheet.busy ? '#d9480f' : '#aaa'
          }}>{sheet.busy ? \`⏳ \${sheet.busy}…\` : 'idle'}</span>
          </div>

          <div style={rowStyle}>
            <label style={{
            cursor: 'pointer'
          }}>
              <input type="checkbox" checked={protectedOn} onChange={e => {
              setProtectedOn(e.target.checked);
              sheet.patch({
                formatProtected: e.target.checked
              });
            }} />
              {' '}Protect sheet <span style={{
              color: '#888'
            }}>(disables <code>mutator</code> commands)</span>
            </label>
            <label style={{
            marginLeft: 16
          }}>
              Selection:{' '}
              <select value={shape} onChange={e => {
              const s = e.target.value as Shape;
              setShape(s);
              sheet.patch({
                shape: s
              });
            }}>
                <option value="cell">single cell</option>
                <option value="range">single range</option>
                <option value="multi">multi range</option>
              </select>{' '}
              <span style={{
              color: '#888'
            }}>(Sort needs a single range)</span>
            </label>
            <label style={{
            marginLeft: 16,
            cursor: 'pointer'
          }}>
              <input type="checkbox" checked={hasTable} onChange={e => {
              setHasTable(e.target.checked);
              sheet.patch({
                hasTable: e.target.checked
              });
            }} />
              {' '}Table selected <span style={{
              color: '#888'
            }}>(Total Row needs a table)</span>
            </label>
          </div>

          <table style={{
          borderCollapse: 'collapse',
          fontSize: 14,
          maxWidth: 640,
          border: '1px solid #e5e5ea',
          borderRadius: 6
        }}>
            <thead>
              <tr style={{
              textAlign: 'left',
              color: '#888'
            }}>
                <th style={{
                padding: '3px 10px'
              }}>command</th>
                <th style={{
                padding: '3px 10px'
              }}>state</th>
                <th style={{
                padding: '3px 10px'
              }}>enablement</th>
                <th style={{
                padding: '3px 10px'
              }}>disabledReasons (accumulated)</th>
              </tr>
            </thead>
            <tbody>{SLICE.map(d => <CommandStatus key={d.key} commandKey={d.key} />)}</tbody>
          </table>

          <div style={{
          display: 'flex',
          gap: 24,
          color: '#888',
          fontSize: 14
        }}>
            <span>undo log: <b style={{
              color: '#222'
            }}>{sheet.log[0] ?? '—'}</b></span>
          </div>

          <div style={{
          background: '#f7f7f9',
          border: '1px solid #e5e5ea',
          borderRadius: 6,
          padding: '10px 14px',
          color: '#555',
          fontSize: 14,
          lineHeight: 1.5,
          maxWidth: 640
        }}>
            Click <b>Bold</b>/<b>Total Row</b> → toggles its <i>state</i>; every click logs a batch entry
            (the <code>use(tx)</code> middleware — callbacks stay pure). <b>Protect sheet</b> → all five
            except <i>Gridlines</i> disable with <b>"Sheet is protected"</b> (the <code>mutator</code>
            reducer). Change <b>Selection</b> away from a single range → <i>Sort</i> disables; toggle
            <b> Table selected</b> → <i>Total Row</i> enables. Stacked reasons accumulate (protect +
            shape). This is the whole sheet recipe; the rest is repetition.
          </div>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...C.parameters?.docs?.source}}},T=[`SheetCommands`]}))();export{C as SheetCommands,T as __namedExportsOrder,w as default};