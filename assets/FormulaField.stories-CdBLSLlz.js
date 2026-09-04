import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{h as i,s as a}from"./esm-Di6fsGRs.js";import{c as o,it as s}from"./esm-BaVuX9rf.js";import{Mn as c}from"./D8G42xZ7XSAIgohe-1Ath938B.js";import{n as l}from"./esm-DbuzZzq92.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),i(),s(),l(),d=r(),f=e=>e==null?`(none)`:typeof e==`string`?e:e.getText(),p=()=>{let e=(0,u.useMemo)(()=>{let e=new a;e.addSheet(`Sheet2`);let t=e.getSheetAt(0);return t.getRange(`A1:B1`).setValues([[`Pick`,`me`]]),t.getRange(`B3`).setValue(42),e},[]),[t,n]=(0,u.useState)(`=B3*2`),[r,i]=(0,u.useState)(null);return(0,d.jsxs)(`div`,{className:`storybook-container`,style:{display:`flex`,flexDirection:`column`,gap:8,height:`100%`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:16,maxWidth:880},children:[(0,d.jsx)(c,{value:t,onChangeInput:n,workbook:e}),(0,d.jsx)(c,{grammar:`reference`,value:r,onChangeInput:i,allowMulti:!0,workbook:e})]}),(0,d.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12,padding:`0 2px`},children:[`formula: `,f(t),` | reference: `,f(r)]}),(0,d.jsx)(`div`,{style:{flex:`1 1 100%`,minHeight:0},children:(0,d.jsx)(o,{workbook:e})})]})},m=p.bind({}),m.storyName=`FormulaField`,h={title:`Editor/FormulaField`,component:m},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},g=[`FormulaFieldStory`]}))();export{m as FormulaFieldStory,g as __namedExportsOrder,h as default};