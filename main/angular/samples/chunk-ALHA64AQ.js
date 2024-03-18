import{v as B,w as O}from"./chunk-4H3ZUQSL.js";import{e as D,g as H,i as N,j as L,k as j,l as A}from"./chunk-MVYOJ6Z2.js";import"./chunk-QQFNZDI6.js";import"./chunk-ZWHZ7ZL7.js";import{Eb as r,Fb as F,Hb as E,Ib as I,Jb as k,Lb as g,Na as c,U as _,_ as f,da as v,db as h,hb as M,lb as p,ma as b,mb as d,na as x,nb as m,ob as o,pb as a,qb as T,sb as w,ub as y,vb as C}from"./chunk-J3YRPKZR.js";function W(e,t){if(e&1){let s=w();o(0,"au-component",2),y("auHidden",function(){let n=b(s).$implicit,l=C(2);return x(l.removeToast(n))}),r(1,"Simple toast"),a()}if(e&2){let s=t.$implicit;h("auAutoHide",s.autoHide)("auDelay",s.delay)}}function $(e,t){if(e&1&&(o(0,"div"),d(1,W,2,2,"au-component",1,p),a()),e&2){let s=t.$implicit,i=C();M("toast-container p-3 ",s,""),c(),m(i.toastContainerService.toastMap.get(s))}}function U(e,t){if(e&1&&(o(0,"option",6),r(1),a()),e&2){let s=t.$implicit;h("value",s.value),c(),F(s.label)}}var S=function(e){return e.topLeft="top-0 start-0",e.topCenter="top-0 start-50 translate-middle-x",e.topRight="top-0 end-0",e.middleLeft="top-50 start-0 translate-middle-y",e.middleCenter="top-50 start-50 translate-middle",e.middleRight="top-50 end-0 translate-middle-y",e.bottomLeft="bottom-0 start-0",e.bottomCenter="bottom-0 start-50 translate-middle-x",e.bottomRight="bottom-0 end-0",e}(S||{}),V=(()=>{let t=class t{constructor(){this.toastMap=new Map(Object.values(S).map(i=>[i,[]]))}add(i){this.toastMap.get(i.className)?.push(i)}remove(i){this.toastMap.set(i.className,this.toastMap.get(i.className).filter(n=>n!==i))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),q=(()=>{let t=class t{constructor(){this.toastContainerService=f(V)}removeToast(i){this.toastContainerService.remove(i)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=v({type:t,selectors:[["app-toast-container"]],standalone:!0,features:[g],decls:3,vars:0,consts:[["aria-live","polite","aria-atomic","true",1,"d-flex","position-relative","mt-2","w-100",2,"height","500px","background-color","gray"],["auToast","","auSlotHeader","I am header"],["auToast","","auSlotHeader","I am header",3,"auHidden","auAutoHide","auDelay"]],template:function(n,l){n&1&&(o(0,"div",0),d(1,$,3,3,"div",null,p),a()),n&2&&(c(),m(l.toastContainerService.toastMap.keys()))},dependencies:[B],encapsulation:2});let e=t;return e})(),Z=(()=>{let t=class t{constructor(){this.toastContainerService=f(V),this.positionList=Object.entries(S).map(i=>({value:i[1],label:i[0]})),this.position=this.positionList[0].value}addToast(){this.toastContainerService.add({autoHide:!0,delay:3e3,className:this.position})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=v({type:t,selectors:[["ng-component"]],standalone:!0,features:[g],decls:20,vars:1,consts:[[1,"mb-2"],[1,"d-flex","justify-content-between"],[1,"d-flex","form-group","align-items-center"],["for","positionSelect",1,"me-3"],["id","positionSelect",1,"form-select","w-auto",3,"ngModelChange","ngModel"],[1,"btn","btn-primary","addToast","ms-2",3,"click"],[3,"value"]],template:function(n,l){n&1&&(o(0,"p",0),r(1," To position toast wherever you want you should have a "),o(2,"code"),r(3,"toast-container"),a(),r(4," with a custom position defined by CSS classes. "),a(),o(5,"p",0),r(6,"To "),o(7,"strong"),r(8,"stack"),a(),r(9," toasts vertically, put them in the same container."),a(),o(10,"div",1)(11,"div",2)(12,"label",3),r(13,"Position: "),a(),o(14,"select",4),k("ngModelChange",function(u){return I(l.position,u)||(l.position=u),u}),d(15,U,2,2,"option",null,p),a(),o(17,"button",5),y("click",function(){return l.addToast()}),r(18,"Show toast"),a()()(),T(19,"app-toast-container")),n&2&&(c(14),E("ngModel",l.position),c(),m(l.positionList))},dependencies:[O,q,A,L,j,N,D,H],encapsulation:2});let e=t;return e})();export{S as ToastPositions,Z as default};
