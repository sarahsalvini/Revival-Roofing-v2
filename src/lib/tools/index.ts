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
		link: '/services/roof-replacements',
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
		title: 'Painting Services',
		link: '/services/exterior-painting',
		icon: 'fas fa-paint-roller',
		description: `Transform your property’s curb appeal with our professional painting services. We use premium paints and expert techniques to refresh and protect your home or business, ensuring a flawless and durable finish.`,
		caption: `High-quality painting services to refresh your property’s appearance and protect it from the elements.`
	},
	{
		title: 'Custom Projects',
		link: '/services/custom-projects',
		icon: 'fas fa-hard-hat',
		description: `From unique designs to special construction needs, our custom project services bring your vision to life. We work closely with you to create personalized solutions that meet your exact specifications and deliver exceptional results.`,
		caption: `Personalized custom project solutions to meet your unique design and construction needs with exceptional results.`
	}
];

export let galleryTabs = [
	{ title: 'All', key: 'all', active: true },
	{ title: 'Roofing', key: 'installation', active: false },
	{ title: 'Gutters', key: 'gutter', active: false },
	{ title: 'Exterior', key: 'exterior', active: false }
	// { title: 'Interior', key: 'interior', active: false }
	// {title: 'Community Outreach', key: 'community', active: false}
];

export async function handleEmailSubmit(event, data) {
	event.preventDefault();

	try {
		const response = await fetch('/api/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (response.ok) {
			alert('Email sent successfully!');
		} else {
			const error = await response.json();
			alert('Failed to send email: ' + error.error);
		}
	} catch (error) {
		console.error('Error:', error);
		alert('An error occurred. Please try again.');
	}
}

export const galleryImages = [
	{
		src: '/roofing_photos/IMG_2201.PNG',
		alt: 'roof installation',
		tab: 'installation'
	},
	{
		src: '/roofing_photos/IMG_2195.PNG',
		alt: 'exterior painting',
		tab: 'exterior'
	},
	{
		src: '/gallery/1.png',
		alt: 'gutter',
		tab: 'gutter'
	},
	{
		src: '/gallery/2.png',
		alt: 'roof completed',
		tab: 'installation'
	},
	{
		src: '/gallery/3.png',
		alt: 'roof completed',
		tab: 'installation'
	},
	{
		src: '/gallery/4.png',
		alt: 'roof completed',
		tab: 'installation'
	},
	{
		src: '/gallery/5.png',
		alt: 'roof after installation',
		tab: 'installation'
	},
	{
		src: '/gallery/6.png',
		alt: 'roof after installation',
		tab: 'installation'
	},
	{
		src: '/gallery/7.png',
		alt: 'exterior paint',
		tab: 'exterior'
	},
	{
		src: '/gallery/8.png',
		alt: 'roof installation',
		tab: 'exterior'
	},
	{
		src: '/gallery/9.png',
		alt: 'roof installation',
		tab: 'installation'
	},
	{
		src: '/roofing_photos/1.png',
		alt: 'roof transformation',
		tab: 'installation'
	},
	{
		src: '/roofing_photos/2.png',
		alt: 'roof transformation',
		tab: 'installation'
	},
	{
		src: '/roofing_photos/3.png',
		alt: 'window installation',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2005.jpg',
		alt: 'Window installation',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2006.jpg',
		alt: 'Window installation',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2023.jpg',
		alt: 'Window installation',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2103.jpg',
		alt: 'roof installation',
		tab: 'installation'
	},
	{
		src: '/roofing_photos/IMG_2161.PNG',
		alt: 'exterior sunroom add on',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2164.PNG',
		alt: 'exterior sunroom add on',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2166.PNG',
		alt: 'exterior sunroom add on',
		tab: 'exterior'
	},
	{
		src: '/roofing_photos/IMG_2185.PNG',
		alt: 'roof transformation',
		tab: 'installation'
	},
	{
		src: '/roofing_photos/IMG_2186.PNG',
		alt: 'exterior deck stain refresh',
		tab: 'exterior'
	}
];
