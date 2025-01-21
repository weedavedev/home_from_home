<script>
	import { base } from '$app/paths';
	import '$lib/styles/global.css';
	import Image from '$lib/components/Image.svelte';
</script>

<footer class="bg-white py-4 mt-auto border-t border-gray-200">
	<div class="container mx-auto px-4 text-center text-gray-600">
		<!-- Social icons container -->
		<div class="flex justify-center gap-6 mb-4">
			<a href="https://wa.me/447950020820"
				 title="Contact us on WhatsApp"
				 class="w-10 h-10 hover:opacity-80 transition-opacity">
				<Image
					src="/images/logos/whatsapp.png"
					alt="Contact us on WhatsApp"
					className="w-full h-full object-contain"
				/>
			</a>
			<a href="https://www.facebook.com/homefromhome101"
				 title="Follow us on Facebook"
				 class="w-10 h-10 hover:opacity-80 transition-opacity">
				<Image
					src="/images/logos/facebook.png"
					alt="Follow us on Facebook"
					className="w-full h-full object-contain"
				/>
			</a>
			<a href="https://www.instagram.com/dogshomefromhome/"
				 title="Follow us on Instagram"
				 class="w-10 h-10 hover:opacity-80 transition-opacity">
				<Image
					src="/images/logos/instagram.png"
					alt="Follow us on Instagram"
					className="w-full h-full object-contain"
				/>
			</a>
		</div>
		<p class="mb-2">&copy; {new Date().getFullYear()} Home From Home. All rights reserved.</p>
		<a href="{base}/terms_and_conditions" class="text-red-500 hover:text-red-700">Terms and conditions</a>
	</div>
</footer>