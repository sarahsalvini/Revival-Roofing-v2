<script>
	import truncate from 'lodash.truncate';
	const yelpURL = 'https://www.yelp.com/biz/revival-roofing-overland-park#reviews';
	const googleURL = '';
	let currentIndex = 0;
	let testimonials = [
		{
			name: 'Jill S',
			project: 'Exterior Painting & Roof Replacement',
			text: `Revival Roofing-Overland Park, KS deserves a MILLION STARS! This roofing company is not only the best overall company we have ever dealt with but they are literally the best at ALL TRADES! They have done two roofs for us, window replacement, all new gutters, interior and exterior paint! I am a price shopper AND super picky. I always get estimates. I quickly figured out I no longer needed to do that bc RR was so competitive with price AND the BEST quality. I truly feel like RR extended their contractor discount to us. Our realtor took note of RR's service and quality work and has since included Revival Roofing's business to her package that she gives to her clients. Malina Group with Keller Williams is one of the top sales groups in the country-so she definitely appreciated RR. RR stands WAY OUT-ABOVE ALL OF THE REST in not only ROOFING, but windows, painting, and so much more. The fact that the owner makes it a part of his day to personally take part in the process and over sees all jobs is extraordinary. The owners saw ALL of the projects from start to finish. He was incredibly helpful regarding insurance and even met with the adjusters for us! RR's crew are also the best in the business. They were excellent at their job and took pride in `,
			rating: 5,
			url: yelpURL
		},
		{
			name: 'Marsha M.',
			project: 'Roof Replacement',
			text: "I was having a hard time finding a company that could handle my roof replacement and gutter repair. Jake was extremely professional, and I'm so glad I went with Revival Roofing - they exceeded all of my expectations.",
			rating: 5,
			url: yelpURL
		},
		{
			name: 'Sarah S.',
			project: 'Exterior Painting & Roof Replacement',
			text: "We couldn't be happier with the work Revival Roofing did for us! They handled our new roof, new gutters, new paint, replaced our skylight and everything turned out amazing!! Working with Jake was more than I expected. I usually dread having work done on our house but he was excited, organized, and always on time. He made the process surprisingly fun (which isn't something I ever expected to say about home renovations!).",
			rating: 5,
			url: yelpURL
		}
	];

	function nextSlide() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<div class=" mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 xl:py-24 flex">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 flex">
		<div class="lg:max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
			<h2 class="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
				Don't just take our word for it...
			</h2>

			<p class="mt-4 text-dark">
				Discover what homeowners have to say about their experience with us. From quality
				craftsmanship to dependable service, their stories reflect our commitment to excellence in
				every project we undertake.
			</p>

			<div class="flex items-center gap-8 w-full justify-center lg:justify-end mt-8">
				<button
					on:click={prevSlide}
					class="group text-navy flex justify-center items-center border border-solid border-dark w-12 h-12 transition-all duration-500 rounded-full hover:bg-dark-5"
				>
					<svg
						class="h-6 w-6 text-dark group-hover:text-bone"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<button
					on:click={nextSlide}
					class="group text-navy flex justify-center items-center border border-solid border-dark w-12 h-12 transition-all duration-500 rounded-full hover:bg-dark-5"
				>
					<svg
						class="h-6 w-6 text-dark group-hover:text-bone"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div class="grid place-items-center text-dark dark:text-powder">
			{#each testimonials as testimonial, i}
				{#if i === currentIndex}
					<div
						class="group bg-powder dark:bg-navy border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full"
					>
						<div class="flex items-center mb-9 gap-2 justify-center">
							{#each Array(testimonial.rating) as _}
								<svg
									class="w-5 h-5"
									viewBox="0 0 18 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
										fill="currentColor"
									/>
								</svg>
							{/each}
						</div>
						<p class="text-base leading-8 mb-9 text-center">
							{truncate(testimonial.text, { length: 320, separator: '...' })}

							{#if testimonial.text.length > 320}
								<br />
								<a href={testimonial.url} target="_blank" class="text-primary underline"
									>Read More</a
								>
							{/if}
						</p>
						<div class="flex items-center gap-5 justify-center">
							<div>
								<h5 class=" font-medium">{testimonial.name}</h5>
								<span class="text-sm">{testimonial.project}</span>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
