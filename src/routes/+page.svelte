<script lang="ts">
	import ContactSection from '$lib/components/ContactSection/ContactSection.svelte';
	import Gallery from '$lib/components/Gallery/Gallery.svelte';
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	import Services from '$lib/components/Services/Services.svelte';
	import Stats from '$lib/components/Stats/Stats.svelte';
	import Team from '$lib/components/Team/Team.svelte';
	import Testimonials from '$lib/components/Testimonials/Testimonials.svelte';

	export function scrollToSection(e: string) {
		const offsetPosition = document.querySelector(e)?.offsetTop - 100;
		window.scrollTo({
			left: 0,
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
</script>

<!-- Hero -->
<section id="hero">
	<HeroSection on:contact={() => scrollToSection('#contact')} />
</section>

<!-- Stats -->
<section id="stats" class="relative z-10 overflow-hidden bg-white dark:bg-dark-4 py-24 text-dark">
	<Stats />
</section>

<!-- Services -->
<section
	id="services"
	class="min-h-fit relative z-20 dark:bg-dark bg-powder custom-clip-one mb-[-5vw] shadow-[0px_-37px_20px_0px_rgba(13,_17,_23,_1)]"
>
	<Services />
</section>

<section id="bio" class="relative z-10 dark:bg-powder bg-navy custom-clip-two min-h-fit mb-[-5vw]">
	<div class="text-white dark:text-navy py-28"><Team /></div>
</section>

<section id="testimonials" class="relative bg-mercury custom-border-arrow">
	<div class="text-navy dark:text-white pt-28"><Testimonials /></div>
</section>

<!-- TODO: make this a gallery with tabs of different projects in the future ex: residential, commercial, etc -->
<!-- <section id="gallery">
	<p class="mt-12 text-base font-semibold uppercase tracking-wide text-powder mb-4">Projects</p>
	<Gallery />
	<div class="block mt-8">
		<a href="/gallery" class="btn-primary btn-large !bg-powder !text-navy">View More</a>
	</div>
</section> -->

<section class="dark:bg-dark bg-white z-10" id="contact">
	<ContactSection />
</section>
