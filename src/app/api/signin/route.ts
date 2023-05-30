import bcrypt from "bcrypt";
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

  //handle check api here with user name and password and email;
  return new Response(
    JSON.stringify({ username, hashPassword, message: "login success", email })
  );
}
