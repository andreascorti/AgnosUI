import{S as m,i as p,s as l,c,m as f,t as u,d as g,g as _,e as $,a as i,q as n,b as d,f as b}from"./AppCommon-FSNPofIP.js";/* empty css               */import{R as h}from"./Rating-DmSH3yGB.js";import"./config-vIMowRk2.js";import"./func-DR0n-ShK-fOTgS_tI.js";import"./stores-_HvO3ll3.js";import"./Slot-BolLd1eq.js";import"./rating-EMAaS0bK.js";import"./rating--0-uTXnS-DSvN5IWw.js";import"./writables-DoU_XYTX-mXl2i9yy.js";function C(r){let t;return{c(){t=$("span"),t.textContent="★",i(t,"slot","star"),i(t,"class","star"),n(t,"filled",r[0]===100),n(t,"bad",r[1]<3)},m(e,a){d(e,t,a)},p(e,a){a&1&&n(t,"filled",e[0]===100),a&2&&n(t,"bad",e[1]<3)},d(e){e&&b(t)}}}function q(r){let t,e;return t=new h({props:{className:"rating-custom",rating:7,ariaLabel:"custom rating",$$slots:{star:[C,({fill:a,index:s})=>({0:a,1:s}),({fill:a,index:s})=>(a?1:0)|(s?2:0)]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},m(a,s){f(t,a,s),e=!0},p(a,[s]){const o={};s&7&&(o.$$scope={dirty:s,ctx:a}),t.$set(o)},i(a){e||(u(t.$$.fragment,a),e=!0)},o(a){g(t.$$.fragment,a),e=!1},d(a){_(t,a)}}}class z extends m{constructor(t){super(),p(this,t,null,q,l,{})}}export{z as default};
