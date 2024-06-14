import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		sourcemap: process.env.NODE_ENV !== 'production'
	},
	css: {
		devSourcemap: process.env.NODE_ENV !== 'production'
	}
});
