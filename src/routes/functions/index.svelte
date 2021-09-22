<script lang="ts">
	import { onMount } from 'svelte';

	let functionsPromise: Promise<{
		sum: number;
		functions: any[];
	}> = new Promise(() => {}); // empty promise = loading

	onMount(async () => {
		functionsPromise = fetch('https://aw10.matejbaco.eu/v1/functions', {
			method: 'GET',
			headers: {
				'X-Appwrite-Project': '614acb26ee4cf',
				'X-Appwrite-key':
					'b0f119d09c1c321827fdad20c375889c9c55ff1b61ff42a37afa01861c5e24b5a85745ee26d3b4b85985306d93b0285312910a659b0767960ebc7bffe8f6472c84a8d3b8823d27e8650ac65834ccbbed0966adb310753bf193e29f2d43717da4bb4360ca19d11d32c3a3eeb2798fcc91a57e61972b5dc228b1c33a1ce5fd83ab'
			}
		}).then((query) => {
			try {
				return query.json();
			} catch (err) {
				return query.text();
			}
		});
	});
</script>

<h1>Functions - Home</h1>

<a href="/functions/f-abcd">Detail of function with ID abcd</a>

<hr />

{#await functionsPromise}
	<p>Loading functions ...</p>
{:then functionsQuery}
	<p>Sum: {functionsQuery.sum}</p>

	{#each functionsQuery.functions as f}
		<h5>{f.name}</h5>
	{/each}
{:catch error}
	<p style="color: red">{error}</p>
{/await}
