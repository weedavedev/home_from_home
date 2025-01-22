<!-- src/lib/components/about/AboutHero.svelte -->
<script>
	import ImageGallery from '../ImageGallery.svelte';
	import { about_us_images } from '$lib/data/aboutImages.js';
</script>

<div class="text-content">
	<div class="content-grid">
		<h1>About Us</h1>
		<div class="text-content">
			<div>
				<p>I established Home From Home in October 2019 to offer a variety of dog related services. With
					over 40 years experience of owning dogs and a variety of pets, creating a dog/ animal related business has
					been a dream come true. I now own and run two dog based businesses, Home From Home and Let The Dogs Run. I
					have streamlined Home From Home to offer dog walking weekly on Tuesday, Wednesday and Thursday and
					Homeboarding on the dates agreed.</p>
			</div>

			<ImageGallery
				images={about_us_images}
				title="About us images"
			/>
		</div>
	</div>
</div>