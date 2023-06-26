<script lang="ts">
	import NavItem from '@/routes/NavItem.svelte';
	import type { Data } from './+page';
	export const isShown = true;
	export let data: Data;
</script>

<header class="sub-header">
	<p class="h5"><span class="title-number">01</span>Pick your destination</p>
</header>
<div class="flex destination-box">
	<div class="left planet-left">
		<img
			class="planet-image"
			src={data.destination.image}
			alt={'Image of ' + data.destination.title}
			height="445"
			width="445"
		/>
	</div>
	<div class="right">
		<nav class="sub-nav">
			<NavItem title="Moon" href="/destination/moon" />
			<NavItem title="mars" href="/destination/mars" />
			<NavItem title="europa" href="/destination/europa" />
			<NavItem title="titan" href="/destination/titan" />
		</nav>
		<p class="h2">{data.destination.title}</p>
		<p class="text">
			{data.destination.description}
		</p>
		<hr class="destination-line" />
		<div class="flex destination-info-wrapper">
			<div class="destination-info">
				<p class="sh2">Avg. distance</p>
				<p class="sh1">{data.destination.distance}</p>
			</div>
			<div class="destination-info">
				<p class="sh2">Est. travel time</p>
				<p class="sh1">{data.destination.travelTime}</p>
			</div>
		</div>
	</div>
</div>
