<script lang="ts">
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';
	export const isShown = true;
</script>

<header class="main-header">
	<img src="/assets/shared/logo.svg" alt="Space logo" />
	<hr />
	<img class="mobile-nav-icon" src="/assets/shared/icon-hamburger.svg" alt="menu button" />
	<div class={isShown ? 'mobile-nav-wrapper show' : 'mobile-nav-wrapper hide'}>
		<div class="mobile-nav-close-icon">
			<img class="mobile-nav-icon" src="/assets/shared/icon-close.svg" alt="menu button" />
		</div>
		<nav class="main-nav">
			<NavItem title="Home" num="00" href="/" />
			<NavItem title="Destination" num="01" href="/destination/moon" />
			<NavItem title="Crew" num="02" href="/crew/commander" />
			<NavItem title="Technology" num="03" href="/tech/vehicle" />
		</nav>
	</div>
</header>
