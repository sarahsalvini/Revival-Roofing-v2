<script>
	import Content from '$lib/components/Content/Content.svelte';
</script>

<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-20">
	<Content>
		<img
			slot="image"
			class="sm:ml-0 ml-auto rounded-xl object-cover"
			src="/roofing_photos/gutter.jpg"
			alt="Gutter Services - Gutter Guard Installation"
		/>
		<h2 slot="title">Tailored Gutter Solutions for Superior Home Protection</h2>
		<p slot="description">
			At Revival Roofing and Construction, we know that every home is unique, and your gutter system
			should be too. That’s why we provide custom gutter replacement services designed and crafted
			onsite to perfectly match your home’s needs. Our personalized approach ensures optimal water
			flow, reduces clogs, and protects your home from potential damage, including basement
			flooding, exterior wear, and foundation issues. Trust Revival Roofing for expertly tailored
			solutions that safeguard your property and keep it looking its best.
		</p>
	</Content>
</div>
