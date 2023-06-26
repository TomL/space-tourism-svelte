<script lang="ts">
	import { goto, afterNavigate } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { base } from '$app/paths';
	import Header from './Header.svelte';
	import './styles.css';

	interface Data {
		url: string;
	}

	export let data: Data;
	$: ({ url } = data);
	console.log(data);

	const pages = [
		'/',
		'/destination/moon',
		'/destination/mars',
		'/destination/europa',
		'/destination/titan'
	];

	let previousPage: string = base;
	export let directionE = 'right';
	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		directionE = pages.indexOf(url) > pages.indexOf(previousPage) ? 'right' : 'left';
	});
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
