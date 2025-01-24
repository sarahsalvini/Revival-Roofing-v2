<script>
	import Content from '$lib/components/Content/Content.svelte';
	import RoofProcess from '$lib/components/RoofProcess/RoofProcess.svelte';
	let list = [
		{ icon: 'fa fa-home', title: 'Complimentary roof inspections for peace of mind' },
		{ icon: 'fas fa-tools', title: 'Cosmetic services to full roof replacements' },
		{ icon: 'fas fa-history', title: 'Efficient repairs completed in as quickly as one day!' }
	];

	let services = [
		{
			title: 'Shingle Install & Replacement',
			img: '/roof_replacement/luxury.jpg',
			description:
				'Shingle installation and replacement starts with removing old or damaged shingles to inspect and prepare the roof’s surface. New shingles are then carefully installed to provide a fresh, clean look while protecting your home from leaks, wind, and weather damage. This process not only restores your roof’s durability but also improves insulation, helping to maintain energy efficiency and keep your home comfortable year-round.'
		},
		{
			title: 'Metal Roofing',
			img: '/roof_replacement/metal.jpg',
			description:
				'Metal roofing is installed by securing durable metal panels or shingles to your roof. This type of roofing is highly weather-resistant and long-lasting, making it a great investment for your home. Its sleek appearance pairs with practical benefits like energy efficiency, reduced maintenance, and excellent performance against harsh weather, ensuring peace of mind for years to come.'
		},
		{
			title: 'Commercial Services',
			img: '/roof_replacement/commercial.jpg',
			description:
				'Commercial roofing services focus on addressing the specific needs of business properties. Whether it’s installing a new roof, repairing damage, or performing routine maintenance, the process ensures the roof is durable and equipped to handle the size and function of a commercial building. Materials like TPO, EPDM, and metal are commonly used for their strength, longevity, and ability to meet safety standards.'
		}
	];
</script>

<Content>
	<img
		slot="image"
		class="sm:ml-0 ml-auto rounded-xl object-cover"
		src="/gallery/4.png"
		alt="Roof Replacement Services - "
	/>
	<h2 slot="title">Roof Replacements That Stand the Test of Time</h2>
	<ul slot="list" class="grid gap-3">
		{#each list as project}
			<li>
				<i class="text-lg {project.icon} mr-2 w-[25px]"></i>
				{project.title}
			</li>
		{/each}
	</ul>
	<p class="md:" slot="description">
		At Revival Roofing and Construction, we specialize in providing top-tier roof replacement
		services that deliver lasting durability and unmatched protection. Your roof is your home’s
		first defense against the elements, and we understand the importance of getting it right the
		first time. Unlike many in the industry who cut corners, we prioritize excellence, using premium
		materials and proven techniques to ensure your roof stands strong through storms, heat, and
		time.
		<br /> <br />
		Don’t settle for less—invest in a roof that adds value to your property and peace of mind to your
		life. Contact Revival Roofing today for a free inspection and discover how we can transform your
		roof into a long-lasting shield of protection.
	</p>
</Content>
<div class="container mx-auto px-5 py-5 w-full max-w-7xl">
	<h2
		class="my-5 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px] dark:text-powder"
	>
		Roofing Services
	</h2>
	<div class="inline-flex flex-wrap gap-6 justify-center">
		{#each services as service}
			<div
				class="relative flex flex-col my-6 bg-powder dark:bg-dark-6 shadow-sm rounded-lg max-w-96 text-left"
			>
				<div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
					<img src={service.img} alt="card-image" class="w-full h-full object-cover" />
				</div>
				<div class="p-4">
					<h6 class="mb-2 text-slate-800 text-xl font-semibold uppercase">
						{service.title}
					</h6>
					<p class="text-slate-600 leading-normal font-light">
						{service.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
<!-- <div class="py-6">
	<RoofProcess />
</div> -->
