// EmailJS service for sending emails
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '';
const EMAILJS_QUOTE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID || '';

// Initialize EmailJS
if (typeof window !== 'undefined' && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface QuoteFormData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    service: string;
    budget: string;
    timeline: string;
    description: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_CONTACT_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_CONTACT_TEMPLATE_ID,
            {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
                to_name: 'ScientistsHub Labs',
            }
        );

        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw new Error('Failed to send email. Please try again later.');
    }
};

export const sendQuoteEmail = async (data: QuoteFormData): Promise<void> => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_QUOTE_TEMPLATE_ID) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_QUOTE_TEMPLATE_ID,
            {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                company: data.company || 'Not provided',
                service: data.service,
                budget: data.budget,
                timeline: data.timeline,
                description: data.description,
                to_name: 'ScientistsHub Labs',
            }
        );

        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw new Error('Failed to send quote request. Please try again later.');
    }
};
