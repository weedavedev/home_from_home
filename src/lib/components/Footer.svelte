<script>
	import { base } from '$app/paths';
	import '$lib/styles/global.css';
	import '$lib/styles/footer.css';
	import Image from '$lib/components/Image.svelte';
</script>

<footer class="bg-white py-4 mt-auto border-t border-gray-200">
	<div class="container mx-auto px-4 text-center text-gray-600">
		<div class="social-icons">
			<a href="https://wa.me/447950020820" title="Contact us on WhatsApp">
				<Image
					src="/images/logos/whatsapp.png"
					alt="Contact us on WhatsApp"
					className="social-icons-img"
				/>
			</a>
			<a href="https://www.facebook.com/homefromhome101" title="Follow us on Facebook">
				<Image
					src="/images/logos/facebook.png"
					alt="Follow us on Facebook"
					className="social-icons-img"
				/>
			</a>
			<a href="https://www.instagram.com/dogshomefromhome/" title="Follow us on Instagram">
				<Image
					src="/images/logos/instagram.png"
					alt="Follow us on Instagram"
					className="social-icons-img"
				/>
			</a>
		</div>
		<p>&copy; {new Date().getFullYear()} Home From Home. All rights reserved.</p>
		<a href="{base}/terms_and_conditions">Terms and conditions</a>
	</div>
</footer>