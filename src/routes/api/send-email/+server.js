import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const subject = formData.get('subject');
		const text = formData.get('text');
		const replyTo = formData.get('replyTo');
		const resume = formData.get('resume');

		// Initialize attachments array
		const attachments = [];

		// Handle resume (required)
		if (resume && typeof resume.arrayBuffer === 'function') {
			const buffer = await resume.arrayBuffer();
			attachments.push({
				filename: resume.name,
				content: Buffer.from(buffer),
				contentType: resume.type
			});
		}

		// Create transporter
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: env.GMAIL_USER,
				pass: env.GMAIL_PASS
			}
		});

		const mailOptions = {
			from: 'info@revivalroofingkc.com',
			to: 'info@revivalroofingkc.com',
			subject,
			text,
			replyTo: replyTo || 'info@revivalroofingkc.com',
			attachments
		};

		await transporter.sendMail(mailOptions);

		return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
