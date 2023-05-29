"use client";
import {
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";
type Props = {
  name: number;
  value?: string;
  onChange?: (data: { name: number; value: string }) => void;
  isFocus?: boolean;
  onPaste?: (data: string) => void;
  onClick?: (data: number) => void;
};
const VerifyField: React.FC<Props> = ({
  name,
  value,
  isFocus = false,
  onChange,
  onPaste,
  onClick,
}) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    const keydownData = { name, value: e?.key || "" };
    if (onChange) {
      onChange(keydownData);
    }
  };
  const handlePaste = (e: ClipboardEvent) => {
    const pasteData = e.clipboardData.getData("text");
    if (onPaste) {
      onPaste(pasteData);
    }
  };
  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setActive(false);
  };
  useEffect(() => {
    if (isFocus && inputRef?.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(1, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);
  return (
    <input
      type="text"
      maxLength={1}
      className={cn(
        "text-black w-[14%] h-14 rounded-lg text-center text-3xl outline-none",
        { "border-solid border-[#DB402A] border-[4px]": active }
      )}
      name={String(name)}
      onKeyDown={handleKeydown}
      ref={inputRef}
      defaultValue={value || ""}
      onPaste={handlePaste}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly
    />
  );
};

export default VerifyField;
