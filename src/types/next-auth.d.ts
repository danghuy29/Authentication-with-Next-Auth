import NextAuth, { DefaultUser, DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
interface ISessionUser extends DefaultJWT {
  accessToken?: string;
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User extends DefaultUser {
    /**
     * access token type
     */
    accessToken: string;
  }

  interface Session extends DefaultSession {
    user: ISessionUser;
  }
}

declare module "next-auth/jwt" {
  JWT: ISessionUser;
}
