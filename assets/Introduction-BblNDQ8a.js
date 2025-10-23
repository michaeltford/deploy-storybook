import{j as t}from"./index-BiBgeh3u.js";import{useMDXComponents as r}from"./index-DsH6I3P0.js";import{M as n}from"./blocks-DsD_6_5W.js";import"./iframe-mGP4b_Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTwpo8e8.js";function i(o){const e={a:"a",h1:"h1",p:"p",strong:"strong",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Introduction"}),`
`,t.jsx("style",{children:`
.subheading {
  --mediumdark: '#999999';
  font-weight: 900;
  font-size: 13px;
  color: #999;
  letter-spacing: 6px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 12px;
  margin-top: 40px;
}

.link-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 10px;
}

@media (min-width: 620px) {
  .link-list {
    row-gap: 20px;
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}

@media all and (-ms-high-contrast:none) {
.link-list {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    -ms-grid-rows: 1fr 1fr;
  }
}

.link-item {
  display: block;
  padding: 20px 30px 20px 15px;
  border: 1px solid #00000010;
  border-radius: 5px;
  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
  color: #333333;
  display: flex;
  align-items: flex-start;
}

.link-item:hover {
  border-color: #1EA7FD50;
  transform: translate3d(0, -3px, 0);
  box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
}

.link-item:active {
  border-color: #1EA7FD;
  transform: translate3d(0, 0, 0);
}

.link-item strong {
  font-weight: 700;
  display: block;
  margin-bottom: 2px;
}

.link-item img {
  height: 40px;
  width: 40px;
  margin-right: 15px;
  flex: none;
}

.link-item span {
  font-size: 14px;
  line-height: 20px;
}

.tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #E7FDD8;
  color: #66BF3C;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.tip-wrapper code {
  font-size: 12px;
  display: inline-block;
}

`}),`
`,t.jsx(e.h1,{id:"welcome-to-sheetxl",children:"Welcome to SheetXL"}),`
`,t.jsxs(e.p,{children:["I am using ",t.jsx(e.strong,{children:"Storybook"})," to make it easier to learn, explorer, and test the UI components."]}),`
`,t.jsx(e.p,{children:"To get started you can browse stories by navigating to them in the sidebar."}),`
`,t.jsxs(e.p,{children:["For next steps you can visit ",t.jsx(e.a,{href:"https://www.sheetxl.com",rel:"nofollow",children:"SheetXL"})," or stop by ",t.jsx(e.a,{href:"https://discord.gg/NTKdwUgK9p",rel:"nofollow",children:"Discord"}),"."]})]})}function x(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{x as default};
