<script>
	import FlipCard from '../FlipCard/FlipCard.svelte';
	let process = [
		{ title: 'Reach Out' },
		{ title: 'Inspection' },
		{ title: 'Expert Advice' },
		{ title: 'Execution' }
	];
</script>

<div class="inline-flex gap-6">
	{#each process as item}
		<FlipCard>
			<p slot="icon">
				<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
					<defs>
						<linearGradient id="bubbleOutlineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stop-color="#B8E3E9" />
							<stop offset="100%" stop-color="#202B3D" />
						</linearGradient>
					</defs>

					<path
						d="M30 50 h100 a10 10 0 0 1 10 10 v50 a10 10 0 0 1 -10 10 h-60 l-20 20 v-20 h-20 a10 10 0 0 1 -10 -10 v-50 a10 10 0 0 1 10 -10 z"
						fill="none"
						stroke="url(#bubbleOutlineGradient)"
						stroke-width="4"
					/>

					<path
						d="M100 90 h70 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-40 l-15 15 v-15 h-15 a10 10 0 0 1 -10 -10 v-40 a10 10 0 0 1 10 -10 z"
						fill="none"
						stroke="url(#bubbleOutlineGradient)"
						stroke-width="4"
					/>
				</svg> -->

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="80px"
					height="80px"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						opacity="0.4"
						d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
						stroke="#B8E3E9"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
						stroke="#B8E3E9"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</p>

			<h6 slot="title">{item.title}</h6>
			<span slot="description" class=" !text-white">Description</span>
		</FlipCard>
	{/each}
</div>
