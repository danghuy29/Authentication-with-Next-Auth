import Authentication from "components/AuthenComponent/AuthenComponent";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  return (
    <main>
      <Authentication />
    </main>
  );
}
