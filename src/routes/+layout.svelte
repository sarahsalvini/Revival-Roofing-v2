<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	// import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
</script>

<div class="sticky top-0 z-20">
	<Navbar />
</div>
<!-- <HeroSection /> -->
<slot />
