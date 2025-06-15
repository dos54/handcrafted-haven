import AddProductUi from "./components/addProduct"

export default function AddProduct(){
    return(
        <div className="bg-gray-200 pt-1">
            <h1 className="text-xl ml-20 text-left font-extrabold mx-auto mt-10 mb-2 text-green-700">ADD YOUR PRODUCT</h1><hr />
            <AddProductUi/>
        </div>
    )
}