<!-- src/lib/components/about/Certificates.svelte -->
<script>
	import ImageGrid from '../ImageGrid.svelte';
	import { certificate_images } from '$lib/data/about-images.js';
</script>

<ImageGrid
	images={certificate_images}
	title="Certificates and partnership."
	columns={2}
	gap="2rem"
	padding="2rem"
	maxWidth="1200px"
/>