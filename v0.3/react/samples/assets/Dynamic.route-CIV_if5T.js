import{r as n,j as t}from"./App-XNADZBio.js";import{A as a}from"./alert-DWq65Emo-KSO_hX3E.js";import"./config-CCs_7nqP.js";import"./config-B1OT1TA4.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./widget-DAs9_HQ1-Dcw9QXPm.js";import"./stores-B8YEDwZq-BUsucSP7.js";import"./directive-Kqp31pwt-CpBdIrAv.js";import"./alert-Dlf-BV98-yrPfVMIh.js";import"./common-DRdsw5m8-5xWtx3gw.js";import"./baseTransitions-Amn6yFiO.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";import"./promise-CY2U8bTP-ChJZdKFm.js";import"./extendWidget-B-unuY20.js";import"./fade-uOobJKgw-CncxQG4y.js";import"./simpleClassTransition-DIMydQts.js";import"./cssTransitions-DcuCbhSn.js";const o=n.createContext([]),s=n.createContext(null);let d=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:d++}];case"remove":return r.filter(i=>i!==e.alert)}}const k=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(o.Provider,{value:r,children:t.jsx(s.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const r=n.useContext(o),e=n.useContext(s);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(a,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,slotDefault:i.slotDefault,onHidden:()=>e({type:"remove",alert:i})},`${i.id}`))})};export{k as default};
