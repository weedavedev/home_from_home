<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/global.css';

	export const prerender = true;
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>