import{S as A,i as C,s as F,e as p,k as h,l as S,a,b as N,r as s,y as $,w as q,n as w,f as H,x as E,c as L,m as M,t as y,d as R,g as k}from"./AppCommon-FSNPofIP.js";import{c as j}from"./navManager-DNbCkdVj.js";import"./directive-BuhXJyzg.js";import"./func-DR0n-ShK-fOTgS_tI.js";import"./dom-B9Oy3i4s-Hs1W5kAC.js";function z(t){let e,n,d,f,u,g,r,v,i,m,l,o,b;return{c(){e=p("div"),n=p("input"),d=h(),f=p("span"),u=S(t[0]),g=h(),r=p("input"),v=h(),i=p("input"),m=h(),l=p("input"),a(n,"type","text"),n.value=t[0],a(n,"class","form-control me-1"),a(f,"tabindex","-1"),a(f,"class","form-control w-auto me-1"),a(r,"tabindex","-1"),a(r,"type","checkbox"),a(r,"class","form-check-input align-self-center me-1"),a(i,"tabindex","-1"),a(i,"type","text"),i.value=t[0],i.disabled=!0,a(i,"class","form-control me-1"),a(l,"tabindex","-1"),a(l,"type","text"),l.value=t[0],a(l,"class","form-control me-1"),a(e,"class","d-flex demo-navmanager-line")},m(c,_){N(c,e,_),s(e,n),s(e,d),s(e,f),s(f,u),s(e,g),s(e,r),s(e,v),s(e,i),s(e,m),s(e,l),o||(b=[$(t[1].call(null,n,t[2])),$(t[1].call(null,f,t[2])),$(t[1].call(null,r,t[2])),$(t[1].call(null,i,t[2])),$(t[1].call(null,l,t[2]))],o=!0)},p(c,[_]){_&1&&n.value!==c[0]&&(n.value=c[0]),_&1&&q(u,c[0]),_&1&&i.value!==c[0]&&(i.value=c[0]),_&1&&l.value!==c[0]&&(l.value=c[0])},i:w,o:w,d(c){c&&H(e),o=!1,E(b)}}}function B(t,e,n){const{directive:d,focusLeft:f,focusRight:u,focusFirst:g,focusLast:r,focusFirstLeft:v,focusFirstRight:i}=j(),m={keys:{ArrowLeft:f,ArrowRight:u,Home:g,End:r,"Meta+ArrowLeft":v,"Meta+ArrowRight":i}};let{text:l=""}=e;return t.$$set=o=>{"text"in o&&n(0,l=o.text)},[l,d,m]}class x extends A{constructor(e){super(),C(this,e,B,z,F,{text:0})}}function D(t){let e,n,d,f,u,g,r,v,i,m,l;return u=new x({props:{text:"Hello"}}),m=new x({props:{text:"שָׁלוֹם"}}),{c(){e=p("div"),n=p("div"),d=p("h2"),d.textContent="Left-to-right",f=h(),L(u.$$.fragment),g=h(),r=p("div"),v=p("h2"),v.textContent="Right-to-left",i=h(),L(m.$$.fragment),a(n,"dir","ltr"),a(n,"class","mt-3 pb-3"),a(r,"dir","rtl"),a(r,"class","mt-3 pb-3"),a(e,"class","demo-navmanager")},m(o,b){N(o,e,b),s(e,n),s(n,d),s(n,f),M(u,n,null),s(e,g),s(e,r),s(r,v),s(r,i),M(m,r,null),l=!0},p:w,i(o){l||(y(u.$$.fragment,o),y(m.$$.fragment,o),l=!0)},o(o){R(u.$$.fragment,o),R(m.$$.fragment,o),l=!1},d(o){o&&H(e),k(u),k(m)}}}class P extends A{constructor(e){super(),C(this,e,null,D,F,{})}}export{P as default};
