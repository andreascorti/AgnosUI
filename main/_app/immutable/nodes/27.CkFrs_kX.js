function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as O,a as d,g as v,i as h,f as g,n as P,e as x,c as L,q as D}from"../chunks/scheduler.-4Rzn4Bj.js";import{S as A,i as C,c as p,b as u,m as f,t as c,a as _,d as $}from"../chunks/index.DuhoGsBs.js";import{_ as m}from"../chunks/preload-helper.BQ24v_F8.js";import{S as y}from"../chunks/Sample.oTHEM-gY.js";import{S as b}from"../chunks/Section.7yUBnCRy.js";const I={componentName:"pagination",style:"bootstrap",sampleName:"custom",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"custom.component.ts",files:{"custom.component.ts":()=>m(()=>import("../chunks/custom.route.DN_FG5JC.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"custom.tsx",files:{"custom.tsx":()=>m(()=>import("../chunks/Custom.route.DyC9ffNa.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"custom.svelte",files:{"custom.svelte":()=>m(()=>import("../chunks/Custom.route.owvTzJrd.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default),"CustomPages.svelte":()=>m(()=>import("../chunks/CustomPages.CpKQnVwx.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}}}},R={componentName:"pagination",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"default.component.ts",files:{"default.component.ts":()=>m(()=>import("../chunks/default.route.CiwU0AG1.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"default.tsx",files:{"default.tsx":()=>m(()=>import("../chunks/Default.route.spMdG6nh.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"default.svelte",files:{"default.svelte":()=>m(()=>import("../chunks/Default.route.DfDdbT95.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}}}},V={componentName:"pagination",style:"bootstrap",sampleName:"hash",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"hash.component.ts",files:{"hash.component.ts":()=>m(()=>import("../chunks/hash.route.HMQvZe0u.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"hash.tsx",files:{"hash.tsx":()=>m(()=>import("../chunks/Hash.route.CQqohcDW.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"hash.svelte",files:{"hash.svelte":()=>m(()=>import("../chunks/Hash.route.C8eJV-Uy.js"),__vite__mapDeps([]),import.meta.url).then(o=>o.default)}}}};function U(o){let t,l;return t=new y({props:{title:"Pagination example",sample:R,height:419}}),{c(){p(t.$$.fragment)},l(n){u(t.$$.fragment,n)},m(n,s){f(t,n,s),l=!0},p:P,i(n){l||(c(t.$$.fragment,n),l=!0)},o(n){_(t.$$.fragment,n),l=!1},d(n){$(t,n)}}}function N(o){let t,l="The pagination widget is fully customizable, from the page numbers to the arrows.",n,s,r;return s=new y({props:{title:"Custom Pagination example",sample:I,height:256}}),{c(){t=x("p"),t.textContent=l,n=d(),p(s.$$.fragment)},l(a){t=L(a,"P",{"data-svelte-h":!0}),D(t)!=="svelte-behp1x"&&(t.textContent=l),n=v(a),u(s.$$.fragment,a)},m(a,e){h(a,t,e),h(a,n,e),f(s,a,e),r=!0},p:P,i(a){r||(c(s.$$.fragment,a),r=!0)},o(a){_(s.$$.fragment,a),r=!1},d(a){a&&(g(t),g(n)),$(s,a)}}}function S(o){let t,l=`The example shows the pagination widget with hrefs provided for each page element.<br/>
		The <i>hrefs</i> customization is based on <b>pageLink</b> input. This receives a custom function which computes the href using the received page
		number and the location hash. On the <b>pageChange</b> output event, the location hash is updated with the <i>href</i> of the current page element.
		This strategy permits navigations in current browser tab, and opening a page in new tabs using the customized href.`,n,s,r;return s=new y({props:{title:"Pagination example with hrefs",sample:V,height:256}}),{c(){t=x("p"),t.innerHTML=l,n=d(),p(s.$$.fragment)},l(a){t=L(a,"P",{"data-svelte-h":!0}),D(t)!=="svelte-1uo392u"&&(t.innerHTML=l),n=v(a),u(s.$$.fragment,a)},m(a,e){h(a,t,e),h(a,n,e),f(s,a,e),r=!0},p:P,i(a){r||(c(s.$$.fragment,a),r=!0)},o(a){_(s.$$.fragment,a),r=!1},d(a){a&&(g(t),g(n)),$(s,a)}}}function z(o){let t,l,n,s,r,a;return t=new b({props:{label:"Basic paginations",level:2,$$slots:{default:[U]},$$scope:{ctx:o}}}),n=new b({props:{label:"Customization",level:2,$$slots:{default:[N]},$$scope:{ctx:o}}}),r=new b({props:{label:"Pagination with hrefs",level:2,$$slots:{default:[S]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),l=d(),p(n.$$.fragment),s=d(),p(r.$$.fragment)},l(e){u(t.$$.fragment,e),l=v(e),u(n.$$.fragment,e),s=v(e),u(r.$$.fragment,e)},m(e,i){f(t,e,i),h(e,l,i),f(n,e,i),h(e,s,i),f(r,e,i),a=!0},p(e,[i]){const E={};i&1&&(E.$$scope={dirty:i,ctx:e}),t.$set(E);const w={};i&1&&(w.$$scope={dirty:i,ctx:e}),n.$set(w);const T={};i&1&&(T.$$scope={dirty:i,ctx:e}),r.$set(T)},i(e){a||(c(t.$$.fragment,e),c(n.$$.fragment,e),c(r.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),_(n.$$.fragment,e),_(r.$$.fragment,e),a=!1},d(e){e&&(g(l),g(s)),$(t,e),$(n,e),$(r,e)}}}class j extends A{constructor(t){super(),C(this,t,null,z,O,{})}}export{j as component};
