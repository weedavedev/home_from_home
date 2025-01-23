<!-- src/lib/components/ImageGrid.svelte -->
<script>
	import '$lib/styles/image-grid.css';
	import Image from '$lib/components/Image.svelte';

	export let images = [];
	export let title = '';
	export let columns = 3;
	export let gap = '1rem';
	export let padding = '1rem';
	export let maxWidth = 'none';
</script>

<div class="grid-wrapper" style="max-width: {maxWidth}">
	{#if title}
		<h2>{title}</h2>
	{/if}

	<div
		class="image-grid"
		style="
      grid-template-columns: repeat({columns}, 1fr);
      gap: {gap};
      padding: {padding};
    "
	>
		{#each images as image}
			<div class="image-container">
				<div class="image-aspect-container">
					<Image
						src={image.src}
						alt={image.alt}
						className="grid-image"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>