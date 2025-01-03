<script lang="ts">
	import cloneDeep from 'lodash.clonedeep';
	import { galleryTabs, galleryImages } from '$lib/tools';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';

	let activeImages = cloneDeep(galleryImages);

	function filterImages(tab: string) {
		if (tab === 'all') {
			activeImages = cloneDeep(galleryImages);
		} else {
			activeImages = cloneDeep(galleryImages.filter((image: any) => image.tab === tab));
		}
		activeImages = activeImages;
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

	<div class=" my-8">
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
		</div>
	</div>
</div>
