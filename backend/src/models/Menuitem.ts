import mongoose, { Schema, Document } from 'mongoose';

export interface IMenuItem extends Document {
  name: string;
  category: 'Starters' | 'Main Course' | 'Desserts' | 'Beverages';
  price: number;
  availability: boolean;
}

const MenuItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Starters', 'Main Course', 'Desserts', 'Beverages'], required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true }
});

export default mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);
// This schema defines the structure of a menu item in the restaurant's database.