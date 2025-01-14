<!-- src/lib/components/ImageGrid.svelte -->
<script>
	import '$lib/styles/ImageGrid.css';
	import BaseImage from '$lib/components/BaseImage.svelte';

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
				<BaseImage
					src={image.src}
					alt={image.alt}
				/>
			</div>
		{/each}
	</div>
</div>