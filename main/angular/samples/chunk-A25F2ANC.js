import{a as y,b as M,w as v}from"./chunk-4H3ZUQSL.js";import"./chunk-MVYOJ6Z2.js";import{m as k,n as x}from"./chunk-QQFNZDI6.js";import"./chunk-ZWHZ7ZL7.js";import{Db as m,Eb as o,Fb as w,Lb as C,Na as b,ab as h,da as g,g as _,ma as s,na as r,ob as n,pb as i,sb as u,ub as c,vb as d}from"./chunk-J3YRPKZR.js";function V(a,t){if(a&1){let p=u();n(0,"button",5),c("click",function(){s(p),d();let e=m(5);return r(e.api.close(!0))}),o(1,"Yes"),i(),n(2,"button",6),c("click",function(){s(p),d();let e=m(5);return r(e.api.close(!1))}),o(3,"No"),i()}}var A=(()=>{let t=class t{constructor(){this.message=""}show(l){return _(this,null,function*(){this.message="";let e=yield l.api.open();e===x?this.message="You clicked on the close button.":e===k?this.message="You clicked outside the modal.":this.message=`You answered the question with "${e?"Yes":"No"}".`})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g({type:t,selectors:[["ng-component"]],standalone:!0,features:[C],decls:8,vars:1,consts:[["modal",""],["type","button",1,"btn","btn-primary",3,"click"],["data-testid","message",1,"mt-3"],["auModal","","auSlotTitle","Save changes"],["auModalFooter",""],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,f){if(e&1){let D=u();n(0,"button",1),c("click",function(){s(D);let S=m(5);return r(f.show(S))}),o(1,"Launch demo modal"),i(),n(2,"div",2),o(3),i(),n(4,"au-component",3,0),o(6," Do you want to save your changes? "),h(7,V,4,0,"ng-template",4),i()}e&2&&(b(3),w(f.message))},dependencies:[v,M,y],encapsulation:2});let a=t;return a})();export{A as default};
