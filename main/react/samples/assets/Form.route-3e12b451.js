import{r as o,j as e}from"./index-a1897422.js";import{R as c}from"./rating-b494ebb8.js";import"./rating-52f8ad16.js";import"./func-f2d0b1ef.js";import"./stores-ae26ce61.js";import"./writables-3ebf213a.js";import"./slot-50fa40d8.js";import"./config-b1c82cd5.js";import"./widget-e433708a.js";const h=()=>{const[a,r]=o.useState({value:0,valid:!1,invalid:!0,disabled:!1});function s(l){const i=l.value??a.value,t=!(l.disabled??a.disabled),n=i>=1,d={...a,...l,value:i,valid:t&&n,invalid:t&&!n};r(d)}return e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"form-label",id:"ratingLabel",children:"Rating of your experience"}),e.jsx("br",{}),e.jsx(c,{rating:a.value,disabled:a.disabled,onRatingChange:l=>s({value:l}),ariaLabelledBy:"ratingLabel"}),e.jsxs("div",{id:"form-msg",className:"form-text small",children:[a.valid&&e.jsx("div",{className:"text-success",children:"Thanks!"}),a.invalid&&e.jsx("div",{className:"text-danger",children:"Please rate us"})]}),e.jsxs("pre",{children:["Model:"," ",e.jsx("span",{id:"form-model",children:e.jsx("b",{children:a.value})})]}),e.jsx("button",{id:"form-btn-enable",className:`btn btn-sm btn-outline-${a.disabled?"danger":"success"} me-2`,onClick:()=>s({disabled:!a.disabled}),children:a.disabled?"control disabled":" control enabled"})," ",e.jsx("button",{id:"form-btn-clear",className:"btn btn-sm btn-outline-primary me-2",onClick:()=>s({value:0}),children:"Clear"})]})};export{h as default};
