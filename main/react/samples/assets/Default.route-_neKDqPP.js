import{r as s,j as e}from"./App-XNADZBio.js";import{S as t}from"./slider-CQ6rMcxW-uJvXUqBd.js";import"./index-BkR8BTgU.js";import"./stores-B4F_j8QF.js";import"./directive-GSGkMcBJ.js";import"./writables-DoU_XYTX-DoV7pQAs.js";import"./resizeObserver-CD0IU7t2.js";import"./directive-CX0hxCpP-srOUdzTw.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./slot-DrPnuT9k.js";const T=()=>{const[r,n]=s.useState([70]),[h,m]=s.useState([60]),[c,d]=s.useState([20]),[l,u]=s.useState(!0),[a,x]=s.useState(!0),[o,b]=s.useState(!0),[i,p]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(t,{min:0,max:100,stepSize:1,values:r,onValuesChange:n,showMinMaxLabels:o,showValueLabels:i}),"Form control value: ",r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with value"}),e.jsx(t,{min:0,max:100,stepSize:1,values:c,onValuesChange:d}),"Value: ",c.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Disabled slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:h,onValuesChange:m,disabled:l,readonly:a}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"disabled",checked:l,onChange:()=>u(!l)}),e.jsx("label",{className:"form-check-label",htmlFor:"disabled",children:"Disabled"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"readonly",checked:a,onChange:()=>x(!a)}),e.jsx("label",{className:"form-check-label",htmlFor:"readonly",children:"Readonly"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"showMinMax",checked:o,onChange:()=>b(!o)}),e.jsx("label",{className:"form-check-label",htmlFor:"showMinMax",children:"Min-Max label visibility"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"showValues",checked:i,onChange:()=>p(!i)}),e.jsx("label",{className:"form-check-label",htmlFor:"showValues",children:"Value label visibility"})]})]})};export{T as default};
