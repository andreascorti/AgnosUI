import{S as g,i as _,s as y,c as i,m as f,t as $,d as m,g as u,l as x,b as l,f as p,k as A}from"./AppCommon-FSNPofIP.js";import{A as b}from"./Alert-fzLqEFoA.js";import{a as S}from"./config-vIMowRk2.js";import"./Slot-BolLd1eq.js";import"./extendWidget-DCs5YwEd.js";import"./baseTransitions-YYK7JuU8.js";import"./writables-DoU_XYTX-mXl2i9yy.js";import"./stores-_HvO3ll3.js";import"./func-DR0n-ShK-fOTgS_tI.js";import"./promise-CY2U8bTP-BFEsTfzZ.js";import"./directive-BuhXJyzg.js";import"./fade-7-Etejps-BKFt81NK.js";import"./simpleClassTransition-DT5TtZ30.js";import"./cssTransitions-nfaHZXzr.js";import"./dom-B9Oy3i4s-Hs1W5kAC.js";function h(n){let t;return{c(){t=x("Alert not dismissible and of type secondary, respecting the parent config")},m(r,e){l(r,t,e)},d(r){r&&p(t)}}}function v(n){let t,r;return t=new b({props:{$$slots:{default:[h]},$$scope:{ctx:n}}}),{c(){i(t.$$.fragment)},m(e,o){f(t,e,o),r=!0},p(e,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){u(t,e)}}}class C extends g{constructor(t){super(),_(this,t,null,v,y,{})}}function D(n){let t;return{c(){t=x("Alert not dismissible and of type success, type overriden by child config")},m(r,e){l(r,t,e)},d(r){r&&p(t)}}}function k(n){let t,r;return t=new b({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),{c(){i(t.$$.fragment)},m(e,o){f(t,e,o),r=!0},p(e,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){u(t,e)}}}function q(n){return S().set({alert:{type:"success"}}),[]}class W extends g{constructor(t){super(),_(this,t,q,k,y,{})}}function j(n){let t;return{c(){t=x("Alert not dismissible and of type secondary")},m(r,e){l(r,t,e)},d(r){r&&p(t)}}}function z(n){let t,r,e,o,a,d;return t=new b({props:{$$slots:{default:[j]},$$scope:{ctx:n}}}),e=new C({}),a=new W({}),{c(){i(t.$$.fragment),r=A(),i(e.$$.fragment),o=A(),i(a.$$.fragment)},m(s,c){f(t,s,c),l(s,r,c),f(e,s,c),l(s,o,c),f(a,s,c),d=!0},p(s,[c]){const w={};c&1&&(w.$$scope={dirty:c,ctx:s}),t.$set(w)},i(s){d||($(t.$$.fragment,s),$(e.$$.fragment,s),$(a.$$.fragment,s),d=!0)},o(s){m(t.$$.fragment,s),m(e.$$.fragment,s),m(a.$$.fragment,s),d=!1},d(s){s&&(p(r),p(o)),u(t,s),u(e,s),u(a,s)}}}function B(n){return S().set({alert:{dismissible:!1,type:"secondary"}}),[]}class U extends g{constructor(t){super(),_(this,t,B,z,y,{})}}export{U as default};
