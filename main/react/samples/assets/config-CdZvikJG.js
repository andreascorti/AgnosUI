import{r as u,j as C}from"./App-XNADZBio.js";import{a as m,u as l,c as g,v as x}from"./directive-ClyvktyQ-DyzILLR9.js";import{u as v}from"./widget-DAs9_HQ1-D7qDz64F.js";import{a as y}from"./stores-B8YEDwZq-qVpBBQfr.js";const c=(t,e,i=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&i>=1){t||(t={});for(const o of Object.keys(e))Object.prototype.hasOwnProperty.call(e,o)&&(o==="__proto__"||o==="constructor"||(t[o]=c(t[o],e[o],i-1)))}else return e;return t},j=(t,e=l)=>{const i=m({}),o=e===l?t:g(()=>e(c({},t==null?void 0:t(),2)));return x(g(()=>c(c({},o==null?void 0:o(),2),i(),2)),{...i,own$:i,adaptedParent$:o,parent$:t})},p=(t=u.createContext(void 0))=>{const e=(n,r)=>{const s=u.useContext(t),f=y(r);return u.useMemo(()=>g(()=>({...f(),...n?s==null?void 0:s()[n]:void 0})),[s])};return{widgetsConfigContext:t,useWidgetContext:e,useWidgetWithConfig:(n,r,s,f)=>v(n,r,{config:e(s,f)}),WidgetsDefaultConfig:({children:n,adaptParentConfig:r,...s})=>{const f=u.useContext(t);let d=!1;const a=u.useMemo(()=>{const W=j(f,r);return W.set(s),d=!0,W},[f,r]);return u.useEffect(()=>{d||a.set(s)},[s]),C.jsx(t.Provider,{value:a,children:n})}}},{widgetsConfigContext:_,WidgetsDefaultConfig:E,useWidgetContext:O,useWidgetWithConfig:k}=p();export{k as u,p as w};
