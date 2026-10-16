import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{m as i}from"./ClB5ix51roQOpZEr-CzAvOe14.js";import{K as a,tn as o}from"./zqJOaweiXE9D8RY1-BXtGT3r7.js";import{d as s}from"./esm-D9igw9py.js";import{L as c,ut as l}from"./esm-BxkbVGb8.js";import{s as u,t as d}from"./esm-DRC3oiMm.js";var f,p,m,h,g,_;function v(){return(v=t((()=>{f=e(n(),1),s(),l(),u(),p=r(),m=()=>{let e=(0,f.useMemo)(()=>new a({name:`Holiday`,colors:{dk1:i.Named.Red,dk2:i.Named.Green,accent1:i.Named.LtGreen,accent2:i.Named.LtPink,accent3:`blue`,accent4:`#ff6e40`}}),[]),t=(0,f.useMemo)(()=>{let t=new o,n=new a({name:`Halloween`,colors:{dk1:`#130912`,dk2:`#42331E`,lt1:`#FFEFC9`,lt2:`#E9Cb95`,accent1:`#FFC502`,accent2:`#F56F16`,accent3:`#B14624`,accent4:`#602749`,accent5:`#5A7E5A`,accent6:`#A21A00`}});return t.setCustomTheme(n),t.setDefaultTheme(e),t},[e]);return(0,p.jsx)(()=>(0,p.jsx)(c,{themes:t,children:(0,p.jsx)(d,{square:!1})}),{})},h=m.bind({}),h.args={},h.storyName=`Custom DocThemes`,g={title:`Studio/Custom DocThemes`,component:d},_=[`StudioCustomDocThemes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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