<script lang="ts">
	import { fade } from 'svelte/transition';
	import Header from './Header.svelte';
	import './styles.css';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ url } = data);
</script>

<svelte:head>
	<meta name="description" content="Learn about space" />
</svelte:head>

<div class="container">
	<Header />
	{#key url}
		<main class="main" in:fade={{ duration: 300, delay: 200 }}>
			<slot />
		</main>
	{/key}
</div>
