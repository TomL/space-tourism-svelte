<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ homePage } = data);
</script>

<div class="flex index-box">
	<div class="left">
		<p class="h5">{homePage.subTitle}</p>
		<p class="h1">{homePage.title}</p>
		<p class="text">
			{homePage.content}
		</p>
	</div>
	<div class="right right-index">
		<a class="h4 circle" href="/destination/moon">Explore</a>
	</div>
</div>
