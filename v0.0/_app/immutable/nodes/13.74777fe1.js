import{s as i}from"../chunks/scheduler.cb6605ed.js";import{S as l,i as p,r as m,u,v as c,d,t as f,w as g}from"../chunks/index.3e38ccef.js";import{P as _}from"../chunks/Playground.e2a7f2fe.js";import{g as P,d as y}from"../chunks/api.cbab05d9.js";import{_ as a}from"../chunks/preload-helper.a4192956.js";const V={componentName:"accordion",sampleName:"playground",files:{angular:{entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>a(()=>import("../chunks/playground.route.46c0da6a.js"),[],import.meta.url).then(e=>e.default)}},react:{entryPoint:"playground.tsx",files:{"playground.tsx":()=>a(()=>import("../chunks/Playground.route.8dd436c1.js"),[],import.meta.url).then(e=>e.default)}},svelte:{entryPoint:"playground.svelte",files:{"playground.svelte":()=>a(()=>import("../chunks/Playground.route.775a1773.js"),[],import.meta.url).then(e=>e.default)}}}};function v(e){let t,n;return t=new _({props:{sample:V,config:P(),doc:y,listPropsValues:e[0]}}),{c(){m(t.$$.fragment)},l(o){u(t.$$.fragment,o)},m(o,r){c(t,o,r),n=!0},p(o,[r]){const s={};r&1&&(s.listPropsValues=o[0]),t.$set(s)},i(o){n||(d(t.$$.fragment,o),n=!0)},o(o){f(t.$$.fragment,o),n=!1},d(o){g(t,o)}}}function $(e,t,n){let{listPropsValues:o={onShown:["noop","log"],onHidden:["noop","log"],itemTransition:["collapse","fade"],onItemShown:["noop","log"],onItemHidden:["noop","log"],onItemVisibleChange:["noop","log"]}}=t;return e.$$set=r=>{"listPropsValues"in r&&n(0,o=r.listPropsValues)},[o]}class A extends l{constructor(t){super(),p(this,t,$,v,i,{listPropsValues:0})}}export{A as component};
