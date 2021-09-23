<script lang="ts">
	import { onMount } from 'svelte';

	import configJson from '../../public/config.json';

	let configFetch = {}; // Not loaded yet, will load in onMount
	let configEndpoint = {}; // Not loaded yet, will load in onMount

	async function fetchStatic() {
		const config = await fetch('/static-config.json');
		configFetch = await config.json();
	}

	async function fetchEndpoint() {
		const config = await fetch('/config-endpoint.json');
		configEndpoint = await config.json();
	}

	onMount(async () => {
		await Promise.all([fetchStatic(), fetchEndpoint()]);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Home</h1>

<hr />

<h3>JSON load:</h3>

<h4>As javascript import:</h4>
<p>(cannot include any logic, just simple static file)</p>

<p>{JSON.stringify(configJson)}</p>

<h4>As fetch request to static folder:</h4>
<p>(cannot include any logic, just simple static file)</p>

<p>{JSON.stringify(configFetch)}</p>

<h4>As fetch request to SvelteKit endpoint:</h4>
<p>
	(Can include server-side logic. Is ran everytine on development, but only once at build process
	before production)
</p>

<p>{JSON.stringify(configEndpoint)}</p>
