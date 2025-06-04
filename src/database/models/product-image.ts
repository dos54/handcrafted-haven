/*===============================================
File: productImage.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the ProductImage schema.
===============================================*/
import mongoose from "mongoose";

const ProductImageSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  }
});

export default mongoose.models.ProductImage || mongoose.model('ProductImage', ProductImageSchema);