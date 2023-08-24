import{s as ne,n as U}from"./scheduler.2ed3e821.js";import{S as se,i as ae,e as W,a as S,d as $,p as H,t as w,b as M,f as p,g as D,r as T,s as I,h as y,j as E,u as O,c as A,k as C,y as k,v as P,w as z,m as J,x as oe,n as K,o as Q,z as ie}from"./index.6f5125a4.js";import{e as B,u as ce,o as fe}from"./each.c25865bc.js";import{t as ue,n as _e}from"./app.8c876633.js";import de from"./Code.d3030d6d.js";import{L as re}from"./LinkHeading.4117e805.js";function X(r,e,n){const l=r.slice();l[6]=e[n].name,l[7]=e[n].type,l[8]=e[n].description,l[9]=e[n].defaultValue;const s=ue(l[8]);return l[10]=s,l}function G(r){const e=r.slice(),n=_e(e[7]);return e[13]=n,e}function Y(r,e,n){const l=r.slice();return l[14]=e[n],l}function Z(r){let e,n,l,s,t=[],o=new Map,d;l=new re({props:{label:r[0],id:r[3],level:2}});let h=B(r[1]);const f=i=>i[6];for(let i=0;i<h.length;i+=1){let a=X(r,h,i),c=f(a);o.set(c,t[i]=te(c,a))}return{c(){e=D("section"),n=D("div"),T(l.$$.fragment),s=I();for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=y(i,"SECTION",{class:!0});var a=E(e);n=y(a,"DIV",{class:!0});var c=E(n);O(l.$$.fragment,c),c.forEach(p),s=A(a);for(let v=0;v<t.length;v+=1)t[v].l(a);a.forEach(p),this.h()},h(){C(n,"class","border pb-3 border-0 border-bottom"),C(e,"class","mb-3")},m(i,a){S(i,e,a),k(e,n),P(l,n,null),k(e,s);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);d=!0},p(i,a){const c={};a&1&&(c.label=i[0]),a&8&&(c.id=i[3]),l.$set(c),a&14&&(h=B(i[1]),H(),t=ce(t,a,f,1,i,h,o,e,fe,te,null,X),M())},i(i){if(!d){$(l.$$.fragment,i);for(let a=0;a<h.length;a+=1)$(t[a]);d=!0}},o(i){w(l.$$.fragment,i);for(let a=0;a<t.length;a+=1)w(t[a]);d=!1},d(i){i&&p(e),z(l);for(let a=0;a<t.length;a+=1)t[a].d()}}}function x(r){let e=r[14]+"",n,l;return{c(){n=J(e),l=D("br")},l(s){n=K(s,e),l=y(s,"BR",{})},m(s,t){S(s,n,t),S(s,l,t)},p(s,t){t&2&&e!==(e=s[14]+"")&&Q(n,e)},d(s){s&&(p(n),p(l))}}}function ee(r){let e,n,l="Default value:",s,t,o,d;const h=[me,he],f=[];function i(a,c){return a[13]==="function"?0:1}return t=i(r),o=f[t]=h[t](r),{c(){e=D("div"),n=D("span"),n.textContent=l,s=I(),o.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var c=E(e);n=y(c,"SPAN",{class:!0,"data-svelte-h":!0}),oe(n)!=="svelte-womgvq"&&(n.textContent=l),s=A(c),o.l(c),c.forEach(p),this.h()},h(){C(n,"class","fw-bold"),C(e,"class","mb-3")},m(a,c){S(a,e,c),k(e,n),k(e,s),f[t].m(e,null),d=!0},p(a,c){let v=t;t=i(a),t===v?f[t].p(a,c):(H(),w(f[v],1,1,()=>{f[v]=null}),M(),o=f[t],o?o.p(a,c):(o=f[t]=h[t](a),o.c()),$(o,1),o.m(e,null))},i(a){d||($(o),d=!0)},o(a){w(o),d=!1},d(a){a&&p(e),f[t].d()}}}function he(r){let e,n=""+r[9],l;return{c(){e=D("code"),l=J(n),this.h()},l(s){e=y(s,"CODE",{class:!0});var t=E(e);l=K(t,n),t.forEach(p),this.h()},h(){C(e,"class","svelte-1lctq4f")},m(s,t){S(s,e,t),k(e,l)},p(s,t){t&2&&n!==(n=""+s[9])&&Q(l,n)},i:U,o:U,d(s){s&&p(e)}}}function me(r){let e,n,l;return n=new de({props:{code:r[9],title:"function",language:"typescript",isSample:!1}}),{c(){e=D("div"),T(n.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var t=E(e);O(n.$$.fragment,t),t.forEach(p),this.h()},h(){C(e,"class","my-2")},m(s,t){S(s,e,t),P(n,e,null),l=!0},p(s,t){const o={};t&2&&(o.code=s[9]),n.$set(o)},i(s){l||($(n.$$.fragment,s),l=!0)},o(s){w(n.$$.fragment,s),l=!1},d(s){s&&p(e),z(n)}}}function te(r,e){let n,l,s,t,o,d="Type:",h,f,i=e[7]+"",a,c,v,R,j,N;l=new re({props:{label:e[6],id:e[3]+"-"+e[6],level:3,className:"text-primary"}});let L=B(e[10]),g=[];for(let u=0;u<L.length;u+=1)g[u]=x(Y(e,L,u));let _=e[2]&&e[9]&&ee(G(e));return{key:r,first:null,c(){n=D("div"),T(l.$$.fragment),s=I(),t=D("div"),o=D("span"),o.textContent=d,h=I(),f=D("code"),a=J(i),c=I(),v=D("div");for(let u=0;u<g.length;u+=1)g[u].c();R=I(),_&&_.c(),j=I(),this.h()},l(u){n=y(u,"DIV",{class:!0});var m=E(n);O(l.$$.fragment,m),s=A(m),t=y(m,"DIV",{class:!0});var V=E(t);o=y(V,"SPAN",{class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-110m6su"&&(o.textContent=d),h=A(V),f=y(V,"CODE",{class:!0});var b=E(f);a=K(b,i),b.forEach(p),V.forEach(p),c=A(m),v=y(m,"DIV",{class:!0});var q=E(v);for(let F=0;F<g.length;F+=1)g[F].l(q);q.forEach(p),R=A(m),_&&_.l(m),j=A(m),m.forEach(p),this.h()},h(){C(o,"class","fw-bold"),C(f,"class","svelte-1lctq4f"),C(t,"class","mb-3"),C(v,"class","mb-3"),C(n,"class","my-4 pb-3 border-bottom"),this.first=n},m(u,m){S(u,n,m),P(l,n,null),k(n,s),k(n,t),k(t,o),k(t,h),k(t,f),k(f,a),k(n,c),k(n,v);for(let V=0;V<g.length;V+=1)g[V]&&g[V].m(v,null);k(n,R),_&&_.m(n,null),k(n,j),N=!0},p(u,m){e=u;const V={};if(m&2&&(V.label=e[6]),m&10&&(V.id=e[3]+"-"+e[6]),l.$set(V),(!N||m&2)&&i!==(i=e[7]+"")&&Q(a,i),m&2){L=B(e[10]);let b;for(b=0;b<L.length;b+=1){const q=Y(e,L,b);g[b]?g[b].p(q,m):(g[b]=x(q),g[b].c(),g[b].m(v,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=L.length}e[2]&&e[9]?_?(_.p(G(e),m),m&6&&$(_,1)):(_=ee(G(e)),_.c(),$(_,1),_.m(n,j)):_&&(H(),w(_,1,1,()=>{_=null}),M())},i(u){N||($(l.$$.fragment,u),$(_),N=!0)},o(u){w(l.$$.fragment,u),w(_),N=!1},d(u){u&&p(n),z(l),ie(g,u),_&&_.d()}}}function pe(r){let e,n,l=r[1].length&&Z(r);return{c(){l&&l.c(),e=W()},l(s){l&&l.l(s),e=W()},m(s,t){l&&l.m(s,t),S(s,e,t),n=!0},p(s,[t]){s[1].length?l?(l.p(s,t),t&2&&$(l,1)):(l=Z(s),l.c(),$(l,1),l.m(e.parentNode,e)):l&&(H(),w(l,1,1,()=>{l=null}),M())},i(s){n||($(l),n=!0)},o(s){w(l),n=!1},d(s){s&&p(e),l&&l.d(s)}}}function ge(r,e,n){let l,s;const t={};let{title:o}=e,{properties:d}=e,{defaultValues:h=t}=e;return r.$$set=f=>{"title"in f&&n(0,o=f.title),"properties"in f&&n(1,d=f.properties),"defaultValues"in f&&n(4,h=f.defaultValues)},r.$$.update=()=>{r.$$.dirty&1&&n(3,l=o.toLowerCase()),r.$$.dirty&16&&n(2,s=h!==t)},[o,d,s,l,h]}class le extends se{constructor(e){super(),ae(this,e,ge,pe,ne,{title:0,properties:1,defaultValues:4})}}function ve(r){let e,n,l,s;return e=new le({props:{title:"Props",properties:r[0].props,defaultValues:r[1]}}),l=new le({props:{title:"Api",properties:r[0].api}}),{c(){T(e.$$.fragment),n=I(),T(l.$$.fragment)},l(t){O(e.$$.fragment,t),n=A(t),O(l.$$.fragment,t)},m(t,o){P(e,t,o),S(t,n,o),P(l,t,o),s=!0},p(t,[o]){const d={};o&1&&(d.properties=t[0].props),o&2&&(d.defaultValues=t[1]),e.$set(d);const h={};o&1&&(h.properties=t[0].api),l.$set(h)},i(t){s||($(e.$$.fragment,t),$(l.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),w(l.$$.fragment,t),s=!1},d(t){t&&p(n),z(e,t),z(l,t)}}}function be(r,e,n){let{doc:l}=e,{defaultValues:s}=e;return r.$$set=t=>{"doc"in t&&n(0,l=t.doc),"defaultValues"in t&&n(1,s=t.defaultValues)},[l,s]}class Ce extends se{constructor(e){super(),ae(this,e,be,ve,ne,{doc:0,defaultValues:1})}}export{Ce as A};
