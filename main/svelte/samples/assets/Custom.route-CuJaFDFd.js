import{S as A,i as H,s as P,R as F,e as g,c as R,k,a as m,b as h,m as y,r as _,t as B,d as E,f as b,g as M,V as N,l as $,u as U,w}from"./AppCommon-FSNPofIP.js";import{S as V}from"./Select-DslJP44Z.js";import"./config-vIMowRk2.js";import"./func-DR0n-ShK-fOTgS_tI.js";import"./stores-_HvO3ll3.js";import"./floatingUI-ClO9eydY.js";import"./directive-BuhXJyzg.js";import"./promise-CY2U8bTP-BFEsTfzZ.js";import"./focustrack-OgYQFROs.js";import"./navManager-DNbCkdVj.js";import"./dom-B9Oy3i4s-Hs1W5kAC.js";import"./Slot-BolLd1eq.js";function z(l,e){let n;return(...a)=>{n&&clearTimeout(n),n=setTimeout(()=>{l(...a)},e)}}const D=l=>{let e;return(...n)=>(e==null||e.abort(),e=new AbortController,l(e.signal,...n))};function q(l,e,n){const a=l.slice();return a[8]=e[n],a}function I(l){const e=l[11].item;l[8]=e}function G(l){let e,n=l[11].item.title+"",a,c,f,s,u,o;function r(...t){return l[6](l[12],l[11],...t)}return{c(){e=g("a"),a=$(n),f=k(),s=g("button"),m(e,"href",c=`${C}${l[11].item.pageid}`),m(e,"target","_blank"),m(e,"rel","noreferrer"),m(s,"type","button"),m(s,"class","btn-close ms-1 wiki-btn-close"),m(s,"aria-label","Close")},m(t,i){h(t,e,i),_(e,a),h(t,f,i),h(t,s,i),u||(o=U(s,"click",r),u=!0)},p(t,i){l=t,i&2048&&n!==(n=l[11].item.title+"")&&w(a,n),i&2048&&c!==(c=`${C}${l[11].item.pageid}`)&&m(e,"href",c)},d(t){t&&(b(e),b(f),b(s)),u=!1,o()}}}function J(l){I(l);let e,n,a=l[8].title+"",c,f,s,u=l[8].snippet+"",o,r;return{c(){e=g("label"),n=g("div"),c=$(a),f=k(),s=g("div"),o=$(u),m(n,"class","fw-bold"),m(s,"class","text-wrap wiki-desc"),m(e,"for",r=""+l[11].id),m(e,"slot","item")},m(t,i){h(t,e,i),_(e,n),_(n,c),_(e,f),_(e,s),_(s,o)},p(t,i){I(t),i&2048&&a!==(a=t[8].title+"")&&w(c,a),i&2048&&u!==(u=t[8].snippet+"")&&w(o,u),i&2048&&r!==(r=""+t[11].id)&&m(e,"for",r)},d(t){t&&b(e)}}}function L(l){let e;return{c(){e=$("none")},m(n,a){h(n,e,a)},d(n){n&&b(e)}}}function j(l){let e,n=l[8].title+"",a,c;return{c(){e=g("a"),a=$(n),m(e,"href",c=`${C}${l[8].pageid}`),m(e,"class","pe-2")},m(f,s){h(f,e,s),_(e,a)},p(f,s){s&2&&n!==(n=f[8].title+"")&&w(a,n),s&2&&c!==(c=`${C}${f[8].pageid}`)&&m(e,"href",c)},d(f){f&&b(e)}}}function K(l){let e,n,a,c,f,s;n=new V({props:{items:l[0],itemIdFn:l[2],onFilterTextChange:l[3],onSelectedChange:l[4],navSelector:l[5],badgeClassName:"badge text-bg-light d-flex align-items-center",$$slots:{item:[J,({itemContext:t})=>({11:t}),({itemContext:t})=>t?2048:0],badgeLabel:[G,({itemContext:t,widget:i})=>({11:t,12:i}),({itemContext:t,widget:i})=>(t?2048:0)|(i?4096:0)]},$$scope:{ctx:l}}});let u=F(l[1]),o=[];for(let t=0;t<u.length;t+=1)o[t]=j(q(l,u,t));let r=null;return u.length||(r=L()),{c(){e=g("div"),R(n.$$.fragment),a=k(),c=g("span"),c.textContent="Selection:",f=k();for(let t=0;t<o.length;t+=1)o[t].c();r&&r.c(),m(c,"class","fw-bold"),m(e,"class","custom-select my-auto mb-3")},m(t,i){h(t,e,i),y(n,e,null),_(e,a),_(e,c),_(e,f);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(e,null);r&&r.m(e,null),s=!0},p(t,[i]){const d={};if(i&1&&(d.items=t[0]),i&14336&&(d.$$scope={dirty:i,ctx:t}),n.$set(d),i&2){u=F(t[1]);let p;for(p=0;p<u.length;p+=1){const v=q(t,u,p);o[p]?o[p].p(v,i):(o[p]=j(v),o[p].c(),o[p].m(e,null))}for(;p<o.length;p+=1)o[p].d(1);o.length=u.length,u.length?r&&(r.d(1),r=null):r||(r=L(),r.c(),r.m(e,null))}},i(t){s||(B(n.$$.fragment,t),s=!0)},o(t){E(n.$$.fragment,t),s=!1},d(t){t&&b(e),M(n),N(o,t),r&&r.d()}}}const C="https://en.wikipedia.org/?curid=";function O(l){const e=document.createElement("div");return e.innerHTML=l,e.innerText}function Q(l,e,n){let a=[],c=[];const f=i=>"page-"+i.pageid,s=z(D(async(i,d)=>{var S;const v=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+d,{signal:i})).json();n(0,a=((S=v.query)==null?void 0:S.search.map(T=>({...T,snippet:O(T.snippet)})))??[])}),200),u=new Intl.Collator("en").compare;function o(i){n(1,c=(i||[]).sort((d,p)=>u(d.title,p.title)))}return[a,c,f,s,o,i=>i.querySelectorAll("a,button,input"),(i,d,p)=>i.actions.onRemoveBadgeClick(p,d.item)]}class oe extends A{constructor(e){super(),H(this,e,Q,K,P,{})}}export{oe as default};
