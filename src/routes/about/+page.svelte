<script>
	let members = [
		{ name: 'Joseph', title: 'Rep' },
		{ name: 'Hunter', title: 'Rep' },
		{ name: 'Greg', title: 'Rep' },
		{ name: 'Nelson', title: 'Rep' },
		{ name: 'Gonzo', title: 'Rep' }
	];
</script>

<section class="py-24 relative">
	<div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
		<div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
			<div
				class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
			>
				<div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
					<img
						class="sm:ml-0 ml-auto rounded-xl object-cover"
						src="/team_photos/team_install.jpeg"
						alt="installation "
					/>
				</div>
				<img class="rounded-xl object-cover" src="/team_photos/IMG_2192.JPG" alt="team " />
			</div>
			<div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
				<div class="w-full flex-col justify-center items-start gap-8 flex">
					<div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
						<h2
							class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
						>
							Empowering Each Other to Succeed
						</h2>
						<p
							class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
						>
							Every project we've undertaken has been a collaborative effort, where every person
							involved has left their mark. Together, we've not only constructed buildings but also
							built enduring connections that define our success story.
						</p>
					</div>
					<div
						class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
					>
						<div class="flex-col justify-start items-start inline-flex">
							<h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">8+</h3>
							<h6 class="text-gray-500 text-base font-normal leading-relaxed">
								Years of Experience
							</h6>
						</div>
						<div class="flex-col justify-start items-start inline-flex">
							<h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
							<h6 class="text-gray-500 text-base font-normal leading-relaxed">
								Successful Projects
							</h6>
						</div>
						<div class="flex-col justify-start items-start inline-flex">
							<h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
							<h6 class="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
						</div>
					</div>
				</div>
				<button
					class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
				>
					<span class="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
				</button>
			</div>
		</div>
	</div>

	<!-- Team -->
	<div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Title -->
		<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
			<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet Our team</h2>
		</div>
		<!-- End Title -->
		<div class="text-center w-full m-auto">
			<div class="inline-flex gap-8 md:gap-12 mb-8">
				<div class="text-center">
					<img
						class="rounded-full size-24 mx-auto"
						src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
						alt="Avatar"
					/>
					<div class="mt-2 sm:mt-4">
						<h3 class="font-medium text-gray-800 dark:text-white">Jake Schnieders</h3>
						<p class="text-sm text-gray-600 dark:text-neutral-400">Co-Owner</p>
					</div>
				</div>
				<div class="text-center">
					<img
						class="rounded-full size-24 mx-auto"
						src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
						alt="Avatar"
					/>
					<div class="mt-2 sm:mt-4">
						<h3 class="font-medium text-gray-800 dark:text-white">Drew Prewitt</h3>
						<p class="text-sm text-gray-600 dark:text-neutral-400">Co-Owner</p>
					</div>
				</div>
			</div>

			<!-- Grid Team Members-->
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
				{#each members as m}
					<div class="text-center">
						<img
							class="rounded-full size-24 mx-auto"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
							alt="Avatar"
						/>
						<div class="mt-2 sm:mt-4">
							<h3 class="font-medium text-gray-800 dark:text-white">{m.name}</h3>
							<p class="text-sm text-gray-600 dark:text-neutral-400">{m.title}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<!-- Card -->
		<div class="mt-12 flex justify-center">
			<div class="border border-gray-200 py-2 px-3 rounded-full dark:border-neutral-700">
				<div class="flex items-center gap-x-3">
					<span class="text-sm text-gray-500 dark:text-neutral-500">Want to work with us?</span>
					<a
						class="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
						href="#"
					>
						We are hiring
						<svg
							class="shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
						>
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- End Team -->
</section>

<style>
</style>
