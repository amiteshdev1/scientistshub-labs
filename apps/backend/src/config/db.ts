import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/scientistshub-labs';

        if (!process.env.MONGO_URI) {
            console.log('⚠️ MONGO_URI not found in .env. Using default local instance.');
            console.log(`   - URI: ${mongoUri}`);
        } else {
            console.log('✅ Using MONGO_URI from .env');
        }

        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        console.error('Database connection failed. Server will continue without DB.');
        // process.exit(1); // Don't crash the server
    }
};

export default connectDB;
