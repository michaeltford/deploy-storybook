import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{m as r}from"./ClB5ix51roQOpZEr-CzAvOe14.js";import{t as i}from"./esm-BqI3iaXz.js";import{A as a}from"./zqJOaweiXE9D8RY1-BXtGT3r7.js";import{d as o,n as s}from"./esm-D9igw9py.js";import{s as c,t as l}from"./esm-DRC3oiMm.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{u=t(),o(),c(),d=n(),f=`"Hello World", 3.5%, ,$4.25,
 10/23/95,"Hello O'Universe"
,true, -100
July-04`,p=e=>{let{...t}=e,n=(0,u.useMemo)(()=>(async()=>{let e=new a;e.setNamed({name:`Off Year`,style:{fill:r.Named.Yellow,font:{color:r.Named.Brown},numberFormat:`Short Date`}}),e.setNamed({name:`Negative Value`,style:{fill:r.Named.LtPink,font:{color:r.Named.DkRed}}});let t={source:new TextEncoder().encode(f).buffer,format:`csv`,createWorkbookOptions:{styles:e,origin:`From CSV`},setValuesOptions:{textParser:{parse:(e,t)=>{let n=t.getCell(),r;if(n.getType()===i.Number){let e=n.getDate();e?e.getFullYear()!==new Date().getFullYear()&&(r={style:{named:`Off Year`}}):n.getValue()<0&&(r={style:{named:`Negative Value`}})}return r}}}},n=await s.read(t);return n.getView().setShowFormulaBar(!1),n.getView().setShowTabs(!1),n.getSelectedSheet().setName(`CSVData`),n.getSelectedSheet().getUsedRange().autoFit(),n})(),[]);return(0,d.jsx)(l,{sx:{border:`blue solid 2px`,borderRadius:`8px`,flex:`1 1 100%`,minHeight:`460px`},...t,workbook:n})},m=p.bind({}),m.args={},m.storyName=`From CSV`,h={title:`Studio/From CSV`,component:m},g=[`StudioFromCSV`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;

  /*
   * Example that uses a CSV string to create a workbook.
   * We also create a custom cell styles so we can illustrate
   * setting cell styles based on values.
   */
  const loadResults: Promise<IWorkbook> = useMemo(() => {
    // make async for each of use
    const doLoad = async (): Promise<IWorkbook> => {
      /**
       * Create a StyleCollection. This is not needed but
       * allows us to create Named Styles that then also appear in the styles menu
       */
      const customStyles: StyleCollection = new StyleCollection();
      customStyles.setNamed({
        name: 'Off Year',
        style: {
          fill: IColor.Named.Yellow,
          font: {
            color: IColor.Named.Brown
          },
          numberFormat: "Short Date"
        }
      });
      customStyles.setNamed({
        name: 'Negative Value',
        style: {
          fill: IColor.Named.LtPink,
          font: {
            color: IColor.Named.DkRed
          }
        }
      });

      // For illustration purposes we are are doing to color negative values and dates not from this year with a different color.
      const csvOptions: ReadCSVOptions = {
        source: new TextEncoder().encode(csv).buffer,
        format: 'csv',
        createWorkbookOptions: {
          styles: customStyles,
          origin: 'From CSV' // string shorthand: an unbound origin with this display name
        },
        setValuesOptions: {
          textParser: {
            // csv defaults this to true, set to false if every value should remain as text
            parse: (_text: string, context: ICell.IteratorContext): ICell.Modifiers => {
              /* cell is available but will make importing **much** slower */
              const cell: ICell = context.getCell();
              let updateValue: ICell.Modifiers = undefined; // undefined means use default parser; null means clear
              if (cell.getType() === ScalarType.Number) {
                // dates are numbers with special formatting. if toDate return a date object then it is safe to treat it as a date.
                const asDate = cell.getDate();
                if (asDate) {
                  if (asDate.getFullYear() !== new Date().getFullYear()) {
                    updateValue = {
                      style: {
                        named: 'Off Year'
                      }
                    };
                  }
                } else {
                  if (cell.getValue() as number < 0) {
                    // updateValue = Math.abs(preParsed.value as number); // as a value
                    // updateValue = preParsed.createCell({ value: 123 }); // as a new cell
                    // updateValue = { style: { fill: IColor.Named.LtPink, font: IColor.Named.DkRed } }; /// as an update that is styled
                    updateValue = {
                      style: {
                        named: 'Negative Value'
                      }
                    }; // as a named style
                  }
                }
              }
              return updateValue;
            }
          }
        }
        // papaParseConfig: {} //ParseConfig // https://www.papaparse.com/docs#config additional options for papa parse.
      };

      // import from array buffer using csv type
      const workbook: IWorkbook = (await WorkbookIO.read(csvOptions))!;

      // Since this is just a csv file
      workbook.getView().setShowFormulaBar(false);
      workbook.getView().setShowTabs(false);
      // We just hid the tabs so you won't see it but will still export with this name and if user re-shows tabs from the ui.
      workbook.getSelectedSheet().setName('CSVData'); // set the sheet name
      workbook.getSelectedSheet().getUsedRange().autoFit();
      return workbook;
    };
    return doLoad();
  }, []);
  const style: CSSProperties = {
    border: 'blue solid 2px',
    borderRadius: '8px',
    flex: '1 1 100%',
    minHeight: "460px" // arbitrary min height to layout nicely.
  };

  /*
   * For illustration purposes we are setting attribute so that this acts like a 'passive component'.
   */
  return <Studio sx={style} {...rest} workbook={loadResults} />;
}`,...m.parameters?.docs?.source}}}})))()}_();export{m as StudioFromCSV,g as __namedExportsOrder,h as default};