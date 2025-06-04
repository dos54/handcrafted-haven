"use client"

import { useParams } from "next/navigation";
import React, { useState } from "react";
import { ProductList } from "../data/productsList";
import Link from "next/link";


export default function ProductDetails() {
  const params = useParams();
  const id = Number(params.id);
  const product = ProductList.find((P) => P.id === id);

  const[mainImage, setMainImage] = useState(product?.img);
  const[reviews, setReview] = useState(product?.reviews || [])

  const[msg, setMsg] = useState("");
  const[err, setErr] = useState("");

  const[likes, setLikes] = useState(product?.likes || 0)
  const[isLiked, setIsLiked] = useState(false)

  const[formData, setFormData] = useState({
    comment: "",
    stars: 0
  })


  //Likes handling
  function handleLike(){

    if (isLiked) {
    setLikes((prev) => prev - 1);  
    setIsLiked(false);
  } else {
    setLikes((prev) => prev + 1); 
    setIsLiked(true);
  }
    console.log(likes)
  }

  //Form handling
  function handleReviewChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = e.target
    
    setFormData((prev)=>({
      ...prev,
      [name]: value,
    }))
  }
  function submiteReview(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    try {
      if(!formData.comment){

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
        comment: formData.comment,
        stars: formData.stars
      }
      setReview((prev)=>([newReview, ...prev]))

      setFormData({comment:"", stars:0})
      setMsg("Thank you for your REVIEW 👍👍")
   
      setTimeout(()=>{
        setMsg("")
      },3000)

    } catch (error) {
      setMsg("something went wrong")
      setTimeout(()=>{
        setMsg("")
      },3000)
      console.log("something went wrong", error)
    }

    console.log(formData)
  }

  if (!product) {
    return <div className=" h-[50vh] flex justify-center items-center text-center mx-auto font-bold bg-gray-100"><p>Product not found...</p></div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 relative group">
          <div className="relative">
            <img
              src={mainImage}
              alt={product.product_name}
              className="rounded-lg w-full h-72 md:h-[400px] object-cover transition duration-300"
            />
            {/* Product Likes */}
            <div className="absolute bottom-5 right-5 text-gray-500 font-[cursive] text-[25px]"><i onClick={handleLike} className={`fa fa-heart ${isLiked ? "text-red-600 transform delay-200 ease-in-out":"transform delay-300 ease-in-out"}`}></i><span className="text-[15px]"> {likes}</span></div>
          
          </div>

          {/* Review FormData */}
          <div className="p-1 bg-gray-900 rounded-sm">
            <small className="px-2 bg-gray-200 rounded-sm">Share your reviews on our products 👇</small>
            <form onSubmit={submiteReview} method="POST">
            
              <textarea className="bg-gray-200 outline-green-700 mt-2 p-2 border-2 border-gray-300 rounded-lg w-full"
                name="comment" 
                placeholder="What do you think about this product😃?" 
                rows={3} 
                required
                onChange={handleReviewChange}
                value={formData.comment}
                >
                </textarea>
              <div>
                  <label className="pl-2 text-gray-200" htmlFor="rating">Rate Product: </label>
                  <input className="bg-gray-200 inline outline-green-700 border-2 border-gray-300 text-center rounded-lg m-2" 
                  type="number" 
                  name="stars" 
                  min={0} 
                  max={5} 
                  value={formData.stars}
                  onChange={handleReviewChange}
                />
                <small className="m-[2px] block md:inline bg-white text-[10px] text-red-700 p-1"><span className="font-semibold">Note:</span> Rate cannot be more than 5</small>
              </div>

              {/* Pop up Messages */}
              {msg && <p className="p-2 rounded-sm bg-green-400 text-white font-[cursive]">{msg}</p>}
              {err && <p  className="p-2 rounded-sm bg-red-700 text-white">{err}</p>}

              <button className="w-full p-2 rounded-sm bg-green-700 text-white font-semibold" type="submit">Comment</button>
            </form>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4 overflow-x-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            {product.product_name}
          </h1>
          <p className="text-red-600 text-lg py-2 px-4 bg-gray-100 rounded-lg">
            ${product.price.toLocaleString()}
          </p>
          <p className="px-4 font-semibold text-sm text-[goldenrod] bg-gray-100 rounded-lg">Seller Profile:{" "}<Link href={`#`} className="text-gray-900">User Profile</Link></p>
          <p className="text-gray-800 py-2 px-4 bg-gray-100 rounded-lg">
            {product.description}
          </p>
          <p className="px-4 font-semibold text-sm text-gray-500 bg-gray-100 rounded-lg">
            Contact:{" "}
            <a
              href={`mailto:${product.userId}`}
              className="text-blue-500 underline"
            >
              {product.userId}
            </a>
          </p>
          <button className="mx-4 mt-4 bg-green-700 hover:bg-green-900 text-white py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105">
            Buy Now
          </button>

          {/* Thumbnail Images */}
          <div className="w-full overflow-x-auto p-1 bg-gray-100 rounded-lg flex justify-center gap-4 whitespace-nowrap gap-4">
            {product.thumbnail_img.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-[4rem] h-[4rem] flex-shrink-0 rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? "border-green-600" : "border-transparent"
                }`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10 bg-green-100 p-1 md:p-3 rounded-sm">
        <h2 className="p-3 text-xl text-white font-semibold mb-4 bg-green-700 rounded-sm">
          Customer Reviews
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {product.reviews.length < 1 ? (
            <div>No reviews!</div>
          ) : (
            reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <div className="flex justify-between mb-2">
                  {/* <span className="font-bold">{review.username}</span> */}
                  <span className="text-yellow-500">
                    {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
