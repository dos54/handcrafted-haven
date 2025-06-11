/*===============================================
File: address.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the Address schema.
===============================================*/
import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  addressName: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  isDefault: {
    type: Boolean,
    default: false
  }
});

export default mongoose.models.Address || mongoose.model('Address', AddressSchema);