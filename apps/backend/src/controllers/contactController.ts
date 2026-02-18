import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { sendEmail } from '../services/emailService';
import Contact from '../models/Contact';
import Quote from '../models/Quote';

const generateEmailTemplate = (title: string, content: string) => `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #0B1F3B; color: white; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">${title}</h2>
    </div>
    <div style="padding: 20px; line-height: 1.6;">
        ${content}
    </div>
    <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
        <p>&copy; ${new Date().getFullYear()} ScientistsHub Labs </p>
        <p><a href="https://labs.scientistshub.com" style="color: #007bff; text-decoration: none;">Visit our website</a></p>
    </div>
</div>
`;

export const submitContactForm = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;

        // Save to Database
        if (mongoose.connection.readyState === 1) {
            const contact = new Contact({ name, email, subject, message });
            await contact.save();
        } else {
            console.warn('⚠️ Database not connected. Contact submission NOT saved.');
        }

        const to = process.env.CONTACT_EMAIL_TO || 'contact@scientistshub.com';

        // Admin Email Content
        const adminHtmlContent = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 4px;">${message}</p>
        `;
        const adminHtml = generateEmailTemplate('New Contact Form Submission', adminHtmlContent);

        // User Confirmation Email Content
        const userHtmlContent = `
            <p>Hi ${name},</p>
            <p>Thank you for contacting us. We have received your message regarding "<strong>${subject}</strong>".</p>
            <p>Our team will review your inquiry and get back to you as soon as possible.</p>
            <br>
            <p>Best regards,</p>
            <p><strong>ScientistsHub Labs Team</strong></p>
        `;
        const userHtml = generateEmailTemplate('We received your message', userHtmlContent);

        // Send emails in parallel
        const adminEmailPromise = sendEmail(to, `New Contact: ${subject}`, adminHtml);
        const userEmailPromise = sendEmail(email, 'We have received your message - ScientistsHub Labs', userHtml)
            .catch(err => console.warn('Failed to send confirmation email to user:', err));

        // Wait for admin email (critical), user email is optional but we wait for it to complete to keep lambda warm if serverless
        await Promise.all([adminEmailPromise, userEmailPromise]);

        res.status(200).json({ message: 'Email sent and data saved successfully' });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ message: 'Failed to process request', error });
    }
};

export const submitQuoteRequest = async (req: Request, res: Response) => {
    try {
        const { name, email, phone, company, service, budget, timeline, description } = req.body;

        // Save to Database
        if (mongoose.connection.readyState === 1) {
            const quote = new Quote({
                name, email, phone, company, service, budget, timeline, description,
            });
            await quote.save();
        } else {
            console.warn('⚠️ Database not connected. Quote request NOT saved.');
        }

        const to = process.env.CONTACT_EMAIL_TO || 'contact@scientistshub.com';

        // Admin Email Content
        const adminHtmlContent = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Description:</strong></p>
            <p style="background-color: #f5f5f5; padding: 10px; border-radius: 4px;">${description}</p>
        `;
        const adminHtml = generateEmailTemplate('New Quote Request', adminHtmlContent);

        // User Confirmation Email Content
        const userHtmlContent = `
            <p>Hi ${name},</p>
            <p>Thank you for requesting a quote for <strong>${service}</strong>.</p>
            <p>We have received your details. Our team will review your requirements and get back to you shortly with a proposal.</p>
            <br>
            <p>Best regards,</p>
            <p><strong>ScientistsHub Labs Team</strong></p>
        `;
        const userHtml = generateEmailTemplate('Quote Request Received - ScientistsHub Labs', userHtmlContent);

        // Send emails in parallel
        const adminEmailPromise = sendEmail(to, `New Quote Request from ${name}`, adminHtml);
        const userEmailPromise = sendEmail(email, 'Quote Request Received - ScientistsHub Labs', userHtml)
            .catch(err => console.warn('Failed to send confirmation email to user:', err));

        await Promise.all([adminEmailPromise, userEmailPromise]);

        res.status(200).json({ message: 'Quote request sent and data saved successfully' });
    } catch (error) {
        console.error('Quote request error:', error);
        res.status(500).json({ message: 'Failed to process request', error });
    }
};
