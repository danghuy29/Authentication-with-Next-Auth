"use client";
import { useState } from "react";
import VerifyField from "../FormField/VerifyField";
import { isOneDigitNumber } from "utils/commonFunction";
import Button from "../Button/Button";
const VerifyEmail = () => {
  const [field, setField] = useState<Record<number, string>>({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const [focusInput, setFocusInput] = useState(-1);
  const handleTyping = (fieldName: number, fieldValue: string) => {
    if (field[fieldName]) {
      if (fieldName < 6) {
        setFocusInput(fieldName + 1);
        setField({ ...field, [fieldName + 1]: fieldValue });
      }
    } else {
      setField({ ...field, [fieldName]: fieldValue });
    }
  };

  const handleDelete = (fieldName: number) => {
    if (field[fieldName] !== "") {
      setField({ ...field, [fieldName]: "" });
    } else {
      if (fieldName > 1) {
        setFocusInput(fieldName - 1);
        setField({ ...field, [fieldName - 1]: "" });
      }
    }
  };

  const handleChange = (changeData: { name: number; value: string }) => {
    const { name, value } = changeData;
    if (value === "Backspace") {
      handleDelete(name);
      return;
    }
    if (isOneDigitNumber(value)) {
      handleTyping(name, value);
    }
  };

  const handlePaste = (data: string) => {
    const stringArray = data.split("");
    let isValid = true;
    const tempField = stringArray.reduce(
      (result: Record<number, string>, item, index) => {
        let fieldResult = { ...result };
        if (index < 6) {
          fieldResult[index + 1] = item;
        }
        if (index < 6 && !isOneDigitNumber(item)) {
          isValid = false;
        }
        return fieldResult;
      },
      {}
    );
    if (isValid) {
      setField(tempField);
      setFocusInput(Object.keys(tempField).length);
    }
  };
  const handleVerify = async () => {
    const verifyCode = Object.values(field).reduce(
      (result, item) => (result += item),
      ""
    );
    const userName = "";
    // await confirmSignUp(userName, verifyCode);
  };
  return (
    <div className="flex items-center justify-center h-[100vh] text-white">
      <div className="text-white w-[90%] mx-auto max-w-2xl flex flex-col h-[70%] rounded-[28px] justify-center  backdrop-blur-xl border-solid border-[2px] border-white px-4 animate-[riseUp_0.3s_ease-in-out]">
        <h1 className="text-6xl text-center">
          Please Enter Your Verification Code
        </h1>
        <p className="text-center text-lg mt-7">
          Enter the code we sent to your email
        </p>

        <div className="flex  items-center justify-between my-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <VerifyField
              key={item}
              name={item}
              onChange={handleChange}
              value={field[item] || ""}
              isFocus={focusInput === item}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <Button
          className="bg-[#1A7FC1] w-[90%] max-w-[507px] h-16 rounded-xl text-3xl mx-auto"
          onClick={handleVerify}
        >
          Submit
        </Button>
        <p className="text-center mt-3 text-cyan-600">Resend Code</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
