import{S as m,i as p,s as l,c,m as u,t as f,d as g,g as _,e as $,a as i,u as n,b as d,f as b}from"./AppCommon-Z65tc74F.js";/* empty css               */import{R as h}from"./Rating-CjZs4VWC.js";import"./rating-Cm90PBJi.js";import"./rating-CNQcp5pm-t-e6Yhi-.js";import"./rating-BR5wD7y2-EcD5KZNB.js";import"./directive-DCYlDznf-yhePTX7e.js";import"./writables-DoU_XYTX-Diupydw_.js";import"./extendWidget-BhYiMpAS.js";import"./Slot-I6WTrXyh.js";import"./config-D4eiDves.js";function C(r){let t;return{c(){t=$("span"),t.textContent="★",i(t,"slot","star"),i(t,"class","star"),n(t,"filled",r[0]===100),n(t,"bad",r[1]<3)},m(e,a){d(e,t,a)},p(e,a){a&1&&n(t,"filled",e[0]===100),a&2&&n(t,"bad",e[1]<3)},d(e){e&&b(t)}}}function R(r){let t,e;return t=new h({props:{className:"rating-custom",rating:7,ariaLabel:"custom rating",$$slots:{star:[C,({fill:a,index:s})=>({0:a,1:s}),({fill:a,index:s})=>(a?1:0)|(s?2:0)]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},m(a,s){u(t,a,s),e=!0},p(a,[s]){const o={};s&7&&(o.$$scope={dirty:s,ctx:a}),t.$set(o)},i(a){e||(f(t.$$.fragment,a),e=!0)},o(a){g(t.$$.fragment,a),e=!1},d(a){_(t,a)}}}class A extends m{constructor(t){super(),p(this,t,null,R,l,{})}}export{A as default};
