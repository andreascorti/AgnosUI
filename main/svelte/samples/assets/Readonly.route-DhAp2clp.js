import{S as u,i as g,s as d,c as _,m as h,t as $,d as w,g as v,e as i,k as b,a as l,a1 as c,q as m,b as y,r as p,f as R}from"./AppCommon-Cd2V92GK.js";import{R as x}from"./Rating-tEu3CWZF.js";import"./Slot-BVTZyxpZ.js";import"./config-BlfmStok.js";import"./directive-ClyvktyQ-CTQhFZi6.js";import"./rating-CcsobsVp.js";import"./rating-breb--sj-DCOq7mgR.js";import"./writables-DoU_XYTX-BaJ70FIg.js";const f=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`;function C(r){let t,s,a,e;return{c(){t=i("span"),s=i("span"),a=b(),e=i("span"),l(s,"class","half"),c(s,"width",r[1]+"%"),l(t,"slot","star"),l(t,"class","star"),m(t,"full",r[1]===100)},m(n,o){y(n,t,o),p(t,s),s.innerHTML=f,p(t,a),p(t,e),e.innerHTML=f},p(n,o){o&2&&c(s,"width",n[1]+"%"),o&2&&m(t,"full",n[1]===100)},d(n){n&&R(t)}}}function L(r){let t,s;return t=new x({props:{className:"rating-readonly",rating:3.64,readonly:!0,maxRating:5,ariaLabel:"readonly rating",$$slots:{star:[C,({index:a,fill:e})=>({0:a,1:e}),({index:a,fill:e})=>(a?1:0)|(e?2:0)]},$$scope:{ctx:r}}}),{c(){_(t.$$.fragment)},m(a,e){h(t,a,e),s=!0},p(a,[e]){const n={};e&6&&(n.$$scope={dirty:e,ctx:a}),t.$set(n)},i(a){s||($(t.$$.fragment,a),s=!0)},o(a){w(t.$$.fragment,a),s=!1},d(a){v(t,a)}}}class N extends u{constructor(t){super(),g(this,t,null,L,d,{})}}export{N as default};
