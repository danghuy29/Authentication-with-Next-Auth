import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongo";
export const authOptions: AuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.googleClientId as string,
      clientSecret: process.env.googleClientSecret as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email || "",
            password: credentials?.password || "",
          }),
        });
        const user = await res.json();
        if (user?.data) {
          return {
            id: user.data._id,
            name: user.data.user,
            email: user.data.email,
            accessToken: user.data.accessToken,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account) {
        const { email } = user;
        const res = await fetch(`${process.env.NEXT_BASE_URL}/api/loginOAuth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });
        const result = await res.json();
        const accessToken = result?.data?.accessToken;
        token.accessToken = accessToken;
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
