<script>
	import { lightbox } from '$lib/stores/lightbox';
</script>

<div class="lightbox-container">
	{#if $lightbox.isOpen}
		<div
			class="lightbox-overlay"
			on:click={() => lightbox.close()}
			role="dialog">
			<div class="lightbox-content" on:click|stopPropagation>
				<img
					src={$lightbox.image?.src}
					alt={$lightbox.image?.alt}
					loading="eager"
				/>
				<button class="close-button" on:click={() => lightbox.close()}>×</button>
			</div>
		</div>
	{/if}
</div>