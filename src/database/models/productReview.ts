import mongoose from "mongoose";


const ReviewSchemas = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  stars: { type: Number,  default: 0},
  comment: { type: String, required: true},
}, { timestamps: true });


const GenReviewShema = new mongoose.Schema({
  username: {type: String, required: true},
  stars: { type: Number },
  comment: { type: String },
}, { timestamps: true });


const ProductLikesSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });




export const ReviewSchema = mongoose.models.Review || mongoose.model("Review", ReviewSchemas);
export const ProductLike = mongoose.models.ProductLike || mongoose.model("ProductLike", ProductLikesSchema);
export const GeneralReview = mongoose.models.GeneralReview || mongoose.model("GeneralReview", GenReviewShema);

