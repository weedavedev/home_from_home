<!-- src/routes/+page.svelte -->
<script>
	import AboutHero from '$lib/components/about/AboutHero.svelte';
	import Services from '$lib/components/about/Services.svelte';
	import Tariff from '$lib/components/about/Tariff.svelte';
	import Certificates from '$lib/components/about/Certificates.svelte';
</script>

<div class="container mx-auto px-4 py-8">
	<div class="content-grid">
		<div style="view-transition-name: hero">
			<AboutHero />
		</div>

		<div style="view-transition-name: services">
			<Services />
		</div>

		<div style="view-transition-name: tariff">
			<Tariff />
		</div>

		<div style="view-transition-name: certificates">
			<Certificates />
		</div>
	</div>
</div>
