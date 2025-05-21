/*===============================================
File: user.js
Author: Steven Thomas
Date: May 15, 2025
Purpose: Define the User schema.
===============================================*/
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { 
    type: String,
    required: true,
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Invalid email format'
    ]
   },
   password: {type: String, select: false},
   avatarUrl: {type: String, default: '/default-avatar.webp'},
   roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }
   ]
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
