import{q as u,u as a,v as t,x as f}from"./directive-DCYlDznf-yhePTX7e.js";import{c as T}from"./cssTransitions-BaZQrEJp.js";const w=({dimension:s="height",showClasses:i,hideClasses:r,animationPendingClasses:p}={})=>T((o,h,S,g)=>{if(S&&u(o)){let{maxSize:c,minSize:l}=g;c||(a(o,p),a(o,r),t(o,i),c=o.getBoundingClientRect()[s]+"px",g.maxSize=c),l||(a(o,p),a(o,i),t(o,r),l=o.getBoundingClientRect()[s]+"px",g.minSize=l),a(o,i),a(o,r);const z=h==="show"?[l,c]:[c,l];o.style[s]=z[0],f(o),t(o,p),f(o),o.style[s]=z[1]}else a(o,h==="show"?r:i);return()=>{a(o,p),t(o,h==="show"?i:r),o.style[s]=""}}),v={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},x={dimension:"width",hideClasses:["collapse","collapse-horizontal"],showClasses:["collapse","collapse-horizontal","show"],animationPendingClasses:["collapsing","collapse-horizontal"]},C=w(v),n=w(x);export{n as a,C as c};
