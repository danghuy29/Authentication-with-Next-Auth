export const metadata = {
  title: "Login",
  description: "Login page with cognito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100vh] relative bg-login bg-cover bg-[#063b72]">
      {children}
    </div>
  );
}
