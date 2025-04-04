// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'https://coruscating-entremet-c434b8.netlify.app', // oder '*' für alles
  credentials: true, // falls du mit Cookies/Session arbeiten willst
}));

// MongoDB Verbindung
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Benutzer-Routen einbinden
app.use('/api', userRoutes);

// Starten der Anwendung
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
