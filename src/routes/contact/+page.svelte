<script>
	import './styles/contact.css';

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};
</script>
<div class="container mx-auto px-4 py-8">
	<div class="content-grid">
		<h1 class="text-2xl font-bold mb-6">Contact Us</h1>
		<div class="content-grid">
			<div class="text-content">
				<div class="mb-6">
					<p class="mb-4">If you wish to discuss one of our services and availability please Whatsapp or Message Wendy
						Wallace on 07950020820 and I will get back to you.</p>
					<p class="mb-4">If we can help, I will then arrange to meet you and your dog in your home, go over your
						requirements, meet your dog, fillin some forms and discuss our procedures.</p>
				</div>

				<div class="mb-6">
					<h2 class="text-2xl font-bold mb-4">If we can't help we can offer other recommendations</h2>
					<p class="mb-4">We are proud to be a member of Strathearn Dogs, a local Whatsapp dog/ pet business owners
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
			<div class="image-container">
				<img
					src="/images/general/chick_laptop_contact_us.jpeg"
					alt="Chicky the dog looking at documents"
					class="image"
				/>
			</div>
		</div>

		<form on:submit={handleSubmit} class="contact-form">
			<div class="form-group">
				<label for="name">Name</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
				/>
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
				/>
			</div>

			<div class="form-group">
				<label for="message">Message</label>
				<textarea
					id="message"
					bind:value={formData.message}
					rows="4"
					required
				></textarea>
			</div>
			<button type="submit">Send Message</button>
		</form>

	</div>
</div>