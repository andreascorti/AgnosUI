import{S as R,i as T,s as U,e as V,c as h,k as y,p as L,a as d,b as g,m as b,t as _,d as m,f as $,g as w,P as A,y as W,z as j,C as D,D as B,I as v,J as k,K as S,L as N,x,B as C,N as tt,h as P,M as I,u as et}from"./AppCommon-DYyriHmo.js";import{S as X}from"./Slot-BIi2RPK5.js";import{c as st}from"./config-BmStqdNU.js";import{e as lt,c as nt}from"./extendWidget-BS606DAz.js";import{b as ot}from"./writables-DoU_XYTX-DitVUiGE.js";const rt={type:"primary"},at={type:ot},it=lt(nt,rt,at),ut=l=>({state:l&1,widget:l&2}),J=l=>({state:l[0],widget:l[1]}),ft=l=>({state:l&1,widget:l&2}),K=l=>({state:l[0],widget:l[1]}),ct=l=>l&64,_t=l=>({}),M=l=>({...l[6]});function mt(l){let t;const o=l[3].default,s=v(o,l,l[5],J);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&35)&&k(s,o,e,e[5],t?N(o,e[5],r,ut):S(e[5]),J)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function pt(l){let t;const o=l[3].structure,s=v(o,l,l[5],K);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&35)&&k(s,o,e,e[5],t?N(o,e[5],r,ft):S(e[5]),K)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function dt(l){let t,o,s;const e=[l[6]];var r=l[7];function u(n,a){let i={$$slots:{structure:[pt,({state:f,widget:c})=>({0:f,1:c}),({state:f,widget:c})=>(f?1:0)|(c?2:0)],default:[mt,({state:f,widget:c})=>({0:f,1:c}),({state:f,widget:c})=>(f?1:0)|(c?2:0)]},$$scope:{ctx:n}};for(let f=0;f<e.length;f+=1)i=C(i,e[f]);return a!==void 0&&a&64&&(i=C(i,D(e,[B(n[6])]))),{props:i}}return r&&(t=A(r,u(l))),{c(){t&&h(t.$$.fragment),o=L()},m(n,a){t&&b(t,n,a),g(n,o,a),s=!0},p(n,a){if(a&128&&r!==(r=n[7])){if(t){W();const i=t;m(i.$$.fragment,1,0,()=>{w(i,1)}),j()}r?(t=A(r,u(n,a)),h(t.$$.fragment),_(t.$$.fragment,1),b(t,o.parentNode,o)):t=null}else if(r){const i=a&64?D(e,[B(n[6])]):{};a&35&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)}},i(n){s||(t&&_(t.$$.fragment,n),s=!0)},o(n){t&&m(t.$$.fragment,n),s=!1},d(n){n&&$(o),t&&w(t,n)}}}function gt(l){let t;const o=l[3].default,s=v(o,l,l[5],M);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&96)&&k(s,o,e,e[5],ct(r)||!t?S(e[5]):N(o,e[5],r,_t),M)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function E(l){let t,o,s,e;return{c(){t=V("button"),d(t,"type","button"),d(t,"class","btn-close"),d(t,"aria-label",o=l[0].ariaCloseButtonLabel)},m(r,u){g(r,t,u),s||(e=x(t,"click",l[4]),s=!0)},p(r,u){u&1&&o!==(o=r[0].ariaCloseButtonLabel)&&d(t,"aria-label",o)},d(r){r&&$(t),s=!1,e()}}}function $t(l){let t,o,s,e,r;o=new X({props:{slotContent:l[0].slotDefault,props:l[2],$$slots:{slot:[gt,({props:n})=>({6:n}),({props:n})=>n?64:0],default:[dt,({component:n,props:a})=>({7:n,6:a}),({component:n,props:a})=>(n?128:0)|(a?64:0)]},$$scope:{ctx:l}}});let u=l[0].dismissible&&E(l);return{c(){t=V("div"),h(o.$$.fragment),s=y(),u&&u.c(),e=L(),d(t,"class","alert-body")},m(n,a){g(n,t,a),b(o,t,null),g(n,s,a),u&&u.m(n,a),g(n,e,a),r=!0},p(n,[a]){const i={};a&1&&(i.slotContent=n[0].slotDefault),a&4&&(i.props=n[2]),a&227&&(i.$$scope={dirty:a,ctx:n}),o.$set(i),n[0].dismissible?u?u.p(n,a):(u=E(n),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null)},i(n){r||(_(o.$$.fragment,n),r=!0)},o(n){m(o.$$.fragment,n),r=!1},d(n){n&&($(t),$(s),$(e)),w(o),u&&u.d(n)}}}function ht(l,t,o){let s,{$$slots:e={},$$scope:r}=t,{state:u}=t,{widget:n}=t;const a=()=>n.api.close();return l.$$set=i=>{"state"in i&&o(0,u=i.state),"widget"in i&&o(1,n=i.widget),"$$scope"in i&&o(5,r=i.$$scope)},l.$$.update=()=>{l.$$.dirty&3&&o(2,s={widget:n,state:u})},[u,n,s,e,a,r]}class bt extends R{constructor(t){super(),T(this,t,ht,$t,U,{state:0,widget:1})}}const wt=bt,Ct=it,vt=l=>({state:l&131072,widget:l&256}),G=l=>({state:l[17],widget:l[8]}),kt=l=>({state:l&131072,widget:l&256}),H=l=>({state:l[17],widget:l[8]}),St=l=>l&32768,Nt=l=>({}),O=l=>({...l[15]});function Q(l){let t,o,s,e,r,u;return o=new X({props:{slotContent:l[3],props:l[1],$$slots:{slot:[Lt,({props:n})=>({15:n}),({props:n})=>n?32768:0],default:[Bt,({component:n,props:a})=>({16:n,15:a}),({component:n,props:a})=>(n?65536:0)|(a?32768:0)]},$$scope:{ctx:l}}}),{c(){t=V("div"),h(o.$$.fragment),d(t,"class",s="au-alert alert alert-"+l[0].type+" "+l[0].className+" "+(l[0].dismissible?"alert-dismissible":"")),d(t,"role","alert")},m(n,a){g(n,t,a),b(o,t,null),e=!0,r||(u=et(l[6].call(null,t)),r=!0)},p(n,a){const i={};a&8&&(i.slotContent=n[3]),a&2&&(i.props=n[1]),a&102400&&(i.$$scope={dirty:a,ctx:n}),o.$set(i),(!e||a&1&&s!==(s="au-alert alert alert-"+n[0].type+" "+n[0].className+" "+(n[0].dismissible?"alert-dismissible":"")))&&d(t,"class",s)},i(n){e||(_(o.$$.fragment,n),e=!0)},o(n){m(o.$$.fragment,n),e=!1},d(n){n&&$(t),w(o),r=!1,u()}}}function At(l){let t;const o=l[11].default,s=v(o,l,l[12],G);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&135424)&&k(s,o,e,e[12],t?N(o,e[12],r,vt):S(e[12]),G)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function Dt(l){let t;const o=l[11].structure,s=v(o,l,l[12],H);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&135424)&&k(s,o,e,e[12],t?N(o,e[12],r,kt):S(e[12]),H)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function Bt(l){let t,o,s;const e=[l[15]];var r=l[16];function u(n,a){let i={$$slots:{structure:[Dt,({state:f,widget:c})=>({17:f,8:c}),({state:f,widget:c})=>(f?131072:0)|(c?256:0)],default:[At,({state:f,widget:c})=>({17:f,8:c}),({state:f,widget:c})=>(f?131072:0)|(c?256:0)]},$$scope:{ctx:n}};for(let f=0;f<e.length;f+=1)i=C(i,e[f]);return a!==void 0&&a&32768&&(i=C(i,D(e,[B(n[15])]))),{props:i}}return r&&(t=A(r,u(l))),{c(){t&&h(t.$$.fragment),o=L()},m(n,a){t&&b(t,n,a),g(n,o,a),s=!0},p(n,a){if(a&65536&&r!==(r=n[16])){if(t){W();const i=t;m(i.$$.fragment,1,0,()=>{w(i,1)}),j()}r?(t=A(r,u(n,a)),h(t.$$.fragment),_(t.$$.fragment,1),b(t,o.parentNode,o)):t=null}else if(r){const i=a&32768?D(e,[B(n[15])]):{};a&135424&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)}},i(n){s||(t&&_(t.$$.fragment,n),s=!0)},o(n){t&&m(t.$$.fragment,n),s=!1},d(n){n&&$(o),t&&w(t,n)}}}function Lt(l){let t;const o=l[11].structure,s=v(o,l,l[12],O);return{c(){s&&s.c()},m(e,r){s&&s.m(e,r),t=!0},p(e,r){s&&s.p&&(!t||r&36864)&&k(s,o,e,e[12],St(r)||!t?S(e[12]):N(o,e[12],r,Nt),O)},i(e){t||(_(s,e),t=!0)},o(e){m(s,e),t=!1},d(e){s&&s.d(e)}}}function Pt(l){let t,o,s=!l[2]&&Q(l);return{c(){s&&s.c(),t=L()},m(e,r){s&&s.m(e,r),g(e,t,r),o=!0},p(e,[r]){e[2]?s&&(W(),m(s,1,1,()=>{s=null}),j()):s?(s.p(e,r),r&4&&_(s,1)):(s=Q(e),s.c(),_(s,1),s.m(t.parentNode,t))},i(e){o||(_(s),o=!0)},o(e){m(s),o=!1},d(e){e&&$(t),s&&s.d(e)}}}const Vt={slotStructure:wt};function Wt(l,t,o){let s,e,r,u,{$$slots:n={},$$scope:a}=t;const i=tt(n),f=st({factory:Ct,widgetName:"alert",$$slots:i,$$props:t,defaultConfig:Vt,events:{onVisibleChange:p=>{o(9,c=p)}}});let{visible:c=void 0}=t;const Y=f.api,{stores:{slotStructure$:q,hidden$:z},directives:{transitionDirective:Z},state$:F}=f;return P(l,q,p=>o(3,u=p)),P(l,z,p=>o(2,r=p)),P(l,F,p=>o(0,e=p)),l.$$set=p=>{o(13,t=C(C({},t),I(p))),"visible"in p&&o(9,c=p.visible),"$$scope"in p&&o(12,a=p.$$scope)},l.$$.update=()=>{f.patchChangedProps(t),l.$$.dirty&1&&o(1,s={widget:f,state:e})},t=I(t),[e,s,r,u,q,z,Z,F,f,c,Y,n,a]}class Jt extends R{constructor(t){super(),T(this,t,Wt,Pt,U,{visible:9,api:10})}get api(){return this.$$.ctx[10]}}export{Jt as A};
