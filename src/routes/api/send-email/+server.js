import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const data = await request.json(); // Get form data from request body

		const { name, email, phone, zipcode, contactMethod, message } = data;

		// Configure Nodemailer with Gmail SMTP
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: env.GMAIL_USER, // Your Gmail address
				pass: env.GMAIL_PASS // Your Gmail App Password
			}
		});

		// Email content
		const mailOptions = {
			from: env.GMAIL_USER,
			to: 'info@revivalroofingkc.com', // Recipient email
			subject: 'New Contact Form Submission',
			text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Zipcode: ${zipcode}
                Preferred Contact Method: ${contactMethod}
                Message: ${message}
            `
		};

		// Send email
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