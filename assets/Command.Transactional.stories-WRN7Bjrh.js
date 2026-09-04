import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,Zt as a,jt as o,pt as s}from"./esm-BwAES4tr.js";import{K as c,Y as l,it as u}from"./esm-BaVuX9rf.js";import{n as d,r as f,t as p}from"./CommandButton-BeMfB7kM.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{m=t(n(),1),a(),i(),u(),d(),h=r(),g=e=>{e.updateCommand(`undo`,{label:`Undo`,shortcut:{key:`z`,modifiers:[`ctrl`]}}),e.updateCommand(`redo`,{label:`Redo`,shortcut:{key:`y`,modifiers:[`ctrl`]}})},{CommandScope:_,ManualActivation:v,CommandScopeContext:y,CommandAnchorProvider:b}=s,x=class{constructor(e){this._manager=e,this.value=0,this.color=`none`,this._listeners=new Set}subscribe(e){return this._listeners.add(e),()=>{this._listeners.delete(e)}}_emit(){this._listeners.forEach(e=>e())}async doBatch(e,t){let n={value:this.value,color:this.color};await e();let r={value:this.value,color:this.color};this._manager.addUndoOperation({description:t??`Edit`,undo:()=>(this.value=n.value,this.color=n.color,this._emit(),()=>{this.value=r.value,this.color=r.color,this._emit()})}),this._emit()}increment(){this.value+=1}fill(e){this.color=e}},S=(e,t,n)=>{e.use(l({transaction:t,manager:n})),e.updateCommand(`increment`,{callback:()=>t.increment()}),e.updateCommand(`fillRed`,{callback:()=>t.fill(`crimson`)}),e.updateCommand(`fillBlue`,{callback:()=>t.fill(`royalblue`)})},C=()=>{let[,e]=(0,m.useReducer)(e=>e+1,0),{root:t,model:n,manager:r,tracker:i}=(0,m.useMemo)(()=>{let e=new o,t=new x(e),n=new _(`app`);g(n),n.updateCommand(`increment`,{label:`Increment`,icon:`➕`}),n.updateCommand(`fillRed`,{label:`Fill Red`,icon:`🟥`}),n.updateCommand(`fillBlue`,{label:`Fill Blue`,icon:`🟦`});let r=n.createChild(`undo`,c,{manager:e}).createChild(`sheet`,S,t,e);return{root:n,model:t,manager:e,tracker:new v(r)}},[]);return(0,m.useEffect)(()=>n.subscribe(e),[n]),(0,m.useEffect)(()=>r.addListener({onStackChange:e}),[r]),(0,h.jsx)(y.Provider,{value:t,children:(0,h.jsx)(b,{tracker:i,children:(0,h.jsxs)(`div`,{style:{fontFamily:`sans-serif`,padding:16,display:`flex`,flexDirection:`column`,gap:12},children:[(0,h.jsx)(`h3`,{style:{margin:0},children:`Transactional middleware + repeat last action`}),(0,h.jsxs)(`div`,{style:{...f,border:`1px solid #ddd`,borderRadius:6,padding:`4px 12px`},children:[(0,h.jsx)(p,{commandKey:`increment`}),(0,h.jsx)(p,{commandKey:`fillRed`}),(0,h.jsx)(p,{commandKey:`fillBlue`}),(0,h.jsx)(`span`,{style:{width:1,height:24,background:`#ddd`}}),(0,h.jsx)(p,{commandKey:`undo`}),(0,h.jsx)(p,{commandKey:`redo`})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,color:`#888`,fontSize:14},children:[(0,h.jsxs)(`span`,{children:[`value: `,(0,h.jsx)(`b`,{style:{color:`#222`},children:n.value})]}),(0,h.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6},children:[`color: `,(0,h.jsx)(`span`,{style:{width:16,height:16,borderRadius:3,border:`1px solid #ccc`,background:n.color===`none`?`transparent`:n.color}}),(0,h.jsx)(`b`,{style:{color:`#222`},children:n.color})]}),(0,h.jsxs)(`span`,{children:[`top undo: `,(0,h.jsx)(`b`,{style:{color:`#222`},children:r.getTopUndoDescription()??`—`})]}),(0,h.jsxs)(`span`,{children:[`top redo / repeat: `,(0,h.jsx)(`b`,{style:{color:`#222`},children:r.getTopRedoDescription()??`—`})]})]}),(0,h.jsxs)(`div`,{style:{background:`#f7f7f9`,border:`1px solid #e5e5ea`,borderRadius:6,padding:`10px 14px`,color:`#555`,fontSize:14,lineHeight:1.5,maxWidth:680},children:[`Click `,(0,h.jsx)(`b`,{children:`Increment`}),` → value rises, one undo entry per click (the `,(0,h.jsx)(`code`,{children:`use(tx)`}),` batch — callbacks are pure). `,(0,h.jsx)(`b`,{children:`Undo`}),`/`,(0,h.jsx)(`b`,{children:`Redo`}),` work normally. Now the key bit: after any action the`,(0,h.jsx)(`b`,{children:` Redo`}),` button stays enabled showing `,(0,h.jsx)(`b`,{children:`"Redo <action>"`}),` even with nothing to redo — because the middleware armed the manager's `,(0,h.jsx)(`i`,{children:`repeatable operation`}),`. Click `,(0,h.jsx)(`b`,{children:`Redo`}),` (or press `,(0,h.jsx)(`code`,{children:`Ctrl+Y`}),` / `,(0,h.jsx)(`code`,{children:`F4`}),`) → it `,(0,h.jsx)(`b`,{children:`repeats the last action`}),` against the current value. Switch between `,(0,h.jsx)(`i`,{children:`Increment`}),` and `,(0,h.jsx)(`i`,{children:`Fill`}),` to see the repeat target follow the most recent action.`]})]})})})},w=C.bind({}),w.args={},w.storyName=`Transactional + Repeat`,T={title:`Commands`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [, force] = useReducer(n => n + 1, 0);
  const {
    root,
    model,
    manager,
    tracker
  } = useMemo(() => {
    const manager = new UndoManager();
    const model = new Model(manager);
    const root = new CommandScope('app');
    seedUndoChrome(root); // undo/redo chrome (story-local seed)
    root.updateCommand('increment', {
      label: 'Increment',
      icon: '➕'
    });
    root.updateCommand('fillRed', {
      label: 'Fill Red',
      icon: '🟥'
    });
    root.updateCommand('fillBlue', {
      label: 'Fill Blue',
      icon: '🟦'
    });
    const undo = root.createChild('undo', contributeUndoCommands, {
      manager
    }); // undo behavior
    const sheet = undo.createChild('sheet', contributeDemoCommands, model, manager); // factory + callbacks
    return {
      root,
      model,
      manager,
      tracker: new ManualActivation(sheet)
    };
  }, []);
  useEffect(() => model.subscribe(force), [model]);
  useEffect(() => manager.addListener({
    onStackChange: force
  }), [manager]);
  return <CommandScopeContext.Provider value={root}>
      <CommandAnchorProvider tracker={tracker}>
        <div style={{
        fontFamily: 'sans-serif',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <h3 style={{
          margin: 0
        }}>Transactional middleware + repeat last action</h3>

          <div style={{
          ...rowStyle,
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: '4px 12px'
        }}>
            <CommandButton commandKey="increment" />
            <CommandButton commandKey="fillRed" />
            <CommandButton commandKey="fillBlue" />
            <span style={{
            width: 1,
            height: 24,
            background: '#ddd'
          }} />
            <CommandButton commandKey="undo" />
            <CommandButton commandKey="redo" />
          </div>

          <div style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          color: '#888',
          fontSize: 14
        }}>
            <span>value: <b style={{
              color: '#222'
            }}>{model.value}</b></span>
            <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }}>
              color: <span style={{
              width: 16,
              height: 16,
              borderRadius: 3,
              border: '1px solid #ccc',
              background: model.color === 'none' ? 'transparent' : model.color
            }} />
              <b style={{
              color: '#222'
            }}>{model.color}</b>
            </span>
            <span>top undo: <b style={{
              color: '#222'
            }}>{manager.getTopUndoDescription() ?? '—'}</b></span>
            <span>top redo / repeat: <b style={{
              color: '#222'
            }}>{manager.getTopRedoDescription() ?? '—'}</b></span>
          </div>

          <div style={{
          background: '#f7f7f9',
          border: '1px solid #e5e5ea',
          borderRadius: 6,
          padding: '10px 14px',
          color: '#555',
          fontSize: 14,
          lineHeight: 1.5,
          maxWidth: 680
        }}>
            Click <b>Increment</b> → value rises, one undo entry per click (the <code>use(tx)</code> batch —
            callbacks are pure). <b>Undo</b>/<b>Redo</b> work normally. Now the key bit: after any action the
            <b> Redo</b> button stays enabled showing <b>"Redo &lt;action&gt;"</b> even with nothing to redo —
            because the middleware armed the manager's <i>repeatable operation</i>. Click <b>Redo</b> (or
            press <code>Ctrl+Y</code> / <code>F4</code>) → it <b>repeats the last action</b> against the
            current value. Switch between <i>Increment</i> and <i>Fill</i> to see the repeat target follow
            the most recent action.
          </div>
        </div>
      </CommandAnchorProvider>
    </CommandScopeContext.Provider>;
}`,...w.parameters?.docs?.source}}},E=[`Transactional`]}))();export{w as Transactional,E as __namedExportsOrder,T as default};