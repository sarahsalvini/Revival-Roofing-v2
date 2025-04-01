<script>
	import { services, clickOutside } from '$lib/tools';
	export let darkMode = true;
	const serviceList = [
		{
			title: 'Services',
			submenu: services
		},
		// { title: 'About Us', link: '/about' },
		{ title: 'Gallery', link: '/gallery' },
		// { title: 'Financing', link: '/financing' },
		{ title: 'Careers', link: '/careers' },
		{ title: 'Contact', link: '/contact' }
	];

	let w = 0;
	let navbarOpen = false;
	let showMegaMenu = false;

	function toggleNavbar() {
		navbarOpen = !navbarOpen;

		console.log('toggleNavbar', navbarOpen);
	}

	function toggleMegaMenu() {
		showMegaMenu = !showMegaMenu;
	}

	$: isMobile = w < 1030;
</script>

<svelte:window bind:innerWidth={w} />

<div class="bg-white dark:bg-dark-4 shadow-md dark:shadow-md">
	<div class="container relative">
		<div class=" flex items-center justify-between">
			<div class="xl:w-full w-80 max-w-full">
				<a href="/" class="block w-full lg:max-w-[300px] py-5 lg:py-0">
					{#if darkMode}
						<img
							src="/logos/main_logo/Classic_Bevel_White.svg"
							alt="logo"
							class=" lg:block hidden"
						/>
						<img
							src="/logos/secondary_logo/Classic_Bevel_White.svg"
							alt="logo"
							class="lg:hidden block"
						/>
					{:else}
						<img
							src="/logos/main_logo/Classic_Bevel_Navy.svg"
							alt="logo"
							class=" lg:block hidden"
						/>
						<img
							src="/logos/secondary_logo/Classic_Bevel_Navy.svg"
							alt="logo"
							class="lg:hidden block"
						/>
					{/if}
				</a>
			</div>
			<div class=" w-full items-center justify-between">
				<div class="lg:pt-5">
					<div
						class="items-center justify-end gap-8 pr-12 lg:pr-0 sm:flex lg:pr-0 whitespace-nowrap"
					>
						<div class="px-6 lg:px-0 hidden sm:block">
							<a
								href="tel:9132101028"
								class="text-navy font-semibold text-sm md:text-base lg:text-2xl tracking-wider text-right dark:text-white"
							>
								<i class="fa fa-phone mr-1 lg:mr-3"></i> (913) 210-1028
							</a>
						</div>
						<a href="/contact" class=" lg:block hidden btn-large btn-primary font-semibold">
							Schedule a Free Inspection</a
						>
					</div>
					<button
						on:click={() => {
							if (!navbarOpen) {
								toggleNavbar();
							}
						}}
						class:navbarTogglerActive={navbarOpen}
						id="navbarToggler"
						class="absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg md:px-3 py-[6px] lg:hidden mr-8"
					>
						<span
							class="relative my-[6px] block h-[2px] w-[30px] bg-navy dark:bg-white transition-all duration-500 ease-in-out opacity-100
    {navbarOpen ? 'translate-y-[10px] rotate-45' : ''}"
						></span>
						<span
							class="relative my-[6px] block h-[2px] w-[30px] bg-navy dark:bg-white transition-opacity duration-500 ease-in-out
    {navbarOpen ? 'opacity-0' : ''}"
						></span>
						<span
							class="relative my-[6px] block h-[2px] w-[30px] bg-navy dark:bg-white transition-all duration-500 ease-in-out opacity-100
    {navbarOpen ? '-translate-y-[10px] rotate-[-45deg]' : ''}"
						></span>
					</button>
					<nav
						class:hidden={!navbarOpen}
						id="navbarCollapse"
						class="absolute right-0 sm:right-4 top-full w-full mt-3 max-h-[80vh] flex-shrink-0 lg:max-h-[100vh] lg:overflow-visible overflow-y-auto max-w-[300px] rounded-lg px-6 py-5 shadow lg:px-0 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none bg-dark-2 lg:bg-transparent"
						use:clickOutside
						on:click_outside={() => {
							if (!isMobile && showMegaMenu) {
								toggleMegaMenu();
							}

							if (isMobile && navbarOpen) {
								setTimeout(() => {
									toggleNavbar();
								}, 100);
							}
						}}
					>
						<ul class="block lg:flex justify-end gap-6">
							{#each serviceList as service}
								{#if service.submenu && service.submenu?.length && !isMobile}
									<li>
										<button
											on:click={() => {
												toggleMegaMenu();
											}}
											class="uppercase tracking-wide font-semibold flex w-full items-center justify-between gap-2 py-2 text-base lg:inline-flex lg:w-auto lg:justify-center lg:text-dark text-white dark:text-white hover:text-powder dark:hover:text-powder"
										>
											{service.title}
											<span class:-scale-y-100={showMegaMenu} class="duration-200">
												<svg
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
														fill="currentColor"
													/>
												</svg>
											</span>
										</button>
										<div class="lg:absolute lg:right-0 lg:top-[160px]">
											<div
												class:hidden={!showMegaMenu}
												class:desktop={!isMobile && darkMode}
												class:whiteDesktop={!isMobile && !darkMode}
												class="w-full rounded-xl lg:dark:bg-dark-4 lg:bg-bone bg-dark-4 p-2 xl:w-[80vw] lg:p-8 lg:border-t-[12px] lg:dark:border-powder lg:border-navy dark:shadow-powder/10 shadow-md"
											>
												<!-- Inner submenu list wrapper -->
												<div
													class="grid gap-3 lg:grid-cols-3 lg:dark:bg-dark lg:bg-powder/50 lg:rounded-xl drop-shadow-2xl dark:shadow-dark shadow-lg"
												>
													{#each service.submenu as submenu}
														<button
															class="space-y-2 text-left"
															on:click={() => {
																if (!isMobile && showMegaMenu) {
																	toggleMegaMenu();
																} else {
																	if (navbarOpen) {
																		toggleNavbar();
																		toggleMegaMenu();
																	}
																}
															}}
														>
															<a
																href={submenu.link}
																class="group flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row text-white lg:dark:text-white lg:text-navy hover:text-powder dark:hover:text-powder lg:hover:text-[#3A94A8]"
															>
																<div class="">
																	<i class={submenu.icon} />
																</div>
																<div>
																	<h3
																		class="tracking-widest uppercase text-sm font-semibold duration-200"
																	>
																		{submenu.title}
																	</h3>
																	<p class="text-xs">
																		{submenu.caption}
																	</p>
																</div>
															</a>
														</button>
													{/each}
													<button
														class="border-t-2 mx-4 duration-200 lg:flex-row border-dark lg:dark:border-powder"
														on:click={() => {
															if (!isMobile && showMegaMenu) {
																toggleMegaMenu();
															} else {
																if (navbarOpen) {
																	toggleNavbar();
																	toggleMegaMenu();
																}
															}
														}}
													>
														<a href="/services">
															<h3
																class="text-left tracking-widest uppercase text-sm font-semibold duration-200 lg:dark:text-white lg:text-navy hover:text-powder dark:hover:text-powder lg:hover:text-[#3A94A8]"
															>
																View All Services <i class="fas fa-long-arrow-right"></i>
															</h3></a
														>
													</button>
												</div>
												<!-- --------------------------- -->
											</div>
										</div>
									</li>
								{:else if isMobile && service.title === 'Services'}
									<li>
										<a
											on:click={() => {
												if (navbarOpen) {
													toggleNavbar();
												}
											}}
											href="/services"
											class="tracking-wider uppercase whitespace-nowrap flex py-2 text-base font-semibold lg:inline-flex text-white lg:text-dark dark:text-white hover:text-powder dark:hover:text-powder"
										>
											{service.title}
										</a>
									</li>
								{:else}
									<li>
										<a
											on:click={() => {
												if (navbarOpen) {
													toggleNavbar();
												}
											}}
											href={service.link}
											class="tracking-wider uppercase whitespace-nowrap flex py-2 text-base font-semibold lg:inline-flex text-white lg:text-dark dark:text-white hover:text-powder dark:hover:text-powder"
										>
											{service.title}
										</a>
									</li>
								{/if}
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
