import{n as d,s as w}from"./scheduler.3bfaf327.js";const u=[];function p(e,t=d){let n;const o=new Set;function a(s){if(w(e,s)&&(e=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){a(s(e))}function r(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=t(a,i)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:r}}var g;const A=((g=globalThis.__sveltekit_1ae4ujh)==null?void 0:g.base)??"";var k;const R=((k=globalThis.__sveltekit_1ae4ujh)==null?void 0:k.assets)??A,S="e461fcdc7d1a4e6c2544e03d30a762c0c66a8d3a",x="sveltekit:snapshot",O="sveltekit:scroll",U="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1},m=location.origin;function j(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||y(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===m&&e.hasAttribute("download");return{url:n,external:a,target:o,download:i}}function V(e){let t=null,n=null,o=null,a=null,i=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keep_focus:c(t),noscroll:c(n),reload:c(i),replace_state:c(r)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function i(r){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:i}}function T(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${R}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==S;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function y(e,t){return e.origin!==m||!e.pathname.startsWith(t)}let E;function Y(e){E=e.client}function q(e){return(...t)=>E[e](...t)}const K={url:h({}),page:h({}),navigating:p(null),updated:T()};export{U as I,_ as P,O as S,x as a,P as b,V as c,K as d,A as e,N as f,j as g,Y as h,y as i,q as j,m as o,L as s};
