import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./ShapeBox-C0CctaFN.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{o=e(n(),1),a(),s=r(),c=[`triangle`,`stealth`,`diamond`,`oval`,`arrow`],l=[`sm`,`med`,`lg`],u=[1,3,8],d=[`straightConnector1`,`line`,`bentConnector3`,`curvedConnector3`,`arc`,`rect`],f=[`butt`,`round`,`square`],p=72/96,m=()=>{let[e,t]=(0,o.useState)(`straightConnector1`),[n,r]=(0,o.useState)(f[0]),[a,m]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{style:{padding:12,font:`12px system-ui, sans-serif`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16,marginBottom:12,alignItems:`center`},children:[(0,s.jsxs)(`label`,{children:[`Shape `,(0,s.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),children:d.map(e=>(0,s.jsx)(`option`,{value:e,children:e},e))})]}),(0,s.jsxs)(`label`,{children:[`Cap `,(0,s.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),children:f.map(e=>(0,s.jsx)(`option`,{value:e,children:e},e))})]}),(0,s.jsxs)(`label`,{children:[(0,s.jsx)(`input`,{type:`checkbox`,checked:a,onChange:e=>m(e.target.checked)}),` tail only`]})]}),(0,s.jsxs)(`table`,{style:{borderCollapse:`collapse`},children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{}),u.map(e=>l.map(t=>(0,s.jsxs)(`th`,{style:{fontWeight:`normal`,color:`#555`},children:[e,`px `,t]},`${e}-${t}`)))]})}),(0,s.jsx)(`tbody`,{children:c.map(t=>(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{style:{textAlign:`right`,paddingRight:8,fontWeight:`normal`},children:t}),u.map(r=>l.map(o=>{let c={width:r*p,fill:{type:`solid`,color:`#2f5597`},lineCap:n,tailType:t,tailWidth:o,tailLength:o,...a?{}:{headType:t,headWidth:o,headLength:o}};return(0,s.jsx)(`td`,{style:{padding:8,border:`1px solid #eee`},children:(0,s.jsx)(i,{name:e,width:120,height:60,stroke:c,strokeWidth:r})},`${r}-${o}`)}))]},t))})]})]})},h=m.bind({}),h.storyName=`Line ends`,g={title:`Shapes`,component:h},_=[`LineEnds`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [shape, setShape] = useState('straightConnector1');
  const [cap, setCap] = useState<IStroke.LineCap>(CAPS[0]);
  const [headless, setHeadless] = useState(false);
  return <div style={{
    padding: 12,
    font: '12px system-ui, sans-serif'
  }}>
      <div style={{
      display: 'flex',
      gap: 16,
      marginBottom: 12,
      alignItems: 'center'
    }}>
        <label>Shape <select value={shape} onChange={e => setShape(e.target.value)}>
          {SHAPES.map(n => <option key={n} value={n}>{n}</option>)}
        </select></label>
        <label>Cap <select value={cap} onChange={e => setCap(e.target.value as IStroke.LineCap)}>
          {CAPS.map(c => <option key={c} value={c}>{c}</option>)}
        </select></label>
        <label><input type="checkbox" checked={headless} onChange={e => setHeadless(e.target.checked)} /> tail only</label>
      </div>
      <table style={{
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr>
            <th />
            {WIDTHS.map(w => SIZES.map(s => <th key={\`\${w}-\${s}\`} style={{
            fontWeight: 'normal',
            color: '#555'
          }}>{w}px {s}</th>))}
          </tr>
        </thead>
        <tbody>
          {TYPES.map(type => <tr key={type}>
              <th style={{
            textAlign: 'right',
            paddingRight: 8,
            fontWeight: 'normal'
          }}>{type}</th>
              {WIDTHS.map(width => SIZES.map(size => {
            const stroke = {
              width: width * PT_PER_PX,
              fill: {
                type: 'solid',
                color: '#2f5597'
              },
              lineCap: cap,
              tailType: type,
              tailWidth: size,
              tailLength: size,
              ...(headless ? {} : {
                headType: type,
                headWidth: size,
                headLength: size
              })
            } as unknown as IShape.JSON['stroke'];
            return <td key={\`\${width}-\${size}\`} style={{
              padding: 8,
              border: '1px solid #eee'
            }}>
                    <ShapeBox name={shape} width={120} height={60} stroke={stroke} strokeWidth={width} />
                  </td>;
          }))}
            </tr>)}
        </tbody>
      </table>
    </div>;
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as LineEnds,_ as __namedExportsOrder,g as default};