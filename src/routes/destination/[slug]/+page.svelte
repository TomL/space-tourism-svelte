<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { setBackground } from '@/helper';

	setBackground('var(--background-image-destination)');

	export const isShown = true;
	export let data: PageData;
	$: ({ destination, destinationPages } = data);
</script>

<header class="sub-header">
	<p class="h5"><span class="title-number">01</span>Pick your destination</p>
</header>
<div class="flex destination-box">
	<div class="left-content planet-left">
		<img
			class="planet-image"
			src={destination.image}
			alt={'Image of ' + destination.title}
			height="445"
			width="445"
		/>
	</div>
	<div class="">
		<nav class="sub-nav">
			{#each destinationPages as destinationPage}
				<div class={$page.url.pathname === '/destination/' + destinationPage.slug ? 'active' : ''}>
					<a href="/destination/{destinationPage.slug}">{destinationPage.title} </a>
				</div>
			{/each}
		</nav>
		<p class="h2">{destination.title}</p>
		<p class="text">
			{destination.description}
		</p>
		<hr class="destination-line" />
		<div class="flex destination-info-wrapper">
			<div class="destination-info">
				<p class="sh2">Avg. distance</p>
				<p class="sh1">{destination.distance}</p>
			</div>
			<div class="destination-info">
				<p class="sh2">Est. travel time</p>
				<p class="sh1">{destination.travelTime}</p>
			</div>
		</div>
	</div>
</div>
