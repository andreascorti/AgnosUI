import{r as n,j as t}from"./App-XNADZBio.js";import{A as a}from"./alert-DCJ6o_JT-rTup-yDN.js";import"./index-Bq7ywYCS.js";import"./common-C2NQz6Nv-BdVurz8n.js";import"./baseTransitions-Dp1ezXEp.js";import"./stores-bzJrTsnV.js";import"./writables-DoU_XYTX-CBor1g6-.js";import"./promise-CY2U8bTP-BPyyxCgB.js";import"./directive-CGjTRxRh-BI2xHIMp.js";import"./fade-7-Etejps-CDMFecoR.js";import"./simpleClassTransition-DnZydJ8S.js";import"./cssTransitions-DwgyjQNf.js";import"./extendWidget-BQstjHSK.js";import"./config-CXwd_Qkq.js";import"./config-CnQZr086.js";import"./widget-DAs9_HQ1-Ds05mpz4.js";import"./stores-B8YEDwZq-DmEjO4KH.js";import"./directive-_62WM8Ul-D_6TfOqI.js";const o=n.createContext([]),s=n.createContext(null);let d=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:d++}];case"remove":return r.filter(i=>i!==e.alert)}}const w=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",slotDefault:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",slotDefault:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",slotDefault:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(o.Provider,{value:r,children:t.jsx(s.Provider,{value:e,children:t.jsx(l,{})})})]})},l=()=>{const r=n.useContext(o),e=n.useContext(s);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(a,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,slotDefault:i.slotDefault,onHidden:()=>e({type:"remove",alert:i})},`${i.id}`))})};export{w as default};
