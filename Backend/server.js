import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/Auth.js';
import { MONGO_URI } from './config.js';  

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use('/auth', authRoutes); 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); 
  }
};

connectDB();

app.listen(5000, () => console.log('Server running on port 5000'));
