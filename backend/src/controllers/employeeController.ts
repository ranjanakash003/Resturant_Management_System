import { Request, Response } from 'express';
import Employee from '../models/employee';

// Create a new Employee record
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, role, contact, salary } = req.body;
    const newEmployee = new Employee({ name, role, contact, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Get all Employees
export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
