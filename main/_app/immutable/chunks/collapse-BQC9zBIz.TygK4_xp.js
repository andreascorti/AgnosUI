import{c as T,r as a,a as S,b as x}from"./cssTransitions.BlmQv6GK.js";const h=({dimension:c="height",showClasses:o,hideClasses:p,animationPendingClasses:g}={})=>T((r,u,y,z)=>{if(y){let{maxSize:i,minSize:f}=z;i||(a(r,g),a(r,p),S(r,o),i=r.getBoundingClientRect()[c]+"px",z.maxSize=i),f||(a(r,g),a(r,o),S(r,p),f=r.getBoundingClientRect()[c]+"px",z.minSize=f),a(r,o),a(r,p);const v=u==="show"?[f,i]:[i,f];r.style[c]=v[0],x(r),S(r,g),x(r),r.style[c]=v[1]}else a(r,u==="show"?p:o);return()=>{a(r,g),S(r,u==="show"?o:p),r.style[c]=""}}),s={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},B=h(s);export{B as c};
