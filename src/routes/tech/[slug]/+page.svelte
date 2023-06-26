<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { setBackground } from '@/helper';

	setBackground('var(--background-image-tech)');

	export const isShown = true;
	export let data: PageData;
	$: ({ tech, techPages } = data);
</script>

<svelte:head>
	<title>{tech.title}</title>
</svelte:head>

<div class="content">
	<header class="header sub-header">
		<p class="h5"><span class="title-number">03</span>Space launch 101</p>
	</header>
	<div class="flex tech-box">
		<div class="left-content">
			<div class="dots-big">
				{#each techPages as techPage, index}
					<a
						class={$page.url.pathname === '/tech/' + techPage.slug ? 'active' : ''}
						href="/tech/{techPage.slug}"
					>
						<span class="h4">{index + 1}</span>
					</a>
				{/each}
			</div>
			<div class="tech-content">
				<p class="sh3">The terminology...</p>
				<p class="h3">{tech.title}</p>
				<p class="text">{tech.description}</p>
			</div>
		</div>
		<div class="right-content">
			<picture>
				<source class="vehicle-image" srcSet={tech.imageLandscape} media="(max-width: 1024px)" />
				<img class="vehicle-image" src={tech.image} alt={'Image of ' + tech.title} />
			</picture>
		</div>
	</div>
</div>
