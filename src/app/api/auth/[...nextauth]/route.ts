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
      credentials: {
        username: { type: "text" },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username || "",
            password: credentials?.password || "",
          }),
        });

        const user = await res.json();
        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {},
});

export { handler as GET, handler as POST };
