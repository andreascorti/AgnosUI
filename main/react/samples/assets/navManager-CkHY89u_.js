import{r as S,a as k,c as N,O as D,j as x}from"./directive-ClyvktyQ-DyzILLR9.js";const C=t=>{let s=t;for(;s;){const r=getComputedStyle(s);if(s.inert||s.hidden||r.display==="none"||r.visibility==="hidden")return!0;s=s.parentElement}return!1},h=t=>{var s;if(t.disabled)return!1;const r=(s=t.parentElement)==null?void 0:s.closest("fieldset");return r?h(r):!0},A=t=>t.isContentEditable||!!t.hasAttribute("tabindex"),$={INPUT:t=>t.type!=="hidden"&&h(t),SELECT:h,TEXTAREA:h,BUTTON:h,A:t=>!!t.href||A(t)},v=t=>document.contains(t)&&!C(t)&&($[t.tagName]??A)(t),P=(t,s)=>{if(t===s)return 0;const r=t.compareDocumentPosition(s);if(r&Node.DOCUMENT_POSITION_FOLLOWING)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING)return 1;throw new Error("failed to compare elements")},b=t=>getComputedStyle(t).direction,K=new Set(["text","search","url","tel","password"]),L=t=>t instanceof HTMLInputElement&&K.has(t.type),M=t=>{let s=t.key;return t.shiftKey&&(s=`Shift+${s}`),t.altKey&&(s=`Alt+${s}`),t.ctrlKey&&(s=`Ctrl+${s}`),t.metaKey&&(s=`Meta+${s}`),s},_=t=>{const{target:s,key:r}=t;if(L(s)&&(r==="ArrowLeft"||r==="ArrowRight"||r==="Home"||r==="End")){let i;if(r==="ArrowLeft"||r==="ArrowRight"){const a=b(s);i=r===(a==="ltr"?"ArrowLeft":"ArrowRight")}else i=r==="Home";const f=s.selectionStart===s.selectionEnd?s.selectionStart:null;if(i&&f!==0||!i&&f!==s.value.length)return!0}return!1},U=t=>[t],W=()=>{const t=S(),s=k({}),r=(e=!0)=>{s.set({}),e&&(f(),a())},i=N(()=>{s();const e=[];for(const o of t())e.push(...o());return e}),f=N(()=>D(i()),{equal:Object.is}),a=N(()=>[...i()].sort(P)),d=()=>{const e=f();return e?b(e):"ltr"},g=(e,o)=>(e&&(o==null||o.preventDefault()),e),p=(e,o=0)=>{const c=a();for(;e>=0&&e<c.length;){const n=c[e];if(v(n)){if(n.focus(),o!=0&&L(n)){const u=d()!==b(n),l=o>0!==u?0:n.value.length;n.setSelectionRange(l,l,l===0?"forward":"backward")}return n}if(o===0)break;e+=o}return null},E=e=>({event:o,referenceElement:c=(o==null?void 0:o.target)??document.activeElement}={})=>{const n=c?a().indexOf(c):-1;return n>-1?g(p(n+e,e),o):null},R=x((e,o)=>{const c=u=>{var l;if(_(u))return;const F=M(u),T=(l=o.keys)==null?void 0:l[F];T&&(r(!1),T({event:u,directiveElement:e,navManager:O,context:o.context}))};e.addEventListener("keydown",c);const n=t.register(()=>((o==null?void 0:o.selector)??U)(e));return{update(u){o=u},destroy(){e.removeEventListener("keydown",c),n()}}}),y=E(-1),m=E(1),w=({event:e}={})=>g(p(0,1),e),I=({event:e}={})=>g(p(a().length-1,-1),e),O={elementsInDomOrder$:a,directive:R,focusIndex:p,focusPrevious:y,focusNext:m,focusFirst:w,focusFirstLeft:(...e)=>(d()==="rtl"?I:w)(...e),focusFirstRight:(...e)=>(d()==="rtl"?w:I)(...e),focusLast:I,focusLeft:(...e)=>(d()==="rtl"?m:y)(...e),focusRight:(...e)=>(d()==="rtl"?y:m)(...e),refreshElements:r};return O};export{W as c};
