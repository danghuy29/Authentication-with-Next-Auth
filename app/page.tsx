// import { getServerSession } from "next-auth";
import Authentication from "./components/AuthenComponent/AuthenComponent";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
export default async function Home() {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/login");
  //}
  return (
    <main>
      <Authentication />
    </main>
  );
}
