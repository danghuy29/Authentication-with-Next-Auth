"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import getMovies from "service/api/movies";

const Authentication = () => {
  const session = useSession();
  const accessToken = session?.data?.user?.accessToken || "";
  const handleLogOut = async () => {
    await signOut();
  };
  const handleLogin = async () => {
    await signIn("");
  };
  useEffect(() => {
    if (session.data) {
      const call = async () => {
        try {
          const movies = await getMovies(accessToken);
          return movies;
        } catch (e) {
          console.log(e);
        }
      };
      call();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.data]);
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
