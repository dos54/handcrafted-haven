/*===============================================
File: SellerOrder.js
Author: Nadia Rodriguez
Date: June 4, 2025
Purpose: Define the Seller Order schema.
===============================================*/
import mongoose from "mongoose";
import { OrderItemSchema } from './order-item.ts';
import { AddressSchema } from './address.ts';

const SellerOrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [OrderItemSchema],
  shippingAddress: AddressSchema,
  totalSalePrice: {
    type: mongoose.Schema.Types.Decimal128,
    min: 0
  }
}, {
  timestamps: true
});

export default mongoose.models.Seller || mongoose.model('Seller', SellerOrderSchema);
