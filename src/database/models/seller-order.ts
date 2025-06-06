/*===============================================
File: SellerOrder.js
Author: Nadia Rodriguez
Date: June 4, 2025
Purpose: Define the Seller Order schema.
===============================================*/
import mongoose from "mongoose";
import {OrderItemSchema} from './orderItem.js';


const SellerOrderSchema = new mongoose.Schema({
    customerId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
   ],
  //  review
  orderItems: [OrderItem],
  shippingAddress: {
    fullName: String,
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    phone: String,
  },
  totalSalePrice:{type: mongoose.Schema.Types.Decimal128},
})

export default mongoose.models.Seller || mongoose.model('Seller', SellerOrderSchema)
