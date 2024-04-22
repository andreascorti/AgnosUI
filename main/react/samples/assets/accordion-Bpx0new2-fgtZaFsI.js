import{r as h,j as c}from"./App-XNADZBio.js";import{u as J,S as z}from"./config-BUFy1TYO.js";import{a as y}from"./directive-CRCdIwrf-dEmCbYHa.js";import{w as K,r as ee,c as m,a as L,s as Q,m as te,n as ie,b as T,d as b,e as se,f as p,g as oe,h as ae,i as H}from"./directive-ClyvktyQ-DyzILLR9.js";import{c as ne}from"./baseTransitions-ctGJV3jG.js";import{t as $,a as u,b as d}from"./writables-DoU_XYTX-DYQSJslL.js";import{c as re}from"./collapse-CVjUhnIz-CIpjfoXg.js";import{e as de}from"./extendWidget-BVWUbsaC.js";function ce(e,i,a){let n;return i.length==2?(a=a??i[0],n=i.find(r=>r!==a)):i.length>2&&(n=i[0]),n&&e.forEach(r=>{r.state$().itemId!==n&&r.state$().itemVisible&&r.patch({itemVisible:!1})}),e}function M(e,i){return e.find(a=>a.state$().itemId===i)}const t={closeOthers:!1,onShown:p,onHidden:p,className:"",itemId:"",itemDestroyOnHide:!0,itemDisabled:!1,itemVisible:!1,itemAnimated:!0,itemTransition:async()=>{},itemHeadingTag:"",onItemShown:p,onItemHidden:p,onItemVisibleChange:p,slotItemStructure:void 0,slotItemBody:void 0,slotItemHeader:void 0,itemClass:"",itemHeaderClass:"",itemButtonClass:"",itemBodyContainerClass:"",itemBodyClass:""},U={itemId:t.itemId,itemDestroyOnHide:t.itemDestroyOnHide,itemDisabled:t.itemDisabled,itemVisible:t.itemVisible,itemAnimated:t.itemAnimated,itemTransition:t.itemTransition,onItemShown:t.onItemShown,onItemHidden:t.onItemHidden,onItemVisibleChange:t.onItemVisibleChange,slotItemStructure:t.slotItemStructure,slotItemBody:t.slotItemBody,slotItemHeader:t.slotItemHeader,itemClass:t.itemClass,itemHeaderClass:t.itemHeaderClass,itemButtonClass:t.itemButtonClass,itemBodyContainerClass:t.itemBodyContainerClass,itemBodyClass:t.itemBodyClass,itemHeadingTag:t.itemHeadingTag},G=Object.keys(U),me={closeOthers:$,onShown:u,onHidden:u,itemId:d,itemDestroyOnHide:$,itemDisabled:$,itemVisible:$,itemAnimated:$,itemTransition:u,onItemShown:u,onItemHidden:u,onItemVisibleChange:u,itemClass:d,itemHeaderClass:d,itemButtonClass:d,itemBodyContainerClass:d,itemBodyClass:d,itemHeadingTag:d},le={itemId:d,itemDestroyOnHide:$,itemDisabled:$,itemVisible:$,itemAnimated:$,itemTransition:u,onItemShown:u,onItemHidden:u,onItemVisibleChange:u,itemClass:d,itemHeaderClass:d,itemButtonClass:d,itemBodyContainerClass:d,itemBodyClass:d,itemHeadingTag:d};function ue(e,i,a){const[{itemBodyClass$:n,itemButtonClass$:r,itemBodyContainerClass$:I,itemHeaderClass$:v,itemAnimated$:V,itemTransition$:x,itemDestroyOnHide$:O,onItemShown$:j,onItemHidden$:E,onItemVisibleChange$:k,itemVisible$:l,itemId$:P,itemDisabled$:f,...N},_]=K(U,a,le),B=L(!1),R=m(()=>oe()),g=m(()=>P()||R()),W=m(()=>O()===!1||!S.state$().hidden),S=ne({props:{transition:x,visible:l,onVisibleChange:k,animated:V,animatedOnInit:!1,initDone:B,onHidden:()=>{i()(g()),E()()},onShown:()=>{e()(g()),j()()}}}),A=()=>{f()||l.update(D=>!D)},w=b(()=>({attributes:{id:m(()=>`${g()}-toggle`),"aria-expanded":m(()=>`${l()}`),"aria-disabled":m(()=>`${f()}`),"aria-controls":m(()=>`${g()}-body-container`),disabled:f},classNames:{collapsed:m(()=>!l())},events:{click:A}}));return{...Q({itemVisible$:l,itemId$:g,shouldBeInDOM$:W,itemDisabled$:f,itemBodyClass$:n,itemButtonClass$:r,itemBodyContainerClass$:I,itemHeaderClass$:v,...N}),patch:_,actions:{click:A},api:{initDone:()=>{B.set(!0)},collapse:()=>{l.set(!1)},expand:()=>{l.set(!0)},toggle:()=>{l.update(D=>!D)}},directives:{toggleDirective:w,buttonDirective:T(w,b(()=>({attributes:{type:"button",class:r()}}))),headerDirective:b(()=>({attributes:{class:v()}})),bodyDirective:b(()=>({attributes:{class:n()}})),bodyContainerDirective:T(ae(S.directives.directive),b(()=>({attributes:{id:m(()=>`${g()}-body-container`),class:I(),"aria-labelledby":m(()=>`${g()}-toggle`)}}))),accordionItemDirective:p}}}function Ie(e){const[{closeOthers$:i,onShown$:a,onHidden$:n,className$:r,itemId$:I,itemAnimated$:v,itemClass$:V,itemDisabled$:x,itemVisible$:O,itemTransition$:j,itemDestroyOnHide$:E,itemBodyClass$:k,itemButtonClass$:l,itemBodyContainerClass$:P,itemHeaderClass$:f,itemHeadingTag$:N,onItemVisibleChange$:_,onItemHidden$:B,onItemShown$:R,slotItemStructure$:g,slotItemBody$:W,slotItemHeader$:S,...A},w]=K(t,e,me),D={itemId:I,itemClass:V,itemAnimated:v,itemDisabled:x,itemVisible:O,itemTransition:j,itemDestroyOnHide:E,itemBodyClass:k,itemButtonClass:l,itemBodyContainerClass:P,itemHeaderClass:f,itemHeadingTag:N,onItemVisibleChange:_,onItemHidden:B,onItemShown:R,slotItemStructure:g,slotItemBody:W,slotItemHeader:S},C=ee(),F=m(()=>{const s=[];return C().forEach(o=>{o.state$().itemVisible&&s.push(o.state$().itemId)}),s}),q=L(F()[0]),Y=m(()=>{i()&&(ce(C(),F(),q()),q.set(F()[0]))}),Z=m(()=>{Y()});return{...Q({itemsWidget$:C,className$:r,...A}),patch:w,actions:{},api:{expand:s=>{var o;(o=M(C(),s))==null||o.api.expand()},collapse:s=>{var o;(o=M(C(),s))==null||o.api.collapse()},toggle:s=>{var o;(o=M(C(),s))==null||o.api.toggle()},expandAll:()=>{C().forEach(s=>s.api.expand())},collapseAll:()=>{C().forEach(s=>s.api.collapse())},registerItem:s=>{const o=ue(a,n,{config:te(G,ie(G,s==null?void 0:s.config),D),props:s==null?void 0:s.props});return o.directives.accordionItemDirective=T(()=>({destroy:C.register(o)}),b(()=>({attributes:{class:o.stores.itemClass$,id:o.stores.itemId$}}))),o}},directives:{accordionDirective:T(se(Z),b(()=>({attributes:{class:r()},classNames:{"au-accordion":!0}})))}}}const ge={itemTransition:re},Ce=de(Ie,{},{},ge),$e=Ce,be=e=>{const a=new RegExp("^h[1-6]$").test(e.headerTag)?e.headerTag:"h2";return c.jsx(a,{...y([H,"accordion-header"],e.directive),children:e.children})},he=e=>c.jsx("div",{...y([H,"accordion-collapse"],e.widget.directives.bodyContainerDirective),children:c.jsx("div",{...y([H,"accordion-body"],e.widget.directives.bodyDirective),children:c.jsx(z,{slotContent:e.state.slotItemBody,props:e})})}),X=h.createContext({}),ve=e=>c.jsxs(c.Fragment,{children:[c.jsx(be,{directive:e.widget.directives.headerDirective,headerTag:e.state.itemHeadingTag,children:c.jsx("button",{...y([H,"accordion-button"],e.widget.directives.buttonDirective),children:c.jsx(z,{slotContent:e.state.slotItemHeader,props:e})})}),e.state.shouldBeInDOM&&c.jsx(he,{...e})]}),fe={slotItemStructure:ve},Te=h.forwardRef(function(i,a){const{registerItem:n}=h.useContext(X),[r,I]=J(n,i,null,{...fe}),v={state:r,widget:I};return h.useImperativeHandle(a,()=>I.api,[]),h.useEffect(()=>{I.api.initDone()},[]),c.jsx("div",{...y([H,`accordion-item ${r.itemClass}`],I.directives.accordionItemDirective),children:c.jsx(z,{slotContent:r.slotItemStructure,props:v})})}),Ve=h.forwardRef(function(i,a){const n=J($e,i,"accordion")[1];return h.useImperativeHandle(a,()=>n.api,[]),c.jsx(X.Provider,{value:n.api,children:c.jsx("div",{...y([H,"accordion"],n.directives.accordionDirective),children:i.children})})});export{Ve as A,Te as a};
