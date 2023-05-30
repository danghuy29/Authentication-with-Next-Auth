type IRequestBody = {
  username: string;
  password: string;
};
export async function POST(req: Request) {
  const res: IRequestBody = await req.json();
  const { username, password } = res;

  //handle check api here
  return new Response(
    JSON.stringify({ username, password, message: "login success" })
  );
}
