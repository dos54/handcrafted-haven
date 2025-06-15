"use client"
//Please install Axios with pnpm i axios for this page to work on your system
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import axios from "axios"; //Very important import, for axios to work


type ProductFormType = {
    productname: string;
    price: number;
    quantity: number;
    description: string;
    productPicture: string | File;
    category: string;
};

export default function AddProductUi(){

    const [loading, setLoading] = useState(false); //loading to deabble button from being clicked twice
    const [sucess, setSucess] = useState("") //Succes message to tell upload of product info to back end was successfull
    const [err, setErr] = useState("") //Error message to tell the errors encountered during upload
    const [prodImg, setProdImg] = useState("");

    //Product data infos 
    const [productForm, setProductForm] = useState<ProductFormType>({
        productname: "",
        price: 0,
        quantity: 0,
        description: "",
        productPicture: "",
        category: "",
    })


    // handling the inputs
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
        const {name, value} = e.target
        setProductForm((prev)=>({...prev, [name]: value}))
    }

    //Product Picture handeling and file conversion here
    async function handleProductPicture(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        const objImg = URL.createObjectURL(file);
        setProdImg(objImg);

        setProductForm((prev) => ({
            ...prev,
            productPicture: file,
        }));
    }


    //submiting form to bact end with axios
    async function handleSubmit(e: React.FormEvent <HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setSucess("")
        setErr("")
        console.log(productForm)


        try {

            let imageUrl = "";

            // Upload image only now if it's a File
            if (productForm.productPicture instanceof File) {
                const formData = new FormData();
                formData.append("file", productForm.productPicture);

                const { data } = await axios.post("/api/image-upload", formData);
                imageUrl = data.url;
            }

            const payload = {
                ...productForm,
                productPicture: imageUrl, // Final cloud URL here
            }
            
            //sending ProductFormData with updated Product Image to back end
            const { data } = await axios.post("/api/product", payload);

            //Emptying the inputs for another freesh data entry
            setProductForm({productname:"", price: 0, description:"", productPicture:"", category:"", quantity:0,})
            setProdImg("")

            //scroll up to the top of the window to show success or error message
            window.scroll({top: 0, behavior:"smooth"})
            setSucess(data.msg) //passing in the message recived from the back end if Product data uploaded successfully

            //removing Success message
            setTimeout(()=>{
                setSucess("")
            },5000)

        } catch (error) {
            console.log("Something went wrong sending your form", error)

            //using axios to pass error messages form back end
            if (axios.isAxiosError(error)) {
                window.scroll({top: 0, behavior:"smooth"}) //scroller to top to show error messages
                setErr(error.response?.data?.error || `Something went Wrong Please Try gain later Error: ${error.message}`); //passing actuall errors

                //removing Error message
                setTimeout(()=>{
                    setErr("")
                },6000)
            }

        }finally{
            //removing loading
            setLoading(false)
        }
    }

    return(
        <div className="md:mt-5 grid md:grid-cols-2 gap-4 p-5">
            {err && <p className="text-center md:col-span-2 p-4 bg-red-700 text-white font-semibold my-4">{err}</p>}
            {sucess && <p className="text-center md:col-span-2 p-4 bg-blue-600 text-white font-semibold my-4">{sucess}</p>}

            <form className="rounded-md mx-auto max-w-[40rem] w-full p-6 md:p-8 flex flex-col justify-center bg-green-700" onSubmit={handleSubmit} method="POST">
                
                {/* PRODUCT IMAGE LOGIC */}
                <div className="mx-auto mb-15">
                    <div className="overflow-hidden mx-auto mb-2 bg-gray-200 rounded-lg">

                        <Image
                            src={prodImg || "/product_img_holder.png"} alt={"product_name"}
                            width={400}
                            height={400} 
                            className="w-[300px] h-[300px] object-cover mx-auto"                                    
                        />
                    </div>

                    <input className="mx-auto block p-2 bg-blue-700 text-white rounded-md hover:bg-blue-600" 
                        type="file" 
                        name="productPicture" 
                        required 
                        onChange={handleProductPicture}
                    />

                </div>

                {/* PRODUCT NAME */}
                <label className="text-left font-semibold text-white block" htmlFor="productname">Product Name</label>
                <input className="mb-8 block rounded-lg mt-2 bg-white w-full p-[0.65rem]"
                    type="text" 
                    name="productname" 
                    required 
                    onChange={handleChange}
                    value={productForm.productname}
                />

                {/* CATEGORY */}
                <label htmlFor="category" className="text-left font-semibold text-white block">Category</label>
                <select
                    name="category"
                    onChange={handleChange}
                    value={productForm.category}
                    className="mb-8 block rounded-lg mt-2 bg-white w-full p-[0.65rem]"
                    required
                >
                    <option value="">Select category</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="pottery">Pottery</option>
                    <option value="woodwork">Woodwork</option>
                    <option value="paintings">Paintings</option>
                    <option value="textiles">Textiles</option>
                    <option value="accessories">Accessories</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="other">Other</option>
                </select>

                {/* PRICE / AMOUNT */}
                <label className="text-left font-semibold text-white block" htmlFor="price">Amount in {"($)"}</label>
                <input className="mb-8 block rounded-lg mt-2 bg-white w-full p-[0.65rem]"
                    type="number" 
                    name="price" 
                    min={1}
                    max={100000} 
                    required
                    onChange={handleChange}
                    value={productForm.price}
                />

                {/* QUANTITY */}
                <label className="text-left font-semibold text-white block" htmlFor="quantity">Qty</label>
                <input className="w-20 mb-8 block rounded-lg mt-2 bg-white p-[0.50rem]"
                    type="number" 
                    name="quantity"
                    
                    max={100000} 
                    required
                    onChange={handleChange}
                    value={productForm.quantity}
                />

                {/* DESCRIPTION */}
                <label className="text-left font-semibold text-white block" htmlFor="description">Description</label>
                <textarea className="mb-10 block rounded-lg mt-2 bg-white w-full p-4"
                    name="description" 
                    minLength={3} 
                    cols={6} 
                    rows={5} 
                    required
                    onChange={handleChange}
                    value={productForm.description}
                ></textarea>

                
                {   loading? <div className="text-center font-semibold w-full mx-auto block p-2 bg-blue-700 text-white">Loading...</div> : 
                    <button type="submit" className="font-semibold w-full mx-auto block p-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">Add Product</button>
                }
                
            </form>

            {/* INFO */}    
            <div className="inline p-10 bg-white max-w-[35rem] max-h-[45rem] rounded-md">
                <h2 className="font-bold text-xl text-gray-600 py-3">Show your skills to the world</h2>
                <ul>
                    <li className="pb-2"><span className="font-semibold">- </span>Insert good qualiyty Images for clearity</li>
                    <li className="pb-2"><span className="font-semibold">- </span>Consider evaluating your products before adding a price tag. </li>
                    <li className="pb-2"><span className="font-semibold">- </span>Amounts for products cannot exceed 100,000 dollars</li>
                    <li className="pb-2"><span className="font-semibold">- </span>Review our Policies and agreements before you make sales</li>
                    <li className="pb-4"><span className="font-semibold">- </span>For more enquiries or complains please contact {" "}
                        <Link className="text-blue-600 underline font-bold hover:text-blue-400" href={"/product/#contact"}>Help</Link>
                    </li>
                </ul>
                <div className="grid grid-cols-2 justify-center items-center gap-2">
                    <div className="object-cover  overflow-hidden rounded-sm">
                        <Image
                        width={300}
                        height={300}
                        className="w-full" src={"/sample_image1.jpeg"} alt="art" />
                    </div>

                    <div className=" overflow-hidden rounded-sm"  >
                        <Image
                        width={300}
                        height={300}
                        className="w-full" src={"/sample_image2.jpeg"} alt="art" />
                    </div>
                    <div className=" overflow-hidden rounded-sm">
                        <Image
                        width={300}
                        height={300}
                        className="w-full" src={"/sample_image3.jpeg"} alt="art" />
                    </div>

                    <div className=" overflow-hidden rounded-sm"  >
                        <Image
                        width={300}
                        height={300}
                        className="w-full" src={"/sample_image4.webp"} alt="art" />
                    </div>
                </div>
            </div>
        </div>
    )
}