<script context="module">
let currentPlayer // creates a single "global" variable 
</script>

<script>
let isPaused = true
$: state = isPaused ? "paused" : "playing"

let audioPlayer

export let number
export let label
export let mediaURL

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
</script>

<h2>{episodeHeader}</h2>
{#if isPaused}
<button on:click={onBtnPlay}>Play</button>
{:else}
<button on:click={onBtnPause}>Pause</button>
{/if}
<span>{state}!</span>
<audio 
  id="ep-{number}-player" 
  src={mediaURL}
  bind:paused={isPaused}
  bind:this={audioPlayer}
></audio>