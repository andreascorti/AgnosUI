import{S as C,i as F,s as N,l as W,e as m,k as h,p as B,a,r as D,b as q,v as s,w as L,x as E,n as x,f as H,B as j,c as M,m as y,t as A,d as R,g as S}from"./AppCommon-Z65tc74F.js";import{c as z}from"./directive-DCYlDznf-yhePTX7e.js";import{c as G}from"./navManager-BDyKcFOx.js";function I(c){let t,n,d,p,u,g,r,v,o,f,l,e,$,w=[{}],b={};for(let i=0;i<w.length;i+=1)b=W(b,w[i]);return{c(){t=m("div"),n=m("input"),d=h(),p=m("span"),u=B(c[0]),g=h(),r=m("input"),v=h(),o=m("input"),f=h(),l=m("input"),a(n,"type","text"),n.value=c[0],a(n,"class","form-control me-1"),a(p,"tabindex","-1"),a(p,"class","form-control w-auto me-1"),a(r,"tabindex","-1"),a(r,"type","checkbox"),a(r,"class","form-check-input align-self-center me-1"),a(o,"tabindex","-1"),a(o,"type","text"),o.value=c[0],o.disabled=!0,a(o,"class","form-control me-1"),a(l,"tabindex","-1"),a(l,"type","text"),l.value=c[0],a(l,"class","form-control me-1"),D(t,b)},m(i,_){q(i,t,_),s(t,n),s(t,d),s(t,p),s(p,u),s(t,g),s(t,r),s(t,v),s(t,o),s(t,f),s(t,l),e||($=[L(z.call(null,t,"d-flex demo-navmanager-line")),L(c[1].call(null,t,c[2]))],e=!0)},p(i,[_]){_&1&&n.value!==i[0]&&(n.value=i[0]),_&1&&E(u,i[0]),_&1&&o.value!==i[0]&&(o.value=i[0]),_&1&&l.value!==i[0]&&(l.value=i[0])},i:x,o:x,d(i){i&&H(t),e=!1,j($)}}}function J(c,t,n){const{directive:d,focusLeft:p,focusRight:u,focusFirst:g,focusLast:r,focusFirstLeft:v,focusFirstRight:o}=G(),f={keys:{ArrowLeft:p,ArrowRight:u,Home:g,End:r,"Meta+ArrowLeft":v,"Meta+ArrowRight":o},selector:e=>e.querySelectorAll("input,span")};let{text:l=""}=t;return c.$$set=e=>{"text"in e&&n(0,l=e.text)},[l,d,f]}class k extends C{constructor(t){super(),F(this,t,J,I,N,{text:0})}}function K(c){let t,n,d,p,u,g,r,v,o,f,l;return u=new k({props:{text:"Hello"}}),f=new k({props:{text:"שָׁלוֹם"}}),{c(){t=m("div"),n=m("div"),d=m("h2"),d.textContent="Left-to-right",p=h(),M(u.$$.fragment),g=h(),r=m("div"),v=m("h2"),v.textContent="Right-to-left",o=h(),M(f.$$.fragment),a(n,"dir","ltr"),a(n,"class","mt-3 pb-3"),a(r,"dir","rtl"),a(r,"class","mt-3 pb-3"),a(t,"class","demo-navmanager")},m(e,$){q(e,t,$),s(t,n),s(n,d),s(n,p),y(u,n,null),s(t,g),s(t,r),s(r,v),s(r,o),y(f,r,null),l=!0},p:x,i(e){l||(A(u.$$.fragment,e),A(f.$$.fragment,e),l=!0)},o(e){R(u.$$.fragment,e),R(f.$$.fragment,e),l=!1},d(e){e&&H(t),S(u),S(f)}}}class T extends C{constructor(t){super(),F(this,t,null,K,N,{})}}export{T as default};
