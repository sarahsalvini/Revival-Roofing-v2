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
					<p class="text-sm md:text-base text-body-color dark:text-white">
						At Revival Roofing, our Class B license allows us to offer a wide range of services to
						protect, repair, and enhance your home — inside and out. From roof repairs and storm
						inspections to full interior remodels and custom exterior projects, we’re equipped to
						handle it all. We also work directly with your insurance company to simplify the claims
						process, making sure your home is safe, secure, and tailored to your vision.
					</p>
					<div class="mt-6">
						<a href="/services" class="btn-primary btn-large">View All Services</a>
					</div>
				</div>
			</div>
		</div>
		<div class="-mx-3 flex flex-wrap text-left gap-y-5">
			{#each services.slice(0, 5) as service}
				<a class="w-full px-4 md:w-1/2 lg:w-1/3" href={service.link}>
					<div
						class=" rounded-[20px] bg-bone p-5 shadow-2 hover:shadow-lg md:px-6 xl:px-8 dark:bg-dark-4 lg:min-h-[80px] h-full"
					>
						<div
							class="mb-4 md:mb-6 lg:mb-8 flex h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[60px] items-center justify-center rounded lg:rounded-2xl bg-dark-4 text-white dark:bg-powder dark:text-navy"
						>
							<i class="{service.icon} md:text-2xl lg:text-3xl" />
						</div>
						<h4
							class="mb-3 md:text-lg lg:text-xl font-semibold text-dark dark:text-white uppercase"
						>
							{service.title}
						</h4>
						<p class="text-body-color dark:text-white text-xs">
							{service.description}
						</p>
					</div>
				</a>
			{/each}

			<a class="w-full px-4 md:w-1/2 lg:w-1/3" href="/services">
				<div
					class=" rounded-[20px] bg-bone p-5 shadow-2 hover:shadow-lg md:px-6 xl:px-8 dark:bg-dark-4 lg:min-h-[80px] h-full"
				>
					<div
						class="mb-4 md:mb-6 lg:mb-8 flex h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[60px] items-center justify-center rounded lg:rounded-2xl bg-dark-4 text-white dark:bg-powder dark:text-navy"
					>
						<i class="fas fa-border-style md:text-2xl lg:text-3xl" />
					</div>
					<h4 class="mb-3 md:text-lg lg:text-xl font-semibold text-dark dark:text-white uppercase">
						View All Services <i class="fas fa-long-arrow-right" />
					</h4>
					<p class="text-body-color dark:text-white text-xs">
						We offer a wide range of services beyond what's listed here. Explore everything we have
						to offer or reach out to us directly — we're here to help bring your project to life.
					</p>
				</div>
			</a>
		</div>
	</div>
</div>
