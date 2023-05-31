"use client";
import { signIn, signOut, useSession } from "next-auth/react";
const Authentication = () => {
  const session = useSession();
  console.log(session);
  const handleLogOut = async () => {
    await signOut();
  };
  const handleLogin = async () => {
    await signIn("");
  };

  return (
    <div>
      <button
        className="text-white text-3xl bg-blue-300 w-[120px] h-16 mb-6"
        onClick={handleLogin}
      >
        Sign In
      </button>

      <br />
      <button
        className="w-[120px] h-[60px] bg-yellow-400"
        onClick={handleLogOut}
      >
        Logout
      </button>

      <br />
    </div>
  );
};

export default Authentication;
