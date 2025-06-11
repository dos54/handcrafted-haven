import { isValidObjectId } from "mongoose";
import Product from "@/database/models/product"
import { connectToDatabase } from "@/database";

export async function getProductBySlug(slug: string) {
  await connectToDatabase()
  return await Product.findOne({slug: slug}).lean()
}