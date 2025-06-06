/*===============================================
File: Order.js
Author: Nadia Rodriguez
Date: June 4, 2025
Purpose: Define the Order schema.
===============================================*/
import mongoose from "mongoose";
import {OrderItemSchema} from './orderItem.js';


const OrderSchema = new mongoose.Schema({
   userId:[
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
       }
      ],
     orderItems: [OrderItem],
    shippingCost:{type: mongoose.Schema.Types.Decimal128},
    total:{type: mongoose.Schema.Types.Decimal128},
    createdAt :{type : Date},
    status: {enum: ['pending', 'paid', 'shipped', 'cancelled'],
             require :true}
})

export default mongoose.models.Order|| mongoose.model('Order', OrderSchema)
