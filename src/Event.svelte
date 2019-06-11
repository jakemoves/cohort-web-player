<script>
	import Episode from './Episode.svelte';
	import StorytellerCard from './StorytellerCard.svelte'
	import { slide } from 'svelte/transition'

	export let event;

	let showStorytellerCard = false
	let selectedStoryteller = event.storytellers[0]

	// DO NOT LET THIS GROW ANY FURTHER
	function handleMessage(evt) {
		console.log(evt)
		if(evt.detail.text == "showStorytellerCard"){
			console.log("showing card for " + evt.detail.storyteller)
			selectedStoryteller = event.storytellers.find( storyteller => storyteller.name == evt.detail.storyteller)
			showStorytellerCard = true
		} else if(evt.detail.text == "hideStorytellerCard"){
			console.log("hiding storyteller card")
			showStorytellerCard = false
		} else if(evt.detail.text == "audioEnded"){
			console.log(event.episodes)
			const finishedEpisode = event.episodes.find( ep => ep.number == evt.detail.episode)
			console.log(finishedEpisode)

			const storytellerName = finishedEpisode.storyteller

			selectedStoryteller = event.storytellers.find( storyteller => storyteller.name == storytellerName)

			console.log("showing card for " + selectedStoryteller.name)
			showStorytellerCard = true
		}
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

.card-container {
	margin: 1rem;
}

</style>
<h1>{event.label}</h1>
<img src={event.thumbnailImageURL} alt="placeholder image" class="img-fluid">

{#each event.episodes as episode}
<div class="episode-container">
	<Episode {...episode} on:message={handleMessage}/>
</div>
{/each}

{#if showStorytellerCard}
<div class="card-container fixed-bottom" transition:slide={{y: 600, duration: 300}}>
	<StorytellerCard storyteller={selectedStoryteller} on:message={handleMessage}/>
</div>
{/if}