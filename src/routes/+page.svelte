<script lang="ts">
	import type { PageData } from './$types';
	import { setBackground } from '@/helper';

	setBackground('var(--background-image-home)');
	export let data: PageData;
	$: ({ homePage } = data);
</script>

<svelte:head>
	<title>Space</title>
</svelte:head>

<div class="content">
	<div class="flex index-box">
		<div class="left-content">
			<p class="h5">{homePage.subTitle}</p>
			<p class="h1">{homePage.title}</p>
			<p class="text">
				{homePage.content}
			</p>
		</div>
		<div class="right-content right-index">
			<a class="h4 circle" href="/destination/moon">Explore</a>
		</div>
	</div>
</div>
