"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const foundUser = yield User_1.default.findOne({ email });
        if (!foundUser) {
            res.status(401).json({ message: 'Invalid credentials' });
            return; // Rückgabe beendet die Funktion
        }
        const user = foundUser;
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const JWT_SECRET = process.env.JWT_SECRET || 'super-secret';
        const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
        const signOptions = {
            expiresIn: JWT_EXPIRES_IN,
        };
        const token = jsonwebtoken_1.default.sign({ id: user._id.toString() }, JWT_SECRET, signOptions);
        res.status(200).json({
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email
            }
        });
    }
    catch (err) {
        next(err); // Fehler weiterleiten
    }
});
exports.login = login;
