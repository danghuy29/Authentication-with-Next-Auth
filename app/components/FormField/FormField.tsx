type Props = {
  placeholder: string;
  name: string;
  label: string;
  id: string;
  type: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormField: React.FC<Props> = ({
  placeholder,
  name,
  label,
  id,
  type,
  className = "",
  onChange,
}) => {
  const container = `flex flex-col-reverse ${className}`;
  return (
    <div className={container}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-[100%] h-16 mt-4 bg-transparent outline-none border-[2px] border-solid border-white rounded-2xl py-auto px-4 placeholder-shown:opacity-50 transition-opacity duration-100 ease-linear peer focus:opacity-100"
        onChange={onChange}
        autoComplete="off"
        spellCheck={false}
        autoCapitalize="off"
      />
      <label
        htmlFor={id}
        className="peer-placeholder-shown:opacity-50 duration-100 ease-linear peer-focus:opacity-100 w-fit"
      >
        {label}
      </label>
      {/* <p className="text-[#FF3F35] italic mt-2 text-base font-extrabold">Error message</p> */}
    </div>
  );
};

export default FormField;
