import{a as u,j as t,r}from"./index-ffc26b19.js";import{d as p,S as l}from"./index-50cfebd5.js";import{u as j}from"./config-7593863d.js";import{u as c,t as f}from"./utils-946c19b8.js";const h=({children:e,container:a})=>a?u.createPortal(e,a):t.jsx(t.Fragment,{children:e}),x=e=>t.jsxs(t.Fragment,{children:[t.jsx("h5",{className:"modal-title",children:t.jsx(l,{slotContent:e.state.slotTitle,props:e})}),e.state.closeButton?t.jsx("button",{type:"button",className:"btn-close","aria-label":e.state.ariaCloseButtonLabel,onClick:e.widget.actions.closeButtonClick}):null]}),v=e=>t.jsxs(t.Fragment,{children:[e.state.slotTitle?t.jsx("div",{className:"modal-header",children:t.jsx(l,{slotContent:e.state.slotHeader,props:e})}):null,t.jsx("div",{className:"modal-body",children:t.jsx(l,{slotContent:e.state.slotDefault,props:e})}),e.state.slotFooter?t.jsx("div",{className:"modal-footer",children:t.jsx(l,{slotContent:e.state.slotFooter,props:e})}):null]}),b={slotHeader:x,slotStructure:v},D=r.forwardRef(function(a,d){const[s,o]=j(p,a,"modal",{...b,slotDefault:a.children});r.useImperativeHandle(d,()=>o.api,[]);const i=c(o.directives.backdropDirective),n=c(o.directives.modalDirective),m={state:s,widget:f(o)};return t.jsxs(h,{container:s.container,children:[s.backdropHidden?null:t.jsx("div",{className:`modal-backdrop ${s.backdropClass}`,ref:i}),s.hidden?null:t.jsx("div",{className:`modal d-block ${s.className}`,ref:n,onClick:o.actions.modalClick,children:t.jsx("div",{className:"modal-dialog",children:t.jsx("div",{className:"modal-content",children:t.jsx(l,{slotContent:s.slotStructure,props:m})})})})]})});export{D as M};
