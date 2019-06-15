<script>
import { createEventDispatcher } from 'svelte'
import { imageURLWithScale, srcsetTag } from './Episode.svelte'

export let storyteller

const dispatch = createEventDispatcher()

function onBtnBack(){
  dispatch('message', { text: 'hideStorytellerCard'})
}

function isPaymentLink(link) {
  return link.includes('paypal')
}

function paymentLink() {
  if(!storyteller.links) { return undefined }

  return storyteller.links.find( link => {
    return isPaymentLink(link)
  })
}

function otherLinks() {
  if(!storyteller.links) { return undefined }

  return storyteller.links.filter( link => {
    return !isPaymentLink(link)
  })
}


</script>

<style>
p.bio, p.minibio {
  font-size: 0.75rem;
  line-height: 1.3em;
}

p.bio {
  margin-top: -2.5rem; /* negative of minibio */
}

p.minibio {
  max-height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
}

h5 {
  display: inline;
  color: #0056b3;
}

.card {
	margin: 1rem 1rem 0.25rem 1rem;
}

details {
  margin-bottom: 1rem;
}

details summary::-webkit-details-marker {
  display: none;
}

.details-hint {
  font-size: 60%;
  float: right;
  text-transform: small-caps;
  padding-top: 0.5rem;
}

.credits {
  font-size:0.7rem;
}

.credits dd {
  margin-bottom: 0;
}

.payment-link {
  font-size: 0.8rem
}

</style>

<div class="card">
  <img src={imageURLWithScale(storyteller.thumbnailImageURL, "@2x")} class="card-img-top" alt="placeholder image">
  <div class="card-body">
    <details>
      <summary>
        <h5 class="card-title">{storyteller.name}<span class="details-hint"> [tap for more]</span></h5>
        <p class="minibio">{@html storyteller.bio} [tap for more]</p>
      </summary>
      <p class="card-text bio">{@html storyteller.bio}
      {#if storyteller.links}
        {#each otherLinks() as link}
          <br/>
          <a href="{link}" target="_blank">{link}</a>
        {/each}
      {/if}
      </p>
    </details>

    {#if paymentLink()}
    <p class="card-text payment-link"><a href={paymentLink()} target="_blank">Tip this storyteller</a></p>
    {/if}

    <dl class="row credits">
      <dt class="col-5">Director:</dt>
      <dd class="col-7">Torien Cafferata</dd>
      <dt class="col-5">Sound Design:</dt>
      <dd class="col-7">Connor Brousseau</dd>
      <dt class="col-5">Overhear created by:</dt>
      <dd class="col-7">Amberlin Hsu & Torien Cafferata</dd>
      <dt class="col-5">Produced by:</dt>
      <dd class="col-7">It’s Not A Box Theatre </dd>
      <dt class="col-5">Coded by:</dt>
      <dd class="col-7">Jacob Niedzwiecki</dd>
    </dl>
    
    <button type="button" class="btn btn-outline-primary" on:click={onBtnBack}>Go back</button>
  </div>
</div>