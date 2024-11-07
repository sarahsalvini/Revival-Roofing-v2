<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ColorModeToggle from '$lib/components/ColorModeToggle/ColorModeToggle.svelte';
	// import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	let darkMode = true;
</script>

<div class="sticky top-0 z-20">
	<!-- <ColorModeToggle bind:darkMode />
	<Navbar bind:darkMode /> -->
</div>
<!-- <HeroSection /> -->
<slot />
