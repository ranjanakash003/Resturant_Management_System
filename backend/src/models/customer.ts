import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  contact: string;
  address: string;
  reservation?: {
    tableNumber: number;
    specialRequests?: string;
  };
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  reservation: {
    type: {
      tableNumber: { type: Number },
      specialRequests: { type: String }
    },
    required: false 
  }
}, { strict: true }); 



export default mongoose.model<ICustomer>('Customer', CustomerSchema);