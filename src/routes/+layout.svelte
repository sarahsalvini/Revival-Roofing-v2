<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ColorModeToggle from '$lib/components/ColorModeToggle/ColorModeToggle.svelte';
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	let darkMode = true;

	function callNumber() {
		window.location.href = 'tel:9134865830';
	}
</script>

<!-- COMMENT OUT NAV WHEN PUSHING -->

<!-- <div class="sticky top-0 z-20 bg-white dark:bg-dark-4">
	<div
		class="flex items-end justify-end gap-8 pr-12 lg:pr-0 sm:flex lg:pr-0 whitespace-nowrap bg-transparent"
	>
		<ColorModeToggle bind:darkMode />
		<button
			class="block sm:hidden mb-1.5 text-navy font-semibold text-sm tracking-wider dark:text-white px-6 bg-transparent"
			on:click={callNumber}
		>
			<i class="fa fa-phone mr-1"></i> (913) 702-6965
		</button>
	</div>
	<Navbar bind:darkMode />
</div>
<HeroSection /> -->
<slot />
