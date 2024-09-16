import{f as Wt,L as ct,d as D,G as Ht,s as Nt,j as wt,l as yt}from"./directive-CKEccryv--USZPHTu.js";import{c as Vt}from"./promise-CY2U8bTP-ZGoDVMe4.js";const Tt=["top","right","bottom","left"],xt=["start","end"],vt=Tt.reduce((t,e)=>t.concat(e,e+"-"+xt[0],e+"-"+xt[1]),[]),F=Math.min,T=Math.max,Z=Math.round,Q=Math.floor,H=t=>({x:t,y:t}),kt={left:"right",right:"left",bottom:"top",top:"bottom"},zt={start:"end",end:"start"};function at(t,e,n){return T(t,F(e,n))}function z(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function B(t){return t.split("-")[1]}function $t(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(I(t))?"y":"x"}function mt(t){return $t(K(t))}function It(t,e,n){n===void 0&&(n=!1);const o=B(t),i=mt(t),s=dt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=bt(r)),[r,bt(r)]}function Yt(t){return t.replace(/start|end/g,e=>zt[e])}function bt(t){return t.replace(/left|right|bottom|top/g,e=>kt[e])}function Xt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dt(t){return typeof t!="number"?Xt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ot(t,e,n){let{reference:o,floating:i}=t;const s=K(e),r=mt(e),l=dt(r),c=I(e),a=s==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(B(e)){case"start":f[r]-=g*(n&&a?-1:1);break;case"end":f[r]+=g*(n&&a?-1:1);break}return f}const jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Ot(a,o,c),g=o,f={},m=0;for(let w=0;w<l.length;w++){const{name:y,fn:h}=l[w],{x,y:v,data:R,reset:O}=await h({x:u,y:d,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});u=x??u,d=v??d,f={...f,[y]:{...f[y],...R}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:u,y:d}=Ot(a,g,c)),w=-1)}return{x:u,y:d,placement:g,strategy:i,middlewareData:f}};async function q(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:f=0}=z(e,t),m=Dt(f),y=l[g?d==="floating"?"reference":"floating":d],h=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),x=d==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:v,strategy:c}):x);return{top:(h.top-O.top+m.top)/R.y,bottom:(O.bottom-h.bottom+m.bottom)/R.y,left:(h.left-O.left+m.left)/R.x,right:(O.right-h.right+m.right)/R.x}}const Ut=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:u=0}=z(t,e)||{};if(a==null)return{};const d=Dt(u),g={x:n,y:o},f=mt(i),m=dt(f),w=await r.getDimensions(a),y=f==="y",h=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",R=s.reference[m]+s.reference[f]-g[f]-s.floating[m],O=g[f]-s.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let S=C?C[v]:0;(!S||!await(r.isElement==null?void 0:r.isElement(C)))&&(S=l.floating[v]||s.floating[m]);const p=R/2-O/2,b=S/2-w[m]/2-1,A=F(d[h],b),E=F(d[x],b),W=A,Y=S-w[m]-E,V=S/2-w[m]/2+p,it=at(W,V,Y),rt=!c.arrow&&B(i)!=null&&V!==it&&s.reference[m]/2-(V<W?A:E)-w[m]/2<0,st=rt?V<W?V-W:V-Y:0;return{[f]:g[f]+st,data:{[f]:it,centerOffset:V-it-st,...rt&&{alignmentOffset:st}},reset:rt}}});function qt(t,e,n){return(t?[...n.filter(i=>B(i)===t),...n.filter(i=>B(i)!==t)]:n.filter(i=>I(i)===i)).filter(i=>t?B(i)===t||(e?Yt(i)!==i:!1):!0)}const Gt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:a}=e,{crossAxis:u=!1,alignment:d,allowedPlacements:g=vt,autoAlignment:f=!0,...m}=z(t,e),w=d!==void 0||g===vt?qt(d||null,f,g):g,y=await q(e,m),h=((n=r.autoPlacement)==null?void 0:n.index)||0,x=w[h];if(x==null)return{};const v=It(x,s,await(c.isRTL==null?void 0:c.isRTL(a.floating)));if(l!==x)return{reset:{placement:w[0]}};const R=[y[I(x)],y[v[0]],y[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:R}],C=w[h+1];if(C)return{data:{index:h+1,overflows:O},reset:{placement:C}};const S=O.map(A=>{const E=B(A.placement);return[A.placement,E&&u?A.overflows.slice(0,2).reduce((W,Y)=>W+Y,0):A.overflows[0],A.overflows]}).sort((A,E)=>A[1]-E[1]),b=((i=S.filter(A=>A[2].slice(0,B(A[0])?2:3).every(E=>E<=0))[0])==null?void 0:i[0])||S[0][0];return b!==l?{data:{index:h+1,overflows:O},reset:{placement:b}}:{}}}};function At(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Rt(t){return Tt.some(e=>t[e]>=0)}const Kt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=z(t,e);switch(o){case"referenceHidden":{const s=await q(e,{...i,elementContext:"reference"}),r=At(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Rt(r)}}}case"escaped":{const s=await q(e,{...i,altBoundary:!0}),r=At(s,n.floating);return{data:{escapedOffsets:r,escaped:Rt(r)}}}default:return{}}}}};async function Jt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=I(n),l=B(n),c=K(n)==="y",a=["left","top"].includes(r)?-1:1,u=s&&c?-1:1,d=z(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),c?{x:f*u,y:g*a}:{x:g*a,y:f*u}}const Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await Jt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},Zt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:h,y:x}=y;return{x:h,y:x}}},...c}=z(t,e),a={x:n,y:o},u=await q(e,c),d=K(I(i)),g=$t(d);let f=a[g],m=a[d];if(s){const y=g==="y"?"top":"left",h=g==="y"?"bottom":"right",x=f+u[y],v=f-u[h];f=at(x,f,v)}if(r){const y=d==="y"?"top":"left",h=d==="y"?"bottom":"right",x=m+u[y],v=m-u[h];m=at(x,m,v)}const w=l.fn({...e,[g]:f,[d]:m});return{...w,data:{x:w.x-n,y:w.y-o}}}}},te=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=z(t,e),c=await q(e,l),a=I(n),u=B(n),d=K(n)==="y",{width:g,height:f}=o.floating;let m,w;a==="top"||a==="bottom"?(m=a,w=u===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(w=a,m=u==="end"?"top":"bottom");const y=f-c.top-c.bottom,h=g-c.left-c.right,x=F(f-c[m],y),v=F(g-c[w],h),R=!e.middlewareData.shift;let O=x,C=v;if(d?C=u||R?F(v,h):h:O=u||R?F(x,y):y,R&&!u){const p=T(c.left,0),b=T(c.right,0),A=T(c.top,0),E=T(c.bottom,0);d?C=g-2*(p!==0||b!==0?p+b:T(c.left,c.right)):O=f-2*(A!==0||E!==0?A+E:T(c.top,c.bottom))}await r({...e,availableWidth:C,availableHeight:O});const S=await i.getDimensions(s.floating);return g!==S.width||f!==S.height?{reset:{rects:!0}}:{}}}};function et(){return typeof window<"u"}function U(t){return Lt(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(Lt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Lt(t){return et()?t instanceof Node||t instanceof $(t).Node:!1}function L(t){return et()?t instanceof Element||t instanceof $(t).Element:!1}function _(t){return et()?t instanceof HTMLElement||t instanceof $(t).HTMLElement:!1}function Ct(t){return!et()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ee(t){return["table","td","th"].includes(U(t))}function nt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function pt(t){const e=gt(),n=L(t)?P(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ne(t){let e=N(t);for(;_(e)&&!j(e);){if(pt(e))return e;if(nt(e))return null;e=N(e)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j(t){return["html","body","#document"].includes(U(t))}function P(t){return $(t).getComputedStyle(t)}function ot(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function N(t){if(U(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ct(t)&&t.host||M(t);return Ct(e)?e.host:e}function Pt(t){const e=N(t);return j(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&J(e)?e:Pt(e)}function G(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Pt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=$(i);if(s){const l=ft(r);return e.concat(r,r.visualViewport||[],J(i)?i:[],l&&n?G(l):[])}return e.concat(i,G(i,[],n))}function ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ft(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=_(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=Z(n)!==s||Z(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function ht(t){return L(t)?t:t.contextElement}function X(t){const e=ht(t);if(!_(e))return H(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ft(e);let r=(s?Z(n.width):n.width)/o,l=(s?Z(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const oe=H(0);function Bt(t){const e=$(t);return!gt()||!e.visualViewport?oe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ie(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function k(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ht(t);let r=H(1);e&&(o?L(o)&&(r=X(o)):r=X(t));const l=ie(s,n,o)?Bt(s):H(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(s){const g=$(s),f=o&&L(o)?$(o):o;let m=g,w=ft(m);for(;w&&o&&f!==m;){const y=X(w),h=w.getBoundingClientRect(),x=P(w),v=h.left+(w.clientLeft+parseFloat(x.paddingLeft))*y.x,R=h.top+(w.clientTop+parseFloat(x.paddingTop))*y.y;c*=y.x,a*=y.y,u*=y.x,d*=y.y,c+=v,a+=R,m=$(w),w=ft(m)}}return tt({width:u,height:d,x:c,y:a})}function re(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=M(o),l=e?nt(e.floating):!1;if(o===r||l&&s)return n;let c={scrollLeft:0,scrollTop:0},a=H(1);const u=H(0),d=_(o);if((d||!d&&!s)&&((U(o)!=="body"||J(r))&&(c=ot(o)),_(o))){const g=k(o);a=X(o),u.x=g.x+o.clientLeft,u.y=g.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}}function se(t){return Array.from(t.getClientRects())}function ut(t,e){const n=ot(t).scrollLeft;return e?e.left+n:k(M(t)).left+n}function ce(t){const e=M(t),n=ot(t),o=t.ownerDocument.body,i=T(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=T(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+ut(t);const l=-n.scrollTop;return P(o).direction==="rtl"&&(r+=T(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function le(t,e){const n=$(t),o=M(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=gt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function ae(t,e){const n=k(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=_(t)?X(t):H(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function St(t,e,n){let o;if(e==="viewport")o=le(t,n);else if(e==="document")o=ce(M(t));else if(L(e))o=ae(e,n);else{const i=Bt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function _t(t,e){const n=N(t);return n===e||!L(n)||j(n)?!1:P(n).position==="fixed"||_t(n,e)}function fe(t,e){const n=e.get(t);if(n)return n;let o=G(t,[],!1).filter(l=>L(l)&&U(l)!=="body"),i=null;const s=P(t).position==="fixed";let r=s?N(t):t;for(;L(r)&&!j(r);){const l=P(r),c=pt(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(r)&&!c&&_t(t,r))?o=o.filter(u=>u!==r):i=l,r=N(r)}return e.set(t,o),o}function ue(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?nt(e)?[]:fe(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,u)=>{const d=St(e,u,i);return a.top=T(d.top,a.top),a.right=F(d.right,a.right),a.bottom=F(d.bottom,a.bottom),a.left=T(d.left,a.left),a},St(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function de(t){const{width:e,height:n}=Ft(t);return{width:e,height:n}}function me(t,e,n){const o=_(e),i=M(e),s=n==="fixed",r=k(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=H(0);if(o||!o&&!s)if((U(e)!=="body"||J(i))&&(l=ot(e)),o){const f=k(e,!0,s,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else i&&(c.x=ut(i));let a=0,u=0;if(i&&!o&&!s){const f=i.getBoundingClientRect();u=f.top+l.scrollTop,a=f.left+l.scrollLeft-ut(i,f)}const d=r.left+l.scrollLeft-c.x-a,g=r.top+l.scrollTop-c.y-u;return{x:d,y:g,width:r.width,height:r.height}}function lt(t){return P(t).position==="static"}function Et(t,e){if(!_(t)||P(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return M(t)===n&&(n=n.ownerDocument.body),n}function Mt(t,e){const n=$(t);if(nt(t))return n;if(!_(t)){let i=N(t);for(;i&&!j(i);){if(L(i)&&!lt(i))return i;i=N(i)}return n}let o=Et(t,e);for(;o&&ee(o)&&lt(o);)o=Et(o,e);return o&&j(o)&&lt(o)&&!pt(o)?n:o||ne(t)||n}const pe=async function(t){const e=this.getOffsetParent||Mt,n=this.getDimensions,o=await n(t.floating);return{reference:me(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ge(t){return P(t).direction==="rtl"}const he={convertOffsetParentRelativeRectToViewportRelativeRect:re,getDocumentElement:M,getClippingRect:ue,getOffsetParent:Mt,getElementRects:pe,getClientRects:se,getDimensions:de,getScale:X,isElement:L,isRTL:ge};function we(t,e){let n=null,o;const i=M(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:u,width:d,height:g}=t.getBoundingClientRect();if(l||e(),!d||!g)return;const f=Q(u),m=Q(i.clientWidth-(a+d)),w=Q(i.clientHeight-(u+g)),y=Q(a),x={rootMargin:-f+"px "+-m+"px "+-w+"px "+-y+"px",threshold:T(0,F(1,c))||1};let v=!0;function R(O){const C=O[0].intersectionRatio;if(C!==c){if(!v)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(R,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,x)}n.observe(t)}return r(!0),s}function ye(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ht(t),u=i||s?[...a?G(a):[],...G(e)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const d=a&&l?we(a,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(h=>{let[x]=h;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let m,w=c?k(t):null;c&&y();function y(){const h=k(t);w&&(h.x!==w.x||h.y!==w.y||h.width!==w.width||h.height!==w.height)&&n(),w=h,m=requestAnimationFrame(y)}return n(),()=>{var h;u.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),d==null||d(),(h=f)==null||h.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const Re=Qt,Ce=Gt,Se=Zt,Ee=te,Te=Kt,xe=Ut,ve=(t,e,n)=>{const o=new Map,i={platform:he,...n},s={...i.platform,_c:o};return jt(t,e,{...i,platform:s})},be={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},$e=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Wt(be,t),{directive:s,element$:r}=ct(),{directive:l,element$:c}=ct(),{directive:a,element$:u}=ct(),d=D(()=>{const p=u();if(!p)return null;const b=o();return typeof b=="function"?A=>({...b(A),element:p}):{...b,element:p}}),g=D(()=>{let p=n();const b=d();return b&&(p={...p,middleware:[...p.middleware??[],xe(b)]}),p}),f=Ht([r,c,g,e],([p,b,A,E],W)=>{if(p&&b){const Y=ye(b,p,()=>{W(ve(b,p,A))},E);return()=>{W(null),Y()}}},null),m=Vt(f,null),w=D(()=>{var p;return(p=m())==null?void 0:p.placement}),y=D(()=>{var p;return(p=m())==null?void 0:p.middlewareData}),h=D(()=>{var p;return(p=m())==null?void 0:p.x}),x=D(()=>{var p;return(p=m())==null?void 0:p.y}),v=D(()=>{var p;return(p=m())==null?void 0:p.strategy}),R=D(()=>{var p,b;return(b=(p=y())==null?void 0:p.arrow)==null?void 0:b.x}),O=D(()=>{var p,b;return(b=(p=y())==null?void 0:p.arrow)==null?void 0:b.y}),C=D(()=>{const p=r();p&&(p.style.left=`${h()??0}px`,p.style.top=`${x()??0}px`)}),S=D(()=>{const p=u();if(p){const b=R(),A=O();p.style.left=b!=null?`${b}px`:"",p.style.top=A!=null?`${A}px`:""}});return{patch:i,...Nt({x$:h,y$:x,strategy$:v,placement$:w,middlewareData$:y}),directives:{referenceDirective:l,floatingDirective:wt(s,yt(C)),arrowDirective:wt(a,yt(S))}}};export{Ce as a,Ee as b,$e as c,Te as h,Re as o,Se as s};
