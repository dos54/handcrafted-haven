"use client"
import { useRef, useState, useEffect } from 'react';
import { ProductList } from "../data/productsList"
import type { Product } from "../data/productsList"
import { TopProductCard } from './productCard';

export default function TopTenLikes() {
  const [topProducts, setTopProducts] = useState<Product[]>([])

  useEffect(() => {
    const sorted = [...ProductList]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 10)

    setTopProducts(sorted)
  }, [])

   // Control slider button for top 10 review
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -300 : 300,
            behavior: 'smooth',
        });
        }
    };


  return (

        <div className="relative p-1 md:px-20">
            {/* Heading */}
            <h2 className="py-2 md:py-5 px-5 md:px-15 md:mt-20 text-green-700 font-extrabold">
                Top 10 Selling Products
            </h2>
            <hr />

            {/* Scroll Buttons */}
            <button
                onClick={() => scroll('left')}
                className="hidden md:block absolute left-25 top-80 z-20 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            >
                ◀
            </button>
            <button
                onClick={() => scroll('right')}
                className="hidden md:block absolute right-25 top-80 z-10 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            >
                ▶
            </button>

            {/* TOp 10 Product List Cards */}
            <div
                ref={scrollRef}
                className="py-5 px-3 overflow-x-auto border-x-3 shadow-lg border-gray-100 mx-1 mt-5 md:mx-15 md:mt-10 flex gap-4 md:gap-10 justify-start items-start md:overflow-x-hidden scroll-smooth"
            >
                {topProducts.map((top, idx) => (
                    <TopProductCard 
                        key={idx}
                        id={top.id} 
                        userId={top.userId} 
                        product_name={top.product_name} 
                        img={top.img} 
                        likes={top.likes}
                    />
                ))}
            </div>
        </div>
  )
}
