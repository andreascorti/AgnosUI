import{f as m,x as b}from"./directive-ClyvktyQ-DyzILLR9.js";import{b as c,c as d}from"./promise-CY2U8bTP-Colb0t6T.js";function f(t){return window.getComputedStyle(t).transitionProperty!=="none"}function w(t){const{transitionDelay:o,transitionDuration:i}=window.getComputedStyle(t),n=parseFloat(o),r=parseFloat(i);return(n+r)*1e3}const D=t=>async(o,i,n,r,u)=>{const p=t(o,i,n,u)??m;if(b(o)&&n&&f(o)){const s=c(r,"abort"),a=c(o,"transitionend"),e=d(w(o));await Promise.race([s.promise,a.promise,e.promise]),s.unsubscribe(),a.unsubscribe(),e.unsubscribe()}r.aborted||p()};export{D as c};
