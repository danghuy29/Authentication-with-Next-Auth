"use client";
const Authentication = () => {
  // const { getSession, logOut } = useAuthentication();
  // useEffect(() => {
  //   const handleGet = async () => {
  //     try {
  //       const session = await getSession();
  //       console.log(session);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   handleGet();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleLogOut = async () => {
    // await logOut();
  };
  return <div className="text-white text-3xl">Protected page</div>;
};

export default Authentication;
