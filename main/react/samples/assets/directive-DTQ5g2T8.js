import{r as p,w as f,a as d,b as l,n as y}from"./func-DR0n-ShK-BRtNsj1u.js";import{r as c}from"./index-BpwlRd3Y.js";const m=(e,t)=>s=>{let r=!0,n;const o=t.subscribe(i=>{var a;r?(r=!1,n=e(s,i)):(a=n==null?void 0:n.update)==null||a.call(n,i)});return{destroy(){var i;(i=n==null?void 0:n.destroy)==null||i.call(n),o()}}},D=p(void 0),R=e=>m(e,D),_=(e,t=!0)=>()=>{const s=e.subscribe(y);return{destroy:async()=>{t&&await 0,s()}}},w=e=>(t,s)=>(e(s),{update:e}),b={equal:Object.is},g=()=>{const e=f([],b);return d(e,{register:t=>{let s=!1;return e.update(r=>[...r,t]),()=>{s||(s=!0,e.update(r=>{const n=r.indexOf(t);if(n>-1){const o=[...r];return o.splice(n,1),o}return r}))}}})},O=()=>{const e=g();return{elements$:d(e),directive:t=>({destroy:e.register(t)})}},S=()=>{const e=f(null,b);return{element$:d(e),directive:t=>{let s=!1;return e.update(r=>r?(console.error("The directive cannot be used on multiple elements.",r,t),r):(s=!0,t)),s?{destroy(){e.update(r=>t===r?null:r)}}:void 0}}},$=(...e)=>(t,s)=>{const r=l(()=>e.map(n=>n(t,s)));return{update(n){l(()=>r.forEach(o=>{var i;return(i=o==null?void 0:o.update)==null?void 0:i.call(o,n)}))},destroy(){l(()=>r.reverse().forEach(n=>{var o;return(o=n==null?void 0:n.destroy)==null?void 0:o.call(n)}))}}};function h(e,t){var o,i;const s=c.useRef(),r=c.useRef(),n=c.useCallback(a=>{var u,v;(v=(u=s.current)==null?void 0:u.destroy)==null||v.call(u),s.current=void 0,a&&(s.current=e(a,r.current))},[e]);return r.current=t,(i=(o=s.current)==null?void 0:o.update)==null||i.call(o,t),n}function q(e,t){const s=c.useMemo(()=>$(...e),e);return h(s,t)}export{m as a,R as b,O as c,_ as d,S as e,w as f,q as g,$ as m,g as r,h as u};
