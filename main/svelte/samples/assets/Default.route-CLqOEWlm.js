import{S as C,i as g,s as w,c as Y,k as b,e as _,l as $,a as m,m as S,b as p,r as q,x as k,v as x,t as D,d as M,f as d,g as N,j,n as v,w as B}from"./AppCommon-Cd2V92GK.js";import{M as L,m as O,a as T}from"./Modal-DdUOYOE2.js";import"./Slot-BVTZyxpZ.js";import"./config-BlfmStok.js";import"./directive-ClyvktyQ-CTQhFZi6.js";import"./writables-DoU_XYTX-BaJ70FIg.js";import"./baseTransitions-B7ivztZi.js";import"./promise-CY2U8bTP-CotIyrP0.js";import"./fade-uOobJKgw-BKxGWZFn.js";import"./simpleClassTransition-CDZsOsnA.js";import"./cssTransitions-BfL_PeV9.js";import"./extendWidget-CyPrCsHY.js";function z(l){let e;return{c(){e=$("Do you want to save your changes?")},m(o,t){p(o,e,t)},d(o){o&&d(e)}}}function A(l){let e,o,t,n,a;return{c(){e=_("button"),e.textContent="Yes",o=b(),t=_("button"),t.textContent="No",m(e,"type","button"),m(e,"class","btn btn-outline-primary"),m(t,"type","button"),m(t,"class","btn btn-outline-danger")},m(i,r){p(i,e,r),p(i,o,r),p(i,t,r),n||(a=[k(e,"click",l[2]),k(t,"click",l[3])],n=!0)},p:v,d(i){i&&(d(e),d(o),d(t)),n=!1,B(a)}}}function E(l){let e,o,t,n,a,i,r,f,u,y={slotTitle:"Save changes",$$slots:{footer:[A],default:[z]},$$scope:{ctx:l}};return e=new L({props:y}),l[4](e),{c(){Y(e.$$.fragment),o=b(),t=_("button"),t.textContent="Launch demo modal",n=b(),a=_("div"),i=$(l[1]),m(t,"type","button"),m(t,"class","btn btn-primary"),m(a,"class","mt-3"),m(a,"data-testid","message")},m(s,c){S(e,s,c),p(s,o,c),p(s,t,c),p(s,n,c),p(s,a,c),q(a,i),r=!0,f||(u=k(t,"click",l[5]),f=!0)},p(s,[c]){const h={};c&65&&(h.$$scope={dirty:c,ctx:s}),e.$set(h),(!r||c&2)&&x(i,s[1])},i(s){r||(D(e.$$.fragment,s),r=!0)},o(s){M(e.$$.fragment,s),r=!1},d(s){s&&(d(o),d(t),d(n),d(a)),l[4](null),N(e,s),f=!1,u()}}}function F(l,e,o){let t,n="";const a=()=>t.api.close(!0),i=()=>t.api.close(!1);function r(u){j[u?"unshift":"push"](()=>{t=u,o(0,t)})}return[t,n,a,i,r,async()=>{o(1,n="");const u=await t.api.open();u===O?o(1,n="You clicked on the close button."):u===T?o(1,n="You clicked outside the modal."):o(1,n=`You answered the question with "${u?"Yes":"No"}".`)}]}class Z extends C{constructor(e){super(),g(this,e,F,E,w,{})}}export{Z as default};
