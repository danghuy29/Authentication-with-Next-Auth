import { verifyJWT } from "lib/token";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  const authorization = req?.headers?.get("authorization") || "";
  const token = authorization.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      { message: "Access token not found" },
      { status: 401 }
    );
  }
  try {
    const verifyToken = await verifyJWT(token);
  } catch (e) {
    console.log(e);
  }
  NextResponse.next();
};
export const config = { matcher: ["/api/movies"] };
export default middleware;
