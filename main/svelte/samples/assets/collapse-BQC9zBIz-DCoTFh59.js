import{c as u}from"./cssTransitions-KtCtrXBG.js";import{h as a,i as h,j as f}from"./directive-Bt_Lk6nS.js";const S=({dimension:i="height",showClasses:s,hideClasses:c,animationPendingClasses:p}={})=>u((o,t,w,g)=>{if(w){let{maxSize:r,minSize:l}=g;r||(a(o,p),a(o,c),h(o,s),r=o.getBoundingClientRect()[i]+"px",g.maxSize=r),l||(a(o,p),a(o,s),h(o,c),l=o.getBoundingClientRect()[i]+"px",g.minSize=l),a(o,s),a(o,c);const z=t==="show"?[l,r]:[r,l];o.style[i]=z[0],f(o),h(o,p),f(o),o.style[i]=z[1]}else a(o,t==="show"?c:s);return()=>{a(o,p),h(o,t==="show"?s:c),o.style[i]=""}}),T={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},v={dimension:"width",hideClasses:["collapse","collapse-horizontal"],showClasses:["collapse","collapse-horizontal","show"],animationPendingClasses:["collapsing","collapse-horizontal"]},C=S(T),n=S(v);export{n as a,C as c};
