// app/api/upload-image/route.ts
import { NextRequest, NextResponse } from "next/server";
import { processAndUploadImage } from "@/services/image-service";
import { Buffer } from "buffer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {

    //converting file into url fomart string
    const url = await processAndUploadImage(buffer, file.name);
    return NextResponse.json({ url });

  } catch (err) {
    console.error("Image processing failed:", err);
    return NextResponse.json({ error: "Image processing failed" }, { status: 500 });
  }
}
