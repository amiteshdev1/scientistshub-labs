import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
    service: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    timeline: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
