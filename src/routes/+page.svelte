<!-- src/routes/+page.svelte (or any other component) -->
<script>
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';

	const about_us_images = [
		{
			src: '/images/general/wendy_dogs_snow.jpg',
			alt: 'Wendy and dogs in the snow.'
		},
		{
			src: '/images/general/walking_club_group.jpg',
			alt: '7 dogs all paying attention to the camera.'
		},
		{
			src: '/images/general/darcy_murphy_couch.jpg',
			alt: 'Darcy and Murphy chilling on the couch.'
		}
	];

	const extra_about_images = [
		{
			src: '/images/general/kitchen_club_group.png',
			alt: '5 dogs paying attention in the kitchen.'
		},
		{
			src: '/images/general/sharing_stick.jpg',
			alt: 'Basil and Murphy playings with the same stick.'
		},
		{
			src: '/images/general/sunset_posing.jpg',
			alt: '6 dogs sitting in Archies freedom field.'
		}
	];

	const certificate_images = [
		{
			src: '/images/general/certificates/pet_business_insurance.jpg',
			alt: 'Pet Business insurance certificate'
		},
		{
			src: '/images/general/certificates/PKC_license.jpg',
			alt: 'PKC License certificate'
		},
		{
			src: '/images/general/certificates/disclosure-scotland-768x201.png',
			alt: 'Disclosure Scotland Certificate'
		},
		{
			src: '/images/general/certificates/first_aid_at_work.png',
			alt: 'First Aid At Work certificate'
		},
		{
			src: '/images/general/certificates/professional-dog-walkers.png',
			alt: 'Professional Dog Walkers'
		},
		{
			src: '/images/general/certificates/k9_first_aid.png',
			alt: 'k9 first aid certificate'
		}
	];
</script>
<div class="container">
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

			<div class="text-content">
				<h2>We offer:</h2>
				<div class="overflow-x-auto">
					<table class="w-full border-collapse border border-gray-300">
						<thead>
						<tr class="bg-gray-100">
							<th class="border border-gray-300 p-2 w-1/4">Service</th>
							<th class="border border-gray-300 p-2 w-3/4">Description</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="border border-gray-300 p-2">Group Walks</td>
							<td class="border border-gray-300 p-2">1 hour social group walks - Group walks with up to 10 dogs - limited places available.</td>
						</tr>
						<tr>
							<td class="border border-gray-300 p-2">Extended Walks</td>
							<td class="border border-gray-300 p-2">Dogs are with me for up to 5 hours - limited availability.</td>
						</tr>
						<tr>
							<td class="border border-gray-300 p-2">Home Boarding*</td>
							<td class="border border-gray-300 p-2">Insured and licensed with Perth and Kinross Council. Dogs are cared for in my home as if they are one of my own while their owners are away - Fully booked for 2025</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="text-content">
				<p>Home from Home dog walks and extended walks are based at <a
					href="https://www.letthedogsrun.uk"
					class="text-blue-600 hover:underline">Let The Dogs Run</a>).
					My dog park is situated in Tullibardine just outside Auchterarder. We only offer hour-long social group walks
					for up to 10 dogs in one of our three deer fenced enclosures. This enviroment offers all the dogs the chance
					to be off lead, run free, sniff, play and socialise at their own pace within the safety of our dog park.</p>

				<p>All our services are designed around each dog's individual needs and offer the type of care
					their owners have requested.</p>
			</div>
		</div>

		<ImageGallery
			images={extra_about_images}
			title="Home from home"
		/>

		<div class="text-content">
			<div>
				<h2>Tariff</h2>
				<div class="overflow-x-auto">
					<table class="w-full border-collapse border border-gray-300">
						<thead>
						<tr class="bg-gray-100">
							<th class="border border-gray-300 p-2">Service</th>
							<th class="border border-gray-300 p-2">Single dog</th>
							<th class="border border-gray-300 p-2">Multiple dogs from same household</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="border border-gray-300 p-2">1 hour dog walk</td>
							<td class="border border-gray-300 p-2">£14 per dog</td>
							<td class="border border-gray-300 p-2">£12.50</td>
						</tr>
						<tr>
							<td class="border border-gray-300 p-2">Extended Walk</td>
							<td class="border border-gray-300 p-2">£30 per day</td>
							<td class="border border-gray-300 p-2">POA</td>
						</tr>
						<tr>
							<td class="border border-gray-300 p-2">Home Boarding</td>
							<td class="border border-gray-300 p-2">£35 per 24 Hours</td>
							<td class="border border-gray-300 p-2">£25 per 24 hours for 2nd dog</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<!-- Custom styling -->
		<ImageGrid
			images={certificate_images}
			title="Certificates and partnership."
			columns={2}
			gap="2rem"
			padding="2rem"
			maxWidth="1200px"
		/>

	</div>
</div>