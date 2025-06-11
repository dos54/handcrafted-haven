"use client"
import { useState } from "react";
import { addGeneralReview } from "@/database/services/userService";

export default function ReviewForm(){

    const[msg, setMsg] = useState("");
    const[err, setErr] = useState("");

    const [review, setReview] = useState({
        username: "",
        comment: "",
        stars: 0
    })
    
    function handleReviewChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = e.target
        
        setReview((prev)=>({
          ...prev,
          [name]: name === "stars" ? Number(value): value,
        }))
    }


    function submiteReview(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
    
        try {
            if(!review.username || !review.comment){
                setErr('"Name" and "Comment" cannot be empty!!')

                setTimeout(()=>{
                    setErr("")
                },3000)
                
                return
            }

            const newReview = {
                username: review.username,
                comment: review.comment,
                stars: review.stars
            }

            "use server"
            addGeneralReview(newReview);
                 
            setReview({username:"", comment:"", stars:0})
            setMsg("Thank you for your REVIEW 👍👍")
        
            setTimeout(()=>{
                setMsg("")
            },3000)
            
            

        } catch (error) {
            setErr("something went wrong")
            setTimeout(()=>{
                setMsg("")
            },3000)
            console.log("something went wrong", error)
        }
    
    }




    return(
        <>
        
            <form onSubmit={submiteReview} method="POST">
                <input className="mx-auto mb-2 border-1 rounded-lg border-gray-400 p-3 w-full" type="text" name="username" placeholder="Name"
                    value={review.username}
                    onChange={handleReviewChange}
                />
                <textarea className="bg-gray-100 p-2 w-full" name="comment" placeholder="Whats's on your mind?" rows={4}
                    value={review.comment}
                    onChange={handleReviewChange}
                ></textarea>
                <div>
                    <label className="pl-2 text-gray-500" htmlFor="rating">Rate Site Activities: </label>
                    <input className="bg-gray-200 inline outline-green-700 border-2 border-gray-300 text-center rounded-lg m-2" 
                        type="number" 
                        name="stars" 
                        min={0} 
                        max={5} 
                        value={review.stars}
                        onChange={handleReviewChange}
                    />
                    <small className="m-[2px] block md:inline bg-white text-[10px] text-red-700 p-1"><span className="font-semibold">Note:</span> Rate cannot be more than 5</small>
                </div>

                {/* Pop up Messages */}
                {msg && <p className="p-2 rounded-sm bg-green-400 text-white font-[cursive]">{msg}</p>}
                {err && <p  className="p-2 rounded-sm bg-red-700 text-white">{err}</p>}

                <button className="mx-auto p-3 w-full rounded-sm mx-2 bg-gray-900 text-white font-semibold hover:bg-gray-700 transition delay-200 cursor-pointer ease-in-out" type="submit">Comment</button>
            </form>
        
        </>
    )
}