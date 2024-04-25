import{s as Q,x as k,i as g,f as m,a as V,g as I,e as w,c as L,b as E,q as U,m as D,y as A,h as y,z as x,t as ee,d as te,j as le}from"./scheduler.Bus5bagK.js";import{S as W,i as X,t as d,g as R,a as b,d as j,c as T,b as M,m as N,e as S}from"./index.hvgIYORv.js";import{k as q,u as ne,t as se,o as re}from"./app.k98NptUD.js";import Y from"./Code.CMogbcKd.js";import{S as Z}from"./Section.CpwA7Ap4.js";function z(a,e,l){const t=a.slice();t[4]=e[l].name,t[5]=e[l].type,t[6]=e[l].description,t[7]=e[l].defaultValue,t[10]=l;const r=se(t[6]);return t[8]=r,t}function B(a,e,l){const t=a.slice();return t[11]=e[l],t}function P(a){let e,l;return e=new Z({props:{label:a[0],id:a[3],level:2,headerClassName:"my-4",$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){N(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.label=t[0]),r&8&&(n.id=t[3]),r&16398&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function F(a){let e,l,t='<span class="fw-bold">Default value:</span>',r,n,o;return n=new Y({props:{code:a[7],language:"typescript",noCopy:!0}}),{c(){e=w("div"),l=w("div"),l.innerHTML=t,r=V(),T(n.$$.fragment),this.h()},l(s){e=L(s,"DIV",{class:!0});var i=E(e);l=L(i,"DIV",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1y1ritt"&&(l.innerHTML=t),r=I(i),M(n.$$.fragment,i),i.forEach(m),this.h()},h(){D(l,"class","mb-1"),D(e,"class","flex-grow-1 mb-3"),A(e,"flex-basis","45%")},m(s,i){g(s,e,i),y(e,l),y(e,r),N(n,e,null),o=!0},p(s,i){const c={};i&2&&(c.code=s[7]),n.$set(c)},i(s){o||(d(n.$$.fragment,s),o=!0)},o(s){b(n.$$.fragment,s),o=!1},d(s){s&&m(e),S(n)}}}function G(a){let e=a[11]+"",l,t;return{c(){l=ee(e),t=w("br")},l(r){l=te(r,e),t=L(r,"BR",{})},m(r,n){g(r,l,n),g(r,t,n)},p(r,n){n&2&&e!==(e=r[11]+"")&&le(l,e)},d(r){r&&(m(l),m(t))}}}function ie(a){let e,l,t,r='<span class="fw-bold">Type:</span>',n,o,s,i,c,v;o=new Y({props:{code:a[5],language:"typescript",noCopy:!0}});let u=a[7]&&F(a),H=q(a[8]),_=[];for(let f=0;f<H.length;f+=1)_[f]=G(B(a,H,f));return{c(){e=w("div"),l=w("div"),t=w("div"),t.innerHTML=r,n=V(),T(o.$$.fragment),s=V(),u&&u.c(),i=V(),c=w("div");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){e=L(f,"DIV",{class:!0});var p=E(e);l=L(p,"DIV",{class:!0});var $=E(l);t=L($,"DIV",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-1b8xqo0"&&(t.innerHTML=r),n=I($),M(o.$$.fragment,$),$.forEach(m),s=I(p),u&&u.l(p),p.forEach(m),i=I(f),c=L(f,"DIV",{class:!0});var h=E(c);for(let C=0;C<_.length;C+=1)_[C].l(h);h.forEach(m),this.h()},h(){D(t,"class","mb-1"),D(l,"class","flex-grow-1 mb-3"),A(l,"flex-basis",a[5].length>40?"90%":"45%"),D(e,"class","d-flex flex-wrap gap-1 flex-column flex-md-row"),D(c,"class","mb-3")},m(f,p){g(f,e,p),y(e,l),y(l,t),y(l,n),N(o,l,null),y(e,s),u&&u.m(e,null),g(f,i,p),g(f,c,p);for(let $=0;$<_.length;$+=1)_[$]&&_[$].m(c,null);v=!0},p(f,p){const $={};if(p&2&&($.code=f[5]),o.$set($),p&2&&A(l,"flex-basis",f[5].length>40?"90%":"45%"),f[7]?u?(u.p(f,p),p&2&&d(u,1)):(u=F(f),u.c(),d(u,1),u.m(e,null)):u&&(R(),b(u,1,1,()=>{u=null}),j()),p&2){H=q(f[8]);let h;for(h=0;h<H.length;h+=1){const C=B(f,H,h);_[h]?_[h].p(C,p):(_[h]=G(C),_[h].c(),_[h].m(c,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=H.length}},i(f){v||(d(o.$$.fragment,f),d(u),v=!0)},o(f){b(o.$$.fragment,f),b(u),v=!1},d(f){f&&(m(e),m(i),m(c)),S(o),u&&u.d(),x(_,f)}}}function J(a){let e;return{c(){e=w("hr")},l(l){e=L(l,"HR",{})},m(l,t){g(l,e,t)},d(l){l&&m(e)}}}function K(a,e){let l,t,r,n,o;t=new Z({props:{label:e[4],id:e[3]+"-"+e[4],level:3,headerClassName:"text-primary-emphasis",$$slots:{default:[ie]},$$scope:{ctx:e}}});let s=(!e[2]||e[10]<e[1].length-1)&&J();return{key:a,first:null,c(){l=k(),T(t.$$.fragment),r=V(),s&&s.c(),n=k(),this.h()},l(i){l=k(),M(t.$$.fragment,i),r=I(i),s&&s.l(i),n=k(),this.h()},h(){this.first=l},m(i,c){g(i,l,c),N(t,i,c),g(i,r,c),s&&s.m(i,c),g(i,n,c),o=!0},p(i,c){e=i;const v={};c&2&&(v.label=e[4]),c&10&&(v.id=e[3]+"-"+e[4]),c&16386&&(v.$$scope={dirty:c,ctx:e}),t.$set(v),!e[2]||e[10]<e[1].length-1?s||(s=J(),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i(i){o||(d(t.$$.fragment,i),o=!0)},o(i){b(t.$$.fragment,i),o=!1},d(i){i&&(m(l),m(r),m(n)),S(t,i),s&&s.d(i)}}}function ae(a){let e=[],l=new Map,t,r,n=q(a[1]);const o=s=>s[4];for(let s=0;s<n.length;s+=1){let i=z(a,n,s),c=o(i);l.set(c,e[s]=K(c,i))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=k()},l(s){for(let i=0;i<e.length;i+=1)e[i].l(s);t=k()},m(s,i){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(s,i);g(s,t,i),r=!0},p(s,i){i&14&&(n=q(s[1]),R(),e=ne(e,i,o,1,s,n,l,t.parentNode,re,K,t,z),j())},i(s){if(!r){for(let i=0;i<n.length;i+=1)d(e[i]);r=!0}},o(s){for(let i=0;i<e.length;i+=1)b(e[i]);r=!1},d(s){s&&m(t);for(let i=0;i<e.length;i+=1)e[i].d(s)}}}function oe(a){let e,l,t=a[1].length&&P(a);return{c(){t&&t.c(),e=k()},l(r){t&&t.l(r),e=k()},m(r,n){t&&t.m(r,n),g(r,e,n),l=!0},p(r,[n]){r[1].length?t?(t.p(r,n),n&2&&d(t,1)):(t=P(r),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(R(),b(t,1,1,()=>{t=null}),j())},i(r){l||(d(t),l=!0)},o(r){b(t),l=!1},d(r){r&&m(e),t&&t.d(r)}}}function fe(a,e,l){let t,{title:r}=e,{properties:n}=e,{noLastHr:o=!1}=e;return a.$$set=s=>{"title"in s&&l(0,r=s.title),"properties"in s&&l(1,n=s.properties),"noLastHr"in s&&l(2,o=s.noLastHr)},a.$$.update=()=>{a.$$.dirty&1&&l(3,t=r.toLowerCase())},[r,n,o,t]}class O extends W{constructor(e){super(),X(this,e,fe,oe,Q,{title:0,properties:1,noLastHr:2})}}function ce(a){let e,l,t,r;return e=new O({props:{title:"Props",properties:a[0].props,noLastHr:!a[0].api.length}}),t=new O({props:{title:"Api",properties:a[0].api,noLastHr:!0}}),{c(){T(e.$$.fragment),l=V(),T(t.$$.fragment)},l(n){M(e.$$.fragment,n),l=I(n),M(t.$$.fragment,n)},m(n,o){N(e,n,o),g(n,l,o),N(t,n,o),r=!0},p(n,[o]){const s={};o&1&&(s.properties=n[0].props),o&1&&(s.noLastHr=!n[0].api.length),e.$set(s);const i={};o&1&&(i.properties=n[0].api),t.$set(i)},i(n){r||(d(e.$$.fragment,n),d(t.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),r=!1},d(n){n&&m(l),S(e,n),S(t,n)}}}function ue(a,e,l){let{doc:t}=e;return a.$$set=r=>{"doc"in r&&l(0,t=r.doc)},[t]}class ge extends W{constructor(e){super(),X(this,e,ue,ce,Q,{doc:0})}}export{ge as A};
