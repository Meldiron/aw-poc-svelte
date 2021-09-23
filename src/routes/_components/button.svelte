<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text: string = 'Empty button';
	export let color: 'dark' | 'red' = 'dark';
	// typed parameter with default value

	let red = color === 'red';
	// To show-off short syntax

	const dispatch = createEventDispatcher();

	function emitClick() {
		dispatch('click', {
			some: 'data'
		});
	}
</script>

<button class:red on:click={emitClick}>
	<slot />
	{text}
</button>

<style lang="less">
	button {
		background-color: black;
		color: white;

		&.red {
			background-color: red;
			color: white;
		}
	}
</style>
