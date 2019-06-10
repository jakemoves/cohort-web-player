import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		event: {
			label: "Overhear Solo — Prague",
			thumbnailImageURL: "https://dummyimage.com/800x600",
			episodes: [{
				label: "Somewhere in Prague",
				number: 1,
				mediaURL:"/media/05 Superstition.m4a"
			},{
				label: "A different place",
				number: 2,
				mediaURL:"/media/20 Yr City Is a Sucker (London Session).m4a"
			}]
		}
	}
});

export default app;