import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  id?: mongoose.Types.ObjectId;
  partNumber: string;
  vendorCode: string;
  description: string;
  category: string;
  division: string;
  price: number;
  images?: string[];
}

export const ProductSchema = new Schema({
  id: { type: mongoose.Types.ObjectId },
  partNumber: { type: String, required: true },
  vendorCode: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  division: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array<String>, required: false },
});

const Product = mongoose.model<IProduct>("products", ProductSchema);
export default Product;
