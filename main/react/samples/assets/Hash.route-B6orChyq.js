import{r as s,j as a}from"./index-BpwlRd3Y.js";import{h as n}from"./utils-DqdCTtHh.js";import{P as p}from"./pagination-Ca9mbVlI.js";import{u as l}from"./stores-Go4c4VUr.js";import{W as h}from"./config-ffUlGP_t.js";import"./func-DR0n-ShK-BRtNsj1u.js";import"./pagination-C_gYTMDt-BZYuhNQq.js";import"./stores-DZwcjwtF.js";import"./writables-DoU_XYTX-CrX6g7-i.js";import"./widget-N3v3aILp.js";const C=()=>{const i=l(n),t=+(i.split("#")[1]??4),o=s.useCallback(e=>location.hash=`#${i.split("#")[0]}#${e}`,[]),r=s.useCallback(e=>`#${i.split("#")[0]}#${e}`,[]);return a.jsx(a.Fragment,{children:a.jsxs(h,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with hrefs provided for each pagination element:"}),a.jsxs("p",{children:["Page hash: ",a.jsx("small",{children:"#"+i})]}),a.jsx(p,{ariaLabel:"Page navigation with customized hrefs",page:t,boundaryLinks:!0,pageLink:r,onPageChange:o})]})})};export{C as default};
