import{j as o}from"./App-XNADZBio.js";import{u as ee,S as O}from"./config-BUFy1TYO.js";import{a as M}from"./directive-CRCdIwrf-dEmCbYHa.js";import{w as te,c as g,g as se,M as ne,H as oe,a as ie,v as A,s as ae,p as re,D as le,f as k,t as ce,i as N}from"./directive-ClyvktyQ-DyzILLR9.js";import{c as de,o as ue,a as pe,b as ge}from"./floatingUI-BDUL4bCn.js";import{c as fe}from"./focustrack-3TL98URT.js";import{c as me}from"./navManager-CkHY89u_.js";const he={id:void 0,ariaLabel:"Select",open:!1,disabled:!1,items:[],filterText:"",loading:!1,selected:[],navSelector:s=>s.querySelectorAll(".au-select-badge,input"),itemIdFn:s=>""+s,onOpenChange:k,onFilterTextChange:k,onSelectedChange:k,allowedPlacements:["bottom-start","top-start","bottom-end","top-end"],className:"",menuClassName:"",menuItemClassName:"",badgeClassName:"",slotBadgeLabel:({itemContext:s})=>s.item,slotItem:({itemContext:s})=>s.item};function ve(s){const[{id$:a,open$:i,filterText$:c,items$:v,itemIdFn$:f,onOpenChange$:$,onFilterTextChange$:C,onSelectedChange$:b,allowedPlacements$:d,navSelector$:x,...u},y]=te(he,s),{selected$:I}=u,j=g(()=>a()??se()),B=ne(c,C),{hasFocus$:H,directive:W}=fe(),m=oe($,[i,H],([e,t])=>e&&t),S=g(()=>{const e=new Map,t=f();for(const n of I()){const l=t(n);e.set(l,{item:n,id:t(n),selected:!0})}return e}),_=g(()=>[...S().values()]),w=function(){const e=ie(0);return A(e,t=>{const{length:n}=D();t!=null&&(n?t<0?t=n-1:t>=n&&(t=0):t=void 0),e.set(t)})}(),L=g(()=>{const e=new Map;if(m()){const t=S(),n=f();for(const l of v()){const p=n(l);e.set(p,{item:l,id:p,selected:t.has(p)})}}return e}),D=g(()=>m()?[...L().values()]:[]),P=g(()=>{const e=D(),t=w();return e.length&&t!=null?e[t]:void 0}),{directives:{floatingDirective:z,referenceDirective:U},stores:{placement$:q}}=de({props:{computePositionOptions:A(g(()=>({middleware:[ue(5),pe({allowedPlacements:d()}),ge()]})))}}),{directive:G,refreshElements:J,focusFirst:Q,focusLast:V,focusLeft:T,focusRight:E}=me(),X=g(()=>({keys:{Home:Q,End:V,ArrowLeft:T,ArrowRight:E},selector:x()})),K=(e,t)=>{const n=e.target;J(),r.api.unselect(t),n instanceof HTMLElement&&setTimeout(()=>{T({event:e,referenceElement:n})||E({event:e,referenceElement:n})}),e.preventDefault()},r={...ae({id$:j,visibleItems$:D,highlighted$:P,open$:m,selectedContexts$:_,filterText$:B,placement$:q,...u}),patch:y,api:{clear(){I.set([])},select(e){r.api.toggleItem(e,!0)},unselect(e){r.api.toggleItem(e,!1)},toggleItem(e,t){const n=f(),l=n(e),F=S().has(l);t==null&&(t=!F),!(t&&!L().has(l)||!t&&!F)&&I.update(h=>{var R;if(h=[...h],t&&!F)h.push(e);else if(!t&&F){const Y=h.findIndex(Z=>n(Z)===l);h.splice(Y,1)}return(R=b())==null||R(h),h})},clearText(){},highlight(e){const t=D().findIndex(n=>n.item===e);w.set(t===-1?void 0:t)},highlightFirst(){w.set(0)},highlightPrevious(){w.update(e=>e!=null?e-1:-1)},highlightNext(){w.update(e=>e!=null?e+1:1/0)},highlightLast(){w.set(-1)},open:()=>r.api.toggle(!0),close:()=>r.api.toggle(!1),toggle(e){m.update(t=>e??!t)}},directives:{hasFocusDirective:W,floatingDirective:z,referenceDirective:U,inputContainerDirective:re(G,X)},actions:{onInput({target:e}){const t=e.value;le(()=>{m.set(t!=null&&t!==""),B.set(t)})},onRemoveBadgeClick(e,t){K(e,t)},onInputKeydown(e){const{ctrlKey:t,key:n}=e;let l=!0;switch(n){case"ArrowDown":{m()?t?r.api.highlightLast():r.api.highlightNext():(r.api.open(),r.api.highlightFirst());break}case"ArrowUp":t?r.api.highlightFirst():r.api.highlightPrevious();break;case"Enter":{const p=P();p&&r.api.toggleItem(p.item);break}case"Escape":m.set(!1);break;default:l=!1}l&&e.preventDefault()},onBadgeKeydown(e,t){let n=!1;switch(e.key){case"Backspace":case"Delete":{K(e,t),n=!0;break}}n&&e.preventDefault()}}};return r}const be=ve;function xe(s){s.preventDefault()}function we(s){return o.jsx(o.Fragment,{children:""+s.itemContext.item})}function $e(s){return o.jsx(o.Fragment,{children:""+s.itemContext.item})}function Ce({itemContext:s,slotContext:a}){const i=a.state;return o.jsx("div",{tabIndex:-1,className:`au-select-badge me-1 ${i.badgeClassName}`,onKeyDown:c=>a.widget.actions.onBadgeKeydown(c.nativeEvent,s.item),children:o.jsx(O,{slotContent:i.slotBadgeLabel,props:{...a,itemContext:s}})},s.id)}function Ie({slotContext:s}){const a=[];for(const i of s.state.selectedContexts)a.push(o.jsx(Ce,{itemContext:i,slotContext:s},i.id));return a.length?o.jsx(o.Fragment,{children:a}):null}function De({slotContext:s,menuId:a}){const{widget:i,state:c}=s,{placement:v,menuClassName:f,highlighted:$}=c,{hasFocusDirective:C,floatingDirective:b}=i.directives;return o.jsx("ul",{role:"listbox",id:a,"data-popper-placement":v,onMouseDown:xe,...M([N,`dropdown-menu show ${f}`],C,b),children:c.visibleItems.map(d=>{const{id:x}=d,u=["au-select-item dropdown-item position-relative"];return d===$&&u.push("text-bg-primary"),d.selected&&u.push("selected"),o.jsx("li",{role:"option","aria-selected":d.selected,className:u.join(" "),onClick:()=>i.api.toggleItem(d.item),style:{cursor:"pointer"},children:o.jsx(O,{slotContent:c.slotItem,props:{...s,itemContext:d}})},x)})})}const Fe={slotBadgeLabel:we,slotItem:$e};function Le(s){const[a,i]=ee(be,s,"select",Fe),c={state:a,widget:ce(i)},{id:v,ariaLabel:f,visibleItems:$,filterText:C,open:b,className:d}=a,x=`${v}-menu`,{directives:{hasFocusDirective:u,referenceDirective:y,inputContainerDirective:I}}=i;return o.jsxs("div",{...M([N,`au-select dropdown border border-1 p-1 mb-3 d-block ${d}`],y),children:[o.jsxs("div",{role:"combobox","aria-controls":x,"aria-haspopup":"listbox","aria-expanded":b,...M([N,"d-flex align-items-center flex-wrap"],u,I),children:[o.jsx(Ie,{slotContext:c}),o.jsx("input",{id:v,"aria-label":f,className:"au-select-input flex-grow-1 border-0",type:"text",value:C,"aria-autocomplete":"list",autoCorrect:"off",autoCapitalize:"none",autoComplete:"off",onInput:i.actions.onInput,onKeyDown:j=>i.actions.onInputKeydown(j.nativeEvent)})]}),b&&$.length>0&&o.jsx(De,{slotContext:c,menuId:x})]})}export{Le as S};
