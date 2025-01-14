<script>
	import '$lib/styles/ImageGallery.css';
	import BaseImage from '$lib/components/BaseImage.svelte';

	export let images = [];
	export let title = '';

	let selectedImage = null;
	let lightboxOpen = false;

	function openLightbox(image) {
		selectedImage = image;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		selectedImage = null;
	}
</script>

<div class="gallery-wrapper">
	{#if title}
		<h2>{title}</h2>
	{/if}

	<div class="image-grid">
		{#each images as image}
			<div class="image-container">
				<BaseImage
					src={image.src}
					alt={image.alt}
					className="clickable"
					on:click={() => openLightbox(image)}
					on:keydown={(e) => e.key === 'Enter' && openLightbox(image)}
					role="button"
					tabindex="0"
				/>
			</div>
		{/each}
	</div>
</div>

{#if lightboxOpen && selectedImage}
	<div class="lightbox-overlay" on:click={closeLightbox}>
		<div class="lightbox-content" on:click|stopPropagation>
			<img src={selectedImage.src} alt={selectedImage.alt} />
			<button class="close-button" on:click={closeLightbox}>×</button>
		</div>
	</div>
{/if}