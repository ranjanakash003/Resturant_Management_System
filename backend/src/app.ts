import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import customerRoutes from './routes/customerRoutes';
import menuRoutes from './routes/menuRoutes';
import orderRoutes from './routes/orderRoutes';
import orderDetailsRoutes from './routes/orderDetailsRoutes';
import billingRoutes from './routes/billingRoutes';
import employeeRoutes from './routes/employeeRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route Mounts
app.use('/api/customers', customerRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-details', orderDetailsRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/employees', employeeRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
  });

  export default app;
