import { isValidObjectId } from "mongoose";
import User from "../models/user";
import { connectToDatabase } from "@/database";

/** Returns a read-only User object. */
export async function getUserByEmailForRead(email) {
  await connectToDatabase()
  return await User.findOne({email: email}).lean()
}

/** Returns an editable user object. Save using (object).save() */
export async function getUserByEmailForUpdate(email) {
  await connectToDatabase()
  return await User.findOne({email: email})
}

export async function getUserByIdForUpdate(userId) {
  await connectToDatabase()
  if (isValidObjectId(userId)) {
    return await User.findOne({_id: userId})
  }
  else throw new Error('Invalid user ID')
}

export async function updateUserEmail(userId, newEmail) {
  const user = await getUserByIdForUpdate(userId)
  user.email = newEmail
  await user.save()
}