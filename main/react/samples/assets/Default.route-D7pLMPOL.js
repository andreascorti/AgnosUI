import{r as t,j as a}from"./App-DHhP8U0X.js";import{S as p}from"./select-BOxkMFMh-C--6ltk6.js";import"./stores-B4F_j8QF.js";import"./floatingUI-4u3Ye2XO.js";import"./directive-GSGkMcBJ.js";import"./promise-CY2U8bTP-B6m5TA-Q.js";import"./focustrack-DW8VkQAN.js";import"./navManager-CaHuqqRW.js";import"./config-BbThgUal.js";import"./widget-DAs9_HQ1-BMVDwHFs.js";import"./stores-B8YEDwZq-DfBENgOA.js";import"./slot-Is8FqGrj.js";import"./directive-CX0hxCpP-Cj2tDrhJ.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],F=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{F as default};
