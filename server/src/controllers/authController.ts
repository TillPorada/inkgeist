import { Request, Response, NextFunction, RequestHandler } from 'express';
import User, { IUser } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';

export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email }) as IUser;
    if (!foundUser) {
      res.status(401).json({ message: 'Invalid credentials' });
      return; // Rückgabe beendet die Funktion
    }

    const user = foundUser;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const JWT_SECRET: Secret = process.env.JWT_SECRET || 'super-secret';
    const JWT_EXPIRES_IN: string | number = process.env.JWT_EXPIRES_IN || '1d';

    const signOptions: SignOptions = {
      expiresIn: JWT_EXPIRES_IN as any,
    };

    const token = jwt.sign(
      { id: user._id.toString() },
      JWT_SECRET,
      signOptions
    );

    res.status(200).json({
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    next(err); // Fehler weiterleiten
  }
};
