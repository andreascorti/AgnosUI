import{S as K,i as L,s as M,e as d,a as f,a1 as O,b as _,r,n as G,f as g,k,c as Q,l as S,m as T,u as q,w as H,t as U,d as V,g as W,x as X,a5 as Y}from"./AppCommon-B0o63QXa.js";import{P as Z}from"./Progressbar-DiNTTIFn.js";import"./Slot-JnYlUU0G.js";import"./config-BYJKBt5K.js";import"./stores-DWGGzlfa.js";import"./writables-DoU_XYTX-BIu_hqgK.js";function J(a){let t,n,s,l,o;return{c(){t=d("div"),n=k(),s=d("div"),l=k(),o=d("div"),f(t,"class","bubble bubble-1"),f(s,"class","bubble bubble-2"),f(o,"class","bubble bubble-3")},m(e,i){_(e,t,i),_(e,n,i),_(e,s,i),_(e,l,i),_(e,o,i)},d(e){e&&(g(t),g(n),g(s),g(l),g(o))}}}function x(a){let t,n,s,l,o,e=a[0].percentage>=50&&J();return{c(){t=d("div"),n=d("div"),s=d("div"),l=d("div"),e&&e.c(),f(l,"class","cup-fill"),f(l,"style",o=`height: ${1.7*a[0].percentage}px;`),f(s,"class","cup-fill-parent"),f(n,"class","cup"),f(t,"class","position-relative"),O(t,"height","300px")},m(i,c){_(i,t,c),r(t,n),r(n,s),r(s,l),e&&e.m(l,null)},p(i,[c]){i[0].percentage>=50?e||(e=J(),e.c(),e.m(l,null)):e&&(e.d(1),e=null),c&1&&o!==(o=`height: ${1.7*i[0].percentage}px;`)&&f(l,"style",o)},i:G,o:G,d(i){i&&g(t),e&&e.d()}}}function ee(a,t,n){let{state:s}=t;return a.$$set=l=>{"state"in l&&n(0,s=l.state)},[s]}class te extends K{constructor(t){super(),L(this,t,ee,x,M,{state:0})}}function se(a){let t,n,s,l,o,e,i,c,$,D,m,h=a[1]?"Pause":"Resume",C,w,F,v,z,y,A,R,I,P=a[0]===0?"Need to wake up.":a[0]<100?`Retrieving coffee... ${a[0]}%`:"Ready to work !",N,b,j,B;return s=new Z({props:{value:a[0],slotStructure:te}}),{c(){t=d("div"),n=d("div"),Q(s.$$.fragment),l=k(),o=d("div"),e=d("div"),i=d("button"),c=S("Start"),D=k(),m=d("button"),C=S(h),F=k(),v=d("button"),z=S("Reset"),A=k(),R=d("p"),I=d("span"),N=S(P),O(n,"width","350px"),f(i,"class","btn btn-outline-primary"),i.disabled=$=a[0]>0,f(m,"class","btn btn-outline-primary"),m.disabled=w=a[0]===0||a[0]>=100,f(v,"class","btn btn-outline-primary"),v.disabled=y=a[0]===0,f(e,"class","btn-group"),f(e,"role","group"),f(R,"class","mt-3"),f(o,"class","d-flex flex-column justify-content-evenly h-100 ms-5"),f(t,"class","d-flex align-items-center flex-wrap")},m(u,p){_(u,t,p),r(t,n),T(s,n,null),r(t,l),r(t,o),r(o,e),r(e,i),r(i,c),r(e,D),r(e,m),r(m,C),r(e,F),r(e,v),r(v,z),r(o,A),r(o,R),r(R,I),r(I,N),b=!0,j||(B=[q(i,"click",a[2]),q(m,"click",a[3]),q(v,"click",a[4])],j=!0)},p(u,[p]){const E={};p&1&&(E.value=u[0]),s.$set(E),(!b||p&1&&$!==($=u[0]>0))&&(i.disabled=$),(!b||p&2)&&h!==(h=u[1]?"Pause":"Resume")&&H(C,h),(!b||p&1&&w!==(w=u[0]===0||u[0]>=100))&&(m.disabled=w),(!b||p&1&&y!==(y=u[0]===0))&&(v.disabled=y),(!b||p&1)&&P!==(P=u[0]===0?"Need to wake up.":u[0]<100?`Retrieving coffee... ${u[0]}%`:"Ready to work !")&&H(N,P)},i(u){b||(U(s.$$.fragment,u),b=!0)},o(u){V(s.$$.fragment,u),b=!1},d(u){u&&g(t),W(s),j=!1,X(B)}}}function le(a,t,n){let s=0,l=!1;const o=setInterval(()=>{l&&s<100&&n(0,s=s+10)},500);return Y(()=>{clearInterval(o)}),[s,l,()=>{n(1,l=!0)},()=>{n(1,l=!l)},()=>{n(0,s=0),n(1,l=!1)}]}class fe extends K{constructor(t){super(),L(this,t,le,se,M,{})}}export{fe as default};
