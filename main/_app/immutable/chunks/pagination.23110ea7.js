import{n as t}from"./stores.d325911a.js";const s={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:t,pagesFactory:(a,e)=>{const o=[];for(let i=1;i<=e;i++)o.push(i);return o},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(a,e)=>`Page ${a} of ${e}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",className:"",slotEllipsis:"…",slotFirst:"«",slotPrevious:"‹",slotNext:"›",slotLast:"»",slotPages:void 0,slotNumberLabel:({displayedPage:a})=>`${a}`};function n(){return{...s}}export{n as g};
