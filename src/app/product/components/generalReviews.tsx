"use server"
import { getGeneralReviews } from "@/database/services/userService"


export default async function GeneralReviewUi(){

    const reviews = await getGeneralReviews()
    //console.log(reviews)

    return(
        <div className="p-2 bg-gray-100 h-80 overflow-y-auto mb-5">
            {
                [...reviews].reverse().map((rev, idx)=>{
                    return(
                        
                        <div key={idx} className="relative w-full p-2 mb-6 bg-white rounded-lg">
                            <p className="text-gray-500 font-semibold">{rev.username}</p>
                            <small className="mt-[-30px]">{rev.comment}</small>
                            <div className="p-2 mb-6 bg-white rounded-lg">
                                {rev.stars > 0 && <span className="text-xl text-[#ffa500]">{"★".repeat(rev.stars) + "☆".repeat(5 - rev.stars)}</span>}
                            </div>
                            <div className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-600"><i className="fa fa-trash-o"></i></div>
                        </div>
                    )
                })
            }    
        </div>
    )
}