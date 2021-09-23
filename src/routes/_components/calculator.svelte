<script>
	let a = 1;
	let b = 2;
	$: result = a + b;
</script>

<input id="a" bind:value={a} type="number" placeholder="First number" /> +
<input id="b" bind:value={b} type="number" placeholder="Second number" />
= <span id="result">{result}</span>
