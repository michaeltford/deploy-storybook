import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{mt as n}from"./iframe-Dk6xXpge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{S as i,yt as a}from"./esm-DTVy7_Fo.js";import{Ft as o,Kt as s,L as c}from"./CKvQvOH6xV4SqE_t-CJxCiKEq.js";import{d as l}from"./esm-DLJwqohc.js";import{i as u,t as d}from"./esm-CgKlu4AS.js";var f,p,m,h,g,_;function v(){return(v=t((()=>{f=e(n(),1),l(),a(),u(),p=r(),m=()=>{let e=(0,f.useMemo)(()=>new o({name:`Holiday`,colors:{dk1:s.Named.Red,dk2:s.Named.Green,accent1:s.Named.LtGreen,accent2:s.Named.LtPink,accent3:`blue`,accent4:`#ff6e40`}}),[]),t=(0,f.useMemo)(()=>{let t=new c,n=new o({name:`Halloween`,colors:{dk1:`#130912`,dk2:`#42331E`,lt1:`#FFEFC9`,lt2:`#E9Cb95`,accent1:`#FFC502`,accent2:`#F56F16`,accent3:`#B14624`,accent4:`#602749`,accent5:`#5A7E5A`,accent6:`#A21A00`}});return t.setCustomTheme(n),t.setDefaultTheme(e),t},[e]);return(0,p.jsx)(()=>(0,p.jsx)(i,{themes:t,children:(0,p.jsx)(d,{square:!1})}),{})},h=m.bind({}),h.args={},h.storyName=`Custom DocThemes`,g={title:`Studio/Custom DocThemes`,component:d},_=[`StudioCustomDocThemes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as StudioCustomDocThemes,_ as __namedExportsOrder,g as default};