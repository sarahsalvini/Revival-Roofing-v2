<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ColorModeToggle from '$lib/components/ColorModeToggle/ColorModeToggle.svelte';

	let darkMode = true;

	function callNumber() {
		window.location.href = 'tel:9132101028';
	}
</script>

<!-- COMMENT OUT NAV WHEN PUSHING -->

<div class="sticky top-0 z-40 bg-white dark:bg-dark-4">
	<div
		class="flex items-end justify-end gap-8 pr-12 lg:pr-0 sm:flex lg:pr-0 whitespace-nowrap bg-transparent"
	>
		<ColorModeToggle bind:darkMode />
		<button
			class="block sm:hidden mb-1.5 text-navy font-semibold text-sm tracking-wider dark:text-white px-6 bg-transparent"
			on:click={callNumber}
		>
			<i class="fa fa-phone mr-1"></i> (913) 210.1028
		</button>
	</div>
	<Navbar bind:darkMode />
</div>
<!-- <HeroSection />
<div class="h-20 lg:h-[120px] w-full" />
<section
	id="services"
	class="min-h-fit relative z-20 dark:bg-dark bg-powder custom-clip-one mb-[-5vw] shadow-[0px_-37px_20px_0px_rgba(13,_17,_23,_1)]"
>
	<Services />
</section>

<section
	id="testimonials"
	class="relative z-10 dark:bg-powder bg-navy custom-clip-two h-[400px] mb-[-5vw]"
>
	<div class="text-white dark:text-navy pt-28">Testimonials</div>
</section>

<section id="bio" class="relative dark:bg-dark-4 bg-mercury h-[400px] custom-border-arrow">
	<div class="text-navy dark:text-white pt-28">Bio Section</div>
</section>

<section class="dark:bg-dark bg-white h-[400px]" id="contact">
	<div class="pt-28">Contact us</div>
</section> -->

<slot />
