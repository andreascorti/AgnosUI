import{r as c,j as a}from"./App-DHhP8U0X.js";import{A as u,a as r}from"./accordion-CNYFv3L1-CcLXf64E.js";import{B as h}from"./body-DBRiX_SX.js";import{u as j}from"./directive-CX0hxCpP-Cj2tDrhJ.js";import"./stores-B4F_j8QF.js";import"./baseTransitions-DcuwCp5y.js";import"./writables-DoU_XYTX-B5IK4zXo.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";import"./directive-GSGkMcBJ.js";import"./collapse-BQC9zBIz-BOcg110g.js";import"./cssTransitions-BiCvyljD.js";import"./slot-Is8FqGrj.js";import"./config-BbThgUal.js";import"./widget-DAs9_HQ1-BMVDwHFs.js";import"./stores-B8YEDwZq-DfBENgOA.js";const F=()=>{const l=c.useRef(null),[d,n]=c.useState(!1),t=e=>{const{state:i,widget:s}=e.slotContext,p=j(s.directives.collapseDirective);return a.jsx(a.Fragment,{children:i.shouldBeInDOM?a.jsx("div",{className:`accordion-collapse ${i.itemBodyContainerClass}`,id:`${i.itemId}-collapse`,"aria-labelledby":`${i.itemId}-toggle`,ref:p,children:a.jsx("div",{className:`accordion-body ${i.itemBodyClass}`,children:h})}):null})},m=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[a.jsxs("p",{className:"m-0",children:["First panel - ",e.state.itemVisible?"opened":"collapsed"]}),a.jsx("button",{type:"button",id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,className:`btn btn-link p-0 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle first"})]}),a.jsx(t,{slotContext:e})]}),o=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[a.jsx("p",{className:"m-0",children:"Second panel"}),a.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle second"}),a.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>n(i=>!i),children:[d?"En":"Dis","able third"]}),a.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>{var i,s;return(s=(i=l.current)==null?void 0:i.collapseAll)==null?void 0:s.call(i)},children:"Collapse all"})]})]}),a.jsx(t,{slotContext:e})]}),b=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[a.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"} `,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-disabled":e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-expanded":e.state.itemVisible,children:"Third panel"}),e.state.itemDisabled?a.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"}):a.jsx(a.Fragment,{})]}),a.jsx(t,{slotContext:e})]});return a.jsxs(u,{ref:l,children:[a.jsx(r,{slotItemStructure:m}),a.jsx(r,{slotItemStructure:o}),a.jsx(r,{slotItemStructure:b,itemDisabled:d})]})};export{F as default};
