import{c as o,n as D}from"./func-DcknktoK.js";import{w as _,c as E,s as I,I as V}from"./stores-n_mZmoIi.js";import{d as K,e as f,t as d,a as u,b as r,i as w}from"./writables-2TBnDypA.js";const P="#",m={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:D,pagesFactory:(t,n)=>{const g=[];for(let l=1;l<=n;l++)g.push(l);return g},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(t,n)=>`Page ${t} of ${n}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",className:"",slotEllipsis:"…",slotFirst:"«",slotPrevious:"‹",slotNext:"›",slotLast:"»",slotPages:void 0,slotNumberLabel:({displayedPage:t})=>`${t}`,pageLink:t=>P};function M(){return{...m}}const H={page:f,collectionSize:f,pageSize:f,disabled:d,directionLinks:d,boundaryLinks:d,size:{normalizeValue:t=>t==="lg"||t==="sm"||t===null?t:V},onPageChange:u,pagesFactory:u,ariaLabel:r,activeLabel:r,ariaPageLabel:u,ariaFirstLabel:r,ariaPreviousLabel:r,ariaNextLabel:r,ariaLastLabel:r,className:r,pageLink:u};function T(t){const[{page$:n,collectionSize$:g,pageSize$:l,onPageChange$:y,pagesFactory$:k,ariaPageLabel$:F,pageLink$:x,...L},z]=_(m,t,H),i=o(()=>{let a=Math.ceil(g()/l());return(!w(a)||a<1)&&(a=1),a}),s=E(n,y,a=>K(a,i(),1)),$=o(()=>k()(s(),i())),A=o(()=>s()===i()||L.disabled$()),C=o(()=>s()===1||L.disabled$()),N=o(()=>{const a=F(),e=i();return $().map(p=>a(p,e))}),b=o(()=>{const a=x(),e=i();return Array.from({length:e},(p,S)=>a(S+1))}),h=o(()=>{const a=b(),e=s()-1;return{previous:a.at(e>0?e-1:0),next:a.at(e+1)??a.at(-1)}});function c(a,e,p){b()[a-1]===P&&(e==null||e.preventDefault()),(!e||!(e.ctrlKey||e.metaKey))&&(e==null||e.preventDefault(),p?s.update(p):s.set(a))}return{...I({pageCount$:i,page$:s,pages$:$,nextDisabled$:A,previousDisabled$:C,pagesLabel$:N,pagesHrefs$:b,directionsHrefs$:h,...L}),patch:z,actions:{select(a,e){c(a,e)},first(a){c(1,a)},previous(a){c(s()-1,a,e=>e-1)},next(a){c(s()+1,a,e=>e+1)},last(a){c(i(),a)}},api:{isEllipsis(a){return a===-1}},directives:{}}}export{T as c,M as g};
