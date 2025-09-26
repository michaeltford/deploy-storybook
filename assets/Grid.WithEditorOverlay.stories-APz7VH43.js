import{j as t}from"./index-DWKpDUR-.js";import{r}from"./iframe-CpXbX42E.js";import{a as G,b as N,f as F,E as w,S as B,s as T}from"./index-C3bn2QFg.js";import"./index-z4VAroti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fWxn02CS.js";import"./client-Ba8_ROJ4.js";const b=(p,g)=>`${p}:${g}`,V=p=>{const{...g}=p,C=r.useRef(null),[s,k]=r.useState({}),h=r.useCallback(e=>{const n=e.range,a=b(n.rowStart,n.colStart);let i=s[a];i==null&&(i="");const{key:K,...M}=e;return t.jsx(G,{...M,value:i},K)},[s]),{selection:c,navigate:W,navigateSelection:_,overlay:m,...O}=N({gridRef:C}),[o,d]=r.useState(),u=r.useCallback(e=>F(s[b(e.rowIndex,e.colIndex)]),[s]),D=r.useCallback((e,n)=>(console.log("render"),t.jsx(w,{...e,onChangeEdit:a=>{d(i=>(console.log("onChangeEdit: prev, editState",i,a),{...i,...a}))},editState:o})),[o]),{overlay:f,isEditing:E,startEdit:v,submitEdit:y,cancelEdit:S,onKeyboardEvent:I,onPointerEvent:x}=B({view:null,activeCoords:c?.cell,getCellEditor:D,canEdit:e=>!(e.rowIndex===1&&e.colIndex===1),onBeforeStartEdit:e=>{console.warn("onBeforeStartEdit",e),d(u(e))},onStartEdit:e=>{console.warn("startEdit",e)},onSubmitEdit:e=>{console.warn("onSubmit",e,o);const n=b(e.rowIndex,e.colIndex);o.dirty!==void 0&&k(a=>({...a,[n]:o.dirty}))},onDoneEdit:e=>{console.warn("onDone",e,o),d(null)}}),R=r.useMemo(()=>[m,f],[m,f]),P=r.useMemo(()=>t.jsxs("div",{style:{alignItems:"start",display:"flex",flexDirection:"row",flex:"1 1 0%",padding:"0px 6px",paddingTop:"4px",gap:"4px"},children:[t.jsx("button",{onClick:()=>v(),disabled:E,children:"Edit"}),t.jsx("button",{onClick:()=>y(),disabled:!E,children:"Submit"}),t.jsx("button",{onClick:()=>S(),disabled:!E,children:"Cancel"})]}),[E,S,v,y]),j=r.useMemo(()=>t.jsx(w,{style:{border:"1px solid black",alignSelf:"stretch"},onFocus:()=>{const e=o??u(c?.cell);d({...e,editMode:!0}),v({autoFocus:!1})},onChangeEdit:e=>{d(n=>({...n,...e}))},onSubmitEdit:()=>{y()},onCancelEdit:()=>{S()},editState:o??u(c?.cell)}),[o,u,S,v,y,c?.cell]);return t.jsx("div",{className:"storybook-container",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",rowGap:"6px"},children:[P,j,t.jsx(T,{...g,style:{flex:"1 1 100%",border:"1px solid black"},ref:C,cellRenderer:h,onKeyDown:e=>{I(e)},onPointerDown:e=>{x(e),O.onPointerDown(e)},onDoubleClick:e=>{x(e)},overlays:R})]})})},l=V.bind({});l.args={columnCount:200,rowCount:200};l.storyName="with Editor Overlay";const Q={title:"Grid",component:l,parameters:{controls:{sort:"requiredFirst"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`props => {
  const {
    ...rest
  } = props as any;
  const gridRef = useRef<IGridElement>(null);

  // key set values by identity
  const [values, setValues] = useState({});

  // Very important to memoize the cell renderer
  const cellRenderer = useCallback((props: CellRendererProps) => {
    const range = props.range;
    const identity = cellIdentity(range.rowStart, range.colStart);
    let value = values[identity];
    if (value === undefined || value === null) {
      value = '';
    }
    const {
      key,
      ...rest
    } = props;
    return <DefaultCellRenderer key={key} {...rest} value={value} />;
  }, [values]);
  const {
    selection,
    navigate,
    // provide to editor to allow tab/enter
    navigateSelection,
    // provide to editor to allow tab/enter
    // commands: commandsSelection,
    overlay: selectionOverlay,
    ...selectionProps // used for callbacks
  } = useSelection({
    gridRef
  });
  const [editState, setEditState] = useState<EditState<string, string>>();
  const getCleanEditState = useCallback((coords: CellCoords) => {
    return getDefaultStringEditState(values[cellIdentity(coords.rowIndex, coords.colIndex)]);
  }, [values]);

  // Memo to avoid re-rendering
  const getCellEditor = useCallback((props: CellEditorProps<string, string>, _coords: CellCoords) => {
    console.log('render');
    return <DefaultCellEditor {...props} onChangeEdit={editState => {
      setEditState(prev => {
        console.log('onChangeEdit: prev, editState', prev, editState);
        return {
          ...prev,
          ...editState
        };
      });
    }} editState={editState} //  ?? getCleanEditState(coords)
    />;
  }, [editState]);
  const {
    overlay: editorOverlay,
    isEditing,
    startEdit: overlayStartEdit,
    submitEdit: overlaySubmitEdit,
    cancelEdit: overlayCancelEdit,
    onKeyboardEvent: overlayEditorOnKeyEvent,
    onPointerEvent: overlayEditorOnPointerEvent
  } = useKeyboardEditorOverlay({
    view: null,
    // TODO - use the EditorOverlay not the hook
    // gridRef,
    activeCoords: selection?.cell,
    getCellEditor,
    canEdit: (coords: CellCoords) => {
      // called when a user has request an edit
      if (coords.rowIndex === 1 && coords.colIndex === 1) return false;
      return true;
    },
    onBeforeStartEdit: (coords: CellCoords) => {
      console.warn('onBeforeStartEdit', coords);
      setEditState(getCleanEditState(coords));
    },
    onStartEdit: (coords: CellCoords) => {
      console.warn('startEdit', coords);
      // setEditState(getCleanEditState(coords));
    },
    onSubmitEdit: (coords: CellCoords) => {
      // Just set into a map
      console.warn('onSubmit', coords, editState);
      const identity = cellIdentity(coords.rowIndex, coords.colIndex);
      if (editState.dirty === undefined) return;
      setValues(prev => {
        return {
          ...prev,
          [identity]: editState.dirty
        };
      });
    },
    onDoneEdit: (coords: CellCoords) => {
      console.warn('onDone', coords, editState);
      setEditState(null);
    }
    // onNavigate: navigate,
    // onNavigateSelection: navigateSelection
  });

  // We merge selection and editor overlays
  const overlays = useMemo(() => {
    return [selectionOverlay, editorOverlay];
  }, [selectionOverlay, editorOverlay]);
  const buttons = useMemo(() => {
    return <div style={{
      alignItems: 'start',
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1 0%',
      padding: '0px 6px',
      paddingTop: '4px',
      gap: '4px'
    }}>
        <button onClick={() => overlayStartEdit()} disabled={isEditing}>
          Edit
        </button>
        <button onClick={() => overlaySubmitEdit()} disabled={!isEditing}>
          Submit
        </button>
        <button onClick={() => overlayCancelEdit()} disabled={!isEditing}>
          Cancel
        </button>
      </div>;
  }, [isEditing, overlayCancelEdit, overlayStartEdit, overlaySubmitEdit]);
  const aboveCellEditor = useMemo(() => {
    return <DefaultCellEditor style={{
      border: '1px solid black',
      alignSelf: 'stretch'
    }} onFocus={() => {
      // We set the editMode
      const currentEditState = editState ?? getCleanEditState(selection?.cell);
      setEditState({
        ...currentEditState,
        editMode: true
      });
      overlayStartEdit({
        autoFocus: false
      });
    }} onChangeEdit={editState => {
      setEditState(prev => {
        return {
          ...prev,
          ...editState
        };
      });
    }} onSubmitEdit={() => {
      overlaySubmitEdit();
    }} onCancelEdit={() => {
      overlayCancelEdit();
    }}
    // onNavigate={navigate}
    // onNavigateSelection={navigateSelection}
    editState={editState ?? getCleanEditState(selection?.cell)} />;
  }, [editState, getCleanEditState, overlayCancelEdit, overlayStartEdit, overlaySubmitEdit, selection?.cell]);
  return <div className="storybook-container">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '6px'
    }}>
        {buttons}
        {aboveCellEditor}
        <Grid // Actually a scrollable grid.
      {...rest} style={{
        flex: '1 1 100%',
        border: '1px solid black'
      }} ref={gridRef} cellRenderer={cellRenderer} onKeyDown={(e: React.KeyboardEvent<any>) => {
        overlayEditorOnKeyEvent(e); // before selection props
        // commandsSelection.onKeyDown(e);
      }} onPointerDown={(e: React.PointerEvent<any>) => {
        overlayEditorOnPointerEvent(e); // before selection props
        selectionProps.onPointerDown(e);
      }} onDoubleClick={(e: React.PointerEvent<any>) => {
        overlayEditorOnPointerEvent(e); // before selection props
      }} overlays={overlays} />
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};const U=["GridWithEditorOverlay"];export{l as GridWithEditorOverlay,U as __namedExportsOrder,Q as default};
