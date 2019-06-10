<script>
	import Event from './Event.svelte'

	let overhearEvent = {
		label: "Overhear Solo — Prague",
		thumbnailImageURL: "https://dummyimage.com/800x600",
		episodes: [{
			label: "Somewhere in Prague",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			number: 1,
			cues: [{
				mediaURL: "/media/05 Superstition.m4a"
			}]
		},{
			label: "A different place",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			number: 2,
			cues: [{
				mediaURL: "/media/20 Yr City Is a Sucker (London Session).m4a"
			}]
		},{
			label: "A shorter one",
			thumbnailImageURL: "https://dummyimage.com/120x100",
			thumbnailImageA11yText: "placeholder image",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			number: 3,
			cues: [{
				mediaURL: "/media/L02-the-curtain.m4a"
			}]
		}]
	}
</script>

<style>
</style>

<head>
	<link rel="stylesheet" href="bootstrap/bootstrap.css">
</head>

<div class="container">
	<div class="row">
		<div class="col">
			<Event event={overhearEvent}/>
		</div>
	</div>
</div>