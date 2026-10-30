import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./f-CN50l4aX3XjFUt-CoP-faX5.js";import{Et as a}from"./esm-CRLSzNYP.js";import{n as o,r as s,t as c}from"./useChartBook-BcDMQDB7.js";var l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{l=e(n(),1),a(),c(),u=r(),d=[{family:`column`,types:[`columnClustered`,`columnStacked`,`columnStacked100`,`3DColumnClustered`,`3DColumnStacked`,`3DColumnStacked100`,`3DColumn`]},{family:`line`,types:[`line`,`lineStacked`,`lineStacked100`,`lineMarkers`,`lineMarkersStacked`,`lineMarkersStacked100`,`3DLine`]},{family:`pie`,types:[`pie`,`pieExploded`,`3DPie`,`3DPieExploded`,`pieOfPie`,`barOfPie`,`doughnut`,`doughnutExploded`]},{family:`bar`,types:[`barClustered`,`barStacked`,`barStacked100`,`3DBarClustered`,`3DBarStacked`,`3DBarStacked100`]},{family:`area`,types:[`area`,`areaStacked`,`areaStacked100`,`3DArea`,`3DAreaStacked`,`3DAreaStacked100`]},{family:`scatter and bubble`,types:[`xyscatter`,`xyscatterSmooth`,`xyscatterSmoothNoMarkers`,`xyscatterLines`,`xyscatterLinesNoMarkers`,`bubble`,`bubble3DEffect`]},{family:`stock`,types:[`stockHLC`,`stockOHLC`,`stockVHLC`,`stockVOHLC`]},{family:`surface`,types:[`surface`,`surfaceWireframe`,`surfaceTopView`,`surfaceTopViewWireframe`]},{family:`radar`,types:[`radar`,`radarMarkers`,`radarFilled`]},{family:`2016`,types:[`treemap`,`sunburst`,`histogram`,`pareto`,`boxwhisker`,`waterfall`,`funnel`,`regionMap`]}],f=d.reduce((e,t)=>e+t.types.length,0),p=()=>{let[e,t]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=!0;return(async()=>{let{sheet:n}=o(),r=[];for(let{family:e,types:t}of d){let i=[];for(let e of t)try{let t=await n.getCharts().add(s(e),{type:e});t.getTitle().setText(e),i.push({type:e,chart:t})}catch(t){i.push({type:e,chart:null,error:t.message})}r.push({family:e,made:i})}e&&t(r)})(),()=>{e=!1}},[]),e?(0,u.jsx)(`div`,{style:{padding:12,font:`12px system-ui, sans-serif`},children:e.map(({family:e,made:t})=>(0,u.jsxs)(`section`,{style:{marginBottom:16},children:[(0,u.jsx)(`h3`,{style:{margin:`8px 0`,font:`600 13px system-ui, sans-serif`},children:e}),(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:12},children:t.map(({type:e,chart:t,error:n})=>(0,u.jsxs)(`figure`,{style:{margin:0,padding:8,border:`1px solid #ddd`,borderRadius:4},children:[t?(0,u.jsx)(i,{chart:t,width:`100%`,height:180}):(0,u.jsx)(`div`,{style:{height:180,color:`#b00020`},children:n}),(0,u.jsx)(`figcaption`,{style:{marginTop:4},children:e})]},e))})]},e))}):(0,u.jsxs)(`div`,{style:{padding:12},children:[`making `,f,` charts…`]})},m=p.bind({}),m.storyName=`Every gallery type`,h={title:`Charts`,component:m},g=[`Gallery`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [families, setFamilies] = useState<{
    family: string;
    made: Made[];
  }[] | null>(null);
  useEffect(() => {
    let live = true;
    (async () => {
      const {
        sheet
      } = newBook();
      const out: {
        family: string;
        made: Made[];
      }[] = [];
      for (const {
        family,
        types
      } of GALLERY) {
        const made: Made[] = [];
        for (const type of types) {
          try {
            const chart = await sheet.getCharts().add(sourceOf(type), {
              type
            });
            chart.getTitle().setText(type);
            made.push({
              type,
              chart
            });
          } catch (error: unknown) {
            made.push({
              type,
              chart: null,
              error: (error as Error).message
            });
          }
        }
        out.push({
          family,
          made
        });
      }
      if (live) setFamilies(out);
    })();
    return () => {
      live = false;
    };
  }, []);
  if (!families) return <div style={{
    padding: 12
  }}>making {COUNT} charts…</div>;
  return <div style={{
    padding: 12,
    font: '12px system-ui, sans-serif'
  }}>
      {families.map(({
      family,
      made
    }) => <section key={family} style={{
      marginBottom: 16
    }}>
          <h3 style={{
        margin: '8px 0',
        font: '600 13px system-ui, sans-serif'
      }}>{family}</h3>
          <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 12
      }}>
            {made.map(({
          type,
          chart,
          error
        }) => <figure key={type} style={{
          margin: 0,
          padding: 8,
          border: '1px solid #ddd',
          borderRadius: 4
        }}>
                {chart ? <ChartElement chart={chart} width="100%" height={180} /> : <div style={{
            height: 180,
            color: '#b00020'
          }}>{error}</div>}
                <figcaption style={{
            marginTop: 4
          }}>{type}</figcaption>
              </figure>)}
          </div>
        </section>)}
    </div>;
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as Gallery,g as __namedExportsOrder,h as default};