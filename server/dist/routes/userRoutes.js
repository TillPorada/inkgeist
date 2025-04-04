"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/users', userController_1.createUser); // Benutzer erstellen
router.get('/users', userController_1.getUsers); // Alle Benutzer abrufen
router.get('/users/:id', userController_1.getUser); // Benutzer abrufen
router.put('/users/:id', userController_1.updateUser); // Benutzer aktualisieren
router.delete('/users/:id', userController_1.deleteUser); // Benutzer löschen
exports.default = router;
