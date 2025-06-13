import { NextResponse } from "next/server";
import { connectToDatabase } from "@/database/index";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
