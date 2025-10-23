import{j as r}from"./index-BiBgeh3u.js";import{r as l}from"./iframe-mGP4b_Fh.js";import{H as v}from"./index-CvKDCtrJ.js";import{a as d,y as R}from"./index-CmvF348R.js";import"./index-DTwpo8e8.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BMu68Vok.js";import"./index-CXJVXQGg.js";const C=h=>{const{maxColumns:m,maxRows:u,showRowHeaders:c,showColumnHeaders:w,...p}=h,[g]=l.useState(()=>new R({maxColumns:m,maxRows:u})),f=l.useMemo(()=>[n=>{const i={colStart:4,rowStart:15,colEnd:14,rowEnd:20};if(!v.isRangeWithinRange(i,n.getVisibleRangeCoords()))return;const a=n.getRangeCoordsBounds(i),{x,y}=a;let{width:o,height:s}=a;if(o===0||s===0)return;const t=n.getZoom();return t!==1&&(o=o/t,s=s/t),r.jsx("div",{style:{position:"absolute",willChange:"top, left, width, height",left:x,top:y,width:o,height:s,clipPath:"inset(0px)",transform:t!==1?`translate(-50%, -50%) scale(${t}) translate(50%, 50%)`:void 0,display:"flex",alignItems:"stretch",justifyContent:"stretch",overflow:"none",pointerEvents:"auto"},children:r.jsx("button",{style:{flex:"1"},children:r.jsx("span",{children:"Floating Button; click me and I will do nothing"})})},"testing")}],[]);return r.jsx(d,{style:{flex:"1",minHeight:"400px",width:"100%",height:"100%"},sheet:g,renderOverlays:f,showRowHeaders:c,showColumnHeaders:w,...p})},e=C.bind({});e.args={maxRows:200,maxColumns:200,showRowHeaders:!0,showColumnHeaders:!0};e.storyName="with overlays";const B={title:"Sheet",component:d,parameters:{controls:{sort:"requiredFirst"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
  const {
    maxColumns,
    maxRows,
    showRowHeaders,
    showColumnHeaders,
    ...rest
  } = props as any;
  const [sheet] = useState(() => {
    return new Sheet({
      maxColumns,
      maxRows
    });
  });
  const overlays: ((view: IGridView) => React.ReactNode)[] = useMemo(() => {
    return [(view: IGridView): React.ReactNode => {
      const range = {
        colStart: 4,
        rowStart: 15,
        colEnd: 14,
        rowEnd: 20
      };

      // Ouf of range don't show
      if (!CoordUtils.isRangeWithinRange(range, view.getVisibleRangeCoords())) {
        return;
      }
      const bounds = view.getRangeCoordsBounds(range);
      const {
        x: left,
        y: top
      } = bounds;
      let {
        width,
        height
      } = bounds;
      if (width === 0 || height === 0)
        // hidden row/column
        return;

      // Coordinates are provided in zoomed coordinates but the grid does not
      // auto zoom. This allows the grid to decide the logic itself.
      // TODO - provide a HOC that wraps the logic here.
      const zoom = view.getZoom();
      if (zoom !== 1) {
        width = width / zoom;
        height = height / zoom;
      }
      return <div style={{
        position: 'absolute',
        willChange: 'top, left, width, height',
        left,
        top,
        width,
        height,
        clipPath: 'inset(0px)',
        // prevent overflow (if desired)
        transform: zoom !== 1 ? \`translate(-50%, -50%) scale(\${zoom}) translate(50%, 50%)\` : undefined,
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        overflow: 'none',
        pointerEvents: 'auto'
      }} key={"testing"}>
            <button style={{
          flex: '1'
        }}>
              <span>
                Floating Button; click me and I will do nothing
              </span>
            </button>
          </div>;
    }];
  }, []);
  return <SheetElement style={{
    // For Docs view we are 400px by 'full width'
    flex: "1",
    minHeight: "400px",
    width: "100%",
    height: "100%"
  }} sheet={sheet} // Required
  renderOverlays={overlays} showRowHeaders={showRowHeaders} showColumnHeaders={showColumnHeaders} {...rest} />;
}`,...e.parameters?.docs?.source}}};const F=["SheetWithOverlays"];export{e as SheetWithOverlays,F as __namedExportsOrder,B as default};
