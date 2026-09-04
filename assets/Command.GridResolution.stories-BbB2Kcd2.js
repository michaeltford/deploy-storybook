import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{U as i,Z as a,Zt as o,cn as s,pt as c}from"./esm-BwAES4tr.js";import{N as l,R as u,l as d,s as f}from"./esm-BcpaeSfa.js";import{n as p,r as m,t as h}from"./CommandButton-BeMfB7kM.js";import{n as g,t as _}from"./components-DMcoRMO1.js";var v,y,b=e((()=>{n(),a(),l(),v=r(),y=()=>{let e=c.useCommandResolver();return e?(0,v.jsx)(d,{zIndex:-1e6,onKeyDown:t=>{e.dispatchKey(t)}}):null}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{x=t(n(),1),o(),a(),l(),_(),p(),b(),S=r(),{CommandScope:C,FocusActivation:w,CommandScopeContext:T,CommandAnchorProvider:E,useCommandScope:D}=c,O=(0,x.createContext)(null),k=({pane:e,gridScope:t,focus:n,seedCenter:r,onRun:a,children:o})=>{let c=e.getAnchor(),l=c===s.Center,u=(0,x.useMemo)(()=>t.createChild(`pane:${c}`),[t,c]);(0,x.useEffect)(()=>{u.updateCommand(`copy`,{icon:`📋`,label:`Copy`,shortcut:{key:`C`,modifiers:[i.Ctrl]},callback:()=>a(`copy → pane:${c}`)}),u.updateCommand(`fill`,{icon:`⬇`,label:`Fill Down`,shortcut:{key:`D`,modifiers:[i.Ctrl]},disabledReasons:l?void 0:[`Fill is disabled in a frozen pane`],callback:()=>a(`fill → pane:${c}`)})},[u,c,l,a]),(0,x.useEffect)(()=>{let t=[];l&&r(u);let i=!1,a=()=>{if(i)return;let r=e.getElement();if(!r){requestAnimationFrame(a);return}t.push(n.register(r,u))};return a(),()=>{i=!0,t.forEach(e=>e())}},[e,u,n,l,r]);let d=(0,x.useMemo)(()=>({focus:n,onRun:a}),[n,a]);return(0,S.jsx)(T.Provider,{value:u,children:(0,S.jsx)(O.Provider,{value:d,children:o})})},A=()=>{let e=D(),t=(0,x.useContext)(O),n=(0,x.useRef)(null),r=(0,x.useMemo)(()=>e?.createChild(`editor`)??null,[e]);return(0,x.useEffect)(()=>{!r||!t||r.updateCommand(`copy`,{icon:`✏️`,label:`Copy (editor)`,shortcut:{key:`C`,modifiers:[i.Ctrl]},callback:()=>t.onRun(`copy → editor (OVERRIDE)`)})},[r,t]),(0,x.useEffect)(()=>{if(!(!r||!t||!n.current))return t.focus.register(n.current,r)},[r,t]),r?(0,S.jsx)(T.Provider,{value:r,children:(0,S.jsx)(d,{children:(0,S.jsx)(u,{range:{colStart:6,rowStart:6,colEnd:9,rowEnd:7},style:{background:`#fff7d6`,border:`2px solid #e0a800`,display:`flex`,alignItems:`center`,padding:4,boxSizing:`border-box`},children:(0,S.jsx)(`input`,{ref:n,placeholder:`editor — focus me`,style:{width:`100%`,border:`none`,background:`transparent`,outline:`none`,font:`inherit`}})})})}):null},j=e=>{let{freezeTop:t=0,freezeLeft:n=0,rowCount:r=100,columnCount:i=26}=e,a=(0,x.useRef)(null),[o,s]=(0,x.useState)(`—`),c=(0,x.useRef)(s);c.current=s;let l=(0,x.useCallback)(e=>c.current(e),[]),{grid:u,focus:d,seedCenter:p}=(0,x.useMemo)(()=>{let e=new C(`app`).createChild(`grid`),t,n=new Promise(e=>{t=e});return{grid:e,focus:new w(null,n),seedCenter:t}},[]),[_,v]=(0,x.useState)(()=>d.getAnchor()?.key??`(root)`);(0,x.useEffect)(()=>d.subscribe(()=>v(d.getAnchor()?.key??`(root)`)),[d]),(0,x.useEffect)(()=>{if(a.current)return d.attach(a.current)},[d]);let b=(0,x.useCallback)((e,t)=>(0,S.jsx)(k,{pane:e,gridScope:u,focus:d,seedCenter:p,onRun:l,children:t}),[u,d,p,l]),D=(0,x.useCallback)(e=>{let{key:t,...n}=e;return(0,S.jsx)(f,{...n,value:`${e.range.rowStart}:${e.range.colStart}`},t)},[]);return(0,S.jsx)(T.Provider,{value:u,children:(0,S.jsx)(E,{tracker:d,keyBindings:!1,children:(0,S.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,height:`100%`,boxSizing:`border-box`},children:[(0,S.jsx)(`h3`,{style:{margin:`0 0 8px`},children:`Grid command resolution — pane floor + focusable editor override`}),(0,S.jsxs)(`div`,{style:m,children:[(0,S.jsx)(h,{commandKey:`copy`}),(0,S.jsx)(h,{commandKey:`fill`}),(0,S.jsxs)(`span`,{style:{color:`#888`},children:[`anchor: `,(0,S.jsx)(`b`,{children:_})]}),(0,S.jsxs)(`span`,{style:{color:`#888`},children:[`last run: `,(0,S.jsx)(`b`,{children:o})]})]}),(0,S.jsx)(`div`,{ref:a,style:{flex:1,minHeight:360,position:`relative`,border:`1px solid #ddd`},children:(0,S.jsxs)(g,{rowCount:r,columnCount:i,getRowHeight:24,getColumnWidth:80,freezeTop:t,freezeLeft:n,renderCells:D,wrapPane:b,children:[(0,S.jsx)(A,{}),(0,S.jsx)(y,{})]})}),(0,S.jsxs)(`p`,{style:{color:`#888`,maxWidth:760},children:[`The toolbar resolves `,(0,S.jsx)(`b`,{children:`before any focus`}),` (the center pane `,(0,S.jsx)(`i`,{children:`seeds`}),` the anchor). Click a cell → anchor is the `,(0,S.jsx)(`b`,{children:`pane`}),` (its floor owns `,(0,S.jsx)(`i`,{children:`Copy`}),`/`,(0,S.jsx)(`i`,{children:`Fill`}),`). Click into the yellow `,(0,S.jsx)(`b`,{children:`editor`}),` → `,(0,S.jsx)(`i`,{children:`Copy`}),` re-resolves to the editor's `,(0,S.jsx)(`b`,{children:`override`}),`(and Ctrl/⌘+C runs it), while `,(0,S.jsx)(`i`,{children:`Fill`}),` still `,(0,S.jsx)(`b`,{children:`falls through`}),` to the pane. Set`,(0,S.jsx)(`code`,{children:` freezeTop`}),`/`,(0,S.jsx)(`code`,{children:`freezeLeft`}),` to split into panes: each pane is its own scope, and the frozen panes disable `,(0,S.jsx)(`i`,{children:`Fill`}),` via their own reason.`]})]})})})},M=j.bind({}),M.args={freezeTop:0,freezeLeft:0,rowCount:100,columnCount:26},M.storyName=`Grid Resolution`,N=j.bind({}),N.args={freezeTop:5,freezeLeft:4,rowCount:100,columnCount:26},N.storyName=`Grid Resolution (frozen panes)`,P={title:`Commands`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`props => {
  const {
    freezeTop = 0,
    freezeLeft = 0,
    rowCount = 100,
    columnCount = 26
  } = props;
  const surfaceRootRef = useRef<HTMLDivElement>(null);
  const [lastRun, setLastRun] = useState('—');
  const runRef = useRef(setLastRun);
  runRef.current = setLastRun;
  const onRun = useCallback((msg: string) => runRef.current(msg), []);

  // app → grid → (pane scopes are created per-pane by PaneCommandProvider). The tracker's one-shot
  // INITIAL anchor is a promise the center pane resolves on mount — the consumer settles it at its
  // own lifecycle moment (a synthetic first focus); real focus advances the anchor thereafter.
  const {
    grid,
    focus,
    seedCenter
  } = useMemo(() => {
    const app = new CommandScope('app');
    const grid = app.createChild('grid');
    let seedCenter!: (scope: InstanceType<typeof CommandScope>) => void;
    const initialAnchor = new Promise<InstanceType<typeof CommandScope> | null>(res => {
      seedCenter = res;
    });
    return {
      grid,
      focus: new FocusActivation(null, initialAnchor),
      seedCenter
    };
  }, []);

  // Live readout of the focus anchor.
  const [anchorKey, setAnchorKey] = useState(() => focus.getAnchor()?.key ?? '(root)');
  useEffect(() => focus.subscribe(() => setAnchorKey(focus.getAnchor()?.key ?? '(root)')), [focus]);

  // Attach the tracker region to the surface root → the resolver auto-binds keystroke handling here,
  // so a key in any pane (its Stage is inside) bubbles to one dispatcher.
  useEffect(() => {
    if (!surfaceRootRef.current) return;
    return focus.attach(surfaceRootRef.current);
  }, [focus]);
  const wrapPane = useCallback((pane: IGridPane, children: React.ReactNode) => <PaneCommandProvider pane={pane} gridScope={grid} focus={focus} seedCenter={seedCenter} onRun={onRun}>
      {children}
    </PaneCommandProvider>, [grid, focus, seedCenter, onRun]);
  const renderCells = useCallback((p: CellRendererProps) => {
    const {
      key,
      ...rest
    } = p;
    return <DefaultCellRenderer key={key} {...rest} value={\`\${p.range.rowStart}:\${p.range.colStart}\`} />;
  }, []);
  return <CommandScopeContext.Provider value={grid}>
      {/* keyBindings={false}: deliver keys via the grid's synthetic responder chain (CommandDispatchLayer),
          not a native listener — see the dispatch law. */}
      <CommandAnchorProvider tracker={focus} keyBindings={false}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box'
      }}>
          <h3 style={{
          margin: '0 0 8px'
        }}>Grid command resolution — pane floor + focusable editor override</h3>
          <div style={rowStyle}>
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="fill" />
            <span style={{
            color: '#888'
          }}>anchor: <b>{anchorKey}</b></span>
            <span style={{
            color: '#888'
          }}>last run: <b>{lastRun}</b></span>
          </div>
          <div ref={surfaceRootRef} style={{
          flex: 1,
          minHeight: 360,
          position: 'relative',
          border: '1px solid #ddd'
        }}>
            <Grid rowCount={rowCount} columnCount={columnCount} getRowHeight={24} getColumnWidth={80} freezeTop={freezeTop} freezeLeft={freezeLeft} renderCells={renderCells} wrapPane={wrapPane}>
              <EditorCommandLayer />
              <CommandDispatchLayer />
            </Grid>
          </div>
          <p style={{
          color: '#888',
          maxWidth: 760
        }}>
            The toolbar resolves <b>before any focus</b> (the center pane <i>seeds</i> the anchor).
            Click a cell → anchor is the <b>pane</b> (its floor owns <i>Copy</i>/<i>Fill</i>). Click
            into the yellow <b>editor</b> → <i>Copy</i> re-resolves to the editor's <b>override</b>
            (and Ctrl/⌘+C runs it), while <i>Fill</i> still <b>falls through</b> to the pane. Set
            <code> freezeTop</code>/<code>freezeLeft</code> to split into panes: each pane is its own
            scope, and the frozen panes disable <i>Fill</i> via their own reason.
          </p>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`props => {
  const {
    freezeTop = 0,
    freezeLeft = 0,
    rowCount = 100,
    columnCount = 26
  } = props;
  const surfaceRootRef = useRef<HTMLDivElement>(null);
  const [lastRun, setLastRun] = useState('—');
  const runRef = useRef(setLastRun);
  runRef.current = setLastRun;
  const onRun = useCallback((msg: string) => runRef.current(msg), []);

  // app → grid → (pane scopes are created per-pane by PaneCommandProvider). The tracker's one-shot
  // INITIAL anchor is a promise the center pane resolves on mount — the consumer settles it at its
  // own lifecycle moment (a synthetic first focus); real focus advances the anchor thereafter.
  const {
    grid,
    focus,
    seedCenter
  } = useMemo(() => {
    const app = new CommandScope('app');
    const grid = app.createChild('grid');
    let seedCenter!: (scope: InstanceType<typeof CommandScope>) => void;
    const initialAnchor = new Promise<InstanceType<typeof CommandScope> | null>(res => {
      seedCenter = res;
    });
    return {
      grid,
      focus: new FocusActivation(null, initialAnchor),
      seedCenter
    };
  }, []);

  // Live readout of the focus anchor.
  const [anchorKey, setAnchorKey] = useState(() => focus.getAnchor()?.key ?? '(root)');
  useEffect(() => focus.subscribe(() => setAnchorKey(focus.getAnchor()?.key ?? '(root)')), [focus]);

  // Attach the tracker region to the surface root → the resolver auto-binds keystroke handling here,
  // so a key in any pane (its Stage is inside) bubbles to one dispatcher.
  useEffect(() => {
    if (!surfaceRootRef.current) return;
    return focus.attach(surfaceRootRef.current);
  }, [focus]);
  const wrapPane = useCallback((pane: IGridPane, children: React.ReactNode) => <PaneCommandProvider pane={pane} gridScope={grid} focus={focus} seedCenter={seedCenter} onRun={onRun}>
      {children}
    </PaneCommandProvider>, [grid, focus, seedCenter, onRun]);
  const renderCells = useCallback((p: CellRendererProps) => {
    const {
      key,
      ...rest
    } = p;
    return <DefaultCellRenderer key={key} {...rest} value={\`\${p.range.rowStart}:\${p.range.colStart}\`} />;
  }, []);
  return <CommandScopeContext.Provider value={grid}>
      {/* keyBindings={false}: deliver keys via the grid's synthetic responder chain (CommandDispatchLayer),
          not a native listener — see the dispatch law. */}
      <CommandAnchorProvider tracker={focus} keyBindings={false}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box'
      }}>
          <h3 style={{
          margin: '0 0 8px'
        }}>Grid command resolution — pane floor + focusable editor override</h3>
          <div style={rowStyle}>
            <CommandButton commandKey="copy" />
            <CommandButton commandKey="fill" />
            <span style={{
            color: '#888'
          }}>anchor: <b>{anchorKey}</b></span>
            <span style={{
            color: '#888'
          }}>last run: <b>{lastRun}</b></span>
          </div>
          <div ref={surfaceRootRef} style={{
          flex: 1,
          minHeight: 360,
          position: 'relative',
          border: '1px solid #ddd'
        }}>
            <Grid rowCount={rowCount} columnCount={columnCount} getRowHeight={24} getColumnWidth={80} freezeTop={freezeTop} freezeLeft={freezeLeft} renderCells={renderCells} wrapPane={wrapPane}>
              <EditorCommandLayer />
              <CommandDispatchLayer />
            </Grid>
          </div>
          <p style={{
          color: '#888',
          maxWidth: 760
        }}>
            The toolbar resolves <b>before any focus</b> (the center pane <i>seeds</i> the anchor).
            Click a cell → anchor is the <b>pane</b> (its floor owns <i>Copy</i>/<i>Fill</i>). Click
            into the yellow <b>editor</b> → <i>Copy</i> re-resolves to the editor's <b>override</b>
            (and Ctrl/⌘+C runs it), while <i>Fill</i> still <b>falls through</b> to the pane. Set
            <code> freezeTop</code>/<code>freezeLeft</code> to split into panes: each pane is its own
            scope, and the frozen panes disable <i>Fill</i> via their own reason.
          </p>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...N.parameters?.docs?.source}}},F=[`GridResolution`,`GridResolutionFrozen`]}))();export{M as GridResolution,N as GridResolutionFrozen,F as __namedExportsOrder,P as default};