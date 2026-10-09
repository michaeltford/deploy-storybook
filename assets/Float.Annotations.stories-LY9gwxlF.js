import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{A as i,I as a,St as o,T as s,kt as c,s as l,y as u,yt as d}from"./esm-DTVy7_Fo.js";import{d as f,h as p}from"./esm-DLJwqohc.js";var m,h,g,_,v,y,b;function x(){return(x=t((()=>{m=e(n(),1),f(),d(),h=r(),g=e=>{e.getRange(`B2:D2`).setValues([[`Region`,`Units`,`Revenue`]]),e.getRange(`B3:D6`).setValues([[`East`,10,100],[`West`,20,250],[`North`,15,175],[`South`,12,140]]),e.getRange(`F40`).setValue(`far below`),e.getRange(`T8`).setValue(`far right`)},_=()=>{let e=(0,m.useMemo)(()=>({layers:[(0,h.jsx)(u,{},`annotations`)]}),[]),t=(0,m.useMemo)(()=>{let e=new p;return g(e.getSelectedSheet()),e},[]),{navigable:n,position:r,annotations:d}=l(t),[f,_]=(0,m.useState)(0),v=t.getSelectedSheet().getName(),y=e=>`'${v}'!${e}`,b=()=>{_(e=>e+1),o(t,`result`,[{range:y(`B2:D6`),label:`Walk ${f+1}: the table`},{range:y(`F40`),label:`A value far below — scroll to see the marker`},{range:y(`T8`),label:`A value far right`},{range:y(`C4`),label:`Shares its chip with the table? No — different corner.`}])},x=()=>{o(t,`question`,[{range:y(`D3:D6`),label:`Is revenue in thousands?`}])},S=()=>{let e=3+Math.floor(Math.random()*4);o(t,`working`,[{range:y(`B${e}:D${e}`)}])},C={font:`12px system-ui`,padding:`3px 10px`,borderRadius:4,border:`1px solid #bbb`,background:`#f4f4f6`,cursor:`pointer`};return(0,h.jsx)(`div`,{className:`storybook-container`,style:{height:`100%`},children:(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:6},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,padding:`4px 6px`,flexWrap:`wrap`,font:`12px monospace`,color:`#555`},children:[(0,h.jsx)(`button`,{style:C,onClick:b,children:`result walk`}),(0,h.jsx)(`button`,{style:C,onClick:x,children:`question`}),(0,h.jsx)(`button`,{style:C,onClick:S,children:`working cursor`}),(0,h.jsx)(`button`,{style:C,onClick:()=>a(t),children:`↑ prev`}),(0,h.jsx)(`button`,{style:C,onClick:()=>s(t),children:`↓ next`}),(0,h.jsx)(`button`,{style:C,onClick:()=>i(t),children:`clear`}),(0,h.jsxs)(`span`,{children:[d.length,` annotations · `,r,`/`,n.length]})]}),(0,h.jsx)(c,{workbook:t,propsSheet:e,style:{width:`100%`,height:`100%`}})]})})},v=_.bind({}),v.storyName=`Range annotations (boxes, chips, edge marker)`,y={title:`Float`,component:v},b=[`Annotations`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  // Stable: the layer reads the store itself, so the sheet props never change identity.
  const propsSheet = useMemo<Partial<SheetElementProps>>(() => ({
    layers: [<RangeAnnotationLayer key="annotations" />]
  }), []);
  const workbook = useMemo<IWorkbook>(() => {
    const wb = new Workbook();
    seed(wb.getSelectedSheet());
    return wb;
  }, []);
  const {
    navigable,
    position,
    annotations
  } = useRangeAnnotations(workbook);
  const [walks, setWalks] = useState<number>(0);
  const sheetName = workbook.getSelectedSheet().getName();
  const q = (addr: string): string => \`'\${sheetName}'!\${addr}\`;
  const review = (): void => {
    setWalks(n => n + 1);
    addRangeAnnotations(workbook, 'result', [{
      range: q('B2:D6'),
      label: \`Walk \${walks + 1}: the table\`
    }, {
      range: q('F40'),
      label: 'A value far below — scroll to see the marker'
    }, {
      range: q('T8'),
      label: 'A value far right'
    }, {
      range: q('C4'),
      label: 'Shares its chip with the table? No — different corner.'
    }]);
  };
  const question = (): void => {
    addRangeAnnotations(workbook, 'question', [{
      range: q('D3:D6'),
      label: 'Is revenue in thousands?'
    }]);
  };
  const working = (): void => {
    const row = 3 + Math.floor(Math.random() * 4);
    addRangeAnnotations(workbook, 'working', [{
      range: q(\`B\${row}:D\${row}\`)
    }]);
  };
  const btn: React.CSSProperties = {
    font: '12px system-ui',
    padding: '3px 10px',
    borderRadius: 4,
    border: '1px solid #bbb',
    background: '#f4f4f6',
    cursor: 'pointer'
  };
  return <div className="storybook-container" style={{
    height: '100%'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 6
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        padding: '4px 6px',
        flexWrap: 'wrap',
        font: '12px monospace',
        color: '#555'
      }}>
          <button style={btn} onClick={review}>result walk</button>
          <button style={btn} onClick={question}>question</button>
          <button style={btn} onClick={working}>working cursor</button>
          <button style={btn} onClick={() => prevRangeAnnotation(workbook)}>↑ prev</button>
          <button style={btn} onClick={() => nextRangeAnnotation(workbook)}>↓ next</button>
          <button style={btn} onClick={() => clearRangeAnnotations(workbook)}>clear</button>
          <span>{annotations.length} annotations · {position}/{navigable.length}</span>
        </div>
        <WorkbookElement workbook={workbook} propsSheet={propsSheet} style={{
        width: '100%',
        height: '100%'
      }} />
      </div>
    </div>;
}`,...v.parameters?.docs?.source}}}})))()}x();export{v as Annotations,b as __namedExportsOrder,y as default};