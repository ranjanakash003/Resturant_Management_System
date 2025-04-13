import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  role: string;
  contact: string;
  salary: number;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  contact: { type: String, required: true },
  salary: { type: Number, required: true }
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
