import{r as i,j as e}from"./App-XNADZBio.js";import{A as h}from"./alert-DWq65Emo-BDTn3HFI.js";import"./config-BUFy1TYO.js";import"./config-CdZvikJG.js";import"./directive-ClyvktyQ-DyzILLR9.js";import"./widget-DAs9_HQ1-D7qDz64F.js";import"./stores-B8YEDwZq-qVpBBQfr.js";import"./directive-CRCdIwrf-dEmCbYHa.js";import"./alert-CiPX4tus-RCkIiGSk.js";import"./common-DmskYYGg-DCscLFXL.js";import"./baseTransitions-ctGJV3jG.js";import"./writables-DoU_XYTX-DYQSJslL.js";import"./promise-CY2U8bTP-Colb0t6T.js";import"./extendWidget-BVWUbsaC.js";import"./fade-uOobJKgw-ui65NzX-.js";import"./simpleClassTransition-CCF27UIz.js";import"./cssTransitions-CIcz1gi8.js";var l=(s=>(s.success="success",s.info="info",s.warning="warning",s.danger="danger",s.primary="primary",s.secondary="secondary",s.light="light",s.dark="dark",s))(l||{});const F=()=>{const s=i.useRef(null),[n,o]=i.useState(!0),[r,m]=i.useState(!0),[a,d]=i.useState(!0),[c,p]=i.useState("success");return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn btn-primary showAlert",onClick:()=>{var t;return(t=s.current)==null?void 0:t.open()},children:"Show alert"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("div",{className:"d-flex form-group",children:[e.jsxs("label",{className:"align-self-center me-3",htmlFor:"typeSelect",children:["Alert type:"," "]}),e.jsx("select",{id:"typeSelect",className:"form-select w-auto",value:c,onChange:t=>p(t.target.value),children:Object.entries(l).map(t=>({value:t[1],label:t[0]})).map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:n,onChange:t=>o(t.target.checked)}),"Animated on init"]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:r,onChange:t=>m(t.target.checked)}),"Animated"]}),e.jsxs("label",{children:[e.jsx("input",{className:"dismissibleInput form-check-input me-1",type:"checkbox",defaultChecked:a,onChange:t=>d(t.target.checked)}),"Dismissible"]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(h,{ref:s,animatedOnInit:n,animated:r,dismissible:a,type:c,children:[e.jsx("h4",{className:"alert-heading",children:"Well done!"}),e.jsx("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsx("hr",{}),e.jsx("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})]})};export{l as AlertStatus,F as default};
