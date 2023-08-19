import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-indigo-900 px-[0.8125rem] py-[0.875rem] rounded-lg hover:brightness-125 transition ease-in duration-150 active:brightness-75"
    >
      {props.children}
    </button>
  );
}
