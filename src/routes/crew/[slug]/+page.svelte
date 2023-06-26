<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export const isShown = true;
	export let data: PageData;
	$: ({ crew, crewPages } = data);
</script>

<header class="sub-header">
	<p class="h5"><span class="title-number">02</span>Meet your crew</p>
</header>
<div class="flex crew-box">
	<div class="left">
		<p class="h4 op-50">{crew.title}</p>
		<p class="h3">{crew.name}</p>

		<p class="text">{crew.description}</p>

		<div class="dots">
			{#each crewPages as crewPage}
				<a
					class={$page.url.pathname === '/crew/' + crewPage.slug ? 'active' : ''}
					href="/crew/{crewPage.slug}"
				/>
			{/each}
		</div>
	</div>
	<div class="right">
		<img class="crew-image" src={crew.image} alt={'Image of ' + crew.name} />
	</div>
</div>
