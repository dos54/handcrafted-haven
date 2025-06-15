
import Profile from "../models/profile";
import { connectToDatabase } from "@/database";

/** Returns one profile */
export async function getProfileById(userId: string) {
  await connectToDatabase()
  return await Profile.findOne({ userId }) 
}

