<script>
	const serviceList = [
		{
			title: 'Services',
			submenu: [
				{ title: 'Roof Replacement', link: '/services/roof-replacement' },
				{ title: 'Roof Repair', link: '/services/roof-repairs' },
				{ title: 'Roof Inspections', link: '/services/roof-inspections' },
				{ title: 'Gutter Services', link: '/services/gutter-services' },
				{ title: 'Exterior Painting', link: '/services/exterior-painting' },
				{ title: 'Other Construction Services', link: '/services/other-construction-services' }
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

<div class="bg-dark {showMegaMenu ? 'lg:border-b-8 lg:border-dark-4' : ''}">
	<div class="container mx-auto">
		<div class="relative -mx-4 flex items-center justify-between">
			<div class="w-80 max-w-full">
				<a href="javascript:void(0)" class="block w-full py-5 px-3 lg:px-0">
					<img
						src="/logos/secondary_logo/Classic_Bevel_White.svg"
						alt="logo"
						class="lg:hidden block"
					/>
					<img src="/logos/main_logo/Classic_Bevel_White.svg" alt="logo" class=" lg:block hidden" />
				</a>
			</div>
			<div class=" w-full items-center justify-between px-4">
				<div class="lg:pt-5">
					<div
						class="hidden items-center justify-end gap-8 pr-16 sm:flex lg:pr-0 whitespace-nowrap"
					>
						<div>
							<h4 class="text-white font-semibold text-2xl tracking-wider">
								<i class="fa fa-phone mr-3"></i> (913) 702-6965
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
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
						<span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
					</button>
					<nav
						class:hidden={!navbarOpen}
						id="navbarCollapse"
						class="absolute right-4 top-full w-full max-w-[300px] rounded-lg px-6 py-5 shadow lg:px-0 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none bg-dark-4 lg:bg-transparent"
					>
						<ul class="block lg:flex justify-end">
							{#each serviceList as service}
								{#if service.submenu && service.submenu?.length}
									<li class="relative">
										<button
											on:click={toggleMegaMenu}
											class="uppercase tracking-wide font-semibold flex w-full items-center justify-between gap-2 py-2 text-base lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center text-white hover:text-powder"
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
											class:desktop={!isMobile}
											class="w-full rounded-xl lg:rounded-t-none bg-dark-6 p-2 lg:absolute lg:left-0 lg:top-[150%] lg:w-[850px] lg:p-8 shadow-xl"
										>
											<div
												class="grid gap-5 lg:grid-cols-2 lg:bg-dark lg:rounded-xl drop-shadow-2xl"
											>
												{#each service.submenu as submenu}
													<div class="space-y-2">
														<a
															href={submenu.link}
															class="group flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
														>
															<div class="text-primary">
																<svg
																	width="24"
																	height="24"
																	viewBox="0 0 24 24"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<g clip-path="url(#clip0_2436_4206)">
																		<path
																			d="M12 23.325C9.11255 23.325 6.18755 22.2375 3.97505 20.025C1.83755 17.8875 0.675049 15.0375 0.675049 12C0.675049 8.9625 1.83755 6.1125 4.01255 3.975C6.11255 1.8375 8.96255 0.675003 12 0.675003C15.0375 0.675003 17.8876 1.8375 20.025 4.0125C24.4501 8.4375 24.4501 15.6375 20.025 20.0625C17.8125 22.2375 14.8875 23.325 12 23.325ZM7.95005 20.775C10.5 21.9375 13.4625 21.9375 16.05 20.775L12 16.725L7.95005 20.775ZM4.08755 17.55C4.38755 18 4.76255 18.4125 5.17505 18.825C5.58755 19.2375 6.00005 19.575 6.45005 19.9125L10.5375 15.825C10.0125 15.6375 9.52505 15.3 9.11255 14.8875C8.70005 14.475 8.40005 13.9875 8.17505 13.4625L4.08755 17.55ZM13.4625 15.825L17.55 19.9125C18 19.6125 18.4125 19.2375 18.8251 18.825C19.2375 18.4125 19.575 18 19.9125 17.55L15.825 13.4625C15.6375 13.9875 15.3 14.475 14.8875 14.8875C14.475 15.3 13.9875 15.6 13.4625 15.825ZM3.22505 7.95C2.66255 9.1875 2.32505 10.575 2.32505 12C2.32505 13.425 2.62505 14.775 3.22505 16.05L7.27505 12L3.22505 7.95ZM16.725 12L20.775 16.05C21.9375 13.5 21.9375 10.5375 20.775 7.95L16.725 12ZM12 9.6C11.3625 9.6 10.7625 9.8625 10.3125 10.3125C9.86255 10.7625 9.60005 11.3625 9.60005 12C9.60005 12.6375 9.86255 13.2375 10.3125 13.6875C10.7625 14.1375 11.3625 14.4 12 14.4C12.6375 14.4 13.2375 14.1375 13.6875 13.6875C14.1375 13.2375 14.4 12.6375 14.4 12C14.4 11.3625 14.1375 10.7625 13.6875 10.3125C13.2375 9.8625 12.6375 9.6 12 9.6ZM4.08755 6.45L8.17505 10.5375C8.36255 10.0125 8.70005 9.525 9.11255 9.1125C9.52505 8.7 10.0125 8.4 10.5375 8.175L6.45005 4.0875C6.00005 4.3875 5.58755 4.7625 5.17505 5.175C4.76255 5.5875 4.42505 6 4.08755 6.45ZM14.8875 9.1125C15.3 9.525 15.6 10.0125 15.825 10.5375L19.9125 6.45C19.6125 6 19.2375 5.5875 18.8251 5.175C18.4125 4.7625 18 4.425 17.55 4.0875L13.4625 8.175C13.9875 8.4 14.475 8.7 14.8875 9.1125ZM7.95005 3.225L12 7.275L16.05 3.225C14.8125 2.6625 13.425 2.325 12 2.325C10.575 2.325 9.22505 2.6625 7.95005 3.225Z"
																			fill="currentColor"
																		/>
																	</g>
																	<defs>
																		<clipPath id="clip0_2436_4206">
																			<rect width="24" height="24" fill="white" />
																		</clipPath>
																	</defs>
																</svg>
															</div>
															<div>
																<h3
																	class="tracking-widest uppercase mb-1 text-sm font-semibold duration-200 text-white group-hover:text-primary"
																>
																	{submenu.title}
																</h3>
																<p class="text-xs text-white group-hover:text-primary">
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
											class="tracking-wider uppercase whitespace-nowrap flex py-2 text-base font-semibold lg:ml-12 lg:inline-flex text-white hover:text-powder"
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
