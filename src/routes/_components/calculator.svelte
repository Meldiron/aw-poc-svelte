<script>
	import { writable } from 'svelte/store';

	let result = 3;
	let a = writable(1);
	let b = writable(2);

	const calculateResults = () => {
		result = $a + $b;
	};

	a.subscribe(calculateResults);
	b.subscribe(calculateResults);
</script>

<input bind:value={$a} type="number" placeholder="First number" /> +
<input bind:value={$b} type="number" placeholder="Second number" />
= <span>{result}</span>
