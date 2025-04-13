import { Request, Response } from 'express';
import OrderDetails from '../models/orderDetail';

// Create a new Order Detail
export const createOrderDetail = async (req: Request, res: Response) => {
  try {
    const { orderId, itemId, quantity, price } = req.body;
    const newOrderDetail = new OrderDetails({ orderId, itemId, quantity, price });
    await newOrderDetail.save();
    res.status(201).json(newOrderDetail);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get all Order Details
export const getOrderDetails = async (req: Request, res: Response) => {
  try {
    const orderDetails = await OrderDetails.find().populate('orderId').populate('itemId');
    res.status(200).json(orderDetails);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
