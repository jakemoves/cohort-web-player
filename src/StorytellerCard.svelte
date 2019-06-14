<script>
import { createEventDispatcher } from 'svelte'

export let storyteller

const dispatch = createEventDispatcher()

function onBtnBack(){
  dispatch('message', { text: 'hideStorytellerCard'})
}
</script>

<style>
p {
  font-size: 0.75rem;
  line-height: 1.3em;
}

</style>

<div class="card">
  <img src="https://dummyimage.com/640x480" class="card-img-top" alt="placeholder image">
  <div class="card-body">
    <h5 class="card-title">{storyteller.name}</h5>
    <p class="card-text">{@html storyteller.bio}
    {#if storyteller.links}
      {#each storyteller.links as link}
        <br/>
        <a href="{link}">{link}</a>
      {/each}
    {/if}
    </p>
    <button type="button" class="btn btn-outline-primary" on:click={onBtnBack}>Go back</button>
  </div>
</div>