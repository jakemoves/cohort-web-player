<script context="module">
let currentPlayer // creates a single "global" variable for all Episodes
</script>

<script>
import { onMount } from 'svelte'
import { createEventDispatcher } from 'svelte'	
import { fade } from 'svelte/transition'

export let number, label, thumbnailImageURL, description, contentWarning, thumbnailImageA11yText, storyteller, cues, locationDescription

const dispatch = createEventDispatcher()

let isPaused = true
let audioPlayer, playButton
let currentCue = { mediaURL: ''}
let showPlayerChoiceUI = false
let audioPreloadSetting = "none"

onMount( () => {
  if(cues.length > 0){
    currentCue = cues.find( cue => cue.cueNumber == 1)
  } else {
    playButton.setAttribute('disabled', '')
  }

  audioPlayer.addEventListener('ended', (event) => {
    console.log(event)
    if(currentCue.cueNumber == 1 && cues.length > 1){
      // present player choice UI
      showPlayerChoiceUI = true
    }
    // dispatch('message', { text: 'audioEnded', episode: number})
  })
})


$: state = isPaused ? "paused" : "playing"
$: episodeHeader = label ? label : "Episode " + number 
$: audioURL = currentCue.mediaURL
    
function playNextCue(event){

}

function onBtnPlay() {
  if(currentPlayer && currentPlayer !== audioPlayer) {
    currentPlayer.pause()
  }

  currentPlayer = audioPlayer
  isPaused = false
}

function onBtnPlayerSelected(event){
  let player = event.target.dataset.player
  if(player == "1"){
    currentCue = cues.find( cue => cue.cueNumber == 2)
  } else {
    currentCue = cues.find( cue => cue.cueNumber == 3)
  }
  audioPreloadSetting = "auto"
  showPlayerChoiceUI = false
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
  {#if thumbnailImageURL}
  <img class="thumbnail" width=120 height=100 src={thumbnailImageURL} alt={thumbnailImageA11yText}>
  {/if}

  <div>
    <h2 class="title">{episodeHeader}</h2>
    {#if storyteller}
    <p>told by: <a href="#" on:click|preventDefault={showStorytellerCard}>{storyteller}</a></p>
    {/if}
  </div>
</div>

{#if locationDescription}
<p>location: {locationDescription}</p>
{/if}

<p class="description">{description}</p>

{#if contentWarning}
<p>{contentWarning}</p>
{/if}

{#if !showPlayerChoiceUI}
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
{:else}
  <div class="form-group d-flex justify-content-around" in:fade={{duration: 250}}>
    <button type="button" class="btn btn-primary" data-player=1 on:click={onBtnPlayerSelected}>Player 1</button>
    <button type="button" class="btn btn-primary" data-player=2 on:click={onBtnPlayerSelected}>Player 2</button>
  </div>
{/if}

<audio 
  id="ep-{number}-player" 
  src={audioURL}
  preload={audioPreloadSetting}
  bind:paused={isPaused}
  bind:this={audioPlayer}
></audio>
