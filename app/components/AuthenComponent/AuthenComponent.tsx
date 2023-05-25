"use client";
import React, { useEffect, useState } from "react";
import useAuthentication from "../../hooks/useAuthentication";

const Authentication = () => {
  const { getSession, logOut } = useAuthentication();
  useEffect(() => {
    const handleGet = async () => {
      try {
        const session = await getSession();
        console.log(session);
      } catch (e) {
        console.log(e);
      }
    };
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <div>
      authentication page
      <button
        type="submit"
        className="bg-[#1A7FC1] w-[90%] max-w-[507px] h-16 rounded-2xl text-3xl"
        onClick={handleLogOut}
      >
        logout{" "}
      </button>
    </div>
  );
};

export default Authentication;
