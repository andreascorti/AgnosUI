import{Z as d,a0 as N,_ as M,a9 as R}from"./index-2cf00fd4.js";import{t as S,b,f as Q}from"./writables-22f3d08f.js";import{c as X,p as U,m as Y,d as F,f as T}from"./directiveUtils-d46fc14e.js";import{w as ee,b as te,s as oe}from"./stores-e840bb41.js";const p=()=>{},W=new Promise(p),se=async($,h)=>{$.style.display=h==="show"?"":"none"},le={animation:!0,animationOnInit:!1,initDone:null,visible:!0,transition:se,onShown:p,onHidden:p,onVisibleChange:p},ne={animation:S,animationOnInit:S,visible:S,transition:b,onShown:b,onHidden:b,onVisibleChange:b,initDone:Q},fe=$=>{const[{animation$:h,initDone$:v,visible$:f,transition$:Z,onShown$:_,onHidden$:g,onVisibleChange$:j,animationOnInit$:k},A]=ee(le,$,ne),{element$:w,directive:z}=X(),x=d(()=>!!w()),u=te(j,[f],([e])=>e),i=N(null),y=d(()=>!!i()),O=()=>{let e;return i.update(t=>(t==null||t.abort.abort(),e=t==null?void 0:t.context,null)),e},G=(e,t,n,l)=>R(()=>{const r=new AbortController,s=r.signal,a=O()??{},{promise:c,resolve:C}=U(),m={abort:r,animation:t,visible:e,context:a,element:n,transitionFn:l,promise:c};return i.set(m),C((async()=>{var q;try{await l(n,e?"show":"hide",t,s,a)}finally{s.aborted?await W:(i.set(null),(q=(e?_:g)())==null||q())}})()),m}),J=d(()=>!y()&&u()&&x()),K=d(()=>!y()&&!u()),P=d(()=>v()?h():k()),D=N(null);let H,I=f(),o=null;const B=M([u,w,P,D,Z,i],([e,t,n,l,r,s])=>{const a=H!==t;H=t;const c=I!==e;if(I=e,t){v()==null&&v.set(!0);const C=l!=null&&s&&s.animation!=l;if(a||c||C){(c||l!=null)&&(o=null);const m=l??(o==null?void 0:o.animation)??(a&&!e?!1:n);s=G(e,m,t,r),o==null||o.resolve(s.promise),o=null}}else a&&(O(),s=null),(c||e&&(o==null?void 0:o.animation)!==l)&&(o=e&&l!=null?{animation:l,...U()}:null);return(o==null?void 0:o.promise)??(s==null?void 0:s.promise)});let E={};const V=async(e=!f(),t=P())=>{const n={};E=n;try{await R(()=>{try{return D.set(t),f.set(e),B()}finally{D.set(null)}})}finally{E!==n&&await W}},L=Y(z,T(A),F(B));return{...oe({visible$:u,element$:w,elementPresent$:x,transitioning$:y,shown$:J,hidden$:K}),patch:A,directives:{directive:L},actions:{},api:{show:V.bind(null,!0),hide:V.bind(null,!1),toggle:V}}};export{fe as c};
