import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.post('/users', createUser); // Benutzer erstellen
router.get('/users/:id', getUser); // Benutzer abrufen
router.put('/users/:id', updateUser); // Benutzer aktualisieren
router.delete('/users/:id', deleteUser); // Benutzer löschen

export default router;
