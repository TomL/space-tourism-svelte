<script lang="ts">
	import { fly } from 'svelte/transition';
	import { base } from '$app/paths';
	import Header from './Header.svelte';
	import './styles.css';
	import { navigating } from '$app/stores';
	import type { PageData } from './$types';
	import { pageOrderList } from '@/data';

	export let data: PageData;
	$: ({ url } = data);

	let previousPage: string = base;
	export let transitionDirection = 'right';

	$: if ($navigating) {
		previousPage = $navigating.from?.url.pathname || previousPage;
		if ($navigating.to)
			transitionDirection =
				pageOrderList.indexOf($navigating.to.url.pathname) > pageOrderList.indexOf(previousPage)
					? 'right'
					: 'left';
	}
	/*"current: {url}" "previousPage: {previousPage}" "direction : {directionE}" "index url {pages.indexOf(
			url
		)}" "index previousPage {pages.indexOf(previousPage)}"*/
</script>

<div class="container">
	<Header />
	{#key url}
		<main
			class="main"
			in:fly={transitionDirection == 'left'
				? { x: -200, duration: 300, delay: 300 }
				: { x: 200, duration: 300, delay: 300 }}
			out:fly={transitionDirection == 'left'
				? { x: 200, duration: 300 }
				: { x: -200, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
</div>
