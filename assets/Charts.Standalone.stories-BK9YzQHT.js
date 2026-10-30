import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./f-CN50l4aX3XjFUt-CoP-faX5.js";import{Et as a}from"./esm-CRLSzNYP.js";import{n as o,t as s}from"./useChartBook-BcDMQDB7.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{c=e(n(),1),a(),s(),l=r(),u=[`columnClustered`,`line`,`lineMarkers`,`area`,`pie`,`doughnut`,`barClustered`],d=()=>{let[{sheet:e,pending:t}]=(0,c.useState)(()=>{let{sheet:e}=o();return{sheet:e,pending:e.getCharts().add(`A1:D5`,{type:`columnClustered`})}}),[n,r]=(0,c.useState)(null),[a,s]=(0,c.useState)(`columnClustered`),[d,f]=(0,c.useState)(null),p=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{padding:12,font:`12px system-ui, sans-serif`,display:`flex`,flexDirection:`column`,gap:12},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,l.jsx)(`span`,{children:n?`the chart arrived`:`waiting for the chart…`}),(0,l.jsxs)(`label`,{children:[`type`,` `,(0,l.jsx)(`select`,{disabled:!n,value:a,onChange:e=>{let t=e.target.value;s(t),n?.setChartType(t)},children:u.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))})]}),(0,l.jsx)(`button`,{disabled:!n,onClick:()=>n?.getTitle().setText(`Retitled at ${new Date().toLocaleTimeString()}`),children:`retitle`}),(0,l.jsx)(`button`,{disabled:!n,onClick:()=>{let t=Array.from({length:4},()=>Array.from({length:3},()=>Math.round(5+Math.random()*30)));e.getRange(`B2:D5`).setValues(t)},children:`shuffle the cells`}),(0,l.jsx)(`button`,{disabled:!n,onClick:async()=>f(await p.current?.toSVG()??null),children:`to SVG`})]}),(0,l.jsx)(i,{ref:p,chart:t,onChartChange:r,width:560,height:320,style:{border:`1px solid #ddd`}}),d?(0,l.jsxs)(`details`,{open:!0,children:[(0,l.jsxs)(`summary`,{children:[`the SVG, `,d.length.toLocaleString(),` characters, drawn again from the string`]}),(0,l.jsx)(`div`,{style:{border:`1px dashed #bbb`,width:560},dangerouslySetInnerHTML:{__html:d}})]}):null]})},f=d.bind({}),f.storyName=`From a promise`,p={title:`Charts`,component:f},m=[`Standalone`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [{
    sheet,
    pending
  }] = useState(() => {
    const {
      sheet
    } = newBook();
    return {
      sheet,
      pending: sheet.getCharts().add('A1:D5', {
        type: 'columnClustered'
      })
    };
  });
  const [chart, setChart] = useState<IChart | null>(null);
  const [type, setType] = useState<IChart.Type>('columnClustered');
  const [svg, setSvg] = useState<string | null>(null);
  const refElement = useRef<IChartElement>(null);
  const shuffle = (): void => {
    const rows = Array.from({
      length: 4
    }, () => Array.from({
      length: 3
    }, () => Math.round(5 + Math.random() * 30)));
    sheet.getRange('B2:D5').setValues(rows);
  };
  return <div style={{
    padding: 12,
    font: '12px system-ui, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <span>{chart ? 'the chart arrived' : 'waiting for the chart…'}</span>
        <label>type{' '}
          <select disabled={!chart} value={type} onChange={e => {
          const next = e.target.value as IChart.Type;
          setType(next);
          chart?.setChartType(next);
        }}>
            {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
        <button disabled={!chart} onClick={() => chart?.getTitle().setText(\`Retitled at \${new Date().toLocaleTimeString()}\`)}>retitle</button>
        <button disabled={!chart} onClick={shuffle}>shuffle the cells</button>
        <button disabled={!chart} onClick={async () => setSvg((await refElement.current?.toSVG()) ?? null)}>to SVG</button>
      </div>
      <ChartElement ref={refElement} chart={pending} onChartChange={setChart} width={560} height={320} style={{
      border: '1px solid #ddd'
    }} />
      {svg ? <details open>
          <summary>the SVG, {svg.length.toLocaleString()} characters, drawn again from the string</summary>
          <div style={{
        border: '1px dashed #bbb',
        width: 560
      }} dangerouslySetInnerHTML={{
        __html: svg
      }} />
        </details> : null}
    </div>;
}`,...f.parameters?.docs?.source}}}})))()}h();export{f as Standalone,m as __namedExportsOrder,p as default};