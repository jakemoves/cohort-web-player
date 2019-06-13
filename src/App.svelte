<script>
	// import Cookies from 'js-cookie'
	// import Guid from 'uuid/v4'
	import Event from './Event.svelte'
	import { onMount } from 'svelte'

	let overhearEvent = {
		label: "Overhear Solo",
		subLabel: "<em>BODIES: Love / Sex / Survival (Prague Quadrennial 2019)</em>",
		episodes: [{
			label: "Mystery Boy",
			storyteller: "Braden Butler",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "A young boy makes his first encounter with the carnage of love.",
			contentWarning: "Content warning: sexual content",
			number: 1,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "media/05Superstition.m4a"
			},{
				cueNumber: 3,
				mediaURL: "media/YrCitysASucker.m4a"
			}]
		},{
			label: "That Thing Behind Glass",
			storyteller: "Andrea Folster",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "An internal monologue of an awkward Tinder date, navigating the line between safety and satisfaction.",
			contentWarning: "Content warning: sensitive sexual content",
			number: 2,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 3,
				mediaURL: "media/L02-the-curtain.m4a"
			}]
		},{
			label: "Fear on Foot",
			storyteller: "Elise Pallagi",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "An examination of street harassment faced by women, queer and gender non conforming people. ",
			contentWarning: "Content Warning: graphic content, slurs",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 3,
				mediaURL: "media/L02-the-curtain.m4a"
			}]
		},{
			label: "Take This Body",
			storyteller: "Shanda Stefanson",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "An invitation to explore someone’s body and its history through poetry and interactive paper craft.",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 3,
				mediaURL: "media/L02-the-curtain.m4a"
			}]
		},{
			label: "A Path in the Dark",
			storyteller: "Amberlin Hsu",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Which path is safest when your love is dangerous and your home won’t protect you?",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "media/L02-the-curtain.m4a"
			},{
				cueNumber: 3,
				mediaURL: "media/L02-the-curtain.m4a"
			}]
		}],
		storytellers: [{
			name: "Braden Butler",
			thumbnailImageURL: "media/braden-butler.jpg",
			bio: "Braden Butler was born and raised in Saskatoon, SK, Canada and moved to Edmonton, AB in the fall of 2017 to pursue a BFA in Acting at the University of Alberta. Recent theatre credits include <em>Wild Abandon</em> (Tough Choice Productions), The Gooseberry (Moplip Theatre/NextFest), Ahunwar: The Devil’s Long Nap (Night Canopy Theatre/2018 Edmonton Fringe), and The Hot l Baltimore, The Misfit Vault, An Evening with Anon Chekhov, Midsummer Night’s Dream (University of Alberta). He can be seen next (in Canada!) playing the role of Ken in John Logan’s RED at the 2019 Edmonton Fringe and in his first graduating year production as Buckingham in Richard III. He is thrilled to be a part of the creative ensemble with Overhear and for his work to be shared for the first time overseas. ",
			links: [ 
				"http://paypal.me/bradeninspace",
				"http://instagram.com/bradeninspace"
			]
		},{
			name: "Andrea Folster",
			bio: "Andrea Folster is an emerging Saulteaux artist who has called Saskatoon home since the age of six; born in Winnipeg, she also has roots in the Brokenhead Ojibway Nation. Thanks to her many wonderful professors and the support of family and friends, Andrea holds a Bachelor of Fine Arts in Drama with a concentration in Acting from the University of Saskatchewan. In the fall of 2017, Andrea made her professional debut in Saskatoon and been lucky enough to ‘tread the boards’ in the Canadian Prairies a few times since then. She is both excited and nervous about contributing to this iteration of <em>Overhear</em>—while she occasionally writes, sharing this work with the world in this way is entering into uncharted territory; much gratitude and thanks to those who helped with feedback and support throughout the creation process. Miigwech."
		},{
			name: "Elise Pallagi",
			bio: "Elise Pallagi is a spoken word poet, multi-disciplinary performance artist, and a member of both the Saskatoon Indigenous Poets Society and the Saskatoon Poetry Slam Team. Her writing and performance work focuses on her personal experiences and struggles as a transgender woman growing up and living in Treaty 6 territory in the Canadian prairies. Elise is a sought after entertainer who has been a featured artist at many special events, such as The Canadian Festival of Spoken Word, The Nutrien Fringe Festival, Regina’s Word Up, Tonight It’s Poetry, several Pride Festivals, and as both a performer and stage MC for The Ness Creek Music Festival. Her strong presence at Saskatoon poetry slam competitions, poetry readings, and community building public events has been receiving considerable positive reviews, fueling her fire to continue performing provincially and nationally. Combining elements of Vaudeville and Burlesque with her love of roller derby, Star Trek, and defending human rights gives Elise’s style of writing and performance a unique resonance on any stage. Elise uses her voice to create space, aiming to empower others with marginalized voices to claim their space by speaking their own truths as well. Elise conveys emotional authenticity and relatability in her work that moves audiences, touches hearts, and changes minds.",
			links: [
				"http://elisepallagi.com",
				"http://instagram.com/kandilonglegz",
				"http://facebook.com/elisepallagispokenword"
			]
		},{
			name: "Shanda Stefanson",
			bio: "Shanda Stefanson is a poet, spoken word artist, playwright and puppeteer. She has competed nationally representing Saskatoon at both the Canadian Festival of Spoken Word and the Canadian Individual Poetry Slam. Her award-winning play <em>Stalled</em> debuted at the Saskatoon Fringe in 2013. She was a member of the collective that created the spoken word play <em>Our Four Walls</em>, which was nominated for a SATA. Shanda is currently working on a one-woman show dealing with the intersection of sex and grief, and can be found at home most nights playing with her cat when she should be writing. "
		},{
			name: "Amberlin Hsu",
			bio: "Amberlin Hsu is a SATA-winning producer, designer (lighting, costumes, set), and choreographer based in Tokyo and Saskatoon, Canada. She took dance at NTUA in Taiwan and graduated from the University of Saskatchewan with a BFA in Drama (Design). As co-AD of It’s Not A Box Theatre with Torien Cafferata, her recent devised theatre credits include: <em>pimohtēwak</em> (2019), <em>Overhear</em> (2016-2019), <em>cell</em> (2017), <em>Hypneurosis</em> (2016), and <em>Project O</em> (2015). Recent lighting design credits: <em>The Death of a Salesman</em> (Theatre Naught), <em>Displaced</em> (Ground Cover Theatre), <em>Dominion</em> (GTNT), and <em>Les Liaisons Dangereuses</em> (Theatre Naught); Recent costume design credits: <em>The Death of A Salesman</em> (Theatre Naught), <em>Southern Dandy 75</em> (Otto Helmut Productions), <em>Aiden Flynn Lost his Brother, So He Makes Another</em> (Theatre Howl), <em>Macbeth</em> (Embrace Theatre)."
		}]
	}

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