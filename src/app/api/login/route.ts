import { NextResponse } from "next/server";
import { login } from "./login";
import bcrypt from "bcrypt";
import { signJWT } from "lib/token";
type IRequestBody = {
  email: string;
  password: string;
};
export async function POST(req: Request) {
  const res: IRequestBody = await req.json();
  const { email, password } = res;
  const loginResponse = await login(email);
  //no user found
  if (loginResponse === null) {
    return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
  }

  // wrong password
  const { password: hashPassword, ...userWithoutPass } = loginResponse;
  if (bcrypt.compareSync(password, hashPassword) === false) {
    return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
  }

  try {
    const accessToken = await signJWT(userWithoutPass, { exp: "5min" });
    return NextResponse.json(
      { data: { ...userWithoutPass, accessToken } },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Token cannot create" },
      { status: 401 }
    );
  }
}
