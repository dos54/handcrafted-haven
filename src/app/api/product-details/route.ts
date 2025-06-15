import { connectToDatabase } from "@/database";
import Product from "@/database/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const prodId = new URL(req.url).searchParams.get("id")
    
    if(!prodId){
        return NextResponse.json({error: "Product ID Not found"},{status: 400})
    }

    await connectToDatabase()

    const productFound = await Product.findOne({_id: prodId})

    if(!productFound){
        return NextResponse.json({error: "Product Not found"},{status: 400})
    }

    const productJson = {
        ...productFound.toObject(),
        price: parseFloat(productFound.price?.toString() || "0"),
    };

    return NextResponse.json({productJson})

} 