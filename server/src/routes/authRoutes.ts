import express from 'express';
import { login } from '../controllers/authController';

const router = express.Router();

// Hier wird die `login`-Methode als Middleware für die POST-Route verwendet
router.post('/login', login);

export default router;
