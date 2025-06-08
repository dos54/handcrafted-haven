/*===============================================
File: comment.ts
Author: Steven Thomas
Date: June 07, 2025
Purpose: Schema for comments
===============================================*/
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  authorId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  storyId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story'
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  timestamps: true
}
)

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema)