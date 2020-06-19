<script>
	import Episode from './Episode.svelte';
	import StorytellerCard from './StorytellerCard.svelte'
	import { slide } from 'svelte/transition'
	import { onMount } from 'svelte'
	import { splice } from 'svelte-extras'

	export let event

	let showStorytellerCard = false
	let selectedStoryteller = event.storytellers[0]
	let tags = ["all"]

	// DO NOT LET THIS GROW ANY FURTHER
	function handleMessage(evt) {
		console.log(evt)
		if(evt.detail.text == "showStorytellerCard"){
			let newSelectedStoryteller
			newSelectedStoryteller = event.storytellers.find( storyteller => storyteller.name == evt.detail.storyteller)
			if(newSelectedStoryteller !== undefined) {
				console.log("showing card for " + evt.detail.storyteller)
				selectedStoryteller = newSelectedStoryteller
				showStorytellerCard = true
			}
		} else if(evt.detail.text == "hideStorytellerCard"){
			console.log("hiding storyteller card")
			showStorytellerCard = false
		} else if(evt.detail.text == "episodeEnded"){
			console.log("audio playback ended for: ")
			const finishedEpisode = event.episodes.find( ep => ep.number == evt.detail.episode)
			console.log(finishedEpisode.label)

			if(finishedEpisode.label == "Tutorial") { return }

			const storytellerName = finishedEpisode.storyteller

			selectedStoryteller = event.storytellers.find( storyteller => storyteller.name == storytellerName)

			console.log("showing card for " + selectedStoryteller.name)
			showStorytellerCard = true
		}
	}
</script>

<style>
h1, h2 {
	text-align: center;
}

h1 {
	font-size: 1rem;
	text-transform:uppercase;
	font-variant: small-caps;
}

.event-description {
	/* text-align: center; */
	font-size: 0.9rem;
	line-height: 1.2rem;
}

.episode-container {
	margin: 2.5rem 0;
}

.episode-container:last-child {
	margin-bottom: 40px;
}

</style>
<h1>{event.label}</h1>
{#if event.thumbnailImageURL}
	<img src={event.thumbnailImageURL} alt="placeholder image" class="img-fluid">
{/if}
{#if event.subLabel}
	<h2>{@html event.subLabel}</h2>
{/if}

{#if event.eventDescription != ""}
<p class="event-description">{@html event.eventDescription}</p>
{/if}

<!-- {#if !showStorytellerCard} -->
{#each event.episodes as episode}
<div class="episode-container">
	<Episode {...episode} on:message={handleMessage}/>
</div>
{/each}
<!-- {/if} -->

{#if showStorytellerCard}
<div class="card-container fixed-bottom">
	<StorytellerCard storyteller={selectedStoryteller} on:message={handleMessage}/>
</div>
{/if}