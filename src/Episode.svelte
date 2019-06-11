<script context="module">
let currentPlayer // creates a single "global" variable for all Episodes
</script>

<script>
import { onMount } from 'svelte'
import { createEventDispatcher } from 'svelte'

export let number, label, thumbnailImageURL, description, thumbnailImageA11yText, storyteller, cues

const dispatch = createEventDispatcher()

let isPaused = true
let audioPlayer, playButton
let audioURL

onMount( () => {
  if(cues.length == 1 && cues[0].mediaURL){
    audioURL = cues[0].mediaURL
  } else {
    playButton.setProperty('disabled', '')
  }

  audioPlayer.addEventListener('ended', (event) => {
    dispatch('message', { text: 'audioEnded', episode: number})
  })
})


$: state = isPaused ? "paused" : "playing"
$: episodeHeader = label ? 
  "Episode " + number + ": " + label :
  "Episode " + number 
    
function onBtnPlay() {
  if(currentPlayer && currentPlayer !== audioPlayer) {
    currentPlayer.pause()
  }

  currentPlayer = audioPlayer
  isPaused = false
}

function onBtnPause() {
  isPaused = true
}

function showStorytellerCard(event) {
  event.pre
  dispatch('message', { text: 'showStorytellerCard', storyteller: storyteller})
}
</script>

<style>
h2 {
  font-size: 1.25rem;
}

.thumbnail {
  min-width: 120px;
  margin-right: 1rem;
}

</style>

<div class="episode-header d-flex">
  <img class="thumbnail" width=120 height=100 src={thumbnailImageURL} alt={thumbnailImageA11yText}>
  <div>
    <h2 class="title">{episodeHeader}</h2>
    <p>told by: <a href="#" on:click|preventDefault={showStorytellerCard}>{storyteller}</a></p>
  </div>
</div>

<p class="description">{description}</p>

{#if isPaused}
<button 
  type="button" 
  on:click={onBtnPlay} 
  class="btn btn-outline btn-outline-success btn-block"
  bind:this={playButton}>
  Play
</button>
{:else}
<button 
  type="button" 
  on:click={onBtnPause} 
  class="btn btn-outline btn-outline-warning btn-block">
  Pause
</button>
{/if}

<audio 
  id="ep-{number}-player" 
  src={audioURL}
  bind:paused={isPaused}
  bind:this={audioPlayer}
></audio>
