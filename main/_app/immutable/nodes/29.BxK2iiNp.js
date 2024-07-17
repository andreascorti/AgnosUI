import{s as a,n as r}from"../chunks/scheduler.DDKLfDno.js";import{S as s,i as c,c as l,b as p,m,t as d,a as h,e as u}from"../chunks/index.DMnRV_Lo.js";import{A as f}from"../chunks/ApiDoc.Czp5ngvp.js";const b=[{name:"animated",description:"If `true`, alert closing will be animated.\n\nAnimation is triggered  when clicked on the close button (×),\nvia the `.close()` function or the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:100,character:2,position:2510},end:{line:100,character:20,position:2528},type:"boolean",defaultValue:"true"},{name:"animatedOnInit",description:"If `true`, alert opening will be animated.\n\nAnimation is triggered  when the `.open()` function is called\nor the visible prop is changed",fileName:"core/src/components/alert/common.ts",start:{line:91,character:2,position:2265},end:{line:91,character:26,position:2289},type:"boolean",defaultValue:"false"},{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:30,character:2,position:1015},end:{line:30,character:31,position:1044},type:"string",defaultValue:"'Close'"},{name:"children",description:"Template for the alert content",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:22,character:2,position:978},end:{line:22,character:38,position:1014},type:"SlotContent<AlertContext>",defaultValue:"undefined"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:17,character:2,position:807},end:{line:17,character:23,position:828},type:"boolean",defaultValue:"true"},{name:"onHidden",description:"Callback called when the alert is hidden.",fileName:"core/src/components/alert/common.ts",start:{line:59,character:2,position:1617},end:{line:59,character:23,position:1638},type:"() => void",defaultValue:"() => {}"},{name:"onShown",description:"Callback called when the alert is shown.",fileName:"core/src/components/alert/common.ts",start:{line:69,character:2,position:1749},end:{line:69,character:22,position:1769},type:"() => void",defaultValue:"() => {}"},{name:"onVisibleChange",description:"Callback called when the alert visibility changed.",fileName:"core/src/components/alert/common.ts",start:{line:49,character:2,position:1461},end:{line:49,character:46,position:1505},type:"(visible: boolean) => void",defaultValue:"() => {}"},{name:"structure",description:"Global template for the alert component",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:18,character:2,position:894},end:{line:18,character:39,position:931},type:"SlotContent<AlertContext>",defaultValue:"undefined"},{name:"transition",description:"The transition function will be executed when the alert is displayed or hidden.\n\nDepending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:40,character:2,position:1523},end:{line:40,character:27,position:1548},type:'(element: SSRHTMLElement, direction: "show" | "hide", animated: boolean, signal: AbortSignal, context: object) => Promise<void>',defaultValue:"fadeTransition"},{name:"type",description:"Type of the alert, following bootstrap types.",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:28,character:2,position:1110},end:{line:28,character:26,position:1134},type:'"primary" | "success" | "info" | "warning" | "danger" | "secondary" | "light" | "dark"',defaultValue:"'primary'"},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:23,character:2,position:916},end:{line:23,character:19,position:933},type:"boolean",defaultValue:"true"}],y=[{name:"ariaCloseButtonLabel",description:"Accessibility close button label",fileName:"core/src/components/alert/common.ts",start:{line:30,character:2,position:1015},end:{line:30,character:31,position:1044},type:"string"},{name:"children",description:"Template for the alert content",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:22,character:2,position:978},end:{line:22,character:38,position:1014},type:"SlotContent<AlertContext>"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"dismissible",description:"If `true`, alert can be dismissed by the user.\nThe close button (×) will be displayed and you can be notified of the event with the (close) output.",fileName:"core/src/components/alert/common.ts",start:{line:17,character:2,position:807},end:{line:17,character:23,position:828},type:"boolean"},{name:"hidden",description:"Is `true` when the alert is hidden. Compared to `visible`, this is updated after the transition is executed.",fileName:"core/src/components/alert/common.ts",start:{line:37,character:2,position:1247},end:{line:37,character:18,position:1263},type:"boolean"},{name:"structure",description:"Global template for the alert component",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:18,character:2,position:894},end:{line:18,character:39,position:931},type:"SlotContent<AlertContext>"},{name:"type",description:"Type of the alert, following bootstrap types.",fileName:"core-bootstrap/src/components/alert/alert.ts",start:{line:28,character:2,position:1110},end:{line:28,character:26,position:1134},type:'"primary" | "success" | "info" | "warning" | "danger" | "secondary" | "light" | "dark"'},{name:"visible",description:"If `true` the alert is visible to the user",fileName:"core/src/components/alert/common.ts",start:{line:23,character:2,position:916},end:{line:23,character:19,position:933},type:"boolean"}],g=[{name:"close",description:"Triggers alert closing programmatically (same as clicking on the close button (×)).",fileName:"core/src/components/alert/common.ts",start:{line:107,character:2,position:2665},end:{line:107,character:16,position:2679},type:"() => void"},{name:"open",description:"Triggers the alert to be displayed for the user.",fileName:"core/src/components/alert/common.ts",start:{line:112,character:2,position:2745},end:{line:112,character:15,position:2758},type:"() => void"}],w={props:b,state:y,api:g};function N(o){let e,n;return e=new f({props:{doc:w}}),{c(){l(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,i){m(e,t,i),n=!0},p:r,i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}class V extends s{constructor(e){super(),c(this,e,null,N,a,{})}}export{V as component};
