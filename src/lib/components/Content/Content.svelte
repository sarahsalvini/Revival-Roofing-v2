<script>
</script>

<div class="container mx-auto px-5 py-5 lg:px-32 lg:pt-16">
	<div class="w-full max-w-7xl px-0 md:px-5 lg:px-5 mx-auto">
		<div class="w-full justify-start gap-8 lg:gap-12 grid lg:grid-cols-2 grid-cols-1">
			<div class="lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
				<slot name="image"></slot>
			</div>

			<div class="w-full flex-col lg:items-start gap-10 inline-flex">
				<div class="w-full flex-col justify-center items-start gap-8 flex">
					<div class="w-full flex-col justify-start lg:items-start gap-3 flex text-left">
						<h2
							class="text-dark-6 dark:text-bone text-2xl md:text-4xl font-bold font-manrope leading-normal lg:text-start"
						>
							<slot name="title"></slot>
						</h2>
						<p class="text-gray-500 text-sm md:text-base font-normal leading-relaxed lg:text-start">
							<slot name="list"></slot>
						</p>
					</div>
				</div>
			</div>
		</div>

		<p
			class="text-gray-500 text-left text-sm md:text-base font-normal leading-relaxed lg:text-start mt-6"
		>
			<slot name="description"></slot>
		</p>
	</div>
</div>
