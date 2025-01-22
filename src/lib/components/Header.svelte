<script>
	import '$lib/styles/global.css';
	import '$lib/styles/header.css';
	import { base } from '$app/paths';

	import Image from '$lib/components/Image.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<header class="bg-white py-4 shadow-sm">
	<nav class="container mx-auto px-4 flex flex-col items-center gap-4">
		<div>
			<Image
				src="/images/logos/DH4H_cropped-logo-218x175.jpg"
				alt="Home From Home logo"
				className="site-logo h-24 w-auto"
			/>
		</div>

		<NavBar />
	</nav>
</header>