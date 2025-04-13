import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderDetail extends Document {
  orderId: mongoose.Types.ObjectId;
  itemId: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

const OrderDetailSchema: Schema = new Schema({
  orderId: { type: mongoose.Types.ObjectId, ref: 'Order', required: true },
  itemId: { type: mongoose.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

export default mongoose.model<IOrderDetail>('OrderDetail', OrderDetailSchema);
