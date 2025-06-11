/*===============================================
File: review.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the Review schema.
===============================================*/
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);