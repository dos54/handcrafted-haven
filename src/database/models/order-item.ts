/*===============================================
File: orderItem.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the OrderItem schema.
===============================================*/
import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  sellPrice: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['fulfilled', 'pending'],
    required: true
  },
  fulfilledAt: {
    type: Date,
    required: false
  }
});

export default mongoose.models.OrderItem || mongoose.model('OrderItem', OrderItemSchema);