import{x as T,y as a,z as t,A as f}from"./directive-ClyvktyQ-DyzILLR9.js";import{c as u}from"./cssTransitions-CIcz1gi8.js";const w=({dimension:s="height",showClasses:i,hideClasses:r,animationPendingClasses:p}={})=>u((o,h,S,z)=>{if(S&&T(o)){let{maxSize:c,minSize:l}=z;c||(a(o,p),a(o,r),t(o,i),c=o.getBoundingClientRect()[s]+"px",z.maxSize=c),l||(a(o,p),a(o,i),t(o,r),l=o.getBoundingClientRect()[s]+"px",z.minSize=l),a(o,i),a(o,r);const g=h==="show"?[l,c]:[c,l];o.style[s]=g[0],f(o),t(o,p),f(o),o.style[s]=g[1]}else a(o,h==="show"?r:i);return()=>{a(o,p),t(o,h==="show"?i:r),o.style[s]=""}}),x={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},y={dimension:"width",hideClasses:["collapse","collapse-horizontal"],showClasses:["collapse","collapse-horizontal","show"],animationPendingClasses:["collapsing","collapse-horizontal"]},C=w(x),n=w(y);export{n as a,C as c};
