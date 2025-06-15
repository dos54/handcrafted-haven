"use server"

import mongoose, { isValidObjectId , Types } from "mongoose";
import User from "../models/user";
import { connectToDatabase } from "@/database";
import { GenReview, Review } from "@/app/product/data/productsList";
import { GeneralReview } from "../models/productReview";

/** Returns a read-only User object. */
export async function getUserByEmailForRead(email: string) {
  await connectToDatabase()
  return await User.findOne({email: email}).lean()
}

/** Returns an editable user object. Save using (object).save() */
export async function getUserByEmailForUpdate(email: string) {
  await connectToDatabase()
  return await User.findOne({email: email})
}

export async function getUserByIdForUpdate(userId: string) {
  await connectToDatabase()
  if (isValidObjectId(userId)) {
    return await User.findById(userId)
  }
  else throw new Error('Invalid user ID')
}

export async function updateUserEmail(userId: string, newEmail: string) {
  const user = await getUserByIdForUpdate(userId)
  if (!user) {
    throw new Error(`User with ID ${userId} not found`)
  }
  user.email = newEmail
  await user.save()
}

// General Rewivew part...this this only for the productListing page review Do not use or modify
export async function addGeneralReview(formData: GenReview){
  try {
    await connectToDatabase()
    const newReview = new GeneralReview(formData)
    return newReview.save()

  } catch (error) {
    console.error("Failed to add review:", error);
  }
}

// Getting General Rewivew for Product listing page...this only for the product page review Do not use or modify
export async function getGeneralReviews() {
  await connectToDatabase();
  const genReview = await GeneralReview.find().lean(); 
  return genReview;
}


// //This is for adding review 
// export async function productReview(formData: Review, id: string) {
//   try {
//     if (!Types.ObjectId.isValid(id)) {
//       throw new Error("Invalid product ID");
//     }

//     const productId = new Types.ObjectId(id); // convert string to ObjectId
//     await connectToDatabase();

//     const newReview = new ReviewSchema({
//       ...formData,
//       productId, 
//     });

//     return await newReview.save();
//   } catch (error) {
//     console.error("Failed to add review:", error);
//   }
// }

// //this is getting the review
// export async function getProductReviews(productId: string) {
//   await connectToDatabase();
//   const prodReview = await ReviewSchema.findOne({productId}).lean(); 
//   return prodReview;
// }


