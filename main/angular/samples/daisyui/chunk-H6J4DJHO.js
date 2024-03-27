import{$ as Te,$a as Qe,Aa as qe,Ca as ze,Ia as Ze,Q as je,T as Ee,W as w,X as Me,Y as We,Za as Be,_ as me,_a as He,a as b,ab as Ke,b as C,ba as ye,bb as Ge,c as k,d as D,e as Z,f as P,fa as re,g as be,ga as ve,ib as Xe,ka as oe,ma as xe,na as Ue,rb as Ye,sb as Je,za as Ce}from"./chunk-IMYMQYRV.js";var et,fe=typeof Symbol=="function"&&Symbol.observable||"@@observable",$e=Symbol(),F=()=>{},ae=()=>{};ae.unsubscribe=ae;var Se=(e,t)=>{let s=e?e[t]:null;return typeof s=="function"?s.bind(e):F},nt=e=>({next:typeof e=="function"?e.bind(null):Se(e,"next"),pause:Se(e,"pause"),resume:Se(e,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),it=function(){return this},rt=e=>{if(!e)return ae;if(e.unsubscribe===e)return e;let t=typeof e=="function"?()=>e():()=>e.unsubscribe();return t.unsubscribe=t,t},Ne=new WeakSet,wt=e=>{let t=e.subscribe;return Ne.has(t)||(t=(...s)=>rt(e.subscribe(...s)),Ne.add(t)),t},Ie=e=>{let t="subscribe"in e?e:e[fe]();return wt(t)},Nt=e=>{let t;return e(s=>t=s)(),t};function E(e,t){let s=Ie(e),n=Object.assign(()=>de(n),t,{subscribe:s,[fe]:it});return n}var tt=function(e){this.set(e(lt(()=>de(this))))};function ee(e,t){return E(e,typeof t=="function"?{set:t,update:tt}:C(b({},t),{set:t?.set??F,update:t?.update??(t?.set?tt:F)}))}var A=Symbol(),ot=Symbol(),we=!1,J=new Set,Dt=1e3,at=e=>{if(e>Dt)throw new Error("reached maximum number of store changes in one shot")},j=e=>{let t=!we;t&&(we=!0);try{return e()}finally{if(t)try{let s=new Map;for(let n of J){let i=s.get(n)??0;at(i),s.set(n,i+1),J.delete(n),n[ot]()}}finally{J.clear(),we=!1}}},ct=e=>Nt(Ie(e)),V=ct,de=e=>V(e),st=e=>({[e]:!0,[e-1]:!1,0:!1}),ce=Symbol(),Oe=(e,t)=>Object.is(e,t)&&(!e||typeof e!="object")&&typeof e!="function",le=class{#s;#n;#t;#e;#i;#o;#c;constructor(t){this.#s=new Set,this.#n=null,this.#t=!1,this.#e=1,this.#o=st(1),this.#c=new WeakMap,this[et]=!1,this.#i=t}#a(){this.#n=rt(this.onUse())}#r(){let t=this.#n;t&&(this.#n=null,t())}[(et=ce,ot)](){let t=this.#e;for(let s of[...this.#s]){if(this.#t||this.#e!==t)return;s._valueIndex!==0&&this.#l(s)}}[A](){}#l(t){let s=this.#o,n=this.#e,i=this.#i,r=s[t._valueIndex];r==null&&(r=!!this.equal(t._value,i),s[t._valueIndex]=r),t._valueIndex=n,r?!this.#t&&t._paused&&(t._paused=!1,t.resume()):(t._value=i,t._paused=!1,t.next(i))}equal(t,s){return!this.notEqual(t,s)}notEqual(t,s){return!Oe(t,s)}pauseSubscribers(){if(!this.#t){this.#t=!0,J.delete(this);for(let t of[...this.#s])t._valueIndex===0||t._paused||(t._paused=!0,t.pause())}}resumeSubscribers(){this.#t&&(this.#t=!1,j(()=>{J.add(this)}))}set(t){let s=this[ce];if(s||!this.equal(this.#i,t)){let n=this.#e+1;this.#e=n,this.#i=t,this.#o=st(n),s&&delete this.#o[n-1],this.pauseSubscribers()}this.resumeSubscribers()}update(t){this.set(t(this.#i))}onUse(){}subscribe(t){let s=nt(t),n=t?.[$e];if(n){let r=this.#c.get(n);r&&(s._value=r._value,s._valueIndex=r._valueIndex)}this.#s.add(s),j(()=>{this.#s.size==1?this.#a():this[A]()}),this.#l(s);let i=()=>{let r=this.#s.delete(s);s.next=F,s.pause=F,s.resume=F,r&&(this.#c.set(i,s),this.#s.size===0&&this.#r())};return i[A]=()=>{this[A](),this.#l(s)},i.unsubscribe=i,i}[fe](){return this}};function $t(e){let t=s=>(s?.[$e]||nt(s).next(e),ae);return Ne.add(t),Object.assign(()=>e,{subscribe:t,[fe]:it})}var ue=class extends le{constructor(t){super(t)}set(t){super.set(t)}update(t){super.update(t)}},Re=(e,t)=>{let{onUse:s,equal:n,notEqual:i}=t;return s&&(e.onUse=function(){let r=o=>this.set(o);return r.set=r,r.update=o=>this.update(o),s(r)}),n&&(e.equal=function(r,o){return n(r,o)}),i&&(e.notEqual=function(r,o){return i(r,o)}),e};function te(e,t={}){return typeof t=="function"&&(t={onUse:t}),t.onUse?E(Re(new ue(e),t)):$t(e)}function $(e,t={}){typeof t=="function"&&(t={onUse:t});let s=Re(new ue(e),t);return E(s,{set:s.set.bind(s),update:s.update.bind(s)})}var lt=e=>{let t=V;try{return V=ct,e()}finally{V=t}},It=({unsubscribe:e})=>e(),Ot=({resubscribe:e})=>e(),De=class extends le{#s=!1;#n=!1;#t=0;#e=new Map;#i=t=>lt(()=>this.#c(t));constructor(){super(void 0),this[ce]=!0}#o(t){let s={versionIndex:this.#t,unsubscribe:F,resubscribe:F,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},n=i=>{s.value=i,s.valueIndex++,s.pending=!1,!this.#n&&!this.#r()&&j(()=>this.#a())};return n.next=n,n.pause=()=>{s.pending=!0,this.pauseSubscribers()},n.resume=()=>{s.pending=!1,!this.#n&&!this.#r()&&j(()=>this.#a())},s.resubscribe=()=>{s.unsubscribe=t(n),n[$e]=s.unsubscribe},s.resubscribe(),s}#c(t){let s=this.#e.get(t);return s?(s.versionIndex=this.#t,s.unsubscribe[A]?.()):(s=this.#o(Ie(t)),this.#e.set(t,s)),s.usedValueIndex=s.valueIndex,s.value}#a(t=!1){this.#s=!0,this.#n=!0;try{if(this.#t>0&&(t&&this.#e.forEach(Ot),!this.#l())){this.resumeSubscribers();return}this.#t++;let s=this.#t,n=V,i;try{V=this.#i,i=this.compute()}finally{V=n}this.set(i),this[ce]=!1;for(let[r,o]of this.#e)o.versionIndex!==s&&(this.#e.delete(r),o.unsubscribe())}finally{this.#n=!1,this.#s=!1}}#r(){for(let[,{pending:t}]of this.#e)if(t)return!0;return!1}#l(){for(let[,{valueIndex:t,usedValueIndex:s}]of this.#e)if(t!=s)return!0;return!1}resumeSubscribers(){this.#r()||super.resumeSubscribers()}[A](){if(this.#s)throw new Error("recursive computed");let t=0;for(;this.#r();){at(++t),this.#n=!0;try{for(let[,{pending:s,unsubscribe:n}]of this.#e)s&&n[A]?.()}finally{this.#n=!1}if(this.#r())break;this.#a()}}onUse(){return this.#a(!0),this[A](),()=>this.#e.forEach(It)}};function l(e,t={}){let s=class extends De{compute(){return e()}};return E(Re(new s,C(b({},t),{onUse:void 0})))}var ut=e=>({actions:e.actions,api:e.api,directives:e.directives,state$:e.state$,stores:e.stores}),L=Symbol();var B=()=>{},H=e=>e;function Rt(e){return function(t){j(()=>{var s;for(let[n,i]of Object.entries(t??{}))(s=e[`${n}$`])==null||s.set(i)})}}function Pt(e,t=te(void 0),s={},n=$(void 0)){let{normalizeValue:i=H,equal:r=Object.is}=s,o=()=>e,c=(a,g=o)=>{let m=a===void 0?void 0:i(a);return m===L?(console.error("Not using invalid value",a),g()):m===void 0?g():m},f=l(()=>c(t()),{equal:r}),u=l(()=>c(n(),f),{equal:r});return ee(u,a=>{if(a!==void 0){let g=i(a);if(g===L){console.error("Not setting invalid value",a);return}a=g}n.set(a)})}var Pe=e=>!!(e&&typeof e=="function"&&"subscribe"in e),M=e=>Pe(e)?e:te(e),Lt=e=>Pe(e)?e:$(e),At=(e,t)=>{let s={};if(t){let n=Pe(t);for(let i of e)s[i]=n?l(()=>t()[i]):M(t[i])}return s};var Ft=(e,t,s)=>{let n={},i=Object.keys(e),r=At(i,t?.config),o=t?.props;for(let c of i){let f=o?.[c];n[`${c}$`]=Pt(e[c],r[c],s?.[c],Lt(f))}return n},Q=(e,t,s)=>{let n=Ft(e,t,s);return[n,Rt(n)]},K=e=>{let t=[],s=[],n={};for(let[i,r]of Object.entries(e))i.endsWith("$")&&(t.push(i.substring(0,i.length-1)),s.push(r),n[i]=E(r));return{stores:n,state$:l(()=>{let i=s.map(de),r={};return t.forEach((o,c)=>{r[o]=i[c]}),r})}};var pe=(e,t,s=H,n=Oe)=>ee(l(()=>s(e()),{equal:n}),i=>{let r=s(i);n(e(),r)||(e.set(r),t()(r))});function se(e){return typeof e=="number"&&!isNaN(e)&&Number.isFinite(e)}function ft(e){return e===!0||e===!1}function _t(e){return typeof e=="function"}function kt(e){return typeof e=="string"}var Vt=Array.isArray;function W(e,t,s=0){return Math.max(Math.min(e,t),s)}var jt=e=>e instanceof HTMLElement,dt=e=>t=>t===null||e(t),T=e=>t=>e(t)?t:L,Et=T(se),I={normalizeValue:Et};var O={normalizeValue:T(ft)},hs={normalizeValue:T(dt(ft))},v={normalizeValue:T(kt)},N={normalizeValue:T(_t),equal:Object.is},gs={normalizeValue:T(dt(jt)),equal:Object.is},bs={normalizeValue:T(Vt),equal:(e,t)=>e===t?!0:e?.length!==t?.length?!1:e.every((s,n)=>s===t[n])};function pt(e,t,s){return e.addEventListener(t,s),function(){e.removeEventListener(t,s)}}var ht=e=>e!=null&&e!==!1;function Mt(e,t){let s=new Set;return t.subscribe(n=>{let i=new Set(`${n??""}`.split(" "));i.delete("");let r=e.classList;for(let o of s)i.has(o)||r.remove(o);r.add(...i),s=i})}function Wt(e,t,s){return s.subscribe(n=>{ht(n)?e.setAttribute(t,""+(n===!0?"":n)):e.removeAttribute(t)})}function gt(e,t,s){return t==="class"?Mt(e,s):Wt(e,t,s)}function bt(e,t,s){return s.subscribe(n=>{let i=e.style;i[t]=""+(ht(n)?n:"")})}function mt(e,t,s){let n=s.subscribe(i=>{e.classList.toggle(t,i)});return()=>{n(),e.classList.remove(t)}}var Ss=te(void 0);var ne=e=>(t,s)=>{let n=[],i=$(s),{events:r,attributes:o,styles:c,classNames:f}=e(i);for(let[u,a]of Object.entries(r??{}))n.push(pt(t,u,a));for(let[u,a]of Object.entries(o??{}))a!=null&&n.push(gt(t,u,M(a)));for(let[u,a]of Object.entries(c??{}))a&&n.push(bt(t,u,M(a)));for(let[u,a]of Object.entries(f??{}))n.push(mt(t,u,M(a)));return{update:u=>i.set(u),destroy:()=>n.forEach(u=>u())}};var yt="#",Tt={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:B,pagesFactory:(e,t)=>{let s=[];for(let n=1;n<=t;n++)s.push(n);return s},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(e,t)=>`Page ${e} of ${t}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",className:"",slotEllipsis:"\u2026",slotFirst:"\xAB",slotPrevious:"\u2039",slotNext:"\u203A",slotLast:"\xBB",slotPages:void 0,slotStructure:void 0,slotNumberLabel:({displayedPage:e})=>`${e}`,pageLink:e=>yt};var Ut={page:I,collectionSize:I,pageSize:I,disabled:O,directionLinks:O,boundaryLinks:O,size:{normalizeValue:e=>e==="lg"||e==="sm"||e===null?e:L},onPageChange:N,pagesFactory:N,ariaLabel:v,activeLabel:v,ariaPageLabel:N,ariaFirstLabel:v,ariaPreviousLabel:v,ariaNextLabel:v,ariaLastLabel:v,className:v,pageLink:N};function Le(e){let[_,...U]=Q(Tt,e,Ut),Y=_,{page$:t,collectionSize$:s,pageSize$:n,onPageChange$:i,pagesFactory$:r,ariaPageLabel$:o,pageLink$:c}=Y,f=k(Y,["page$","collectionSize$","pageSize$","onPageChange$","pagesFactory$","ariaPageLabel$","pageLink$"]),[u]=U,a=l(()=>{let d=Math.ceil(s()/n());return(!se(d)||d<1)&&(d=1),d}),g=pe(t,i,d=>W(d,a(),1)),m=l(()=>r()(g(),a())),y=l(()=>g()===a()||f.disabled$()),G=l(()=>g()===1||f.disabled$()),X=l(()=>{let d=o(),p=a();return m().map(q=>d(q,p))}),R=l(()=>{let d=c(),p=a();return Array.from({length:p},(q,ge)=>d(ge+1))}),S=l(()=>{let d=R(),p=g()-1;return{previous:d.at(p>0?p-1:0),next:d.at(p+1)??d.at(-1)}});function x(d,p,q){R()[d-1]===yt&&p?.preventDefault(),(!p||!(p.ctrlKey||p.metaKey))&&(p?.preventDefault(),q?g.update(q):g.set(d))}return C(b({},K(b({pageCount$:a,page$:g,pages$:m,nextDisabled$:y,previousDisabled$:G,pagesLabel$:X,pagesHrefs$:R,directionsHrefs$:S},f))),{patch:u,actions:{select(d,p){x(d,p)},first(d){x(1,d)},previous(d){x(g()-1,d,p=>p-1)},next(d){x(g()+1,d,p=>p+1)},last(d){x(a(),d)}},api:{},directives:{}})}var qt={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",slotStructure:void 0,slotDefault:void 0,height:"",striped:!1,animated:!1,ariaValueTextFn:()=>{}};var zt={min:I,max:I,value:I,ariaLabel:v,className:v,height:v,striped:O,animated:O,ariaValueTextFn:N};function Ae(e){let[G,...X]=Q(qt,e,zt),R=G,{max$:t,value$:s,min$:n,ariaValueTextFn$:i,ariaLabel$:r}=R,o=k(R,["max$","value$","min$","ariaValueTextFn$","ariaLabel$"]),[c]=X,f=l(()=>Math.max(n(),t())),u=l(()=>W(s(),f(),n())),a=l(()=>{let S=f(),x=n();return S>x?W((u()-x)*100/(S-x),100,0):0}),g=l(()=>u()>n()),m=l(()=>u()===f()),y=l(()=>i()(u(),n(),f()));return C(b({},K(b({min$:n,max$:f,value$:u,percentage$:a,started$:g,finished$:m,ariaValueText$:y,ariaLabel$:r},o))),{patch:c,api:{},directives:{ariaDirective:ne(()=>({attributes:{role:"progressbar","aria-label":r,"aria-valuenow":u,"aria-valuemin":n,"aria-valuemax":f,"aria-valuetext":y}}))},actions:{}})}var Zt={rating:0,tabindex:0,maxRating:10,disabled:!1,readonly:!1,resettable:!0,ariaValueTextFn:(e,t)=>`${e} out of ${t}`,onHover:B,onLeave:B,onRatingChange:B,className:"",slotStar:({fill:e})=>String.fromCharCode(e===100?9733:9734),ariaLabel:"Rating",ariaLabelledBy:""};var Bt={rating:I,tabindex:I,maxRating:{normalizeValue:e=>se(e)?Math.max(0,e):L},disabled:O,readonly:O,resettable:O,ariaValueTextFn:N,onHover:N,onLeave:N,onRatingChange:N,className:v,ariaLabel:v,ariaLabelledBy:v};function Fe(e){let[q,...ge]=Q(Zt,e,Bt),Ve=q,{rating$:t,tabindex$:s,ariaValueTextFn$:n,onHover$:i,onLeave$:r,onRatingChange$:o}=Ve,c=k(Ve,["rating$","tabindex$","ariaValueTextFn$","onHover$","onLeave$","onRatingChange$"]),[f]=ge,{ariaLabel$:u,ariaLabelledBy$:a,className$:g,disabled$:m,maxRating$:y,readonly$:G,resettable$:X}=c,R=l(()=>m()?-1:s()),S=pe(t,o,h=>W(h,y())),x=$(0),_=l(()=>!m()&&!G()),U=l(()=>{let h=x();return h!==0?h:S()}),Y=l(()=>n()(U(),y())),d=l(()=>{let h=U();return Array.from({length:y()},(ie,z)=>({fill:Math.round(Math.max(Math.min(h-z,1),0)*100),index:z}))}),p=C(b({},K(b({ariaValueText$:Y,interactive$:_,rating$:S,stars$:d,tabindex$:R,visibleRating$:U},c))),{patch:f,actions:{click:h=>{_()&&h>0&&h<=y()&&S.update(ie=>ie===h&&X()?0:h)},hover:h=>{_()&&h>0&&h<=y()&&(x.set(h),i()(h))},leave:()=>{_()&&(r()(x()),x.set(0))},handleKey(h){if(_()){let{key:ie}=h;switch(ie){case"ArrowLeft":case"ArrowDown":S.update(z=>z-1);break;case"ArrowRight":case"ArrowUp":S.update(z=>z+1);break;case"Home":case"PageDown":S.set(0);break;case"End":case"PageUp":S.set(y());break;default:return}h.preventDefault(),h.stopPropagation()}}},directives:{containerDirective:ne(()=>({events:{keydown:h=>p.actions.handleKey(h),mouseleave:()=>p.actions.leave()},attributes:{role:"slider",class:g,"aria-valuemin":0,tabindex:R,"aria-valuemax":y,"aria-valuenow":U,"aria-valuetext":Y,"aria-readonly":l(()=>G()?"true":void 0),"aria-disabled":l(()=>m()?"true":void 0),"aria-label":u,"aria-labelledby":l(()=>a()||void 0)},classNames:{"au-rating":!0}})),starDirective:ne(h=>({events:{mouseenter:()=>p.actions.hover(h().index+1),click:()=>p.actions.click(h().index+1)},styles:{cursor:l(()=>_()?"pointer":"default")},classNames:{"au-rating-star":!0}}))},api:{}});return p}var he=(e,t,s=1/0)=>{if(t!==void 0)if(typeof t=="object"&&t&&s>=1){e||(e={});for(let n of Object.keys(t))Object.prototype.hasOwnProperty.call(t,n)&&(n==="__proto__"||n==="constructor"||(e[n]=he(e[n],t[n],s-1)))}else return t;return e},vt=(e,t=H)=>{let s=$({}),n=t===H?e:l(()=>t(he({},e?.(),2)));return ee(l(()=>he(he({},n?.(),2),s(),2)),C(b({},s),{own$:s,adaptedParent$:n,parent$:e}))};var $n=Le,In=Ae,On=Fe;var xt=()=>{},Ct=e=>e,_e=e=>t=>{if(!t||typeof t!="object")return t;let s={};for(let n of Object.keys(t))s[n]=e(t[n]);return s},Ht=(e,t)=>s=>t(typeof s=="function"?(...n)=>e(s(...n)):s),St=(()=>{var t,s,n,i;let r=class r{constructor(){Z(this,t,void 0);Z(this,s,void 0);Z(this,n,void 0);Z(this,i,void 0);P(this,t,w(Ce)),P(this,s,D(this,t).run(()=>Ce.isInAngularZone())),P(this,n,!1),P(this,i,!1),this.planNgZoneRun=D(this,s)?()=>{D(this,t).isStable&&(P(this,n,!0),D(this,i)||(P(this,i,!0),be(this,null,function*(){yield 0,P(this,i,!1),D(this,n)&&this.ngZoneRun(xt)})))}:xt,this.insideNgZone=D(this,s)?c=>typeof c=="function"?(...f)=>this.ngZoneRun(()=>c(...f)):c:Ct,this.insideNgZoneWrapFunctionsObject=_e(this.insideNgZone),this.outsideNgZone=D(this,s)?c=>typeof c=="function"?(...f)=>D(this,t).runOutsideAngular(()=>c(...f)):c:Ct,this.outsideNgZoneWrapFunctionsObject=_e(this.outsideNgZone),this.outsideNgZoneWrapDirective=Ht(this.outsideNgZoneWrapFunctionsObject,this.outsideNgZone),this.outsideNgZoneWrapDirectivesObject=_e(this.outsideNgZoneWrapDirective)}ngZoneRun(c){return P(this,n,!1),D(this,t).run(c)}};t=new WeakMap,s=new WeakMap,n=new WeakMap,i=new WeakMap,r.\u0275fac=function(f){return new(f||r)},r.\u0275prov=je({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})(),Qt=e=>{let t=w(St),s=ze(void 0,{equal:()=>!1}),n=t.outsideNgZone(e.subscribe)(i=>{s.set(i),t.planNgZoneRun()});return w(xe).onDestroy(t.outsideNgZone(n)),s},Kt=(e,t)=>{let s=w(oe),n=w(Ue),i,r=!1,o=()=>{r||!e||(r=!0,re(s,()=>{qe(()=>{r=!1,i=e?.(n.nativeElement,t)})}))};function c(){let u=i;i=void 0,e=void 0,u?.destroy?.()}w(xe).onDestroy(c);function f(u,a){u!==e?(c(),e=u,t=a,o()):a!=t&&(t=a,i?.update?.(t))}return o(),{update:f}},Rn=(()=>{var t;let s=class s{constructor(){Z(this,t,Kt())}ngOnChanges(){D(this,t).update(this.use,this.params)}};t=new WeakMap,s.\u0275fac=function(r){return new(r||s)},s.\u0275dir=ye({type:s,selectors:[["","auUse",""]],inputs:{use:[me.None,"auUse","use"],params:[me.None,"auUseParams","params"]},standalone:!0,features:[ve]});let e=s;return e})(),ke=class{constructor(t,s){this.component=t,this.templateProp=s}};var Gt=e=>{let t={};return s=>{let n={},i=!1;for(let r of Object.keys(s)){let o=s[r];o!=null&&(n[r]=o),o!=t[r]&&(i=!0)}i&&(t=n,e(n))}},Xt=({factory:e,defaultConfig:t,widgetConfig:s,events:n,afterInit:i})=>{let r=w(oe),o=$({}),c={},f,u={initialized:new Promise(a=>{f=a}),patchSlots:Gt(o.set),patch(a){Object.assign(c,a)},ngInit(){re(r,()=>{let a=w(St);e=a.outsideNgZone(e);let g=M(t);n=a.insideNgZoneWrapFunctionsObject(n);let m=e({config:l(()=>b(b(b(b({},g()),s?.()),o()),n)),props:c}),y=C(b({},m),{patch:a.outsideNgZone(m.patch),directives:a.outsideNgZoneWrapDirectivesObject(m.directives),actions:a.outsideNgZoneWrapFunctionsObject(m.actions),api:a.outsideNgZoneWrapFunctionsObject(m.api)});Object.assign(u,y,{widget:ut(y),ngState:Qt(y.state$)}),i?.(),f()})}};return u};function Yt(e,t){let s={};for(let[n,i]of Object.entries(t))i!==void 0&&(s[n]=i.currentValue);e(s)}var Pn=(()=>{let t=class t{get api(){return this._widget.api}get state(){return this._widget.ngState}get widget(){return this._widget.widget}ngOnChanges(n){Yt(this._widget.patch,n)}ngOnInit(){this._widget.ngInit()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=ye({type:t,features:[ve]});let e=t;return e})(),Jt=(e=new Ee("widgetsConfig"))=>{let t=r=>({provide:e,useFactory:o=>{if(r){let c=w(oe),f=r;r=u=>re(c,()=>f(u))}return vt(o??void 0,r)},deps:[[new We,new Me,e]]}),s=r=>{let o=w(e);return r&&o.set(r),o},n=r=>{let o=w(e,{optional:!0});return l(()=>o?.()[r])};return{widgetsConfigInjectionToken:e,provideWidgetsConfig:t,injectWidgetsConfig:s,injectWidgetConfig:n,callWidgetFactory:({factory:r,widgetName:o=null,defaultConfig:c={},events:f,afterInit:u})=>Xt({factory:r,widgetConfig:o?n(o):null,defaultConfig:c,events:f,afterInit:u})}},{widgetsConfigInjectionToken:Ln,provideWidgetsConfig:An,injectWidgetConfig:Fn,injectWidgetsConfig:_n,callWidgetFactory:kn}=Jt();function Vn(e){if(e!==void 0)return Ye(e)}function jn(e){if(e!==void 0)return Je(e)}var es=["text"];function ts(e,t){if(e&1&&Ke(0),e&2){let s=t.content;Ge(s)}}var ss=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=Te({type:t,selectors:[["ng-component"]],viewQuery:function(i,r){if(i&1&&Be(es,7),i&2){let o;He(o=Qe())&&(r.text=o.first)}},decls:2,vars:0,consts:[["text",""]],template:function(i,r){i&1&&Ze(0,ts,1,1,"ng-template",null,0,Xe)},encapsulation:2});let e=t;return e})(),En=new ke(ss,"text");export{$n as a,In as b,On as c,Rn as d,Pn as e,kn as f,Vn as g,jn as h};
