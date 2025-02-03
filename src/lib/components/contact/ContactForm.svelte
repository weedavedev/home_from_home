<!-- src/lib/components/ContactForm.svelte -->
<script>
	import { env } from '$env/dynamic/public';

	let formData = {
		name: '',
		email: '',
		message: '',
		botcheck: false
	};

	let isSubmitting = false;
	let submitStatus = '';

	async function handleSubmit(event) {
		event.preventDefault();
		isSubmitting = true;
		submitStatus = '';

		const payload = {
			access_key: env.PUBLIC_WEB3FORMS_KEY,
			subject: "New Contact Form Submission",
			from_name: "Website Contact Form",
			...formData
		};

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			const data = await response.json();
			console.log('Response:', data);

			if (response.ok) {
				submitStatus = 'success';
				formData = {
					name: '',
					email: '',
					message: '',
					botcheck: false
				};
			} else {
				throw new Error('Submission failed');
			}
		} catch (error) {
			console.error('Error:', error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form on:submit={handleSubmit} class="flex flex-col space-y-4 max-w-md mx-auto p-4 contact-form">
	<input type="checkbox" name="botcheck" class="hidden honeypot" bind:checked={formData.botcheck}>

	<div class="form-group flex flex-col">
		<label for="name" class="mb-1 text-sm font-medium">Name</label>
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			required
			disabled={isSubmitting}
			class="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
		/>
	</div>

	<div class="form-group flex flex-col">
		<label for="email" class="mb-1 text-sm font-medium">Email</label>
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			required
			disabled={isSubmitting}
			class="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
		/>
	</div>

	<div class="form-group flex flex-col">
		<label for="message" class="mb-1 text-sm font-medium">Message</label>
		<textarea
			id="message"
			bind:value={formData.message}
			rows="4"
			required
			disabled={isSubmitting}
			class="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
		></textarea>
	</div>

	<button
		type="submit"
		disabled={isSubmitting}
		class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
	>
		{#if isSubmitting}
            <span class="flex items-center justify-center spinner-container">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25 spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75 spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
            </span>
		{:else}
			Send Message
		{/if}
	</button>

	{#if submitStatus === 'success'}
		<div class="success p-4 bg-green-100 text-green-700 rounded-md">Thank you for your message! We'll get back to you soon.</div>
	{:else if submitStatus === 'error'}
		<div class="error p-4 bg-red-100 text-red-700 rounded-md">Sorry, there was an error sending your message. Please try again.</div>
	{/if}
</form>

<style>
    @import '$lib/styles/contact-form.css';
</style>