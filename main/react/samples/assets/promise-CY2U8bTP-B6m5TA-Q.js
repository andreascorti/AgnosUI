import{c as l,k as m,r as p,l as a,b as u,a as f,e as b}from"./stores-B4F_j8QF.js";const d={status:"pending"},S=e=>{const s=typeof e;return s==="object"&&e!==null||s==="function"?typeof e.then=="function":!1},v=e=>{const s=f(d);return Promise.resolve(e).then(t=>s.set({status:"fulfilled",value:t}),t=>s.set({status:"rejected",reason:t})),b(s)},c=new WeakMap,P=e=>{if(!S(e))return p({status:"fulfilled",value:e});let s=c.get(e);return s||(s=v(e),c.set(e,s)),s},T=(e,s)=>Object.is(e,s)||e.status===s.status&&(e.status!=="fulfilled"||a(e.value,s.value))&&(e.status!=="rejected"||a(e.reason,s.reason)),w=e=>l(()=>P(e())(),{equal:T}),h=(e,s,t)=>m(e,{derive:(i,o)=>{i.status==="fulfilled"&&o(i.value)},equal:t},s),q=(e,s,t)=>h(w(e),s,t),g=e=>!!e,y=(e,s=g)=>{let t;const i=new Promise(r=>t=r);let o=()=>{n(),o=u},n=u;return n=e.subscribe(r=>{s(r)&&(t(r),o())}),o===u&&n(),{promise:i,unsubscribe(){o()}}},E=(e,s)=>{let t;const i=new Promise(r=>t=r);let o=()=>{e.removeEventListener(s,n),o=u};const n=r=>{r.target===e&&(t(r),o())};return e.addEventListener(s,n),{promise:i,unsubscribe(){o()}}},k=e=>{let s;return{promise:new Promise(t=>{s=setTimeout(()=>{s=void 0,t()},e)}),unsubscribe(){s&&(clearTimeout(s),s=void 0)}}},F=()=>{let e;return{promise:new Promise(t=>{e=t}),resolve:e}};export{F as a,E as b,k as c,q as d,y as p};
