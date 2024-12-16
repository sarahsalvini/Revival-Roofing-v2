<script>
	let activeIndex = 1;
</script>

<!-- TODO: make this a gallery with tabs of different projects in the future ex: residential, commercial, etc -->

<div class="container">
	<div class="m-auto w-full">
		<div class="mb-6 h-[500px] w-[600px] m-auto flex">
			<div class="rounded-xl w-full flex justify-center items-center flex">
				{#if activeIndex === 1}
					<img
						src="/gallery/9.png"
						alt="gutter guard"
						class="w-full max-h-[500px] h-auto object-contain"
					/>
				{/if}
				{#if activeIndex === 2}
					<img
						src="/gallery/3.png"
						alt="gutter guard"
						class="w-full max-h-[500px] h-auto object-contain"
					/>
				{/if}
				{#if activeIndex === 3}
					<img
						src="/gallery/4.png"
						alt="gallery"
						class="w-full max-h-[500px] h-auto object-contain"
					/>
				{/if}
				{#if activeIndex === 4}
					<img
						src="/gallery/7.png"
						alt="gallery"
						class="w-full max-h-[500px] h-auto object-contain"
					/>
				{/if}
			</div>
		</div>
		<div class="flex items-center gap-2 sm:gap-4 md:gap-6 m-auto justify-center">
			<button
				on:click={() => (activeIndex = 1)}
				class="overflow-hidden rounded-lg border lg:rounded-xl"
				class:border-primary={activeIndex === 1}
				class:border-transparent={activeIndex !== 1}
			>
				<img
					src="/gallery/9.png"
					alt="thumbnail-1"
					class="object-cover object-center w-full h-full sm:w-[100px] sm:h-[100px]"
					class:mobile-w-[40px]={activeIndex !== 1}
					class:mobile-h-[20px]={activeIndex !== 1}
				/>
			</button>
			<button
				on:click={() => (activeIndex = 2)}
				class="overflow-hidden rounded-lg border lg:rounded-xl"
				class:border-primary={activeIndex === 2}
				class:border-transparent={activeIndex !== 2}
			>
				<img
					src="/gallery/3.png"
					alt="thumbnail-2"
					class="object-cover object-center w-full h-full sm:w-[100px] sm:h-[100px]"
					class:mobile-w-[40px]={activeIndex !== 2}
					class:mobile-h-[20px]={activeIndex !== 2}
				/>
			</button>
			<button
				on:click={() => (activeIndex = 3)}
				class="overflow-hidden rounded-lg border lg:rounded-xl"
				class:border-primary={activeIndex === 3}
				class:border-transparent={activeIndex !== 3}
			>
				<img
					src="/gallery/4.png"
					alt="thumbnail-3"
					class="object-cover object-center w-full h-full sm:w-[100px] sm:h-[100px]"
					class:mobile-w-[40px]={activeIndex !== 3}
					class:mobile-h-[20px]={activeIndex !== 3}
				/>
			</button>
			<button
				on:click={() => (activeIndex = 4)}
				class="overflow-hidden rounded-lg border lg:rounded-xl"
				class:border-primary={activeIndex === 4}
				class:border-transparent={activeIndex !== 4}
			>
				<img
					src="/gallery/7.png"
					alt="thumbnail-4"
					class="object-cover object-center w-full h-full sm:w-[100px] sm:h-[100px]"
					class:mobile-w-[40px]={activeIndex !== 4}
					class:mobile-h-[20px]={activeIndex !== 4}
				/>
			</button>
		</div>
	</div>
</div>
