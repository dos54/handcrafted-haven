import Link from "next/link"
import { ProductList, TopProducts } from "../data/productsList"
import ProductCard from "./productCard"
import "@/app/product/product.css"


export default function ProductUi(){
    const topIds = TopProducts.map(item => item.id)
    const filterProduct = ProductList.filter(topProduct => topIds.includes(topProduct.id))

    return(
        <>
            <h2 className="pt-6 pb-0 px-4 md:p-10 text-green-700 text-2xl font-black mb-2">PRODUCTS</h2>

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

                            />
                        )
                    })
                }
            </div>

             {/* Reviews */}       
            <div className="max-w-[70rem] mx-5 mb-12 md:mx-auto p-2 md:p-10 md:grid grid-cols-2 justify-items-center items-center md:items-start gap-4 border-2 border-gray-200 rounded-lg">
                <h2 className="mb-5 py-1 text-[#F46B27] font-extrabold col-span-2 justify-self-start">Reviews</h2>
                <div className="md:mx-0">                    
                    <div className="p-2 md:p-6 bg-gray-100 h-80 overflow-y-auto mb-5">
                        <div className="p-2 mb-6 bg-white rounded-lg">
                            <p className="text-gray-500 font-semibold">Mike Adenuga</p>
                            <small className="mt-[-30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, sint unde qui quas aspernatur.</small>
                            <small>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </small>
                        </div>
                        <div className="p-2 mb-6 bg-white rounded-lg">
                            <p className="text-gray-500 font-semibold">Gift Udeme</p>
                            <small>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </small>
                        </div>
                        <div className="p-2 mb-6 bg-white rounded-lg">
                            <p className="text-gray-500 font-semibold">Johnson</p>
                            <small className="mt-[-30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, sint unde qui quas aspernatur.</small>
                            <small>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </small>
                        </div>
                        <div className="p-2 mb-6 bg-white rounded-lg">
                            <p className="text-gray-500 font-semibold">Luka Moris</p>
                            <small className="mt-[-30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, sint unde qui quas aspernatur.</small>
                        </div>
                        <div className="p-2 mb-6 bg-white rounded-lg">
                            <p className="text-gray-500 font-semibold">Martins</p>
                            <small>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </small>
                        </div>
                    </div>

                    {/* form data */}
                    <form action="">
                        <input className="mx-auto mb-2 border-1 rounded-lg border-gray-400 p-3 w-full" type="text" name="username" placeholder="Name"/>
                        <textarea className="bg-gray-100 p-2 w-full" name="review" placeholder="Whats's on your mind?" rows={4}></textarea>
                        <div className="py-6 flex flex-nowrap items-center justify-start">
                            <p className="text-green-700 font-bold pr-4">Rate Us:</p>
                            <span className="w-10 fa fa-star"></span>
                            <span className="w-10 fa fa-star"></span>
                            <span className="w-10 fa fa-star"></span>
                            <span className="w-10 fa fa-star"></span>
                            <span className="w-10 fa fa-star"></span>
                        </div>
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
                            <br />For Enquiry, please <Link className="mb-3 leading-[7px] flex text-blue-300 underline text-sm" href={"/#contact"}>visit Home page</Link>
                        </small>
                    </div>
                </div>
                
            </div>

            {/* How to use Videos */}
            <h2 className="py-2 md:py-5 px-5 md:px-15 md:mt-20 text-[#F46B27] font-extrabold">Top Selling Products</h2><hr />
            <div className="pb-6 mx-2 mt-5 md:mx-15 md:mt-10 flex gap-4 md:gap-10 justify-around items-center overflow-x-auto">
                
                {
                    filterProduct.map((top)=>{
                        return(
                        <div className="w-full max-w-[12rem] max-h-[14rem] relative bg-[#ffffff] p-3 shadow-lg rounded-lg md:w-72 shadow-lg">
                            <div className="relative w-full group overflow-hidden rounded-t-md">
                                <img 
                                    src={top.img} alt={top.product_name}
                                    className=" w-full h-full object-cover hover:scale-120 transition-transform duration-500 ease-in-out"                    
                                />
                            </div>
                            <Link className="absolute top-5 right-5 bg-gray-100 rounded-lg p-1 px-4 text-gray-600 hover:underline" href={`/product/product-details/${top.id}`}>view</Link>
                            <div className="relative  p-1 bg-gray-100 rounded-b-lg">
                                <p className="text-gray-800 font-black font-mono">{top.product_name}</p>                            
                                <small className="text-gray-500 font-mono underline hover:text-gray-700"><a href={`mailto:${top.userId}`}>{top.userId}</a></small>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </>
    )
}