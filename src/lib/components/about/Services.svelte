<!-- src/lib/components/about/Services.svelte -->
<script>
	import ImageGallery from '../ImageGallery.svelte';
	import { extra_about_images } from '$lib/data/about-images.js';
	import '$lib/styles/table.css';
</script>

<div class="text-content">
	<h2>We offer:</h2>
	<div class="overflow-x-auto">
		<table>
			<thead>
			<tr>
				<th>Service</th>
				<th>Description</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>Group Walks</td>
				<td>1 hour social group walks - Group walks with up to 10 dogs - limited places available.</td>
			</tr>
			<tr>
				<td>Extended Walks</td>
				<td>Dogs are with me for up to 5 hours - limited availability.</td>
			</tr>
			<tr>
				<td>Home Boarding*</td>
				<td>Insured and licensed with Perth and Kinross Council. Dogs are cared for in my home as if they are one of my own while their owners are away - Fully booked for 2025</td>
			</tr>
			</tbody>
		</table>
	</div>
	<ImageGallery images={extra_about_images} title="Home from home" />
</div>