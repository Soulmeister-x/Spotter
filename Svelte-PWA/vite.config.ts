import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

//navigator.serviceWorker.register('/service-worker.js')

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA()
	],
	server: {
		host: true
	},
	preview: {
		allowedHosts: ['buck-fine-randomly.ngrok-free.app']
	}
});
