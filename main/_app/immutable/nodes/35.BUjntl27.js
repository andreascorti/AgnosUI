function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s,n as l}from"../chunks/scheduler.DPIVRzB8.js";import{S as i,i as m,c as p,b as u,m as g,t as c,a as f,d as _}from"../chunks/index.SN7u1Jvz.js";import{P as d}from"../chunks/Playground.zrZ4xIfY.js";import{_ as a}from"../chunks/preload-helper.BQ24v_F8.js";import{d as y}from"../chunks/api.CYw5YgC-.js";import{g as P}from"../chunks/rating--0-uTXnS.8S57HQG8.js";const v={componentName:"rating",style:"bootstrap",sampleName:"playground",files:{angular:{complementaryUrl:"",entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>a(()=>import("../chunks/playground.route.BOyHSevq.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"",entryPoint:"playground.tsx",files:{"playground.tsx":()=>a(()=>import("../chunks/Playground.route.BwzKMyvQ.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/app",entryPoint:"playground.svelte",files:{"playground.svelte":()=>a(()=>import("../chunks/Playground.route.ByDM9HMp.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}}}};function V(o){let t,n;return t=new d({props:{sample:v,config:P(),doc:y,listPropsValues:o[0]}}),{c(){p(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p:l,i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){f(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function $(o){return[{ariaValueTextFn:["ratingValueFunction","heartsRatingValue","starRatingValue"],onHover:["noop","log"],onLeave:["noop","log"],onRatingChange:["noop","log"],slotStar:["starIconRating","heartIconRating"]}]}class L extends i{constructor(t){super(),m(this,t,$,V,s,{})}}export{L as component};
