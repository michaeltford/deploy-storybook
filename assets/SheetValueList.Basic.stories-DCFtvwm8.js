import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-9WhXNj5T.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{Z as i,x as a}from"./esm-BwAES4tr.js";import{h as o}from"./qQOjlNBpbU9DwDwn-BLrs9klZ.js";import{Bt as s}from"./Drf58mcoTOQoptfv-BT1mBXV9.js";import{h as c}from"./esm-Di6fsGRs.js";import{A as l,N as u}from"./esm-BcpaeSfa.js";import{bt as d,it as f}from"./esm-BaVuX9rf.js";var p,m,h,g,_,v,y,b;e((()=>{p=t(n(),1),c(),i(),u(),f(),m=r(),h=[45292,45323,45352,45383,45414],g=[1234.5,89,1e6,-42.75],_=e=>{let{maxWidth:t,maxHeight:n}=e,[r]=(0,p.useState)(()=>{let e=new s,t=[...h,...g].map(e=>[e]),n=e.getRange({rowStart:0,colStart:0,rowEnd:t.length-1,colEnd:0});return n.setValues(t),e.getRange({rowStart:0,colStart:0,rowEnd:h.length-1,colEnd:0}).getStyle().setNumberFormat(`dd-mmm-yyyy`),e.getRange({rowStart:h.length,colStart:0,rowEnd:t.length-1,colEnd:0}).getStyle().setNumberFormat(`$#,##0.00`),n}),i=()=>Math.ceil(r.getBestFit({axes:o.AxisSelection.Column}).width),[c]=(0,p.useState)(i),[u,f]=(0,p.useState)(null);(0,p.useEffect)(()=>{f(i()),document.fonts?.ready.then(()=>f(i()))},[r]);let _=u??c,v=r.getSheet().getRowHeaders(),y=Math.round(v.getOffset(1)-v.getOffset(0)),b=r.getCoords().rowEnd-r.getCoords().rowStart+1,x=(0,p.useMemo)(()=>new l({getBounds:()=>({rowStart:0,colStart:0,rowEnd:Math.max(0,b-1),colEnd:0})}),[b]),S=a(x,e=>e.getSelection()).cell.rowIndex,[C,w]=(0,p.useState)(null),T=(0,p.useMemo)(()=>Array.from({length:b},(e,t)=>r.getCell({rowIndex:t,colIndex:0})),[r,b]);return(0,m.jsx)(`div`,{className:`storybook-container`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,height:`100%`,fontSize:13},children:[(0,m.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:12},children:[`getBestFit width: `,_,`px (at init `,c,`px`,u!==null&&u!==c?` → settled ${u}px`:``,`) · row height: `,y,`px · maxWidth: `,t,`px · active: `,S,C?` · chose ${JSON.stringify(C.value)} → "${C.text}"`:``]}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{style:{marginBottom:4,color:`#888`},children:[`today — `,(0,m.jsx)(`code`,{children:`String(value)`})]}),(0,m.jsx)(`ul`,{style:{margin:0,padding:`4px 0`,listStyle:`none`,width:_,border:`1px solid #ccc`,background:`white`},children:T.map((e,t)=>(0,m.jsx)(`li`,{style:{padding:`2px 6px`,whiteSpace:`nowrap`},children:String(e.getValue())},t))})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{style:{marginBottom:4,color:`#888`},children:[`sheet-backed — `,(0,m.jsx)(`code`,{children:`SheetValueList`})]}),(0,m.jsx)(`div`,{style:{border:`1px solid #ccc`,background:`white`,display:`inline-block`},children:(0,m.jsx)(d,{range:r,selection:x,autoFocus:!0,onChoose:e=>w({value:e.getValue(),text:e.getText()}),contentWidth:_,style:{maxWidth:t,maxHeight:n}})})]})]})]})})},v=_.bind({}),v.args={maxWidth:240,maxHeight:400},v.storyName=`Sheet backed`,y={title:`List`,component:d,parameters:{controls:{sort:`requiredFirst`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`props => {
  const {
    maxWidth,
    maxHeight
  } = props;

  // The scratch sheet. A standalone \`Sheet\` — no workbook, so nothing here can reach an undo stack,
  // a calc graph or any UI. In the real consumers this is the caller's job too (the component takes
  // a range and only a range).
  const [range] = useState<ICellRange>(() => {
    const sheet = new Sheet();
    const values = [...DATES, ...AMOUNTS].map(v => [v]);
    const range = sheet.getRange({
      rowStart: 0,
      colStart: 0,
      rowEnd: values.length - 1,
      colEnd: 0
    });
    range.setValues(values);
    sheet.getRange({
      rowStart: 0,
      colStart: 0,
      rowEnd: DATES.length - 1,
      colEnd: 0
    }).getStyle().setNumberFormat('dd-mmm-yyyy');
    sheet.getRange({
      rowStart: DATES.length,
      colStart: 0,
      rowEnd: values.length - 1,
      colEnd: 0
    }).getStyle().setNumberFormat('$#,##0.00');
    // No autoFit: the width is a QUERY now, so the source sheet is never resized to answer it.
    return range;
  });
  const bestFitWidth = (): number => Math.ceil(range.getBestFit({
    axes: IRange.AxisSelection.Column
  }).width);

  // Measured during the FIRST RENDER, when the canvas font measurer may not have resolved the sheet's
  // font yet — and again after paint, and again once \`document.fonts\` settles. If these disagree the
  // width is a measurement-timing problem, not a layout one. (Diagnostic; drop once it reads steady.)
  const [widthAtInit] = useState<number>(bestFitWidth);
  const [widthSettled, setWidthSettled] = useState<number | null>(null);
  useEffect(() => {
    setWidthSettled(bestFitWidth());
    document.fonts?.ready.then(() => setWidthSettled(bestFitWidth()));
  }, [range]);
  const contentWidth = widthSettled ?? widthAtInit;

  // What the component will use for every row — the sheet's, not a number the story invented.
  const rowHeaders = range.getSheet().getRowHeaders();
  const sheetRowHeight = Math.round(rowHeaders.getOffset(1) - rowHeaders.getOffset(0));
  const itemCount = range.getCoords().rowEnd - range.getCoords().rowStart + 1;
  const selection = useMemo(() => new DefaultSelection({
    getBounds: () => ({
      rowStart: 0,
      colStart: 0,
      rowEnd: Math.max(0, itemCount - 1),
      colEnd: 0
    })
  }), [itemCount]);
  const active = useBoundSyncExternalStore(selection, s => s.getSelection()).cell.rowIndex;
  const [chosen, setChosen] = useState<{
    value: unknown;
    text: string;
  } | null>(null);
  const rows = useMemo(() => Array.from({
    length: itemCount
  }, (_, i) => range.getCell({
    rowIndex: i,
    colIndex: 0
  })), [range, itemCount]);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      height: '100%',
      fontSize: 13
    }}>
        <div style={{
        fontFamily: 'monospace',
        fontSize: 12
      }}>
          getBestFit width: {contentWidth}px (at init {widthAtInit}px
          {widthSettled !== null && widthSettled !== widthAtInit ? \` → settled \${widthSettled}px\` : ''})
          · row height: {sheetRowHeight}px · maxWidth: {maxWidth}px · active: {active}
          {chosen ? \` · chose \${JSON.stringify(chosen.value)} → "\${chosen.text}"\` : ''}
        </div>

        <div style={{
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start'
      }}>
          <div>
            <div style={{
            marginBottom: 4,
            color: '#888'
          }}>today — <code>String(value)</code></div>
            <ul style={{
            margin: 0,
            padding: '4px 0',
            listStyle: 'none',
            width: contentWidth,
            border: '1px solid #ccc',
            background: 'white'
          }}>
              {rows.map((cell: ICell, i: number) => <li key={i} style={{
              padding: '2px 6px',
              whiteSpace: 'nowrap'
            }}>
                  {String(cell.getValue())}
                </li>)}
            </ul>
          </div>

          <div>
            <div style={{
            marginBottom: 4,
            color: '#888'
          }}>sheet-backed — <code>SheetValueList</code></div>
            {/* The border lives on a WRAPPER, not on the list: the list adds no padding of its own so
                its rows keep the cell's own text offset (what lets a dropdown line up with the cell it
                drops out of). \`width: content, max-width: cap\` is the width rule's shape — a floor
                (\`minWidth\`, the anchored cell) is the caller's to add. */}
            <div style={{
            border: '1px solid #ccc',
            background: 'white',
            display: 'inline-block'
          }}>
              <SheetValueList range={range} selection={selection} autoFocus onChoose={(cell: ICell) => setChosen({
              value: cell.getValue(),
              text: cell.getText()
            })}
            // \`contentWidth\`, not \`style.width\` — getBestFit describes the COLUMN, and the list
            // adds its own scrollbar gutter on top so the column really ends up that wide.
            contentWidth={contentWidth}
            // No height: the list is as tall as its rows, using the SHEET's row height. Passing a
            // literal here is how the rows got squeezed — the caller cannot know that number.
            style={{
              maxWidth,
              maxHeight
            }} />
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...v.parameters?.docs?.source}}},b=[`SheetBacked`]}))();export{v as SheetBacked,b as __namedExportsOrder,y as default};