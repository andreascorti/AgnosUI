import{j as e,R as v}from"./index-a1897422.js";import{c as b}from"./rating-52f8ad16.js";import{S as y}from"./slot-50fa40d8.js";import{u as R}from"./config-b1c82cd5.js";const h=b;function C(t){const[{tabindex:s,maxRating:r,visibleRating:n,ariaValueText:l,readonly:o,disabled:d,isInteractive:c,stars:u,className:x,slotStar:m,ariaLabel:f,ariaLabelledBy:g},i]=R(h,t,"rating"),p={cursor:c?"pointer":"default"};return e.jsx("div",{role:"slider",className:`d-inline-flex au-rating ${x}`,tabIndex:s,"aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":n,"aria-valuetext":l,"aria-readonly":o||void 0,"aria-disabled":d||void 0,"aria-label":f||void 0,"aria-labelledby":g||void 0,onKeyDown:a=>i.actions.handleKey(a),onMouseLeave:i.actions.leave,children:u.map(a=>e.jsxs(v.Fragment,{children:[e.jsxs("span",{className:"visually-hidden",children:["(",a.index<n?"*":" ",")"]}),e.jsx("span",{className:"au-rating-star",style:p,onMouseEnter:()=>i.actions.hover(a.index+1),onClick:()=>i.actions.click(a.index+1),children:e.jsx(y,{slotContent:m,props:a})})]},a.index))})}export{C as R};
