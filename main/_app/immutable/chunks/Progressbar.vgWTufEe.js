const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { createProgressbar } from "./progressbar";
import { Slot } from "@agnos-ui/svelte-headless/slot";
import { callWidgetFactory } from "../../config";
import ProgressbarDefaultStructure from "./ProgressbarDefaultStructure.svelte";
const widget = callWidgetFactory({
  factory: createProgressbar,
  widgetName: "progressbar",
  $$slots,
  $$props,
  defaultConfig: {
    slotStructure: ProgressbarDefaultStructure
  },
  events: {}
});
const {
  stores: { slotStructure$, className$ },
  state$,
  directives: { ariaDirective }
} = widget;
export const api = widget.api;
$:
  widget.patchChangedProps($$props);
$:
  slotContext = { widget, state: $state$ };
<\/script>

<div use:ariaDirective use:__AgnosUISveltePreprocess__classDirective={($className$ || undefined)} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(ariaDirective, [__AgnosUISveltePreprocess__classDirective, ($className$ || undefined)])}>
	<Slot slotContent={$slotStructure$} props={slotContext} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="structure" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
</div>
`;export{t as default};
