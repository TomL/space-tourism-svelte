<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { setBackground } from '@/helper';

	setBackground('var(--background-image-crew)');

	export const isShown = true;
	export let data: PageData;
	$: ({ crew, crewPages } = data);
</script>

<div class="content">
	<header class="header sub-header">
		<p class="h5"><span class="title-number">02</span>Meet your crew</p>
	</header>
	<div class="flex crew-box">
		<div class="left-content">
			<p class="h4 crew-title">{crew.title}</p>
			<p class="h3">{crew.name}</p>

			<p class="text">{crew.description}</p>

			<div class="dots">
				{#each crewPages as crewPage}
					<a
						class={$page.url.pathname === '/crew/' + crewPage.slug ? 'active' : ''}
						href="/crew/{crewPage.slug}"
					>
						&nbsp;
					</a>
				{/each}
			</div>
		</div>
		<div class="right-content">
			<img class="crew-image" src={crew.image} alt={'Image of ' + crew.name} />
		</div>
	</div>
</div>
