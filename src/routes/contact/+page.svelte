<script>
	import './styles/contact.css';
	import Image from '$lib/components/Image.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>
<div class="container mx-auto px-4 py-8">
	<div class="content-grid">
		<h1 class="">Contact Us</h1>
			<div class="text-content">
				<div class="mb-6">
					<p class="mb-4">If you wish to discuss one of our services and availability please Whatsapp or Message Wendy
						Wallace on 07950020820 and I will get back to you.</p>
					<p class="mb-4">If we can help, I will then arrange to meet you and your dog in your home, go over your
						requirements, meet your dog, fill in some forms and discuss our procedures.</p>
				</div>

				<div class="mb-6">
					<p class="mb-4">If we can't help we can offer other recommendations, We are proud to be a member of Strathearn
						Dogs, a local Whatsapp dog/ pet business owners
						group.
						With over 40 members we support each other, share enquiries and provide the following services - dog
						walking,
						training, transportation, pet sitting, home boarding, grooming, equine care, house sitting, extended walks,
						adventure days plus many more!</p>
					<p class="mb-4">Please contact Wendy on whatsapp if you have an enquiry. I'm will always try to help you and
						your dog but if I can't, I'll try to help you find an alternative, just
						message me.</p>
					<h2 class="font-serif italic text-gray-700 text-2xxl transform -rotate-2">Wendy</h2>
				</div>
			</div>

			<Image
				src="/images/general/chick_laptop_contact_us.jpeg"
				alt="Chicky the dog looking at documents"
				className="mx-auto w-auto"
			/>
		</div>

		<ContactForm	/>

</div>