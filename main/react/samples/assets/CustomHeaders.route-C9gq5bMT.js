import{r as o,j as e}from"./App-CMLx6mqi.js";import{A as p,a as c}from"./accordion-BZ-irwrA-BwRduAd1.js";import{B as h}from"./body-DBRiX_SX.js";import{u as r}from"./directive-Kqp31pwt-CmYlrUyd.js";import"./config-UTOxIG5j.js";import"./config-B0WTjW1q.js";import"./directive-DCYlDznf-D6Op6yAr.js";import"./widget-DAs9_HQ1-CcW8E05S.js";import"./stores-B8YEDwZq-BRBUqY3C.js";import"./accordion-CdqOvy33-isZ7GyOt.js";import"./baseTransitions-WYj0FqeN.js";import"./writables-DoU_XYTX-CLq9hDK4.js";import"./promise-CY2U8bTP-DckfqERq.js";import"./collapse-CVjUhnIz-C6aBZBAh.js";import"./cssTransitions-lGvTN0Og.js";import"./extendWidget-DmHfBe22.js";const B=()=>{const n=o.useRef(null),[d,l]=o.useState(!1),a=t=>{const{state:i,widget:s}=t.slotContext;return e.jsx(e.Fragment,{children:i.shouldBeInDOM?e.jsx("div",{className:"accordion-collapse",...r(s.directives.bodyContainerDirective),children:e.jsx("div",{className:"accordion-body",...r(s.directives.bodyDirective),children:h})}):null})},m=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...r(t.widget.directives.headerDirective),children:[e.jsxs("p",{className:"m-0",children:["First panel - ",t.state.visible?"opened":"collapsed"]}),e.jsx("button",{type:"button",className:`btn btn-link p-0 ${t.state.buttonClassName} au-accordion-item-button`,...r(t.widget.directives.toggleDirective),children:"Toggle first"})]}),e.jsx(a,{slotContext:t})]}),u=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...r(t.widget.directives.headerDirective),children:[e.jsx("p",{className:"m-0",children:"Second panel"}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary ${t.state.buttonClassName} au-accordion-item-button`,...r(t.widget.directives.toggleDirective),children:"Toggle second"}),e.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>l(i=>!i),children:[d?"En":"Dis","able third"]}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>{var i,s;return(s=(i=n.current)==null?void 0:i.collapseAll)==null?void 0:s.call(i)},children:"Collapse all"})]})]}),e.jsx(a,{slotContext:t})]}),b=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...r(t.widget.directives.headerDirective),children:[e.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${t.state.buttonClassName} au-accordion-item-button`,...r(t.widget.directives.toggleDirective),children:"Third panel"}),t.state.disabled&&e.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"})]}),e.jsx(a,{slotContext:t})]});return e.jsxs(p,{ref:n,children:[e.jsx(c,{slotItemStructure:m}),e.jsx(c,{slotItemStructure:u}),e.jsx(c,{slotItemStructure:b,disabled:d})]})};export{B as default};
