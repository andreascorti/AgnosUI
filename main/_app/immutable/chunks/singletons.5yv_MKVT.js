import{n as d,s as m}from"./scheduler.ACMTHqcQ.js";const u=[];function p(e,t=d){let n;const o=new Set;function a(s){if(m(e,s)&&(e=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(s){a(s(e))}function r(s,c=d){const i=[s,c];return o.add(i),o.size===1&&(n=t(a,l)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:r}}const E=globalThis.__sveltekit_17sd7wb?.base??"",A=globalThis.__sveltekit_17sd7wb?.assets??E,R="f1e24f214a6bd03fd193a3767e846af835c57ff3",I="sveltekit:snapshot",y="sveltekit:scroll",N="sveltekit:states",U="sveltekit:pageurl",L="sveltekit:history",O="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function Y(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function x(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function P(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function V(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||w(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===g&&e.hasAttribute("download");return{url:n,external:a,target:o,download:l}}function G(e){let t=null,n=null,o=null,a=null,l=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(l),replace_state:c(r)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function l(r){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:l}}function T(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${A}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==R;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function w(e,t){return e.origin!==g||!e.pathname.startsWith(t)}let k;function K(e){k=e.client}function j(e){return(...t)=>k[e](...t)}const q={url:h({}),page:h({}),navigating:p(null),updated:T()};export{L as H,O as N,U as P,y as S,N as a,I as b,G as c,q as d,E as e,P as f,V as g,_ as h,w as i,K as j,j as k,g as o,Y as r,x as s};
