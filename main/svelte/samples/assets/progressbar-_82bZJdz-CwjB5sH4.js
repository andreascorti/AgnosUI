import{f as m,e as s,b as l,a as V}from"./writables-DoU_XYTX-5o4iMN-9.js";import{w as y,s as F}from"./stores-CebPntdG.js";import{G as r}from"./AppCommon-BopSFvtR.js";import{c as P}from"./directive-CGjTRxRh-3NaagQeY.js";const T={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",ariaValueTextFn:()=>{}},h={min:s,max:s,value:s,ariaLabel:l,className:l,ariaValueTextFn:V};function M(u){const[{max$:p,value$:x,min$:a,ariaValueTextFn$:$,ariaLabel$:o,...b},v]=y(T,u,h),e=r(()=>Math.max(a(),p())),t=r(()=>m(x(),e(),a())),f=r(()=>{const c=e(),i=a();return c>i?m((t()-i)*100/(c-i),100,0):0}),d=r(()=>t()>a()),g=r(()=>t()===e()),n=r(()=>$()(t(),a(),e()));return{...F({min$:a,max$:e,value$:t,percentage$:f,started$:d,finished$:g,ariaValueText$:n,ariaLabel$:o,...b}),patch:v,api:{},directives:{ariaDirective:P(()=>({attributes:{role:"progressbar","aria-label":o,"aria-valuenow":t,"aria-valuemin":a,"aria-valuemax":e,"aria-valuetext":n}}))},actions:{}}}export{M as c};
