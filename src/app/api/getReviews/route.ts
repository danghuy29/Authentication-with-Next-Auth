import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
    { name: "huy", summary: "summary 1" },
    { name: "nhat", summary: "summary 2" },
  ]);
}
