import{a0 as r,H as a}from"./AppCommon-CxRSFr1t.js";import{c as i}from"./directive-_2YRe0xO.js";const u="focusin",s="focusout",m=typeof document>"u"?r(null):r(null,{onUse({set:c}){function e(){c(document.activeElement)}e();const t=document.documentElement;function n(){setTimeout(e)}return t.addEventListener(u,e,{capture:!0}),t.addEventListener(s,n,{capture:!0}),()=>{t.removeEventListener(u,e,{capture:!0}),t.removeEventListener(s,n,{capture:!0})}},equal:Object.is});function v(){const{elements$:c,directive:e}=i(),t=a(()=>{const n=m();if(!n)return!1;for(const o of c())if(o===n||o.contains(n))return!0;return!1});return{directive:e,hasFocus$:t}}export{m as a,v as c};
