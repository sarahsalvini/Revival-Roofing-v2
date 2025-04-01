<script>
	import ContactSection from '$lib/components/ContactSection/ContactSection.svelte';
	import { services } from '$lib/tools';
	const features = [
		...services,
		{
			title: 'Interior Remodel',

			icon: 'fas fa-home',
			description: `Reimagine your living spaces with our expert interior remodeling services. From kitchens and bathrooms to basements and beyond, we transform your home with thoughtful design and quality craftsmanship.`,
			caption: `Transform and refresh your interior spaces with custom remodeling solutions tailored to your lifestyle.`,
			bulletPoints: [
				'Kitchen and bathroom remodels',
				'Basement finishing and renovations',
				'Open-concept layout modifications',
				'Drywall, flooring, and trim updates',
				'Lighting and electrical upgrades',
				'Custom cabinetry and storage solutions',
				'Designed to improve comfort, style, and functionality'
			]
		},
		{
			title: 'Fence Installation',
			contact: true,
			icon: 'fas fa-border-style',
			description: `Enhance privacy, security, and curb appeal with our professional fence installation services. We offer a wide range of materials and styles to complement your property and meet your functional needs.`,
			caption: `Durable, stylish fencing solutions for added privacy, safety, and aesthetic value.`,
			bulletPoints: [
				'Custom fence installation for residential and commercial properties',
				'Wood, vinyl, aluminum, and chain-link options',
				'Privacy, security, and decorative fencing solutions',
				'Fence repair and replacement services',
				'Gate installation and hardware upgrades',
				'Improves property boundaries and curb appeal',
				'Built to withstand weather and wear'
			]
		},
		{
			title: 'Deck Construction',
			icon: 'fas fa-th-large',
			description: `Create the perfect outdoor retreat with our custom deck construction services. Whether you're looking for a cozy backyard space or an expansive entertaining area, we design and build decks to suit your vision.`,
			caption: `Custom-built decks for relaxing, entertaining, and expanding your outdoor living space.`,
			bulletPoints: [
				'Custom-designed decks to fit your outdoor space',
				'Pressure-treated wood, composite, and cedar options',
				'New deck builds, extensions, and replacements',
				'Staircases, railings, and built-in seating available',
				'Durable construction for year-round use',
				'Increases usable living space and home value',
				'Perfect for entertaining, relaxing, and outdoor living'
			]
		},
		{
			title: 'Skylight Installation',

			icon: 'fas fa-sun',
			description: `Bring natural light into your home with our professional skylight installation services. Brighten your space, enhance ventilation, and add architectural interest with high-quality skylight options.`,
			caption: `Brighten your home with natural light and energy-efficient skylight solutions.`,
			bulletPoints: [
				'Professional skylight installation for homes and businesses',
				'Fixed, vented, and tubular skylight options',
				'Improves natural lighting and energy efficiency',
				'Enhances ventilation and indoor air quality',
				'Weather-sealed to prevent leaks and drafts',
				'Custom placements to fit your space and roofline',
				'Brightens rooms and adds architectural interest'
			]
		}
	];
</script>

<section class="">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="lg:mx-auto text-left lg:text-center max-w-screen-xl mb-20">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-navy dark:text-white">
				Services We Offer
			</h2>
			<p class="text-navy sm:text-xl dark:text-gray-400">
				We're a Class B licensed contractor, which means we’re qualified to take on a wide range of
				construction, remodeling, and specialty projects. From roofing and windows to full interior
				renovations — we’ve got you covered. Don’t see your service listed? Reach out to us —
				chances are, we can help.
			</p>
		</div>

		<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
			{#each features as feature}
				<div class="text-left border-t-2 border-powder md:border-t-0 pt-4">
					<div
						class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-powder lg:h-12 lg:w-12 dark:bg-primary-900"
					>
						<i class="fas {feature.icon} text-[#3A94A8]" />
					</div>
					<h3 class=" mb-2 text-lg lg:text-xl font-bold dark:text-white">{feature.title}</h3>
					<p class=" text-sm md:text-base text-navy dark:text-gray-400">{feature.caption}</p>
					{#if feature.bulletPoints}
						<ul class=" text-sm md:text-base pl-4 mt-4 list-disc list-outside">
							{#each feature.bulletPoints as bulletPoint}
								<li class="text-navy dark:text-gray-400">{bulletPoint}</li>
							{/each}
						</ul>
					{/if}

					{#if feature.link}
						<a
							class=" text-sm md:text-base block mt-3 text-primary-600 dark:text-primary-500 hover:underline"
							href={feature.link}>Learn more <span aria-hidden="true">&rarr;</span></a
						>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="mt-[100px] min-h-[300px] bg-powder">
	<hr />
	<ContactSection />
</div>
