import{w as V,r as z,s as W,m as L,n as M,e as w,g as $,h as q,j as h,k as G,l as J}from"./directive-DCYlDznf-D6XLKtM9.js";import{c as K}from"./baseTransitions-BApb56W_.js";import{a7 as i,ab as F,aa as E,$ as P}from"./AppCommon-D_XpGT3A.js";import{t as f,b as C,a}from"./writables-DoU_XYTX-C4HX5Cd_.js";function Q(u,s,d){let b;return s.length==2?(d=d??s[0],b=s.find(c=>c!==d)):s.length>2&&(b=s[0]),b&&u.forEach(c=>{c.stores.id$()!==b&&c.stores.visible$()&&c.patch({visible:!1})}),u}function _(u,s){return u.find(d=>d.stores.id$()===s)}const r={closeOthers:!1,onItemShown:h,onItemHidden:h,className:"",itemDestroyOnHide:!0,itemAnimated:!0,itemTransition:async()=>{},itemHeadingTag:"",itemClassName:"",itemHeaderClassName:"",itemButtonClassName:"",itemBodyContainerClassName:"",itemBodyClassName:""},O={id:"",destroyOnHide:r.itemDestroyOnHide,disabled:!1,visible:!1,animated:r.itemAnimated,transition:r.itemTransition,onShown:h,onHidden:h,onVisibleChange:h,className:r.itemClassName,headerClassName:r.itemHeaderClassName,buttonClassName:r.itemButtonClassName,bodyContainerClassName:r.itemBodyContainerClassName,bodyClassName:r.itemBodyClassName,headingTag:r.itemHeadingTag},R=Object.keys(O);function se(){return{...r}}const U={closeOthers:f,onItemShown:C,onItemHidden:C,className:a,itemDestroyOnHide:f,itemAnimated:f,itemTransition:C,itemClassName:a,itemHeaderClassName:a,itemButtonClassName:a,itemBodyContainerClassName:a,itemBodyClassName:a,itemHeadingTag:a},X={id:a,destroyOnHide:f,disabled:f,visible:f,animated:f,transition:C,onShown:C,onHidden:C,onVisibleChange:C,className:a,headerClassName:a,buttonClassName:a,bodyContainerClassName:a,bodyClassName:a,headingTag:a};function Y(u){const[{bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:b,headerClassName$:c,animated$:v,transition$:S,destroyOnHide$:B,onShown$:N,onHidden$:y,onVisibleChange$:H,visible$:l,id$:n,disabled$:g,...D},T]=V(O,u,X),A=F(!1),e=i(()=>G()),t=i(()=>n()||e()),p=K({props:{transition:S,visible:l,onVisibleChange:H,animated:v,animatedOnInit:!1,initDone:A,onHidden:()=>{y()()},onShown:()=>{N()()}}}),k=i(()=>B()===!1||!p.stores.hidden$()),I=()=>{g()||l.update(x=>!x)},m=$(()=>({attributes:{id:i(()=>`${t()}-toggle`),"aria-expanded":i(()=>`${l()}`),"aria-disabled":i(()=>`${g()}`),"aria-controls":i(()=>`${t()}-body-container`),disabled:g},classNames:{collapsed:i(()=>!l())},events:{click:I}})),o=J(p.directives.directive),j=$(()=>({attributes:{id:i(()=>`${t()}-body-container`),class:b(),"aria-labelledby":i(()=>`${t()}-toggle`)}}));return{...W({visible$:l,id$:t,shouldBeInDOM$:k,disabled$:g,bodyClassName$:s,buttonClassName$:d,bodyContainerClassName$:b,headerClassName$:c,...D}),patch:T,actions:{click:I},api:{initDone:()=>{A.set(!0)},collapse:()=>{l.set(!1)},expand:()=>{l.set(!0)},toggle:()=>{l.update(x=>!x)}},directives:{toggleDirective:m,buttonDirective:w(m,$(()=>({attributes:{type:"button",class:d()}}))),headerDirective:$(()=>({attributes:{class:c()}})),bodyDirective:$(()=>({attributes:{class:s()}})),transitionDirective:o,bodyContainerAttrsDirective:j,bodyContainerDirective:w(o,j),itemDirective:h}}}function Z(u=Y,s=R,d=r,b=U){return c=>{const[v,S]=V(d,c,b),{closeOthers$:B,onItemShown$:N,onItemHidden$:y,className$:H}=v,l=Object.fromEntries(Object.entries(v).filter(e=>e[0].startsWith("item")).map(e=>[e[0].charAt(4).toLowerCase()+e[0].slice(5,-1),e[1]])),n=z(),g=i(()=>{const e=[];return n().forEach(t=>{t.stores.visible$()&&e.push(t.stores.id$())}),e}),D=F(g()[0]),T=i(()=>{B()&&(Q(n(),g(),D()),D.set(g()[0]))}),A=i(()=>{T()});return{...W({itemWidgets$:n,className$:H}),patch:S,actions:{},api:{expand:e=>{var t;(t=_(n(),e))==null||t.api.expand()},collapse:e=>{var t;(t=_(n(),e))==null||t.api.collapse()},toggle:e=>{var t;(t=_(n(),e))==null||t.api.toggle()},expandAll:()=>{n().forEach(e=>e.api.expand())},collapseAll:()=>{n().forEach(e=>e.api.collapse())},registerItem:e=>{const t=s,p=L(t,M(t,e==null?void 0:e.config),l),[{onHidden$:k,onShown$:I}]=V({onHidden:O.onHidden,onShown:O.onShown},{config:p,props:e==null?void 0:e.props}),m=u({config:p,props:{...e==null?void 0:e.props,onHidden:E(P(()=>{var o;y()(m.stores.id$()),(o=k())==null||o()}),o=>{y.set(o)}),onShown:E(P(()=>{var o;N()(m.stores.id$()),(o=I())==null||o()}),o=>{N.set(o)})}});return m.directives.itemDirective=w(()=>({destroy:n.register(m)}),$(()=>({attributes:{class:m.stores.className$,id:m.stores.id$}}))),m}},directives:{accordionDirective:w(q(A),$(()=>({attributes:{class:H()},classNames:{"au-accordion":!0}})))}}}}const oe=Z();export{oe as a,Y as c,Z as f,se as g};
