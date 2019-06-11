<script>
import { createEventDispatcher } from 'svelte'

export let storyteller

const dispatch = createEventDispatcher()

function onBtnBack(){
  dispatch('message', { text: 'hideStorytellerCard'})
}
</script>

<div class="card">
  <img src="https://dummyimage.com/640x480" class="card-img-top" alt="placeholder image">
  <div class="card-body">
    <h5 class="card-title">{storyteller.name}</h5>
    <p class="card-text">{storyteller.bio} <a href={storyteller.link} target=_blank>[more info]</a></p>
    <button type="button" class="btn btn-outline-primary" on:click={onBtnBack}>Go back</button>
  </div>
</div>