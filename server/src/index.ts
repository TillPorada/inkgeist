// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Verbindung
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Benutzer-Routen einbinden
app.use('/api', userRoutes);

// Starten der Anwendung
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
