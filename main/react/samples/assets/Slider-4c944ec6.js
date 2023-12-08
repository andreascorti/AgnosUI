import{j as n,R as he}from"./index-ffc26b19.js";import{w as $e,a as r,i as pe,c as X,d as ge,f as ve,s as xe,m as Le,b as we,h as De,u as Y}from"./utils-946c19b8.js";import{g as ee,e as Q,h as ye,t as C,a as Z}from"./writables-17424135.js";import{u as Ve}from"./config-7593863d.js";const Re=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function K(u){var d;const o=(""+u).match(Re);return Math.max(0,(((d=o[1])==null?void 0:d.length)??0)-(+o[2]||0))}const G={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:(u,o)=>""+u,onValuesChange:De,values:[0],showValueLabels:!0,showMinMaxLabels:!0},Me={min:Q,max:Q,stepSize:ye(0,1/0,{strict:!0}),readonly:C,disabled:C,vertical:C,ariaLabelHandle:Z,onValuesChange:Z,values:ee,showValueLabels:C,showMinMaxLabels:C},je=(u,o,d,m,b)=>{const $=Math.pow(10,b);if(u>=d)return d;if(u<=o)return o;const p=Math.floor((u-o)*$/m);return+(((u-o)*$%m<m/2?p:p+1)*m/$+o).toFixed(b)};function Pe(u){const[{min$:o,max$:d,stepSize$:m,values$:b,ariaLabelHandle$:$,onValuesChange$:p,showValueLabels$:x,showMinMaxLabels$:D,...y},N]=$e(G,u,Me),{vertical$:f,disabled$:H,readonly$:z}=y;let V=-1;const g=r(()=>o()===d()?G.min:Math.min(o(),d())),c=r(()=>o()===d()?G.max:Math.max(o(),d())),R=r(()=>Math.max(K(m()),K(g()),K(c()))),F=r(()=>m()*Math.pow(10,R())),h=pe(p,[b,g,c,F,R],([e,t,s,a,l])=>e.map(P=>je(P,t,s,a,l)),ee.equal),{directive:_,element$:S}=X(),{directive:E,element$:B}=X(),{directive:W,element$:A}=X(),L=ge(S,(e,t)=>{if(!e){t({});return}const s=new ResizeObserver(()=>{t({})});return s.observe(e),()=>s.disconnect()},{}),M=ve({}),i=r(()=>{var e;return L(),M(),((e=S())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),v=r(()=>{var e;return L(),M(),((e=B())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),j=r(()=>{var e;return L(),M(),((e=A())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),te=r(()=>f()?i().top:i().left),q=r(()=>f()?i().height:i().width),I=r(()=>[...h()].sort((e,t)=>e-t)),ae=r(()=>h().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),se=r(()=>{const e=$();return ae().map((t,s)=>({...t,ariaLabel:e(t.value,s,t.id)}))}),k=r(()=>h().map(e=>be(e))),T=r(()=>[...k()].sort((e,t)=>e-t)),re=r(()=>v().width/q()*100),ie=r(()=>j().width/q()*100),le=r(()=>{if(D()){if(!x())return!0}else return!1;const e=re();return!k().some(t=>t<e+1)}),ne=r(()=>{if(D()){if(!x())return!0}else return!1;const e=ie();return!k().some(t=>t>100-e-1)}),oe=r(()=>{const e=h();return e.length==2&&Math.abs(e[0]-e[1])<10}),O=r(()=>!H()&&!z()),ce=r(()=>{const e=T();return f()||e.length!=2?0:(e[0]+e[1])/2}),de=r(()=>{const e=T();return f()&&e.length==2?100-(e[0]+e[1])/2:0}),ue=r(()=>{const e=f();return k().map((t,s)=>({left:e?0:t,top:e?100-t:0}))}),me=r(()=>{const e=f(),t=T();return t.length===1?[{left:0,bottom:0,width:e?100:t[0],height:e?t[0]:100}]:t.map((s,a,l)=>({left:e?0:s,bottom:e?s:0,width:e?100:a===l.length-1?s:l[a+1]-s,height:e?a===l.length-1?s:l[a+1]-s:100})).slice(0,t.length-1)}),be=e=>{const t=g();return(e-t)*100/(c()-t)},fe=e=>{const t=h();if(t.length===1)return 0;const s=I(),a=s.find(w=>w>e*100),l=a?s.indexOf(a):s.length-1,P=s[l-1]+(s[l]-s[l-1])/2,U=s[e*100<=P?l-1:l];return t.indexOf(U)},J=(e,t)=>{if(O()){const s=q(),a=te(),l=f()?(s-e+a)/s:(e-a)/s,P=t??fe(l),U=l*(c()-g())+g();b.update(w=>(w=[...w],w[P]=U,w))}};return{...xe({min$:g,max$:c,stepSize$:m,values$:h,sortedValues$:I,sortedHandles$:se,minValueLabelDisplay$:le,maxValueLabelDisplay$:ne,combinedLabelDisplay$:oe,isInteractable$:O,combinedLabelPositionLeft$:ce,combinedLabelPositionTop$:de,progressDisplayOptions$:me,handleDisplayOptions$:ue,showValueLabels$:x,showMinMaxLabels$:D,...y}),patch:N,api:{},directives:{sliderDirective:Le(_,we(L)),minLabelDirective:E,maxLabelDirective:W},actions:{click(e){J(f()?e.clientY:e.clientX)},keydown(e,t){const{key:s}=e;if(O()){switch(s){case"ArrowDown":case"ArrowLeft":b.update(a=>(a=[...a],a[t]=h()[t]-m(),a));break;case"ArrowUp":case"ArrowRight":b.update(a=>(a=[...a],a[t]=h()[t]+m(),a));break;case"Home":b.update(a=>(a=[...a],a[t]=g(),a));break;case"End":b.update(a=>(a=[...a],a[t]=c(),a));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,t){e.preventDefault();const s=a=>{a.preventDefault();const l=f()?a.clientY:a.clientX;e.target.focus(),V!==l&&(V=l,J(l,t))};O()&&(e.target.focus(),document.addEventListener("mousemove",s),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",s)},{once:!0}))}}}}function Ne(u){const[{className:o,combinedLabelDisplay:d,combinedLabelPositionLeft:m,combinedLabelPositionTop:b,disabled:$,handleDisplayOptions:p,max:x,maxValueLabelDisplay:D,min:y,minValueLabelDisplay:N,progressDisplayOptions:f,readonly:H,sortedHandles:z,sortedValues:V,values:g,vertical:c,showValueLabels:R,showMinMaxLabels:F},{actions:{click:h,keydown:_,mouseDown:S},directives:{sliderDirective:E,minLabelDirective:B,maxLabelDirective:W}}]=Ve(Pe,u,"slider"),A=Y(E),L=Y(B),M=Y(W);return n.jsxs("div",{ref:A,className:`au-slider ${c?"au-slider-vertical":"au-slider-horizontal"} ${o} ${$?" disabled":""}`,children:[f.map((i,v)=>n.jsx("div",{className:"au-slider-progress",style:{left:`${i.left}%`,bottom:`${i.bottom}%`,width:`${i.width}%`,height:`${i.height}%`}},v)),n.jsx("div",{className:c?"au-slider-clickable-area-vertical":"au-slider-clickable-area",onClick:i=>h(i)}),F?n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:L,className:`${c?"au-slider-label-vertical au-slider-label-vertical-min":"au-slider-label au-slider-label-min"} ${N?"":" invisible"}
						`,children:y}),n.jsx("div",{ref:M,className:`${c?"au-slider-label-vertical au-slider-label-vertical-max":"au-slider-label au-slider-label-max"} ${D?"":" invisible"}`,children:x})]}):n.jsx(n.Fragment,{}),R&&d?n.jsxs("div",{className:c?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${m}%`,top:`${b}%`},children:[V[0]," - ",V[1]]}):n.jsx(n.Fragment,{}),z.map((i,v)=>n.jsxs(he.Fragment,{children:[n.jsx("button",{className:`au-slider-handle ${c?"au-slider-handle-vertical":"au-slider-handle-horizontal"}`,role:"slider","aria-valuemin":y,"aria-valuemax":x,"aria-valuenow":i.value,"aria-valuetext":""+i.value,"aria-label":i.ariaLabel,"aria-readonly":H?"true":void 0,"aria-disabled":$?"true":void 0,"aria-orientation":c?"vertical":void 0,disabled:$,style:c?{top:`${p[i.id].top}%`}:{left:`${p[i.id].left}%`},onKeyDown:j=>_(j,i.id),onMouseDown:j=>S(j,i.id),children:" "}),R&&!d?n.jsx("div",{className:c?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${p[v].left}%`,top:`${p[v].top}%`},children:g[v]}):n.jsx(n.Fragment,{})]},i.id))]})}export{Ne as S};
