import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
}, { timestamps: true });


const GenReviewShema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: {type: String, required: true},
  rating: { type: Number },
  comment: { type: String },
}, { timestamps: true });


const ProductLikesSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });




export const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
export const ProductLike = mongoose.models.ProductLike || mongoose.model("ProductLike", ProductLikesSchema);
export const GeneralReview = mongoose.models.Review || mongoose.model("GeneralReview", GenReviewShema);

