// app/profile/[userId]/page.tsx

import { getProfileById } from "@/database/services/profileService";
import ProfileComponent from "../../profile/page";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }: { params: { userId: string } }) {
  const profile = await getProfileById(params.userId);
  if (!profile) {
    notFound();
  }

  return <ProfileComponent profile={profile} />;
  
 
}
