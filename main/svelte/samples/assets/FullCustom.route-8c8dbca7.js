import{S as K,i as L,s as M,j as f,n as p,a0 as O,g as _,p as o,x as G,h as g,f as k,c as Q,k as P,m as T,q as N,u as H,t as U,a as V,d as W,v as X,a6 as Y}from"./index-d88d3c67.js";import{P as Z}from"./Progressbar-3950b8e9.js";import"./index-d424bc46.js";import"./config-b85885a4.js";import"./directive-8965f686.js";import"./stores-018f8970.js";import"./baseTransitions-b16b41b5.js";import"./writables-a15bafe3.js";import"./promise-2aa845a6.js";import"./fade-c4284705.js";import"./dom-cc7faf10.js";import"./rating-f93b0317.js";import"./focustrack-bcd39856.js";function J(a){let t,i,s,l,r;return{c(){t=f("div"),i=k(),s=f("div"),l=k(),r=f("div"),p(t,"class","bubble bubble-1"),p(s,"class","bubble bubble-2"),p(r,"class","bubble bubble-3")},m(e,n){_(e,t,n),_(e,i,n),_(e,s,n),_(e,l,n),_(e,r,n)},d(e){e&&(g(t),g(i),g(s),g(l),g(r))}}}function x(a){let t,i,s,l,r,e=a[0].percentage>=50&&J();return{c(){t=f("div"),i=f("div"),s=f("div"),l=f("div"),e&&e.c(),p(l,"class","cup-fill"),p(l,"style",r=`height: ${1.7*a[0].percentage}px;`),p(s,"class","cup-fill-parent"),p(i,"class","cup"),p(t,"class","position-relative"),O(t,"height","300px")},m(n,c){_(n,t,c),o(t,i),o(i,s),o(s,l),e&&e.m(l,null)},p(n,[c]){n[0].percentage>=50?e||(e=J(),e.c(),e.m(l,null)):e&&(e.d(1),e=null),c&1&&r!==(r=`height: ${1.7*n[0].percentage}px;`)&&p(l,"style",r)},i:G,o:G,d(n){n&&g(t),e&&e.d()}}}function ee(a,t,i){let{state:s}=t;return a.$$set=l=>{"state"in l&&i(0,s=l.state)},[s]}class te extends K{constructor(t){super(),L(this,t,ee,x,M,{state:0})}}function se(a){let t,i,s,l,r,e,n,c,h,D,m,$=a[1]?"Pause":"Resume",S,y,F,v,z,w,A,R,j,C=a[0]===0?"Need to wake up.":a[0]<100?`Retrieving coffee... ${a[0]}%`:"Ready to work !",q,d,I,B;return s=new Z({props:{value:a[0],slotContent:te}}),{c(){t=f("div"),i=f("div"),Q(s.$$.fragment),l=k(),r=f("div"),e=f("div"),n=f("button"),c=P("Start"),D=k(),m=f("button"),S=P($),F=k(),v=f("button"),z=P("Reset"),A=k(),R=f("p"),j=f("span"),q=P(C),O(i,"width","350px"),p(n,"class","btn btn-outline-primary"),n.disabled=h=a[0]>0,p(m,"class","btn btn-outline-primary"),m.disabled=y=a[0]===0||a[0]>=100,p(v,"class","btn btn-outline-primary"),v.disabled=w=a[0]===0,p(e,"class","btn-group"),p(e,"role","group"),p(R,"class","mt-3"),p(r,"class","d-flex flex-column justify-content-evenly h-100 ms-5"),p(t,"class","d-flex align-items-center flex-wrap")},m(u,b){_(u,t,b),o(t,i),T(s,i,null),o(t,l),o(t,r),o(r,e),o(e,n),o(n,c),o(e,D),o(e,m),o(m,S),o(e,F),o(e,v),o(v,z),o(r,A),o(r,R),o(R,j),o(j,q),d=!0,I||(B=[N(n,"click",a[2]),N(m,"click",a[3]),N(v,"click",a[4])],I=!0)},p(u,[b]){const E={};b&1&&(E.value=u[0]),s.$set(E),(!d||b&1&&h!==(h=u[0]>0))&&(n.disabled=h),(!d||b&2)&&$!==($=u[1]?"Pause":"Resume")&&H(S,$),(!d||b&1&&y!==(y=u[0]===0||u[0]>=100))&&(m.disabled=y),(!d||b&1&&w!==(w=u[0]===0))&&(v.disabled=w),(!d||b&1)&&C!==(C=u[0]===0?"Need to wake up.":u[0]<100?`Retrieving coffee... ${u[0]}%`:"Ready to work !")&&H(q,C)},i(u){d||(U(s.$$.fragment,u),d=!0)},o(u){V(s.$$.fragment,u),d=!1},d(u){u&&g(t),W(s),I=!1,X(B)}}}function le(a,t,i){let s=0,l=!1;const r=setInterval(()=>{l&&s<100&&i(0,s=s+10)},500);return Y(()=>{clearInterval(r)}),[s,l,()=>{i(1,l=!0)},()=>{i(1,l=!l)},()=>{i(0,s=0),i(1,l=!1)}]}class _e extends K{constructor(t){super(),L(this,t,le,se,M,{})}}export{_e as default};
