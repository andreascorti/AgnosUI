import{r as n,j as e}from"./index-ffc26b19.js";import{P as m}from"./Progressbar-cc6f561d.js";import"./index-50cfebd5.js";import"./utils-946c19b8.js";import"./baseTransitions-00a88573.js";import"./writables-17424135.js";import"./promise-8377987b.js";import"./fade-a3701a34.js";import"./dom-cc7faf10.js";import"./rating-a1a56b21.js";import"./focustrack-4fea73bd.js";import"./config-7593863d.js";const u=({state:s})=>e.jsx("div",{className:"position-relative",style:{height:"300px"},children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${1.7*s.percentage}px`},children:s.percentage>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),R=()=>{const[s,i]=n.useState(0),[t,l]=n.useState(!1);n.useEffect(()=>{const c=setInterval(()=>{t&&s<100&&i(s+10)},500);return()=>clearInterval(c)},[t,s]);const r=()=>{l(!0)},a=()=>{l(!t)},o=()=>{i(0),l(!1)};return e.jsxs("div",{className:"d-flex align-items-center flex-wrap",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(m,{value:s,slotContent:u})}),e.jsxs("div",{className:"d-flex flex-column justify-content-evenly h-100 ms-5",children:[e.jsxs("div",{className:"btn-group",role:"group",children:[e.jsx("button",{className:"btn btn-outline-primary",disabled:s>0,onClick:r,children:"Start"}),e.jsx("button",{className:"btn btn-outline-primary",disabled:s===0||s>=100,onClick:a,children:t?"Pause":"Resume"}),e.jsx("button",{className:"btn btn-outline-primary",disabled:s===0,onClick:o,children:"Reset"})]}),e.jsx("p",{className:"mt-3",children:e.jsx("span",{children:s===0?"Need to wake up.":s<100?`Retrieving coffee... ${s}%`:"Ready to work !"})})]})]})};export{R as default};
