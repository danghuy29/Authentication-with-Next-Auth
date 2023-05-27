import { Inter } from "next/font/google";
import "./globals.css";
import Session from "./components/Session/Session";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="min-h-[100vh] relative bg-login bg-cover bg-[#063b72]"
    >
      <body className={inter.className}>
        <Session>{children}</Session>
      </body>
    </html>
  );
}
