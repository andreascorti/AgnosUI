import{a as p}from"./chunk-4LRODIW5.js";import{a as h,c as n,d as u,g as V,m as L}from"./chunk-XXOOVFKV.js";import{Q as m,a as d,d as v}from"./chunk-NOFNVHQY.js";import{W as g,Z as o,a as f,bc as b,g as c}from"./chunk-G54KZPDD.js";var $={log:{value:e=>console.log(e),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:V,label:"Collapse"},fade:{value:h,label:"Fade"},ratingValueFunction:{value:u().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(e,a)=>`${e} ${e===1?"heart":"hearts"} out of ${a} ${a===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(e,a)=>`${e} ${e===1?"star":"stars"} out of ${a} ${a===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:u().slotStar,label:"StarIconRating"},heartIconRating:{value:({fill:e})=>String.fromCharCode(e===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:n().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:n().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(e,a)=>`Page ${e} of ${a}`,label:"PageLabel"},slotNumberLabel:{value:n().slotNumberLabel,label:"SlotNumberLabel"},sliderLabelHandleDefault:{value:e=>`${e}`,label:"SliderLabelHandleDefault"},sliderValueTextUnits:{value:e=>`${e} units`,label:"SliderValueTextUnits"}},i=e=>{let a=f({},e);for(let[t,l]of Object.entries(a))$[l?.value]!==void 0&&(a[t]=$[l.value].value);return a};function P(e){let{config:a={},props:t={}}=JSON.parse(e??"{}");return{config:a,props:t}}var s=new g("hashconfig");function j(e){return[{provide:s,useFactory:()=>{let a=o(p);return v(()=>{let t=d(a.fragment);return P(t??"{}")})}},L(a=>(a[e]=i(o(s)().config),a))]}function D(e){let a=m(o(s)),t;function l(r){return c(this,null,function*(){t=r,yield 0,t===r&&e(r)})}b(()=>{l(i(a().props))})}function I(e){let a={};for(let t of Object.keys(e))a[t]=void 0;return a}export{j as a,D as b,I as c};
