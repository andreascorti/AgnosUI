import{A as y,O as E}from"./chunk-KNR2FEPD.js";import{da as x,ea as F,fa as S,ha as R,ma as k}from"./chunk-PT4WDSOZ.js";import"./chunk-XPVCXEMV.js";import{Ab as i,Bb as v,Cb as C,Hb as _,Ma as a,_a as f,ab as u,ba as p,eb as b,hb as s,lb as e,mb as n,nb as g,qb as d}from"./chunk-CKC7SV4U.js";function M(r,m){r&1&&(e(0,"div",3),i(1,"Thanks!"),n())}function T(r,m){r&1&&(e(0,"div",4),i(1,"Please rate us"),n())}var l=class l{constructor(){this.ctrl=new S(0,x.min(1))}toggle(){this.ctrl.disabled?this.ctrl.enable():this.ctrl.disable()}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=p({type:l,selectors:[["ng-component"]],standalone:!0,features:[_],decls:17,vars:8,consts:[["id","ratingLabel",1,"form-label"],["auAriaLabelledBy","ratingLabel",3,"auRating","formControl"],["id","form-msg",1,"form-text","small"],[1,"text-success"],[1,"text-danger-emphasis"],["id","form-model"],[1,"d-flex","flex-wrap","gap-2"],["id","form-btn-enable",3,"click"],["id","form-btn-clear",1,"btn","btn-sm","btn-outline-primary",3,"click"]],template:function(o,t){o&1&&(e(0,"label",0),i(1,"Rating of your experience"),n(),g(2,"br")(3,"div",1),e(4,"div",2),f(5,M,2,0,"div",3)(6,T,2,0,"div",4),n(),e(7,"pre"),i(8,"Model: "),e(9,"span",5)(10,"b"),i(11),n()()(),e(12,"div",6)(13,"button",7),d("click",function(){return t.toggle()}),i(14),n(),e(15,"button",8),d("click",function(){return t.ctrl.setValue(0)}),i(16,"Clear"),n()()),o&2&&(a(3),u("formControl",t.ctrl),a(2),s(t.ctrl.valid?5:-1),a(),s(t.ctrl.invalid?6:-1),a(5),v(t.ctrl.value),a(2),b("btn btn-sm btn-outline-",t.ctrl.disabled?"danger":"success",""),a(),C(" ",t.ctrl.disabled?"control disabled":" control enabled"," "))},dependencies:[E,y,k,F,R],encapsulation:2});var c=l;export{c as default};
