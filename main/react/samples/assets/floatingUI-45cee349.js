import{c as $,e as Ft}from"./func-f2d0b1ef.js";import{e as rt,m as dt,d as mt}from"./directive-b30080a6.js";import{d as Mt}from"./promise-c1a9d9a6.js";import{w as Bt,s as Ht}from"./stores-ae26ce61.js";const At=["top","right","bottom","left"],pt=["start","end"],gt=At.reduce((t,e)=>t.concat(e,e+"-"+pt[0],e+"-"+pt[1]),[]),W=Math.min,S=Math.max,Q=Math.round,J=Math.floor,N=t=>({x:t,y:t}),Wt={left:"right",right:"left",bottom:"top",top:"bottom"},Nt={start:"end",end:"start"};function st(t,e,n){return S(t,W(e,n))}function _(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function P(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(z(t))?"y":"x"}function lt(t){return Rt(K(t))}function Vt(t,e,n){n===void 0&&(n=!1);const o=P(t),i=lt(t),s=ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ht(r)),[r,ht(r)]}function kt(t){return t.replace(/start|end/g,e=>Nt[e])}function ht(t){return t.replace(/left|right|bottom|top/g,e=>Wt[e])}function It(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ct(t){return typeof t!="number"?It(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function wt(t,e,n){let{reference:o,floating:i}=t;const s=K(e),r=lt(e),l=ct(r),c=z(e),a=s==="y",p=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,h=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(P(e)){case"start":f[r]-=h*(n&&a?-1:1);break;case"end":f[r]+=h*(n&&a?-1:1);break}return f}const _t=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:d}=wt(a,o,c),h=o,f={},u=0;for(let w=0;w<l.length;w++){const{name:x,fn:g}=l[w],{x:y,y:b,data:C,reset:O}=await g({x:p,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(p=y??p,d=b??d,f={...f,[x]:{...f[x],...C}},O&&u<=50){u++,typeof O=="object"&&(O.placement&&(h=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:p,y:d}=wt(a,h,c)),w=-1;continue}}return{x:p,y:d,placement:h,strategy:i,middlewareData:f}};async function U(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=_(e,t),u=Ct(f),x=l[h?d==="floating"?"reference":"floating":d],g=Z(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:p,strategy:c})),y=d==="floating"?{...r.floating,x:o,y:i}:r.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),C=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},O=Z(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:c}):y);return{top:(g.top-O.top+u.top)/C.y,bottom:(O.bottom-g.bottom+u.bottom)/C.y,left:(g.left-O.left+u.left)/C.x,right:(O.right-g.right+u.right)/C.x}}const zt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:p=0}=_(t,e)||{};if(a==null)return{};const d=Ct(p),h={x:n,y:o},f=lt(i),u=ct(f),w=await r.getDimensions(a),x=f==="y",g=x?"top":"left",y=x?"bottom":"right",b=x?"clientHeight":"clientWidth",C=s.reference[u]+s.reference[f]-h[f]-s.floating[u],O=h[f]-s.reference[f],A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let E=A?A[b]:0;(!E||!await(r.isElement==null?void 0:r.isElement(A)))&&(E=l.floating[b]||s.floating[u]);const m=C/2-O/2,v=E/2-w[u]/2-1,R=W(d[g],v),L=W(d[y],v),M=R,Y=E-w[u]-L,k=E/2-w[u]/2+m,nt=st(M,k,Y),ot=!c.arrow&&P(i)!=null&&k!=nt&&s.reference[u]/2-(k<M?R:L)-w[u]/2<0,it=ot?k<M?k-M:k-Y:0;return{[f]:h[f]+it,data:{[f]:nt,centerOffset:k-nt-it,...ot&&{alignmentOffset:it}},reset:ot}}});function Yt(t,e,n){return(t?[...n.filter(i=>P(i)===t),...n.filter(i=>P(i)!==t)]:n.filter(i=>z(i)===i)).filter(i=>t?P(i)===t||(e?kt(i)!==i:!1):!0)}const he=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:a}=e,{crossAxis:p=!1,alignment:d,allowedPlacements:h=gt,autoAlignment:f=!0,...u}=_(t,e),w=d!==void 0||h===gt?Yt(d||null,f,h):h,x=await U(e,u),g=((n=r.autoPlacement)==null?void 0:n.index)||0,y=w[g];if(y==null)return{};const b=Vt(y,s,await(c.isRTL==null?void 0:c.isRTL(a.floating)));if(l!==y)return{reset:{placement:w[0]}};const C=[x[z(y)],x[b[0]],x[b[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:C}],A=w[g+1];if(A)return{data:{index:g+1,overflows:O},reset:{placement:A}};const E=O.map(R=>{const L=P(R.placement);return[R.placement,L&&p?R.overflows.slice(0,2).reduce((M,Y)=>M+Y,0):R.overflows[0],R.overflows]}).sort((R,L)=>R[1]-L[1]),v=((i=E.filter(R=>R[2].slice(0,P(R[0])?2:3).every(L=>L<=0))[0])==null?void 0:i[0])||E[0][0];return v!==l?{data:{index:g+1,overflows:O},reset:{placement:v}}:{}}}};function xt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function yt(t){return At.some(e=>t[e]>=0)}const we=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=_(t,e);switch(o){case"referenceHidden":{const s=await U(e,{...i,elementContext:"reference"}),r=xt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:yt(r)}}}case"escaped":{const s=await U(e,{...i,altBoundary:!0}),r=xt(s,n.floating);return{data:{escapedOffsets:r,escaped:yt(r)}}}default:return{}}}}};async function Xt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=z(n),l=P(n),c=K(n)==="y",a=["left","top"].includes(r)?-1:1,p=s&&c?-1:1,d=_(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:u}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof u=="number"&&(f=l==="end"?u*-1:u),c?{x:f*p,y:h*a}:{x:h*a,y:f*p}}const xe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await Xt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},ye=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:g,y}=x;return{x:g,y}}},...c}=_(t,e),a={x:n,y:o},p=await U(e,c),d=K(z(i)),h=Rt(d);let f=a[h],u=a[d];if(s){const x=h==="y"?"top":"left",g=h==="y"?"bottom":"right",y=f+p[x],b=f-p[g];f=st(y,f,b)}if(r){const x=d==="y"?"top":"left",g=d==="y"?"bottom":"right",y=u+p[x],b=u-p[g];u=st(y,u,b)}const w=l.fn({...e,[h]:f,[d]:u});return{...w,data:{x:w.x-n,y:w.y-o}}}}},ve=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=_(t,e),c=await U(e,l),a=z(n),p=P(n),d=K(n)==="y",{width:h,height:f}=o.floating;let u,w;a==="top"||a==="bottom"?(u=a,w=p===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(w=a,u=p==="end"?"top":"bottom");const x=f-c[u],g=h-c[w],y=!e.middlewareData.shift;let b=x,C=g;if(d){const A=h-c.left-c.right;C=p||y?W(g,A):A}else{const A=f-c.top-c.bottom;b=p||y?W(x,A):A}if(y&&!p){const A=S(c.left,0),E=S(c.right,0),m=S(c.top,0),v=S(c.bottom,0);d?C=h-2*(A!==0||E!==0?A+E:S(c.left,c.right)):b=f-2*(m!==0||v!==0?m+v:S(c.top,c.bottom))}await r({...e,availableWidth:C,availableHeight:b});const O=await i.getDimensions(s.floating);return h!==O.width||f!==O.height?{reset:{rects:!0}}:{}}}};function V(t){return Et(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(Et(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Et(t){return t instanceof Node||t instanceof T(t).Node}function B(t){return t instanceof Element||t instanceof T(t).Element}function F(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function G(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function jt(t){return["table","td","th"].includes(V(t))}function at(t){const e=ft(),n=D(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ut(t){let e=j(t);for(;F(e)&&!tt(e);){if(at(e))return e;e=j(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(V(t))}function D(t){return T(t).getComputedStyle(t)}function et(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||H(t);return vt(e)?e.host:e}function St(t){const e=j(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&G(e)?e:St(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=St(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=T(i);return s?e.concat(r,r.visualViewport||[],G(i)?i:[],r.frameElement&&n?q(r.frameElement):[]):e.concat(i,q(i,[],n))}function Tt(t){const e=D(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=Q(n)!==s||Q(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function ut(t){return B(t)?t:t.contextElement}function X(t){const e=ut(t);if(!F(e))return N(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Tt(e);let r=(s?Q(n.width):n.width)/o,l=(s?Q(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const qt=N(0);function Dt(t){const e=T(t);return!ft()||!e.visualViewport?qt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Kt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function I(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ut(t);let r=N(1);e&&(o?B(o)&&(r=X(o)):r=X(t));const l=Kt(s,n,o)?Dt(s):N(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,p=i.width/r.x,d=i.height/r.y;if(s){const h=T(s),f=o&&B(o)?T(o):o;let u=h.frameElement;for(;u&&o&&f!==h;){const w=X(u),x=u.getBoundingClientRect(),g=D(u),y=x.left+(u.clientLeft+parseFloat(g.paddingLeft))*w.x,b=x.top+(u.clientTop+parseFloat(g.paddingTop))*w.y;c*=w.x,a*=w.y,p*=w.x,d*=w.y,c+=y,a+=b,u=T(u).frameElement}}return Z({width:p,height:d,x:c,y:a})}function Gt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=F(n),s=H(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},l=N(1);const c=N(0);if((i||!i&&o!=="fixed")&&((V(n)!=="body"||G(s))&&(r=et(n)),F(n))){const a=I(n);l=X(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function Jt(t){return Array.from(t.getClientRects())}function $t(t){return I(H(t)).left+et(t).scrollLeft}function Qt(t){const e=H(t),n=et(t),o=t.ownerDocument.body,i=S(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=S(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+$t(t);const l=-n.scrollTop;return D(o).direction==="rtl"&&(r+=S(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function Zt(t,e){const n=T(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=ft();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function te(t,e){const n=I(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=F(t)?X(t):N(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function bt(t,e,n){let o;if(e==="viewport")o=Zt(t,n);else if(e==="document")o=Qt(H(t));else if(B(e))o=te(e,n);else{const i=Dt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Z(o)}function Lt(t,e){const n=j(t);return n===e||!B(n)||tt(n)?!1:D(n).position==="fixed"||Lt(n,e)}function ee(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(l=>B(l)&&V(l)!=="body"),i=null;const s=D(t).position==="fixed";let r=s?j(t):t;for(;B(r)&&!tt(r);){const l=D(r),c=at(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(r)&&!c&&Lt(t,r))?o=o.filter(p=>p!==r):i=l,r=j(r)}return e.set(t,o),o}function ne(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ee(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,p)=>{const d=bt(e,p,i);return a.top=S(d.top,a.top),a.right=W(d.right,a.right),a.bottom=W(d.bottom,a.bottom),a.left=S(d.left,a.left),a},bt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function oe(t){return Tt(t)}function ie(t,e,n){const o=F(e),i=H(e),s=n==="fixed",r=I(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=N(0);if(o||!o&&!s)if((V(e)!=="body"||G(i))&&(l=et(e)),o){const a=I(e,!0,s,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=$t(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function Ot(t,e){return!F(t)||D(t).position==="fixed"?null:e?e(t):t.offsetParent}function Pt(t,e){const n=T(t);if(!F(t))return n;let o=Ot(t,e);for(;o&&jt(o)&&D(o).position==="static";)o=Ot(o,e);return o&&(V(o)==="html"||V(o)==="body"&&D(o).position==="static"&&!at(o))?n:o||Ut(t)||n}const re=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Pt,s=this.getDimensions;return{reference:ie(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function se(t){return D(t).direction==="rtl"}const ce={convertOffsetParentRelativeRectToViewportRelativeRect:Gt,getDocumentElement:H,getClippingRect:ne,getOffsetParent:Pt,getElementRects:re,getClientRects:Jt,getDimensions:oe,getScale:X,isElement:B,isRTL:se};function le(t,e){let n=null,o;const i=H(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:p,width:d,height:h}=t.getBoundingClientRect();if(l||e(),!d||!h)return;const f=J(p),u=J(i.clientWidth-(a+d)),w=J(i.clientHeight-(p+h)),x=J(a),y={rootMargin:-f+"px "+-u+"px "+-w+"px "+-x+"px",threshold:S(0,W(1,c))||1};let b=!0;function C(O){const A=O[0].intersectionRatio;if(A!==c){if(!b)return r();A?r(!1,A):o=setTimeout(()=>{r(!1,1e-7)},100)}b=!1}try{n=new IntersectionObserver(C,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,y)}n.observe(t)}return r(!0),s}function ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=ut(t),p=i||s?[...a?q(a):[],...q(e)]:[];p.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const d=a&&l?le(a,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let u,w=c?I(t):null;c&&x();function x(){const g=I(t);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&n(),w=g,u=requestAnimationFrame(x)}return n(),()=>{p.forEach(g=>{i&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const fe=(t,e,n)=>{const o=new Map,i={platform:ce,...n},s={...i.platform,_c:o};return _t(t,e,{...i,platform:s})},ue={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},be=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Bt(ue,t),{directive:s,element$:r}=rt(),{directive:l,element$:c}=rt(),{directive:a,element$:p}=rt(),d=$(()=>{const m=p();if(!m)return null;const v=o();return typeof v=="function"?R=>({...v(R),element:m}):{...v,element:m}}),h=$(()=>{let m=n();const v=d();return v&&(m={...m,middleware:[...m.middleware??[],zt(v)]}),m}),f=Ft([r,c,h,e],([m,v,R,L],M)=>{if(m&&v){const Y=ae(v,m,()=>{M(fe(v,m,R))},L);return()=>{M(null),Y()}}},null),u=Mt(f,null),w=$(()=>{var m;return(m=u())==null?void 0:m.placement}),x=$(()=>{var m;return(m=u())==null?void 0:m.middlewareData}),g=$(()=>{var m;return(m=u())==null?void 0:m.x}),y=$(()=>{var m;return(m=u())==null?void 0:m.y}),b=$(()=>{var m;return(m=u())==null?void 0:m.strategy}),C=$(()=>{var m,v;return(v=(m=x())==null?void 0:m.arrow)==null?void 0:v.x}),O=$(()=>{var m,v;return(v=(m=x())==null?void 0:m.arrow)==null?void 0:v.y}),A=$(()=>{const m=r();m&&(m.style.left=`${g()??0}px`,m.style.top=`${y()??0}px`)}),E=$(()=>{const m=p();if(m){const v=C(),R=O();m.style.left=v!=null?`${v}px`:"",m.style.top=R!=null?`${R}px`:""}});return{patch:i,...Ht({x$:g,y$:y,strategy$:b,placement$:w,middlewareData$:x}),directives:{referenceDirective:l,floatingDirective:dt(s,mt(A)),arrowDirective:dt(a,mt(E))}}};export{he as a,ve as b,be as c,we as h,xe as o,ye as s};
