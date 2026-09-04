import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,pt as a}from"./esm-BwAES4tr.js";import{n as o,r as s,t as c}from"./CommandButton-BeMfB7kM.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{l=t(n(),1),i(),o(),u=r(),{CommandScope:d,ManualActivation:f,CommandScopeContext:p,CommandAnchorProvider:m}=a,h=e=>new Promise(t=>setTimeout(t,e)),g=()=>{let[e,t]=(0,l.useState)([]),[n,r]=(0,l.useState)(null),i=(0,l.useRef)(null);i.current={log:e=>t(t=>[...t,e]),setBusy:r};let{app:a,sheet:o,selection:g,tx:_}=(0,l.useMemo)(()=>{let e=new d(`app`),t=e.createChild(`sheet`),n=t.createChild(`selection`),r=e=>async(t,n)=>{let r=n?.getLabel?.()??`command`;i.current.setBusy(r),i.current.log(`▶ begin "${r}"`);try{await e(t,n),i.current.log(`✓ commit "${r}"`)}catch(e){i.current.log(`✗ rolled back "${r}" — ${e.message}`)}finally{i.current.setBusy(null)}};return t.updateCommand(`bold`,{label:`Bold`,icon:`𝐁`,callback:async()=>{await h(450)}}),t.updateCommand(`risky`,{label:`Risky Op`,icon:`⚠`,callback:async()=>{throw await h(300),Error(`SDK rejected`)}}),n.updateCommand(`clearSel`,{label:`Clear Selection`,icon:`⌫`,callback:async()=>{await h(200),i.current.log(`• selection cleared (raw — no tx)`)}}),t.use(r),{app:e,sheet:t,selection:n,tx:r}},[]),v=(0,l.useMemo)(()=>new f(g),[g]);return(0,u.jsx)(p.Provider,{value:a,children:(0,u.jsx)(p.Provider,{value:o,children:(0,u.jsx)(m,{tracker:v,children:(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16},children:[(0,u.jsx)(`h3`,{children:`Dispatch Middleware — scope.use(tx), bound to the authoring provider`}),(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(c,{commandKey:`bold`}),(0,u.jsx)(c,{commandKey:`risky`}),(0,u.jsx)(c,{commandKey:`clearSel`}),(0,u.jsx)(`span`,{style:{width:130,color:n?`#b8860b`:`#bbb`},children:n?`⏳ ${n}…`:`idle`})]}),(0,u.jsx)(`div`,{style:{marginTop:8,padding:10,borderRadius:4,background:`#0b1021`,color:`#cde`,fontFamily:`ui-monospace, monospace`,fontSize:12,minHeight:120,whiteSpace:`pre-wrap`},children:e.length===0?(0,u.jsx)(`span`,{style:{color:`#567`},children:`— transaction log —`}):e.map((e,t)=>(0,u.jsx)(`div`,{children:e},t))}),(0,u.jsx)(`button`,{onClick:()=>t([]),style:{marginTop:8,padding:`4px 8px`},children:`Clear log`}),(0,u.jsxs)(`p`,{style:{color:`#888`,maxWidth:620},children:[(0,u.jsx)(`b`,{children:`Bold`}),`/`,(0,u.jsx)(`b`,{children:`Risky Op`}),` are authored by the `,(0,u.jsx)(`b`,{children:`sheet`}),` scope, whose provider got`,(0,u.jsxs)(`code`,{children:[`use=`,`{tx}`]}),` → both are auto-wrapped: you see `,(0,u.jsx)(`i`,{children:`begin/commit`}),` (or`,(0,u.jsx)(`i`,{children:`rolled back`}),` on the throw) and a busy flash, yet their callbacks are`,(0,u.jsx)(`b`,{children:`pure`}),`. `,(0,u.jsx)(`b`,{children:`Clear Selection`}),` is authored by the `,(0,u.jsx)(`b`,{children:`selection`}),` scope — nested `,(0,u.jsx)(`i`,{children:`under`}),` sheet, but with no `,(0,u.jsx)(`code`,{children:`use`}),`, so its callback runs`,(0,u.jsx)(`b`,{children:`raw`}),`. Middleware binds to the authoring scope; it is not inherited.`]})]})})})})},_=g.bind({}),_.storyName=`Middleware (contributor-side)`,v={title:`Commands`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [log, setLog] = useState<string[]>([]);
  const [busy, setBusy] = useState<string | null>(null);

  // Stable handle the (once-created) middleware closes over.
  const apiRef = useRef<{
    log: (s: string) => void;
    setBusy: (s: string | null) => void;
  }>(null!);
  apiRef.current = {
    log: s => setLog(l => [...l, s]),
    setBusy
  };
  const {
    app,
    sheet,
    selection,
    tx
  } = useMemo(() => {
    const app = new CommandScope('app');
    const sheet = app.createChild('sheet');
    const selection = sheet.createChild('selection'); // nested UNDER sheet on purpose

    // Onion middleware: receives \`next\`, returns a wrapper. \`command\` (2nd arg) gives the label.
    const tx = (next: (a: any, c?: any) => any) => async (args: any, command?: any): Promise<void> => {
      const label = command?.getLabel?.() ?? 'command';
      apiRef.current.setBusy(label);
      apiRef.current.log(\`▶ begin "\${label}"\`);
      try {
        await next(args, command);
        apiRef.current.log(\`✓ commit "\${label}"\`);
      } catch (e) {
        apiRef.current.log(\`✗ rolled back "\${label}" — \${(e as Error).message}\`);
      } finally {
        apiRef.current.setBusy(null);
      }
    };

    // \`tx\` is registered on the SHEET scope via \`use={tx}\` on its CommandScopeContext below
    // (a provider doesn't need the scope handle). So sheet's callbacks stay PURE here:
    sheet.updateCommand('bold', {
      label: 'Bold',
      icon: '𝐁',
      callback: async () => {
        await sleep(450);
      }
    });
    sheet.updateCommand('risky', {
      label: 'Risky Op',
      icon: '⚠',
      callback: async () => {
        await sleep(300);
        throw new Error('SDK rejected');
      }
    });
    // selection authored its own callback and did NOT use(tx) — raw, even though it's under sheet.
    selection.updateCommand('clearSel', {
      label: 'Clear Selection',
      icon: '⌫',
      callback: async () => {
        await sleep(200);
        apiRef.current.log('• selection cleared (raw — no tx)');
      }
    });

    // Register the middleware on the SHEET scope — a raw context provider can't, so we do it here, on the
    // scope that AUTHORS bold/risky. selection (also under sheet) doesn't \`use(tx)\`, so it stays raw.
    sheet.use(tx);
    return {
      app,
      sheet,
      selection,
      tx
    };
  }, []);

  // Anchor at the leaf (selection) so all three resolve up the chain.
  const tracker = useMemo(() => new ManualActivation(selection), [selection]);
  return <CommandScopeContext.Provider value={app}>
      {/* \`tx\` was registered on the SHEET scope (\`sheet.use(tx)\` above) — middleware binds to the scope
          that AUTHORS the callbacks (sheet's bold/risky), not to an ancestor. selection (also under sheet)
          has no \`use\`, so it's raw. */}
      <CommandScopeContext.Provider value={sheet}>
        <CommandAnchorProvider tracker={tracker}>
          <div style={{
          fontFamily: 'sans-serif',
          padding: 16
        }}>
          <h3>Dispatch Middleware — scope.use(tx), bound to the authoring provider</h3>
          <div style={rowStyle}>
            <CommandButton commandKey="bold" />
            <CommandButton commandKey="risky" />
            <CommandButton commandKey="clearSel" />
            <span style={{
              width: 130,
              color: busy ? '#b8860b' : '#bbb'
            }}>
              {busy ? \`⏳ \${busy}…\` : 'idle'}
            </span>
          </div>

          <div style={{
            marginTop: 8,
            padding: 10,
            borderRadius: 4,
            background: '#0b1021',
            color: '#cde',
            fontFamily: 'ui-monospace, monospace',
            fontSize: 12,
            minHeight: 120,
            whiteSpace: 'pre-wrap'
          }}>
            {log.length === 0 ? <span style={{
              color: '#567'
            }}>— transaction log —</span> : log.map((line, i) => <div key={i}>{line}</div>)}
          </div>
          <button onClick={() => setLog([])} style={{
            marginTop: 8,
            padding: '4px 8px'
          }}>Clear log</button>

          <p style={{
            color: '#888',
            maxWidth: 620
          }}>
            <b>Bold</b>/<b>Risky Op</b> are authored by the <b>sheet</b> scope, whose provider got
            <code>use={'{tx}'}</code> → both are auto-wrapped: you see <i>begin/commit</i> (or
            <i>rolled back</i> on the throw) and a busy flash, yet their callbacks are
            <b>pure</b>. <b>Clear Selection</b> is authored by the <b>selection</b> scope —
            nested <i>under</i> sheet, but with no <code>use</code>, so its callback runs
            <b>raw</b>. Middleware binds to the authoring scope; it is not inherited.
          </p>
          </div>
        </CommandAnchorProvider>
      </CommandScopeContext.Provider>
    </CommandScopeContext.Provider>;
}`,..._.parameters?.docs?.source}}},y=[`Middleware`]}))();export{_ as Middleware,y as __namedExportsOrder,v as default};