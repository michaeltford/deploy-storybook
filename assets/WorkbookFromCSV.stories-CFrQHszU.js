import{j as p}from"./index-BiBgeh3u.js";import{r as f}from"./iframe-mGP4b_Fh.js";import{R as b,N as o,M as k}from"./index-CmvF348R.js";import"./index-CdE0ylvR.js";import{e as y,$ as w}from"./BgsyX5QL9OLy0DN3-CLQ3UbdE.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvKDCtrJ.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";import"./Tooltip-CXxmTuYg.js";const g=`"Hello World", 3.5%, ,$4.25,
 10/23/95,"Hello O'Universe"
,true, -100
July-04`,h=i=>{const{...n}=i,u=f.useMemo(()=>(async()=>{const a=new b;a.setNamed({name:"Off Year",style:{fill:o.Named.Yellow,font:{fill:o.Named.Brown},numberFormat:"Short Date"}}),a.setNamed({name:"Negative Value",style:{fill:o.Named.LtPink,font:{fill:o.Named.DkRed}}});const m={source:new TextEncoder().encode(g).buffer,format:"csv",createWorkbookOptions:{styles:a,name:"From CSV"},setValuesOptions:{textParser:{parse:(C,c)=>{const s=c.getCell();let r;if(s.getType()===k.Number){const l=s.toDate();l?l.getFullYear()!==new Date().getFullYear()&&(r={style:{named:"Off Year"}}):s.getValue()<0&&(r={style:{named:"Negative Value"}})}return r}}}},t=await w.read(m);return t.getView().setShowFormulaBar(!1),t.getView().setShowTabs(!1),t.getSelectedSheet().setName("CSVData"),t.getSelectedSheet().getUsedRange().autoFit(),t})(),[]),d={border:"blue solid 2px",borderRadius:"8px",flex:"1 1 100%",minHeight:"460px"};return p.jsx(y,{sx:d,...n,workbook:u,propsWorkbookTitle:{readOnly:!0},importExportDisabled:!0})},e=h.bind({});e.args={};e.storyName="From CSV";const T={title:"Models/From CSV",component:e};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
            fill: IColor.Named.Brown
          },
          numberFormat: "Short Date"
        }
      });
      customStyles.setNamed({
        name: 'Negative Value',
        style: {
          fill: IColor.Named.LtPink,
          font: {
            fill: IColor.Named.DkRed
          }
        }
      });

      // For illustration purposes we are are doing to color negative values and dates not from this year with a different color.
      const csvOptions: ReadCSVOptions = {
        source: new TextEncoder().encode(csv).buffer,
        format: 'csv',
        createWorkbookOptions: {
          styles: customStyles,
          name: 'From CSV'
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
                const asDate = cell.toDate();
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
                    // updateValue = preParsed.createTemporaryCell({ value: 123 }); // as a new cell
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
      const workbook: IWorkbook = await WorkbookIO.read(csvOptions);

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
  return <Studio sx={style} {...rest} workbook={loadResults} propsWorkbookTitle={{
    readOnly: true
  }} importExportDisabled={true} />;
}`,...e.parameters?.docs?.source}}};const Y=["WorkbookFromCSV"];export{e as WorkbookFromCSV,Y as __namedExportsOrder,T as default};
