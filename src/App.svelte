<script>
	export let event;
	import Episode from './Episode.svelte';

</script>

<style>
	h1 {
		color: blue;
	}

	img {
		width: 100%;
	}
</style>

<h1>{event.label}</h1>
<img src={event.thumbnailImageURL} alt="placeholder image">

{#each event.episodes as episode}
<Episode {...episode}/>
{/each}