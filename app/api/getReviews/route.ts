import { NextResponse } from "next/server";
import getReviews from "./getReview";
export async function GET(request: Request) {
  // const reviews = await getReviews();
  return NextResponse.json([{name: "huy", summary:"summary 1"},{name: "nhat", summary:"summary 2"}]);
}
