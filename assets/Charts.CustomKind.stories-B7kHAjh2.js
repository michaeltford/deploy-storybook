import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i}from"./B0udj3rW9dyAqFeR-DSxiakK_.js";import{f as a}from"./esm-COMwdbTt.js";import{t as o}from"./CNASFYJrAlbRjD1_-D-7V2MwB.js";import{t as s}from"./f-CN50l4aX3XjFUt-CoP-faX5.js";import{Et as c}from"./esm-CRLSzNYP.js";import{i as l,t as u}from"./useChartBook-BcDMQDB7.js";var d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{d=e(n(),1),a(),c(),u(),f=r(),p={types:[`custom:lollipop`],coordinates:`cartesian`,layout:(e,t)=>{let{category:n,value:r}=t.roles,i=t.scale(r),a=t.yOf(i,r,t.crossValue(n,i)),o=e.series.length,s=[];e.series.forEach((e,c)=>e.values.forEach((e,l)=>{let u=t.pointSlot(n,l);if(e===null||u===null)return;let d=t.xOf(n,u)+(c-(o-1)/2)*6;s.push({series:c,x:t.at(d),y0:t.at(a),y1:t.at(t.yOf(i,r,e))})}));let{inner:c}=t;return{type:`custom`,kind:`lollipop`,axisIds:[n.id,r.id],plot:{x:t.at(c.x),y:t.at(c.y),width:t.px(c.width),height:t.px(c.height)},series:e.series.map(e=>({...t.base(e),marker:null})),data:{stems:s,radius:t.px(4)}}}},m={types:[`custom:lollipop`],graphic:(e,t)=>{if(e.type!==`custom`)return[];let{stems:n,radius:r}=e.data;return n.flatMap(n=>{let i=t.paint(e.series[n.series].fill);return[{type:`line`,silent:!0,z:2,shape:{x1:n.x,y1:n.y0,x2:n.x,y2:n.y1},style:{stroke:i,lineWidth:2}},{type:`circle`,silent:!0,z:3,shape:{cx:n.x,cy:n.y1,r},style:{fill:i}}]})},legendKey:(e,t,n,r,i)=>[{type:`circle`,silent:!0,z:50,shape:{cx:r.x+r.width/2,cy:r.y+r.height/2,r:r.height/2},style:{fill:i.paint(t.fill)}}]},i.register(p),o.register(m),h=()=>{let e=l(`custom:lollipop`,e=>e.getTitle().setText(`A lollipop chart`)),[t,n]=(0,d.useState)(`custom:lollipop`);if(!e)return(0,f.jsx)(`div`,{style:{padding:12},children:`making the workbook…`});let{chart:r}=e;return(0,f.jsxs)(`div`,{style:{padding:12,font:`12px system-ui, sans-serif`,display:`flex`,flexDirection:`column`,gap:12},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,f.jsxs)(`label`,{children:[`type`,` `,(0,f.jsxs)(`select`,{value:t,onChange:e=>{n(e.target.value),r.setChartType(e.target.value)},children:[(0,f.jsx)(`option`,{value:`custom:lollipop`,children:`custom:lollipop`}),(0,f.jsx)(`option`,{value:`columnClustered`,children:`columnClustered`}),(0,f.jsx)(`option`,{value:`line`,children:`line`})]})]}),(0,f.jsxs)(`span`,{style:{color:`#888`},children:[`getChartType() → `,r.getChartType()]})]}),(0,f.jsx)(s,{chart:r,width:560,height:320,style:{border:`1px solid #ddd`}})]})},g=h.bind({}),g.storyName=`A custom kind`,_={title:`Charts`,component:g},v=[`CustomKind`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const book = useChartBook('custom:lollipop', chart => chart.getTitle().setText('A lollipop chart'));
  const [type, setType] = useState<string>('custom:lollipop');
  if (!book) return <div style={{
    padding: 12
  }}>making the workbook…</div>;
  const {
    chart
  } = book;
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
      alignItems: 'center'
    }}>
        <label>type{' '}
          <select value={type} onChange={e => {
          setType(e.target.value);
          chart.setChartType(e.target.value as IChart.Type | string);
        }}>
            <option value="custom:lollipop">custom:lollipop</option>
            <option value="columnClustered">columnClustered</option>
            <option value="line">line</option>
          </select>
        </label>
        <span style={{
        color: '#888'
      }}>getChartType() → {chart.getChartType()}</span>
      </div>
      <ChartElement chart={chart} width={560} height={320} style={{
      border: '1px solid #ddd'
    }} />
    </div>;
}`,...g.parameters?.docs?.source}}}})))()}y();export{g as CustomKind,v as __namedExportsOrder,_ as default};