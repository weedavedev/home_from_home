<!-- src/lib/components/BaseImage.svelte -->
<script>
	import '$lib/styles/BaseImage.css';

	export let src;
	export let alt = '';
	export let className = '';
</script>

<img
	{src}
	{alt}
	class="base-image {className}"
/>