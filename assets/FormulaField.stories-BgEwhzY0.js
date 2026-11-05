import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,h as a}from"./esm-BGYLa-oz.js";import{D as o,Dt as s}from"./esm-DWpwXhBJ.js";import{s as c}from"./esm-CIFK6jPh.js";import{r as l}from"./W5Rvml-3G4XekwoR-DrMqp2lk.js";var u,d,f,p,m,h,g;function _(){return(_=t((()=>{u=e(n(),1),a(),s(),c(),d=r(),f=e=>e==null?`(none)`:typeof e==`string`?e:e.getText(),p=()=>{let e=(0,u.useMemo)(()=>{let e=new i;e.addWorksheet(`Sheet2`);let t=e.getWorksheetAt(0);return t.getRange(`A1:B1`).setValues([[`Pick`,`me`]]),t.getRange(`B3`).setValue(42),e},[]),[t,n]=(0,u.useState)(`=B3*2`),[r,a]=(0,u.useState)(null);return(0,d.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,flexDirection:`column`,gap:8,height:`100%`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:16,maxWidth:880},children:[(0,d.jsx)(l,{value:t,onChangeInput:n,workbook:e}),(0,d.jsx)(l,{grammar:`reference`,value:r,onChangeInput:a,allowMulti:!0,workbook:e})]}),(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`0 2px`},children:[`formula: `,f(t),` | reference: `,f(r)]}),(0,d.jsx)(`div`,{style:{flex:`1 1 100%`,minHeight:0},children:(0,d.jsx)(o,{workbook:e})})]})},m=p.bind({}),m.storyName=`FormulaField`,h={title:`Editor/FormulaField`,component:m},g=[`FormulaFieldStory`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook();
    wb.addWorksheet('Sheet2');
    const s = wb.getWorksheetAt(0);
    s.getRange('A1:B1').setValues([['Pick', 'me']]);
    s.getRange('B3').setValue(42);
    return wb;
  }, []);
  const [formula, setFormula] = useState<ICalculation.IFormula | string | null>('=B3*2');
  const [reference, setReference] = useState<ICalculation.IFormula | string | null>(null);
  return <div className="storybook-container" style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    height: '100%'
  }}>
      <div style={{
      display: 'flex',
      gap: 16,
      maxWidth: 880
    }}>
        <FormulaField value={formula} onChangeInput={setFormula} workbook={workbook} />
        <FormulaField grammar="reference" value={reference} onChangeInput={setReference} allowMulti workbook={workbook} />
      </div>
      <div style={{
      fontFamily: 'monospace',
      fontSize: 12,
      padding: '0 2px'
    }}>
        formula: {asText(formula)} | reference: {asText(reference)}
      </div>
      <div style={{
      flex: '1 1 100%',
      minHeight: 0
    }}>
        <WorkbookElement workbook={workbook} />
      </div>
    </div>;
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as FormulaFieldStory,g as __namedExportsOrder,h as default};