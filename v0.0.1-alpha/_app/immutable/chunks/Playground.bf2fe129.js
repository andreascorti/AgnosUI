import{s as ue,i as K,r as ce,n as W,h as Pe,j as Le,e as re}from"./scheduler.2ed3e821.js";import{S as fe,i as he,e as me,a as L,p as te,t as N,b as le,d as O,f as d,g as y,s as z,r as A,h as k,j as D,c as B,u as R,k as _,A as Y,y as C,v as F,C as q,w as J,x as ae,m as X,n as Z,o as $,z as Ve}from"./index.6f5125a4.js";import{e as ne}from"./each.c25865bc.js";import Ie from"./Code.d3030d6d.js";import{S as Oe}from"./Sample.b2add3c3.js";import{S as de}from"./Svg.4ea3afa0.js";import{r as _e,c as ee,w as Se}from"./index.es.5c333286.js";import{n as Ne,t as He}from"./app.8c876633.js";const pe=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>`;function ze(l){let e,t,a,s,o,n,f,u,c,h,g;return f=new de({props:{className:"icon-20",svg:pe}}),{c(){e=y("td"),t=y("input"),s=z(),o=y("td"),n=y("button"),A(f.$$.fragment),this.h()},l(r){e=k(r,"TD",{class:!0});var i=D(e);t=k(i,"INPUT",{class:!0,placeholder:!0,"aria-label":!0}),i.forEach(d),s=B(r),o=k(r,"TD",{class:!0});var E=D(o);n=k(E,"BUTTON",{class:!0,title:!0});var p=D(n);R(f.$$.fragment,p),p.forEach(d),E.forEach(d),this.h()},h(){_(t,"class","string svelte-3wllmm"),_(t,"placeholder",l[2]),t.value=a=l[1].value,_(t,"aria-label",l[3]),Y(t,"empty",l[1].isEmpty),_(e,"class","value svelte-3wllmm"),_(n,"class","btn btn-link icon svelte-3wllmm"),_(n,"title","Clear value"),n.disabled=u=l[1].isEmpty,_(o,"class","checkbox svelte-3wllmm")},m(r,i){L(r,e,i),C(e,t),L(r,s,i),L(r,o,i),C(o,n),F(f,n,null),c=!0,h||(g=[q(t,"input",function(){K(l[1].onChange)&&l[1].onChange.apply(this,arguments)}),q(n,"click",function(){K(l[1].clear)&&l[1].clear.apply(this,arguments)})],h=!0)},p(r,i){l=r,(!c||i&4)&&_(t,"placeholder",l[2]),(!c||i&2&&a!==(a=l[1].value)&&t.value!==a)&&(t.value=a),(!c||i&8)&&_(t,"aria-label",l[3]),(!c||i&2)&&Y(t,"empty",l[1].isEmpty),(!c||i&2&&u!==(u=l[1].isEmpty))&&(n.disabled=u)},i(r){c||(O(f.$$.fragment,r),c=!0)},o(r){N(f.$$.fragment,r),c=!1},d(r){r&&(d(e),d(s),d(o)),J(f),h=!1,ce(g)}}}function Be(l){let e,t="(function)",a,s,o="";return{c(){e=y("td"),e.textContent=t,a=z(),s=y("td"),s.innerHTML=o,this.h()},l(n){e=k(n,"TD",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-2ucpwt"&&(e.textContent=t),a=B(n),s=k(n,"TD",{class:!0,"data-svelte-h":!0}),ae(s)!=="svelte-x12cwd"&&(s.innerHTML=o),this.h()},h(){_(e,"class","value svelte-3wllmm"),_(s,"class","checkbox svelte-3wllmm")},m(n,f){L(n,e,f),L(n,a,f),L(n,s,f)},p:W,i:W,o:W,d(n){n&&(d(e),d(a),d(s))}}}function Ue(l){let e,t,a,s,o,n,f,u,c,h,g;return f=new de({props:{className:"icon-20",svg:pe}}),{c(){e=y("td"),t=y("input"),s=z(),o=y("td"),n=y("button"),A(f.$$.fragment),this.h()},l(r){e=k(r,"TD",{class:!0});var i=D(e);t=k(i,"INPUT",{class:!0,placeholder:!0,"aria-label":!0}),i.forEach(d),s=B(r),o=k(r,"TD",{class:!0});var E=D(o);n=k(E,"BUTTON",{class:!0,title:!0});var p=D(n);R(f.$$.fragment,p),p.forEach(d),E.forEach(d),this.h()},h(){_(t,"class","number svelte-3wllmm"),_(t,"placeholder",l[2]),t.value=a=l[1].value,_(t,"aria-label",l[3]),Y(t,"empty",l[1].isEmpty),_(e,"class","value svelte-3wllmm"),_(n,"class","btn btn-link icon svelte-3wllmm"),_(n,"title","Clear value"),n.disabled=u=l[1].isEmpty,_(o,"class","checkbox svelte-3wllmm")},m(r,i){L(r,e,i),C(e,t),L(r,s,i),L(r,o,i),C(o,n),F(f,n,null),c=!0,h||(g=[q(t,"input",function(){K(l[1].onChange)&&l[1].onChange.apply(this,arguments)}),q(n,"click",function(){K(l[1].clear)&&l[1].clear.apply(this,arguments)})],h=!0)},p(r,i){l=r,(!c||i&4)&&_(t,"placeholder",l[2]),(!c||i&2&&a!==(a=l[1].value)&&t.value!==a)&&(t.value=a),(!c||i&8)&&_(t,"aria-label",l[3]),(!c||i&2)&&Y(t,"empty",l[1].isEmpty),(!c||i&2&&u!==(u=l[1].isEmpty))&&(n.disabled=u)},i(r){c||(O(f.$$.fragment,r),c=!0)},o(r){N(f.$$.fragment,r),c=!1},d(r){r&&(d(e),d(s),d(o)),J(f),h=!1,ce(g)}}}function Me(l){let e,t,a,s,o,n,f,u,c,h,g;return f=new de({props:{className:"icon-20",svg:pe}}),{c(){e=y("td"),t=y("div"),a=y("input"),s=z(),o=y("td"),n=y("button"),A(f.$$.fragment),this.h()},l(r){e=k(r,"TD",{class:!0});var i=D(e);t=k(i,"DIV",{class:!0});var E=D(t);a=k(E,"INPUT",{class:!0,type:!0,role:!0,"aria-label":!0}),E.forEach(d),i.forEach(d),s=B(r),o=k(r,"TD",{class:!0});var p=D(o);n=k(p,"BUTTON",{class:!0,title:!0});var m=D(n);R(f.$$.fragment,m),m.forEach(d),p.forEach(d),this.h()},h(){_(a,"class","form-check-input boolean svelte-3wllmm"),_(a,"type","checkbox"),_(a,"role","switch"),a.checked=l[4],_(a,"aria-label",l[3]),Y(a,"empty",l[1].isEmpty),_(t,"class","form-check form-switch me-1"),_(e,"class","value svelte-3wllmm"),_(n,"class","btn btn-link icon svelte-3wllmm"),_(n,"title","Clear value"),n.disabled=u=l[1].isEmpty,_(o,"class","checkbox svelte-3wllmm")},m(r,i){L(r,e,i),C(e,t),C(t,a),L(r,s,i),L(r,o,i),C(o,n),F(f,n,null),c=!0,h||(g=[q(a,"change",function(){K(l[1].onChange)&&l[1].onChange.apply(this,arguments)}),q(n,"click",function(){K(l[1].clear)&&l[1].clear.apply(this,arguments)})],h=!0)},p(r,i){l=r,(!c||i&16)&&(a.checked=l[4]),(!c||i&8)&&_(a,"aria-label",l[3]),(!c||i&2)&&Y(a,"empty",l[1].isEmpty),(!c||i&2&&u!==(u=l[1].isEmpty))&&(n.disabled=u)},i(r){c||(O(f.$$.fragment,r),c=!0)},o(r){N(f.$$.fragment,r),c=!1},d(r){r&&(d(e),d(s),d(o)),J(f),h=!1,ce(g)}}}function je(l){let e,t,a,s;const o=[Me,Ue,Be,ze],n=[];function f(u,c){return u[0]==="boolean"?0:u[0]==="number"?1:u[0]==="function"?2:3}return e=f(l),t=n[e]=o[e](l),{c(){t.c(),a=me()},l(u){t.l(u),a=me()},m(u,c){n[e].m(u,c),L(u,a,c),s=!0},p(u,[c]){let h=e;e=f(u),e===h?n[e].p(u,c):(te(),N(n[h],1,1,()=>{n[h]=null}),le(),t=n[e],t?t.p(u,c):(t=n[e]=o[e](u),t.c()),O(t,1),t.m(a.parentNode,a))},i(u){s||(O(t),s=!0)},o(u){N(t),s=!1},d(u){u&&d(a),n[e].d(u)}}}function Ae(l,e,t){let a,{type:s}=e,{defaultValue:o}=e,{api:n}=e,{placeholder:f=""}=e,{ariaLabel:u}=e;return l.$$set=c=>{"type"in c&&t(0,s=c.type),"defaultValue"in c&&t(5,o=c.defaultValue),"api"in c&&t(1,n=c.api),"placeholder"in c&&t(2,f=c.placeholder),"ariaLabel"in c&&t(3,u=c.ariaLabel)},l.$$.update=()=>{l.$$.dirty&34&&t(4,a=n.isEmpty?o:n.value)},[s,n,f,u,a,o]}class ve extends fe{constructor(e){super(),he(this,e,Ae,je,ue,{type:0,defaultValue:5,api:1,placeholder:2,ariaLabel:3})}}const Re=typeof window>"u"?_e(""):_e("",l=>{function e(){const t=location.hash;l(t?t.substring(1):"")}return window.addEventListener("hashchange",e),e(),()=>window.removeEventListener("hashchange",e)}),Te=ee(()=>{let l=Re().split("#").at(-1);(!l||l.at(0)!=="{")&&(l="{}");const{config:e={},props:t={}}=JSON.parse(decodeURIComponent(l));return{config:e,props:t}});function oe(l){return l&&Object.entries(l).filter(([,e])=>e!==void 0).length?l:void 0}function ge(l,e,t){const a=structuredClone(Te()),s=a[l]??{};s[e]=t,a.config=oe(a.config),a.props=oe(a.props);const o=JSON.stringify(oe(a));location.hash=o?`#${o}`:"#"}const De=Symbol("playground");function Fe(l){Pe(De,l)}function Je(){return Le(De)}function be(l,e,t,a){function s({target:n}){let f;const u=n.value.trim();switch(a){case"boolean":f=n.checked;break;case"number":f=+u;break;default:f=n.value;break}return f}return{value:t??"",isEmpty:t===void 0,onChange(n){ge(l,e,s(n))},clear(){ge(l,e,void 0)}}}function qe(l,e,t,a,s=typeof e){return{key:l,defaultValue:e,config:be("config",l,t,s),prop:be("props",l,a,s),type:s}}function Ke({config:l,types:e,doc:t}){const a={};for(const h of t.props)a[h.name]=h;const s=ee(()=>{const h=[],{config:g,props:r}=Te();for(const[i,E]of Object.entries(l))h.push(qe(i,E,g[i],r[i],e[i]));return h}),o=ee(()=>{const h={},g={};let r=!1,i=!1;for(const p of s()){const{key:m,config:S,prop:T}=p;S.isEmpty||(h[m]=S.value,r=!0),T.isEmpty||(g[m]=T.value,i=!0)}const E=r||i?{}:void 0;return r&&(E.config=h),i&&(E.props=g),E}),n={key:"",type:"",defaultValue:"",description:[]},f=Se(void 0),u=ee(()=>{const h=f();if(h){const g=a[h];return{key:h,type:g.type,defaultValue:g.defaultValue?Ne(g.defaultValue):"",description:He(g.description)}}else return n}),c={values$:s,sampleParameters$:o,help$:u,showHelp(h){f.update(g=>g===h?void 0:h)}};return Fe(c),c}function Ye(l){let e,t,a,s,o,n,f,u,c,h,g;return n=new ve({props:{type:l[0],defaultValue:l[3],api:l[2],placeholder:l[3],ariaLabel:"property "+l[4]+" config input"}}),u=new ve({props:{type:l[0],defaultValue:l[3],api:l[1],ariaLabel:"property "+l[4]+" value input"}}),{c(){e=y("tr"),t=y("td"),a=y("button"),s=X(l[4]),o=z(),A(n.$$.fragment),f=z(),A(u.$$.fragment),this.h()},l(r){e=k(r,"TR",{});var i=D(e);t=k(i,"TD",{});var E=D(t);a=k(E,"BUTTON",{class:!0});var p=D(a);s=Z(p,l[4]),p.forEach(d),E.forEach(d),o=B(i),R(n.$$.fragment,i),f=B(i),R(u.$$.fragment,i),i.forEach(d),this.h()},h(){_(a,"class","btn btn-link align-middle svelte-kp5m44")},m(r,i){L(r,e,i),C(e,t),C(t,a),C(a,s),C(e,o),F(n,e,null),C(e,f),F(u,e,null),c=!0,h||(g=q(a,"click",l[7]),h=!0)},p(r,[i]){(!c||i&16)&&$(s,r[4]);const E={};i&1&&(E.type=r[0]),i&8&&(E.defaultValue=r[3]),i&4&&(E.api=r[2]),i&8&&(E.placeholder=r[3]),i&16&&(E.ariaLabel="property "+r[4]+" config input"),n.$set(E);const p={};i&1&&(p.type=r[0]),i&8&&(p.defaultValue=r[3]),i&2&&(p.api=r[1]),i&16&&(p.ariaLabel="property "+r[4]+" value input"),u.$set(p)},i(r){c||(O(n.$$.fragment,r),O(u.$$.fragment,r),c=!0)},o(r){N(n.$$.fragment,r),N(u.$$.fragment,r),c=!1},d(r){r&&d(e),J(n),J(u),h=!1,g()}}}function Ge(l,e,t){let a,s,o,n,f,{valueContext:u}=e;const{showHelp:c}=Je(),h=()=>c(a);return l.$$set=g=>{"valueContext"in g&&t(6,u=g.valueContext)},l.$$.update=()=>{l.$$.dirty&64&&t(4,{key:a,defaultValue:s,config:o,prop:n,type:f}=u,a,(t(3,s),t(6,u)),(t(2,o),t(6,u)),(t(1,n),t(6,u)),(t(0,f),t(6,u)))},[f,n,o,s,a,c,u,h]}class Qe extends fe{constructor(e){super(),he(this,e,Ge,Ye,ue,{valueContext:6})}}function ye(l,e,t){const a=l.slice();return a[14]=e[t],a}function ie(l){const e=l.slice(),t=e[5].type;e[12]=t;const a=e[5].defaultValue;return e[13]=a,e}function ke(l,e,t){const a=l.slice();return a[17]=e[t],a}function Ee(l){let e,t;return e=new Qe({props:{valueContext:l[17]}}),{c(){A(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,s){F(e,a,s),t=!0},p(a,s){const o={};s&16&&(o.valueContext=a[17]),e.$set(o)},i(a){t||(O(e.$$.fragment,a),t=!0)},o(a){N(e.$$.fragment,a),t=!1},d(a){J(e,a)}}}function we(l){let e,t,a=l[5].key+"",s,o,n,f=l[5].type+"",u,c,h,g,r,i,E="Default value:",p,m,S,T,v,V,I=ne(l[5].description),b=[];for(let w=0;w<I.length;w+=1)b[w]=Ce(ye(l,I,w));const j=[Xe,We],U=[];function G(w,P){return w[12]==="function"?0:1}return m=G(l),S=U[m]=j[m](l),{c(){e=y("div"),t=y("h3"),s=X(a),o=z(),n=y("code"),u=X(f),c=z(),h=y("div");for(let w=0;w<b.length;w+=1)b[w].c();g=z(),r=y("div"),i=y("span"),i.textContent=E,p=z(),S.c(),T=z(),v=y("hr"),this.h()},l(w){e=k(w,"DIV",{});var P=D(e);t=k(P,"H3",{});var M=D(t);s=Z(M,a),M.forEach(d),o=B(P),n=k(P,"CODE",{class:!0});var H=D(n);u=Z(H,f),H.forEach(d),c=B(P),h=k(P,"DIV",{class:!0});var Q=D(h);for(let se=0;se<b.length;se+=1)b[se].l(Q);Q.forEach(d),g=B(P),r=k(P,"DIV",{class:!0});var x=D(r);i=k(x,"SPAN",{class:!0,"data-svelte-h":!0}),ae(i)!=="svelte-ro2i13"&&(i.textContent=E),p=B(x),S.l(x),x.forEach(d),P.forEach(d),T=B(w),v=k(w,"HR",{class:!0}),this.h()},h(){_(n,"class","d-block mb-2"),_(h,"class","description mb-2"),_(i,"class","highlight svelte-o3klxo"),_(r,"class","mb-2"),_(v,"class","mt-4")},m(w,P){L(w,e,P),C(e,t),C(t,s),C(e,o),C(e,n),C(n,u),C(e,c),C(e,h);for(let M=0;M<b.length;M+=1)b[M]&&b[M].m(h,null);C(e,g),C(e,r),C(r,i),C(r,p),U[m].m(r,null),L(w,T,P),L(w,v,P),V=!0},p(w,P){if((!V||P&32)&&a!==(a=w[5].key+"")&&$(s,a),(!V||P&32)&&f!==(f=w[5].type+"")&&$(u,f),P&32){I=ne(w[5].description);let H;for(H=0;H<I.length;H+=1){const Q=ye(w,I,H);b[H]?b[H].p(Q,P):(b[H]=Ce(Q),b[H].c(),b[H].m(h,null))}for(;H<b.length;H+=1)b[H].d(1);b.length=I.length}let M=m;m=G(w),m===M?U[m].p(w,P):(te(),N(U[M],1,1,()=>{U[M]=null}),le(),S=U[m],S?S.p(w,P):(S=U[m]=j[m](w),S.c()),O(S,1),S.m(r,null))},i(w){V||(O(S),V=!0)},o(w){N(S),V=!1},d(w){w&&(d(e),d(T),d(v)),Ve(b,w),U[m].d()}}}function Ce(l){let e,t=l[14]+"",a;return{c(){e=y("div"),a=X(t)},l(s){e=k(s,"DIV",{});var o=D(e);a=Z(o,t),o.forEach(d)},m(s,o){L(s,e,o),C(e,a)},p(s,o){o&32&&t!==(t=s[14]+"")&&$(a,t)},d(s){s&&d(e)}}}function We(l){let e,t=l[13]+"",a;return{c(){e=y("code"),a=X(t)},l(s){e=k(s,"CODE",{});var o=D(e);a=Z(o,t),o.forEach(d)},m(s,o){L(s,e,o),C(e,a)},p(s,o){o&32&&t!==(t=s[13]+"")&&$(a,t)},i:W,o:W,d(s){s&&d(e)}}}function Xe(l){let e,t,a;return t=new Ie({props:{code:l[13],title:"function",isSample:!1,language:"typescript"}}),{c(){e=y("div"),A(t.$$.fragment),this.h()},l(s){e=k(s,"DIV",{class:!0});var o=D(e);R(t.$$.fragment,o),o.forEach(d),this.h()},h(){_(e,"class","mt-3")},m(s,o){L(s,e,o),F(t,e,null),a=!0},p(s,o){const n={};o&32&&(n.code=s[13]),t.$set(n)},i(s){a||(O(t.$$.fragment,s),a=!0)},o(s){N(t.$$.fragment,s),a=!1},d(s){s&&d(e),J(t)}}}function Ze(l){let e,t,a,s,o,n,f,u,c='<tr class="border-0 bg-transparent"><th class="border-0">Prop</th> <th class="border-0">Config</th> <th class="border-0"></th> <th class="border-0">Value</th> <th class="border-0"></th></tr>',h,g,r,i,E;a=new Oe({props:{title:"Configuration",sample:l[0],urlParameters:l[3],showCodeButton:!1,height:l[1],noresize:l[2]}});let p=ne(l[4]),m=[];for(let v=0;v<p.length;v+=1)m[v]=Ee(ke(l,p,v));const S=v=>N(m[v],1,1,()=>{m[v]=null});let T=l[5].key&&we(ie(l));return{c(){e=y("div"),t=y("div"),A(a.$$.fragment),s=z(),o=y("div"),n=y("div"),f=y("table"),u=y("thead"),u.innerHTML=c,h=z(),g=y("tbody");for(let v=0;v<m.length;v+=1)m[v].c();r=z(),i=y("div"),T&&T.c(),this.h()},l(v){e=k(v,"DIV",{class:!0});var V=D(e);t=k(V,"DIV",{class:!0});var I=D(t);R(a.$$.fragment,I),I.forEach(d),V.forEach(d),s=B(v),o=k(v,"DIV",{class:!0});var b=D(o);n=k(b,"DIV",{class:!0});var j=D(n);f=k(j,"TABLE",{class:!0});var U=D(f);u=k(U,"THEAD",{"data-svelte-h":!0}),ae(u)!=="svelte-sxgoge"&&(u.innerHTML=c),h=B(U),g=k(U,"TBODY",{});var G=D(g);for(let P=0;P<m.length;P+=1)m[P].l(G);G.forEach(d),U.forEach(d),j.forEach(d),r=B(b),i=k(b,"DIV",{class:!0});var w=D(i);T&&T.l(w),w.forEach(d),b.forEach(d),this.h()},h(){_(t,"class","col"),_(e,"class","row"),_(f,"class","table table-borderless table-sm"),_(n,"class","col-auto"),_(i,"class","col"),_(o,"class","row")},m(v,V){L(v,e,V),C(e,t),F(a,t,null),L(v,s,V),L(v,o,V),C(o,n),C(n,f),C(f,u),C(f,h),C(f,g);for(let I=0;I<m.length;I+=1)m[I]&&m[I].m(g,null);C(o,r),C(o,i),T&&T.m(i,null),E=!0},p(v,[V]){const I={};if(V&1&&(I.sample=v[0]),V&8&&(I.urlParameters=v[3]),V&2&&(I.height=v[1]),V&4&&(I.noresize=v[2]),a.$set(I),V&16){p=ne(v[4]);let b;for(b=0;b<p.length;b+=1){const j=ke(v,p,b);m[b]?(m[b].p(j,V),O(m[b],1)):(m[b]=Ee(j),m[b].c(),O(m[b],1),m[b].m(g,null))}for(te(),b=p.length;b<m.length;b+=1)S(b);le()}v[5].key?T?(T.p(ie(v),V),V&32&&O(T,1)):(T=we(ie(v)),T.c(),O(T,1),T.m(i,null)):T&&(te(),N(T,1,1,()=>{T=null}),le())},i(v){if(!E){O(a.$$.fragment,v);for(let V=0;V<p.length;V+=1)O(m[V]);O(T),E=!0}},o(v){N(a.$$.fragment,v),m=m.filter(Boolean);for(let V=0;V<m.length;V+=1)N(m[V]);N(T),E=!1},d(v){v&&(d(e),d(s),d(o)),J(a),Ve(m,v),T&&T.d()}}}function $e(l,e,t){let a,s,o,{sample:n}=e,{config:f}=e,{doc:u}=e,{types:c={}}=e,{height:h=100}=e,{noresize:g=!1}=e;const{values$:r,sampleParameters$:i,help$:E}=Ke({config:f,types:c,doc:u});return re(l,r,p=>t(4,s=p)),re(l,i,p=>t(3,a=p)),re(l,E,p=>t(5,o=p)),l.$$set=p=>{"sample"in p&&t(0,n=p.sample),"config"in p&&t(9,f=p.config),"doc"in p&&t(10,u=p.doc),"types"in p&&t(11,c=p.types),"height"in p&&t(1,h=p.height),"noresize"in p&&t(2,g=p.noresize)},[n,h,g,a,s,o,r,i,E,f,u,c]}class ot extends fe{constructor(e){super(),he(this,e,$e,Ze,ue,{sample:0,config:9,doc:10,types:11,height:1,noresize:2})}}export{ot as P};
