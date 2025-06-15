"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProductType = {
  userId?: string;
  _id: string;
  productname: string;
  description: string;
  productPicture: string;
  price:number;
  likes?: number;
  createdAt: string;
};

type Review = {
  _id: string,
  productId?: string,
  userId?: string;
  comment: string;
  stars:number;
  likes?: number;
};

export default function ProductDetails() {
  const params = useParams();
  const id = params?.id as string; 

  const [product, setProduct] = useState<ProductType | null>(null);
  const [reviews, setReviews] =  useState<Review[]>([]);

  const[formData, setFormData] = useState({
    productId: id,
    comment: "",
    stars: 0,
    likes: 0,
  })

  const[likes, setLikes] = useState(product?.likes || 0)
  const[isLiked, setIsLiked] = useState(false)

  const[loading, setLoading] = useState(false)


  const[msg, setMsg] = useState("");
  const[err, setErr] = useState("");


   //Review Form handling
  function handleReviewChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
      const {name, value} = e.target
      
      setFormData((prev)=>({
      ...prev,
      [name]: value,
      }))
  }

   //handleing Likes
  function handleLike() {
    setIsLiked((prev) => {
      const newLiked = !prev;
      const newLikes = newLiked ? likes + 1 : likes - 1;
      setLikes(newLikes);
      setFormData((prevForm) => ({
        ...prevForm,
        likes: newLikes,
      }));
      return newLiked;
    });
  }
  
  //submiting Review form data
  async function submiteReview(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    setErr("")
    setMsg("")

    try {
        
      const {data} = await axios.post("/api/product-review", formData)
      setMsg("Thank you for the Comment!!")
      setTimeout(()=>{
        setMsg("")
      }, 5000) 
      
    } catch (error) {

      if (axios.isAxiosError(error)) {
    
        setErr(error.response?.data?.error || `Something went Wrong Please Try gain later Error: ${error.message}`); //passing actuall errors

        //removing Error message
        setTimeout(()=>{
          setErr("")
        },6000)
      }
    }

    console.log(formData)
  }


  useEffect(() => {
      async function fetchSingleProduct() {
        setLoading(true);
        try {
          const { data } = await axios.get(`/api/product-details?id=${id}`);
          console.log("DATA FOR SINGLE PRODUCT:", data);
          setProduct(data.productJson);
          setFormData((prev) => ({
            ...prev,
            productId: data.productJson._id,
          }));
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }

      if (id) {
        fetchSingleProduct();
      }

      async function prodReview() {
        try {
          const { data } = await axios.get(`/api/product-review?id=${id}`);
          setReviews(data.productReviews);
          console.log("PRODUCT REVIEWS: ", data.productReviews);
        } catch (error) {
          console.log("No Reviews found", error);
        }
      }

      if (id) prodReview();
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      {product ? (
        <div className="p-2 md:p-5 my-4 md:my-10 mx-auto grid md:grid-cols-2 gap-3 justify-center items-start relative group">
          <div>
            <div className="max-w-[30rem] max-h-[30rem] mb-1 relative bg-gray-400 overflow-hidden rounded-md">
              {product?.productPicture ? (
                <Image
                  src={
                    product.productPicture.startsWith("http")
                      ? product.productPicture
                      : "/" + product.productPicture.replace(/^\/+/, "")
                  }
                  alt={product.productname}
                  width={300}
                  height={300}
                  className="w-full object-fit "
                />
              ) : (
                <p>No image available</p>
              )}

              {/* Product Likes */}
              <div className="inline absolute bottom-5 right-5 text-gray-500 font-[cursive] text-[25px]">
                <i onClick={handleLike} className={`fa fa-heart ${isLiked ? "text-red-600 transform delay-200 ease-in-out":"transform delay-300 ease-in-out"}`}></i><span className="text-[15px]"> {likes}</span>
              </div>

            </div>
            
            {/* Review FormData */}
            <div className="max-w-[30rem] max-h-[30rem] p-1 bg-gray-900 rounded-sm">
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
              {msg && <p className="w-full p-2 rounded-sm bg-green-400 text-white font-[cursive]">{msg}</p>}
              {err && <p  className="w-full p-2 rounded-sm bg-red-700 text-white">{err}</p>}

              <button className="w-full p-2 rounded-sm bg-green-700 text-white font-semibold" type="submit">Comment</button>
              </form>
            </div>

          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4 overflow-x-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              {product?.productname}
            </h1>
            <p className="text-red-600 text-lg py-2 px-4 bg-gray-100 rounded-lg">
              ${product?.price.toLocaleString()}
            </p>
            <p className="px-4 font-semibold text-sm text-[goldenrod] bg-gray-100 rounded-lg">Seller Profile:{" "}<Link href={`#`} className="text-gray-900">User Profile</Link></p>
            <p className="text-gray-800 py-2 px-4 bg-gray-100 rounded-lg">
              {product?.description}
            </p>
            <p className="px-4 font-semibold text-sm text-gray-500 bg-gray-100 rounded-lg">
              Contact:{" "}
              <a
              href={`mailto:${product?.userId}`}
              className="text-blue-500 underline"
              >
              {product?.userId}
              </a>
            </p>
            <button className="mx-4 mt-4 bg-green-700 hover:bg-green-900 text-white py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105">
              Buy Now
            </button>

            {/* Reviews List */}
            <div className="mt-4 bg-green-100">
              <h2 className="px-2 md:px-5 py-2 text-lg font-bold text-gray-700 mb-2">Customer Reviews:</h2>
              <div className="px-2 md:px-5 py-2 max-h-[30rem] overflow-y-auto">
                {reviews.length === 0 ? (
                  <p className="text-gray-500 italic">No reviews yet.</p>
                ) : (
                  reviews.map((review) => (
                    <div key={review._id} className="relative w-full p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700 font-semibold mb-1">{review.userId || "Guest"}</p>
                      <p className="text-sm text-gray-600 mb-2">{review.comment}</p>                   
                      {review.stars > 0 && <div className="text-yellow-400">{"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}</div>}                  
                      <div className="absolute top-2 right-2 text-gray-400 hover:text-red-600 cursor-pointer">
                        <i className="fa fa-trash-o"></i>
                      </div>
                      <p className="text-[10px]">Posted on: {new Date(product?.createdAt).toLocaleString()}</p>
                    </div>
                  ))
                )}

              </div>
            </div>

          </div>
      
        </div>

        ) : (
        <>
          {
          loading ?
          <div className="flex items-center justify-center h-[300px] w-full">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div> : <p className="bg-gray-200 font-semibold text-gray-700 p-5 text-center mx-auto my-10">Product Not Found</p>
          }
        </>
      )}

    </div>
  );
}
