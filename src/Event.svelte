<script>
	export let event;
	import Episode from './Episode.svelte';

	function handleMessage(event) {
		console.log(event)
	}
</script>

<style>
h1 {
	font-size: 1.5rem;
}

.episode-container {
	margin-top: 1rem;
}

.episode-container:last-child {
	margin-bottom: 40px;
}

</style>

<h1>{event.label}</h1>
<img src={event.thumbnailImageURL} alt="placeholder image" class="img-fluid">

{#each event.episodes as episode}
<div class="episode-container">
	<Episode {...episode} on:message={handleMessage}/>
</div>
{/each}