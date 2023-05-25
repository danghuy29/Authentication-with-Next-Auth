import Authentication from "./components/AuthenComponent/AuthenComponent";

export default function Home() {
  return (
    <main>
      Authentication with Cognito
      <Authentication />
    </main>
  );
}
