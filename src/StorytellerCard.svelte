<script>
import { createEventDispatcher } from 'svelte'
import { imageURLWithScale, srcsetTag } from './Episode.svelte'

export let storyteller

const dispatch = createEventDispatcher()
let sentResponse = false

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

function onComment(){
  let responseText = document.getElementById('audience-comment').value
  // console.log(responseText)
  fetch('https://cohort.rocks' + '/api/v1/services/mail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ emailBody: responseText, emailSubject: 'Audience response from Overhear Solo (' + storyteller.name + ')', emailRecipient: 'luckyjakemoves@gmail.com,torien.cafferata@gmail.com' })
  }).then( response => {
    if(response.status != 200){
      console.log(response)
    } else {
      sentResponse = true
    }
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

.response-summary {
  color: #007bff;
  font-size: 0.8rem;
}

.audience-comment {
  margin-bottom: 1rem;
  font-size: 0.8rem;
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

    {#if !sentResponse}
    <details>
      <summary>
        <p class="response-summary">Leave a response</p>
      </summary>
      <div class="form-group">
        <textarea class="form-control audience-comment" name="audience-comment" id="audience-comment" rows="4" placeholder="We are always growing and appreciate your feedback. Would you like to share a response or a story of your own? All comments are anonymous."></textarea>
        <button class="btn btn-primary" on:click={onComment}>Send response</button>
      </div>
    </details>
    {:else}
    <div class="alert alert-success" role="alert">
      Response sent — thank you!
    </div>
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