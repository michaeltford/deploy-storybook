import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./f-CN50l4aX3XjFUt-CoP-faX5.js";import{Et as a}from"./esm-CRLSzNYP.js";import{i as o,t as s}from"./useChartBook-BcDMQDB7.js";var c,l,u,d,f,p,m,h;function g(){return(g=t((()=>{c=e(n(),1),a(),s(),l=r(),u=[`columnClustered`,`columnStacked`,`columnStacked100`,`barClustered`,`barStacked`,`line`,`lineMarkers`,`lineStacked`,`area`,`areaStacked`,`pie`,`doughnut`,`radar`,`radarFilled`],d=[`right`,`left`,`top`,`bottom`,`corner`],f=()=>{let e=o(`columnClustered`,e=>e.getTitle().setText(`Sales by month`)),[t,n]=(0,c.useState)(`columnClustered`),[r,a]=(0,c.useState)(`right`),[s,f]=(0,c.useState)(`Sales by month`),[p,m]=(0,c.useState)(560),[h,g]=(0,c.useState)(320),_=(0,c.useMemo)(()=>e?.sheet.getView().getChartElementSelection()??null,[e]),[v,y]=(0,c.useState)(null);if((0,c.useEffect)(()=>_?.addListeners({onChange:()=>y(_.getActive()?.getPath()??null)}),[_]),!e)return(0,l.jsx)(`div`,{style:{padding:12},children:`making the workbook…`});let{chart:b,sheet:x}=e;return(0,l.jsxs)(`div`,{style:{padding:12,font:`12px system-ui, sans-serif`,display:`flex`,flexDirection:`column`,gap:12},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,l.jsxs)(`label`,{children:[`type`,` `,(0,l.jsx)(`select`,{value:t,onChange:e=>{let t=e.target.value;n(t),b.setChartType(t)},children:u.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))})]}),(0,l.jsxs)(`label`,{children:[`legend`,` `,(0,l.jsx)(`select`,{value:r,onChange:e=>{let t=e.target.value;a(t),b.getLegend().setPosition(t)},children:d.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))})]}),(0,l.jsxs)(`label`,{children:[`title`,` `,(0,l.jsx)(`input`,{value:s,onChange:e=>{f(e.target.value),b.getTitle().setText(e.target.value||null)}})]}),(0,l.jsxs)(`label`,{children:[`width `,(0,l.jsx)(`input`,{type:`range`,min:200,max:900,value:p,onChange:e=>m(Number(e.target.value))}),` `,p]}),(0,l.jsxs)(`label`,{children:[`height `,(0,l.jsx)(`input`,{type:`range`,min:120,max:600,value:h,onChange:e=>g(Number(e.target.value))}),` `,h]}),(0,l.jsx)(`button`,{onClick:()=>{let e=Array.from({length:4},()=>Array.from({length:3},()=>Math.round(5+Math.random()*30)));x.getRange(`B2:D5`).setValues(e)},children:`shuffle the cells`})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`,flexWrap:`wrap`},children:[(0,l.jsxs)(`figure`,{style:{margin:0},children:[(0,l.jsx)(i,{chart:b,width:p,height:h,selection:_,style:{border:`1px solid #ddd`}}),(0,l.jsxs)(`figcaption`,{style:{color:`#888`,marginTop:4},children:[`press an element to select it (a series first, then its point); selected: `,v??`nothing`]})]}),(0,l.jsxs)(`figure`,{style:{margin:0},children:[(0,l.jsx)(i,{chart:b,width:240,height:144,style:{border:`1px solid #ddd`}}),(0,l.jsx)(`figcaption`,{style:{color:`#888`,marginTop:4},children:`the same chart, 240 × 144`})]})]})]})},p=f.bind({}),p.storyName=`Outside a layer`,m={title:`Charts`,component:p},h=[`Element`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const book = useChartBook('columnClustered', chart => chart.getTitle().setText('Sales by month'));
  const [type, setType] = useState<IChart.Type>('columnClustered');
  const [legend, setLegend] = useState<IChart.LegendPosition>('right');
  const [title, setTitle] = useState('Sales by month');
  const [width, setWidth] = useState(560);
  const [height, setHeight] = useState(320);

  // The sheet view's chart element selection: what a press in the element selects.
  const selection = useMemo(() => book?.sheet.getView().getChartElementSelection() ?? null, [book]);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  useEffect(() => selection?.addListeners({
    onChange: () => setSelectedPath(selection.getActive()?.getPath() ?? null)
  }), [selection]);
  if (!book) return <div style={{
    padding: 12
  }}>making the workbook…</div>;
  const {
    chart,
    sheet
  } = book;
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
        <label>type{' '}
          <select value={type} onChange={e => {
          const next = e.target.value as IChart.Type;
          setType(next);
          chart.setChartType(next);
        }}>
            {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
        <label>legend{' '}
          <select value={legend} onChange={e => {
          const next = e.target.value as IChart.LegendPosition;
          setLegend(next);
          chart.getLegend().setPosition(next);
        }}>
            {LEGENDS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        <label>title{' '}
          <input value={title} onChange={e => {
          setTitle(e.target.value);
          chart.getTitle().setText(e.target.value || null);
        }} />
        </label>
        <label>width <input type="range" min={200} max={900} value={width} onChange={e => setWidth(Number(e.target.value))} /> {width}</label>
        <label>height <input type="range" min={120} max={600} value={height} onChange={e => setHeight(Number(e.target.value))} /> {height}</label>
        <button onClick={shuffle}>shuffle the cells</button>
      </div>
      <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>
        <figure style={{
        margin: 0
      }}>
          <ChartElement chart={chart} width={width} height={height} selection={selection} style={{
          border: '1px solid #ddd'
        }} />
          <figcaption style={{
          color: '#888',
          marginTop: 4
        }}>
            press an element to select it (a series first, then its point); selected: {selectedPath ?? 'nothing'}
          </figcaption>
        </figure>
        <figure style={{
        margin: 0
      }}>
          <ChartElement chart={chart} width={240} height={144} style={{
          border: '1px solid #ddd'
        }} />
          <figcaption style={{
          color: '#888',
          marginTop: 4
        }}>the same chart, 240 × 144</figcaption>
        </figure>
      </div>
    </div>;
}`,...p.parameters?.docs?.source}}}})))()}g();export{p as Element,h as __namedExportsOrder,m as default};