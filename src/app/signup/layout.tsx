import { Itim } from "next/font/google";

const inter = Itim({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "Sign in",
  description: "Sign In page with cognito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
