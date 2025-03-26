<script lang="ts">
	import ApplicationForm from '$lib/components/ApplicationForm/ApplicationForm.svelte';

	const offers = [
		{
			title: 'Uncapped Earning Potential',
			description:
				'This is a 1099 commission-based position with average earnings of $150,000+ per year — your success directly drives your income.'
		},
		{
			title: 'Flexible Schedule',
			description:
				'Enjoy the freedom to set your own hours and design your day around your goals. We care about results, not time clocks.'
		},
		{
			title: 'Hands-On Training',
			description:
				'Our in-depth onboarding and training program sets new Project Managers up for real, long-term success.'
		},
		{
			title: 'Leadership Opportunities',
			description: `We promote from within — show initiative and results, and you’ll find fast-track paths to leadership and management.`
		},
		{
			title: 'Training Bonuses',
			description:
				'Earn while you learn. We offer bonus-based training pay to support your ramp-up period.'
		},
		{
			title: 'Performance Bonuses & Competitions',
			description:
				' Regular incentives and company-wide competitions give you even more ways to increase your earnings.'
		},
		{
			title: 'Project Management Experience',
			description:
				'Get hands-on experience managing roofing and construction projects with real impact.'
		},
		{
			title: 'Company Support & Resources',
			description:
				'We provide marketing support, training, and some company-generated leads — but we also value go-getters who excel at door-to-door and self-generated opportunities.'
		},
		{
			title: 'Team-First Culture',
			description:
				'Join a positive, supportive team that celebrates wins together and pushes each other to grow.'
		}
	];

	const details = [
		{
			title: 'Self-Starter',
			description: 'You’re driven, focused, and don’t wait for someone to tell you what to do.'
		},
		{
			title: 'Goal-Oriented',
			description: 'You thrive on hitting goals — and then raising the bar.'
		},
		{
			title: 'Confident',
			description: 'You believe in yourself and what you bring to the table.'
		},
		{
			title: 'Honest & Reliable',
			description: 'Integrity isn’t optional — it’s who you are, on and off the job.'
		},
		{
			title: 'Competent & Capable',
			description: 'You’re ready to learn, lead, and crush it in this role.'
		},
		{
			title: 'People-First Attitude',
			description: 'You genuinely want to help others and make a difference.'
		},
		{
			title: 'Problem Solver',
			description: 'You bring fresh ideas and smart solutions to the table.'
		},
		{
			title: 'Consistent & Dependable',
			description: 'We count on you to show up and follow through.'
		},
		{
			title: 'Valid Driver’s License',
			description: 'You’ll be on the move — reliable transportation is a must.'
		},
		{
			title: 'Physically Ready',
			description:
				'Comfortable working outdoors, climbing ladders, walking roofs, and lifting up to 50 lbs.'
		}
	];

	const requirements = [
		'A self-starting attitude',
		'A go-getter mentality',
		'Reliable transportation',
		'A working cell phone',
		'Enjoy working outdoors',
		'Able to climb a ladder and lift 50 lbs',
		'Comfortable walking on roofs and not afraid of heights',
		'Strong communication skills and a goal-driven mindset',
		'Able to manage and prioritize multiple tasks at once'
	];
</script>

<section class="">
	<div
		class="relative gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-8"
	>
		<div class="text-left font-light text-dark-5 sm:text-lg dark:text-white">
			<h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
				Field Representative
			</h2>
			<div
				class="md:inline-flex gap-3 mb-8 font-medium dark:text-powder text-dark-4 text-sm md:text-base"
			>
				<p class="">
					<i class="fa-solid fa-location-dot"></i> Kansas City Metro
				</p>

				<p>• Sales</p>
				<p>• Entry-level</p>
				<p>• Full-time</p>
			</div>

			<h4 class="text-lg md:text-xl mb-2 font-semibold">Description</h4>
			<p class="mb-6 font-normal text-sm md:text-base">
				If this role is meant for you, you’ll know it right away. Bring your energy, ambition, and
				leadership to Revival Roofing and Construction and become part of a company that’s growing
				fast and building something great. Group interviews are held weekly — apply now and let’s
				rise together!
			</p>
			<p class="font-normal mb-12 text-sm md:text-base">
				<span class="font-semibold">Our Mission:</span>
				To set the new standard in roofing by combining integrity, innovation, and unmatched service
				— and that starts with building a strong team of leaders and doers.
			</p>

			<div class="grid gap-8 font-normal text-sm md:text-base">
				<p><span class="font-bold">Job Type:</span> Full-time</p>
				<p><span class="font-bold">Pay:</span> $150,000+ per year average</p>

				<div>
					<span class="font-bold">Benefits:</span>
					<ul class="list-disc list-inside ml-8 grid gap-2">
						<li class="text-sm md:text-base">Flexible schedule</li>
					</ul>
				</div>

				<div>
					<span class="font-bold">Supplemental Pay:</span>
					<ul class="list-disc list-inside ml-8 grid gap-2">
						<li class="text-sm md:text-base">Frequent bonus opportunities</li>
					</ul>
				</div>

				<div>
					<span class="font-bold">What we offer:</span>
					<ul class="list-disc list-inside ml-8 mt-2 grid gap-4">
						{#each offers as offer}
							<li class="text-sm md:text-base">
								<span class="font-bold">{offer.title}: </span>{offer.description}
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<span class="font-bold">What we're looking for:</span>
					<ul class="list-disc list-inside ml-8 mt-2 grid gap-4">
						{#each details as detail}
							<li class="text-sm md:text-base">
								<span class="font-bold">{detail.title}: </span>{detail.description}
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h4 class="text-lg md:text-xl mb-2 font-semibold">Requirements</h4>
					<ul class="list-disc list-inside ml-8 mt-2 grid gap-4">
						{#each requirements as requirement}
							<li class="text-sm md:text-base">
								{requirement}
							</li>
						{/each}
					</ul>
				</div>

				<div class="mb-5 md:mb-0">
					<h4 class="text-md md:text-lg mb-2 font-semibold">Disclaimer:</h4>
					<p class="text-xs">
						Revival Roofing & Construction participates in the E-Verify Program for I-9 employment
						verification. We are proud to be an equal opportunity employer and are committed to
						creating a diverse and inclusive workplace. Revival Roofing does not discriminate based
						on race, color, religion, sex, national origin, age, disability, sexual orientation,
						gender identity, or genetic information. All employment decisions are based on
						qualifications, merit, and business needs.
					</p>
				</div>
			</div>
		</div>

		<!-- left side -->
		<div class="grid gap-4 !sticky top-[240px] h-fit">
			<ApplicationForm jobType={'Field Representative'} />
		</div>
	</div>
</section>
