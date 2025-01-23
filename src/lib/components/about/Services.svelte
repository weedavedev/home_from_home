<!-- src/lib/components/about/Services.svelte -->
<script>
	import ImageGallery from '../ImageGallery.svelte';
	import { extra_about_images } from '$lib/data/about-images.js';
</script>

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
	<ImageGallery images={extra_about_images} title="Home from home" />
</div>
