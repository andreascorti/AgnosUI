var T=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(T(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},c=(t,e,s,n)=>(T(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var L=(t,e,s,n)=>({set _(u){c(t,e,u,s)},get _(){return i(t,e,n)}}),a=(t,e,s)=>(T(t,e,"access private method"),s);const W=typeof Symbol=="function"&&Symbol.observable||"@@observable",B=Symbol(),g=()=>{},k=()=>{};k.unsubscribe=k;const A=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):g},Z=t=>({next:typeof t=="function"?t.bind(null):A(t,"next"),pause:A(t,"pause"),resume:A(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),$=function(){return this},ee=t=>{if(!t)return k;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},X=new WeakSet,fe=t=>{let e=t.subscribe;return X.has(e)||(e=(...s)=>ee(t.subscribe(...s)),X.add(e)),e},D=t=>{const e="subscribe"in t?t:t[W]();return fe(e)},he=t=>{let e;return t(s=>e=s)(),e};function H(t,e){const s=D(t),n=Object.assign(()=>be(n),e,{subscribe:s,[W]:$});return n}const S=Symbol(),te=Symbol();let G=!1;const E=new Set,de=1e3,se=t=>{if(t>de)throw new Error("reached maximum number of store changes in one shot")},z=t=>{const e=!G;e&&(G=!0);try{return t()}finally{if(e)try{const s=new Map;for(const n of E){const u=s.get(n)??0;se(u),s.set(n,u+1),E.delete(n),n[te]()}}finally{E.clear(),G=!1}}},ne=t=>he(D(t));let I=ne;const be=t=>I(t),Y=t=>({[t]:!0,[t-1]:!1,0:!1});var h,w,d,p,v,O,P,j,ue,V,re,C,R;class ie{constructor(e){o(this,j);o(this,V);o(this,C);o(this,h,new Set);o(this,w,null);o(this,d,!1);o(this,p,1);o(this,v,void 0);o(this,O,Y(1));o(this,P,new WeakMap);c(this,v,e)}[te](){const e=i(this,p);for(const s of[...i(this,h)]){if(i(this,d)||i(this,p)!==e)return;s._valueIndex!==0&&a(this,C,R).call(this,s)}}[S](){}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!Object.is(e,s)||e&&typeof e=="object"||typeof e=="function"}pauseSubscribers(){if(!i(this,d)){c(this,d,!0),E.delete(this);for(const e of[...i(this,h)])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){i(this,d)&&(c(this,d,!1),z(()=>{E.add(this)}))}set(e){if(!this.equal(i(this,v),e)){const s=i(this,p)+1;c(this,p,s),c(this,v,e),c(this,O,Y(s)),this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(i(this,v)))}onUse(){}subscribe(e){const s=Z(e),n=e==null?void 0:e[B];if(n){const r=i(this,P).get(n);r&&(s._value=r._value,s._valueIndex=r._valueIndex)}i(this,h).add(s),z(()=>{i(this,h).size==1?a(this,j,ue).call(this):this[S]()}),a(this,C,R).call(this,s);const u=()=>{const r=i(this,h).delete(s);s.next=g,s.pause=g,s.resume=g,r&&(i(this,P).set(u,s),i(this,h).size===0&&a(this,V,re).call(this))};return u[S]=()=>{this[S](),a(this,C,R).call(this,s)},u.unsubscribe=u,u}[W](){return this}}h=new WeakMap,w=new WeakMap,d=new WeakMap,p=new WeakMap,v=new WeakMap,O=new WeakMap,P=new WeakMap,j=new WeakSet,ue=function(){c(this,w,ee(this.onUse()))},V=new WeakSet,re=function(){const e=i(this,w);e&&(c(this,w,null),e())},C=new WeakSet,R=function(e){const s=i(this,O),n=i(this,p),u=i(this,v);let r=s[e._valueIndex];r==null&&(r=this.equal(e._value,u),s[e._valueIndex]=r),e._valueIndex=n,r?!i(this,d)&&e._paused&&(e._paused=!1,e.resume()):(e._value=u,e._paused=!1,e.next(u))};function pe(t){const e=s=>(s!=null&&s[B]||Z(s).next(t),k);return X.add(e),Object.assign(()=>t,{subscribe:e,[W]:$})}class oe extends ie{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}}const J=(t,e)=>{const{onUse:s,equal:n,notEqual:u}=e;return s&&(t.onUse=function(){const r=f=>this.set(f);return r.set=r,r.update=f=>this.update(f),s(r)}),n&&(t.equal=function(r,f){return n(r,f)}),u&&(t.notEqual=function(r,f){return u(r,f)}),t};function Ie(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?H(J(new oe(t),e)):pe(t)}function _e(t,e={}){typeof e=="function"&&(e={onUse:e});const s=J(new oe(t),e);return H(s,{set:s.set.bind(s),update:s.update.bind(s)})}const ve=t=>{const e=I;try{return I=ne,t()}finally{I=e}},xe=({unsubscribe:t})=>t(),me=({resubscribe:t})=>t();var q,b,x,l,M,F,ae,N,ce,y,U,m,_,Q,le;class Se extends ie{constructor(){super(void 0);o(this,F);o(this,N);o(this,y);o(this,m);o(this,Q);o(this,q,!1);o(this,b,!1);o(this,x,0);o(this,l,new Map);o(this,M,s=>ve(()=>a(this,N,ce).call(this,s)))}resumeSubscribers(){a(this,m,_).call(this)||super.resumeSubscribers()}[S](){var n;if(i(this,q))throw new Error("recursive computed");let s=0;for(;a(this,m,_).call(this);){se(++s),c(this,b,!0);try{for(const[,{pending:u,unsubscribe:r}]of i(this,l))u&&((n=r[S])==null||n.call(r))}finally{c(this,b,!1)}if(a(this,m,_).call(this))break;a(this,y,U).call(this)}}onUse(){return a(this,y,U).call(this,!0),this[S](),()=>i(this,l).forEach(xe)}}q=new WeakMap,b=new WeakMap,x=new WeakMap,l=new WeakMap,M=new WeakMap,F=new WeakSet,ae=function(s){const n={versionIndex:i(this,x),unsubscribe:g,resubscribe:g,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},u=r=>{n.value=r,n.valueIndex++,n.pending=!1,!i(this,b)&&!a(this,m,_).call(this)&&z(()=>a(this,y,U).call(this))};return u.next=u,u.pause=()=>{n.pending=!0,this.pauseSubscribers()},u.resume=()=>{n.pending=!1,!i(this,b)&&!a(this,m,_).call(this)&&z(()=>a(this,y,U).call(this))},n.resubscribe=()=>{n.unsubscribe=s(u),u[B]=n.unsubscribe},n.resubscribe(),n},N=new WeakSet,ce=function(s){var u,r;let n=i(this,l).get(s);return n?(n.versionIndex=i(this,x),(r=(u=n.unsubscribe)[S])==null||r.call(u)):(n=a(this,F,ae).call(this,D(s)),i(this,l).set(s,n)),n.usedValueIndex=n.valueIndex,n.value},y=new WeakSet,U=function(s=!1){c(this,q,!0),c(this,b,!0);try{if(i(this,x)>0&&(s&&i(this,l).forEach(me),!a(this,Q,le).call(this))){this.resumeSubscribers();return}L(this,x)._++;const n=i(this,x),u=I;let r;try{I=i(this,M),r=this.compute()}finally{I=u}this.set(r);for(const[f,K]of i(this,l))K.versionIndex!==n&&(i(this,l).delete(f),K.unsubscribe())}finally{c(this,b,!1),c(this,q,!1)}},m=new WeakSet,_=function(){for(const[,{pending:s}]of i(this,l))if(s)return!0;return!1},Q=new WeakSet,le=function(){for(const[,{valueIndex:s,usedValueIndex:n}]of i(this,l))if(s!=n)return!0;return!1};function ge(t,e={}){const s=class extends Se{compute(){return t()}};return H(J(new s,{...e,onUse:void 0}))}export{H as a,ge as c,be as g,Ie as r,_e as w};
