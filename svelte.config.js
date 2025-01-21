import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: true
		}),
		paths: {
			base: ''  // Remove the base path since you're using a custom domain
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;