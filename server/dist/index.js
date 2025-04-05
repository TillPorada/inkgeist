"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*', // oder '*' für alles
    //credentials: true, // falls du mit Cookies/Session arbeiten willst
}));
// MongoDB Verbindung
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
// Benutzer-Routen einbinden
app.use('/api', userRoutes_1.default);
app.use('/api', authRoutes_1.default);
// Starten der Anwendung
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
