<script>
	import '../app.css';
	import { page } from '$app/stores'; // Import the page store
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ColorModeToggle from '$lib/components/ColorModeToggle/ColorModeToggle.svelte';

	let darkMode = true;

	function callNumber() {
		window.location.href = 'tel:9132101028';
	}
</script>

<!-- COMMENT OUT NAV WHEN PUSHING -->

<svelte:head>
	<link rel="canonical" href={`https://www.revivalroofingkc.com${$page.url.pathname}`} />
</svelte:head>

<div class="sticky top-0 z-40 bg-white dark:bg-dark-4">
	<div
		class="flex-row-reverse md:flex-row flex items-end justify-between md:justify-end gap-8 md:pr-12 lg:pr-0 sm:flex lg:pr-0 whitespace-nowrap bg-transparent"
	>
		<ColorModeToggle bind:darkMode />
		<button
			class="block sm:hidden mb-1.5 text-navy font-semibold text-sm tracking-wider dark:text-white md:px-6 bg-transparent"
			on:click={callNumber}
		>
			<i class="fa fa-phone mr-1 ml-4 md:ml-0"></i> (913) 210-1028
		</button>
	</div>
	<Navbar bind:darkMode />
</div>
{#if $page.url.pathname !== '/' && $page.url.pathname !== '/careers/field-rep'}
	<div class="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-6 pb-0">
		<a
			href="/"
			class=" block text-left w-full text-navy dark:text-white font-semibold text-sm tracking-wider"
			><i class="fa fa-arrow-left" /> Back
		</a>
	</div>
{/if}
<slot />
