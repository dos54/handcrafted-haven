"use client";

import { useEffect, useState } from "react";
import { ProductList } from "../data/productsList";
import { ProductCard } from "./productCard";
import ProductYoutube from "./productYoutube";
import axios from "axios";

type Product = {
  _id: string;
  //userId?: string; uncomment when there is a user Login
  productname: string;
  price: number;
  productPicture: string;
  quantity: number;
  category: string;
  description: string;
  likes?: number;
};


export default function SearchAvailableProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] =  useState<Product[]>([]); //product list

  useEffect(()=>{
    async function getProducs() {
        try {
            const {data} = await axios.get("/api/product")
            setProductList(data);
            console.log(data)
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    getProducs();
  }, [])
  

    const filteredProducts = productList.filter((prod) =>
        prod.productname && prod.productname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <div>
        {/* Search Input */}
        <div className="px-4 mt-5 mb-10 flex justify-center items-center">
            <input
                className="border-1 border-gray-300 w-full max-w-[35rem] outline-none rounded-l-lg text-gray-900 p-[0.50rem] bg-gray-100"
                type="text"
                placeholder="Search available products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i
                className="p-[0.64rem] rounded-r-2xl hover:bg-blue-800 bg-blue-600 text-gray-200 transition 100 ease-in-out fa fa-search"
                style={{ fontSize: "20px" }}
            ></i>
        </div>
    
        <ProductYoutube/>

        {/* Product List */}
        <h2 className="mt-15 px-10 text-green-700 font-bold">{searchTerm.trim() === "" ? "Available Products" : `Available ${searchTerm}`}</h2>
        <div className="p-6 flex flex-wrap justify-around ">
            {filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => (
                <ProductCard
                key={prod._id}
                id={`${prod._id}`}
                userId={""} //update when a user
                product_name={prod.productname}
                price={prod.price}
                img={prod.productPicture}
                hover_img={"/earpod.jpg"}
                likes={4}
                />
            ))
            ) : (
                <div className="p-6 w-full bg-gray-100">
                    <p className="text-center text-gray-400 font-bold">No products found for {searchTerm}!!!</p>
                </div>
            )}
        </div>
    </div>
  );
}
