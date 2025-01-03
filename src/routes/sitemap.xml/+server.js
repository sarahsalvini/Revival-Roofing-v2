export const GET = async () => {
	const baseUrl = 'https://revivalroofingkc.com';

	// List of static pages
	const pages = ['', 'about', 'services', 'contact', 'gallery'];
	const services = [
		{
			site: 'services/roof-replacements',
			image: '/gallery/4.png',
			alt: 'Roof Replacement Services - Expert Roof Replacements'
		},
		{
			site: 'services/roof-repairs',
			image: '/roofing_photos/roof_repair.jpg',
			alt: 'Roof Repairs - Shingle Roof Repair'
		},
		{
			site: 'services/roof-inspections',
			image: '/roofing_photos/storm_damage.png',
			alt: 'Roof Inspections - Storm Damage and Insurance Support'
		},
		{
			site: 'services/gutter-services',
			image: '/roofing_photos/gutter.jpg',
			alt: 'Gutter Services - Gutter Guard Installation'
		},
		{
			site: 'services/painting',
			image: '/roofing_photos/IMG_2195.PNG',
			alt: 'Painting Services - Interior and Exterior Painting'
		},
		{
			site: 'services/custom-projects',
			image: '/roofing_photos/window_install.jpg',
			alt: 'Custom Projects - Window Installation'
		}
	];

	// Generate the XML sitemap
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages
		.map(
			(page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page === '' ? 'daily' : 'monthly'}</changefreq>
        <priority>${page === '' ? 1.0 : 0.8}</priority>
      </url>`
		)
		.join('')}
  ${services
		.map(
			(service) => `
      <url>
        <loc>${baseUrl}/${service.site}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
        <image:image>
          <image:loc>${baseUrl}${service.image}</image:loc>
          <image:title>${service.alt}</image:title>
        </image:image>
      </url>`
		)
		.join('')}
</urlset>`;

	// Return the response without extra whitespace
	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
