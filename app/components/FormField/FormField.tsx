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
  onChange
}) => {
  const container = `flex flex-col ${className}`;
  return (
    <div className={container}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-[100%] h-16 mt-4 bg-transparent outline-none border-[2px] border-solid border-white rounded-2xl py-auto px-4"
        onChange={onChange}
        autoComplete="off"
        spellCheck={false}
        autoCapitalize="off"
      />
    </div>
  );
};

export default FormField;
