<!-- src/lib/components/about/AboutHero.svelte -->
<script>
	import ImageGallery from '../ImageGallery.svelte';
	import { about_us_images } from '$lib/data/about-images.js';
</script>

<div class="text-content">
	<div class="content-grid">
		<h1>About Us</h1>
		<div class="text-content">
			<div>
				<p>I established Home From Home in October 2019 to offer a variety of dog related services. With
					over 40 years experience of owning dogs and a variety of pets, creating an animal related business has
					been a dream come true. I now own and run two dog based businesses, Home From Home and Let The Dogs Run.</p>
				<p> I have streamlined Home From Home to offer weekly dog walks and homeboarding. Our dog walks are based at Let the dogs run on Tuesday, Wednesday and Thursday.
					All the dogs can be off lead to run sniff and play at their own pace during the hourly sessions. Our Homeboarding services are avaliable upon request.</p>
			</div>

			<ImageGallery
				images={about_us_images}
				title="About us images"
			/>
		</div>
	</div>
</div>