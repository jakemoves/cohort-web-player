<script>
	// import Cookies from 'js-cookie'
	// import Guid from 'uuid/v4'
	import Event from './Event.svelte'
	import { onMount } from 'svelte'

	let overhearEvent = {
		label: "Overhear Solo — Prague",
		thumbnailImageURL: "https://dummyimage.com/800x600",
		episodes: [{
			label: "Somewhere in Prague",
			storyteller: "Ophelia Coxwell",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			number: 1,
			cues: [{
				cueNumber: 1,
				mediaURL: "/media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "/media/05Superstition.m4a"
			},{
				cueNumber: 3,
				mediaURL: "/media/YrCitysASucker.m4a"
			}]
		},{
			label: "A different place",
			storyteller: "Asha Viola",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			number: 2,
			cues: [{
				cueNumber: 1,
				mediaURL: "/media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "/media/L02-the-curtain.m4a"
			},{
				cueNumber: 3,
				mediaURL: "/media/L02-the-curtain.m4a"
			}]
		},{
			label: "A shorter one",
			storyteller: "Brooke Lynn Heights",
			locationDescription: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer.",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			number: 3,
			cues: [{
				cueNumber: 1,
				mediaURL: "/media/L02-the-curtain.m4a"
			},{
				cueNumber: 2,
				mediaURL: "/media/L02-the-curtain.m4a"
			},{
				cueNumber: 3,
				mediaURL: "/media/L02-the-curtain.m4a"
			}]
		}],
		storytellers: [{
			name: "Ophelia Coxwell",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "http://twitter.com"
		},{
			name: "Asha Viola",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "http://twitter.com"
		},{
			name: "Brooke Lynn Heights",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			link: "http://twitter.com"
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