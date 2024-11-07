<script>
	import ColorModeToggle from '../ColorModeToggle/ColorModeToggle.svelte';
	export let darkMode = true;
	const serviceList = [
		{
			title: 'Services',
			submenu: [
				{ title: 'Roof Replacement', link: '/services/roof-replacement', icon: 'fas fa-hammer' },
				{ title: 'Roof Repair', link: '/services/roof-repairs', icon: 'fas fa-tools' },
				{ title: 'Roof Inspections', link: '/services/roof-inspections', icon: 'fas fa-search' },
				{ title: 'Gutter Services', link: '/services/gutter-services', icon: 'fas fa-home' },
				{
					title: 'Exterior Painting',
					link: '/services/exterior-painting',
					icon: 'fas fa-paint-roller'
				},
				{
					title: 'Other Construction Services',
					link: '/services/other-construction-services',
					icon: 'fas fa-hard-hat'
				}
			]
		},
		{ title: 'About Us', link: '/about' },
		{ title: 'Gallery', link: '/gallery' },
		{ title: 'Financing', link: '/financing' },
		{ title: 'Careers', link: '/careers' },
		{ title: 'Contact', link: '/contact' }
	];

	let w = 0;
	let navbarOpen = false;
	let showMegaMenu = false;

	function toggleNavbar() {
		navbarOpen = !navbarOpen;
	}

	function toggleMegaMenu() {
		showMegaMenu = !showMegaMenu;
	}

	$: isMobile = w < 1030;
</script>

<svelte:window bind:innerWidth={w} />
<!-- ====== Mega Menu Start -->

<div
	class="bg-white dark:bg-dark {showMegaMenu
		? 'lg:border-b-8 lg:border-bone dark:lg:border-dark-4'
		: ''}"
>
	<div class="container mx-auto">
		<div class="relative -mx-4 flex items-center justify-between">
			<div class="w-80 max-w-full">
				<a href="javascript:void(0)" class="block w-full py-5 px-3 lg:px-0">
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
			<div class=" w-full items-center justify-between px-4">
				<!-- <ColorModeToggle /> -->
				<div class="lg:pt-5">
					<div
						class="items-center justify-end gap-8 pr-12 lg:pr-0 sm:flex lg:pr-0 whitespace-nowrap"
					>
						<div>
							<h4
								class="text-navy font-semibold text-sm md:text-base lg:text-2xl tracking-wider text-right dark:text-white"
							>
								<i class="fa fa-phone mr-1 lg:mr-3"></i> (913) 702-6965
							</h4>
						</div>
						<a href="/contact" class=" lg:block hidden btn-large btn-primary font-semibold">
							Schedule a Free Inspection</a
						>
					</div>
					<button
						on:click={toggleNavbar}
						class:navbarTogglerActive={navbarOpen}
						id="navbarToggler"
						class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
					>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-navy dark:bg-white"></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-navy dark:bg-white"></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-navy dark:bg-white"></span>
					</button>
					<nav
						class:hidden={!navbarOpen}
						id="navbarCollapse"
						class="absolute right-4 top-full w-full max-w-[300px] rounded-lg px-6 py-5 shadow lg:px-0 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none bg-bone lg:bg-transparent"
					>
						<ul class="block lg:flex justify-end">
							{#each serviceList as service}
								{#if service.submenu && service.submenu?.length}
									<li class="relative">
										<button
											on:click={toggleMegaMenu}
											class="uppercase tracking-wide font-semibold flex w-full items-center justify-between gap-2 py-2 text-base lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center tw-text-dark dark:text-white dark:hover:text-powder hover:text-dark-6"
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

										<div
											class:hidden={!showMegaMenu}
											class:desktop={!isMobile && darkMode}
											class="w-full rounded-xl lg:rounded-t-none bg-bone dark:bg-dark-4 p-2 lg:absolute lg:left-0 lg:top-[150%] lg:w-[850px] lg:p-8 shadow-2xl"
										>
											<!-- Inner submenu list wrapper -->
											<div
												class="grid gap-5 lg:grid-cols-2 lg:bg-mercury dark:lg:bg-dark lg:rounded-xl drop-shadow-2xl"
											>
												{#each service.submenu as submenu}
													<div class="space-y-2 text-left">
														<a
															href={submenu.link}
															class="group flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row text-dark dark:text-white dark:hover:text-powder hover:text-dark-6"
														>
															<div class="">
																<i class={submenu.icon} />
															</div>
															<div>
																<h3
																	class="tracking-widest uppercase mb-1 text-sm font-semibold duration-200"
																>
																	{submenu.title}
																</h3>
																<p class="text-xs">
																	Lorem Ipsum is simply dummy text of the printing and typesetting
																	industry.
																</p>
															</div>
														</a>
													</div>
												{/each}
											</div>
										</div>
									</li>
								{:else}
									<li>
										<a
											href={service.link}
											class="tracking-wider uppercase whitespace-nowrap flex py-2 text-base font-semibold lg:ml-12 lg:inline-flex text-dark dark:text-white dark:hover:text-powder hover:text-dark-6"
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

<style>
	/* Custom styles if needed */
</style>
