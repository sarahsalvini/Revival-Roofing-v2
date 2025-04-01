<script>
	import { applicationForm, handleEmailSubmit } from '$lib/tools';
	export let formTitle = 'Ready to Get Started?';
	export let jobType = 'Field Representative';
	let showError = false;
	let saving = false;

	function toggleError() {
		showError = !showError;
	}
	let data = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		resume: '',
		contactMethod: 'Text',
		message: ''
	};

	function isValidPhone(phone) {
		const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/; // Updated to allow dashes, spaces, and parentheses
		return phoneRegex.test(phone);
	}

	function isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
		return emailRegex.test(email);
	}

	function isFormValid(data) {
		return Object.entries(data).every(([key, value]) => {
			if (
				(key === 'resume' || key === 'coverLetter' || key === 'portfolio') &&
				typeof value === 'object'
			) {
				return true;
			}

			if (typeof value !== 'string') return false; // Ensure value is a string

			const trimmedValue = value.trim();
			if (trimmedValue.length === 0 && applicationForm.find((a) => a.key === key).required)
				return false;

			if (key === 'phone') {
				const numericPhone = trimmedValue.replace(/[^0-9+]/g, ''); // Remove non-numeric characters except +
				if (!isValidPhone(numericPhone)) {
					console.error('Phone number is not valid');
					return false;
				}
			}
			if (key === 'email' && !isValidEmail(trimmedValue)) {
				console.error('Email is not valid');
				return false;
			}

			return true;
		});
	}

	function sendApplicationEmail(e) {
		const formData = new FormData();

		formData.append('subject', `Revival Roofing Job Application - ${jobType}`);
		formData.append('replyTo', data.email);
		formData.append(
			'text',
			`
		First Name: ${data.firstName}
		Last Name: ${data.lastName}
		Email: ${data.email}
		Phone: ${data.phone}
    Resume: ${data.resume.name}
		Preferred Contact Method: ${data.contactMethod}
		Personal Note: ${data.message}
	`
		);
		formData.append('resume', data.resume); // data.resume should be a File object!

		handleEmailSubmit(e, formData);
		return;
	}
</script>

<div class="card h-fit max-w-6xl p-5 md:pt-0 md:p-12" id="form">
	<h2 class="mb-4 text-2xl font-bold dark:text-white">{formTitle}</h2>
	<form
		id="contactForm"
		on:submit={(e) => {
			e.preventDefault();
			if (isFormValid(data)) {
				saving = true;
				sendApplicationEmail(e, data);
				setTimeout(() => {
					saving = false;
				}, 1000);
			} else {
				console.log('Please fill in all fields before submitting.');
			}
		}}
	>
		<div class="mb-6">
			<div class="mx-0 mb-1 sm:mb-4">
				{#each applicationForm as input}
					<div class="mx-0 mb-1 sm:mb-4 text-left">
						{#if input.type === 'input'}
							<label for="name" class="pb-1 text-xs uppercase tracking-wider"></label>

							<input
								type="text"
								id="name"
								required
								autocomplete={input.key}
								placeholder={input.title}
								bind:value={data[input.key]}
								class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
								name={input.key}
								class:text-red-600={showError}
							/>

							{#if !data[input.key]}
								<span class="text-xs mt-3 text-red-600" class:hidden={!showError}
									>{input.title} is required</span
								>
							{/if}
							{#if data[input.key] && input.key === 'phone' && !isValidPhone(data[input.key].trim())}
								<span class="text-xs mt-3 text-red-600" class:hidden={!showError}
									>{input.title} is not valid</span
								>
							{/if}
							{#if data[input.key] && input.key === 'email' && !isValidEmail(data[input.key].trim())}
								<span class="text-xs mt-3 text-red-600" class:hidden={!showError}
									>{input.title} is not valid</span
								>
							{/if}
						{:else if input.type === 'radio'}
							<fieldset class="relative z-0 w-full pt-3 text-dark dark:text-mercury">
								<div>{input.title}</div>
								<div class="block py-2 space-x-6 text-left">
									{#each input.options as option}
										<label class="text-sm md:text-md text-dark dark:text-mercury">
											<input
												id={option}
												type="radio"
												name="{input.key}-{option}"
												value={option}
												bind:group={data[input.key]}
												class="mr-2 text-dark dark:text-mercury border-2 border-gray-300 focus:ring-powder-blue checked:bg-powder-blue checked:border-powder-blue"
											/>
											{option}
										</label>
									{/each}
								</div>
							</fieldset>
						{:else if input.type === 'file'}
							<label for="file" class="text-base md:text-md text-dark dark:text-mercury"
								>{input.title}</label
							>
							<input
								type="file"
								id="file"
								required={input.required}
								bind:value={data[input.key]}
								on:change={(e) => (data[input.key] = e.target.files[0])}
								class=" w-full py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-0"
								name={input.key}
								class:text-red-600={showError}
							/>
							{#if !data[input.key] && input.required}
								<span class="text-xs mt-3 text-red-600" class:hidden={!showError}
									>{input.title} is required</span
								>
							{/if}
						{:else if input.type === 'textarea'}
							<label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea
								id="textarea"
								name="textarea"
								required={input.required}
								cols="30"
								rows="5"
								bind:value={data[input.key]}
								placeholder="Personal Note..."
								class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 bg-transparent"
							></textarea>
							{#if !data[input.key] && input.required}
								<span class="text-sm text-red-600" class:hidden={!showError}
									>{input.title} is required</span
								>
							{/if}
						{/if}
					</div>
				{/each}

				<div class="text-center">
					<button type="submit" class="btn-primary btn-large" on:click={toggleError}>
						{#if saving}
							<div>
								<svg
									class="animate-spin h-5 w-5 text-gray-800 mx-auto"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									>
									</path>
								</svg>
							</div>
						{:else}
							Apply
						{/if}</button
					>
				</div>
			</div>
		</div>
	</form>
</div>
