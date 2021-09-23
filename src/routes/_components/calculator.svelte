<script>
	let a = 1;
	let b = 2;
	$: result = a + b;
</script>

<input bind:value={a} type="number" placeholder="First number" /> +
<input bind:value={b} type="number" placeholder="Second number" />
= <span>{result}</span>
