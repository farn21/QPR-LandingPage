import App from './App.svelte';
import QuePasa from './Components/QuePasa'

const app = new App({
	target: document.body,
	props: {
		name: 'Texto'
	}
});

export default app;