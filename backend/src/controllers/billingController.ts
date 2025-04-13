import { Request, Response } from 'express';
import Billing from '../models/billing';

// Create a new Billing record
export const createBilling = async (req: Request, res: Response) => {
  try {
    const { orderId, totalAmount, paymentMethod, status } = req.body;
    const newBilling = new Billing({ orderId, totalAmount, paymentMethod, status });
    await newBilling.save();
    res.status(201).json(newBilling);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get all Billing records
export const getBillings = async (req: Request, res: Response) => {
  try {
    const billings = await Billing.find().populate('orderId');
    res.status(200).json(billings);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
