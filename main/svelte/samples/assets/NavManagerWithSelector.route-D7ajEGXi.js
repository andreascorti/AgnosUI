import{S as R,i as S,s as k,e as m,k as h,l as N,a as e,b as C,r,u as q,v as H,n as b,f as F,c as x,m as w,t as L,d as M,g as y}from"./AppCommon-Cd2V92GK.js";import{c as W}from"./navManager-C3PPKSfv.js";import"./directive-ClyvktyQ-CTQhFZi6.js";function E(u){let t,n,d,p,i,g,l,v,o,c,s,a,_;return{c(){t=m("div"),n=m("input"),d=h(),p=m("span"),i=N(u[0]),g=h(),l=m("input"),v=h(),o=m("input"),c=h(),s=m("input"),e(n,"type","text"),n.value=u[0],e(n,"class","form-control me-1"),e(p,"tabindex","-1"),e(p,"class","form-control w-auto me-1"),e(l,"tabindex","-1"),e(l,"type","checkbox"),e(l,"class","form-check-input align-self-center me-1"),e(o,"tabindex","-1"),e(o,"type","text"),o.value=u[0],o.disabled=!0,e(o,"class","form-control me-1"),e(s,"tabindex","-1"),e(s,"type","text"),s.value=u[0],e(s,"class","form-control me-1"),e(t,"class","d-flex demo-navmanager-line")},m(f,$){C(f,t,$),r(t,n),r(t,d),r(t,p),r(p,i),r(t,g),r(t,l),r(t,v),r(t,o),r(t,c),r(t,s),a||(_=q(u[1].call(null,t,u[2])),a=!0)},p(f,[$]){$&1&&n.value!==f[0]&&(n.value=f[0]),$&1&&H(i,f[0]),$&1&&o.value!==f[0]&&(o.value=f[0]),$&1&&s.value!==f[0]&&(s.value=f[0])},i:b,o:b,d(f){f&&F(t),a=!1,_()}}}function j(u,t,n){const{directive:d,focusLeft:p,focusRight:i,focusFirst:g,focusLast:l,focusFirstLeft:v,focusFirstRight:o}=W(),c={keys:{ArrowLeft:p,ArrowRight:i,Home:g,End:l,"Meta+ArrowLeft":v,"Meta+ArrowRight":o},selector:a=>a.querySelectorAll("input,span")};let{text:s=""}=t;return u.$$set=a=>{"text"in a&&n(0,s=a.text)},[s,d,c]}class A extends R{constructor(t){super(),S(this,t,j,E,k,{text:0})}}function z(u){let t,n,d,p,i,g,l,v,o,c,s;return i=new A({props:{text:"Hello"}}),c=new A({props:{text:"שָׁלוֹם"}}),{c(){t=m("div"),n=m("div"),d=m("h2"),d.textContent="Left-to-right",p=h(),x(i.$$.fragment),g=h(),l=m("div"),v=m("h2"),v.textContent="Right-to-left",o=h(),x(c.$$.fragment),e(n,"dir","ltr"),e(n,"class","mt-3 pb-3"),e(l,"dir","rtl"),e(l,"class","mt-3 pb-3"),e(t,"class","demo-navmanager")},m(a,_){C(a,t,_),r(t,n),r(n,d),r(n,p),w(i,n,null),r(t,g),r(t,l),r(l,v),r(l,o),w(c,l,null),s=!0},p:b,i(a){s||(L(i.$$.fragment,a),L(c.$$.fragment,a),s=!0)},o(a){M(i.$$.fragment,a),M(c.$$.fragment,a),s=!1},d(a){a&&F(t),y(i),y(c)}}}class I extends R{constructor(t){super(),S(this,t,null,z,k,{})}}export{I as default};
