<script>
	import { createEventDispatcher } from 'svelte';
	import HeroForm from '../HeroForm/HeroForm.svelte';
	import BevelCard from '../BevelCard/BevelCard.svelte';
	import DecrotiveSquareDots from '../DecrotiveSquareDots/DecrotiveSquareDots.svelte';

	const dispatch = createEventDispatcher();
</script>

<!-- ====== Hero Section Start -->
<div
	class="relative bg-dark pb-[110px] pt-[80px] shadow-dark-right-lg dark:shadow-powder-right-lg lg:pt-[80px] mx-4 lg:mx-6 lg:m-8 rounded-2xl mt-4"
>
	<img
		src="/roof_background.png"
		alt="roofing shingles"
		class="absolute inset-0 h-full w-full object-cover opacity-75 rounded-2xl"
		style="aspect-ratio: 16/9;"
		width="1920"
		height="1080"
		loading="lazy"
	/>

	<div class="container mx-auto relative">
		<div class="-mx-4 flex flex-wrap items-center">
			<div class="w-full px-4 lg:w-1/2">
				<div class="hero-content text-center lg:text-left m-auto animate-fade-in-down">
					<h1
						class="mb-5 text-white text-2xl font-bold !leading-[1.208] sm:text-[42px] lg:text-[32px] 2xl:text-5xl xl:text-4xl text-nowrap"
					>
						<span class="text-primary"><i>Revive</i></span> Your Roof,
						<br />
						<span class="text-primary"><i>Protect</i></span> Your Home.
					</h1>
					<p class="mb-8 lg:max-w-[480px] text-xs md:text-base w-full text-white">
						Proudly Revitalizing Roofs Across the Kansas City Metro Area. Bringing Dependable
						Repairs, Replacements, and Unmatched Craftsmanship to Every Project.
					</p>
					<ul
						class="flex flex-wrap items-center gap-2 md:gap-4 justify-center lg:justify-start w-full m-auto lg:m-none"
					>
						<li>
							<button
								on:click={() => {
									dispatch('contact');
								}}
								class=" btn-primary btn-large !bg-powder !text-navy"
							>
								Get a Free Estimate</button
							>
						</li>
						<li>
							<a
								href="tel:9132101028"
								class="inline-flex items-center justify-center px-5 py-3 text-center text-sm md:text-base font-medium text-white hover:text-primary"
							>
								Call Us Now
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="w-full px-4 lg:w-1/2">
				<div class="lg:ml-auto lg:text-right">
					<div class="relative z-10 inline-block pt-11 lg:pt-0">
						<BevelCard><div slot="content"><HeroForm /></div></BevelCard>
						<span class="absolute -bottom-8 -left-8 z-[-1] hidden md:block">
							<DecrotiveSquareDots />
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
