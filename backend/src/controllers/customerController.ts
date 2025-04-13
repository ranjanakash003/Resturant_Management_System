import { Request, Response } from 'express';
import Customer from '../models/customer';

// Create customer
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ message: 'Error creating customer', error: err });
  }
};

// Get all customers
export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving customers', error: err });
  }
};
