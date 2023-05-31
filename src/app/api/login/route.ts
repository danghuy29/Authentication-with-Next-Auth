import { NextResponse } from "next/server";
import { login } from "./login";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
type IRequestBody = {
  email: string;
  password: string;
};
export async function POST(req: Request) {
  const res: IRequestBody = await req.json();
  const { email, password } = res;
  const loginResponse = await login(email);
  if (loginResponse) {
    const hashPassword = loginResponse.password;
    if (bcrypt.compareSync(password, hashPassword)) {
      const { password, ...userWithoutPass } = loginResponse;
      const accessToken = jwt.sign(
        userWithoutPass,
        process.env.NEXT_AUTH_SECRET || "",
        { expiresIn: 60 * 60 }
      );
      return NextResponse.json(
        { data: { ...userWithoutPass, accessToken } },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
    }
  }
  //handle check api here
  return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
}
