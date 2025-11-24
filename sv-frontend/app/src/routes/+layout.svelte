<script>
	import svelteFavicon from '$lib/assets/favicon.svg';
	import customFavicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={customFavicon} />
</svelte:head>

{@render children?.()}
