import { onMount } from 'svelte';

export function setBackground(background: string) {
	onMount(() => {
		console.log(background);
		document.documentElement.style.setProperty('--background-image', background);
	});
}
