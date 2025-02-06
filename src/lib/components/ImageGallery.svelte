<!-- src/lib/components/ImageGallery.svelte -->
<script>
	import '$lib/styles/image-grid.css';
	import '$lib/styles/image-gallery.css';
	import Image from '$lib/components/Image.svelte';
	import { lightbox } from '$lib/stores/lightbox';

	export let images = [];
	export let title = '';

	function handleClick(image) {
		if (!image.link) {
			lightbox.open(image);
		}
	}
</script>

<div class="grid-wrapper">
	{#if title}
		<h3>{title}</h3>
	{/if}

	<div class="image-grid">
		{#each images as image}
			<div class="image-container">
				<div
					class="image-wrapper {!image.link ? 'clickable' : ''}"
					on:click={() => handleClick(image)}
					on:keydown={(e) => e.key === 'Enter' && handleClick(image)}
					role="button"
					tabindex="0"
				>
					<Image
						src={image.src}
						alt={image.alt}
						className="gallery-image"
						link={image.link}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>