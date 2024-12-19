<script lang="ts">
	import _ from 'lodash';
	import { galleryTabs, galleryImages } from '$lib/tools';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';

	let activeImages = _.cloneDeep(galleryImages);

	function filterImages(tab: string) {
		if (tab === 'all') {
			activeImages = _.cloneDeep(galleryImages);
		} else {
			activeImages = _.cloneDeep(galleryImages.filter((image: any) => image.tab === tab));
		}
		return;
	}
</script>

<div class="container">
	<Tabs
		tabs={galleryTabs}
		on:tabChange={(e) => {
			filterImages(e.detail);
		}}
	/>

	<div class=" mt-8">
		<div class="break-inside-avoid gap-8 md:columns-2 lg:columns-3">
			{#if activeImages.length}
				{#each activeImages as image}
					<div class="mb-8 overflow-hidden rounded-xl">
						<img src={image.src} alt={image.alt} class="w-full object-cover object-center" />
					</div>
				{/each}
			{:else}
				Coming Soon!
			{/if}

			<!-- <div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/9.png" alt="gutter guard" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/3.png" alt="gutter guard" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/4.png" alt="gallery" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/5.png" alt="gallery" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="gallery/7.png" alt="/gallery" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/6.png" alt="gallery" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/2.png" alt="gallery" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/8.png" alt="gallery" class="w-full object-cover object-center" />
		</div>
		<div class="mb-8 overflow-hidden rounded-xl">
			<img src="/gallery/1.png" alt="gallery" class="w-full object-cover object-center" />
		</div> -->
		</div>
	</div>
</div>
