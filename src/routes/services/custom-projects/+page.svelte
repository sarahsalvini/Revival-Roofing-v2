<script>
	import Content from '$lib/components/Content/Content.svelte';
	import BentoGridOne from '$lib/components/BentoGrids/BentoGridOne.svelte';
	import ContactSection from '$lib/components/ContactSection/ContactSection.svelte';
	let customProjects = [
		{ icon: 'fa-brands fa-windows', title: 'Window Replacement' },
		{ icon: 'fa-solid fa-pen-ruler', title: 'Fence Installation' },
		{ icon: 'fas fa-warehouse', title: 'Deck & Patio Construction' },
		{ icon: 'fas fa-swatchbook', title: 'Interior & Exterior Remodeling' }
	];
</script>

<div class="bg-white dark:bg-dark-4 custom-clip-one pb-20">
	<Content>
		<img
			slot="image"
			class="sm:ml-0 ml-auto rounded-xl object-cover"
			src="/roofing_photos/window_install.jpg"
			alt="Custom Projects - Window Installation"
		/>
		<h2 slot="title">Custom Projects Tailored to Your Vision</h2>
		<ul slot="list" class="grid gap-3">
			{#each customProjects as project}
				<li>
					<i class="text-lg {project.icon} mr-2 w-[25px]"></i>
					{project.title}
				</li>
			{/each}
		</ul>
		<div slot="description">
			<p>
				At Revival Roofing and Construction, we believe your home should reflect your unique style
				and needs. That’s why we specialize in creating custom projects that bring your dreams to
				life. Whether it’s building a fence to enhance your property’s privacy and curb appeal,
				replacing outdated windows for improved energy efficiency, or tackling any other home
				improvement project, we’re here to make it happen.
			</p>
			<br />
			<div class="md:inline-flex gap-2">
				<p>
					Our team works directly with homeowners to design and execute personalized solutions,
					ensuring every detail is tailored to your vision. With a focus on quality craftsmanship,
					clear communication, and attention to detail, we take pride in delivering results that
					exceed expectations. No matter the size or scope of your project, Revival Roofing and
					Construction is your trusted partner for turning ideas into reality and creating a home
					you’ll love for years to come.
				</p>
				<img
					src="/roofing_photos/fence.jpg"
					alt="Custom Projects - Window Installation"
					class="sm:ml-0 ml-auto rounded object-contain mt-6 md:mt-0 md:max-w-[400px]"
				/>
			</div>
		</div>
	</Content>
</div>
<div class="mt-[-100px] min-h-[300px] bg-powder">
	<ContactSection />
</div>
