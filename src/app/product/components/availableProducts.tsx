
// import { ProductList } from "../data/productsList"
// import {ProductCard} from "./productCard"


// export default function AvailableProducts(){
//     return(
//         <>
//             <h2 className="mt-15 px-10 text-green-700 font-bold">Available Products</h2>
//             <div className="p-6 flex flex-wrap justify-around ">
//                 {
//                     ProductList.map((prod)=>{
//                         return(
//                             <ProductCard 
//                                 key={prod.id}
//                                 id={prod.id} 
//                                 userId={prod.userId} 
//                                 product_name={prod.product_name} 
//                                 price={prod.price} 
//                                 img={prod.img} 
//                                 hover_img={prod.hover_img}
//                                 likes={prod.likes}

//                             />
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }