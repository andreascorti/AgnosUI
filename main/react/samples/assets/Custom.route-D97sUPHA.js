import{r as a,j as s,R as x}from"./App-XNADZBio.js";import{S as f}from"./select-DVNIwOXL-B_EYrrZ1.js";import"./stores-bzJrTsnV.js";import"./floatingUI-ChfxgbwI.js";import"./directive-CGjTRxRh-BI2xHIMp.js";import"./promise-CY2U8bTP-BPyyxCgB.js";import"./focustrack-BlJFaKa7.js";import"./navManager-DOvT6Stu.js";import"./config-CXwd_Qkq.js";import"./config-CnQZr086.js";import"./widget-DAs9_HQ1-Ds05mpz4.js";import"./stores-B8YEDwZq-DmEjO4KH.js";import"./directive-_62WM8Ul-D_6TfOqI.js";function j(e,t){let r;return(...o)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...o)},t)}}const w=e=>{let t;return(...r)=>(t==null||t.abort(),t=new AbortController,e(t.signal,...r))},d="https://en.wikipedia.org/?curid=",S=new Intl.Collator("en").compare;function v(e){const t=document.createElement("div");return t.innerHTML=e,t.innerText}const p=e=>"page-"+e.pageid,k=({itemContext:e,widget:t})=>s.jsxs(s.Fragment,{children:[s.jsx("a",{href:d+e.item.pageid,target:"_blank",rel:"noreferrer",children:e.item.title}),s.jsx("button",{type:"button",className:"btn-close ms-1 wiki-btn-close","aria-label":"Close",onClick:r=>t.actions.onRemoveBadgeClick(r.nativeEvent,e.item)})]}),C=({itemContext:e})=>{const t=e.item;return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"fw-bold",children:t.title}),s.jsx("div",{className:"text-wrap wiki-desc",children:t.snippet})]})},F=e=>e.querySelectorAll("a,button,input"),M=()=>{const[e,t]=a.useState([]),[r,o]=a.useState([]),[,u]=a.useState(void 0),g=a.useCallback(j(w(async(n,i)=>{var c;u(i);const b=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+i,{signal:n})).json();t(((c=b.query)==null?void 0:c.search.map(m=>({...m,snippet:v(m.snippet)})))??[])}),200),[]),h=a.useCallback(n=>{o((n||[]).sort((i,l)=>S(i.title,l.title)))},[]);return s.jsxs("div",{className:"custom-select my-auto mb-3",children:[s.jsx(f,{items:e,itemIdFn:p,navSelector:F,onFilterTextChange:g,onSelectedChange:h,slotBadgeLabel:k,slotItem:C,badgeClassName:"badge text-bg-light d-flex align-items-center"}),s.jsx("span",{className:"fw-bold",children:"Selection: "}),r.map(n=>s.jsx(x.Fragment,{children:s.jsx("a",{href:`${d}${n.pageid}`,className:"pe-2",children:n.title})},p(n))),!r.length&&s.jsx(s.Fragment,{children:"none"})]})};export{M as default};
