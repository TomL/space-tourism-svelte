<script lang="ts">
	import { isShown } from '@/stores';
	import HeaderNavItem from './HeaderNavItem.svelte';
	import { onDestroy } from 'svelte';

	let isShownValue: boolean;

	const unsubscribe = isShown.subscribe((value) => (isShownValue = value));

	onDestroy(unsubscribe);

	function toggleMenu() {
		isShown.update((value) => !value);
	}
</script>

<header class="main-header">
	<img src="/assets/shared/logo.svg" alt="Space logo" />
	<hr />
	<button
		class="nav-open-button"
		type="button"
		on:click|preventDefault={toggleMenu}
		aria-label="Show navigation menu"
	>
		<img
			class="mobile-nav-icon"
			src="/assets/shared/icon-hamburger.svg"
			alt="menu button"
		/></button
	>
	<div class={isShownValue ? 'mobile-nav-wrapper show' : 'mobile-nav-wrapper hide'}>
		<div class="mobile-nav-close-icon">
			<button on:click|preventDefault={toggleMenu} aria-label="Hide navigation menu">
				<img class="mobile-nav-icon" src="/assets/shared/icon-close.svg" alt="menu button" />
			</button>
		</div>
		<nav class="main-nav">
			<HeaderNavItem title="Home" num="00" href="/" />
			<HeaderNavItem title="Destination" num="01" href="/destination" />
			<HeaderNavItem title="Crew" num="02" href="/crew" />
			<HeaderNavItem title="Technology" num="03" href="/tech" />
		</nav>
	</div>
</header>

<style>
	button {
		all: unset;
	}

	.mobile-nav-icon {
		width: 3rem;
		height: 3rem;
		padding: 1.5rem;
	}

	.nav-open-button {
		margin: 0 1.5rem;
	}
</style>
