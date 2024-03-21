import{S as E,i as F,s as G,e as $,ag as O,a as t,a1 as C,b as h,r as H,u as D,n as j,f as c,x as I,j as y,a2 as N,k as S,c as T,m as V,a3 as q,t as A,d as B,g as M}from"./AppCommon-B0o63QXa.js";import{S as Z}from"./Slider-CIj6Tc93.js";/* empty css               */import"./Slot-JnYlUU0G.js";import"./config-BYJKBt5K.js";import"./stores-DWGGzlfa.js";import"./directive-Bt_Lk6nS.js";import"./writables-DoU_XYTX-BIu_hqgK.js";import"./resizeObserver-BqR_3eeF.js";function J(l){let e,o,i,r,u,_,d,v,s,m,b,p,w,g,k;return{c(){e=$("button"),o=O("svg"),i=O("path"),t(i,"stroke-linecap","round"),t(i,"stroke-linejoin","round"),t(i,"d","M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"fill","var(--bs-slider-handle-color)"),t(o,"viewBox","0 0 24 24"),t(o,"stroke-width","1.5"),t(o,"stroke","currentColor"),t(e,"class",r=`au-custom-slider-handle ${l[1].vertical?"au-custom-slider-handle-vertical":"au-custom-slider-handle-horizontal"}`),t(e,"role","slider"),t(e,"aria-valuemin",u=l[1].min),t(e,"aria-valuemax",_=l[1].max),t(e,"aria-readonly",d=l[1].readonly?!0:null),t(e,"aria-disabled",v=l[1].disabled?!0:null),t(e,"aria-valuenow",s=l[0].value),t(e,"aria-valuetext",m=l[0].ariaValueText),t(e,"aria-label",b=l[0].ariaLabel),t(e,"aria-orientation",p=l[1].vertical?"vertical":null),e.disabled=w=l[1].disabled?!0:null,C(e,"left",`${l[1].handleDisplayOptions[l[0].id].left}%`),C(e,"top",`${l[1].handleDisplayOptions[l[0].id].top}%`)},m(n,a){h(n,e,a),H(e,o),H(o,i),g||(k=[D(e,"keydown",l[3]),D(e,"mousedown",l[4]),D(e,"touchstart",l[5])],g=!0)},p(n,[a]){a&2&&r!==(r=`au-custom-slider-handle ${n[1].vertical?"au-custom-slider-handle-vertical":"au-custom-slider-handle-horizontal"}`)&&t(e,"class",r),a&2&&u!==(u=n[1].min)&&t(e,"aria-valuemin",u),a&2&&_!==(_=n[1].max)&&t(e,"aria-valuemax",_),a&2&&d!==(d=n[1].readonly?!0:null)&&t(e,"aria-readonly",d),a&2&&v!==(v=n[1].disabled?!0:null)&&t(e,"aria-disabled",v),a&1&&s!==(s=n[0].value)&&t(e,"aria-valuenow",s),a&1&&m!==(m=n[0].ariaValueText)&&t(e,"aria-valuetext",m),a&1&&b!==(b=n[0].ariaLabel)&&t(e,"aria-label",b),a&2&&p!==(p=n[1].vertical?"vertical":null)&&t(e,"aria-orientation",p),a&2&&w!==(w=n[1].disabled?!0:null)&&(e.disabled=w),a&3&&C(e,"left",`${n[1].handleDisplayOptions[n[0].id].left}%`),a&3&&C(e,"top",`${n[1].handleDisplayOptions[n[0].id].top}%`)},i:j,o:j,d(n){n&&c(e),g=!1,I(k)}}}function K(l,e,o){let{item:i}=e,{state:r}=e,{widget:u}=e;const _=s=>u.actions.keydown(s,i.id),d=s=>u.actions.mouseDown(s,i.id),v=s=>u.actions.touchStart(s,i.id);return l.$$set=s=>{"item"in s&&o(0,i=s.item),"state"in s&&o(1,r=s.state),"widget"in s&&o(2,u=s.widget)},[i,r,u,_,d,v]}class P extends E{constructor(e){super(),F(this,e,K,J,G,{item:0,state:1,widget:2})}}function Q(l){let e,o,i,r,u,_,d,v,s,m,b,p;function w(a){l[2](a)}let g={min:0,max:100,stepSize:1,slotLabel:R,className:"au-custom-slider-container"};l[0]!==void 0&&(g.values=l[0]),i=new Z({props:g}),y.push(()=>N(i,"values",w));function k(a){l[3](a)}let n={min:0,max:100,stepSize:1,slotHandle:P,className:"au-custom-slider-container"};return l[1]!==void 0&&(n.values=l[1]),m=new Z({props:n}),y.push(()=>N(m,"values",k)),{c(){e=$("h2"),e.textContent="Slider with custom labels",o=S(),T(i.$$.fragment),u=S(),_=$("hr"),d=S(),v=$("h2"),v.textContent="Slider with custom handle",s=S(),T(m.$$.fragment)},m(a,f){h(a,e,f),h(a,o,f),V(i,a,f),h(a,u,f),h(a,_,f),h(a,d,f),h(a,v,f),h(a,s,f),V(m,a,f),p=!0},p(a,[f]){const L={};!r&&f&1&&(r=!0,L.values=a[0],q(()=>r=!1)),i.$set(L);const z={};!b&&f&2&&(b=!0,z.values=a[1],q(()=>b=!1)),m.$set(z)},i(a){p||(A(i.$$.fragment,a),A(m.$$.fragment,a),p=!0)},o(a){B(i.$$.fragment,a),B(m.$$.fragment,a),p=!1},d(a){a&&(c(e),c(o),c(u),c(_),c(d),c(v),c(s)),M(i,a),M(m,a)}}}const R=({value:l})=>""+l+"%";function U(l,e,o){let i=[70],r=[50];function u(d){i=d,o(0,i)}function _(d){r=d,o(1,r)}return[i,r,u,_]}class se extends E{constructor(e){super(),F(this,e,U,Q,G,{})}}export{se as default};
