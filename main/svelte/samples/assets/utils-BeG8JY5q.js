import{ad as o,G as n}from"./AppCommon-BopSFvtR.js";import{g as t}from"./pagination-sJZws_Rh-C31ENqXj.js";import{g as r}from"./rating-DSRcXDNK-Cbww3qdY.js";import{c as g}from"./collapse-BQC9zBIz-31C00H8o.js";import{f as b}from"./fade-7-Etejps-DtlS8hZW.js";import{a as f}from"./Slot-C5sD5DFI.js";const s={log:{value:a=>console.log(a),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:g,label:"Collapse"},fade:{value:b,label:"Fade"},ratingValueFunction:{value:r().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(a,e)=>`${a} ${a===1?"heart":"hearts"} out of ${e} ${e===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(a,e)=>`${a} ${a===1?"star":"stars"} out of ${e} ${e===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:r().slotStar,label:"StarIconRating"},heartIconRating:{value:({fill:a})=>String.fromCharCode(a===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:t().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:t().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(a,e)=>`Page ${a} of ${e}`,label:"PageLabel"},slotNumberLabel:{value:t().slotNumberLabel,label:"SlotNumberLabel"},sliderLabelHandleDefault:{value:a=>`${a}`,label:"SliderLabelHandleDefault"},sliderValueTextUnits:{value:a=>`${a} units`,label:"SliderValueTextUnits"}},u=a=>{const e={...a};for(const[i,l]of Object.entries(e))s[l==null?void 0:l.value]!==void 0&&(e[i]=s[l.value].value);return e};function $(a){return f(()=>({[a]:u(o().config)})),n(()=>u(o().props))}export{$ as h};
