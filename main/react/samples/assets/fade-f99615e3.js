import{c as v}from"./cssTransitions-e5a2a4e0.js";import{r as s,a,b as S}from"./dom-cc7faf10.js";const j=({animationPendingClasses:h,animationPendingShowClasses:f,animationPendingHideClasses:w,showClasses:p,hideClasses:c})=>v((r,o,b,T)=>{if(s(r,p),s(r,c),b){if(s(r,o==="show"?w:f),!T.started){T.started=!0;const u=o==="show"?c:p;a(r,u),S(r),s(r,u)}a(r,h),S(r),a(r,o==="show"?f:w)}return()=>{s(r,h),s(r,f),s(r,w),a(r,o==="show"?p:c)}}),x=j({animationPendingClasses:["fade"],animationPendingShowClasses:["show"],showClasses:["show"],hideClasses:["d-none"]});export{x as f};
