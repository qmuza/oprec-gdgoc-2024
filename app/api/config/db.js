import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`Connected!`);
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    }
};