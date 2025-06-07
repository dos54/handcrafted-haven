/*===============================================
File: category.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the Category schema.
===============================================*/
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);