import { Mulish } from "next/font/google";
import Image from 'next/image';
import productPerProfile from "../[userId]/product";

const mulish = Mulish({
  variable: '--Mulish',
  subsets: ['latin-ext'],
  weight: '400',
});

interface Product {
  userId: string;
  description: string;
  categoryId: string[];
  slug: string;
  price: string; 
  quantity: number;
}

export default async function ProductPerProfileComponent({
  products,
}: {
  products: Product[];
}) {
  if (!products || products.length === 0) {
    return <p className={mulish.className}>No product data available.</p>;
  }

  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className="w-full max-w-[16rem] relative mb-20 bg-[#FFFFFF] p-3 shadow-lg rounded-lg md:w-72"
        >
          <div className="relative w-full h-50 group overflow-hidden rounded-t-md">
            <Image
              src="/images/pure-julia-aFuFjTGoq6U-unsplash.jpg"
              alt={product.slug || "Product image"}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              width={700}
              height={466}
            />
            <Image
              src="/images/pure-julia-aFuFjTGoq6U-unsplash.jpg"
              alt={product.slug || "Product image"}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              width={700}
              height={466}
            />
          </div>

          <div className="mt-2 relative p-1 bg-gray-100 rounded-b-lg">
            <div className="text-gray-500 font-[cursive] text-sm">
              <i className="fa fa-heart-o text-red-600"></i> 
            </div>
            <p className="text-gray-800 font-black font-mono">${product.price}</p>
            <p className="text-gray-700 font-black font-mono">{product.description}</p>
            <small className="text-gray-500 font-mono underline hover:text-gray-700">
              <a href={`mailto:${product.userId}`}>{product.userId}</a>
            </small>
            <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700 hover:bg-green-500 duration-200 ease-in-out">
              Buy
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
