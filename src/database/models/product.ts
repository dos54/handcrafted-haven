/*===============================================
File: product.ts
Author: Steven Thomas
Date: June 04, 2025
Purpose: Describe the purpose of this script.
===============================================*/
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  userId: { tpye: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, refs: "Category", required: true },
  slug: { type: String, required: true, unique: true},
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  quantity: { type: Number, required: true }
},
{ timestamps: true }
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
