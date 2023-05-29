import { NextResponse } from "next/server";
export async function GET(request: Request) {
  return NextResponse.json([{name: "huy", summary:"summary 1"},{name: "nhat", summary:"summary 2"}]);
}
