<script>
	// import Cookies from 'js-cookie'
	// import Guid from 'uuid/v4'
	import Event from './Event.svelte'
	import { onMount } from 'svelte'

	let overhearEvent = {
		label: "Overhear Solo",
		subLabel: "<em>BODIES<br />Love / Sex / Survival<br /><span class='small'>(Prague Quadrennial 2019)</span></em>",
		eventDescription: "Solo is the latest development in the Overhear Project. The goal: to provide audiences anywhere and anytime the opportunity to engage with the many stories we have curated, sharing space with each other, playing roles, and interacting with their own local spaces. The set of stories we have launched with all require two players, ideally couples or dates, and explores the micro-choreography of intimacy. Click on the tutorial below!",
		episodes: [{
			label: "Tutorial",
			description: "If this is your first time with Overhear Solo, <strong>please listen to this tutorial.</strong> These are <strong>interactive stories</strong> that will require you to adopt roles and perform simple tasks. <em>Overhear Solo: BODIES</em> is <strong>best experienced in the evening</strong>, so stay safe.",
			number: 0,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/Tutorial_Narration.mp3"
			}]
		},{
			label: "Mystery Boy",
			storyteller: "Braden Butler",
			thumbnailImageURL: "media/images/mystery-boy.jpg",
			thumbnailImageA11yText: "a man sitting alone in a café window with an empty seat beside him",
			locationDescription: "Find a small cafe with a table for two near a window or on a patio.",
			duration: "7:14",
			description: "A young boy makes his first encounter with the carnage of love.",
			contentWarning: "Content warning: sexual content",
			number: 1,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/Mystery_Boy_Story_Intro.mp3"
			},{
				cueNumber: 2,
				mediaURL: "media/sound/Mystery_Boy_Player_1.mp3"
			},{
				cueNumber: 3,
				mediaURL: "media/sound/Mystery_Boy_Player_2.mp3"
			}]
		},{
			label: "That Thing Behind Glasses",
			storyteller: "Andrea Folster",
			locationDescription: "Find a place to sit facing an apartment or condo nice enough that you could see yourself living in it (ideally with a balcony).",
			duration: "9:06",
			thumbnailImageURL: "media/images/that-thing-behind-glasses.jpg",
			thumbnailImageA11yText: "the front of a building, with many intriguing partially-lit windows",
			description: "An internal monologue of an awkward Tinder date, navigating the line between safety and satisfaction.",
			contentWarning: "Content warning: sensitive sexual content",
			number: 2,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/That_Thing_Behind_Glasses_Story_Intro.mp3"
			},{
				cueNumber: 2,
				mediaURL: "media/sound/That_Thing_Behind_Glasses_Player_1__2.mp3"
			},{
				cueNumber: 3,
				mediaURL: "media/sound/That_Thing_Behind_Glasses_Player_1__2.mp3"
			}]
		},{
			label: "Fear on Foot",
			storyteller: "Elise Pallagi",
			locationDescription: "Find a long and winding urban alleyway, or a graffitied street.",
			duration: "5:23",
			thumbnailImageURL: "media/images/fear-on-foot.jpg",
			thumbnailImageA11yText: "a run-down sidewalk at night",
			description: "An examination of street harassment faced by women, queer and gender non conforming people.",
			contentWarning: "Content Warning: graphic content, slurs",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/Fear_on_Foot_Story_Intro.mp3"
			},{
				cueNumber: 2,
				mediaURL: "media/sound/Fear_on_Foot_Player_1__2.mp3"
			},{
				cueNumber: 3,
				mediaURL: "media/sound/Fear_on_Foot_Player_1__2.mp3"
			}]
		},{
			label: "Take This Body",
			storyteller: "Shanda Stefanson",
			locationDescription: "Find a patio table.",
			duration: "6:53",
			thumbnailImageURL: "media/images/take-this-body.jpg",
			thumbnailImageA11yText: "a piece of origami sitting on a park bench",
			description: '<strong>You\'ll need some simple props for this story</strong><br/> An invitation to explore someone’s body and its history through poetry and interactive paper craft. This story is accompanied by an image; <a href="media/Butterfly_Origami.jpg" target="_blank">tap here</a> to see it. You\'ll also need <strong>a piece of square paper and a pen or pencil</strong> for each player.',
			contentWarning: "Content warning: sensitive sexual content, sexual harassment / assault",
			number: 4,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/Take_This_Body_Story_Intro.mp3"
			},{
				cueNumber: 2,
				mediaURL: "media/sound/Take_This_Body_Player_1__2.mp3"
			},{
				cueNumber: 3,
				mediaURL: "media/sound/Take_This_Body_Player_1__2.mp3"
			}]
		},{
			label: "Paths in the Dark",
			storyteller: "Amberlin Hsu",
			locationDescription: "Find a path that forks into two in a park.",
			duration: "8:40",
			thumbnailImageURL: "media/images/paths-in-the-dark.jpg",
			thumbnailImageA11yText: "a forking path in a park",
			description: "Which path is safest when your love is dangerous and your home won’t protect you?",
			contentWarning: "Content warning: violence",
			number: 5,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/sound/Paths_in_the_Dark_Story_Intro.mp3"
			},{
				cueNumber: 2,
				mediaURL: "media/sound/Paths_in_the_Dark_Player_1__2.mp3"
			},{
				cueNumber: 3,
				mediaURL: "media/sound/Paths_in_the_Dark_Player_1__2.mp3"
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

	// we want the episodes to be presented in a random order, so let's shuffle them
	let episodes = overhearEvent.episodes

	// set aside the tutorial so it doesn't get shuffled
	let tutorial = episodes.splice(0, 1)[0]

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
	episodes.splice(0, 0, tutorial)
	
	delete overhearEvent.episodes
	overhearEvent.episodes = episodes

	// console.log(overhearEvent.episodes.map( ep => [ep.label, ep.cues]))

	// const serverURL = "https://cohort.rocks/api/v1"
	// const socketURL = "wss://cohort.rocks/sockets"
	// const eventId = 4
	// let eventDetails
	// let cohortState = ''
	// let clientSocket

	// if(Cookies.get('cohort-device-guid') === undefined){
	// 	Cookies.set('cohort-device-guid', Guid(), { expires: 7 })
	// }
	// const guid = Cookies.get('cohort-device-guid')

	onMount( () => {
		// checkInAndConnectToCohortServer()
	})

	function checkInAndConnectToCohortServer(){
		console.log('checkInAndConnectToCohortServer()')
		// register this app as a device
		fetch(serverURL + '/devices', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ guid: guid })
		}).then( response => {
			if(response.status == 200 /* this device already exists */ || 
				response.status == 201 /* created this device */ ){
			
				// check in to the event
				fetch(serverURL + '/events/' + eventId + '/check-in', {
					method: 'PATCH',
					headers: { 'Content-Type': 'application/json'},
					body: JSON.stringify({ guid: guid })
				}).then( response => {
					if(response.status == 200){
						cohortState = 'checked-in'
						
						// refresh the event details
						fetch(serverURL + '/events/' + eventId, {
							method: 'GET'
						}).then( response => {
							if(response.status == 200){
								response.json().then( event => {
									
									eventDetails = event
									
									// if the event is open, connect to it over websockets
									if(eventDetails.state == 'open'){
										openWebSocketConnection(eventId)
									} else {
										
									}
								})
							} else {
								response.text().then( errorText => {
									console.log(errorText)
								})
							}
						})

					} else {
						response.text().then( errorText => {
							console.log(errorText)
						})
					}
				})
			} else {
				console.log('error registering this app as a device')
				response.text().then( error => {
					console.log(error)
				})
			}
		})
	}

	function openWebSocketConnection(eventId) {
		let clientSocket = new WebSocket(socketURL)

		clientSocket.addEventListener('open', () => {
			console.log('connection open')
			clientSocket.send(JSON.stringify({ guid: guid, eventId: eventId }))
		})

		clientSocket.addEventListener('message', (message) => {
			const msg = JSON.parse(message.data)
			console.log(msg)
			if(msg.response && msg.response !== undefined && msg.response == 'success'){
				cohortState = 'connected'
			}
			
			if(msg.mediaDomain && msg.mediaDomain !== undefined && 
				msg.cueNumber && msg.cueNumber !== undefined && 
				msg.cueAction && msg.cueAction !== undefined) {
				
				// it's a valid cohort message
				if(msg.mediaDomain == 'episode'){
					let episode = episodes.find( episode => episode.id == msg.cueNumber )
					if(episode !== undefined){
						switch(msg.cueAction) {
							case 'load':
								// new loading behaviour
								// episode.sound.load()
								// vmE.audioLoading = true
								break;
							case 'go': // should only have an effect when an episode is not playing
								
								// if(!vmE.currentPlayingEpisode){
									
								// 	vmE.currentPlayingEpisode = episode
								// 	if(episode.sound.state !== 'loaded'){
								// 		vmE.audioLoading = true
								// 	}
								// 	setTimeout( () => {
								// 		episode.sound.play()
								// 	}, 4000) // delay to help make sure all clients are ready to go
								// 	// catch up logic (in case of delayed start) would go here
								// }
								break;
							case 'stop':
								// episode.sound.stop()
								// episode.sound.unload()
								// vmE.audioLoading = false
								// vmE.currentPlayingEpisode = null
							// case 'pause':
							//   episode.sound.pause()
							//   break;
							// case 'restart':
							//   episode.sound.seek(0)
								break;
							default:
								break;
						}
					}
				}
			}
		})

		clientSocket.addEventListener('close', () => {
			console.log('connection closed')
			cohortState = 'checked-in'
		})

		clientSocket.addEventListener('error', (err) => {
			console.log(err)
		})
	}

</script>

<style>
</style>

<head>
	<title>Overhear Solo</title>
	<link rel="stylesheet" href="bootstrap/bootstrap.css">
</head>

<div class="container">
	<div class="row">
		<div class="col">
			<Event event={overhearEvent}/>
		</div>
	</div>
</div>