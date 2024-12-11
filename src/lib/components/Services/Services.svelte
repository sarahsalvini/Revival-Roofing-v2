<script>
	import { services } from '$lib/tools';
</script>

<div class="pb-12 pt-20 lg:pb-[120px] lg:pt-[180px] dark:bg-dark">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-12 max-w-[910px] text-center lg:mb-20">
					<h2
						class="mb-5 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px] dark:text-powder"
					>
						Our Services
					</h2>
					<p class="text-base text-body-color dark:text-white">
						At Revival Roofing we offer a wide range of services to protect and enhance your home.
						From roof repairs and inspections after Midwest storms to custom interior and exterior
						projects, we’re here to meet your unique needs. We also work with your insurance company
						to simplify the claims process, ensuring your home is safe, secure, and beautifully
						customized.
					</p>
				</div>
			</div>
		</div>
		<div class="-mx-4 flex flex-wrap text-left gap-y-5">
			{#each services as service}
				<div class="w-full px-4 md:w-1/2 lg:w-1/3">
					<div
						class="mb-9 rounded-[20px] bg-bone p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 dark:bg-dark-4 lg:min-h-[420px] h-full"
					>
						<div
							class="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-dark-4 text-white dark:bg-powder dark:text-navy"
						>
							<i class="{service.icon} text-4xl" />
						</div>
						<h4 class="mb-[14px] text-2xl font-semibold text-dark dark:text-white uppercase">
							{service.title}
						</h4>
						<p class="text-body-color dark:text-white">
							{service.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
