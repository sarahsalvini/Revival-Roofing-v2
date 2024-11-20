<script lang="ts">
	import { formInputs } from '$lib/tools';
	let showError = false;

	function toggleError() {
		showError = !showError;
	}

	let data = {
		name: '',
		email: '',
		phone: '',
		zipcode: '',
		contactMethod: 'Text',
		message: ''
	};
</script>

<div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl text-left">
	<h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
	<form id="form" novalidate>
		{#each formInputs as input}
			{#if input.type === 'input'}
				<div class="relative z-0 w-full mb-5">
					<input
						type="text"
						name="name"
						placeholder=" "
						bind:value={data[input.key]}
						required={input.required}
						class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-gray-200"
						class:border-red-600={showError}
					/>
					<label
						for="name"
						class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 block text-left"
						class:text-red-600={showError}>{input.title}</label
					>
					<span class="text-sm text-red-600" class:hidden={!showError}
						>{input.title} is required</span
					>
				</div>
			{:else if input.type === 'radio'}
				<fieldset class="relative z-0 w-full p-px mb-5">
					<legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0 block text-left"
						>{input.title}</legend
					>
					<div class="block pt-3 pb-2 space-x-4">
						{#each input.options as option}
							<label>
								<input
									id={option}
									type="radio"
									name="{input.key}-{option}"
									value={option}
									bind:group={data[input.key]}
									class="mr-2 text-black border-2 border-gray-300 focus:ring-black"
								/>
								{option}
							</label>
						{/each}
					</div>
				</fieldset>
			{:else if input.type === 'textarea'}
				<div class="relative z-0 w-full mb-5">
					<label
						for="name"
						class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500 block text-left"
						class:text-red-600={showError}>{input.title}</label
					>
					<textarea
						type="text"
						name="name"
						placeholder=" "
						bind:value={data[input.key]}
						class="mt-6 pt-3 p-2 block w-full px-0 bg-transparent border-2 rounded appearance-none focus:outline-none focus:ring-0 border-gray-200"
						class:border-red-600={showError}
					/>
				</div>
			{/if}
		{/each}

		<button
			id="button"
			type="button"
			class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600"
			on:click={toggleError}
		>
			Submit
		</button>
	</form>
</div>

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
