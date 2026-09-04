import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{h as i,s as a}from"./esm-Di6fsGRs.js";import{it as o,rt as s,v as c}from"./esm-BaVuX9rf.js";import{Studio as l,n as u}from"./esm-DbuzZzq92.js";var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),i(),o(),u(),f=r(),p=e=>e==null?`(none)`:typeof e==`string`?e:e.getText(),m=e=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,flex:`1 1 0`,minWidth:220},children:[(0,f.jsx)(`span`,{style:{fontFamily:`sans-serif`,fontSize:12,opacity:.8},children:e.caption}),e.children,(0,f.jsxs)(`span`,{style:{fontFamily:`monospace`,fontSize:11,opacity:.7},children:[`→ `,e.readout]})]}),h=()=>{let e=(0,d.useMemo)(()=>{let e=new a;e.addSheet(`Sheet2`);let t=e.getSheetAt(0);return t.getRange(`A1:B3`).setValues([[1,2],[3,4],[5,6]]),t.getRange(`D1`).setValue(`Focus a field, then pick on the grid.`),e.getSheet(`Sheet2`).getRange(`C1:D4`).setValues([[10,20],[30,40],[50,60],[70,80]]),e},[]),[t,n]=(0,d.useState)(`=SUM(A1:B3)*2`),[r,i]=(0,d.useState)(null),[o,u]=(0,d.useState)(`Sheet2!C1:D4`);return(0,f.jsx)(s,{workbook:e,children:(0,f.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,flexDirection:`column`,gap:8,height:`100%`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,padding:`4px 2px`},children:[(0,f.jsx)(m,{caption:`Formula · live (emits every valid change)`,readout:p(t),children:(0,f.jsx)(c,{value:t,onChangeInput:n})}),(0,f.jsx)(m,{caption:`Formula · done (✓/✗ while picking; emits on commit)`,readout:p(r),children:(0,f.jsx)(c,{value:r,changeOn:`done`,onDone:i,placeholder:`=A1*2 …`})}),(0,f.jsx)(m,{caption:`Reference · done (limit input; multi-range)`,readout:p(o),children:(0,f.jsx)(c,{grammar:`reference`,allowMulti:!0,value:o,changeOn:`done`,onDone:u})})]}),(0,f.jsx)(`div`,{style:{flex:`1 1 100%`,minHeight:0,display:`flex`,flexDirection:`column`},children:(0,f.jsx)(l,{workbook:e,sx:{flex:`1 1 100%`,minHeight:0}})})]})})},g=h.bind({}),g.storyName=`Third-party FormulaInputs (over a Studio)`,_={title:`Editor/FormulaInput (Third-party)`,component:g},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook();
    wb.addSheet('Sheet2');
    const s = wb.getSheetAt(0);
    s.getRange('A1:B3').setValues([[1, 2], [3, 4], [5, 6]]);
    s.getRange('D1').setValue('Focus a field, then pick on the grid.');
    wb.getSheet('Sheet2').getRange('C1:D4').setValues([[10, 20], [30, 40], [50, 60], [70, 80]]);
    return wb;
  }, []);

  // Each field is CONTROLLED — the emitted \`IFormula\` echoes back into \`value\`, exactly what a real
  // host (a chart-source panel, a rule editor) does.
  const [live, setLive] = useState<ICalculation.IFormula | string | null>('=SUM(A1:B3)*2');
  const [committed, setCommitted] = useState<ICalculation.IFormula | string | null>(null);
  const [reference, setReference] = useState<ICalculation.IFormula | string | null>('Sheet2!C1:D4');
  return <WorkbookProvider workbook={workbook}>
      <div className="storybook-container" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      height: '100%'
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        padding: '4px 2px'
      }}>
          <Labeled caption="Formula · live (emits every valid change)" readout={asText(live)}>
            <FormulaInput value={live} onChangeInput={setLive} />
          </Labeled>
          <Labeled caption="Formula · done (✓/✗ while picking; emits on commit)" readout={asText(committed)}>
            <FormulaInput value={committed} changeOn="done" onDone={setCommitted} placeholder="=A1*2 …" />
          </Labeled>
          <Labeled caption="Reference · done (limit input; multi-range)" readout={asText(reference)}>
            <FormulaInput grammar="reference" allowMulti value={reference} changeOn="done" onDone={setReference} />
          </Labeled>
        </div>
        <div style={{
        flex: '1 1 100%',
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Studio workbook={workbook} sx={{
          flex: '1 1 100%',
          minHeight: 0
        }} />
        </div>
      </div>
    </WorkbookProvider>;
}`,...g.parameters?.docs?.source}}},v=[`FormulaInputThirdParty`]}))();export{g as FormulaInputThirdParty,v as __namedExportsOrder,_ as default};