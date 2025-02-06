<!-- src/lib/components/Image.svelte -->
<script>
	import '$lib/styles/image.css';
	import { base } from '$app/paths';  // Import base path from SvelteKit

	export let src;
	export let alt = '';
	export let className = '';
	// Automatically handle base path
	const fullSrc = `${base}${src}`;
	export let link = ''; // New prop for optional link
</script>

{#if link}
	<a
		href={link}
		target="_blank"
		rel="noopener noreferrer"
		class="image-link"
	>
		<img
			src={fullSrc}
			{alt}
			class="image {className}"
			loading="lazy"
			decoding="async"
		/>
	</a>
{:else}
	<img
		src={fullSrc}
		{alt}
		class="image {className}"
		loading="lazy"
		decoding="async"
	/>
{/if}