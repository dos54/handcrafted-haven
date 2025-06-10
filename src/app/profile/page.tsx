import { Mulish } from "next/font/google";
import profile from "@/database/models/profile";
import Image from 'next/image';


const mulish = Mulish({
  variable: '--Mulish',
  subsets: ['latin-ext'],
  weight: '400',
});


export default async function ProfileComponent({
  profile }: {
  profile: {
    userId: string;
    bio: string;
    favorites: string[];
    following: string[];
    purchaseHistory:string[]
  };
}) {
  if (!profile) {
    return <p className={mulish.className}>No profile data available.</p>;
  }

  return (
   
    <div key={profile.userId}> 
    <div className="flex max-w-lg lg:max-w-full">
     <Image 
        src="/images/pure-julia-aFuFjTGoq6U-unsplash.jpg"
        width={700}
        height={466}
        alt="Photo Perfil of Crafty Claire"
        className="h-24 w-24 object-cover md:h-48 md:w-48 shadow-xl/30
                   rounded-t-full rounded-b-full  rounded-e-full"
      />
      <h1 className= {`{mulish.className} font-bold`}>{profile.userId}</h1> 
      <h2 className= {`{mulish.className} bg-green-100/100`}><br /> Bio:<br /> {profile.bio}</h2>
      </div>
      
      <h2 className={mulish.className}>Following: {profile.following}</h2>
      <h2 className={mulish.className}>Purchase History: {profile.purchaseHistory}</h2>
      <p className={mulish.className}>
        Favorites: {profile.favorites ? profile.favorites.length : 0} items
      </p>
    </div>
  );
}

