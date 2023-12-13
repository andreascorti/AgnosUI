import{j as n}from"./index-a1897422.js";import{c as h,w as U,d as L,n as P}from"./func-f2d0b1ef.js";import{c as _,o as H,a as q,b as G}from"./floatingUI-45cee349.js";import{c as J}from"./focustrack-2033d9a9.js";import{w as Q,b as B,s as V,t as X}from"./stores-ae26ce61.js";import{u as Y}from"./config-b1c82cd5.js";import{S as K}from"./slot-50fa40d8.js";import{u as O,g as Z}from"./directive-b30080a6.js";const ee=s=>""+s,te={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],itemIdFn:ee,onOpenChange:P,onFilterTextChange:P,onSelectedChange:P,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:"",slotBadgeLabel:({itemContext:s})=>s.item,slotItem:({itemContext:s})=>s.item};function se(s){const[{open$:a,filterText$:i,items$:d,itemIdFn$:r,onOpenChange$:x,onFilterTextChange$:p,onSelectedChange$:D,allowedPlacements$:C,...w},I]=Q(te,s),{selected$:b}=w,N=B(p,[i]),{hasFocus$:$,directive:S}=J(),m=B(x,[a,$],([e,t])=>e&&t),v=h(()=>{const e=new Map,t=r();for(const o of b()){const c=t(o);e.set(c,{item:o,id:t(o),selected:!0})}return e}),y=h(()=>[...v().values()]),g=function(){const e=U(0);return L(e,t=>{const{length:o}=F();t!=null&&(o?t<0?t=o-1:t>=o&&(t=0):t=void 0),e.set(t)})}(),M=h(()=>{const e=new Map;if(m()){const t=v(),o=r();for(const c of d()){const u=o(c);e.set(u,{item:c,id:u,selected:t.has(u)})}}return e}),F=h(()=>m()?[...M().values()]:[]),T=h(()=>{const e=F(),t=g();return e.length&&t!=null?e[t]:void 0}),{directives:{floatingDirective:W,referenceDirective:E},stores:{placement$:z}}=_({props:{computePositionOptions:L(h(()=>({middleware:[H(5),q({allowedPlacements:C()}),G()]})))}}),l={...V({visibleItems$:F,highlighted$:T,open$:m,selectedContexts$:y,filterText$:N,placement$:z,...w}),patch:I,api:{clear(){b.set([])},select(e){l.api.toggleItem(e,!0)},unselect(e){l.api.toggleItem(e,!1)},toggleItem(e,t){const o=r(),c=o(e),j=v().has(c);t==null&&(t=!j),!(t&&!M().has(c)||!t&&!j)&&b.update(f=>{var k;if(f=[...f],t&&!j)f.push(e);else if(!t&&j){const A=f.findIndex(R=>o(R)===c);f.splice(A,1)}return(k=D())==null||k(f),f})},clearText(){},highlight(e){const t=F().findIndex(o=>o.item===e);g.set(t===-1?void 0:t)},highlightFirst(){g.set(0)},highlightPrevious(){g.update(e=>e!=null?e-1:-1)},highlightNext(){g.update(e=>e!=null?e+1:1/0)},highlightLast(){g.set(-1)},focus(e){},focusFirst(){},focusPrevious(){},focusNext(){},focusLast(){},open:()=>l.api.toggle(!0),close:()=>l.api.toggle(!1),toggle(e){a.update(t=>e??!t)}},directives:{hasFocusDirective:S,floatingDirective:W,referenceDirective:E},actions:{onInput({target:e}){const t=e.value;I({open:t!=null&&t!=="",filterText:t})},onInputKeydown(e){const{ctrlKey:t,key:o}=e;let c=!0;switch(o){case"ArrowDown":{m()?t?l.api.highlightLast():l.api.highlightNext():(l.api.open(),l.api.highlightFirst());break}case"ArrowUp":t?l.api.highlightFirst():l.api.highlightPrevious();break;case"Enter":{const u=T();u&&l.api.toggleItem(u.item);break}case"Escape":a.set(!1);break;default:c=!1}c&&e.preventDefault()}}};return l}const ne=se;function oe(s){s.preventDefault()}function ie(s){return n.jsx(n.Fragment,{children:""+s.itemContext.item})}function ae(s){return n.jsx(n.Fragment,{children:""+s.itemContext.item})}function le({slotContext:s}){const a=[],i=s.state;for(const d of s.state.selectedContexts)a.push(n.jsx("div",{className:`au-select-badge me-1 ${i.badgeClassName}`,children:n.jsx(K,{slotContent:i.slotBadgeLabel,props:{...s,itemContext:d}})},d.id));return a.length?n.jsx(n.Fragment,{children:a}):null}function re({slotContext:s}){const{widget:a,state:i}=s,d=i.highlighted;return n.jsx(n.Fragment,{children:i.visibleItems.map(r=>{const{id:x}=r,p=["au-select-item dropdown-item position-relative"];return r===d&&p.push("bg-light"),r.selected&&p.push("selected"),n.jsx("li",{className:p.join(" "),onClick:()=>a.api.toggleItem(r.item),children:n.jsx(K,{slotContent:i.slotItem,props:{...s,itemContext:r}})},x)})})}const ce={slotBadgeLabel:ie,slotItem:ae};function be(s){const[a,i]=Y(ne,s,"select",ce),d={state:a,widget:X(i)},{id:r,ariaLabel:x,visibleItems:p,filterText:D,open:C,className:w,menuClassName:I,placement:b}=a,{directives:{floatingDirective:N,hasFocusDirective:$,referenceDirective:S}}=i,m=O(S),v=O($),y=Z([$,N]);return n.jsxs("div",{ref:m,className:`au-select dropdown border border-1 p-1 mb-3 d-block ${w}`,children:[n.jsxs("div",{ref:v,role:"combobox",className:"d-flex align-items-center flex-wrap","aria-haspopup":"listbox","aria-expanded":C,children:[n.jsx(le,{slotContext:d}),n.jsx("input",{id:r,"aria-label":x,className:"au-select-input flex-grow-1 border-0",type:"text",value:D,"aria-autocomplete":"list",autoCorrect:"off",autoCapitalize:"none",autoComplete:"off",onKeyDown:i.actions.onInputKeydown,onInput:i.actions.onInput})]}),C&&p.length>0&&n.jsx("ul",{ref:y,className:`dropdown-menu show ${I}`,"data-popper-placement":b,onMouseDown:oe,children:n.jsx(re,{slotContext:d})})]})}export{be as S};
