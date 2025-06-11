/*===============================================
File: story.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the Story schema.
===============================================*/
import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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

export default mongoose.models.Story || mongoose.model('Story', StorySchema);