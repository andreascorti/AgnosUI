import{b as X,e as Y,c as d,i as Z,w as z,d as _,z as N,s as F,p as R,m as T,f as ee,A as te}from"./utils-4a34c49d.js";import{t as C,b as h,f as se}from"./writables-d1ef8d3d.js";const r=()=>{},U=new Promise(r),oe=async(m,p)=>{m.style.display=p==="show"?"":"none"},le={animation:!0,animationOnInit:!1,initDone:null,visible:!0,transition:oe,onShown:r,onHidden:r,onVisibleChange:r},ne={animation:C,animationOnInit:C,visible:C,transition:h,onShown:h,onHidden:h,onVisibleChange:h,initDone:se},ce=m=>{const[{animation$:p,initDone$:v,visible$:u,transition$:W,onShown$:g,onHidden$:j,onVisibleChange$:k,animationOnInit$:G},S]=X(le,m,ne),{element$:w,directive:J}=Y(),x=d(()=>!!w()),f=Z(k,[u],([e])=>e),a=z(null),y=d(()=>!!a()),O=()=>{let e;return a.update(t=>(t==null||t.abort.abort(),e=t==null?void 0:t.context,null)),e},K=(e,t,n,l)=>R(()=>{const b=new AbortController,o=b.signal,i=O()??{},{promise:c,resolve:A}=N(),$={abort:b,animation:t,visible:e,context:i,element:n,transitionFn:l,promise:c};return a.set($),A((async()=>{var q;try{await l(n,e?"show":"hide",t,o,i)}finally{o.aborted?await U:(a.set(null),(q=(e?g:j)())==null||q())}})()),$}),L=d(()=>!y()&&f()&&x()),M=d(()=>!y()&&!f()),P=d(()=>v()?p():G()),D=z(null);let H,I=u(),s=null;const B=_([f,w,P,D,W,a],([e,t,n,l,b,o])=>{const i=H!==t;H=t;const c=I!==e;if(I=e,t){v()==null&&v.set(!0);const A=l!=null&&o&&o.animation!=l;if(i||c||A){(c||l!=null)&&(s=null);const $=l??(s==null?void 0:s.animation)??(i&&!e?!1:n);o=K(e,$,t,b),s==null||s.resolve(o.promise),s=null}}else i&&(O(),o=null),(c||e&&(s==null?void 0:s.animation)!==l)&&(s=e&&l!=null?{animation:l,...N()}:null);return(s==null?void 0:s.promise)??(o==null?void 0:o.promise)});let E={};const V=async(e=!u(),t=P())=>{const n={};E=n;try{await R(()=>{try{return D.set(t),u.set(e),B()}finally{D.set(null)}})}finally{E!==n&&await U}},Q=T(J,te(S),ee(B));return{...F({visible$:f,element$:w,elementPresent$:x,transitioning$:y,shown$:L,hidden$:M}),patch:S,directives:{directive:Q},actions:{},api:{show:V.bind(null,!0),hide:V.bind(null,!1),toggle:V}}};export{ce as c};
