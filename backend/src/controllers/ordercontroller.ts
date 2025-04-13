import { Request, Response } from 'express';
import Order from '../models/order';

// Create a new Order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerId, tableNumber, orderStatus, dateTime } = req.body;
    const newOrder = new Order({ customerId, tableNumber, orderStatus, dateTime });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get all Orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate('customerId');
    res.status(200).json(orders);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
