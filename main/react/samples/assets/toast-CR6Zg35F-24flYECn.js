import{r as n,j as e}from"./App-XNADZBio.js";import{c}from"./stores-bzJrTsnV.js";import{e as m}from"./extendWidget-BQstjHSK.js";import{d as f,c as d}from"./directive-CGjTRxRh-BI2xHIMp.js";import{t as p,h as v}from"./writables-DoU_XYTX-CBor1g6-.js";import{c as b}from"./common-C2NQz6Nv-BdVurz8n.js";import{u as D,S as l}from"./config-CXwd_Qkq.js";import{a as j,u as g}from"./directive-_62WM8Ul-D_6TfOqI.js";const h={autoHide:!0,delay:5e3,slotHeader:void 0},y={autoHide:p,delay:v(0,1/0,{strict:!0})};function H(t){let i;const s=m(b,h,y)(t),a=c(()=>{clearTimeout(i),s.stores.autoHide$()&&(i=setTimeout(()=>s.api.close(),s.stores.delay$()))}),o=d(()=>({attributes:{role:"alert","aria-atomic":"true",class:c(()=>s.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),r=d(()=>({attributes:{type:"button","aria-label":c(()=>s.stores.ariaCloseButtonLabel$())},events:{click:s.api.close}}));return{...s,directives:{...s.directives,autoHideDirective:f(a),bodyDirective:o,closeButtonDirective:r}}}const x=H,N=t=>{const i=g(t.widget.directives.closeButtonDirective);return e.jsxs(e.Fragment,{children:[t.state.slotHeader&&e.jsxs("div",{className:"toast-header",children:[e.jsx(l,{slotContent:t.state.slotHeader,props:t}),t.state.dismissible&&e.jsx("button",{className:"btn-close me-0 ms-auto",...i})]}),e.jsx("div",{className:"toast-body",children:e.jsx(l,{slotContent:t.state.slotDefault,props:t})}),t.state.dismissible&&!t.state.slotHeader&&e.jsx("button",{className:"btn-close btn-close-white me-2 m-auto",...i})]})},T={slotStructure:N},R=n.forwardRef(function(i,s){const[a,o]=D(x,i,"toast",{...T,slotDefault:i.children}),r=j([o.directives.transitionDirective,o.directives.autoHideDirective,o.directives.bodyDirective]);n.useImperativeHandle(s,()=>o.api,[]);const u={state:a,widget:o};return e.jsx(e.Fragment,{children:!a.hidden&&e.jsx("div",{className:`toast ${a.dismissible?"toast-dismissible":""} ${a.slotHeader?"":"d-flex"}`,...r,children:e.jsx(l,{slotContent:a.slotStructure,props:u})})})});export{R as T};
