import{j as e,r as s}from"./App-DHhP8U0X.js";import{c as i}from"./navManager-CaHuqqRW.js";import{u as l}from"./directive-CX0hxCpP-Cj2tDrhJ.js";import"./stores-B4F_j8QF.js";import"./directive-GSGkMcBJ.js";const r=({text:a})=>{const t=s.useMemo(i,[]),o=s.useMemo(()=>({keys:{ArrowLeft:t.focusLeft,ArrowRight:t.focusRight,Home:t.focusFirst,End:t.focusLast,"Meta+ArrowLeft":t.focusFirstLeft,"Meta+ArrowRight":t.focusFirstRight},selector:c=>c.querySelectorAll("input,span")}),[t]),n=l(t.directive,o);return e.jsxs("div",{className:"d-flex demo-navmanager-line",ref:n,children:[e.jsx("input",{type:"text",defaultValue:a,className:"form-control me-1"}),e.jsx("span",{tabIndex:-1,className:"form-control w-auto me-1",children:a}),e.jsx("input",{tabIndex:-1,type:"checkbox",className:"form-check-input align-self-center me-1"}),e.jsx("input",{tabIndex:-1,type:"text",defaultValue:a,disabled:!0,className:"form-control me-1"}),e.jsx("input",{tabIndex:-1,type:"text",defaultValue:a,className:"form-control me-1"})]})},p=()=>e.jsxs("div",{className:"demo-navmanager",children:[e.jsxs("div",{dir:"ltr",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Left-to-right"}),e.jsx(r,{text:"Hello"})]}),e.jsxs("div",{dir:"rtl",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Right-to-left"}),e.jsx(r,{text:"שָׁלוֹם"})]})]});export{p as default};
