import { isValidObjectId } from "mongoose";
import User from "../models/user";
import { connectToDatabase } from "@/database";

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
    return await User.findOne({_id: userId})
  }
  else throw new Error('Invalid user ID')
}

export async function updateUserEmail(userId: string, newEmail: string) {
  const user = await getUserByIdForUpdate(userId)
  user.email = newEmail
  await user.save()
}