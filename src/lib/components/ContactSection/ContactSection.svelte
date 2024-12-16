<script>
	import { formInputs, handleEmailSubmit } from '$lib/tools';

	let data = {
		name: '',
		email: '',
		phone: '',
		zipcode: '',
		contactMethod: 'Text',
		message: ''
	};
</script>

<section class="bg-white dark:bg-dark-4" id="contact">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="mb-4">
			<div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
				<p class="text-base font-semibold uppercase tracking-wide text-powder mb-4">Contact</p>
				<h2
					class="font-heading mb-4 font-bold tracking-tight text-dark dark:text-white text-3xl sm:text-5xl"
				>
					Get in Touch
				</h2>
			</div>
		</div>
		<div class="flex items-stretch justify-center text-left">
			<div class="grid md:grid-cols-2">
				<div class="h-full pr-6">
					<p
						class="mt-3 mb-12 text-sm md:text-base text-center md:text-left lg:text-md text-dark-4 dark:text-mercury"
					>
						At Revival Roofing and Construction, we pride ourselves on providing top-quality roofing
						solutions and exceptional customer service to the Kansas City metro area. Whether it's a
						new installation, repairs, or maintenance, our team of experts is here to ensure your
						home or business is protected with reliable and lasting results. Contact us today to
						experience unmatched craftsmanship and care tailored to your needs
					</p>
					<ul class="mb-6 md:mb-0">
						<li class="flex">
							<div
								class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-6 w-6"
								>
									<path
										d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
									>
									</path>
									<path d="M15 7a2 2 0 0 1 2 2"></path>
									<path d="M15 3a6 6 0 0 1 6 6"></path>
								</svg>
							</div>
							<div class="ml-4 mb-4 text-left">
								<h3 class="mb-2 text-lg font-medium leading-6 text-dark dark:text-white">
									Contact
								</h3>
								<p class="text-dark dark:text-mercury">Mobile: +1 (913) 210-1028</p>
								<p class="text-dark dark:text-mercury">Mail: info@revivalroofingkc.com</p>
							</div>
						</li>
						<li class="flex">
							<div
								class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-6 w-6"
								>
									<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
									<path d="M12 7v5l3 3"></path>
								</svg>
							</div>
							<div class="ml-4 mb-4">
								<h3 class="mb-2 text-lg font-medium leading-6 text-dark dark:text-white">Hours</h3>
								<p class="text-dark dark:text-mercury">Monday - Saturday: 8:00 am - 6:00 pm</p>
								<p class="text-dark dark:text-mercury">Sunday: 10:00 am - 5:00 pm</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="card h-fit max-w-6xl p-5 md:pt-0 md:p-12" id="form">
					<h2 class="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
					<form id="contactForm">
						<div class="mb-6">
							<div class="mx-0 mb-1 sm:mb-4">
								{#each formInputs as input}
									<div class="mx-0 mb-1 sm:mb-4">
										{#if input.type === 'input'}
											<label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input
												type="text"
												id="name"
												autocomplete={input.key}
												placeholder={input.title}
												bind:value={data[input.key]}
												class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
												name={input.key}
											/>
										{:else if input.type === 'radio'}
											<fieldset class="relative z-0 w-full pt-3 text-dark dark:text-mercury">
												<div>{input.title}</div>
												<div class="block py-2 space-x-6 text-left">
													{#each input.options as option}
														<label
															class="text-white text-sm md:text-md text-dark dark:text-mercury"
														>
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
										{:else if input.type === 'textarea'}
											<label for="textarea" class="pb-1 text-xs uppercase tracking-wider"
											></label><textarea
												id="textarea"
												name="textarea"
												cols="30"
												rows="5"
												placeholder="Write your message..."
												class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 bg-transparent"
											></textarea>
										{/if}
									</div>
								{/each}

								<div class="text-center">
									<button
										type="submit"
										class="btn-primary btn-large"
										on:click={(e) => {
											console.log('submit');
											handleEmailSubmit(e, data);
										}}>Send Message</button
									>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
