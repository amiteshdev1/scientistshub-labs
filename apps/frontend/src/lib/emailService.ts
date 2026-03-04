// Email service using backend API
import BASE_URL from './urlUtils';

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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
    try {
        console.log('Sending contact email to:', `${API_BASE_URL}/contact`);
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to send email');
        }
    } catch (error) {
        console.error('Email Error:', error);
        throw new Error('Failed to send email. Please try again later.');
    }
};

export const sendQuoteEmail = async (data: QuoteFormData): Promise<void> => {
    try {
        const response = await fetch(`${API_BASE_URL}/quote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to send quote request');
        }
    } catch (error) {
        console.error('Email Error:', error);
        throw new Error('Failed to send quote request. Please try again later.');
    }
};

