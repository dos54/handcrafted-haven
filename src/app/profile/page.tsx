import { Mulish } from "next/font/google";
import profile from "@/database/models/profile";
import product from "@/database/models/product";
import Image from 'next/image';
import {getProductByUserId} from "../../database/services/userService"
import ProductPerProfileComponent from "../profile/components/products"

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
 
  const product = await getProductByUserId(profile.userId);
 
  return (
   
    <div key={profile.userId}>
    <div className="flex max-w-lg lg:max-w-full m-7 pl-48 pt-25">
     <Image 
        src="/images/pure-julia-aFuFjTGoq6U-unsplash.jpg"
        width={700}
        height={466}
        alt="Photo Perfil of Crafty Claire"
        className="h-24 w-24 object-cover md:h-48 md:w-48 shadow-xl/30
                   rounded-t-full rounded-b-full  rounded-e-full"
      />         
      <h1 className= {`{mulish.className} font-bold mx-1 p-1 h-1 `}>{profile.userId}</h1> 
      <p className= {`{mulish.className} bg-green-100/100 rounded-lg mx-1 p-1`}><br /> Bio<br /> {profile.bio}</p>
      </div>
       <div className=" flex max-w-lg lg:max-w-full m-5  pl-45">
      <h2 className={`{mulish.className} m-2 `}>Following<br />  {profile.following}</h2>
      <h2 className={`{mulish.className} m-2 `}>Purchase History<br />  {profile.purchaseHistory}</h2>
      <p className={`{mulish.className} m-2 `}>
        Favorites<br />  {profile.favorites ? profile.favorites.length : 0} items
      </p>
      </div>
    </div>
   
    
  );
}
    

