<script>
	const postions = [{ title: 'Field Representative', link: '/careers/field-rep' }];
</script>

<section class="mx-auto max-w-7xl">
	<div class="xl:py-24 md:py-20 py-10 xl:px-0 px-4 md:px-10">
		<span
			class="w-fit mx-auto flex items-center justify-center bg-navy rounded-full text-powder text-center text-sm font-medium leading-5 px-3 py-1 mb-5"
			>Careers at Revival Roofing</span
		>
		<h1 class=" text-center font-manrope lg:text-5xl text-2xl font-bold leading-tight mb-8">
			Unlock a new career <br />at Revival Roofing
		</h1>
		<p class="text-left md:text-center text-sm md:text-base font-normal leading-7">
			At Revival Roofing and Construction, we’re always on the lookout for driven, enthusiastic
			individuals who are ready to grow with a fast-paced and forward-thinking company. Our team is
			the heart of our success, and we believe in investing in our people through meaningful
			opportunities and a supportive work environment.
			<br /> <br />
			Whether you're just getting started or looking to take your career to the next level, Revival Roofing
			offers a place where you can thrive. We embrace a youthful and adaptable spirit that empowers us
			to respond quickly to industry shifts and customer needs using cutting-edge technology and fresh
			thinking.
			<br /> <br />
			Explore our current job openings and discover how you can make a real impact.
		</p>
	</div>
	<div class="lg:pb-24 md:pb-16 pb-10 bg-slate-50 xl:px-0 px-10">
		<h2 class="text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14">
			Open positions
		</h2>

		<div
			class="lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-dark-6 dark:bg-white rounded-2xl p-6 md:p-12"
		>
			{#each postions as position}
				<a
					class="flex items-center justify-between gap-x-8 pb-6 border-b border-gray-200"
					href={position.link}
				>
					<h3
						class="text-left text-white dark:text-dark text-base md:text-xl font-medium leading-8"
					>
						{position.title}
					</h3>

					<button
						class=" w-20 h-9 rounded-full bg-powder dark:hover:bg-white-smoke hover:bg-white-smoke transition-all duration-700 text-dark text-xs font-semibold leading-4"
						>Apply</button
					>
				</a>
			{/each}
		</div>
	</div>
</section>
