import{s as o,n as a}from"../chunks/scheduler.DDKLfDno.js";import{S as c,i as r,c as l,b as p,m as d,t as m,a as h,e as f}from"../chunks/index.DMnRV_Lo.js";import{A as g}from"../chunks/ApiDoc.Czp5ngvp.js";const u=[{name:"allowedPlacements",description:`List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).`,fileName:"core/src/components/select/select.ts",start:{line:105,character:2,position:2733},end:{line:105,character:33,position:2764},type:"Placement[]",defaultValue:"['bottom-start', 'top-start', 'bottom-end', 'top-end']"},{name:"ariaLabel",description:"aria-label used for the input inside the select",fileName:"core/src/components/select/select.ts",start:{line:29,character:2,position:1302},end:{line:29,character:32,position:1332},type:"string",defaultValue:"'Select'"},{name:"badgeClassName",description:"Class to be added on selected items (displayed in the input zone)",fileName:"core/src/components/select/select.ts",start:{line:78,character:2,position:2041},end:{line:78,character:25,position:2064},type:"string",defaultValue:"''"},{name:"badgeLabel",description:`The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.`,fileName:"core-bootstrap/src/components/select/select.ts",start:{line:37,character:2,position:1114},end:{line:37,character:51,position:1163},type:"SlotContent<SelectItemContext<Item>>",defaultValue:"({itemContext}: SelectItemContext<any>) => itemContext.item"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string",defaultValue:"''"},{name:"disabled",description:"true if the select is disabled",fileName:"core/src/components/select/select.ts",start:{line:50,character:2,position:1608},end:{line:50,character:20,position:1626},type:"boolean",defaultValue:"false"},{name:"filterText",description:"Filtered text to be display in the filter input",fileName:"core/src/components/select/select.ts",start:{line:43,character:2,position:1511},end:{line:43,character:21,position:1530},type:"string",defaultValue:"''"},{name:"id",description:"id used for the input inside the select",fileName:"core/src/components/select/select.ts",start:{line:22,character:2,position:1181},end:{line:22,character:25,position:1204},type:"string",defaultValue:"undefined"},{name:"itemIdFn",description:`Custom function to get the id of an item
By default, the item is returned`,fileName:"core/src/components/select/select.ts",start:{line:116,character:2,position:2928},end:{line:116,character:31,position:2957},type:"(item: Item) => string",defaultValue:"(item: any) => '' + item"},{name:"itemLabel",description:`The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.`,fileName:"core-bootstrap/src/components/select/select.ts",start:{line:48,character:2,position:1422},end:{line:48,character:50,position:1470},type:"SlotContent<SelectItemContext<Item>>",defaultValue:"({itemContext}: SelectItemContext<any>) => itemContext.item"},{name:"items",description:"List of available items for the dropdown",fileName:"core/src/components/select/select.ts",start:{line:94,character:2,position:2332},end:{line:94,character:16,position:2346},type:"Item[]",defaultValue:"[]"},{name:"loading",description:"true if a loading process is being done",fileName:"core/src/components/select/select.ts",start:{line:85,character:2,position:2151},end:{line:85,character:19,position:2168},type:"boolean",defaultValue:"false"},{name:"menuClassName",description:"Class to be added on the dropdown menu container",fileName:"core/src/components/select/select.ts",start:{line:64,character:2,position:1807},end:{line:64,character:24,position:1829},type:"string",defaultValue:"''"},{name:"menuItemClassName",description:"Class to be added on menu items",fileName:"core/src/components/select/select.ts",start:{line:71,character:2,position:1905},end:{line:71,character:28,position:1931},type:"string",defaultValue:"''"},{name:"navSelector",description:"Retrieves navigable elements within an HTML element containing badges and the input.",fileName:"core/src/components/select/select.ts",start:{line:128,character:2,position:3247},end:{line:128,character:81,position:3326},type:"(node: HTMLElement) => NodeListOf<HTMLSpanElement | HTMLInputElement>",defaultValue:"(node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')"},{name:"onFilterTextChange",description:"Callback called when the text filter change",fileName:"core/src/components/select/select.ts",start:{line:152,character:2,position:3681},end:{line:152,character:41,position:3720},type:"(text: string) => void",defaultValue:"() => {}"},{name:"onOpenChange",description:"Callback called dropdown open state change",fileName:"core/src/components/select/select.ts",start:{line:141,character:2,position:3499},end:{line:141,character:38,position:3535},type:"(isOpen: boolean) => void",defaultValue:"() => {}"},{name:"onSelectedChange",description:"Callback called when the selection change",fileName:"core/src/components/select/select.ts",start:{line:162,character:2,position:3832},end:{line:162,character:43,position:3873},type:"(selected: Item[]) => void",defaultValue:"() => {}"},{name:"open",description:"true if the select is open",fileName:"core/src/components/select/select.ts",start:{line:57,character:2,position:1700},end:{line:57,character:16,position:1714},type:"boolean",defaultValue:"false"},{name:"selected",description:"List of selected item ids",fileName:"core/src/components/select/select.ts",start:{line:36,character:2,position:1402},end:{line:36,character:19,position:1419},type:"Item[]",defaultValue:"[]"}],b=[{name:"ariaLabel",description:"aria-label used for the input inside the select",fileName:"core/src/components/select/select.ts",start:{line:29,character:2,position:1302},end:{line:29,character:32,position:1332},type:"string"},{name:"badgeClassName",description:"Class to be added on selected items (displayed in the input zone)",fileName:"core/src/components/select/select.ts",start:{line:78,character:2,position:2041},end:{line:78,character:25,position:2064},type:"string"},{name:"badgeLabel",description:`The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.`,fileName:"core-bootstrap/src/components/select/select.ts",start:{line:37,character:2,position:1114},end:{line:37,character:51,position:1163},type:"SlotContent<SelectItemContext<Item>>"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:7,character:2,position:143},end:{line:7,character:20,position:161},type:"string"},{name:"disabled",description:"true if the select is disabled",fileName:"core/src/components/select/select.ts",start:{line:50,character:2,position:1608},end:{line:50,character:20,position:1626},type:"boolean"},{name:"filterText",description:"Filtered text to be display in the filter input",fileName:"core/src/components/select/select.ts",start:{line:43,character:2,position:1511},end:{line:43,character:21,position:1530},type:"string"},{name:"highlighted",description:`Highlighted item context.
It is designed to define the highlighted item in the dropdown menu`,fileName:"core/src/components/select/select.ts",start:{line:200,character:2,position:4559},end:{line:200,character:45,position:4602},type:"ItemContext<Item>"},{name:"id",description:"id used for the input inside the select",fileName:"core/src/components/select/select.ts",start:{line:22,character:2,position:1181},end:{line:22,character:25,position:1204},type:"string"},{name:"itemLabel",description:`The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.`,fileName:"core-bootstrap/src/components/select/select.ts",start:{line:48,character:2,position:1422},end:{line:48,character:50,position:1470},type:"SlotContent<SelectItemContext<Item>>"},{name:"loading",description:"true if a loading process is being done",fileName:"core/src/components/select/select.ts",start:{line:85,character:2,position:2151},end:{line:85,character:19,position:2168},type:"boolean"},{name:"menuClassName",description:"Class to be added on the dropdown menu container",fileName:"core/src/components/select/select.ts",start:{line:64,character:2,position:1807},end:{line:64,character:24,position:1829},type:"string"},{name:"menuItemClassName",description:"Class to be added on menu items",fileName:"core/src/components/select/select.ts",start:{line:71,character:2,position:1905},end:{line:71,character:28,position:1931},type:"string"},{name:"open",description:"true if the select is open",fileName:"core/src/components/select/select.ts",start:{line:57,character:2,position:1700},end:{line:57,character:16,position:1714},type:"boolean"},{name:"placement",description:"Current placement of the dropdown",fileName:"core/src/components/select/select.ts",start:{line:205,character:2,position:4653},end:{line:205,character:35,position:4686},type:'"top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end"'},{name:"selected",description:"List of selected item ids",fileName:"core/src/components/select/select.ts",start:{line:36,character:2,position:1402},end:{line:36,character:19,position:1419},type:"Item[]"},{name:"selectedContexts",description:"List of selected items to be display",fileName:"core/src/components/select/select.ts",start:{line:194,character:2,position:4407},end:{line:194,character:40,position:4445},type:"ItemContext<Item>[]"},{name:"visibleItems",description:"List of item contexts, to be displayed in the menu",fileName:"core/src/components/select/select.ts",start:{line:189,character:2,position:4319},end:{line:189,character:36,position:4353},type:"ItemContext<Item>[]"}],y=[{name:"clear",description:"Clear all the selected items",fileName:"core/src/components/select/select.ts",start:{line:212,character:2,position:4769},end:{line:212,character:16,position:4783},type:"() => void"},{name:"clearText",description:"Clear the filter text",fileName:"core/src/components/select/select.ts",start:{line:217,character:2,position:4822},end:{line:217,character:20,position:4840},type:"() => void"},{name:"close",description:"close the select",fileName:"core/src/components/select/select.ts",start:{line:271,character:2,position:5960},end:{line:271,character:16,position:5974},type:"() => void"},{name:"highlight",description:"Highlight the given item, if there is a corresponding match among the visible list",fileName:"core/src/components/select/select.ts",start:{line:222,character:2,position:4940},end:{line:222,character:30,position:4968},type:"(item: Item) => void"},{name:"highlightFirst",description:"Highlight the first item among the visible list",fileName:"core/src/components/select/select.ts",start:{line:227,character:2,position:5033},end:{line:227,character:25,position:5056},type:"() => void"},{name:"highlightLast",description:"Highlight the last item among the visible list",fileName:"core/src/components/select/select.ts",start:{line:244,character:2,position:5374},end:{line:244,character:24,position:5396},type:"() => void"},{name:"highlightNext",description:`Highlight the next item among the visible list.
Loop to the first item if needed`,fileName:"core/src/components/select/select.ts",start:{line:239,character:2,position:5288},end:{line:239,character:24,position:5310},type:"() => void"},{name:"highlightPrevious",description:`Highlight the previous item among the visible list
Loop to the last item if needed`,fileName:"core/src/components/select/select.ts",start:{line:233,character:2,position:5160},end:{line:233,character:28,position:5186},type:"() => void"},{name:"open",description:"open the select",fileName:"core/src/components/select/select.ts",start:{line:267,character:2,position:5914},end:{line:267,character:15,position:5927},type:"() => void"},{name:"select",description:`Select the provided item.
The selected list is used to`,fileName:"core/src/components/select/select.ts",start:{line:251,character:2,position:5509},end:{line:251,character:27,position:5534},type:"(item: Item) => void"},{name:"toggle",description:"Toggle the dropdown menu",fileName:"core/src/components/select/select.ts",start:{line:276,character:2,position:6084},end:{line:276,character:33,position:6115},type:"(isOpen?: boolean) => void"},{name:"toggleItem",description:"Toggle the selection of an item",fileName:"core/src/components/select/select.ts",start:{line:262,character:2,position:5832},end:{line:262,character:51,position:5881},type:"(item: Item, selected?: boolean) => void"},{name:"unselect",description:"Unselect the provided item.",fileName:"core/src/components/select/select.ts",start:{line:256,character:2,position:5617},end:{line:256,character:29,position:5644},type:"(item: Item) => void"}],N={props:u,state:b,api:y};function C(n){let e,i;return e=new g({props:{doc:N}}),{c(){l(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,s){d(e,t,s),i=!0},p:a,i(t){i||(m(e.$$.fragment,t),i=!0)},o(t){h(e.$$.fragment,t),i=!1},d(t){f(e,t)}}}class w extends c{constructor(e){super(),r(this,e,null,C,o,{})}}export{w as component};
