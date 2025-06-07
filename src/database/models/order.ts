/*===============================================
File: Order.js
Author: Nadia Rodriguez
Date: June 4, 2025
Purpose: Define the Order schema.
===============================================*/
import mongoose from "mongoose";
import { OrderItemSchema } from './order-item.ts';


const OrderSchema = new mongoose.Schema({
   userId:
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
       },
   orderItems: [OrderItemSchema],
   shippingCost:{
      type: mongoose.Schema.Types.Decimal128,
      min: 0
   },
   total:{
      type: mongoose.Schema.Types.Decimal128,
      min: 0
   },
   createdAt :{type : Date},
   status: {
      type: String,
      enum: ['pending', 'paid', 'shipped', 'cancelled'],
      required:true
   }
},
 {
   timestamps: true
 }
)

export default mongoose.models.Order|| mongoose.model('Order', OrderSchema)
