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

<header class="main-header header">
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
		<nav class="nav main-nav">
			<HeaderNavItem title="Home" num="00" href="/" on:click={toggleMenu} />
			<HeaderNavItem title="Destination" num="01" href="/destination" on:click={toggleMenu} />
			<HeaderNavItem title="Crew" num="02" href="/crew" on:click={toggleMenu} />
			<HeaderNavItem title="Technology" num="03" href="/tech" on:click={toggleMenu} />
		</nav>
	</div>
</header>
