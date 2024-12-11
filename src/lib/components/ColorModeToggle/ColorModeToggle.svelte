<script lang="ts">
	import { onMount } from 'svelte';

	export let darkMode = true;

	// Ensure dark mode is applied on initial load
	onMount(() => {
		document.documentElement.classList.add('dark');
	});

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<div class="flex items-center justify-center mt-8 mr-8">
	<input
		checked={darkMode}
		on:click={handleSwitchDarkMode}
		type="checkbox"
		id="darkmode-toggle"
		class="hidden"
	/>
	<label
		for="darkmode-toggle"
		class="relative block w-[100px] h-[40px] bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer shadow-inner transition-all"
	>
		<span
			class="absolute w-[30px] h-[30px] top-[5px] left-[12px] bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-md transition-transform transform"
		></span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 496 496"
			class="absolute w-[20px] h-[20px] top-1/2 left-[10px] -translate-y-1/2 fill-white transition-colors"
		>
			<!-- Sun SVG path -->

			<circle cx="248" cy="248" r="80" />
			<!-- Rays -->
			<line x1="248" y1="48" x2="248" y2="0" stroke="#fff" stroke-width="16" />
			<line x1="248" y1="448" x2="248" y2="496" stroke="#fff" stroke-width="16" />
			<line x1="48" y1="248" x2="0" y2="248" stroke="#fff" stroke-width="16" />
			<line x1="448" y1="248" x2="496" y2="248" stroke="#fff" stroke-width="16" />
			<line x1="104" y1="104" x2="48" y2="48" stroke="#fff" stroke-width="16" />
			<line x1="392" y1="104" x2="448" y2="48" stroke="#fff" stroke-width="16" />
			<line x1="104" y1="392" x2="48" y2="448" stroke="#fff" stroke-width="16" />
			<line x1="392" y1="392" x2="448" y2="448" stroke="#fff" stroke-width="16" />
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 49.739 49.739"
			class="absolute w-[20px] h-[20px] top-1/2 right-[10px] -translate-y-1/2 fill-gray-700 dark:fill-white transition-colors"
		>
			<!-- Moon SVG path -->
			<path
				d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
           c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
           c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
           C32.639,48.039,28.825,48.888,25.068,48.889z"
			/>
		</svg>
	</label>
</div>

<style>
	label {
		width: 100px;
		height: 40px;
		position: relative;
		display: block;
		background: #ebebeb;
		border-radius: 40px;
		box-shadow:
			inset 0px 5px 15px rgba(22, 27, 34, 0.4),
			inset 0px -5px 15px rgba(255, 255, 255, 0.4);
		cursor: pointer;
		transition: 0.3s;
	}

	label:after {
		content: '';
		width: 35px;
		height: 35px;
		position: absolute;
		top: 2.5px;
		left: 10px;
		background: linear-gradient(180deg, #ffcc89, #d8860b);
		border-radius: 180px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}

	label svg {
		position: absolute;
		width: 34px;
		top: 20px;
		z-index: 100;
		transition: 0.3s;
	}

	label svg.sun {
		left: 40px;
		fill: #fff;
	}

	label svg.moon {
		left: 40px;
		fill: #7e7e7e;
	}

	input {
		width: 0;
		height: 0;
		visibility: hidden;
	}

	input:checked + label {
		background: #0d1117;
	}

	input:checked + label:after {
		left: 54px;
		/* transform: translateX(-100%); */
		background: linear-gradient(180deg, #777, #3a3a3a);
	}

	input:checked + label svg.sun {
		fill: #7e7e7e;
	}

	input:checked + label svg.moon {
		fill: #fff;
	}

	input:active + label:after {
		width: 60px;
	}

	input:checked + label + .background {
		background: #0d1117;
	}
</style>
