<script>
	import '$lib/styles/global.css';
	import '$lib/styles/header.css';

	import { base } from '$app/paths';
	import BaseImage from '$lib/components/BaseImage.svelte';
</script>

<header class="bg-white py-4 shadow-sm">
	<nav class="container mx-auto px-4 flex flex-col items-center gap-4">
		<div class="text-2xl font-bold text-gray-700">
			<BaseImage
				src="/images/logos/DH4H_cropped-logo-218x175.jpg"
				alt="Home From Home logo"
				className="site-logo h-24 w-auto"
			/>
		</div>

		<ul class="nav-menu flex gap-8">
			<li><a href="{base}/" class="text-red-500 hover:text-red-700">About</a></li>
			<li><a href="{base}/contact" class="text-red-500 hover:text-red-700">Contact</a></li>
		</ul>
	</nav>
</header>