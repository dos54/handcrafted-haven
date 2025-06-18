import Link from "next/link"
import Image from "next/image"

interface product{
    id: string,
    userId: string,
    product_name: string,
    price: number,
    img: string,
    hover_img: string,
    likes: number,
}

interface Topproduct{
    id: string,
    userId: string,
    product_name: string,
    img: string,
    likes: number,
}

export function ProductCard({id, userId, product_name, price, img, hover_img, likes}: product){
    return(
        <>
            <div className="w-full max-w-[16rem] relative mb-20 bg-[#FFFFFF] p-3 shadow-lg rounded-lg md:w-72 shadow-lg">
                <div className="relative w-full h-60 group overflow-hidden rounded-t-md">
                    <Image 

                        src={img} alt={product_name} fill
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"                    

                    />
                    <Image 
                        src={hover_img} alt={product_name} fill
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                        fill
                    />
                </div>
                <p className="absolute top-5 right-5 bg-red-700 rounded-lg p-2 text-gray-100">${price.toLocaleString()}</p>
                <div className="mt-2 relative  p-1 bg-gray-100 rounded-b-lg">
                    <div className="text-gray-500 font-[cursive] text-sm"><i className={`fa fa-heart-o ${likes >=1 && "text-red-600"}`}></i> {likes}</div>
                    <p className="text-gray-800 font-black font-mono">{product_name}</p>
                    <Link className="absolute right-2 top-1 text-gray-400 underline hover:text-green-600" href={`/product/${id}`}>view</Link>
                    <small className="text-gray-500 font-mono underline hover:text-gray-700"><a href={`mailto:${userId}`}>{userId}</a></small>
                    <button className="text-white mt-6 mb-2 p-2 rounded-full font-semibold w-full bg-gray-700  cursor-pointer hover:bg-green-500 duration-200 ease=in-out">Buy</button>
                </div>
            </div>
        
        </>
    )

}


export function TopProductCard({id, userId, product_name, img, likes}: Topproduct){
    return(
        <>

            <div className="w-full h-full relative bg-white p-3 shadow-lg rounded-lg">

                <div className="relative w-full h-full overflow-hidden rounded-t-md">
                    <Image
                        className="w-full object-contain hover:scale-110 transition-transform duration-500 ease-in-out"
                        src={img}
                        alt={product_name}

                        width={200}
                        height={250}

                    />
                </div>

                <Link
                className="absolute top-3 right-3 bg-gray-100 rounded-lg p-1 px-3 text-gray-600 hover:underline"
                href={`/product/${id}`}
                >
                view
                </Link>

                <div className="relative p-1 bg-gray-100 rounded-b-lg">
                    <div className="text-gray-500 font-[cursive] text-[10px]"><i className={`fa fa-heart-o ${likes >=1 && "text-red-600"}`}></i> {likes}</div>
                    <p className="text-gray-800 font-black font-mono">{product_name}</p>
                    <small className="text-gray-500 font-mono underline hover:text-gray-700">
                        <a href={`mailto:${userId}`}>{userId}</a>
                    </small>
                </div>
            </div>
        
        </>
    )

}