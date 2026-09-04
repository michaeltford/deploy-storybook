import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{R as o,it as s}from"./esm-BaVuX9rf.js";import{n as c,r as l,t as u}from"./CommandButton-BeMfB7kM.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{d=t(n(),1),i(),s(),c(),f=r(),{CommandScope:p,ManualActivation:m,CommandScopeContext:h,CommandAnchorProvider:g,useCommands:_}=a,v=[{key:`cut`,label:`Cut`,icon:`✂`},{key:`copy`,label:`Copy`,icon:`⧉`},{key:`paste`,label:`Paste`,icon:`📋`},{key:`pasteValues`,label:`Paste Values`,icon:`1`},{key:`pasteFormats`,label:`Paste Formatting`,icon:`🎨`},{key:`pasteFormulas`,label:`Paste Formulas`,icon:`ƒ`},{key:`pasteTranspose`,label:`Paste Transpose`,icon:`⇄`},{key:`pasteLinks`,label:`Paste Links`,icon:`🔗`},{key:`formatPainterToggle`,label:`Format Painter`,icon:`🖌`}],y=e=>{for(let t of v)e.updateCommand(t.key,{label:t.label,icon:t.icon})},b=()=>{let[e,t]=(0,d.useState)(null);return[e,(0,d.useMemo)(()=>({getMode:()=>e,setMode:e=>t(t=>{let n=typeof e==`function`?e(t):e;return t?.onModeChange?.(n??null),n})}),[e])]},x=class{constructor(){this._ref=null,this._listeners=new Map}addEventListener(e,t){(this._listeners.get(e)??this._listeners.set(e,new Set).get(e)).add(t)}removeEventListener(e,t){this._listeners.get(e)?.delete(t)}_emit(e){this._listeners.get(e)?.forEach(t=>t(new Event(e)))}async writeReference(e){this._ref=e,this._emit(`clipboardchange`)}async writeText(e){this._ref=null,this._emit(`clipboardchange`)}async readReference(){return this._ref}clear(){this._ref=null,this._emit(`clipboardchange`)}},S=e=>{let t={rowStart:0,colStart:0,rowEnd:2,colEnd:2},n={getSelectedRanges:()=>({getSnapshot:e=>({getMarkOptions:()=>e??{},getName:()=>`Range`,getCoords:()=>t,getSource:()=>n,toText:()=>`A1:C3`,toHtml:()=>`<table/>`}),getCoords:()=>[t],getCount:()=>1}),getSelectedRange:()=>({getTopLeft:()=>({getCoords:()=>({colStart:0,rowStart:0})}),size:1}),getProtection:()=>({isFormatCellsAllowed:()=>!e()}),getRuntime:()=>({}),getStyles:()=>({}),addListeners:e=>()=>{}};return n},C=({commandKey:e})=>{let[t]=_(e),n=t?.disabledReasons()??[],r=t?.disabled()??!0,i=t?.getState();return(0,f.jsxs)(`tr`,{style:{borderTop:`1px solid #eee`},children:[(0,f.jsx)(`td`,{style:{padding:`3px 10px`},children:t?.getLabel()??e}),(0,f.jsx)(`td`,{style:{padding:`3px 10px`},children:i===void 0?`—`:(0,f.jsx)(`b`,{children:i?`on`:`off`})}),(0,f.jsx)(`td`,{style:{padding:`3px 10px`,fontWeight:600,color:r?`#e03131`:`#2f9e44`},children:r?`disabled`:`enabled`}),(0,f.jsx)(`td`,{style:{padding:`3px 10px`,color:`#555`},children:n.length?n.join(`  •  `):`—`})]})},w=()=>{let[,e]=(0,d.useReducer)(e=>e+1,0),[t,n]=(0,d.useState)(!1),[r,i]=b(),{root:a,sheet:s,clipboard:c,tracker:_}=(0,d.useMemo)(()=>{let e=new p(`app`);y(e);let t=e.createChild(`sheet`),n=new x;return{root:e,sheet:S(()=>w.current),clipboard:n,sheetScope:t,tracker:new m(t)}},[]),w=d.useRef(t);w.current=t;let T=a.getChild(`sheet`);return(0,d.useEffect)(()=>{let e=T.contribution(),t=o(e,{sheet:s,editModeHandler:i,globalClipboard:{getClipboard:()=>c},element:()=>document.body});return()=>{t(),e.remove()}},[T,s,c,i,t]),(0,f.jsx)(h.Provider,{value:a,children:(0,f.jsx)(g,{tracker:_,debounce:100,children:(0,f.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12},children:[(0,f.jsx)(`h3`,{style:{margin:0},children:`Clipboard commands — copy→marquee · protection-disable · format painter`}),(0,f.jsx)(`div`,{style:{...l,border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`,flexWrap:`wrap`},children:v.map(e=>(0,f.jsx)(u,{commandKey:e.key},e.key))}),(0,f.jsxs)(`div`,{style:l,children:[(0,f.jsxs)(`label`,{style:{cursor:`pointer`},children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:t,onChange:t=>{n(t.target.checked),e()}}),` `,`Protect sheet `,(0,f.jsxs)(`span`,{style:{color:`#888`},children:[`(disables cut / paste / pasteX — `,(0,f.jsx)(`b`,{children:`copy stays enabled`}),`)`]})]}),(0,f.jsxs)(`span`,{style:{marginLeft:16,color:`#888`},children:[`edit-mode bus (marquee): `,(0,f.jsx)(`b`,{style:{color:r?`#1a73e8`:`#aaa`},children:r?.key??`idle`}),r&&(0,f.jsx)(`button`,{style:{marginLeft:8},onClick:()=>i.setMode(null),children:`clear`})]})]}),(0,f.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:14,maxWidth:640,border:`1px solid #e5e5ea`,borderRadius:6},children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{style:{textAlign:`left`,color:`#888`},children:[(0,f.jsx)(`th`,{style:{padding:`3px 10px`},children:`command`}),(0,f.jsx)(`th`,{style:{padding:`3px 10px`},children:`state`}),(0,f.jsx)(`th`,{style:{padding:`3px 10px`},children:`enablement`}),(0,f.jsx)(`th`,{style:{padding:`3px 10px`},children:`disabledReasons`})]})}),(0,f.jsx)(`tbody`,{children:v.map(e=>(0,f.jsx)(C,{commandKey:e.key},e.key))})]}),(0,f.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.5,maxWidth:640},children:[`Click `,(0,f.jsx)(`b`,{children:`Copy`}),` / `,(0,f.jsx)(`b`,{children:`Cut`}),` → the fake clipboard fires `,(0,f.jsx)(`code`,{children:`clipboardchange`}),` and the contributor republishes the copied range onto the `,(0,f.jsx)(`b`,{children:`edit-mode bus`}),` (the marquee source).`,(0,f.jsx)(`b`,{children:` Protect sheet`}),` → cut / paste / pasteX disable while `,(0,f.jsx)(`b`,{children:`Copy stays enabled`}),` (they're not `,(0,f.jsx)(`code`,{children:`mutator`}),`-tagged, so this contributor owns their disable). `,(0,f.jsx)(`b`,{children:`Format Painter`}),` → publishes a `,(0,f.jsx)(`code`,{children:`formatPainter`}),` mode and lights its `,(0,f.jsx)(`i`,{children:`state`}),`; click again (or`,(0,f.jsx)(`b`,{children:` clear`}),`) to reset. This is `,(0,f.jsx)(`code`,{children:`contributeClipboardCommands`}),`; the real copy/paste I/O runs in-app.`]})]})})})},T=w.bind({}),T.args={},T.storyName=`Clipboard (copy/paste + format painter)`,E={title:`Commands`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [, force] = useReducer(n => n + 1, 0);
  const [protectedOn, setProtectedOn] = useState(false);
  const [mode, editModeHandler] = useMockEditMode();

  // Protection read live by the contributor; \`force\` re-runs the disable reducer via the sheet listener
  // in the real app — here we just re-render (the contributor re-runs from the effect below on toggle).
  const {
    root,
    sheet,
    clipboard,
    tracker
  } = useMemo(() => {
    const root = new CommandScope('app');
    registerClipboardChrome(root);
    const sheetScope = root.createChild('sheet');
    const clipboard = new MockClipboard();
    const sheet = makeMockSheet(() => protectedOnRef.current);
    return {
      root,
      sheet,
      clipboard,
      sheetScope,
      tracker: new ManualActivation(sheetScope)
    };
  }, []);

  // Keep a ref so the memoized fake sheet reads the live protection flag.
  const protectedOnRef = React.useRef(protectedOn);
  protectedOnRef.current = protectedOn;

  // Re-run the REAL contributor whenever the bus (or protection) changes — mirrors the bridge, so
  // formatPainter's \`state\` and the paste-disable stay in sync.
  const sheetScope = (root as any).getChild('sheet') as Scope;
  useEffect(() => {
    const contribution = sheetScope.contribution();
    const dispose = contributeClipboardCommands(contribution, {
      sheet,
      editModeHandler,
      globalClipboard: {
        getClipboard: () => clipboard as any
      },
      element: () => document.body
    });
    return () => {
      dispose();
      contribution.remove();
    };
  }, [sheetScope, sheet, clipboard, editModeHandler, protectedOn]);
  return <CommandScopeContext.Provider value={root}>
      <CommandAnchorProvider tracker={tracker} debounce={100}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <h3 style={{
          margin: 0
        }}>Clipboard commands — copy→marquee · protection-disable · format painter</h3>

          <div style={{
          ...rowStyle,
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: '4px 12px',
          flexWrap: 'wrap'
        }}>
            {CLIPBOARD_KEYS.map(d => <CommandButton key={d.key} commandKey={d.key} />)}
          </div>

          <div style={rowStyle}>
            <label style={{
            cursor: 'pointer'
          }}>
              <input type="checkbox" checked={protectedOn} onChange={e => {
              setProtectedOn(e.target.checked);
              force();
            }} />
              {' '}Protect sheet <span style={{
              color: '#888'
            }}>(disables cut / paste / pasteX — <b>copy stays enabled</b>)</span>
            </label>
            <span style={{
            marginLeft: 16,
            color: '#888'
          }}>
              edit-mode bus (marquee): <b style={{
              color: mode ? '#1a73e8' : '#aaa'
            }}>{mode?.key ?? 'idle'}</b>
              {mode && <button style={{
              marginLeft: 8
            }} onClick={() => editModeHandler.setMode(null)}>clear</button>}
            </span>
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
              }}>disabledReasons</th>
              </tr>
            </thead>
            <tbody>{CLIPBOARD_KEYS.map(d => <CommandStatus key={d.key} commandKey={d.key} />)}</tbody>
          </table>

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
            Click <b>Copy</b> / <b>Cut</b> → the fake clipboard fires <code>clipboardchange</code> and the
            contributor republishes the copied range onto the <b>edit-mode bus</b> (the marquee source).
            <b> Protect sheet</b> → cut / paste / pasteX disable while <b>Copy stays enabled</b> (they're
            not <code>mutator</code>-tagged, so this contributor owns their disable). <b>Format Painter</b> →
            publishes a <code>formatPainter</code> mode and lights its <i>state</i>; click again (or
            <b> clear</b>) to reset. This is <code>contributeClipboardCommands</code>; the real copy/paste
            I/O runs in-app.
          </div>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...T.parameters?.docs?.source}}},D=[`Clipboard`]}))();export{T as Clipboard,D as __namedExportsOrder,E as default};