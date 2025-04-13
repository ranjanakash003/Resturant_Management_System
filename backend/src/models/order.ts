import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  customerId: mongoose.Types.ObjectId;
  tableNumber: number;
  orderStatus: 'Pending' | 'Preparing' | 'Completed';
  dateTime: Date;
}

const OrderSchema: Schema = new Schema({
  customerId: { type: mongoose.Types.ObjectId, ref: 'Customer', required: true },
  tableNumber: { type: Number, required: true },
  orderStatus: { type: String, enum: ['Pending', 'Preparing', 'Completed'], default: 'Pending' },
  dateTime: { type: Date, default: Date.now }
});

export default mongoose.model<IOrder>('Order', OrderSchema);
// This schema defines the structure of an order in the restaurant's database.