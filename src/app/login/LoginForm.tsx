"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import FormField from "components/FormField/FormField";
import Button from "components/Button/Button";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [formValue, setFormValue] = useState<{ [key: string]: string }>({
    userName: "",
    password: "",
  });
  const searchParams = useSearchParams();
  const callbackFromURL = searchParams.get("callbackUrl");
  const [isLogging, setIsLogging] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValue;
    signIn("credentials", {
      email,
      password,
      callbackUrl: callbackFromURL || "/",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = { ...formValue };
    const field = e.target.name;
    const value = e.target.value;
    temp[field] = value;
    setFormValue(temp);
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-[100vh] text-white"
        autoComplete="new-password"
      >
        <div className="w-[80%] mx-auto max-w-xl flex flex-col items-center py-8 rounded-[28px] justify-center  backdrop-blur-xl border-solid border-[2px] border-white">
          <h3 className="text-5xl mb-14">Log In</h3>
          <FormField
            type="text"
            id="login-email"
            placeholder="Email..."
            name="email"
            label="Email"
            className="w-[90%] max-w-[507px] mb-[27px]"
            onChange={handleChange}
          />

          <FormField
            type="password"
            id="login-password"
            placeholder="Password..."
            name="password"
            label="Password"
            className="w-[90%] max-w-[507px]"
            onChange={handleChange}
          />
          <p className="mb-14 w-[90%] max-w-[507px] text-right mt-3 text-[#1A7FC1] text-sm italic">
            Forget password ?
          </p>

          <Button
            type="submit"
            className="bg-[#1A7FC1] w-[90%] max-w-[507px] h-16 rounded-2xl text-3xl relative"
            disabled={isLogging}
            isLoading={isLogging}
          >
            Log In
          </Button>
          <p className="mt-[27px]">
            Don &apos;t have account?{" "}
            <Link href="/signup" className="text-[#1A7FC1] ">
              Register
            </Link>
          </p>
        </div>
      </form>
      <Button
        className="bg-[#1A7FC1] w-[500px] max-w-[507px] h-16 rounded-2xl text-3xl relative"
        disabled={isLogging}
        isLoading={isLogging}
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        Log In
      </Button>
    </>
  );
};

export default LoginForm;
