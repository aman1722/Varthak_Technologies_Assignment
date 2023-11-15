import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.mongourl || "");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};