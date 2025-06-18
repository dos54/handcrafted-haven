
import Profile from "../models/profile";
import { connectToDatabase } from "@/database";
import { isValidObjectId } from "mongoose";

/** Returns one profile */
export async function getProfileById(userId:string) {
  await connectToDatabase()
  return await Profile.findOne({ userId }) 
  
}

export async function getOrCreateProfileByUserId(userId: string) {
  await connectToDatabase()
  if (isValidObjectId(userId)) {
    let profile = await Profile.findOne({userId: userId})

    if (!profile) {
      profile = await Profile.create({userId, bio: "Placeholder Bio"})
    }
    return profile
  }
  else throw Error()
}