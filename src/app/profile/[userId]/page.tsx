import { getProfileById } from "@/database/services/profileService";
import ProfileComponent from "../../profile/page";
import { notFound } from "next/navigation";

export default async function ProfilePage({
   params,
   }: { 
    params:  Promise<{ userId: string }>;
   }) {
    const { userId } = await params

  const profile = await getProfileById(userId);
  if (!profile) {
    notFound();
  }

  // return <ProfileComponent profile={profile}/>
  return <p>Profile</p>
  

}



