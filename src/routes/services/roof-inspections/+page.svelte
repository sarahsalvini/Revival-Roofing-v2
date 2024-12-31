<script>
	import Content from '$lib/components/Content/Content.svelte';
</script>

<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-20">
	<Content>
		<img
			slot="image"
			class="sm:ml-0 ml-auto rounded-xl object-cover"
			src="/roofing_photos/storm_damage.png"
			alt="installation "
		/>
		<h2 slot="title">Comprehensive Roof Inspections with Insurance Support</h2>
		<p slot="description">
			At Revival Roofing and Construction, we provide thorough roof inspections designed to give
			homeowners peace of mind. Our experienced team identifies potential issues and ensures your
			roof is in top condition. If damage is discovered, we go the extra mile by assisting you in
			navigating the insurance process, making claims easier and stress-free. Serving homeowners in
			the Kansas City area, we’re here to protect your investment and simplify the path to a secure,
			reliable roof.
		</p>
	</Content>
</div>
