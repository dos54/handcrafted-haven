
import { connectToDatabase } from "@/database";
import { Review } from "@/database/models/productReview";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {

    try {
        const {
            //userId
            productId, 
            comment, 
            stars, 
            likes} = await req.json();

        if(!productId){
            return NextResponse.json({error: "Product ID not found"}, {status: 400})
        }
        if(!comment){
            return NextResponse.json({error: "Comment annot be empty!"}, {status: 400})
        }

        await connectToDatabase()

        const newProductReview = new  Review({
            //userId,
            productId,
            likes,
            comment,
            stars,
        })
        await newProductReview.save()

        return NextResponse.json({msg: "Thank you the Comment"}, {status: 201})

    } catch (error) {
        return NextResponse.json({error: "Inernal Server Error"}, {status: 500})
    }
}


export async function GET(req:NextRequest) {
    const prodId = new URL(req.url).searchParams.get("id")

    if(!prodId){
        return NextResponse.json({error: "Product ID Not found"},{status: 400})
    }
    
    await connectToDatabase()

    const productReviews = await Review.find({ productId: prodId });


    if(!productReviews){
        return NextResponse.json({error: "Product Not found"},{status: 400})
    }

    return NextResponse.json({ productReviews });

}