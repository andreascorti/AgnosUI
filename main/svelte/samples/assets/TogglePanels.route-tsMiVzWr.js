import{S as F,i as O,s as P,c as y,f as d,j as $,n as g,m as A,g as r,q as B,t as I,a as x,h as c,d as H,v as Y,e as T,k as C,x as j}from"./index-UPNeZBo3.js";import{B as D}from"./body-Kwi7N5fe.js";import{A as z,I as q}from"./Item-dafD6wO5.js";import"./stores-PnfSUH5-.js";import"./func-tK0QDe5R.js";import"./baseTransitions-V8MBEsAA.js";import"./writables-xSWbxWpZ.js";import"./promise-crQomS-n.js";import"./directive-RcpsQ3WL.js";import"./collapse-Umn292aS.js";import"./cssTransitions-ubCwVU73.js";import"./dom-2S7XI5EU.js";import"./config-GzXU4TGQ.js";import"./Slot-dSqQsBob.js";function G(s){let t;return{c(){t=C("First panel")},m(n,e){r(n,t,e)},d(n){n&&c(t)}}}function J(s){let t;return{c(){t=C(D)},m(n,e){r(n,t,e)},p:j,d(n){n&&c(t)}}}function K(s){let t;return{c(){t=C("Second panel")},m(n,e){r(n,t,e)},d(n){n&&c(t)}}}function L(s){let t;return{c(){t=C(D)},m(n,e){r(n,t,e)},p:j,d(n){n&&c(t)}}}function M(s){let t,n,e,m;t=new q({props:{itemId:"first",$$slots:{itemBody:[J],itemHeader:[G]},$$scope:{ctx:s}}});let u={itemId:"second",$$slots:{itemBody:[L],itemHeader:[K]},$$scope:{ctx:s}};return e=new q({props:u}),s[2](e),{c(){y(t.$$.fragment),n=d(),y(e.$$.fragment)},m(o,l){A(t,o,l),r(o,n,l),A(e,o,l),m=!0},p(o,l){const _={};l&256&&(_.$$scope={dirty:l,ctx:o}),t.$set(_);const f={};l&256&&(f.$$scope={dirty:l,ctx:o}),e.$set(f)},i(o){m||(I(t.$$.fragment,o),I(e.$$.fragment,o),m=!0)},o(o){x(t.$$.fragment,o),x(e.$$.fragment,o),m=!1},d(o){o&&c(n),H(t,o),s[2](null),H(e,o)}}}function N(s){let t,n,e,m,u,o,l,_,f,b,p,k,h,w,E={$$slots:{default:[M]},$$scope:{ctx:s}};return t=new z({props:E}),s[3](t),{c(){y(t.$$.fragment),n=d(),e=$("hr"),m=d(),u=$("button"),u.textContent="Toggle first",o=d(),l=$("button"),l.textContent="Toggle second",_=d(),f=$("button"),f.textContent="Expand all",b=d(),p=$("button"),p.textContent="Collapse all",g(u,"class","btn btn-sm btn-outline-primary me-2"),g(l,"class","btn btn-sm btn-outline-primary me-2"),g(f,"class","btn btn-sm btn-outline-primary me-2"),g(p,"class","btn btn-sm btn-outline-primary me-2")},m(i,a){A(t,i,a),r(i,n,a),r(i,e,a),r(i,m,a),r(i,u,a),r(i,o,a),r(i,l,a),r(i,_,a),r(i,f,a),r(i,b,a),r(i,p,a),k=!0,h||(w=[B(u,"click",s[4]),B(l,"click",s[5]),B(f,"click",s[6]),B(p,"click",s[7])],h=!0)},p(i,[a]){const S={};a&258&&(S.$$scope={dirty:a,ctx:i}),t.$set(S)},i(i){k||(I(t.$$.fragment,i),k=!0)},o(i){x(t.$$.fragment,i),k=!1},d(i){i&&(c(n),c(e),c(m),c(u),c(o),c(l),c(_),c(f),c(b),c(p)),s[3](null),H(t,i),h=!1,Y(w)}}}function Q(s,t,n){let e,m;function u(p){T[p?"unshift":"push"](()=>{m=p,n(1,m)})}function o(p){T[p?"unshift":"push"](()=>{e=p,n(0,e)})}return[e,m,u,o,()=>e.api.toggle("first"),()=>m.api.toggle(),()=>e.api.expandAll(),()=>e.api.collapseAll()]}class rt extends F{constructor(t){super(),O(this,t,Q,N,P,{})}}export{rt as default};
