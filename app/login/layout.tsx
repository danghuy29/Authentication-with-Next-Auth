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
    <div >
      {children}
    </div>
  );
}
