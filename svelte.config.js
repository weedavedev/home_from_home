import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',  // Add this line
			strict: false  // Change to false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/home_from_home' : ''
		},
		prerender: {
			handleMissingId: 'warn',  // Add this section
			entries: ['*']  // This tells SvelteKit to prerender all pages
		}
	}
};

export default config;