import { NextRequest, NextResponse } from "next/server";
import { pingDatabase } from "@/database";
import { Review } from "@/database/models/productReview";
import mongoose from "mongoose";

export async function POST(req: NextRequest){
    try {

        //const token =  req.cookies.get("authToken")?.value

        const {comment, stars} = await req.json()
        if(!comment){
            return NextResponse.json({error:"Comment cannot be empty!!!"},{status: 400})
        }

        await pingDatabase()
        // if(!token){
        //     return NextResponse.redirect(new URL("login", req.url))
        // }

        const productId = new mongoose.Types.ObjectId(`${""}`);   
        const userId = new mongoose.Types.ObjectId( `${""}`);

        const newomment = new Review({productId, userId, comment, rating:stars});
        await newomment.save();

        return NextResponse.json({message: "Product added successfully"}, {status: 200})

    } catch (error) {
        return NextResponse.json({error:"Something went wrong"}, {status: 500})
    }
}