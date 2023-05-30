import clientPromise from "lib/mongo";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const client = await clientPromise;
    const db = await client.db("sample_mflix");
    const res = await db.collection("comments").find({}).limit(10).toArray();
    return NextResponse.json(res);
  } catch (e) {
    console.error(e);
  }
  return NextResponse.json({ message: "connect" });
}
