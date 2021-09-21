export async function get() {
	return {
		body: {
			version: 'dev-2.0.1',
			type: 'svelte-endpoint'
		}
	};
}
