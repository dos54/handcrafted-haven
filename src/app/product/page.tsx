export const dynamic = "force-dynamic"

import Link from "next/link";
import Image from "next/image";
import GeneralReviewUi from "./components/generalReviews";
import TopTenLikes from "./components/topProducts";
import ContactProducers from "./components/contactProducers";
import ReviewForm from "./components/reviewForm";
import SearchAvailableProducts from "./components/searchAvailableProducts";
import Image from "next/image";


export default function Products(){
    return(
        <div className="max-w-[90vw] mx-auto">
           <div className="grid md:grid-cols-[1fr_4fr] items-center">
            
                <h2 className="pt-6 pb-0 px-4 md:p-10 text-green-700 text-2xl font-black mb-2">PRODUCTS</h2>
                
            </div>


            {/* Available Products */}
            <SearchAvailableProducts/>
            

            {/* Reviews */}       
            <div className="max-w-[70rem] mx-1 md:mx-5 mb-12 md:mx-auto p-2 md:p-10 md:grid grid-cols-2 justify-items-center items-center md:items-start gap-4 border-2 border-gray-200 rounded-lg">
                <h2 className="mb-5 py-1 text-[#F46B27] font-extrabold col-span-2 justify-self-start">Reviews</h2>
                <div className="md:mx-0 w-full">                
                    <GeneralReviewUi/>
                    <ReviewForm/>
                </div>

                {/* Contact */}
                <div className="review mt-14 md:mt-0 w-full h-full md:h-110 p-3 md:flex justify-center rounded-lg items-end">
                    <div className="text-center md:mx-2 w-24 h-24 rounded-full border-2 border-white overflow-hidden">


                        <Image width={200} height={200}
                            className="w-full object-center cover mixauto" src="/images_holder.png" alt="Site Onwer's picture" 
                        />

                    </div>

                    <div className="mx-auto md:mx-2 px-6 py-2 rounded-lg border-2 border-white text-white bg-[rgba(0,0,0,0.7)]">
                        <h3 className="font-bold">Hand-Craft Haven</h3><hr />
                        <small className="font-light" style={{wordSpacing: "0.25rem"}}>
                            Organisation Department Manager.
                            <br />For More Enquiries, Please <Link className="mb-3 leading-[7px] flex text-blue-300 underline text-sm" href={"/product/#contact"}>Contact Our Team</Link>
                        </small>
                    </div>
                </div>
                
            </div>
            
            {/* Top ten Products */}
            <TopTenLikes/>

            {/* Complain or report maliciousness */}
            <div id="contact" className="mt-15 mx-2 md:mx-10 px-5 py-10 md:px-20 bg-gray-100 rounded-xl shadow-lg">
                <h2 className="md:text-2xl font-bold text-red-700 mb-6 text-center">
                    Do you have Complain or Report?
                </h2>
                {/* Contact Card - Prince */}
                <ContactProducers/>
            </div>
        </div>
    )
}