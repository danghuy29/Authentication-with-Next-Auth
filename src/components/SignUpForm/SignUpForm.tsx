"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormField from "../FormField/FormField";

const SignUpForm = () => {
  const [formValue, setFormValue] = useState<Record<string, string>>({
    email: "",
    userName: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formValue.userName,
        password: formValue.password,
        email: formValue.email,
      }),
    });
    const data = await res.json();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = { ...formValue };
    const field = e.target.name;
    const value = e.target.value;
    temp[field] = value;
    setFormValue(temp);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex items-center justify-center h-[100vh] text-white"
      autoComplete="new-password"
    >
      <div className="w-[80%] mx-auto max-w-xl flex flex-col items-center py-12 rounded-[28px] justify-center border-solid border-[2px] border-white backdrop-blur-xl">
        <h3 className="text-5xl mb-14">Sign up</h3>
        <FormField
          type="text"
          id="userName"
          placeholder="User name..."
          name="userName"
          label="User"
          className="w-[90%] max-w-[507px] mb-[27px]"
          onChange={handleChange}
        />
        <FormField
          type="text"
          id="email"
          placeholder="Email..."
          name="email"
          label="Email"
          className="w-[90%] max-w-[507px] mb-[27px]"
          onChange={handleChange}
        />

        <FormField
          type="password"
          id="sign-up-password"
          placeholder="Password..."
          name="sign-up-password"
          label="Password"
          className="w-[90%] max-w-[507px] mb-12"
          onChange={handleChange}
        />

        {/* <FormField
          type="password"
          id="confirm-password"
          placeholder="Confirm Password..."
          name="confirm-password"
          label="Confirm Password"
          className="w-[90%] max-w-[507px] mb-12"
          onChange={handleChange}
        /> */}
        <button
          type="submit"
          className="bg-[#1A7FC1] w-[90%] max-w-[507px] h-16 rounded-2xl text-3xl"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
