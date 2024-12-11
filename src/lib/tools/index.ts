// place files you want to import through the `$lib` alias in this folder.
export const formInputs = [
	{ title: 'Full Name', key: 'name', type: 'input', required: true, hasError: false },
	{ title: 'Email', key: 'email', type: 'input', required: true, hasError: false },
	{ title: 'Phone', key: 'phone', type: 'input', required: true, hasError: false },
	{ title: 'Zipcode', key: 'zipcode', type: 'input', required: true, hasError: false },
	{
		title: 'Prefered Contact Method',
		key: 'contactMethod',
		type: 'radio',
		options: ['Text', 'Call', 'Email'],
		required: false,
		hasError: false
	},
	{ title: 'Message', key: 'message', type: 'textarea', required: false, hasError: false }
];

export let services = [
	{
		title: 'Roof Replacement',
		link: '/services/roof-replacement',
		icon: 'fas fa-hammer',
		description: `We provide professional roof replacement services tailored to your home or business needs. Whether it's due to aging, storm damage, or structural issues, our team ensures a seamless process, from assessment to installation, using high-quality materials for long-lasting results.`,
		caption: `Professional roof replacement services using high-quality materials to ensure durability and protection for your home or business.`
	},
	{
		title: 'Roof Repair',
		link: '/services/roof-repairs',
		icon: 'fas fa-tools',
		description: `Keep your roof in top condition with our expert roof repair services. We quickly identify and fix leaks, cracks, and other issues to protect your property and extend the life of your roof. Trust us to revive your roof’s functionality and appearance.`,
		caption: `Quick and reliable roof repair services to address storm damage, fix leaks, cracks, and other issues, restoring your roof’s functionality and extending its lifespan.`
	},
	{
		title: 'Roof Inspections',
		link: '/services/roof-inspections',
		icon: 'fas fa-search',
		description: `Ensure the safety and integrity of your roof with our thorough inspection services. We evaluate for damage, wear, and potential problems, providing detailed reports and recommendations to help you make informed decisions about your property.`,
		caption: `Thorough roof inspections to assess storm damage, identify potential problems, and provide detailed recommendations to protect your home.`
	},
	{
		title: 'Gutter Services',
		link: '/services/gutter-services',
		icon: 'fas fa-home',
		description: `Our gutter services include installation, cleaning, and repairs to keep water flowing properly away from your home. Protect your foundation and landscaping from water damage with our reliable and efficient gutter solutions.`,
		caption: `Reliable gutter installation, cleaning, and repair services to protect your property from water damage and ensure proper drainage.`
	},
	{
		title: 'Exterior Painting',
		link: '/services/exterior-painting',
		icon: 'fas fa-paint-roller',
		description: `Transform your property’s curb appeal with our professional exterior painting services. We use premium paints and expert techniques to refresh and protect your home or business, ensuring a flawless and durable finish.`,
		caption: `High-quality exterior painting services to refresh your property’s appearance and protect it from the elements.`
	},
	{
		title: 'Custom Projects',
		link: '/services/other-construction-services',
		icon: 'fas fa-hard-hat',
		description: `From unique designs to special construction needs, our custom project services bring your vision to life. We work closely with you to create personalized solutions that meet your exact specifications and deliver exceptional results.`,
		caption: `Personalized custom project solutions to meet your unique design and construction needs with exceptional results.`
	}
];
