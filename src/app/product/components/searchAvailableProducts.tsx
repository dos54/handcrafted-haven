"use client";

import { useState } from "react";
import { ProductList } from "../data/productsList";
import { ProductCard } from "./productCard";
import ProductYoutube from "./productYoutube";

export default function SearchAvailableProducts() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = ProductList.filter((prod) =>
    prod.product_name.toLowerCase().includes(searchTerm.toLowerCase())
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
                key={prod.id}
                id={prod.id}
                userId={prod.userId}
                product_name={prod.product_name}
                price={prod.price}
                img={prod.img}
                hover_img={prod.hover_img}
                likes={prod.likes}
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
