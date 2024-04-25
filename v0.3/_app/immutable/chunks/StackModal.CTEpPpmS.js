const t=`<script lang="ts">
	import type {ModalSlots} from '@agnos-ui/svelte-bootstrap/components/modal';
	import {openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import Self from './StackModal.svelte';

	type $$Props = ModalSlots<void>['default'];
	type $$Slots = ModalSlots<void>;
	export let widget: $$Props['widget'];
	export let state: $$Props['state'];
<\/script>

This is a modal<br /><br />
<button class="btn btn-outline-primary m-1" on:click={() => openModal({slotTitle: 'Other modal', slotDefault: Self, container: state.modalElement})}>
	Launch other modal</button
><br />
<button class="btn btn-outline-secondary m-1" on:click={() => widget.api.patch({backdrop: true})}>Enable backdrop</button><button
	class="btn btn-outline-secondary m-1"
	on:click={() => widget.api.patch({backdrop: false})}>Disable backdrop</button
><br />
<button class="btn btn-outline-secondary m-1" on:click={() => widget.api.close()}>Close</button>
`;export{t as default};
