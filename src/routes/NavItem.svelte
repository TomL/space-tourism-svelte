<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let num: string = '';
	export let title: string;
</script>

<div class={$page.url.pathname === href ? 'active' : ''}>
	<a {href}>
		{#if num}<span class="nav-number">{num}</span>{/if}{title}
	</a>
</div>
