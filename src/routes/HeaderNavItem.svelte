<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let num: string;
	export let title: string;
</script>

<div
	class={(href !== '/' && $page.url.pathname.startsWith(href)) ||
	(href === '/' && $page.url.pathname === '/')
		? 'active'
		: ''}
>
	<a {href} on:click>
		<span class="nav-number">{num}</span>{title}
	</a>
</div>
