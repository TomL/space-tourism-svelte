<script lang="ts">
	import { fly } from 'svelte/transition';
	import { base } from '$app/paths';
	import Header from './Header.svelte';
	import './styles.css';
	import { navigating } from '$app/stores';

	interface DataURL {
		url: string;
	}

	export let data: DataURL;
	$: ({ url } = data);

	const pages = [
		'/',
		'/destination/moon',
		'/destination/mars',
		'/destination/europa',
		'/destination/titan'
	];

	let previousPage: string = base;
	export let directionE = 'right';

	$: if ($navigating) {
		previousPage = $navigating.from?.url.pathname || previousPage;
		if ($navigating.to)
			directionE =
				pages.indexOf($navigating.to.url.pathname) > pages.indexOf(previousPage) ? 'right' : 'left';
	}
</script>

{#key url}
	<div class="container">
		"current: {url}" "previousPage: {previousPage}" "direction : {directionE}" "index url {pages.indexOf(
			url
		)}" "index previousPage {pages.indexOf(previousPage)}"
		<Header />
		<main
			in:fly={directionE == 'left'
				? { x: -200, duration: 300, delay: 300 }
				: { x: 200, duration: 300, delay: 300 }}
			out:fly={directionE == 'left' ? { x: 200, duration: 300 } : { x: -200, duration: 300 }}
		>
			<slot />
		</main>
	</div>
{/key}
