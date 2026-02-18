import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { sendEmail } from '../services/emailService';
import Contact from '../models/Contact';
import Quote from '../models/Quote';

export const submitContactForm = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;

        // Save to Database
        if (mongoose.connection.readyState === 1) {
            const contact = new Contact({
                name,
                email,
                subject,
                message,
            });
            await contact.save();
        } else {
            console.warn('⚠️ Database not connected. Contact submission NOT saved.');
        }

        const to = process.env.CONTACT_EMAIL_TO || 'contact@scientistshub.com';

        const html = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

        await sendEmail(to, `New Contact: ${subject}`, html);
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
                name,
                email,
                phone,
                company,
                service,
                budget,
                timeline,
                description,
            });
            await quote.save();
        } else {
            console.warn('⚠️ Database not connected. Quote request NOT saved.');
        }

        const to = process.env.CONTACT_EMAIL_TO || 'contact@scientistshub.com';

        const html = `
      <h3>New Quote Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Description:</strong></p>
      <p>${description}</p>
    `;

        await sendEmail(to, `New Quote Request from ${name}`, html);
        res.status(200).json({ message: 'Quote request sent and data saved successfully' });
    } catch (error) {
        console.error('Quote request error:', error);
        res.status(500).json({ message: 'Failed to process request', error });
    }
};
