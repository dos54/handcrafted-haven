/*===============================================
File: chat.js
Author: Ernest Ojakol
Date: June 04, 2025
Purpose: Define the Chat schema.
===============================================*/
import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Chat || mongoose.model('Chat', ChatSchema);