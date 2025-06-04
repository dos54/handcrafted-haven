import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  
})

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema)