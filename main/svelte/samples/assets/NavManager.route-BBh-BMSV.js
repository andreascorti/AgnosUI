import{S as J,i as K,s as O,j as L,k as v,f as y,l as T,r as b,q as x,g as P,v as i,w as p,y as q,a3 as U,n as H,h as Q,B as V,c as B,m as D,t as E,a as z,d as G}from"./AppCommon-Bd7c79Sv.js";import{c as W}from"./navManager-Dweow_uA.js";import{c as M}from"./directive-DCYlDznf-2vjIImQS.js";function X(l){let t,a,d,f,r,$,u,m,s,c,n,o,R,A=[{type:"text"},{value:l[0]},{}],g={};for(let e=0;e<A.length;e+=1)g=L(g,A[e]);let S=[{tabindex:"-1"},{}],k={};for(let e=0;e<S.length;e+=1)k=L(k,S[e]);let j=[{tabindex:"-1"},{type:"checkbox"},{}],C={};for(let e=0;e<j.length;e+=1)C=L(C,j[e]);let F=[{tabindex:"-1"},{type:"text"},{value:l[0]},{disabled:!0},{}],_={};for(let e=0;e<F.length;e+=1)_=L(_,F[e]);let N=[{tabindex:"-1"},{type:"text"},{value:l[0]},{}],h={};for(let e=0;e<N.length;e+=1)h=L(h,N[e]);return{c(){t=v("div"),a=v("input"),d=y(),f=v("span"),r=T(l[0]),$=y(),u=v("input"),m=y(),s=v("input"),c=y(),n=v("input"),b(a,g),b(f,k),b(u,C),b(s,_),b(n,h),x(t,"class","d-flex demo-navmanager-line")},m(e,w){P(e,t,w),i(t,a),"value"in g&&(a.value=g.value),a.autofocus&&a.focus(),i(t,d),i(t,f),i(f,r),i(t,$),i(t,u),u.autofocus&&u.focus(),i(t,m),i(t,s),"value"in _&&(s.value=_.value),s.autofocus&&s.focus(),i(t,c),i(t,n),"value"in h&&(n.value=h.value),n.autofocus&&n.focus(),o||(R=[p(l[1].call(null,a,l[2])),p(M.call(null,a,"form-control me-1")),p(l[1].call(null,f,l[2])),p(M.call(null,f,"form-control w-auto me-1")),p(l[1].call(null,u,l[2])),p(M.call(null,u,"form-check-input align-self-center me-1")),p(l[1].call(null,s,l[2])),p(M.call(null,s,"form-control me-1")),p(l[1].call(null,n,l[2])),p(M.call(null,n,"form-control me-1"))],o=!0)},p(e,[w]){b(a,g=q(A,[{type:"text"},w&1&&a.value!==e[0]&&{value:e[0]},{}])),"value"in g&&(a.value=g.value),w&1&&U(r,e[0],k.contenteditable),b(s,_=q(F,[{tabindex:"-1"},{type:"text"},w&1&&s.value!==e[0]&&{value:e[0]},{disabled:!0},{}])),"value"in _&&(s.value=_.value),b(n,h=q(N,[{tabindex:"-1"},{type:"text"},w&1&&n.value!==e[0]&&{value:e[0]},{}])),"value"in h&&(n.value=h.value)},i:H,o:H,d(e){e&&Q(t),o=!1,V(R)}}}function Y(l,t,a){const{directive:d,focusLeft:f,focusRight:r,focusFirst:$,focusLast:u,focusFirstLeft:m,focusFirstRight:s}=W(),c={keys:{ArrowLeft:f,ArrowRight:r,Home:$,End:u,"Meta+ArrowLeft":m,"Meta+ArrowRight":s}};let{text:n=""}=t;return l.$$set=o=>{"text"in o&&a(0,n=o.text)},[n,d,c]}class I extends J{constructor(t){super(),K(this,t,Y,X,O,{text:0})}}function Z(l){let t,a,d,f,r,$,u,m,s,c,n;return r=new I({props:{text:"Hello"}}),c=new I({props:{text:"שָׁלוֹם"}}),{c(){t=v("div"),a=v("div"),d=v("h2"),d.textContent="Left-to-right",f=y(),B(r.$$.fragment),$=y(),u=v("div"),m=v("h2"),m.textContent="Right-to-left",s=y(),B(c.$$.fragment),x(a,"dir","ltr"),x(a,"class","mt-3 pb-3"),x(u,"dir","rtl"),x(u,"class","mt-3 pb-3"),x(t,"class","demo-navmanager")},m(o,R){P(o,t,R),i(t,a),i(a,d),i(a,f),D(r,a,null),i(t,$),i(t,u),i(u,m),i(u,s),D(c,u,null),n=!0},p:H,i(o){n||(E(r.$$.fragment,o),E(c.$$.fragment,o),n=!0)},o(o){z(r.$$.fragment,o),z(c.$$.fragment,o),n=!1},d(o){o&&Q(t),G(r),G(c)}}}class le extends J{constructor(t){super(),K(this,t,null,Z,O,{})}}export{le as default};
