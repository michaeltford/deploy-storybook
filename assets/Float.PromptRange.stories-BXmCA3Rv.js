import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{H as i,N as a,j as o,l as s}from"./esm-BcpaeSfa.js";import{a as c,n as l,t as u}from"./components-DMcoRMO1.js";var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),a(),u(),f=r(),p={rowStart:10,colStart:4,rowEnd:14,colEnd:7},m={font:`12px system-ui`,padding:`4px 10px`,borderRadius:6,border:`1px solid #bbb`,background:`#f4f4f6`,cursor:`pointer`},h=e=>{let{columnCount:t,rowCount:n,freezeTop:r,freezeLeft:a,...u}=e,[h,g]=(0,d.useState)(!0),[_,v]=(0,d.useState)(`—`);return(0,f.jsx)(`div`,{className:`storybook-container`,children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,f.jsxs)(`div`,{style:{font:`12px monospace`,padding:`4px 6px`,color:`#555`,display:`flex`,gap:12},children:[(0,f.jsxs)(`span`,{children:[`Prompt on E11:H15 · scroll it off-screen for the goto pill · last: `,(0,f.jsx)(`b`,{children:_})]}),(0,f.jsx)(`button`,{style:{...m,opacity:h?.5:1,cursor:h?`default`:`pointer`},disabled:h,onClick:()=>{g(!0),v(`reopened`)},children:`Reopen`})]}),(0,f.jsxs)(l,{...u,columnCount:t,rowCount:n,renderCells:c,showGridLines:!0,freezeTop:r,freezeLeft:a,style:{width:`100%`,height:`100%`,border:`1px solid black`},children:[(0,f.jsx)(s,{children:(0,f.jsx)(o,{range:p,stroke:`rgb(120,80,200)`,alignWidth:2,fill:`rgba(120,80,200,0.10)`})},`range`),h&&(0,f.jsx)(i,{range:p,placement:{side:`t`,align:`start`},onCancel:()=>{g(!1),v(`cancelled`)},onGoto:e=>{e.scrollIntoView(),v(`goto`)},children:(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,paddingRight:16},children:[(0,f.jsxs)(`div`,{style:{font:`13px system-ui`},children:[`Ask about `,(0,f.jsx)(`b`,{children:`E11:H15`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,f.jsx)(`button`,{style:m,onClick:()=>v(`summarize`),children:`Summarize`}),(0,f.jsx)(`button`,{style:m,onClick:()=>v(`chart`),children:`Chart it`}),(0,f.jsx)(`button`,{style:m,onClick:()=>v(`explain`),children:`Explain`})]})]})})]})]})})},g=h.bind({}),g.args={columnCount:80,rowCount:200,freezeTop:4,freezeLeft:3},g.storyName=`Prompt range (presence + goto)`,_={title:`Float`,component:g,parameters:{controls:{sort:`requiredFirst`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`props => {
  const {
    columnCount,
    rowCount,
    freezeTop,
    freezeLeft,
    ...rest
  } = props;
  const [open, setOpen] = useState<boolean>(true);
  const [log, setLog] = useState<string>('—');
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        font: '12px monospace',
        padding: '4px 6px',
        color: '#555',
        display: 'flex',
        gap: 12
      }}>
          <span>Prompt on E11:H15 · scroll it off-screen for the goto pill · last: <b>{log}</b></span>
          <button style={{
          ...OPT_BTN,
          opacity: open ? 0.5 : 1,
          cursor: open ? 'default' : 'pointer'
        }} disabled={open} onClick={() => {
          setOpen(true);
          setLog('reopened');
        }}>Reopen</button>
        </div>
        <Grid {...rest} columnCount={columnCount} rowCount={rowCount} renderCells={sharedCellRenderer} showGridLines freezeTop={freezeTop} freezeLeft={freezeLeft} style={{
        width: '100%',
        height: '100%',
        border: '1px solid black'
      }}>
          <Layer key="range">
            <RangeRect range={RANGE} stroke="rgb(120,80,200)" alignWidth={2} fill="rgba(120,80,200,0.10)" />
          </Layer>
          {open && <RangePrompt range={RANGE} placement={{
          side: 't',
          align: 'start'
        }} onCancel={() => {
          setOpen(false);
          setLog('cancelled');
        }} onGoto={state => {
          state.scrollIntoView();
          setLog('goto');
        }}>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingRight: 16
          }}>
                <div style={{
              font: '13px system-ui'
            }}>Ask about <b>E11:H15</b></div>
                <div style={{
              display: 'flex',
              gap: 6,
              flexWrap: 'wrap'
            }}>
                  <button style={OPT_BTN} onClick={() => setLog('summarize')}>Summarize</button>
                  <button style={OPT_BTN} onClick={() => setLog('chart')}>Chart it</button>
                  <button style={OPT_BTN} onClick={() => setLog('explain')}>Explain</button>
                </div>
              </div>
            </RangePrompt>}
        </Grid>
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}},v=[`PromptRange`]}))();export{g as PromptRange,v as __namedExportsOrder,_ as default};