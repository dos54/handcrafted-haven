/*===============================================
File: profile.js
Author: Nadia Rodriguez
Date: June 4, 2025
Purpose: Define the Profile schema.
===============================================*/
import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  bio:{ type:String , required: true},
  favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
     ],
   following:  [
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

   ],
   purchaseHistory:[
    {
     type:mongoose.Schema.Types.ObjectId,
     ref: 'Order'
   }
]

})

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)