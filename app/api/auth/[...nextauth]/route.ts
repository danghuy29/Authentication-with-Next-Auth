import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.googleClientId as string,
      clientSecret: process.env.googleClientSecret as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize() {
        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          test: "testing text",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {},
});

export { handler as GET, handler as POST };
