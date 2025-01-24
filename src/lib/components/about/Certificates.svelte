<!-- src/lib/components/about/Certificates.svelte -->
<script>
	import ImageGrid from '../ImageGrid.svelte';
	import { certificate_images } from '$lib/data/about-images.js';
</script>

<ImageGrid
	images={certificate_images}
	title="Certificates and partnership."
	columns={3}
	gap="1rem"
	padding="1rem"
	maxWidth="750px"
/>