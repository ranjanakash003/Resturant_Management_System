import { Request, Response } from 'express';
import Menu from '../models/Menuitem';

// Create a new Menu item
export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, category, price, availability } = req.body;
    const newMenuItem = new Menu({ name, category, price, availability });
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
  
};

// Get all Menu items
export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
