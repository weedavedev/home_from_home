<script>
	import '$lib/styles/image-grid.css';
	import '$lib/styles/image-gallery.css';
	import Image from '$lib/components/Image.svelte';
	import { lightbox } from '$lib/stores/lightbox';

	export let images = [];
	export let title = '';
</script>

<div class="grid-wrapper">
	{#if title}
		<h3>{title}</h3>
	{/if}

	<div class="image-grid">
		{#each images as image}
			<div class="image-container">
				<div
					class="image-wrapper clickable"
					on:click={() => lightbox.open(image)}
					on:keydown={(e) => e.key === 'Enter' && lightbox.open(image)}
					role="button"
					tabindex="0"
				>
					<Image
						src={image.src}
						alt={image.alt}
						className="gallery-image"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>