"use client"

import Link from "next/link"
import { useRef, useState } from 'react';
import { ProductList, GeneralReview } from "../data/productsList"
import TopTenLikes from "./topProducts";
import {ProductCard} from "./productCard"
import "@/app/product/product.css"


export default function ProductUi(){
    const[msg, setMsg] = useState("");
    const[err, setErr] = useState("");
    const[reviews, setReiew] = useState(GeneralReview || [])
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

            let newId: number;
            do {
            newId = Math.floor(Math.random() * 1000000); // Generate random number between 0 and 999999
            } while (reviews.some(review => review.id === newId));

            const newReview = {
                id: newId,
                username: review.username,
                comment: review.comment,
                stars: review.stars
            }
            setReiew((prev)=>([newReview, ...prev]))
            console.log(newReview)
        
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
            <div className="grid md:grid-cols-[1fr_4fr] items-center">
            
                <h2 className="pt-6 pb-0 px-4 md:p-10 text-green-700 text-2xl font-black mb-2">PRODUCTS</h2>

                {/* Search Input */}
                <div className="px-4 mt-5 mb-10 flex justify-center items-center"><input className="border-1 border-gray-300 w-full max-w-[35rem] outline-none rounded-l-lg text-gray-900 p-[0.50rem] bg-gray-100" type="text" placeholder="Search..."/><i className="p-[0.64rem] rounded-r-2xl hover:bg-blue-800 bg-blue-600 tex-gray-200 transition 100 ease-in-out fa fa-search" style={{fontSize:"20px"}}></i></div>
            </div>

            {/* Advert youtube */}
            <div className="py-2 px-0 md:px-10 md:pb-10 md:pt-2">              
                <iframe
                    className="w-full h-60 md:h-[500px]"
                    src="https://www.youtube.com/embed/yrssC_y1yuM?autoplay=1&mute=1&loop=1&playlist=yrssC_y1yuM&controls=0"
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                <small>Product Tutorials</small>
            </div><hr />

            {/* Available Products */}
            <h2 className="mt-15 px-10 text-green-700 font-bold">Available Products</h2>
            <div className="p-6 flex flex-wrap justify-around ">
                {
                    ProductList.map((prod)=>{
                        return(
                            <ProductCard 
                                key={prod.id}
                                id={prod.id} 
                                userId={prod.userId} 
                                product_name={prod.product_name} 
                                price={prod.price} 
                                img={prod.img} 
                                hover_img={prod.hover_img}
                                likes={prod.likes}

                            />
                        )
                    })
                }
            </div>

            {/* Reviews */}       
            <div className="max-w-[70rem] mx-1 md:mx-5 mb-12 md:mx-auto p-2 md:p-10 md:grid grid-cols-2 justify-items-center items-center md:items-start gap-4 border-2 border-gray-200 rounded-lg">
                <h2 className="mb-5 py-1 text-[#F46B27] font-extrabold col-span-2 justify-self-start">Reviews</h2>
                <div className="md:mx-0 w-full">                
                    <div className="p-2 bg-gray-100 h-80 overflow-y-auto mb-5">
                        {
                            reviews.map((rev)=>{
                                return(
                                    <div key={rev.id} className="relative w-full p-2 mb-6 bg-white rounded-lg">
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

                    {/*General Review form data */}
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
                </div>

                {/* Contact */}
                <div className="review mt-14 md:mt-0 w-full h-full md:h-110 p-3 md:flex justify-center rounded-lg items-end">
                    <div className="text-center md:mx-2 w-24 h-24 rounded-full border-2 border-white overflow-hidden">
                        <img className="w-full object-center cover mixauto" src="/images_holder.png" alt="Site Onwer's picture" />
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Contact Card - Prince */}
                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-800">Prince</h3>
                        <a
                            href="mailto:princenwachukwu308@gmail.com"
                            className="text-blue-600 hover:underline block mt-1 break-words"
                        >
                            princenwachukwu308@gmail.com
                        </a>
                    </div>

                    {/* Contact Card - Nadia */}
                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-800">Nadia</h3>
                        <a
                            href="mailto:nadiaaa3@gmail.com"
                            className="text-blue-600 hover:underline block mt-1 break-words"
                        >
                            nadiaaa3@gmail.com
                        </a>
                    </div>

                    {/* Contact Card - Steven */}
                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-800">Steven</h3>
                        <a
                            href="mailto:steven@example.com"
                            className="text-blue-600 hover:underline block mt-1 break-words"
                        >
                            stevenT@example.com
                        </a>
                    </div>

                    {/* Contact Card - Ernest */}
                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-800">Ernest</h3>
                        <a
                            href="mailto:ernestN@example.com"
                            className="text-blue-600 hover:underline block mt-1 break-words"
                        >
                            ernestN@example.com
                        </a>
                    </div>

                    {/* Contact Card - Vermont */}
                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-lg font-semibold text-gray-800">Vermont</h3>
                        <a
                            href="mailto:vermontG@example.com"
                            className="text-blue-600 hover:underline block mt-1 break-words"
                        >
                            vermontG@example.com
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}