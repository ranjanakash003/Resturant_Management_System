import mongoose, { Schema, Document } from 'mongoose';

export interface IBilling extends Document {
  orderId: mongoose.Types.ObjectId;
  totalAmount: number;
  paymentMethod: 'Cash' | 'Card' | 'UPI';
  status: 'Paid' | 'Unpaid';
}

const BillingSchema: Schema = new Schema({
  orderId: { type: mongoose.Types.ObjectId, ref: 'Order', required: true },
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['Cash', 'Card', 'UPI'], required: true },
  status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' }
});

export default mongoose.model<IBilling>('Billing', BillingSchema);
