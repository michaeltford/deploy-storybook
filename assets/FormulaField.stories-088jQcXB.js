import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{kt as i,yt as a}from"./esm-DTVy7_Fo.js";import{d as o,h as s}from"./esm-DLJwqohc.js";import{t as c}from"./7Ki5SbrrIiOlShWz-VvGI-0-K.js";import{i as l}from"./esm-CgKlu4AS.js";var u,d,f,p,m,h,g;function _(){return(_=t((()=>{u=e(n(),1),o(),a(),l(),d=r(),f=e=>e==null?`(none)`:typeof e==`string`?e:e.getText(),p=()=>{let e=(0,u.useMemo)(()=>{let e=new s;e.addSheet(`Sheet2`);let t=e.getSheetAt(0);return t.getRange(`A1:B1`).setValues([[`Pick`,`me`]]),t.getRange(`B3`).setValue(42),e},[]),[t,n]=(0,u.useState)(`=B3*2`),[r,a]=(0,u.useState)(null);return(0,d.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,flexDirection:`column`,gap:8,height:`100%`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:16,maxWidth:880},children:[(0,d.jsx)(c,{value:t,onChangeInput:n,workbook:e}),(0,d.jsx)(c,{grammar:`reference`,value:r,onChangeInput:a,allowMulti:!0,workbook:e})]}),(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`0 2px`},children:[`formula: `,f(t),` | reference: `,f(r)]}),(0,d.jsx)(`div`,{style:{flex:`1 1 100%`,minHeight:0},children:(0,d.jsx)(i,{workbook:e})})]})},m=p.bind({}),m.storyName=`FormulaField`,h={title:`Editor/FormulaField`,component:m},g=[`FormulaFieldStory`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const workbook: IWorkbook = useMemo(() => {
    const wb = new Workbook();
    wb.addSheet('Sheet2');
    const s = wb.getSheetAt(0);
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