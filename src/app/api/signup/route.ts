import bcrypt from "bcrypt";
import { signUp } from "./signUp";
type IRequestBody = {
  username: string;
  password: string;
  email: string;
};
export async function POST(req: Request) {
  const res: IRequestBody = await req.json();
  const { username, password, email } = res;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  try {
    const re = await signUp(username, hashPassword, email);
    if (re) {
      return new Response(JSON.stringify({ message: "user create" }));
    }
    return new Response(JSON.stringify({ message: "cannot be create" }), {
      status: 403,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Interval sever error" }), {
      status: 500,
    });
  }
  //handle check api here with user name and password and email;
}
