import{j as e,r}from"./App-XNADZBio.js";import{P as m}from"./progressbar-BtzZGFcK-CeqBY3SC.js";import"./index-CRy_zfwh.js";import"./writables-DoU_XYTX-DoV7pQAs.js";import"./stores-B4F_j8QF.js";import"./directive-GSGkMcBJ.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./slot-DrPnuT9k.js";import"./directive-CX0hxCpP-srOUdzTw.js";import"./index-Bh3NuAq4.js";const u=({state:s})=>e.jsx("div",{className:"position-relative",style:{height:"300px"},children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${1.7*s.percentage}px`},children:s.percentage>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),k=()=>{const[s,i]=r.useState(0),[t,l]=r.useState(!1);r.useEffect(()=>{const o=setInterval(()=>{t&&s<100&&i(s+10)},500);return()=>clearInterval(o)},[t,s]);const n=()=>{l(!0)},a=()=>{l(!t)},c=()=>{i(0),l(!1)};return e.jsxs("div",{className:"d-flex align-items-center flex-wrap",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(m,{value:s,slotStructure:u})}),e.jsxs("div",{className:"d-flex flex-column justify-content-evenly h-100 ms-5",children:[e.jsxs("div",{className:"btn-group",role:"group",children:[e.jsx("button",{className:"btn btn-outline-primary",disabled:s>0,onClick:n,children:"Start"}),e.jsx("button",{className:"btn btn-outline-primary",disabled:s===0||s>=100,onClick:a,children:t?"Pause":"Resume"}),e.jsx("button",{className:"btn btn-outline-primary",disabled:s===0,onClick:c,children:"Reset"})]}),e.jsx("p",{className:"mt-3",children:e.jsx("span",{children:s===0?"Need to wake up.":s<100?`Retrieving coffee... ${s}%`:"Ready to work !"})})]})]})};export{k as default};
