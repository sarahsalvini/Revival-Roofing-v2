<script>
	import { galleryImages } from '$lib/tools';
	let activeIndex = 1;
</script>

<!-- TODO: make this a gallery with tabs of different projects in the future ex: residential, commercial, etc -->

<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-20">
	<div class="-m-1 flex flex-wrap md:-m-2">
		<div class="flex w-1/2 flex-wrap">
			<div class="md:w-1/2 p-1 md:p-2">
				<img
					alt="gallery"
					class="block h-full w-full rounded-lg object-cover object-center"
					src="/roofing_photos/IMG_2195.PNG"
				/>
			</div>
			<div class="md:w-1/2 p-1 md:p-2">
				<img
					alt="gallery"
					class="block h-full w-full rounded-lg object-cover object-center"
					src="/roofing_photos/1.png"
				/>
			</div>
			<div class="w-full p-1 md:p-2">
				<img
					alt="gallery"
					class="block h-full w-full rounded-lg object-cover object-center"
					src="/roofing_photos/IMG_2201.PNG"
				/>
			</div>
		</div>
		<div class="flex w-1/2 flex-wrap">
			<div class="w-full p-1 md:p-2">
				<img
					alt="gallery"
					class="block h-full w-full rounded-lg object-cover object-center"
					src="/gallery/4.png"
				/>
			</div>
			<div class="md:w-1/2 p-1 md:p-2">
				<img
					alt="gallery"
					class="block h-full w-full rounded-lg object-cover object-center"
					src="/gallery/8.png"
				/>
			</div>
			<div class="md:w-1/2 p-1 md:p-2">
				<img
					alt="gallery"
					class="block h-full w-full rounded-lg object-cover object-center"
					src="/gallery/3.png"
				/>
			</div>
		</div>
	</div>
</div>
