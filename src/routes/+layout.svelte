<!-- src/routes/+layout.svelte -->
<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LightboxRoot from '$lib/components/LightboxRoot.svelte';
	import '$lib/styles/global.css';
	import '$lib/styles/transitions.css';
	import { onNavigate } from '$app/navigation';

	export const prerender = true;
	export const ssr = true;
	export const trailingSlash = 'always';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-grow">
		<div style="view-transition-name: page">
			<slot />
			<LightboxRoot />
		</div>
	</main>
	<Footer />
</div>