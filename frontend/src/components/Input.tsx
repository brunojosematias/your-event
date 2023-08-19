import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full py-2 px-2 rounded-md font-normal outline-none shadow-md border-[2px] border-white focus:border-indigo-900 transition-colors ease-in duration-100"
    />
  );
}
