<script>
</script>

<div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
	<div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
		<div class="lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
			<img
				class="sm:ml-0 ml-auto rounded-xl object-cover"
				src="/gallery/4.png"
				alt="installation "
			/>
		</div>

		<div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
			<div class="w-full flex-col justify-center items-start gap-8 flex">
				<div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
					<h2
						class="text-dark-6 dark:text-bone text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
					>
						<slot name="title"></slot>
					</h2>
					<p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
						<slot name="description"></slot>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
