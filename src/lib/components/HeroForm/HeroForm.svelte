<script lang="ts">
	import { formInputs, handleEmailSubmit } from '$lib/tools';
	let showError = false;
	let saving = false;

	function toggleError() {
		showError = !showError;
	}

	let data = {
		name: '',
		email: '',
		phone: '',
		zipcode: '',
		project: 'Residential',
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
			if (typeof value !== 'string') return false; // Ensure value is a string
			const trimmedValue = value.trim();
			if (trimmedValue.length === 0) return false;

			if (key === 'phone') {
				const numericPhone = trimmedValue.replace(/[^0-9+]/g, ''); // Remove non-numeric characters except +
				if (!isValidPhone(numericPhone)) return false;
			}
			if (key === 'email' && !isValidEmail(trimmedValue)) return false;

			return true;
		});
	}
</script>

<h1 class="text-lg md:text-3xl font-bold mb-8 text-center text-white drop-shadow-[0_0_3px_#B8E3E9]">
	Schedule a Free <br />Inspection
</h1>

<form
	id="form"
	novalidate
	on:submit={(e) => {
		e.preventDefault();
		if (isFormValid(data)) {
			saving = true;
			handleEmailSubmit(e, data);
			setTimeout(() => {
				saving = false;
			}, 1000);
		} else {
			console.log('Please fill in all fields before submitting.');
		}
	}}
>
	{#each formInputs as input}
		{#if input.type === 'input'}
			<div class="relative z-0 w-full mb-6">
				<input
					type="text"
					name="name"
					placeholder=" "
					bind:value={data[input.key]}
					required={input.required}
					class="pt-3 pb-2 block w-full px-0 mt-0 !bg-transparent text-white border-0 border-b-2 appearance-none"
					class:border-red-600={showError}
				/>
				<label
					for="name"
					class="absolute duration-300 top-3 -z-1 origin-0 !text-primary block text-left text-xs md:text-md"
					class:text-red-600={showError}>{input.title}</label
				>
				{#if !data[input.key]}
					<span class="text-sm text-red-600" class:hidden={!showError}
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
			</div>
		{:else if input.type === 'radio'}
			<fieldset class="relative z-0 w-full p-px mb-2 pt-6">
				<legend
					class="absolute text-primary transform scale-75 -top-3 origin-0 block text-left text-md md:text-lg mt-4 md:text-nowrap"
					>{input.title}</legend
				>
				<div class="block pt-4 pb-2 space-x-6 text-left">
					{#each input.options as option}
						<label class="text-white text-sm md:text-md">
							<input
								id={option}
								type="radio"
								name="{input.key}-{option}"
								value={option}
								bind:group={data[input.key]}
								class="mr-2 text-black border-2 border-gray-300 focus:ring-powder-blue checked:bg-powder-blue checked:border-powder-blue"
							/>
							{option}
						</label>
					{/each}
				</div>
			</fieldset>
		{:else if input.type === 'textarea'}
			<div class="relative z-0 w-full mb-6">
				<textarea
					type="text"
					name="name"
					placeholder="Message"
					bind:value={data[input.key]}
					class="mt-6 p-2 block w-full bg-transparent border-2 rounded appearance-none focus:outline-none focus:ring-0 border-manatee min-h-[150px]"
					class:border-red-600={showError}
				/>
			</div>
		{/if}
	{/each}

	<button
		id="button"
		class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none btn-primary btn-large !bg-powder !text-navy"
		type="submit"
		on:click={toggleError}
	>
		{#if saving}
			<div>
				<svg
					class="animate-spin h-5 w-5 text-gray-800 mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
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
			Submit
		{/if}
	</button>
</form>

<style>
	.-z-1 {
		z-index: -1;
	}

	.origin-0 {
		transform-origin: 0%;
	}

	input:focus ~ label,
	input:not(:placeholder-shown) ~ label,
	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label,
	select:focus ~ label,
	select:not([value='']):valid ~ label {
		/* @apply transform; scale-75; -translate-y-6; */
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
			rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
			scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		--tw-scale-x: 0.75;
		--tw-scale-y: 0.75;
		--tw-translate-y: -1.5rem;
	}

	input:focus ~ label,
	select:focus ~ label {
		/* @apply text-black; left-0; */
		--tw-text-opacity: 1;
		color: rgba(0, 0, 0, var(--tw-text-opacity));
		left: 0px;
	}
</style>
