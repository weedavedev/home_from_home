<script>
	import '$lib/styles/ImageGallery.css';
	import BaseImage from '$lib/components/Image.svelte';

	export let images = [];
	export let title = '';

	let selectedImage = null;
	let lightboxOpen = false;

	// Enhanced open function with logging
	function openLightbox(image) {
		console.log('Opening lightbox with image:', image); // Debug log
		if (image) {
			selectedImage = image;
			lightboxOpen = true;
			// Prevent body scrolling when lightbox is open
			document.body.style.overflow = 'hidden';
		}
	}

	function closeLightbox() {
		lightboxOpen = false;
		selectedImage = null;
		// Restore body scrolling
		document.body.style.overflow = 'auto';
	}

	// Handle keyboard events
	function handleKeydown(event) {
		if (lightboxOpen && event.key === 'Escape') {
			closeLightbox();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="gallery-wrapper">
	{#if title}
		<h3>{title}</h3>
	{/if}

	<div class="image-grid">
		{#each images as image}
			<div class="image-container">
				<!-- Added more explicit click handling -->
				<div
					class="image-wrapper clickable"
					on:click={() => openLightbox(image)}
					on:keydown={(e) => e.key === 'Enter' && openLightbox(image)}
					role="button"
					tabindex="0"
				>
					<BaseImage
						src={image.src}
						alt={image.alt}
						className="gallery-image"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>

{#if lightboxOpen && selectedImage}
	<div
		class="lightbox-overlay"
		on:click={closeLightbox}
		role="dialog"
		aria-label="Image lightbox"
	>
		<div class="lightbox-content" on:click|stopPropagation>
			<img
				src={selectedImage.src}
				alt={selectedImage.alt}
				loading="eager"
			/>
			<button
				class="close-button"
				on:click={closeLightbox}
				aria-label="Close lightbox"
			>
				×
			</button>
		</div>
	</div>
{/if}