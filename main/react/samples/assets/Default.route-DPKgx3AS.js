import{j as e,R as m,r as c}from"./App-CMLx6mqi.js";import{u as l}from"./config-BlmzgUJa.js";import{c as d}from"./index-Vc4g3iZb.js";import{c as g}from"./rating-BR5wD7y2-PNvDhEe6.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./widget-DAs9_HQ1-Cr34IhwO.js";import"./stores-B8YEDwZq-CxCRPylI.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";function p(s){const[{visibleRating:r,stars:n,className:i,ariaLabel:o},t]=l(g,s,"rating");return e.jsx("div",{className:d("rating",i),children:n.map(({index:a})=>e.jsx(m.Fragment,{children:e.jsx("input",{onMouseLeave:t.actions.leave,onMouseEnter:()=>t.actions.hover(a+1),onClick:()=>t.actions.click(a+1),onChange:()=>{},type:"radio",name:"rating-1",className:"mask mask-star","aria-label":`${o} star ${a+1}`,checked:a+1===r})},a))})}const b=()=>{const[s,r]=c.useState(3),[n,i]=c.useState(0),[o,t]=c.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(p,{rating:s,onRatingChange:r,onHover:i,onLeave:t}),e.jsxs("div",{children:["Current rate: ",e.jsx("span",{id:"defaultRating",children:s}),e.jsx("br",{}),"Hovered: ",e.jsx("span",{id:"defaultHovered",children:n}),e.jsx("br",{}),"Left: ",e.jsx("span",{id:"defaultLeft",children:o})]})]})};export{b as default};
