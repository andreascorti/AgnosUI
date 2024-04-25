import{s as N,a as O,g as I,i as p,f,n as S,e as y,c as T,q as w,t as R,d as A}from"../chunks/scheduler.Bus5bagK.js";import{S as V,i as k,c as v,b as d,m as b,t as P,a as x,e as C}from"../chunks/index.hvgIYORv.js";import{_}from"../chunks/preload-helper.Dch09mLN.js";import{S as D}from"../chunks/Sample.Cvo6e27Q.js";import{S as L}from"../chunks/Section.CpwA7Ap4.js";const U={componentName:"pagination",style:"bootstrap",sampleName:"custom",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"custom.component.ts",files:{"custom.component.ts":()=>_(()=>import("../chunks/custom.route.BMZldFYv.js"),[],import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"custom.tsx",files:{"custom.tsx":()=>_(()=>import("../chunks/Custom.route.Dtt5rNja.js"),[],import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"custom.svelte",files:{"custom.svelte":()=>_(()=>import("../chunks/Custom.route.B-lyopBj.js"),[],import.meta.url).then(o=>o.default),"CustomPages.svelte":()=>_(()=>import("../chunks/CustomPages.D8jSS-ee.js"),[],import.meta.url).then(o=>o.default)}}}},z={componentName:"pagination",style:"bootstrap",sampleName:"default",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"default.component.ts",files:{"default.component.ts":()=>_(()=>import("../chunks/default.route.DE7KQ0mS.js"),[],import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"default.tsx",files:{"default.tsx":()=>_(()=>import("../chunks/Default.route.BinBcvj6.js"),[],import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"default.svelte",files:{"default.svelte":()=>_(()=>import("../chunks/Default.route.DVx6dgm-.js"),[],import.meta.url).then(o=>o.default)}}}},q={componentName:"pagination",style:"bootstrap",sampleName:"hash",files:{angular:{complementaryUrl:"/bootstrap",entryPoint:"hash.component.ts",files:{"hash.component.ts":()=>_(()=>import("../chunks/hash.route.BqCWQG8g.js"),[],import.meta.url).then(o=>o.default)}},react:{complementaryUrl:"/bootstrap",entryPoint:"hash.tsx",files:{"hash.tsx":()=>_(()=>import("../chunks/Hash.route.OmbnKMom.js"),[],import.meta.url).then(o=>o.default)}},svelte:{complementaryUrl:"/bootstrap",entryPoint:"hash.svelte",files:{"hash.svelte":()=>_(()=>import("../chunks/Hash.route.DceA-HjX.js"),[],import.meta.url).then(o=>o.default)}}}};function G(o){let t,l;return t=new D({props:{title:"Pagination example",sample:z,height:419}}),{c(){v(t.$$.fragment)},l(a){d(t.$$.fragment,a)},m(a,s){b(t,a,s),l=!0},p:S,i(a){l||(P(t.$$.fragment,a),l=!0)},o(a){x(t.$$.fragment,a),l=!1},d(a){C(t,a)}}}function H(o){let t,l="The pagination widget is fully customizable, from the page numbers to the arrows.",a,s,i;return s=new D({props:{title:"Custom Pagination example",sample:U,height:256}}),{c(){t=y("p"),t.textContent=l,a=O(),v(s.$$.fragment)},l(n){t=T(n,"P",{"data-svelte-h":!0}),w(t)!=="svelte-behp1x"&&(t.textContent=l),a=I(n),d(s.$$.fragment,n)},m(n,m){p(n,t,m),p(n,a,m),b(s,n,m),i=!0},p:S,i(n){i||(P(s.$$.fragment,n),i=!0)},o(n){x(s.$$.fragment,n),i=!1},d(n){n&&(f(t),f(a)),C(s,n)}}}function M(o){let t,l=`The example shows the pagination widget with hrefs provided for each page element.<br/>
		The <i>hrefs</i> customization is based on <b>pageLink</b> input. This receives a custom function which computes the href using the received page
		number and the location hash. On the <b>pageChange</b> output event, the location hash is updated with the <i>href</i> of the current page element.
		This strategy permits navigations in current browser tab, and opening a page in new tabs using the customized href.`,a,s,i;return s=new D({props:{title:"Pagination example with hrefs",sample:q,height:256}}),{c(){t=y("p"),t.innerHTML=l,a=O(),v(s.$$.fragment)},l(n){t=T(n,"P",{"data-svelte-h":!0}),w(t)!=="svelte-1uo392u"&&(t.innerHTML=l),a=I(n),d(s.$$.fragment,n)},m(n,m){p(n,t,m),p(n,a,m),b(s,n,m),i=!0},p:S,i(n){i||(P(s.$$.fragment,n),i=!0)},o(n){x(s.$$.fragment,n),i=!1},d(n){n&&(f(t),f(a)),C(s,n)}}}function Y(o){let t,l,a="aria-label",s,i,n="aria-label",m,c,e='aria-current="page"',u,h,E="aria-label",g;return{c(){t=R("Pagination is a navigation element. The navigation (nav) elements need to have the "),l=y("strong"),l.textContent=a,s=R(` attribute to differentiate them.
	Check the API section to learn about the default one set for our pagination. You need to customize the `),i=y("strong"),i.textContent=n,m=R(` attribute if you
	have more than one pagination on your page. The `),c=y("strong"),c.textContent=e,u=R(` attribute is set to the current element as needed. Each
	pagination link item has its own `),h=y("strong"),h.textContent=E,g=R(` that you can customize (for ScreenReader). Check the API section to know the default value
	set for each item.`)},l(r){t=A(r,"Pagination is a navigation element. The navigation (nav) elements need to have the "),l=T(r,"STRONG",{"data-svelte-h":!0}),w(l)!=="svelte-4a4qrm"&&(l.textContent=a),s=A(r,` attribute to differentiate them.
	Check the API section to learn about the default one set for our pagination. You need to customize the `),i=T(r,"STRONG",{"data-svelte-h":!0}),w(i)!=="svelte-4a4qrm"&&(i.textContent=n),m=A(r,` attribute if you
	have more than one pagination on your page. The `),c=T(r,"STRONG",{"data-svelte-h":!0}),w(c)!=="svelte-xlh399"&&(c.textContent=e),u=A(r,` attribute is set to the current element as needed. Each
	pagination link item has its own `),h=T(r,"STRONG",{"data-svelte-h":!0}),w(h)!=="svelte-4a4qrm"&&(h.textContent=E),g=A(r,` that you can customize (for ScreenReader). Check the API section to know the default value
	set for each item.`)},m(r,$){p(r,t,$),p(r,l,$),p(r,s,$),p(r,i,$),p(r,m,$),p(r,c,$),p(r,u,$),p(r,h,$),p(r,g,$)},p:S,d(r){r&&(f(t),f(l),f(s),f(i),f(m),f(c),f(u),f(h),f(g))}}}function B(o){let t,l,a,s,i,n,m,c;return t=new L({props:{label:"Basic paginations",level:2,$$slots:{default:[G]},$$scope:{ctx:o}}}),a=new L({props:{label:"Customization",level:2,$$slots:{default:[H]},$$scope:{ctx:o}}}),i=new L({props:{label:"Pagination with hrefs",level:2,$$slots:{default:[M]},$$scope:{ctx:o}}}),m=new L({props:{label:"Accessibility",level:2,$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment),l=O(),v(a.$$.fragment),s=O(),v(i.$$.fragment),n=O(),v(m.$$.fragment)},l(e){d(t.$$.fragment,e),l=I(e),d(a.$$.fragment,e),s=I(e),d(i.$$.fragment,e),n=I(e),d(m.$$.fragment,e)},m(e,u){b(t,e,u),p(e,l,u),b(a,e,u),p(e,s,u),b(i,e,u),p(e,n,u),b(m,e,u),c=!0},p(e,[u]){const h={};u&1&&(h.$$scope={dirty:u,ctx:e}),t.$set(h);const E={};u&1&&(E.$$scope={dirty:u,ctx:e}),a.$set(E);const g={};u&1&&(g.$$scope={dirty:u,ctx:e}),i.$set(g);const r={};u&1&&(r.$$scope={dirty:u,ctx:e}),m.$set(r)},i(e){c||(P(t.$$.fragment,e),P(a.$$.fragment,e),P(i.$$.fragment,e),P(m.$$.fragment,e),c=!0)},o(e){x(t.$$.fragment,e),x(a.$$.fragment,e),x(i.$$.fragment,e),x(m.$$.fragment,e),c=!1},d(e){e&&(f(l),f(s),f(n)),C(t,e),C(a,e),C(i,e),C(m,e)}}}class W extends V{constructor(t){super(),k(this,t,null,B,N,{})}}export{W as component};
