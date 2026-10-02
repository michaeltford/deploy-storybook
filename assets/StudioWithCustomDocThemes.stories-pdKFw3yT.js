import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{kt as n}from"./iframe-DVOsKsK5.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{ot as i,qt as a,r as o}from"./DWBFNL2gnqd19aG6-CISFPKd0.js";import{m as s}from"./esm-eaDQoQha.js";import{dt as c,i as l}from"./esm-MDtJPe6l.js";import{Studio as u,n as d}from"./esm-BFm3ASoQ2.js";var f,p,m,h,g,_;e((()=>{f=t(n(),1),s(),c(),d(),p=r(),m=()=>{let e=(0,f.useMemo)(()=>new i({name:`Holiday`,colors:{dk1:a.Named.Red,dk2:a.Named.Green,accent1:a.Named.LtGreen,accent2:a.Named.LtPink,accent3:`blue`,accent4:`#ff6e40`}}),[]),t=(0,f.useMemo)(()=>{let t=new o,n=new i({name:`Halloween`,colors:{dk1:`#130912`,dk2:`#42331E`,lt1:`#FFEFC9`,lt2:`#E9Cb95`,accent1:`#FFC502`,accent2:`#F56F16`,accent3:`#B14624`,accent4:`#602749`,accent5:`#5A7E5A`,accent6:`#A21A00`}});return t.setCustomTheme(n),t.setDefaultTheme(e),t},[e]);return(0,p.jsx)(()=>(0,p.jsx)(l,{themes:t,children:(0,p.jsx)(u,{square:!1})}),{})},h=m.bind({}),h.args={},h.storyName=`Custom DocThemes`,g={title:`Studio/Custom DocThemes`,component:u},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  // For new workbooks
  const defaultDocTheme = useMemo(() => {
    return new Theme({
      name: 'Holiday',
      colors: {
        dk1: IColor.Named.Red,
        dk2: IColor.Named.Green,
        accent1: IColor.Named.LtGreen,
        accent2: IColor.Named.LtPink,
        accent3: 'blue',
        accent4: '#ff6e40'
      }
    });
  }, []);

  // For themes select dropdown
  const customThemes = useMemo(() => {
    const themes: IThemeCollection = new ThemeCollection();

    /**
     * Add Halloween as option theme in ThemesSelector
     */
    const theme = new Theme({
      name: 'Halloween',
      colors: {
        dk1: '#130912',
        dk2: '#42331E',
        lt1: '#FFEFC9',
        // yellow
        lt2: '#E9Cb95',
        // light orange
        accent1: '#FFC502',
        // yellow
        accent2: '#F56F16',
        // orange
        accent3: '#B14624',
        // brown
        accent4: '#602749',
        // purple
        accent5: '#5A7E5A',
        // green
        accent6: '#A21A00' // red
      }
    });
    themes.setCustomTheme(theme);
    /**
     * Set a default custom theme.
     *
     * @remarks
     * * Adds the theme to the themes collection.
     * * Redundant with passing the theme via attachStudioOptions.
     * * Another Example that also updates the available themes in the drop down.
     */
    themes.setDefaultTheme(defaultDocTheme);
    return themes;
  }, [defaultDocTheme]);
  const App = () => {
    return <DocThemesProvider themes={customThemes}>
        <Studio square={false} />
      </DocThemesProvider>;
  };
  return <App />;
}`,...h.parameters?.docs?.source}}},_=[`StudioCustomDocThemes`]}))();export{h as StudioCustomDocThemes,_ as __namedExportsOrder,g as default};