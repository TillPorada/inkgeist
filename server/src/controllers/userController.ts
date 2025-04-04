import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Hash das Passwort vor dem Speichern
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const getUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;  // Hier return, um die weitere Ausführung zu stoppen
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user', error });
    }
  };
  
  export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
  
    try {
      const updatedData: any = { name, email };
      if (password) {
        updatedData.password = await bcrypt.hash(password, 10);
      }
  
      const user = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
      });
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;  // Return verhindert weiteres Ausführen
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  };
  
  export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;  // Return verhindert weiteres Ausführen
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  };
  