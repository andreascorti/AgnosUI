import{G as L,S as re,i as ie,s as ae,k as W,e as B,c as v,p as A,a as I,b as p,m as C,t as _,y as P,d,z as q,f as g,g as D,r as de,P as k,C as N,D as S,I as $,J as h,K as b,L as w,u as T,B as H,N as me,h as V,M as K,q as F,w as pe}from"./AppCommon-BopSFvtR.js";import{S as j,c as ge}from"./Slot-C5sD5DFI.js";import{e as $e}from"./extendWidget-BqB6mxFJ.js";import{d as he,c as M}from"./directive-CGjTRxRh-3NaagQeY.js";import{t as be,h as we}from"./writables-DoU_XYTX-5o4iMN-9.js";import{c as ve}from"./common-C2NQz6Nv-M6tfjdnr.js";const Ce={autoHide:!0,delay:5e3,slotHeader:void 0},De={autoHide:be,delay:we(0,1/0,{strict:!0})};function He(o){let t;const l=$e(ve,Ce,De)(o),s=L(()=>{clearTimeout(t),l.stores.autoHide$()&&(t=setTimeout(()=>l.api.close(),l.stores.delay$()))}),e=M(()=>({attributes:{role:"alert","aria-atomic":"true",class:L(()=>l.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),n=M(()=>({attributes:{type:"button","aria-label":L(()=>l.stores.ariaCloseButtonLabel$())},events:{click:l.api.close}}));return{...l,directives:{...l.directives,autoHideDirective:he(s),bodyDirective:e,closeButtonDirective:n}}}const ke=o=>({state:o&1,widget:o&2}),R=o=>({state:o[0],widget:o[1]}),Ne=o=>({state:o&1,widget:o&2}),E=o=>({state:o[0],widget:o[1]}),Se=o=>({state:o&1,widget:o&2}),O=o=>({state:o[0],widget:o[1]}),Te=o=>o&32,Be=o=>({}),Q=o=>({...o[5]}),Ae=o=>({state:o&1,widget:o&2}),U=o=>({state:o[0],widget:o[1]}),Ie=o=>({state:o&1,widget:o&2}),X=o=>({state:o[0],widget:o[1]}),Pe=o=>({state:o&1,widget:o&2}),Y=o=>({state:o[0],widget:o[1]}),qe=o=>o&32,Fe=o=>({}),Z=o=>({...o[5]});function y(o){let t,l,s,e;l=new j({props:{slotContent:o[0].slotHeader,props:o[2],$$slots:{slot:[ze,({props:u})=>({5:u}),({props:u})=>u?32:0],default:[je,({component:u,props:r})=>({6:u,5:r}),({component:u,props:r})=>(u?64:0)|(r?32:0)]},$$scope:{ctx:o}}});let n=o[0].dismissible&&x(o);return{c(){t=B("div"),v(l.$$.fragment),s=W(),n&&n.c(),I(t,"class","toast-header")},m(u,r){p(u,t,r),C(l,t,null),de(t,s),n&&n.m(t,null),e=!0},p(u,r){const f={};r&1&&(f.slotContent=u[0].slotHeader),r&4&&(f.props=u[2]),r&115&&(f.$$scope={dirty:r,ctx:u}),l.$set(f),u[0].dismissible?n||(n=x(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i(u){e||(_(l.$$.fragment,u),e=!0)},o(u){d(l.$$.fragment,u),e=!1},d(u){u&&g(t),D(l),n&&n.d()}}}function Le(o){let t;const l=o[3].default,s=$(l,o,o[4],U);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&19)&&h(s,l,e,e[4],t?w(l,e[4],n,Ae):b(e[4]),U)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function Ve(o){let t;const l=o[3].header,s=$(l,o,o[4],X);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&19)&&h(s,l,e,e[4],t?w(l,e[4],n,Ie):b(e[4]),X)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function We(o){let t;const l=o[3].structure,s=$(l,o,o[4],Y);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&19)&&h(s,l,e,e[4],t?w(l,e[4],n,Pe):b(e[4]),Y)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function je(o){let t,l,s;const e=[o[5]];var n=o[6];function u(r,f){let a={$$slots:{structure:[We,({state:i,widget:c})=>({0:i,1:c}),({state:i,widget:c})=>(i?1:0)|(c?2:0)],header:[Ve,({state:i,widget:c})=>({0:i,1:c}),({state:i,widget:c})=>(i?1:0)|(c?2:0)],default:[Le,({state:i,widget:c})=>({0:i,1:c}),({state:i,widget:c})=>(i?1:0)|(c?2:0)]},$$scope:{ctx:r}};for(let i=0;i<e.length;i+=1)a=H(a,e[i]);return f!==void 0&&f&32&&(a=H(a,N(e,[S(r[5])]))),{props:a}}return n&&(t=k(n,u(o))),{c(){t&&v(t.$$.fragment),l=A()},m(r,f){t&&C(t,r,f),p(r,l,f),s=!0},p(r,f){if(f&64&&n!==(n=r[6])){if(t){P();const a=t;d(a.$$.fragment,1,0,()=>{D(a,1)}),q()}n?(t=k(n,u(r,f)),v(t.$$.fragment),_(t.$$.fragment,1),C(t,l.parentNode,l)):t=null}else if(n){const a=f&32?N(e,[S(r[5])]):{};f&19&&(a.$$scope={dirty:f,ctx:r}),t.$set(a)}},i(r){s||(t&&_(t.$$.fragment,r),s=!0)},o(r){t&&d(t.$$.fragment,r),s=!1},d(r){r&&g(l),t&&D(t,r)}}}function ze(o){let t;const l=o[3].header,s=$(l,o,o[4],Z);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&48)&&h(s,l,e,e[4],qe(n)||!t?b(e[4]):w(l,e[4],n,Fe),Z)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function x(o){let t,l,s;return{c(){t=B("button"),I(t,"class","btn-close me-0 ms-auto")},m(e,n){p(e,t,n),l||(s=T(o[1].directives.closeButtonDirective(t)),l=!0)},d(e){e&&g(t),l=!1,s()}}}function Ge(o){let t;const l=o[3].default,s=$(l,o,o[4],R);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&19)&&h(s,l,e,e[4],t?w(l,e[4],n,ke):b(e[4]),R)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function Je(o){let t;const l=o[3].header,s=$(l,o,o[4],E);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&19)&&h(s,l,e,e[4],t?w(l,e[4],n,Ne):b(e[4]),E)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function Ke(o){let t;const l=o[3].structure,s=$(l,o,o[4],O);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&19)&&h(s,l,e,e[4],t?w(l,e[4],n,Se):b(e[4]),O)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function Me(o){let t,l,s;const e=[o[5]];var n=o[6];function u(r,f){let a={$$slots:{structure:[Ke,({state:i,widget:c})=>({0:i,1:c}),({state:i,widget:c})=>(i?1:0)|(c?2:0)],header:[Je,({state:i,widget:c})=>({0:i,1:c}),({state:i,widget:c})=>(i?1:0)|(c?2:0)],default:[Ge,({state:i,widget:c})=>({0:i,1:c}),({state:i,widget:c})=>(i?1:0)|(c?2:0)]},$$scope:{ctx:r}};for(let i=0;i<e.length;i+=1)a=H(a,e[i]);return f!==void 0&&f&32&&(a=H(a,N(e,[S(r[5])]))),{props:a}}return n&&(t=k(n,u(o))),{c(){t&&v(t.$$.fragment),l=A()},m(r,f){t&&C(t,r,f),p(r,l,f),s=!0},p(r,f){if(f&64&&n!==(n=r[6])){if(t){P();const a=t;d(a.$$.fragment,1,0,()=>{D(a,1)}),q()}n?(t=k(n,u(r,f)),v(t.$$.fragment),_(t.$$.fragment,1),C(t,l.parentNode,l)):t=null}else if(n){const a=f&32?N(e,[S(r[5])]):{};f&19&&(a.$$scope={dirty:f,ctx:r}),t.$set(a)}},i(r){s||(t&&_(t.$$.fragment,r),s=!0)},o(r){t&&d(t.$$.fragment,r),s=!1},d(r){r&&g(l),t&&D(t,r)}}}function Re(o){let t;const l=o[3].default,s=$(l,o,o[4],Q);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&48)&&h(s,l,e,e[4],Te(n)||!t?b(e[4]):w(l,e[4],n,Be),Q)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function ee(o){let t,l,s;return{c(){t=B("button"),I(t,"class","btn-close btn-close-white me-2 m-auto")},m(e,n){p(e,t,n),l||(s=T(o[1].directives.closeButtonDirective(t)),l=!0)},d(e){e&&g(t),l=!1,s()}}}function Ee(o){let t,l,s,e,n,u,r=o[0].slotHeader&&y(o);s=new j({props:{slotContent:o[0].slotDefault,props:o[2],$$slots:{slot:[Re,({props:a})=>({5:a}),({props:a})=>a?32:0],default:[Me,({component:a,props:i})=>({6:a,5:i}),({component:a,props:i})=>(a?64:0)|(i?32:0)]},$$scope:{ctx:o}}});let f=o[0].dismissible&&!o[0].slotHeader&&ee(o);return{c(){r&&r.c(),t=W(),l=B("div"),v(s.$$.fragment),e=W(),f&&f.c(),n=A(),I(l,"class","toast-body")},m(a,i){r&&r.m(a,i),p(a,t,i),p(a,l,i),C(s,l,null),p(a,e,i),f&&f.m(a,i),p(a,n,i),u=!0},p(a,[i]){a[0].slotHeader?r?(r.p(a,i),i&1&&_(r,1)):(r=y(a),r.c(),_(r,1),r.m(t.parentNode,t)):r&&(P(),d(r,1,1,()=>{r=null}),q());const c={};i&1&&(c.slotContent=a[0].slotDefault),i&4&&(c.props=a[2]),i&115&&(c.$$scope={dirty:i,ctx:a}),s.$set(c),a[0].dismissible&&!a[0].slotHeader?f||(f=ee(a),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null)},i(a){u||(_(r),_(s.$$.fragment,a),u=!0)},o(a){d(r),d(s.$$.fragment,a),u=!1},d(a){a&&(g(t),g(l),g(e),g(n)),r&&r.d(a),D(s),f&&f.d(a)}}}function Oe(o,t,l){let s,{$$slots:e={},$$scope:n}=t,{state:u}=t,{widget:r}=t;return o.$$set=f=>{"state"in f&&l(0,u=f.state),"widget"in f&&l(1,r=f.widget),"$$scope"in f&&l(4,n=f.$$scope)},o.$$.update=()=>{o.$$.dirty&3&&l(2,s={widget:r,state:u})},[u,r,s,e,n]}class Qe extends re{constructor(t){super(),ie(this,t,Oe,Ee,ae,{state:0,widget:1})}}const Ue=Qe,Xe=He,Ye=o=>({state:o&524288,widget:o&1024}),te=o=>({state:o[19],widget:o[10]}),Ze=o=>({state:o&524288,widget:o&1024}),se=o=>({state:o[19],widget:o[10]}),ye=o=>({state:o&524288,widget:o&1024}),oe=o=>({state:o[19],widget:o[10]}),xe=o=>o&131072,et=o=>({}),ne=o=>({...o[17]});function le(o){let t,l,s,e,n;return l=new j({props:{slotContent:o[3],props:o[1],$$slots:{slot:[lt,({props:u})=>({17:u}),({props:u})=>u?131072:0],default:[nt,({component:u,props:r})=>({18:u,17:r}),({component:u,props:r})=>(u?262144:0)|(r?131072:0)]},$$scope:{ctx:o}}}),{c(){t=B("div"),v(l.$$.fragment),I(t,"class","toast"),F(t,"toast-dismissible",o[0].dismissible),F(t,"d-flex",!o[0].slotHeader)},m(u,r){p(u,t,r),C(l,t,null),s=!0,e||(n=[T(o[6].call(null,t)),T(o[7].call(null,t)),T(o[8].call(null,t))],e=!0)},p(u,r){const f={};r&8&&(f.slotContent=u[3]),r&2&&(f.props=u[1]),r&409600&&(f.$$scope={dirty:r,ctx:u}),l.$set(f),(!s||r&1)&&F(t,"toast-dismissible",u[0].dismissible),(!s||r&1)&&F(t,"d-flex",!u[0].slotHeader)},i(u){s||(_(l.$$.fragment,u),s=!0)},o(u){d(l.$$.fragment,u),s=!1},d(u){u&&g(t),D(l),e=!1,pe(n)}}}function tt(o){let t;const l=o[13].default,s=$(l,o,o[14],te);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&541696)&&h(s,l,e,e[14],t?w(l,e[14],n,Ye):b(e[14]),te)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function st(o){let t;const l=o[13].header,s=$(l,o,o[14],se);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&541696)&&h(s,l,e,e[14],t?w(l,e[14],n,Ze):b(e[14]),se)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function ot(o){let t;const l=o[13].structure,s=$(l,o,o[14],oe);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&541696)&&h(s,l,e,e[14],t?w(l,e[14],n,ye):b(e[14]),oe)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function nt(o){let t,l,s;const e=[o[17]];var n=o[18];function u(r,f){let a={$$slots:{structure:[ot,({state:i,widget:c})=>({19:i,10:c}),({state:i,widget:c})=>(i?524288:0)|(c?1024:0)],header:[st,({state:i,widget:c})=>({19:i,10:c}),({state:i,widget:c})=>(i?524288:0)|(c?1024:0)],default:[tt,({state:i,widget:c})=>({19:i,10:c}),({state:i,widget:c})=>(i?524288:0)|(c?1024:0)]},$$scope:{ctx:r}};for(let i=0;i<e.length;i+=1)a=H(a,e[i]);return f!==void 0&&f&131072&&(a=H(a,N(e,[S(r[17])]))),{props:a}}return n&&(t=k(n,u(o))),{c(){t&&v(t.$$.fragment),l=A()},m(r,f){t&&C(t,r,f),p(r,l,f),s=!0},p(r,f){if(f&262144&&n!==(n=r[18])){if(t){P();const a=t;d(a.$$.fragment,1,0,()=>{D(a,1)}),q()}n?(t=k(n,u(r,f)),v(t.$$.fragment),_(t.$$.fragment,1),C(t,l.parentNode,l)):t=null}else if(n){const a=f&131072?N(e,[S(r[17])]):{};f&541696&&(a.$$scope={dirty:f,ctx:r}),t.$set(a)}},i(r){s||(t&&_(t.$$.fragment,r),s=!0)},o(r){t&&d(t.$$.fragment,r),s=!1},d(r){r&&g(l),t&&D(t,r)}}}function lt(o){let t;const l=o[13].structure,s=$(l,o,o[14],ne);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,n){s&&s.p&&(!t||n&147456)&&h(s,l,e,e[14],xe(n)||!t?b(e[14]):w(l,e[14],n,et),ne)},i(e){t||(_(s,e),t=!0)},o(e){d(s,e),t=!1},d(e){s&&s.d(e)}}}function rt(o){let t,l,s=!o[2]&&le(o);return{c(){s&&s.c(),t=A()},m(e,n){s&&s.m(e,n),p(e,t,n),l=!0},p(e,[n]){e[2]?s&&(P(),d(s,1,1,()=>{s=null}),q()):s?(s.p(e,n),n&4&&_(s,1)):(s=le(e),s.c(),_(s,1),s.m(t.parentNode,t))},i(e){l||(_(s),l=!0)},o(e){d(s),l=!1},d(e){e&&g(t),s&&s.d(e)}}}const it={slotStructure:Ue};function at(o,t,l){let s,e,n,u,{$$slots:r={},$$scope:f}=t;const a=me(r),i=ge({factory:Xe,widgetName:"toast",$$slots:a,$$props:t,defaultConfig:it,events:{onVisibleChange:m=>{l(11,c=m)}}});let{visible:c=void 0}=t;const fe=i.api,{stores:{slotStructure$:z,hidden$:G},directives:{transitionDirective:ue,autoHideDirective:ce,bodyDirective:_e},state$:J}=i;return V(o,z,m=>l(3,u=m)),V(o,G,m=>l(2,n=m)),V(o,J,m=>l(0,e=m)),o.$$set=m=>{l(15,t=H(H({},t),K(m))),"visible"in m&&l(11,c=m.visible),"$$scope"in m&&l(14,f=m.$$scope)},o.$$.update=()=>{i.patchChangedProps(t),o.$$.dirty&1&&l(1,s={widget:i,state:e})},t=K(t),[e,s,n,u,z,G,ue,ce,_e,J,i,c,fe,r,f]}class pt extends re{constructor(t){super(),ie(this,t,at,rt,ae,{visible:11,api:12})}get api(){return this.$$.ctx[12]}}export{pt as T};
