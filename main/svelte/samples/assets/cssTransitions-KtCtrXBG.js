import{a as m}from"./stores-DWGGzlfa.js";import{b as c,c as b}from"./promise-CY2U8bTP-DQ8Un8Cc.js";function d(t){return window.getComputedStyle(t).transitionProperty!=="none"}function f(t){const{transitionDelay:o,transitionDuration:i}=window.getComputedStyle(t),n=parseFloat(o),r=parseFloat(i);return(n+r)*1e3}const w=t=>async(o,i,n,r,u)=>{const p=t(o,i,n,u)??m;if(n&&d(o)){const s=c(r,"abort"),a=c(o,"transitionend"),e=b(f(o));await Promise.race([s.promise,a.promise,e.promise]),s.unsubscribe(),a.unsubscribe(),e.unsubscribe()}r.aborted||p()};export{w as c};
