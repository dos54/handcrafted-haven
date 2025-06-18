import { connectToDatabase } from "@/database"; //This is the database brother Steven Created
import Product from "@/database/models/product";
import Category from "@/database/models/category";
import ProductImage from "@/database/models/product-image";
import { getUserByIdForUpdate } from "@/database/services/userService"; //Use when user Id is added
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {

    try {
        //gets the token from the http
        /*const token = req.cookies.get("authToken")?.value; */ //uncomment when user Login has been added

        //Here am destructuring he data am going to recive from the front end
        const {
            productname,
            price,
            description,
            productPicture,
            category,
            quantity,
        } = await req.json(); //this converts all the recived data to Json file


        await connectToDatabase(); //This connect's to the database brother Steven Created

        //getting the userId
        /*const userId = await getUserByIdForUpdate(token as string);*/ //uncomment when user Login has been added

        //setting and getting category
        let addedCategory = await Category.findOne({name: category})
        if(!addedCategory){
            const newCategory = new Category({ name: category, description: `This Product is under the ${category} Category`});
            addedCategory = await newCategory.save();
        } 

        //adding slug
        const slug = productname.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

        //price conversion
        const decimalPrice = mongoose.Types.Decimal128.fromString(price.toString());


        //handdling errors befor putting data into the form abckend
        switch (true) {
            case !productname:
                return NextResponse.json({error:"Product Name required!"}, {status: 400})
        
            case price <= 0:
                return NextResponse.json({error:"Amount Cannot be less than 1$..."}, {status: 400})
        
            case !description:
                return NextResponse.json({error:"Describe Your Product!!!"}, {status: 400})
        
            case !productPicture:
                return NextResponse.json({error:"Product Image required!"}, {status: 400})
        
            case !category:
                return NextResponse.json({error:"Product Catigory required!"}, {status: 400})

            case quantity <= 0:
                return NextResponse.json({error:"Qty Cannot be less than 1"}, {status: 400})
        
            default:
                //Adding product to database if no errors
                const newProduct = new Product({
                    productname, 
                    price: decimalPrice, 
                    description, 
                    productPicture, // I added this to the product schema to make thimg easier to access in one goal
                    categoryId: addedCategory._id, //passing in the created category id 
                    quantity, 
                    slug,
                    /*userId*/ //uncomment when user Login has been added
                })
                const addNewProduct = await newProduct.save() // save the New Product to data base


                //this just incase you need to call just the product image
                let addedProductImage = await ProductImage.findOne({productId: addNewProduct._id})
                if(!addedProductImage){
                    const newProductAdded = new ProductImage({ productId: addNewProduct._id, imageUrl: productPicture, altText: productname});
                    addedProductImage = await newProductAdded.save();
                } 

                //return Succes message
                return NextResponse.json({msg:"Product created successfully! 👍👍"}, {status: 201})
        }

        
        
    } catch (error) {
        console.error("Error creating product:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


//Get all Prducts
export async function GET() {
  try {
    await connectToDatabase();

    const products = await Product.find({}).lean() // get all data for products

    const cleanProductsUp = products.map((prod) => ({
      ...prod,
      _id: prod._id?.toString(),
      price: parseFloat(prod.price.toString()), // 💡 safely convert Decimal128 to number
    }));

    return NextResponse.json(cleanProductsUp, { status: 200 });

  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

