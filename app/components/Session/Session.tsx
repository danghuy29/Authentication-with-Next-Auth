"use client";
import { SessionProvider } from "next-auth/react";
type Props = {
  children: React.ReactNode;
};
const Session: React.FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
