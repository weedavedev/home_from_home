import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: true
		}),
		vite: {
			plugins: [enhancedImages()]
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/home_from_home' : ''
		}
	}
};

export default config;