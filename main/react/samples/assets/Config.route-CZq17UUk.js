import{r as e,j as t}from"./App-XNADZBio.js";import{R as r}from"./rating-D1war3lR-BpndGV9i.js";import{W as m}from"./config-CXwd_Qkq.js";import"./index-DtnjhQoc.js";import"./rating-DSRcXDNK-sQdmFWWv.js";import"./stores-bzJrTsnV.js";import"./directive-CGjTRxRh-BI2xHIMp.js";import"./writables-DoU_XYTX-CBor1g6-.js";import"./directive-_62WM8Ul-D_6TfOqI.js";import"./config-CnQZr086.js";import"./widget-DAs9_HQ1-Ds05mpz4.js";import"./stores-B8YEDwZq-DmEjO4KH.js";const o=function({fill:n}){const a=["star"];n===100&&a.push("full");const i={width:`${n}%`};return t.jsxs("span",{className:a.join(" "),children:[" ",t.jsx("span",{className:"half",style:i,children:"♥"}),"♥"," "]})},R=()=>{const[n,a]=e.useState({}),[i,c]=e.useState(3);function s(l){a({...n,...l})}return t.jsxs(m,{rating:n,children:[t.jsx(r,{rating:i,onRatingChange:c}),t.jsxs("div",{className:"mt-3",children:["Disabled: ",t.jsxs("div",{id:"btn-config-disabled",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.disabled?"active":""}`,onClick:()=>s({disabled:!0}),children:"true"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.disabled?"":"active"}`,onClick:()=>s({disabled:!1}),children:"false"})]}),t.jsx("br",{}),"maxRating: ",t.jsxs("div",{id:"btn-config-maxRating",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===40?"active":""}`,onClick:()=>s({maxRating:40}),children:"40"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===30?"active":""}`,onClick:()=>s({maxRating:30}),children:"30"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===20?"active":""}`,onClick:()=>s({maxRating:20}),children:"20"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===void 0?"active":""}`,onClick:()=>s({maxRating:void 0}),children:"undefined"})]}),t.jsx("br",{}),"className: ",t.jsxs("div",{id:"btn-config-className",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className==="fs-1"?"active":""}`,onClick:()=>s({className:"fs-1"}),children:"fs-1"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className==="fs-2"?"active":""}`,onClick:()=>s({className:"fs-2"}),children:"fs-2"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className===void 0?"active":""}`,onClick:()=>s({className:void 0}),children:"undefined"})]}),t.jsx("br",{}),"slotStar: ",t.jsxs("div",{id:"btn-config-slotStar",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar===o?"active":""}`,onClick:()=>s({slotStar:o}),children:"custom"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar==="*"?"active":""}`,onClick:()=>s({slotStar:"*"}),children:"'*'"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar===void 0?"active":""}`,onClick:()=>s({slotStar:void 0}),children:"undefined"})]})]})]})};export{R as default};
