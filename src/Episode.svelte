<script context="module">
let currentPlayer // creates a single "global" variable for all Episodes

export function imageURLWithScale(baseURL, scaleFactor /* i.e. @2x, @1x */){
  if(!baseURL) { return undefined 
  }
  let stringComponents = baseURL.split('.')
  return stringComponents[0] + scaleFactor + '.' + stringComponents[1]
}

export function srcsetTag(baseURL) {
  return imageURLWithScale(baseURL, '@1x') + ' 1x, ' + imageURLWithScale(baseURL, '@2x') + ' 2x'
}
</script>

<script>
import { onMount } from 'svelte'
import { createEventDispatcher } from 'svelte'	
import { fade } from 'svelte/transition'

export let number, label, thumbnailImageURL, description, contentWarning, thumbnailImageA11yText, storyteller, cues, locationDescription, duration

const dispatch = createEventDispatcher()

let isPaused = true
let isLoaded
let audioPlayer, playButton
let currentCue = { mediaURL: ''}
let showPlayerChoiceUI = false
let audioPreloadSetting = "none"
let audioDuration

onMount( () => {
  if(cues.length > 0){
    currentCue = cues.find( cue => cue.cueNumber == 1)
  } else {
    playButton.setAttribute('disabled', '')
  }

  audioPlayer.addEventListener('ended', (event) => {
    // console.log(event)
    if(currentCue.cueNumber == 1){
      if(cues.length > 1){
        // present player choice UI
        showPlayerChoiceUI = true
      }
    }
    if(cues.length > 1 && currentCue.cueNumber > 1){
      dispatch('message', { text: 'episodeEnded', episode: number})
    }
  })
})


$: state = isPaused ? "paused" : "playing"
$: episodeHeader = label ? label : "Episode " + number 
$: audioURL = currentCue.mediaURL
$: isLoaded = (audioDuration !== undefined && !isNaN(audioDuration)) ? true : false
$: if(isLoaded){ console.log("audio loaded: " + audioDuration) }
    
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
  event.preventDefault()
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
  margin-bottom: 0.5rem;
}

.episode-metadata p {
  margin-top: 0;
  margin-bottom: 0;
}

</style>

<div class="episode-header d-flex">
  {#if thumbnailImageURL}
  <img class="thumbnail" 
    width=120 height=160 
    src={imageURLWithScale(thumbnailImageURL, '@2x')} 
    scrset={ srcsetTag(thumbnailImageURL) } 
    alt={thumbnailImageA11yText}>
  {/if}

  <div class="episode-metadata">
    <h2 class="title">{episodeHeader}</h2>
    {#if storyteller}
    <p>told by: <a href="#" on:click|preventDefault={showStorytellerCard}>{storyteller}</a></p>
    {/if}
    {#if duration}
    <p>length: {duration}</p>
    {/if}
  </div>
</div>

{#if locationDescription}
<p><em>{locationDescription}</em></p>
{/if}

<p class="description">{@html description}</p>

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
      {#if isLoaded}Pause{:else}Loading{/if}
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
  bind:duration={audioDuration}
></audio>
