import{s as i,n as r}from"../chunks/scheduler.Bus5bagK.js";import{S as s,i as p,c,b as l,m as g,t as u,a as m,e as d}from"../chunks/index.hvgIYORv.js";import{A as h}from"../chunks/ApiDoc.hzMLFrsy.js";const f=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:44,character:2,position:1451},end:{line:44,character:22,position:1471},type:"string",defaultValue:"'(current)'"},{name:"ariaEllipsisLabel",description:`The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:84,character:2,position:2657},end:{line:84,character:28,position:2683},type:"string",defaultValue:"'Ellipsis page element'"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:52,character:2,position:1691},end:{line:52,character:25,position:1714},type:"string",defaultValue:"'Action link for first page'"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:36,character:2,position:1236},end:{line:36,character:20,position:1254},type:"string",defaultValue:"'Page navigation'"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:76,character:2,position:2424},end:{line:76,character:24,position:2446},type:"string",defaultValue:"'Action link for last page'"},{name:"ariaLiveLabel",description:`Provide the label for the aria-live element
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:184,character:2,position:5359},end:{line:184,character:68,position:5425},type:"(currentPage: number, pageCount: number) => string",defaultValue:"(currentPage: number, pageCount: number) => `Current page is ${currentPage}`"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:68,character:2,position:2184},end:{line:68,character:24,position:2206},type:"string",defaultValue:"'Action link for next page'"},{name:"ariaPageLabel",description:`Provide the label for each "Page" page button.
This is used for accessibility purposes.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:170,character:2,position:4869},end:{line:170,character:68,position:4935},type:"(processPage: number, pageCount: number) => string",defaultValue:"(processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:60,character:2,position:1940},end:{line:60,character:28,position:1966},type:"string",defaultValue:"'Action link for previous page'"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:102,character:2,position:3008},end:{line:102,character:25,position:3031},type:"boolean",defaultValue:"false"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"collectionSize",description:`The number of items in your paginated collection.

Note, that this is not the number of pages. Page numbers are calculated dynamically based on
\`collectionSize\` and \`pageSize\`.

Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.

Whatever the collectionSize the page number is of minimum 1.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:117,character:2,position:3515},end:{line:117,character:25,position:3538},type:"number",defaultValue:"0"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:96,character:2,position:2887},end:{line:96,character:26,position:2911},type:"boolean",defaultValue:"true"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:90,character:2,position:2770},end:{line:90,character:20,position:2788},type:"boolean",defaultValue:"false"},{name:"onPageChange",description:`An event fired when the page is changed.

Event payload is the number of the newly selected page.

Page numbers start with \`1\`.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:137,character:2,position:3859},end:{line:137,character:39,position:3896},type:"(page: number) => void",defaultValue:"() => {}"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:19,character:2,position:819},end:{line:19,character:15,position:832},type:"number",defaultValue:"1"},{name:"pageLink",description:`Factory function providing the href for a "Page" page anchor,
based on the current page number`,fileName:"core/src/components/pagination/pagination.ts",start:{line:195,character:2,position:5655},end:{line:195,character:43,position:5696},type:"(pageNumber: number) => string",defaultValue:"(_page: number) => PAGE_LINK_DEFAULT"},{name:"pageSize",description:"The number of items per page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:124,character:2,position:3634},end:{line:124,character:19,position:3651},type:"number",defaultValue:"10"},{name:"pagesFactory",description:`pagesFactory returns a function computing the array of pages to be displayed
as number (-1 are treated as ellipsis).
Use Page slot to customize the pages view and not this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:156,character:2,position:4377},end:{line:156,character:62,position:4437},type:"(page: number, pageCount: number) => number[]",defaultValue:`(_page: number, pageCount: number) => {
		const pages: number[] = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return pages;
	}`},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:27,character:2,position:1006},end:{line:27,character:27,position:1031},type:'"sm" | "lg"',defaultValue:"null"},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:45,character:2,position:1784},end:{line:45,character:47,position:1829},type:"SlotContent<PaginationContext>",defaultValue:"'…'"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:53,character:2,position:2024},end:{line:53,character:44,position:2066},type:"SlotContent<PaginationContext>",defaultValue:"'«'"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:77,character:2,position:2738},end:{line:77,character:43,position:2779},type:"SlotContent<PaginationContext>",defaultValue:"'»'"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:69,character:2,position:2503},end:{line:69,character:43,position:2544},type:"SlotContent<PaginationContext>",defaultValue:"'›'"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:96,character:2,position:3281},end:{line:96,character:56,position:3335},type:"SlotContent<PaginationNumberContext>",defaultValue:"({displayedPage}: PaginationNumberContext) => `${displayedPage}`"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:84,character:2,position:2934},end:{line:84,character:44,position:2976},type:"SlotContent<PaginationContext>",defaultValue:"undefined"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:61,character:2,position:2264},end:{line:61,character:47,position:2309},type:"SlotContent<PaginationContext>",defaultValue:"'‹'"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses PaginationCommonPropsAndState.slotEllipsis slotEllipsis, PaginationCommonPropsAndState.slotFirst slotFirst,
PaginationCommonPropsAndState.slotPrevious slotPrevious, PaginationCommonPropsAndState.slotNext slotNext,
PaginationCommonPropsAndState.slotLast slotLast, PaginationCommonPropsAndState.slotPages slotPages,
PaginationCommonPropsAndState.slotNumberLabel slotNumberLabel,`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:37,character:2,position:1540},end:{line:37,character:48,position:1586},type:"SlotContent<PaginationContext>",defaultValue:"undefined"}],b=[{name:"activeLabel",description:`The label for the "active" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:44,character:2,position:1451},end:{line:44,character:22,position:1471},type:"string"},{name:"ariaEllipsisLabel",description:`The label for the "Ellipsis" page.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:84,character:2,position:2657},end:{line:84,character:28,position:2683},type:"string"},{name:"ariaFirstLabel",description:`The label for the "First" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:52,character:2,position:1691},end:{line:52,character:25,position:1714},type:"string"},{name:"ariaLabel",description:`The label for the nav element.

for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:36,character:2,position:1236},end:{line:36,character:20,position:1254},type:"string"},{name:"ariaLastLabel",description:`The label for the "Last" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:76,character:2,position:2424},end:{line:76,character:24,position:2446},type:"string"},{name:"ariaLiveLabelText",description:"The aria-live text",fileName:"core/src/components/pagination/pagination.ts",start:{line:238,character:2,position:6531},end:{line:238,character:28,position:6557},type:"string"},{name:"ariaNextLabel",description:`The label for the "Next" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:68,character:2,position:2184},end:{line:68,character:24,position:2206},type:"string"},{name:"ariaPreviousLabel",description:`The label for the "Previous" page button.
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core/src/components/pagination/pagination.ts",start:{line:60,character:2,position:1940},end:{line:60,character:28,position:1966},type:"string"},{name:"boundaryLinks",description:'If `true`, the "First" and "Last" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:102,character:2,position:3008},end:{line:102,character:25,position:3031},type:"boolean"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/src/components/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"directionLinks",description:'If `true`, the "Next" and "Previous" page links are shown.',fileName:"core/src/components/pagination/pagination.ts",start:{line:96,character:2,position:2887},end:{line:96,character:26,position:2911},type:"boolean"},{name:"directionsHrefs",description:"The hrefs for the direction links",fileName:"core/src/components/pagination/pagination.ts",start:{line:235,character:2,position:6468},end:{line:235,character:35,position:6501},type:"DirectionsHrefs"},{name:"disabled",description:"If `true`, pagination links will be disabled.",fileName:"core/src/components/pagination/pagination.ts",start:{line:90,character:2,position:2770},end:{line:90,character:20,position:2788},type:"boolean"},{name:"nextDisabled",description:"true if the next link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:225,character:2,position:6258},end:{line:225,character:24,position:6280},type:"boolean"},{name:"page",description:"The current page.\n\nPage numbers start with `1`.",fileName:"core/src/components/pagination/pagination.ts",start:{line:19,character:2,position:819},end:{line:19,character:15,position:832},type:"number"},{name:"pageCount",description:"The number of pages.",fileName:"core/src/components/pagination/pagination.ts",start:{line:213,character:2,position:5992},end:{line:213,character:20,position:6010},type:"number"},{name:"pages",description:"The current pages, the number in the Array is the number of the page.",fileName:"core/src/components/pagination/pagination.ts",start:{line:217,character:2,position:6096},end:{line:217,character:18,position:6112},type:"number[]"},{name:"pagesHrefs",description:'The hrefs for each "Page" page link',fileName:"core/src/components/pagination/pagination.ts",start:{line:232,character:2,position:6401},end:{line:232,character:23,position:6422},type:"string[]"},{name:"pagesLabel",description:'The label for each "Page" page link.',fileName:"core/src/components/pagination/pagination.ts",start:{line:229,character:2,position:6333},end:{line:229,character:23,position:6354},type:"string[]"},{name:"previousDisabled",description:"true if the previous link need to be disabled",fileName:"core/src/components/pagination/pagination.ts",start:{line:221,character:2,position:6174},end:{line:221,character:28,position:6200},type:"boolean"},{name:"size",description:`The pagination display size.

Bootstrap currently supports small and large sizes.`,fileName:"core/src/components/pagination/pagination.ts",start:{line:27,character:2,position:1006},end:{line:27,character:27,position:1031},type:'"sm" | "lg"'},{name:"slotEllipsis",description:`The template to use for the ellipsis slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:45,character:2,position:1784},end:{line:45,character:47,position:1829},type:"SlotContent<PaginationContext>"},{name:"slotFirst",description:`The template to use for the first slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:53,character:2,position:2024},end:{line:53,character:44,position:2066},type:"SlotContent<PaginationContext>"},{name:"slotLast",description:`The template to use for the last slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:77,character:2,position:2738},end:{line:77,character:43,position:2779},type:"SlotContent<PaginationContext>"},{name:"slotNext",description:`The template to use for the next slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:69,character:2,position:2503},end:{line:69,character:43,position:2544},type:"SlotContent<PaginationContext>"},{name:"slotNumberLabel",description:`The template to use for the number slot
override any configuration parameters provided for this
for I18n, we suggest to use the global configuration`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:96,character:2,position:3281},end:{line:96,character:56,position:3335},type:"SlotContent<PaginationNumberContext>"},{name:"slotPages",description:`The template to use for the pages slot
To use to customize the pages view
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:84,character:2,position:2934},end:{line:84,character:44,position:2976},type:"SlotContent<PaginationContext>"},{name:"slotPrevious",description:`The template to use for the previous slot
for I18n, we suggest to use the global configuration
override any configuration parameters provided for this`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:61,character:2,position:2264},end:{line:61,character:47,position:2309},type:"SlotContent<PaginationContext>"},{name:"slotStructure",description:`The template to use for the structure of the pagination component
The default structure uses PaginationCommonPropsAndState.slotEllipsis slotEllipsis, PaginationCommonPropsAndState.slotFirst slotFirst,
PaginationCommonPropsAndState.slotPrevious slotPrevious, PaginationCommonPropsAndState.slotNext slotNext,
PaginationCommonPropsAndState.slotLast slotLast, PaginationCommonPropsAndState.slotPages slotPages,
PaginationCommonPropsAndState.slotNumberLabel slotNumberLabel,`,fileName:"core-bootstrap/src/components/pagination/pagination.ts",start:{line:37,character:2,position:1540},end:{line:37,character:48,position:1586},type:"SlotContent<PaginationContext>"}],y=[],v={props:f,state:b,api:y};function P(o){let e,n;return e=new h({props:{doc:v}}),{c(){c(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,a){g(e,t,a),n=!0},p:r,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}class w extends s{constructor(e){super(),p(this,e,null,P,i,{})}}export{w as component};
