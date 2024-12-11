<script lang="ts">
	import ContactSection from '$lib/components/ContactSection/ContactSection.svelte';
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	import Services from '$lib/components/Services/Services.svelte';
	import Stats from '$lib/components/Stats/Stats.svelte';

	export function scrollToSection(e: string) {
		const offsetPosition = document.querySelector(e)?.offsetTop - 100;
		window.scrollTo({
			left: 0,
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
</script>

<HeroSection on:contact={() => scrollToSection('#contact')} />

<Stats />
<!-- Services -->
<section
	id="services"
	class="min-h-fit relative z-20 dark:bg-dark bg-powder custom-clip-one mb-[-5vw] shadow-[0px_-37px_20px_0px_rgba(13,_17,_23,_1)]"
>
	<Services />
</section>

<!-- <section
	id="testimonials"
	class="relative z-10 dark:bg-powder bg-navy custom-clip-two h-[400px] mb-[-5vw]"
>
	<div class="text-white dark:text-navy pt-28">Testimonials</div>
</section>

<section id="bio" class="relative dark:bg-dark-4 bg-mercury h-[400px] custom-border-arrow">
	<div class="text-navy dark:text-white pt-28">Bio Section</div>
</section> -->

<section class="dark:bg-dark bg-white z-10" id="contact">
	<ContactSection />
</section>
