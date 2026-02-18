import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from '../models/Contact';

dotenv.config();

const seedDatabase = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/scientistshub-labs';
        console.log(`Connecting to: ${mongoUri}`);

        await mongoose.connect(mongoUri);
        console.log('✅ MongoDB Connected');

        const testContact = new Contact({
            name: 'Scientistshub Labs Admin',
            email: 'admin@scientistshub.com',
            subject: 'Database Initialization',
            message: 'This is a test document to initialize the scientistshub-labs database.',
        });

        await testContact.save();
        console.log('✅ Test document inserted into "contacts" collection');
        console.log('✅ Database "scientistshub-labs" created (if it didn\'t exist)');

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding Error:', error);
        process.exit(1);
    }
};

seedDatabase();
