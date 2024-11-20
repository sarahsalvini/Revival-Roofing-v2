<script>
	import DecrotiveSquareDots from '../DecrotiveSquareDots/DecrotiveSquareDots.svelte';
	import HeroForm from '../HeroForm/HeroForm.svelte';
	import BevelCard from '../BevelCard/BevelCard.svelte';
</script>

<!-- ====== Hero Section Start -->
<div
	class="relative bg-dark pb-[110px] pt-[80px] shadow-dark-right-lg dark:shadow-powder-right-lg lg:pt-[80px] mx-4 lg:mx-6 lg:m-8 rounded-2xl"
>
	<img
		src="/roof_background.png"
		alt="roofing shingles"
		class="absolute inset-0 h-full w-full object-cover opacity-10 rounded-2xl"
	/>

	<div class="container mx-auto relative">
		<div class="-mx-4 flex flex-wrap items-center">
			<div class="w-full px-4 lg:w-1/2">
				<div class="hero-content text-center lg:text-left m-auto">
					<h1
						class="mb-5 text-white text-4xl font-bold !leading-[1.208] sm:text-[42px] lg:text-[40px] xl:text-5xl"
					>
						<span class="text-primary">Revive</span> Your Roof, <br />
						<span class="text-primary">Protect</span> Your Home.
					</h1>
					<p class="mb-8 lg:max-w-[480px] text-base w-full text-white">
						Proudly Revitalizing Roofs Across the Kansas City Metro Area. Bringing Dependable
						Repairs, Replacements, and Unmatched Craftsmanship to Every Project.
					</p>
					<ul
						class="flex flex-wrap items-center gap-4 justify-center lg:justify-start w-full m-auto lg:m-none"
					>
						<li>
							<a href="javascript:void(0)" class=" btn-primary btn-large !bg-powder !text-navy">
								Get a Free Estimate</a
							>
						</li>
						<li>
							<a
								href="tel:9134865830"
								class="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-white hover:text-primary"
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
						<BevelCard />
						<span class="absolute -bottom-8 -left-8 z-[-1]">
							<svg
								width="93"
								height="93"
								viewBox="0 0 93 93"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="2.5" cy="2.5" r="2.5" fill="#B8E3E9" />
								<circle cx="2.5" cy="24.5" r="2.5" fill="#B8E3E9" />
								<circle cx="2.5" cy="46.5" r="2.5" fill="#B8E3E9" />
								<circle cx="2.5" cy="68.5" r="2.5" fill="#B8E3E9" />
								<circle cx="2.5" cy="90.5" r="2.5" fill="#B8E3E9" />
								<circle cx="24.5" cy="2.5" r="2.5" fill="#B8E3E9" />
								<circle cx="24.5" cy="24.5" r="2.5" fill="#B8E3E9" />
								<circle cx="24.5" cy="46.5" r="2.5" fill="#B8E3E9" />
								<circle cx="24.5" cy="68.5" r="2.5" fill="#B8E3E9" />
								<circle cx="24.5" cy="90.5" r="2.5" fill="#B8E3E9" />
								<circle cx="46.5" cy="2.5" r="2.5" fill="#B8E3E9" />
								<circle cx="46.5" cy="24.5" r="2.5" fill="#B8E3E9" />
								<circle cx="46.5" cy="46.5" r="2.5" fill="#B8E3E9" />
								<circle cx="46.5" cy="68.5" r="2.5" fill="#B8E3E9" />
								<circle cx="46.5" cy="90.5" r="2.5" fill="#B8E3E9" />
								<circle cx="68.5" cy="2.5" r="2.5" fill="#B8E3E9" />
								<circle cx="68.5" cy="24.5" r="2.5" fill="#B8E3E9" />
								<circle cx="68.5" cy="46.5" r="2.5" fill="#B8E3E9" />
								<circle cx="68.5" cy="68.5" r="2.5" fill="#B8E3E9" />
								<circle cx="68.5" cy="90.5" r="2.5" fill="#B8E3E9" />
								<circle cx="90.5" cy="2.5" r="2.5" fill="#B8E3E9" />
								<circle cx="90.5" cy="24.5" r="2.5" fill="#B8E3E9" />
								<circle cx="90.5" cy="46.5" r="2.5" fill="#B8E3E9" />
								<circle cx="90.5" cy="68.5" r="2.5" fill="#B8E3E9" />
								<circle cx="90.5" cy="90.5" r="2.5" fill="#B8E3E9" />
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
