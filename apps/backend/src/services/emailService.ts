import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
    // Check if SMTP credentials are provided and not placeholders
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const isPlaceholder = smtpUser?.includes('your-email') || smtpPass?.includes('your-app-password');

    if (!process.env.SMTP_HOST || !smtpUser || !smtpPass || isPlaceholder) {
        console.warn('⚠️ SMTP credentials missing or invalid (placeholders detected).');
        console.warn('   - Email sending skipped (Dev Mode).');
        console.log('--- Mock Email ---');
        console.log(`To: ${to}`);
        console.log(`Subject: ${subject}`);
        console.log('------------------');
        return { messageId: 'mock-email-id' };
    }

    try {
        const info = await transporter.sendMail({
            from: `"ScientistsHub Labs" <${process.env.SMTP_USER}>`,
            to,
            subject,
            html,
        });
        console.log('Message sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
