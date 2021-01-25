<script>
	// import Cookies from 'js-cookie'
	// import Guid from 'uuid/v4'
	import Event from './Event.svelte'
	import { onMount } from 'svelte'

	let overhearEvent = {
		label: "Overhear Solo",
		subLabel: "<em>Circle of Voices 2019/2020</em>",
		eventDescription: `This Overhear Solo story set has been adapted from a live immersive theatre showcase devised and performed by Circle of Voices students as part of a 3-day workshop, facilitated in December 2019 by <a href="http://gtnt.ca">Gordon Tootoosis Nīkānīwin Theatre</a> and <a href="https://www.itsnotaboxtheatre.ca/">It's Not a Box Theatre</a>.<br/ ><br />These completely original podplays are a blend of fiction and non-fiction, of both writing and recorded interviews, based on dreams, nightmares, and healing. They have been adapted into interactive 1-player podplays designed to be played in certain places and for certain activities. While you are welcome to listen to them anywhere, for the full experience please consider the location and activity in each synopsis and press play when you are ready. Think of it like an immersive podcast — a play starring you, the story, and your live environment.`,
		shuffleEpisodes: false,
		episodes: [{
			label: "Spiders",
			storyteller: "Benny Severight",
			thumbnailImageURL: "media/images/Spiders.jpg",
			thumbnailImageHeight: 68,
			thumbnailImageA11yText: "A spiderweb strung with beads of dew",
			locationDescription: "",
			duration: "5:29",
			description: "Some fears get webbed up in others. Some infest and threaten to drag us under. This recurring nightmare reminds us it’s hard to look out for a friend when you’re both on the fringe. Listen to this when you’re in bed with all the lights out, tucked in, and ready for sleep.",
			contentWarning: "mental health ",
			number: 0,
			cues: [{
				cueNumber: 1,
				mediaURL: "https://circle-of-voices.s3.ca-central-1.amazonaws.com/Spiders.mp3"
			}]
		},{
			label: "Uncle",
			storyteller: "Kaylynn Bear",
			thumbnailImageURL: "media/images/Uncle.jpg",
			thumbnailImageHeight: 80,
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "5:36",
			description: "Is there someone you’re missing right now? Someone you’re waiting for? How do you take back time that has been stolen from you? Listen to this in your kitchen, while cooking. Take a look out the window when you can. Reflect on someone who is not in your life anymore.",
			contentWarning: "prison, racial profiling",
			number: 1,
			cues: [{
				cueNumber: 1,
				mediaURL: "https://circle-of-voices.s3.ca-central-1.amazonaws.com/Uncle.mp3"
			}]
		},{
			label: "Car Crash",
			storyteller: "Allison Meckling",
			thumbnailImageHeight: 68,
			thumbnailImageURL: "media/images/CarCrash.jpg",
			thumbnailImageA11yText: "A driver's-eye view of a two-lane road at night",
			locationDescription: "",
			duration: "4:14",
			description: "How many near misses have you had? Think of the difference a single moment, a single choice, can make on your life. Listen to this while you’re out for a drive in a moving vehicle or while cycling or walking along a street with traffic. ",
			contentWarning: "car accident violence, death or dying",
			number: 2,
			cues: [{
				cueNumber: 1,
				mediaURL: "https://circle-of-voices.s3.ca-central-1.amazonaws.com/CarCrash.mp3"
			}]
		},{
			label: "Brunch with a Side of Seizures",
			storyteller: "Rachel Ermine",
			thumbnailImageURL: "media/images/Brunch.jpg",
			thumbnailImageHeight: 80,
			thumbnailImageA11yText: "A moderately fancy restaurant, empty and ready for service",
			locationDescription: "",
			duration: "5:17",
			description: "Who would take care of you in your time of greatest need? How do you nourish those relationships? Listen to this at the dinner table, while you share breakfast (or any meal) with someone close to you. Think about what it is you would miss about them the most. What would they miss about you?",
			contentWarning: "seizure, mental health",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "https://circle-of-voices.s3.ca-central-1.amazonaws.com/Brunch.mp3"
			}]
		}],
		storytellers: [{
			name: "Benny Severight",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "Actor Braden Butler",
			bio: "Braden Butler was born and raised in Saskatoon, SK, Canada and moved to Edmonton, AB in the fall of 2017 to pursue a BFA in Acting at the University of Alberta. Recent theatre credits include <em>Wild Abandon</em> (Tough Choice Productions), <em>The Gooseberry</em> (Moplip Theatre/NextFest), <em>Ahunwar: The Devil’s Long Nap</em> (Night Canopy Theatre/2018 Edmonton Fringe), and <em>The Hot Baltimore</em>, The Misfit Vault, An Evening with Anon Chekhov, Midsummer Night’s Dream</em> (University of Alberta). He can be seen next (in Canada!) playing the role of Ken in John Logan’s <em>RED</em> at the 2019 Edmonton Fringe and in his first graduating year production as Buckingham in <em>Richard III</em>. He is thrilled to be a part of the creative ensemble with Overhear and for his work to be shared for the first time overseas. ",
			links: [ 
				"http://paypal.me/bradeninspace",
				"http://instagram.com/bradeninspace"
			]
		},{
			name: "Andrea Folster",
			thumbnailImageURL: "media/images/andrea-folster.jpg",
			thumbnailImageA11yText: "a photo of actor Andrea Folster",
			bio: "Andrea Folster is an emerging Saulteaux artist who has called Saskatoon home since the age of six; born in Winnipeg, she also has roots in the Brokenhead Ojibway Nation. Thanks to her many wonderful professors and the support of family and friends, Andrea holds a Bachelor of Fine Arts in Drama with a concentration in Acting from the University of Saskatchewan. In the fall of 2017, Andrea made her professional debut in Saskatoon and been lucky enough to ‘tread the boards’ in the Canadian Prairies a few times since then. She is both excited and nervous about contributing to this iteration of <em>Overhear</em>—while she occasionally writes, sharing this work with the world in this way is entering into uncharted territory; much gratitude and thanks to those who helped with feedback and support throughout the creation process. Miigwech."
		},{
			name: "Elise Pallagi",
			thumbnailImageURL: "media/images/elise-pallagi.jpg",
			thumbnailImageA11yText: "a photo of actor Elise Pallagi",
			bio: "Elise Pallagi is a spoken word poet, multi-disciplinary performance artist, and a member of both the Saskatoon Indigenous Poets Society and the Saskatoon Poetry Slam Team. Her writing and performance work focuses on her personal experiences and struggles as a transgender woman growing up and living in Treaty 6 territory in the Canadian prairies. Elise is a sought after entertainer who has been a featured artist at many special events, such as The Canadian Festival of Spoken Word, The Nutrien Fringe Festival, Regina’s Word Up, Tonight It’s Poetry, several Pride Festivals, and as both a performer and stage MC for The Ness Creek Music Festival.",
			links: [
				"http://elisepallagi.com",
				"http://instagram.com/kandilonglegz",
				"http://facebook.com/elisepallagispokenword",
				"http://paypal.me/elisepallagi"
			]
		},{
			name: "Shanda Stefanson",
			thumbnailImageURL: "media/images/shanda-stefanson.jpg",
			thumbnailImageA11yText: "a photo of actor Shanda Stefanson",
			bio: "Shanda Stefanson is a poet, spoken word artist, playwright and puppeteer. She has competed nationally representing Saskatoon at both the Canadian Festival of Spoken Word and the Canadian Individual Poetry Slam. Her award-winning play <em>Stalled</em> debuted at the Saskatoon Fringe in 2013. She was a member of the collective that created the spoken word play <em>Our Four Walls</em>, which was nominated for a SATA. Shanda is currently working on a one-woman show dealing with the intersection of sex and grief, and can be found at home most nights playing with her cat when she should be writing. "
		},{
			name: "Amberlin Hsu",
			thumbnailImageURL: "media/images/amberlin-hsu.jpg",
			thumbnailImageA11yText: "a photo of actor Amberlin Hsu",
			bio: "Amberlin Hsu is a SATA-winning producer, designer (lighting, costumes, set), and choreographer based in Tokyo and Saskatoon, Canada. She took dance at NTUA in Taiwan and graduated from the University of Saskatchewan with a BFA in Drama (Design). As co-AD of It’s Not A Box Theatre with Torien Cafferata, her recent devised theatre credits include: <em>pimohtēwak</em> (2019), <em>Overhear</em> (2016-2019), <em>cell</em> (2017), <em>Hypneurosis</em> (2016), and <em>Project O</em> (2015). Recent lighting design credits: <em>The Death of a Salesman</em> (Theatre Naught), <em>Displaced</em> (Ground Cover Theatre), <em>Dominion</em> (GTNT), and <em>Les Liaisons Dangereuses</em> (Theatre Naught); Recent costume design credits: <em>The Death of A Salesman</em> (Theatre Naught), <em>Southern Dandy 75</em> (Otto Helmut Productions), <em>Aiden Flynn Lost his Brother, So He Makes Another</em> (Theatre Howl), <em>Macbeth</em> (Embrace Theatre)."
		}]
	}
	
	onMount( () => {
		if(overhearEvent.shuffleEpisodes){
			let shuffledEpisodes = shuffleEpisodes(overhearEvent.episodes, true)
			delete overhearEvent.episodes
			overhearEvent.episodes = shuffledEpisodes
		}
	})

	function shuffleEpisodes(episodes, keepFirstEpisodeFirst){
		let firstEpisode
		if(keepFirstEpisodeFirst){
		// set aside the first episode so it doesn't get shuffled
			firstEpisode = episodes.splice(0, 1)[0]
		}

		// console.log(episodes.map( ep => ep.label))

		// shuffle the episodes
		for(var i = episodes.length -1; i > 0; i--){
			let randomIndex = Math.floor(Math.random() * (i+1))

			// this should work but doesn't, seems like a bug with rollup
			// [episodes[i], episodes[randomIndex]] = [episodes[randomIndex], episodes[i]]
			
			// so let's do it the old way
			let epA = episodes[i]
			episodes[i] = episodes[randomIndex]
			episodes[randomIndex] = epA
		}

		// bring back the tutorial
		if(keepFirstEpisodeFirst){
			episodes.splice(0, 0, firstEpisode)
		}

		return episodes
	}

</script>

<style>
</style>

<svelte:head>
	<!-- <title>Overhear Solo</title> -->
	<link rel="stylesheet" href="bootstrap/bootstrap.css">
	<!-- <meta property="og:url" content="https://cohort.rocks/overhear-solo/" />
	<meta property="og:title" content="Overhear Solo" /> -->
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col">
			<Event event={overhearEvent}/>
		</div>
	</div>
</div>