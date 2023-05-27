import NextAuth from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

export const authOptions = {
  providers: [],
  // Configure one or more authentication providers
  // providers: [
  // CognitoProvider({
  //   clientId: process.env.cognitoClientID as string,
  //   clientSecret: process.env.cognitoClientSecret as string,
  //   issuer: process.env.cognitoIssuer,
  // }),
  // ],
  // pages: {
  //   signIn: "/login",
  //   signUp: "/signup",
  // },
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, authOptions);
};
export { handler as GET, handler as POST };
