import{S as ee,i as te,s as le,V as P,k as o,f as k,l as Z,c as ne,q as d,W as se,g as a,v as m,X as Q,m as ie,C as j,t as oe,a as ae,h as c,Y as ce,d as pe,B as re,Z as ue,n as S,$ as me,e as fe}from"./AppCommon-Bd7c79Sv.js";import{A as de}from"./Alert-sXWuUgTY.js";import"./Slot--Urk653d.js";import"./config-CvPzCiDZ.js";import"./directive-DCYlDznf-2vjIImQS.js";import"./alert-Dlf-BV98-TkoPcQ34.js";import"./common-DRdsw5m8-BouWteBM.js";import"./baseTransitions-BG131UNY.js";import"./writables-DoU_XYTX-Cg6V7d5t.js";import"./promise-CY2U8bTP-cdt_EYoz.js";import"./extendWidget-BVNG4-cR.js";import"./fade-uOobJKgw-DSG-dOtg.js";import"./simpleClassTransition-BjwAfVBa.js";import"./cssTransitions-PfueFC3g.js";function R(t,l,p){const i=t.slice();return i[13]=l[p].value,i[14]=l[p].label,i}function U(t){let l,p=t[14]+"",i;return{c(){l=o("option"),i=Z(p),l.__value=t[13],ue(l,l.__value)},m(h,b){a(h,l,b),m(l,i)},p:S,d(h){h&&c(l)}}}function he(t){let l,p,i,h,b,w,s;return{c(){l=o("h4"),l.textContent="Well done!",p=k(),i=o("p"),i.textContent=`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.`,h=k(),b=o("hr"),w=k(),s=o("p"),s.textContent="Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",d(l,"class","alert-heading"),d(s,"class","mb-0")},m(r,f){a(r,l,f),a(r,p,f),a(r,i,f),a(r,h,f),a(r,b,f),a(r,w,f),a(r,s,f)},p:S,d(r){r&&(c(l),c(p),c(i),c(h),c(b),c(w),c(s))}}}function _e(t){let l,p,i,h,b,w,s,r,f,B,g,D,W,C,T,u,V,I,J,K,X,O,L,z,A,E,F,G,$,Y,H,M,q=P(t[5]),_=[];for(let e=0;e<q.length;e+=1)_[e]=U(R(t,q,e));let x={dismissible:t[3],animatedOnInit:t[1],animated:t[2],type:t[4],$$slots:{default:[he]},$$scope:{ctx:t}};return $=new de({props:x}),t[11]($),{c(){l=o("button"),l.textContent="Show alert",p=k(),i=o("br"),h=k(),b=o("br"),w=k(),s=o("div"),r=o("div"),f=o("label"),f.textContent="Alert type:",B=k(),g=o("select");for(let e=0;e<_.length;e+=1)_[e].c();D=k(),W=o("label"),C=o("input"),T=Z("Animated on init"),u=k(),V=o("label"),I=o("input"),J=Z("Animated"),K=k(),X=o("label"),O=o("input"),L=Z("Dismissible"),z=k(),A=o("br"),E=k(),F=o("br"),G=k(),ne($.$$.fragment),d(l,"class","btn btn-primary showAlert"),d(l,"type","button"),d(f,"class","align-self-center me-3"),d(f,"for","typeSelect"),d(g,"id","typeSelect"),d(g,"class","form-select w-auto"),t[4]===void 0&&se(()=>t[7].call(g)),d(r,"class","d-flex form-group"),d(C,"class","form-check-input me-1"),d(C,"type","checkbox"),d(I,"class","form-check-input me-1"),d(I,"type","checkbox"),d(O,"class","dismissibleInput form-check-input me-1"),d(O,"type","checkbox"),d(s,"class","d-flex flex-column")},m(e,n){a(e,l,n),a(e,p,n),a(e,i,n),a(e,h,n),a(e,b,n),a(e,w,n),a(e,s,n),m(s,r),m(r,f),m(r,B),m(r,g);for(let v=0;v<_.length;v+=1)_[v]&&_[v].m(g,null);Q(g,t[4],!0),m(s,D),m(s,W),m(W,C),C.checked=t[1],m(W,T),m(s,u),m(s,V),m(V,I),I.checked=t[2],m(V,J),m(s,K),m(s,X),m(X,O),O.checked=t[3],m(X,L),a(e,z,n),a(e,A,n),a(e,E,n),a(e,F,n),a(e,G,n),ie($,e,n),Y=!0,H||(M=[j(l,"click",t[6]),j(g,"change",t[7]),j(C,"change",t[8]),j(I,"change",t[9]),j(O,"change",t[10])],H=!0)},p(e,[n]){if(n&32){q=P(e[5]);let y;for(y=0;y<q.length;y+=1){const N=R(e,q,y);_[y]?_[y].p(N,n):(_[y]=U(N),_[y].c(),_[y].m(g,null))}for(;y<_.length;y+=1)_[y].d(1);_.length=q.length}n&48&&Q(g,e[4]),n&2&&(C.checked=e[1]),n&4&&(I.checked=e[2]),n&8&&(O.checked=e[3]);const v={};n&8&&(v.dismissible=e[3]),n&2&&(v.animatedOnInit=e[1]),n&4&&(v.animated=e[2]),n&16&&(v.type=e[4]),n&131072&&(v.$$scope={dirty:n,ctx:e}),$.$set(v)},i(e){Y||(oe($.$$.fragment,e),Y=!0)},o(e){ae($.$$.fragment,e),Y=!1},d(e){e&&(c(l),c(p),c(i),c(h),c(b),c(w),c(s),c(z),c(A),c(E),c(F),c(G)),ce(_,e),t[11](null),pe($,e),H=!1,re(M)}}}function be(t,l,p){let i,[h,b,w]=[!0,!0,!0],s="success";var r=(u=>(u.success="success",u.info="info",u.warning="warning",u.danger="danger",u.primary="primary",u.secondary="secondary",u.light="light",u.dark="dark",u))(r||{});const f=Object.entries(r).map(u=>({value:u[1],label:u[0]})),B=()=>i.api.open();function g(){s=me(this),p(4,s),p(5,f)}function D(){h=this.checked,p(1,h)}function W(){b=this.checked,p(2,b)}function C(){w=this.checked,p(3,w)}function T(u){fe[u?"unshift":"push"](()=>{i=u,p(0,i)})}return[i,h,b,w,s,f,B,g,D,W,C,T]}class Te extends ee{constructor(l){super(),te(this,l,be,_e,le,{})}}export{Te as default};
