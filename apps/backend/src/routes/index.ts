import express from 'express';
import { submitContactForm, submitQuoteRequest } from '../controllers/contactController';

const router = express.Router();

router.post('/contact', submitContactForm);
router.post('/quote', submitQuoteRequest);

export default router;
