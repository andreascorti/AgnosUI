import{r as t,j as e}from"./App-XNADZBio.js";import{c as l,a as n}from"./focustrack-WRGQ5Ee4.js";import{u as o}from"./stores-B8YEDwZq-BUsucSP7.js";import{u as m}from"./directive-Kqp31pwt-CpBdIrAv.js";import"./directive-DCYlDznf-D2hjAqcK.js";const x=()=>{const[a]=t.useState(l),i=o(a.hasFocus$),s=o(n),[r,c]=t.useState([]);return t.useEffect(()=>{c([...r,{tagName:s==null?void 0:s.tagName.toLowerCase(),id:(s==null?void 0:s.id)||void 0}])},[s]),e.jsxs("div",{className:"demo-focustrack",children:[e.jsxs("div",{className:"my-2 p-2 border",...m(a.directive),children:[e.jsx("h5",{children:"Container"}),e.jsx("input",{className:"form-control",type:"text",placeholder:"Focusable input",id:"focusableInput"}),e.jsx("br",{}),e.jsx("input",{className:"form-control",type:"text",placeholder:"Other focusable input",id:"otherFocusableInput"})]}),e.jsx("input",{className:"form-control",type:"text",placeholder:"Disabled input",id:"disabledInput",disabled:!0}),e.jsx("br",{}),e.jsxs("div",{className:"form-check mb-2",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:"containerHasFocus",checked:i,disabled:!0}),e.jsx("label",{className:"form-check-label",htmlFor:"containerHasFocus",children:"Focus in container"})]}),e.jsx("label",{htmlFor:"activeElementHistory",className:"form-label",children:"Active element history:"}),e.jsx("textarea",{className:"form-control mb-2",id:"activeElementHistory",value:JSON.stringify(r),readOnly:!0}),e.jsx("button",{className:"btn btn-primary",onClick:()=>c([]),children:"Clear"})]})};export{x as default};
