<script>
	// import Cookies from 'js-cookie'
	// import Guid from 'uuid/v4'
	import Event from './Event.svelte'
	import { onMount } from 'svelte'

	let overhearEvent = {
		label: "Overhear Solo",
		subLabel: "<em>Winter 2019</em>",
		eventDescription: "Event description goes here",
		shuffleEpisodes: false,
		episodes: [{
			label: "Intro",
			description: "",
			number: 1,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/01_Intro_ambience.mp3"
			}]
		},{
			label: "Benny's Story",
			storyteller: "[no storyteller]",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "5:29",
			description: "[no description]",
			contentWarning: "[no content warning]",
			number: 2,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/02_Benny_s_Story.mp3"
			}]
		},{
			label: "Kaylyn's Story",
			storyteller: "[no storyteller]",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "5:30",
			description: "[no description]",
			contentWarning: "[no content warning]",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/03_Kaylyn_s_Story.mp3"
			}]
		},{
			label: "Kokum's Story",
			storyteller: "[no storyteller]",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "5:52",
			description: "[no description]",
			contentWarning: "[no content warning]",
			number: 4,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/04_Kokum_s_Story.mp3"
			}]
		},{
			label: "Rachel's Story",
			storyteller: "[no storyteller]",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "5:15",
			description: "[no description]",
			contentWarning: "[no content warning]",
			number: 5,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/05_Rachel_s_Story.mp3"
			}]
		},{
			label: "Sara's Story",
			storyteller: "[no storyteller]",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "4:53",
			description: "[no description]",
			contentWarning: "[no content warning]",
			number: 7,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/07_Sara_s_Story.mp3"
			}]
		},{
			label: "Curtain call",
			storyteller: "[no storyteller]",
			thumbnailImageURL: "",
			thumbnailImageA11yText: "",
			locationDescription: "",
			duration: "",
			description: "[no description]",
			contentWarning: "[no content warning]",
			number: 8,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/08_Curtain_call.mp3"
			}]
		}],
		storytellers: [{
			name: "Braden Butler",
			thumbnailImageURL: "media/images/braden-butler.jpg",
			thumbnailImageA11yText: "a photo of actor Braden Butler",
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