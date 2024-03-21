import{S as Z,i as x,s as ee,c as N,m as T,t as q,d as E,g as F,h as le,j as ie,k as O,b as D,f as B,e as g,l as M,p as G,a,q as H,r as b,u as A,v as J,w as X,x as ae,y as K}from"./AppCommon-B0o63QXa.js";import{B as L}from"./body-DBRiX_SX.js";import{w as te}from"./index-CGovn2H_.js";import{A as se,I as z}from"./Item-CqTpffd_.js";import"./stores-DWGGzlfa.js";import"./baseTransitions-Bz75Pr4B.js";import"./writables-DoU_XYTX-BIu_hqgK.js";import"./promise-CY2U8bTP-DQ8Un8Cc.js";import"./directive-Bt_Lk6nS.js";import"./collapse-BQC9zBIz-DCoTFh59.js";import"./cssTransitions-KtCtrXBG.js";import"./config-BYJKBt5K.js";import"./Slot-JnYlUU0G.js";function Q(e){let l,t,c,o,s,u,i,n,m;return{c(){l=g("div"),t=g("div"),c=M(L),a(t,"class",o="accordion-body "+e[6].itemBodyClass),a(l,"class",s="accordion-collapse "+e[6].itemBodyContainerClass),a(l,"id",u=e[6].itemId+"-collapse"),a(l,"aria-labelledby",i=e[6].itemId+"-toggle")},m(d,r){D(d,l,r),b(l,t),b(t,c),n||(m=K(e[7].directives.collapseDirective(l)),n=!0)},p(d,r){r&64&&o!==(o="accordion-body "+d[6].itemBodyClass)&&a(t,"class",o),r&64&&s!==(s="accordion-collapse "+d[6].itemBodyContainerClass)&&a(l,"class",s),r&64&&u!==(u=d[6].itemId+"-collapse")&&a(l,"id",u),r&64&&i!==(i=d[6].itemId+"-toggle")&&a(l,"aria-labelledby",i)},d(d){d&&B(l),n=!1,m()}}}function oe(e){let l,t,c,o=e[6].itemVisible?"opened":"collapsed",s,u,i,n,m,d,r,V,w,C,j,v,p,I,f,$=e[6].shouldBeInDOM&&Q(e);return{c(){l=g("div"),t=g("p"),c=M("First panel - "),s=M(o),u=O(),i=g("button"),n=M("Toggle first"),v=O(),$&&$.c(),p=G(),a(t,"class","m-0"),a(i,"type","button"),a(i,"id",m=e[6].itemId+"-toggle"),a(i,"class",d="btn btn-link p-0 "+e[6].itemButtonClass),i.disabled=r=e[6].itemDisabled,a(i,"aria-controls",V=e[6].itemId+"-collapse"),a(i,"aria-disabled",w=e[6].itemDisabled),a(i,"aria-expanded",C=e[6].itemVisible),H(i,"collapsed",!e[6].itemVisible),a(l,"class",j=e[6].itemHeaderClass+" accordion-button accordion-header custom-header justify-content-between"),a(l,"role","heading"),a(l,"aria-level",2),H(l,"collapsed",!e[6].itemVisible)},m(S,_){D(S,l,_),b(l,t),b(t,c),b(t,s),b(l,u),b(l,i),b(i,n),D(S,v,_),$&&$.m(S,_),D(S,p,_),I||(f=A(i,"click",function(){J(e[7].actions.click)&&e[7].actions.click.apply(this,arguments)}),I=!0)},p(S,_){e=S,_&64&&o!==(o=e[6].itemVisible?"opened":"collapsed")&&X(s,o),_&64&&m!==(m=e[6].itemId+"-toggle")&&a(i,"id",m),_&64&&d!==(d="btn btn-link p-0 "+e[6].itemButtonClass)&&a(i,"class",d),_&64&&r!==(r=e[6].itemDisabled)&&(i.disabled=r),_&64&&V!==(V=e[6].itemId+"-collapse")&&a(i,"aria-controls",V),_&64&&w!==(w=e[6].itemDisabled)&&a(i,"aria-disabled",w),_&64&&C!==(C=e[6].itemVisible)&&a(i,"aria-expanded",C),_&64&&H(i,"collapsed",!e[6].itemVisible),_&64&&j!==(j=e[6].itemHeaderClass+" accordion-button accordion-header custom-header justify-content-between")&&a(l,"class",j),_&64&&H(l,"collapsed",!e[6].itemVisible),e[6].shouldBeInDOM?$?$.p(e,_):($=Q(e),$.c(),$.m(p.parentNode,p)):$&&($.d(1),$=null)},d(S){S&&(B(l),B(v),B(p)),$&&$.d(S),I=!1,f()}}}function R(e){let l,t,c,o,s,u,i,n,m;return{c(){l=g("div"),t=g("div"),c=M(L),a(t,"class",o="accordion-body "+e[6].itemBodyClass),a(l,"class",s="accordion-collapse "+e[6].itemBodyContainerClass),a(l,"id",u=e[6].itemId+"-collapse"),a(l,"aria-labelledby",i=e[6].itemId+"-toggle")},m(d,r){D(d,l,r),b(l,t),b(t,c),n||(m=K(e[7].directives.collapseDirective(l)),n=!0)},p(d,r){r&64&&o!==(o="accordion-body "+d[6].itemBodyClass)&&a(t,"class",o),r&64&&s!==(s="accordion-collapse "+d[6].itemBodyContainerClass)&&a(l,"class",s),r&64&&u!==(u=d[6].itemId+"-collapse")&&a(l,"id",u),r&64&&i!==(i=d[6].itemId+"-toggle")&&a(l,"aria-labelledby",i)},d(d){d&&B(l),n=!1,m()}}}function ne(e){let l,t,c,o,s,u,i,n,m,d,r,V,w,C,j=e[1]?"En":"Dis",v,p,I,f,$,S,_,Y,P,h=e[6].shouldBeInDOM&&R(e);return{c(){l=g("div"),t=g("p"),t.textContent="Second panel",c=O(),o=g("div"),s=g("button"),u=M("Toggle second"),w=O(),C=g("button"),v=M(j),p=M("able third"),I=O(),f=g("button"),f.textContent="Collapse all",S=O(),h&&h.c(),_=G(),a(t,"class","m-0"),a(s,"type","button"),a(s,"class",i="btn btn-sm btn-outline-primary "+e[6].itemButtonClass),a(s,"id",n=e[6].itemId+"-toggle"),s.disabled=m=e[6].itemDisabled,a(s,"aria-controls",d=e[6].itemId+"-collapse"),a(s,"aria-disabled",r=e[6].itemDisabled),a(s,"aria-expanded",V=e[6].itemVisible),H(s,"collapsed",!e[6].itemVisible),a(C,"type","button"),a(C,"class","btn btn-sm btn-outline-secondary"),a(f,"type","button"),a(f,"class","btn btn-sm btn-outline-danger"),a(o,"class","d-flex flex-wrap gap-2"),a(l,"class",$=e[6].itemHeaderClass+" accordion-button accordion-header custom-header justify-content-between"),a(l,"role","heading"),a(l,"aria-level",2),H(l,"collapsed",!e[6].itemVisible)},m(y,k){D(y,l,k),b(l,t),b(l,c),b(l,o),b(o,s),b(s,u),b(o,w),b(o,C),b(C,v),b(C,p),b(o,I),b(o,f),D(y,S,k),h&&h.m(y,k),D(y,_,k),Y||(P=[A(s,"click",function(){J(e[7].actions.click)&&e[7].actions.click.apply(this,arguments)}),A(C,"click",e[3]),A(f,"click",e[4])],Y=!0)},p(y,k){e=y,k&64&&i!==(i="btn btn-sm btn-outline-primary "+e[6].itemButtonClass)&&a(s,"class",i),k&64&&n!==(n=e[6].itemId+"-toggle")&&a(s,"id",n),k&64&&m!==(m=e[6].itemDisabled)&&(s.disabled=m),k&64&&d!==(d=e[6].itemId+"-collapse")&&a(s,"aria-controls",d),k&64&&r!==(r=e[6].itemDisabled)&&a(s,"aria-disabled",r),k&64&&V!==(V=e[6].itemVisible)&&a(s,"aria-expanded",V),k&64&&H(s,"collapsed",!e[6].itemVisible),k&2&&j!==(j=e[1]?"En":"Dis")&&X(v,j),k&64&&$!==($=e[6].itemHeaderClass+" accordion-button accordion-header custom-header justify-content-between")&&a(l,"class",$),k&64&&H(l,"collapsed",!e[6].itemVisible),e[6].shouldBeInDOM?h?h.p(e,k):(h=R(e),h.c(),h.m(_.parentNode,_)):h&&(h.d(1),h=null)},d(y){y&&(B(l),B(S),B(_)),h&&h.d(y),Y=!1,ae(P)}}}function U(e){let l;return{c(){l=g("p"),l.textContent="[I'm disabled]",a(l,"class","text-muted m-0 small")},m(t,c){D(t,l,c)},d(t){t&&B(l)}}}function W(e){let l,t,c,o,s,u,i,n,m;return{c(){l=g("div"),t=g("div"),c=M(L),a(t,"class",o="accordion-body "+e[6].itemBodyClass),a(l,"class",s="accordion-collapse "+e[6].itemBodyContainerClass),a(l,"id",u=e[6].itemId+"-collapse"),a(l,"aria-labelledby",i=e[6].itemId+"-toggle")},m(d,r){D(d,l,r),b(l,t),b(t,c),n||(m=K(e[7].directives.collapseDirective(l)),n=!0)},p(d,r){r&64&&o!==(o="accordion-body "+d[6].itemBodyClass)&&a(t,"class",o),r&64&&s!==(s="accordion-collapse "+d[6].itemBodyContainerClass)&&a(l,"class",s),r&64&&u!==(u=d[6].itemId+"-collapse")&&a(l,"id",u),r&64&&i!==(i=d[6].itemId+"-toggle")&&a(l,"aria-labelledby",i)},d(d){d&&B(l),n=!1,m()}}}function de(e){let l,t,c,o,s,u,i,n,m,d,r,V,w,C,j,v=e[6].itemDisabled&&U(),p=e[6].shouldBeInDOM&&W(e);return{c(){l=g("div"),t=g("button"),c=M("Third panel"),d=O(),v&&v.c(),V=O(),p&&p.c(),w=G(),a(t,"type","button"),a(t,"class",o="p-0 btn btn-link container-fluid text-start "+e[6].itemButtonClass),a(t,"id",s=e[6].itemId+"-toggle"),t.disabled=u=e[6].itemDisabled,a(t,"aria-disabled",i=e[6].itemDisabled),a(t,"aria-controls",n=e[6].itemId+"-collapse"),a(t,"aria-expanded",m=e[6].itemVisible),H(t,"collapsed",!e[6].itemVisible),a(l,"class",r="accordion-header "+e[6].itemHeaderClass+" accordion-button custom-header justify-content-between"),a(l,"role","heading"),a(l,"aria-level",2),H(l,"collapsed",!e[6].itemVisible)},m(I,f){D(I,l,f),b(l,t),b(t,c),b(l,d),v&&v.m(l,null),D(I,V,f),p&&p.m(I,f),D(I,w,f),C||(j=A(t,"click",function(){J(e[7].actions.click)&&e[7].actions.click.apply(this,arguments)}),C=!0)},p(I,f){e=I,f&64&&o!==(o="p-0 btn btn-link container-fluid text-start "+e[6].itemButtonClass)&&a(t,"class",o),f&64&&s!==(s=e[6].itemId+"-toggle")&&a(t,"id",s),f&64&&u!==(u=e[6].itemDisabled)&&(t.disabled=u),f&64&&i!==(i=e[6].itemDisabled)&&a(t,"aria-disabled",i),f&64&&n!==(n=e[6].itemId+"-collapse")&&a(t,"aria-controls",n),f&64&&m!==(m=e[6].itemVisible)&&a(t,"aria-expanded",m),f&64&&H(t,"collapsed",!e[6].itemVisible),e[6].itemDisabled?v||(v=U(),v.c(),v.m(l,null)):v&&(v.d(1),v=null),f&64&&r!==(r="accordion-header "+e[6].itemHeaderClass+" accordion-button custom-header justify-content-between")&&a(l,"class",r),f&64&&H(l,"collapsed",!e[6].itemVisible),e[6].shouldBeInDOM?p?p.p(e,f):(p=W(e),p.c(),p.m(w.parentNode,w)):p&&(p.d(1),p=null)},d(I){I&&(B(l),B(V),B(w)),v&&v.d(),p&&p.d(I),C=!1,j()}}}function re(e){let l,t,c,o,s,u;return l=new z({props:{$$slots:{itemStructure:[oe,({state:i,widget:n})=>({6:i,7:n}),({state:i,widget:n})=>(i?64:0)|(n?128:0)]},$$scope:{ctx:e}}}),c=new z({props:{$$slots:{itemStructure:[ne,({state:i,widget:n})=>({6:i,7:n}),({state:i,widget:n})=>(i?64:0)|(n?128:0)]},$$scope:{ctx:e}}}),s=new z({props:{itemDisabled:e[1],$$slots:{itemStructure:[de,({state:i,widget:n})=>({6:i,7:n}),({state:i,widget:n})=>(i?64:0)|(n?128:0)]},$$scope:{ctx:e}}}),{c(){N(l.$$.fragment),t=O(),N(c.$$.fragment),o=O(),N(s.$$.fragment)},m(i,n){T(l,i,n),D(i,t,n),T(c,i,n),D(i,o,n),T(s,i,n),u=!0},p(i,n){const m={};n&448&&(m.$$scope={dirty:n,ctx:i}),l.$set(m);const d={};n&451&&(d.$$scope={dirty:n,ctx:i}),c.$set(d);const r={};n&2&&(r.itemDisabled=i[1]),n&448&&(r.$$scope={dirty:n,ctx:i}),s.$set(r)},i(i){u||(q(l.$$.fragment,i),q(c.$$.fragment,i),q(s.$$.fragment,i),u=!0)},o(i){E(l.$$.fragment,i),E(c.$$.fragment,i),E(s.$$.fragment,i),u=!1},d(i){i&&(B(t),B(o)),F(l,i),F(c,i),F(s,i)}}}function ue(e){let l,t,c={$$slots:{default:[re]},$$scope:{ctx:e}};return l=new se({props:c}),e[5](l),{c(){N(l.$$.fragment)},m(o,s){T(l,o,s),t=!0},p(o,[s]){const u={};s&259&&(u.$$scope={dirty:s,ctx:o}),l.$set(u)},i(o){t||(q(l.$$.fragment,o),t=!0)},o(o){E(l.$$.fragment,o),t=!1},d(o){e[5](null),F(l,o)}}}function me(e,l,t){let c,o;const s=te(!1);le(e,s,m=>t(1,c=m));const u=()=>s.update(m=>!m),i=()=>o.api.collapseAll();function n(m){ie[m?"unshift":"push"](()=>{o=m,t(0,o)})}return[o,c,s,u,i,n]}class he extends Z{constructor(l){super(),x(this,l,me,ue,ee,{})}}export{he as default};
